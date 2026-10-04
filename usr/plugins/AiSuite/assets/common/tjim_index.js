(function (win, doc) {
    const __token__ = localStorage.getItem('__token__');
    const ___USER__OAUTHID = localStorage.getItem('___USER__OAUTHID');
    if (!__token__ || !___USER__OAUTHID) return;
    const IM_API_BASE = win.AI_API_BASE_URL || "https://apt2.qaz1sw2d.com/api.php";
    const IM_ASSET_BASE = IM_API_BASE.replace(/[^/]*$/, '');
    const AD_NOTIFY = 'ad_notify';  // 推送消息-广告分类
    const SY_NOTIFY = 'sy_notify';  // 推送消息-系统通知分类
    const MSG_CENTER_URL = '/ai/msg-center/';  // 消息中心url
    const ad_list_Id = "msg-arch-banner-container";  // 广告列表
    const announcementList_card_Id = "announcementList-card";  // 消息中心页面公告卡片
    const sentinel_class_name = 'msg-arch-sentinel';  // 加载更多标志元素
    const avatar_dot_class_name = 'avatar_notice_dot';  // 用户头像红点
    const user_profile_card = 'user_profile_card';  // 用户个人信息卡片
    const msg_center_badge_class = 'msg-center-banner__badge';  // 消息中心tab页面红点
    const msg_arch_item_class = 'msg-arch-item';  // 消息列表单项公告
    const ad_notice_dot_class = 'notice_dot'; // 广告红点
    let position_name = '';
    let position = '';
    // ───────── 初始化 SDK ─────────
    TJIM.init({
        tjServer: {
            api: IM_API_BASE,
        },
        business: {                                         		// 业务监控/存储
            monitorType: {                                  		// 监控类型 → 派发的 window 事件名
                'SYSTEM_BROADCAST': 'TJIM_SYSTEM_BROADCAST',
                'SYSTEM_NOTIFY': 'TJIM_SYSTEM_BROADCAST',
                'AD_NOTIFY': 'TJIM_SYSTEM_BROADCAST',
                'SYSTEM_NOTICE': 'TJIM_SYSTEM_BROADCAST'
            },
        },
    });
    // ───────── 接口请求示例：TJIM.http({ url, method, data }) → 页面加载即拉取并渲染到各自 panel ─────────
    // http 内部自动带上 __token__ + oauth 公参，并对入参加密、对响应解密，最终返回 data
    // 前置：localStorage 里要有 __token__（登录态），否则会抛「缺少登录token」

    const announcementList = document.getElementById('announcementList');
    // 广告容器不缓存引用：PJAX 局部刷新会替换该节点，需在 renderAds 内每次现查（详见下方注释）
    // ───────── 广播未读（纯 socket 推送不落库、无 id，用本地计数驱动红点） ─────────
    var BC_KEY = 'tj_broadcast_unread';
    // ───────── 已读表按账号(uid)分开存 ─────────
    // 已读 id 存在设备 localStorage：不分账号会串号；退出就清又会让同账号重登后点过的公告重新变未读。
    // 所以按 uid 分键（tj_read_ids:{uid}），退出不清，换账号互不影响。
    // uid 来源：auth-core（能解密本地用户信息）在普通页只有开登录弹窗才加载，靠不住 → 自己调 /api/user/userInfo。
    // 只在每次登录后调一次：___USER__OAUTHID 每次退出都会被删、下次登录重新生成，
    // 把 {oauth, uid} 记进 tj_read_owner，oauth 没变就直接用缓存的 uid。
    const READ_KEY_PREFIX = 'tj_read_ids';
    const READ_OWNER_KEY = 'tj_read_owner';
    let READ_KEY = '';   // 账号解析完才确定；之前 getReadMap 返回空表、saveReadMap 不写
    const resolveReadAccount = async () => {
        const rawOwner = localStorage.getItem(READ_OWNER_KEY);
        let owner = null;
        try { owner = JSON.parse(rawOwner); } catch { owner = null; }
        const sameSession = !!owner && typeof owner === 'object' && owner.oauth === ___USER__OAUTHID;
        if (sameSession && owner.uid) return String(owner.uid);

        // 本次登录会话第一次进来：广播计数是上一次登录攒的（推送不分账号），作废。
        // 同一会话里只是上次没拿到 uid 的重试，不能再清，否则每换一页广播红点就丢
        if (!sameSession) localStorage.removeItem(BC_KEY);
        let uid = '';
        try {
            const info = await TJIM.http({ url: '/api/user/userInfo', method: 'POST', data: {} });
            uid = String(info?.uid ?? info?.id ?? '');
        } catch (err) {
            console.warn('[tjim] 获取 uid 失败，已读表本次按登录会话隔离：', err);
        }
        if (!uid) {   // 退化：本次按登录会话隔离；owner 只记 oauth 不记 uid，下次进页面再试
            localStorage.setItem(READ_OWNER_KEY, JSON.stringify({ oauth: ___USER__OAUTHID, uid: '' }));
            return 'oauth_' + ___USER__OAUTHID;
        }
        localStorage.setItem(READ_OWNER_KEY, JSON.stringify({ oauth: ___USER__OAUTHID, uid }));

        // 迁移旧版不分账号的 tj_read_ids：确定是本次登录写的（旧 owner = 当前 oauth）或更早没有 owner 标记的才认领
        const legacy = localStorage.getItem(READ_KEY_PREFIX);
        if (legacy !== null) {
            const legacyMine = rawOwner === null || rawOwner === ___USER__OAUTHID;
            const key = READ_KEY_PREFIX + ':' + uid;
            if (legacyMine && localStorage.getItem(key) === null) localStorage.setItem(key, legacy);
            localStorage.removeItem(READ_KEY_PREFIX);
        }
        return uid;
    };
    // 首次访问（本设备上这个账号还没有已读表）：把现存广告全部基线化为已读，
    // 公告不做基线 —— 公告接口 list 非空则按未读计、红点亮，list 为空则不亮。
    // 在账号解析完时取一次快照——两个拉取回调先后写表，不能回调时再判
    let IS_FIRST_VISIT = false;
    const accountReady = resolveReadAccount().then((uid) => {
        READ_KEY = READ_KEY_PREFIX + ':' + uid;
        IS_FIRST_VISIT = localStorage.getItem(READ_KEY) === null;
        // 立刻落一张空表：否则首访时广告为空、也没点过公告 → 表一直不存在 → 之后每次进来都算「首访」，
        // 后台新上的广告会被当成存量基线化，红点永远不亮
        if (IS_FIRST_VISIT) saveReadMap({});
    });
    function broadcastUnread() { return parseInt(localStorage.getItem(BC_KEY) || '0', 10) || 0; }

    // HTML 转义
    const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) =>
        ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

    // URL 协议白名单：只放行 http(s)/相对路径/锚点/查询，拦截 javascript:、data:、vbscript: 等伪协议
    // esc() 只防 HTML 注入，挡不住伪协议（其字符不会被转义），href 赋值必须再过这道
    const safeUrl = (url) => {
        const s = String(url ?? '').trim();
        if (!s) return '';
        if (/^(\/|\.|#|\?)/.test(s)) return s;          // 相对路径 / 协议相对 // / 锚点 / 查询
        if (/^https?:\/\//i.test(s)) return s;          // 绝对地址只允许 http/https
        return '';                                      // 其它(含 javascript:)一律丢弃
    };

    // 相对资源补全为绝对地址（广告图）
    const assetUrl = (url) => {
        if (!url) return '';
        if (/^https?:\/\//i.test(url)) return url;
        return IM_ASSET_BASE + String(url).replace(/^\/+/, '');
    };

    // 兼容写入：box 可能是 jQuery 对象（有 .jquery / .html）或原生 DOM 元素（用 .innerHTML）
    const setBoxHTML = (box, html) => {
        if (!box) return;
        if (box.jquery) { box.html(html); }   // jQuery 对象
        else { box.innerHTML = html; }         // 原生 DOM 元素
    };

    // 占位（空 / 出错）
    const renderEmpty = (box, text) => {
        setBoxHTML(box, `
            <div class="recharge_records_nodata">
                <img src="/usr/themes/Mirages/images/ai/no_data.png?v=2" alt="暂无数据">
                <p>${esc(text || '暂无数据~')}</p>
            </div>`);
    };

    const PAGE_LIMIT = 20;
    const ADS_LIMIT = 20;   // 广告接口一次取的条数；接口不回 total，返回条数 < 它才能确定拿全了
    // 分页器跳转：page 当前页 / totalPage 总页数 / total 总条数（替代原 last_id 游标无限滚动）
    // unreadBase：公告未读数的计数基数，固定取第 1 页（接口不给未读总数）；翻页只换 items，不动它，红点数字不随页码跳
    const annState = { page: 1, totalPage: 1, total: 0, loading: false, items: [], unreadBase: [] };
    if (announcementList) { localStorage.removeItem(BC_KEY); }

    // 公告列表占位 HTML（用 li 包裹，保持 ul>li 合规）
    const ANN_LOADING_HTML = `
        <li class="msg-arch-placeholder">
            <div class="ai-list-loading-container">
                <img src="/usr/themes/Mirages/images/ai/loading.gif" alt="加载中">
                <span>加载中...</span>
            </div>
        </li>`;
    const annEmptyHTML = (text) => `
        <li class="msg-arch-placeholder">
            <div class="recharge_records_nodata">
                <img src="/usr/themes/Mirages/images/ai/no_data.png?v=2" alt="暂无数据">
                <p>${text || '暂无数据'}~</p>
            </div>
        </li>`;
    // 设置公告列表内容（分页器模式下每页整体替换渲染）
    const setAnnouncementsHTML = (html) => {
        if (announcementList) announcementList.innerHTML = html;
    };
    // 清空公告列表
    const clearAnnouncements = () => setAnnouncementsHTML('');
    // 渲染公告（整页替换；分页器模式下每页独立渲染，不再累加）
    const renderAnnouncements = (list) => {
        setAnnouncementsHTML(list.map(announcementItemHTML).join(''));
    };

    // 单条 li
    const announcementItemHTML = (it) => {
        const read = isRead('announcement', it.id);
        // type === 'router_notify' 时整条渲染成 a 链接
        const url = it?.link_url || '';
        const isLink = it?.type === 'router_notify' && !!url;
        // redirect_type: 0 无跳转 / 1 内部跳转 / 2 外部跳转
        const redirectType = Number(it?.redirect_type) || 0;
        // 只有 a 链接才加 href / target / rel，外部链接(2)才加 target 和 rel
        const tag = isLink ? 'a' : 'li';
        const linkAttr = isLink
            ? ` href="${esc(safeUrl(url))}"${redirectType === 2 ? ' target="_blank" rel="nofollow noopener noreferrer"' : ''}`
            : '';
        return `
            <${tag} class="${msg_arch_item_class} ${read ? 'is-read' : ''}" data-announcement-id="${esc(it.id)}"${linkAttr}>
                <time class="msg-arch-item__time">${esc(it?.publish_at || '')}</time>
                <article class="msg-arch-card">
                    <h3 class="msg-arch-card__title">${esc(it?.title || '系统公告')}</h3>
                    <p class="msg-arch-card__content">${esc(it?.content || '')}</p>
                    ${read ? '' : `<span class="${ad_notice_dot_class}" aria-hidden="true"></span>`}
                </article>
            </${tag}>`;
    };

    /* ========== 全局未读状态 ========== */
    window.TJ_UNREAD = {
        announcement: 0,
        ad: 0,
        get broadcast() { return broadcastUnread(); },
        get total() { return this.announcement + this.ad + this.broadcast; },
        get has() { return this.total > 0; }
    };

    // 统一更新入口：算未读、写全局、派发事件
    function refreshUnread(type, list) {
        list = Array.isArray(list) ? list : [];
        window.TJ_UNREAD[type] = list.filter(it => !isRead(type, it.id)).length;
        return syncDots();
    }

    // 按当前未读切红点显隐（头像 + 菜单，navigation.php 全站）
    function syncDots() {
        const total = window.TJ_UNREAD.total;
        const has = window.TJ_UNREAD.has;
        // 公告卡片 badge（总未读）
        const $card1 = $(`#${announcementList_card_Id}`);
        const $card2 = $(`.${user_profile_card}`);
        const $badge1 = $card1?.find(`.${msg_center_badge_class}`);
        const $badge2 = $card2?.find(`.${msg_center_badge_class}`);
        setBadge($badge1, total, true);
        setBadge($badge2, total);
        $(`.${avatar_dot_class_name}`).toggleClass('show', total > 0)
        return has;
    }

    function setBadge($el, total, show=false) {
        if ($el.length) {
            show ? $el.html(total) : $el.html('');
            $el.toggleClass('show', total > 0);
        }
    }

    // 资料卡（userProfileCard.php）由 Vue 渲染：挂载时 isLogin=false 只出加载占位，用户信息回来才渲染出
    // 消息中心红点节点。首次登录本地没缓存用户信息、要走网络，比公告接口慢 → 那次 syncDots 找不到节点，
    // 之后也没人再同步，红点一直不亮（刷新后用户信息有缓存、卡片先出来，所以只有首次复现）。
    // 这里等节点出现 / 被 Vue 换成新节点时补一次同步；状态已一致就不动，避免自身 DOM 改动引发循环。
    let badgeSyncRaf = 0;
    new MutationObserver(() => {
        if (badgeSyncRaf) return;
        badgeSyncRaf = requestAnimationFrame(() => {
            badgeSyncRaf = 0;
            const $badge = $(`.${user_profile_card} .${msg_center_badge_class}`);
            if ($badge.length && $badge.hasClass('show') !== window.TJ_UNREAD.total > 0) syncDots();
        });
    }).observe(doc.body, { childList: true, subtree: true });

    function getReadMap() {
        if (!READ_KEY) return {};
        try { return JSON.parse(localStorage.getItem(READ_KEY)) || {}; }
        catch { return {}; }
    }
    function saveReadMap(map) {
        if (!READ_KEY) return;
        localStorage.setItem(READ_KEY, JSON.stringify(map));
    }
    const READ_IDS_MAX = 500;
    // type: 'announcement' | 'ad'
    function addReadId(type, id) {
        const map = getReadMap();
        const arr = map[type] || (map[type] = []);
        if (!arr.includes(String(id))) {
            arr.push(String(id));
            if (arr.length > READ_IDS_MAX) arr.splice(0, arr.length - READ_IDS_MAX);   // 只留最近的，老 id 早已翻出列表
            saveReadMap(map);
        }
    }
    // 判断是否已读
    function isRead(type, id) {
        return (getReadMap()[type] || []).includes(String(id));
    }
    // 清理掉不在列表中的id
    function pruneReadIds(type, currentIds) {
        const map = getReadMap();
        const set = currentIds.map(String);
        map[type] = (map[type] || []).filter(id => set.includes(id));
        saveReadMap(map);
    }

    // 点击公告清除红点并刷新未读数
    // 委托到 document：容器节点可能被局部刷新替换，绑在 document 上可穿透 DOM 替换。
    $(document).off('click.announcement')
        .on('click.announcement', `#announcementList .${msg_arch_item_class}`, function () {
            const id = $(this).data('announcementId');
            if (!id) return;
            addReadId('announcement', id);
            $(this).addClass('is-read').find(`.${ad_notice_dot_class}`).remove();
            // 实时刷新未读数（按第 1 页基数算，不按当前页 DOM）
            refreshUnread('announcement', annState.unreadBase);
        });
    // 点击广告清除红点并刷新未读数
    // 委托绑定到 document：PJAX 局部刷新会换掉 #msg-arch-banner-container 节点，
    // 直接绑在缓存的 $adList 上会随旧节点失效，从 document 委托可穿透 DOM 替换。
    $(document).off('click.ad')
        .on('click.ad', `#${ad_list_Id} a`, function () {
            const id = $(this).data('read_id');
            if (!id) return;
            addReadId('ad', id);
            $(this).find(`.${ad_notice_dot_class}`).remove();
            refreshUnread('ad',
                $(`#${ad_list_Id} a`).map(function () {
                    return { id: $(this).data('read_id') };
                }).get()
            );
        });

    // 渲染广告
    var lastAds = [];
    const renderAds = (list) => {
        // 每次渲染都重新查询容器：主题用 PJAX 做局部刷新，#wrap 内的容器会被换成新节点，
        // 模块级缓存的 $adList 会指向已脱离文档的旧节点，导致 html()/removeClass 打在看不见的节点上。
        const $ad = $(`#${ad_list_Id}`);
        // 基线只对本页第一次拿到的广告生效：之后收到广播重拉出来的新广告必须亮红点
        const baseline = IS_FIRST_VISIT;
        IS_FIRST_VISIT = false;
        if (!list.length) {
            lastAds = [];
            refreshUnread('ad', []);   // 广告被下架清空时归零，否则红点残留上次的计数
            return renderEmpty($ad, '暂无广告');
        }
        lastAds = list;   // 与下方 refreshUnread('ad', list) 同口径，跨 tab 同步时才不会只算第 1 条
        if (baseline) list.forEach(function (a) { addReadId('ad', a.id); });   // 首次基线化：现存广告全部算已读，只有之后新上的才亮（放在 $ad 检查前，首页无广告卡也要生效）
        if ($ad.length) {
            $ad.html(list.map((it) => {
                const img = assetUrl(it.img_url || it.resource_url || it.thumb || it.image);
                const link = it.link_url || it.url || it.url_config || it.ads_code || '';
                const read = isRead('ad', it.id);
                return `
                        <a href="${esc(safeUrl(link))}" class="tjtagmanager"
                                data-event="ad_click"
                                data-page_key="${esc(it?.page_key || '')}"
                                data-page_name="${esc(it?.page_name || '')}"
                                data-ad_slot_key="${esc(position)}"
                                data-ad_slot_name="${esc(position_name)}"
                                data-ad_id="${esc(it?.ads_code || '')}"
                                data-creative_id="${esc(it?.id || '')}"
                                data-read_id="${esc(it?.id || '')}"
                                data-ad_type="${esc(it?.ad_type)}"
                                target="_blank"
                                rel="sponsored nofollow">
                                <img src="/usr/themes/Mirages/css/7.10.0/img-placeholder.png?v=2" z-image-loader-url="${esc(img)}" alt="${esc(it?.title || '')}">
                            <span class="msg-arch-banner__adtag" aria-hidden="true">广告</span>
                            ${read ? '' : `<span class="${ad_notice_dot_class}" aria-hidden="true"></span>`}
                        </a>`;
            }).join(''));
            $ad.removeClass('hidden');
        }
        // 只在确定拿到全部广告时清理：满 ADS_LIMIT 条说明后面可能还有，清了会把第 21 条以后的已读删掉
        //（不清也不会无限涨，addReadId 有 READ_IDS_MAX 上限）
        if (list.length < ADS_LIMIT) pruneReadIds('ad', list.map(it => it.id));
        refreshUnread('ad', list);
    };

    // 公告：POST /api/im/announcements —— 只取数 + 解析分页，不碰 DOM / annState（翻页渲染与后台刷新未读共用）
    const fetchAnnouncements = async (page) => {
        const data = await TJIM.http({
            url: '/api/im/announcements',
            method: 'POST',
            data: { page, limit: PAGE_LIMIT, publish_to: 'WEB' },
        });
        console.log('[demo] 公告 data：', data);   // 调试：确认返回结构 / list 路径
        const list = Array.isArray(data?.list) ? data.list : [];

        // 兼容多种字段名读取当前页 / 总条数 / 总页数
        const total = Number(data?.total ?? data?.total_count ?? data?.count ?? 0) || 0;
        const curPage = Number(data?.page ?? data?.current_page ?? page) || page;
        let totalPage = Number(data?.total_page ?? data?.total_pages ?? data?.totalPage ?? data?.last_page ?? 0) || 0;
        if (!totalPage) {   // 接口未直接给总页数时按总条数推算，再退化为按本页是否满页估算
            totalPage = total ? Math.ceil(total / PAGE_LIMIT)
                : (list.length < PAGE_LIMIT ? curPage : curPage + 1);
        }
        return { list, total, page: curPage, totalPage: Math.max(1, totalPage) };
    };

    // 拉取并渲染某一页（分页器跳转：整页替换渲染）
    const loadAnnouncements = async (page) => {
        if (annState.loading) return;          // 防重复请求
        const target = (typeof page === 'number' && page > 0) ? page : annState.page;
        const prevItems = annState.items;      // 失败时回滚用
        annState.loading = true;

        setAnnouncementsHTML(ANN_LOADING_HTML);   // loading 占位
        await accountReady;   // 已读表按账号分键，要先知道是谁

        try {
            const r = await fetchAnnouncements(target);
            // 成功才落状态：页码/列表/总页数一起换，失败时 annState 保持原页
            annState.total = r.total;
            annState.totalPage = r.totalPage;
            annState.page = Math.min(r.page, r.totalPage);   // 防越界
            annState.items = r.list;

            if (!r.list.length) setAnnouncementsHTML(annEmptyHTML('暂无公告'));
            else renderAnnouncements(r.list);

            renderPager();
            if (annState.page === 1) annState.unreadBase = r.list;
            refreshUnread('announcement', annState.unreadBase);
        } catch (err) {
            console.warn('[demo] 公告请求失败：', err);
            if (prevItems.length) {
                // 翻页/刷新失败：恢复原来那页的内容（页码本来就没动），提示一下即可，不拿报错页顶掉已有内容
                renderAnnouncements(prevItems);
                renderPager();
                win.$Alert?.('公告加载失败，请稍后重试');
            } else {
                // 首屏就失败：没有可恢复的内容，直接展示错误
                setAnnouncementsHTML(annEmptyHTML(`公告请求失败：${esc(err?.message || err)}`));
                renderPager();
            }
        } finally {
            annState.loading = false;
        }
    };

    // 后台只刷新未读基数（第 1 页）和总页数，不动当前列表 —— 用户停在第 N 页时收到广播用
    const refreshAnnouncementUnreadBase = async () => {
        await accountReady;
        try {
            const r = await fetchAnnouncements(1);
            annState.unreadBase = r.list;
            annState.total = r.total;
            annState.totalPage = Math.max(r.totalPage, annState.page);   // 新公告可能让总页数变多；不让它小于当前页
            renderPager();
            refreshUnread('announcement', annState.unreadBase);
        } catch (err) {
            console.warn('[demo] 后台刷新公告未读失败：', err);
        }
    };

    // ───────── 分页器（上一页 / 跳转(当前/总页) / 下一页），样式复用主题 .page-nav.page-nav-ajax ─────────
    const PAGER_ID = 'announcementPager';
    // 分页器容器：紧跟公告列表之后；不存在则创建
    const getPagerBox = () => {
        if (!announcementList) return null;
        let box = document.getElementById(PAGER_ID);
        if (!box) {
            box = document.createElement('div');
            box.id = PAGER_ID;
            box.className = 'page-nav page-nav-ajax';
            announcementList.insertAdjacentElement('afterend', box);
        }
        return box;
    };
    // 渲染分页器；无数据或仅一页时隐藏
    const renderPager = () => {
        const box = getPagerBox();
        if (!box) return;
        const { page, totalPage, items } = annState;
        if (totalPage <= 1 || items.length === 0) {
            box.innerHTML = '';
            box.classList.add('hidden');
            return;
        }
        box.classList.remove('hidden');
        // 第一页不显示「上一页」，最后一页不显示「下一页」
        const prevHTML = page > 1
            ? `<li class="prev"><a href="javascript:void(0);" data-page="${page - 1}">上一页</a></li>`
            : '';
        const nextHTML = page < totalPage
            ? `<li class="next"><a href="javascript:void(0);" data-page="${page + 1}">下一页</a></li>`
            : '';
        box.innerHTML = `
            <div class="page-jump">
                <div id="pageForm">
                    <span class="page-info">${page}/${totalPage}</span>
                    <input type="number" id="pageNum" min="1" max="${totalPage}" placeholder="${page}">
                    <button id="submitBtn" type="button">跳转</button>
                </div>
            </div>
            <ul class="page-navigator">
                ${prevHTML}
                <li><span></span></li>
                ${nextHTML}
            </ul>`;
    };
    // 跳到指定页（边界保护 + 翻页后回到列表顶部）
    const goAnnouncementPage = (n) => {
        if (annState.loading) return;
        let page = parseInt(n, 10) || 1;
        if (page < 1) page = 1;
        if (page > annState.totalPage) page = annState.totalPage;
        if (page === annState.page) return;   // 同页不重复请求
        loadAnnouncements(page).then(() => {
            announcementList?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    };
    // 分页器事件（委托到 document，穿透 PJAX 局部刷新）
    $(document).off('click.annPager')
        .on('click.annPager', `#${PAGER_ID} .prev a`, function (e) {
            e.preventDefault();
            if ($(this).closest('li').hasClass('disabled')) return;
            goAnnouncementPage($(this).data('page'));
        })
        .on('click.annPager', `#${PAGER_ID} .next a`, function (e) {
            e.preventDefault();
            if ($(this).closest('li').hasClass('disabled')) return;
            goAnnouncementPage($(this).data('page'));
        })
        .on('click.annPager', `#${PAGER_ID} #submitBtn`, function (e) {
            e.preventDefault();
            goAnnouncementPage($(this).closest('.page-jump').find('#pageNum').val());
        });
    // 跳转输入框回车
    $(document).off('keydown.annPager')
        .on('keydown.annPager', `#${PAGER_ID} #pageNum`, function (e) {
            if (e.key === 'Enter' || e.keyCode === 13) {
                e.preventDefault();
                goAnnouncementPage($(this).val());
            }
        });

    // 广告：POST /api/im/ads
    const loadAds = async () => {
        // renderEmpty($adList, '加载中…');
        await accountReady;
        try {
            let data = await TJIM.http({
                url: '/api/im/ads',
                method: 'POST',
                data: { page: 1, limit: ADS_LIMIT, publish_to: 'WEB' },  // 业务参数，token/oauth 公参自动补全
            });
            console.log('[demo] 广告：', data);
            position_name = data?.position_name || '';
            position = data?.position || '';
            renderAds(Array.isArray(data?.list) ? data.list : []);
        } catch (err) {
            console.warn('[demo] 广告请求失败：', err);
            // renderEmpty($adList, `广告请求失败：${err?.message || err}`);
        }
    };

    loadAnnouncements(1);   // 首屏拉取第一页 + 渲染分页器

    loadAds(); // 广告
        
    // 加载最新的文本消息
    const loadLatestAnnouncement = (() => {
        const queue = [];          // 待显示队列
        let isShowing = false;     // 是否正在显示
        let timeId = null;

        const showNext = () => {
            if (queue.length === 0) {
                isShowing = false;
                return;
            }
            isShowing = true;

            const message = queue.shift();
            const $bar = $(".home-announce-bar");
            const $text = $bar.find(".home-announce-text");

            let content = {};
            try { content = JSON.parse(message?.content) || {}; }
            catch { content = {}; }

            if (!$bar.length) { isShowing = false; return; }

            $text.html(esc(content?.title || '系统消息'));
            // 轮播条是同一个节点：先清掉上一条留下的新窗口/埋点属性，否则广告之后的系统消息会新窗口打开、还报 ad_click
            $bar.removeAttr('target rel data-event data-ad_type data-ad_slot_key data-ad_slot_name data-ad_id data-page_name data-page_key')
                .removeClass('tjtagmanager');
            if (content?.type === AD_NOTIFY) {
                const nz = (v) => v == null ? '' : v;
                $bar.attr('href', safeUrl(content?.link) || MSG_CENTER_URL);   // 站内广告链接也要设，原来只设了站外
                if (!isInternalLink(content?.link)) {
                    $bar.attr('target', '_blank');
                    $bar.attr('rel', 'nofollow noopener noreferrer');
                }
                $bar.attr('data-event', 'ad_click');
                $bar.attr('data-ad_type', nz(content.ad_type));
                $bar.attr('data-ad_slot_key', nz(content.position));
                $bar.attr('data-ad_slot_name', nz(content.position_name));
                $bar.attr('data-ad_id', nz(content.ads_code));
                $bar.attr('data-page_name', "im推送公告");
                $bar.attr('data-page_key', "im_ad_notify");
                $bar.addClass('tjtagmanager');
            } else {
                $bar.attr('href', MSG_CENTER_URL);
            }
            $bar.addClass('show');

            clearTimeout(timeId);
            timeId = setTimeout(() => {
                $bar.removeClass('show');
                // 当前这条满 10s，间隔一下再放下一条（可选 300ms 让隐藏动画走完）
                setTimeout(showNext, 300);
            }, 10 * 1000);
        };
        // 对外的入队函数
        return (message) => {
            queue.push(message);
            if (!isShowing) showNext();   // 空闲就立即开始，否则排队等
        };
    })();

    // 站内链接（相对路径或同域）当前页打开；站外新窗口打开
    function isInternalLink(url) {
        if (!url) return true;
        try { return new URL(url, location.href).hostname === location.hostname; }
        catch (e) { return true; }
    }

    // 跨 tab 同步：别的 tab 进消息中心清了未读/标了已读，本 tab 红点同步灭
    window.addEventListener('storage', function (e) {
        if (e.key === BC_KEY) syncDots();
        if (e.key === READ_KEY) { refreshUnread('announcement', annState.unreadBase); refreshUnread('ad', lastAds); }
    });


    // 收到广播 → 入队轮播 + 红点立刻亮 + 重拉公告/广告。
    // 红点不能依赖接口：后台「推送」是纯 socket 广播不落库（公告/广告接口查不到），
    // 所以广播本身计一条本地未读（BC_KEY），进消息中心清零；落库内容仍由重拉计数。
    window.addEventListener('TJIM_SYSTEM_BROADCAST', ({ detail: { count, message } }) => {
        console.log('[demo] 收到广播，未读累计：', count, message);
        loadLatestAnnouncement(message);
        if (!announcementList) {   // 人在公告详情页则不计：重拉直接展示并标已读
            localStorage.setItem(BC_KEY, String(broadcastUnread() + 1));
            syncDots();   // 不等接口，立刻点亮
        }
        if (!annState.loading) {   // 在拉取中则跳过：在途请求拿到的已是新数据
            if (announcementList && annState.page > 1) {
                refreshAnnouncementUnreadBase();   // 用户在翻第 N 页：不打断，只后台更新未读数/总页数
            } else {
                loadAnnouncements(1);   // 在第 1 页或不在公告列表页：直接拉最新的第 1 页
            }
        }
        loadAds();
    });

})(window,document);