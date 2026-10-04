/**
 * AuthLite - 登录/下载弹窗的轻量入口（常驻脚本，零依赖）
 *
 * 加载路径：components/footer-no-ai.php 用 defer 引入；不依赖 jQuery / CryptoJS / axios / Vue / Vant。
 *
 * 职责：
 *   1. 同步读取 localStorage 决定 header 登录/退出按钮显示，并维护 LocalConst.HAS_LOGIN。
 *   2. 头像同步（applyAvatar）：用「替换元素」方式触发 image.20260416.js 重新走解密管线。
 *   3. document click 委托：登录按钮 / 头像 / 退出 / 下载入口的统一接管，按需懒加载弹窗资源。
 *   4. 暴露 AuthLite.{openAuthModal,openDownloadModal,logout,isLogin,getThumb,syncHeaderState}。
 *   5. 暴露 win.onDownloadGuide（兼容旧 inline 调用，原由 app-download.js 提供）。
 *
 * 懒加载分两个生命周期：
 *   - 登录弹窗：cryptojs + axios + auth-core + auth-modal （/ai/ 场景下 $Http 已就绪，仅补 auth-modal）
 *   - 下载弹窗：qrcode.min + download-modal （CSS 已合并到 common.css）
 */
(function (win, doc) {
    'use strict';

    if (win.AuthLite) return;

    // localStorage 键名（USERINFO_KEY / OAUTHID_KEY 是 auth-core.js 写入的，
    // 但 logout 时即便 auth-core 从未加载也必须清干净，所以在这里硬编码）
    let TOKEN_KEY     = '__token__';
    let THUMB_KEY     = '__user_thumb__';
    let USERINFO_KEY  = '___LOCAL_USERINFO';
    let OAUTHID_KEY   = '___USER__OAUTHID';

    function safeLS(key) {
        try { return localStorage.getItem(key); } catch (e) { return null; }
    }

    let SEL_LOGIN_ENTRY    = '.side-toolbar-login-settings, .side-toolbar-login-authz';
    let SEL_USER_TARGET    = '.user_target, .avatar_btn';
    let SEL_LOGIN_BTN      = '.side-toolbar-login-settings';
    let SEL_LOGOUT_BTN     = '.side-toolbar-logout-submit';
    let SEL_DOWNLOAD_ENTRY = '#nav-side-toolbar-download, .side-toolbar-download-open';

    let LOGGED_REDIRECT = '/ai/my-recharge/';

    let ASSET_BASE = '/usr/themes/Mirages/js/7.10.0/';
    let CSS_BASE   = '/usr/themes/Mirages/css/7.10.0/';
    let ASSET_VER  = '?v=19';   // bump 此版本号可强制刷新 auth-core/auth-modal 资源缓存
    // 非 /ai/ 场景下需要全部脚本；/ai/ 场景下 $Http 等已就绪，只补 auth-modal.js
    let SCRIPTS_FULL = [
        ASSET_BASE + 'cryptojs.js',
        ASSET_BASE + 'axios.min.js',
        ASSET_BASE + 'auth-core.js' + ASSET_VER,
        ASSET_BASE + 'auth-modal.js' + ASSET_VER
    ];
    let SCRIPTS_MODAL_ONLY = [
        ASSET_BASE + 'auth-modal.js' + ASSET_VER
    ];
    let MODAL_CSS = CSS_BASE + 'auth-modal.css' + ASSET_VER;

    let SCRIPTS_DOWNLOAD = [
        ASSET_BASE + 'qrcode.min.js',
        ASSET_BASE + 'download-modal.js' + ASSET_VER
    ];
    // 下载弹窗 CSS 已合并到 common.css，无需单独懒加载

    let _loading = false;
    let _scriptsLoaded = false;
    let _downloadLoading = false;
    let _downloadLoaded = false;

    function isLogin() { return !!safeLS(TOKEN_KEY); }
    function getThumb() { return safeLS(THUMB_KEY); }

    function logout() {
        try {
            localStorage.removeItem(TOKEN_KEY);
            localStorage.removeItem(THUMB_KEY);
            localStorage.removeItem(USERINFO_KEY);
            localStorage.removeItem(OAUTHID_KEY);
            win.TJIM.cleanup();
        } catch (e) {}
        win.location.href = '/';
    }

    function loadCssOnce(href, key) {
        let marker = 'data-auth-css-' + (key || 'modal');
        if (doc.querySelector('link[' + marker + '="1"]')) return;
        let link = doc.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;
        link.setAttribute(marker, '1');
        doc.head.appendChild(link);
    }

    function loadScript(src) {
        return new Promise(function (resolve, reject) {
            if (doc.querySelector('script[data-auth-src="' + src + '"]')) {
                resolve();
                return;
            }
            let s = doc.createElement('script');
            s.src = src;
            s.async = false;
            s.setAttribute('data-auth-src', src);
            s.onload  = function () { resolve(); };
            s.onerror = function () { reject(new Error('load fail: ' + src)); };
            doc.head.appendChild(s);
        });
    }

    function loadScriptsSerial(scripts) {
        return scripts.reduce(function (p, src) {
            return p.then(function () { return loadScript(src); });
        }, Promise.resolve());
    }

    function loadAuthAssets() {
        if (_scriptsLoaded) return Promise.resolve();
        // /ai/ 场景：$Http 等已就绪，只补 auth-modal.js
        return loadScriptsSerial(win.$Http ? SCRIPTS_MODAL_ONLY : SCRIPTS_FULL)
            .then(function () { _scriptsLoaded = true; });
    }

    function openAuthModal() {
        if (_loading) return;
        if (win.__AuthModal && win.__AuthModal.opened) return;

        _loading = true;
        loadCssOnce(MODAL_CSS, 'auth');
        loadAuthAssets().then(function () {
            if (win.__AuthModal && typeof win.__AuthModal.open === 'function') {
                win.__AuthModal.open();
            }
        }).catch(function (err) {
            console.error('[AuthLite] 加载登录组件失败', err);
        }).then(function () {
            _loading = false;
        });
    }

    function loadDownloadAssets() {
        if (_downloadLoaded) return Promise.resolve();
        // qrcode.min.js 可能在 /ai/ 已加载过，loadScript 内部 data-auth-src 标记会去重
        return loadScriptsSerial(SCRIPTS_DOWNLOAD)
            .then(function () { _downloadLoaded = true; });
    }

    function openDownloadModal() {
        if (_downloadLoading) return;
        if (win.__DownloadModal && win.__DownloadModal.opened) return;

        _downloadLoading = true;
        // 下载弹窗样式已随 common.css 一并加载，仅需懒加载 JS
        loadDownloadAssets().then(function () {
            if (win.__DownloadModal && typeof win.__DownloadModal.open === 'function') {
                win.__DownloadModal.open();
            }
        }).catch(function (err) {
            console.error('[AuthLite] 加载下载组件失败', err);
        }).then(function () {
            _downloadLoading = false;
        });
    }

    // 头像同步：image.20260416.js 的 MutationObserver 只监听节点新增、不监听属性变化，
    // 所以登录态头像（需要 z-image-loader-url 解密加载）必须用「替换元素」的方式触发。
    let DEFAULT_AVATAR = '/usr/plugins/AiSuite/assets/images/avatar.png';
    function applyAvatar() {
        let imgs = doc.querySelectorAll('#user_avatar_btn img, .user_target img');
        if (!imgs.length) return;
        let token = safeLS(TOKEN_KEY);
        let thumb = safeLS(THUMB_KEY);
        let logged = !!(token && thumb);
        for (let i = 0; i < imgs.length; i++) {
            let oldImg = imgs[i];
            // 已经是目标状态则跳过，避免反复重建
            let sameUserThumb = logged
                && oldImg.classList.contains('avatar_btn_user')
                && oldImg.getAttribute('z-image-loader-url') === thumb;
            let sameDefault = !logged
                && !oldImg.classList.contains('avatar_btn_user')
                && oldImg.getAttribute('src') === DEFAULT_AVATAR;
            if (sameUserThumb || sameDefault) continue;

            let newImg = doc.createElement('img');
            newImg.setAttribute('alt', 'avatar_btn');
            if (logged) {
                newImg.className = 'avatar_btn_user';
                newImg.setAttribute('z-image-loader-url', thumb);
            } else {
                newImg.className = 'avatar_btn';
                newImg.setAttribute('src', DEFAULT_AVATAR);
            }
            if (oldImg.parentNode) oldImg.parentNode.replaceChild(newImg, oldImg);
        }
    }

    function syncHeaderState() {
        let logged = isLogin();
        doc.querySelectorAll(SEL_LOGIN_BTN).forEach(function (b) { b.style.display = logged ? 'none' : ''; });
        doc.querySelectorAll(SEL_LOGOUT_BTN).forEach(function (b) { b.style.display = logged ? '' : 'none'; });
        if (win.LocalConst) win.LocalConst.HAS_LOGIN = logged;
        applyAvatar();
    }

    function bind() {
        // /ai/ 场景：$UserManager 由 index-ai.js 提供，user.js 已经在管 header 切换和 auth 相关 click，
        // 这里 auth 部分跳过避免双触发；但 download 入口在 /ai/ 也需要我们接管。
        let skipAuth = !!win.$UserManager;
        if (!skipAuth) syncHeaderState();

        doc.addEventListener('click', function (e) {
            let t = e.target;
            if (!t || !t.closest) return;

            // 下载弹窗入口（/ai/ 与非 /ai/ 都接管）
//            if (t.closest(SEL_DOWNLOAD_ENTRY)) {
//                e.preventDefault();
//                openDownloadModal();
//                return;
//            }

            if (skipAuth) return;   // /ai/ 场景：auth 部分由 user.js 接管

            // 1) 退出登录
            if (t.closest(SEL_LOGOUT_BTN)) {
                logout();
                return;
            }
            // 2) 明确的「登录/注册」入口：直接开弹窗
            if (t.closest(SEL_LOGIN_ENTRY)) {
                e.preventDefault();
                openAuthModal();
                return;
            }
            // 3) 头像按钮：未登录开弹窗，已登录跳充值页
            if (t.closest(SEL_USER_TARGET)) {
                e.preventDefault();
                e.stopPropagation();
                if (isLogin()) {
                    win.location.href = LOGGED_REDIRECT;
                } else {
                    openAuthModal();
                }
            }
        }, false);

        // 跨窗口同步：iframe 模式登录后写 __user_thumb__ / __token__ 会触发 storage 事件
        // 登出（任何方式清 token）也会触发 → 头像复原默认
        win.addEventListener('storage', function (e) {
            if (e.key === TOKEN_KEY || e.key === THUMB_KEY) applyAvatar();
        });
    }

    // 全局 onDownloadGuide：兼容旧版 inline script 调用（原由 app-download.js 提供）
    // openDownloadModal 是同闭包函数，直接调用即可，无需绕 win.AuthLite，也无需轮询。
    win.onDownloadGuide = function () { openDownloadModal(); };
    // 消费 footer-no-ai.php inline stub 在 defer 加载完成前排队的调用
    // openDownloadModal 内部有 _downloadLoading / opened 锁，重复调用最多打开一次。
    if (Array.isArray(win.__downloadGuideQueue) && win.__downloadGuideQueue.length) {
        for (let i = 0, n = win.__downloadGuideQueue.length; i < n; i++) win.onDownloadGuide();
    }
    win.__downloadGuideQueue = null;

    // ===== 全局 Toast：让非 /ai/ 页面无需引入 vant / index-ai.js 也能用 $ShowSuccessToast 等 =====
    // 兼容 vant API 签名：可传字符串、{message, className, duration} 对象，或 loading 类型
    let _toastTimer = null;
    function _ensureToastEl() {
        let el = doc.getElementById('__al_toast__');
        if (!el) {
            el = doc.createElement('div');
            el.id = '__al_toast__';
            el.style.cssText = [
                'position:fixed', 'left:50%', 'top:40%', 'transform:translate(-50%,-50%)',
                'min-width:88px', 'max-width:70vw', 'padding:30px 20px',
                'background:rgba(0,0,0,0.78)', 'color:#fff', 'border-radius:8px',
                'font-size:14px', 'line-height:1.4', 'text-align:center',
                'z-index:99999', 'pointer-events:none', 'opacity:0',
                'transition:opacity .25s', 'box-sizing:border-box'
            ].join(';');
            doc.body.appendChild(el);
        }
        return el;
    }
    function _showToast(opts, kind) {
        let isObj = opts && typeof opts === 'object';
        let text = isObj && opts.message != null ? opts.message : (opts == null ? '' : String(opts));
        let className = isObj && opts.className ? opts.className : '';
        let duration = isObj && typeof opts.duration === 'number' ? opts.duration : 2000;
        let escaped = String(text).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        let icon = '';
        if (kind === 'success') {
            icon = '<svg viewBox="0 0 16 16" width="22" height="22" style="display:block;margin:0 auto 6px;">' +
                '<circle cx="8" cy="8" r="7" fill="none" stroke="#fff" stroke-width="1.5"/>' +
                '<path d="M4.5 8.2l2.4 2.4 4.6-4.8" fill="none" stroke="#fff" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
        } else if (kind === 'fail') {
            icon = '<svg viewBox="0 0 16 16" width="22" height="22" style="display:block;margin:0 auto 6px;">' +
                '<circle cx="8" cy="8" r="7" fill="none" stroke="#fff" stroke-width="1.5"/>' +
                '<path d="M5.5 5.5l5 5M10.5 5.5l-5 5" fill="none" stroke="#fff" stroke-width="1.6" stroke-linecap="round"/></svg>';
        }
        let el = _ensureToastEl();
        el.innerHTML = icon + '<div>' + escaped + '</div>';
        el.className = '__al_toast' + (className ? ' ' + className : '');
        el.style.opacity = '1';
        if (_toastTimer) { clearTimeout(_toastTimer); _toastTimer = null; }
        if (kind !== 'loading' && duration > 0) {
            _toastTimer = setTimeout(function () { el.style.opacity = '0'; }, duration);
        }
    }
    function _closeToast() {
        if (_toastTimer) { clearTimeout(_toastTimer); _toastTimer = null; }
        let el = doc.getElementById('__al_toast__');
        if (el) el.style.opacity = '0';
    }
    // 如果 vant 已加载（/ai/ 场景），保留 vant 实现；否则用本地 fallback
    win.$Alert            = win.$Alert            || function (o) { _showToast(o); };
    win.$MessageClose     = win.$MessageClose     || _closeToast;
    win.$MessageLoading   = win.$MessageLoading   || function (o) { _showToast(o, 'loading'); };
    win.$ShowSuccessToast = win.$ShowSuccessToast || function (o) { _showToast(o, 'success'); };
    win.$MessageSuccess   = win.$MessageSuccess   || win.$ShowSuccessToast;
    win.$showFailToast    = win.$showFailToast    || function (o) { _showToast(o, 'fail'); };

    win.AuthLite = {
        isLogin: isLogin,
        getThumb: getThumb,
        logout: logout,
        openAuthModal: openAuthModal,
        openDownloadModal: openDownloadModal,
        syncHeaderState: syncHeaderState
    };

    if (doc.readyState === 'loading') {
        doc.addEventListener('DOMContentLoaded', bind, false);
    } else {
        bind();
    }
})(window, document);
