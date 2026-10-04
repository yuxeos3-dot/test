/**
 * AIEntryBridge - 非 AI 页面为标准 adfloat 提供兼容运行时。
 *
 * 20260724 仅暴露 adfloat 依赖的 $UserManager / $WinOpen / $Http；
 * AI 页面继续使用 index-ai.js，标准 adfloat.php 无需感知页面类型。
 */
(function (win, doc) {
    'use strict';

    // 20260724 AI 页面继续完全使用 index-ai.js，兼容桥只服务非 AI 页面。
    var currentPath = (win.location && win.location.pathname) || '';
    if (/^\/ai(?:\/|$)/.test(currentPath)) return;

    if (win.__AI_ENTRY_BRIDGE_LOADED__) return;
    win.__AI_ENTRY_BRIDGE_LOADED__ = true;

    var ASSET_BASE = '/usr/themes/Mirages/js/7.10.0/';
    var ASSET_VER = '?v=10';
    var CORE_SCRIPTS = [
        ASSET_BASE + 'cryptojs.js',
        ASSET_BASE + 'axios.min.js',
        ASSET_BASE + 'auth-core.js' + ASSET_VER
    ];
    var AUTH_BOOTSTRAP = ASSET_BASE + 'auth-bootstrap.js' + ASSET_VER;
    var REFRESH_PATCHED = '__aiEntryRebatePatched__';
    var coreLoading = null;
    var authLoading = null;
    var realHttp = null;
    var realUserManager = null;

    function safeToken() {
        try {
            return win.localStorage ? win.localStorage.getItem('__token__') : null;
        } catch (_) {
            return null;
        }
    }

    function isLogin() {
        try {
            if (realUserManager && typeof realUserManager.isLogin === 'function') {
                return !!realUserManager.isLogin();
            }
        } catch (_) {}
        try {
            if (win.AuthLite && typeof win.AuthLite.isLogin === 'function') {
                return !!win.AuthLite.isLogin();
            }
        } catch (_) {}
        return !!safeToken();
    }

    function findScript(src) {
        if (!doc.querySelector) return null;
        try {
            return doc.querySelector('script[src="' + src + '"]') ||
                doc.querySelector('script[data-ai-entry-src="' + src + '"]');
        } catch (_) {
            return null;
        }
    }

    function loadScript(src, ready) {
        if (ready()) return Promise.resolve();

        return new Promise(function (resolve, reject) {
            var script = findScript(src);
            var created = false;

            function onLoad() {
                if (ready()) resolve();
                else reject(new Error('loaded but unavailable: ' + src));
            }

            function onError() {
                reject(new Error('load fail: ' + src));
            }

            if (!script) {
                script = doc.createElement('script');
                script.src = src;
                script.async = false;
                script.setAttribute('data-ai-entry-src', src);
                created = true;
            }

            if (script.addEventListener) {
                script.addEventListener('load', onLoad, { once: true });
                script.addEventListener('error', onError, { once: true });
            } else {
                script.onload = onLoad;
                script.onerror = onError;
            }

            if (created) doc.head.appendChild(script);
        });
    }

    function serializeOuterParams(outerParams) {
        return Object.keys(outerParams || {}).map(function (key) {
            var value = outerParams[key];
            return encodeURIComponent(key) + '=' + encodeURIComponent(value == null ? '' : value);
        }).join('&');
    }

    function applyTransforms(transforms, data, headers) {
        if (!transforms) return data;
        var list = Array.isArray(transforms) ? transforms : [transforms];
        return list.reduce(function (body, transform) {
            return typeof transform === 'function' ? transform(body, headers) : body;
        }, data);
    }

    function prepareRequest(config) {
        var nextConfig = Object.assign({}, config || {});
        var outerParams = nextConfig.outerParams;
        delete nextConfig.outerParams;

        var query = serializeOuterParams(outerParams);
        if (!query) return nextConfig;

        var originalTransforms = nextConfig.transformRequest;
        nextConfig.transformRequest = [function (data, headers) {
            var body = applyTransforms(originalTransforms, data, headers);
            if (body == null || body === '') return query;
            return String(body) + '&' + query;
        }];
        return nextConfig;
    }

    function copyHttpSurface() {
        if (!realHttp) return;
        bridgeHttp.defaults = realHttp.defaults;
        bridgeHttp.interceptors = realHttp.interceptors;
    }

    function refreshIncludesRebate(manager) {
        return !!(manager && typeof manager.refresh === 'function' &&
            String(manager.refresh).indexOf('/api/ainew/rebate') !== -1);
    }

    function patchUserRefresh(manager) {
        if (!manager || typeof manager.refresh !== 'function' || manager[REFRESH_PATCHED]) return;

        var originalRefresh = manager.refresh;
        if (refreshIncludesRebate(manager)) {
            manager[REFRESH_PATCHED] = true;
            return;
        }

        manager.refresh = function () {
            var context = this;
            var args = arguments;
            return bridgeHttp({ url: '/api/ainew/rebate' }).catch(function () {
                return null;
            }).then(function () {
                return originalRefresh.apply(context, args);
            });
        };
        manager[REFRESH_PATCHED] = true;
    }

    function captureCore() {
        if (typeof win.$Http === 'function' && win.$Http !== bridgeHttp) {
            realHttp = win.$Http;
        }
        if (win.$UserManager && win.$UserManager !== bridgeUserManager) {
            realUserManager = win.$UserManager;
        }
        if (!realHttp) return false;

        patchUserRefresh(realUserManager);
        copyHttpSurface();
        win.$Http = bridgeHttp;
        if (realUserManager) win.$UserManager = realUserManager;
        return true;
    }

    function loadCoreScripts() {
        return loadScript(CORE_SCRIPTS[0], function () {
            return !!win.CryptoJS;
        }).then(function () {
            return loadScript(CORE_SCRIPTS[1], function () {
                return typeof win.axios !== 'undefined';
            });
        }).then(function () {
            // 20260724 auth-core 保持标准实现；加载前由兼容桥临时让出同名全局。
            if (win.$Http === bridgeHttp) {
                try {
                    delete win.$Http;
                } catch (_) {
                    win.$Http = undefined;
                }
            }
            return loadScript(CORE_SCRIPTS[2], function () {
                return typeof win.$Http === 'function' && win.$Http !== bridgeHttp;
            });
        });
    }

    function ensureCore() {
        if (captureCore()) return Promise.resolve(realHttp);
        if (coreLoading) return coreLoading;

        coreLoading = loadCoreScripts().then(function () {
            if (!captureCore()) throw new Error('auth core unavailable');
            return realHttp;
        }).catch(function (error) {
            coreLoading = null;
            exposeGlobals();
            throw error;
        });
        return coreLoading;
    }

    function ensureAuthLite() {
        if (win.AuthLite && typeof win.AuthLite.openAuthModal === 'function') {
            return Promise.resolve(win.AuthLite);
        }
        if (authLoading) return authLoading;

        authLoading = loadScript(AUTH_BOOTSTRAP, function () {
            return !!(win.AuthLite && typeof win.AuthLite.openAuthModal === 'function');
        }).then(function () {
            return win.AuthLite;
        }).catch(function (error) {
            authLoading = null;
            throw error;
        });
        return authLoading;
    }

    function bridgeHttp(config) {
        return ensureCore().then(function (http) {
            return http(prepareRequest(config));
        });
    }
    bridgeHttp.__AI_ENTRY_BRIDGE__ = true;

    ['get', 'post', 'put', 'patch', 'delete', 'request'].forEach(function (method) {
        bridgeHttp[method] = function () {
            var args = arguments;
            return ensureCore().then(function (http) {
                if (typeof http[method] !== 'function') throw new Error('http method unavailable: ' + method);
                return http[method].apply(http, args);
            });
        };
    });

    var bridgeUserManager = {
        __AI_ENTRY_BRIDGE__: true,
        isLogin: isLogin,
        refresh: function () {
            return ensureCore().then(function () {
                if (!realUserManager || typeof realUserManager.refresh !== 'function') return null;
                return realUserManager.refresh();
            });
        },
        logOut: function () {
            if (realUserManager && typeof realUserManager.logOut === 'function') {
                return realUserManager.logOut();
            }
            if (win.AuthLite && typeof win.AuthLite.logout === 'function') {
                return win.AuthLite.logout();
            }
            try {
                win.localStorage.removeItem('__token__');
            } catch (_) {}
            win.location.href = '/';
        }
    };

    function bridgeWinOpen() {
        return ensureCore().then(function () {
            return ensureAuthLite();
        }).then(function (authLite) {
            authLite.openAuthModal();
        }).catch(function () {
            if (typeof win.$Alert === 'function') win.$Alert('请先登录');
            return false;
        });
    }
    bridgeWinOpen.__AI_ENTRY_BRIDGE__ = true;

    function exposeGlobals() {
        // 20260724 两套脚本同时存在时完整 index-ai 运行时优先，避免覆盖或重复迁出。
        if (typeof win.$Http === 'function' && win.$Http !== bridgeHttp &&
            win.$UserManager && win.$UserManager !== bridgeUserManager &&
            refreshIncludesRebate(win.$UserManager)) {
            realHttp = win.$Http;
            realUserManager = win.$UserManager;
            return;
        }

        if (!win.$UserManager || win.$UserManager === bridgeUserManager) {
            win.$UserManager = bridgeUserManager;
        } else if (win.$UserManager !== bridgeUserManager) {
            realUserManager = win.$UserManager;
            patchUserRefresh(realUserManager);
        }

        if (!win.$Http || win.$Http === bridgeHttp) {
            win.$Http = bridgeHttp;
        } else if (typeof win.$Http === 'function') {
            captureCore();
        }

        if (typeof win.$WinOpen !== 'function') win.$WinOpen = bridgeWinOpen;
    }

    function isAiEntryClick(event) {
        var target = event && event.target;
        if (!target || typeof target.closest !== 'function') return false;
        return !!target.closest('.ai-link-ad[data-id]');
    }

    // 20260724 在 window 捕获阶段先补齐兼容全局，再进入 adfloat 的 document 点击处理。
    win.addEventListener('click', function (event) {
        if (isAiEntryClick(event)) exposeGlobals();
    }, true);

    // 等普通页鉴权脚本完成初始化后再常驻暴露，避免被误判为完整 AI 页面。
    if (doc.readyState === 'complete') {
        setTimeout(exposeGlobals, 0);
    } else {
        win.addEventListener('load', exposeGlobals, { once: true });
    }
})(window, document);
