(async function (doc, win) {

    // 悬浮轮播广告
    const onAdswiper = () => {
        const isAdswiper = () => {
            // 如果需要控制关闭, 后端这里处理(打开)
            return true;
        }

        if(!isAdswiper()) {
            return;
        }

        // 获取元素
        const adFloat = doc.getElementById("adFloat");
        if(!adFloat) {
            console.log("@获取元素失败");
            return;
        }

        // 初始显示
        adFloat.style.display = "block";

        // 滚动处理
        const slideCount = doc.querySelectorAll('.banner-swiper .swiper-slide')?.length || 0;
        new Swiper(".xqbj-component-adfloat .banner-swiper", {
            autoplay: slideCount > 1 ? {
                delay: 3000,
                disableOnInteraction: false,
            } : false,
            loop: slideCount > 1,
            pagination: {
                el: ".xqbj-component-adfloat .swiper-pagination"
            }
        })

        // 关闭处理
        doc.addEventListener('click', function(e) {
            if (e.target.closest('.on-close-btn')) {
                adFloat.style.display = "none";
                // 如果需要控制关闭, 后端这里处理(关闭)
            }
        });
    };

    // banner 轮播里 data-is_login=1 的链接：登录门 + 携带 token 跳转
    const onBannerLoginGate = () => {
        const TOKEN_KEY = '__token__';

        const getToken = () => {
            let raw;
            try { raw = localStorage.getItem(TOKEN_KEY); } catch (e) { return null; }
            if (raw == null) return null;
            // 存的是 JSON.stringify 后的字符串（带首尾引号），解一层拿明文
            try {
                const parsed = JSON.parse(raw);
                if (typeof parsed === 'string') return parsed;
            } catch (e) { /* 非 JSON，按原样处理 */ }
            return raw.replace(/^"|"$/g, '');
        };

        // 把 token 拼进目标 URL 的 query（已登录才调用）
        const withToken = (url, token) => {
            try {
                const u = new URL(url, win.location.href);
                u.searchParams.set('token', token);
                return u.toString();
            } catch (e) {
                // 相对/非法 URL 兜底
                const sep = url.indexOf('?') === -1 ? '?' : '&';
                return url + sep + 'token=' + encodeURIComponent(token);
            }
        };

        // 用捕获阶段委托，抢在 <a> 默认跳转 / swiper 处理之前拦截；
        // loop 模式下 swiper 会克隆 slide，委托天然覆盖克隆节点。
        doc.addEventListener('click', function (e) {
            const a = e.target.closest && e.target.closest('.banner-swiper .swiper-slide a');
            if (!a) return;
            // 只接管标记了需要登录的链接，其余保持原生跳转
            if (a.getAttribute('data-is_login') !== '1') return;

            e.preventDefault();
            e.stopPropagation();

            const token = getToken();
            const logged = win.AuthLite ? win.AuthLite.isLogin() : !!token;

            // 未登录：拦住，弹登录框；登录成功后 auth-modal 会整页 reload，
            // 用户再点一次即走下面的已登录分支。
            if (!logged) {
                if (win.AuthLite && win.AuthLite.openAuthModal) {
                    win.AuthLite.openAuthModal();
                }
                return;
            }

            // 已登录：携带 token 跳转
            // javascript: 伪协议（如 AI科技 入口的 javascript:void(0)）不是可跳转地址，
            // 拼 token 会被当 JS 求值报 SyntaxError，交给 ai-link-ad 的 openAiEntry 处理
            const href = a.getAttribute('href') || a.href;
            if (!href || href === '#' || href.indexOf('javascript:') === 0) return;
            const url = withToken(href, token);
            // 尊重 target="_blank"：新标签页打开，否则当前页跳转
            if (a.target === '_blank') {
                win.open(url, '_blank', 'noopener');
            } else {
                win.location.href = url;
            }
        }, true);
    };

    // 初始处理
    doc.addEventListener("DOMContentLoaded", function () {
        onAdswiper();
        onBannerLoginGate();
        /* seo优化20260413 start */
        $(doc).on('click', '.seo-nav-dropdown-toggle', function (e) {
            e.preventDefault();
            const url = $(this).data('url');
            if( url ){
                win.location.href = url;
            }
            
        });
        $('#menu-menu-1 .dropdown-toggle[data-toggle="dropdown"]')
            .off("click")
            .on("click", function (c) {
                    if(!$(this).hasClass('nav-link')) return;
                    var d = $(this).parent(".dropdown").children(".dropdown-menu");
                    var n = $(this).parent(".dropdown").children(".nav-link");
       
                    (d.hasClass("show")
                        ? d.removeClass("show") 
                        && n.removeClass("show")
                        : 
                        (   
                            d.addClass("show"),
                            n.addClass("show"),
                            setTimeout(function () {
                                var b = $("#body, .navbar");
                                b.off("click").on("click", function (a) {
                                    b.off("click");
                                    d.removeClass("show");
                                });
                            }, 100)
                        )
                    );
                    c.preventDefault();
            });
        /* seo优化20260413 end */
    })

    // 公用工具
    win['$WinRefresh'] = () => {
        // 获取当前页面的域名
        let referrerDomain = "";
        let currentDomain = window.location.hostname;
        try {
            if (document.referrer) {
                referrerDomain = new URL(document.referrer).hostname;
            }
        } catch (e) {
            console.error("无效的 referrer URL:", e);
        }
        // 跳转(站内)
        if (referrerDomain === currentDomain) {
            return false;
        } 

        // 刷新
        else if (referrerDomain === "") {
            return true;
        } 
        
        // 跳转(站外)
        else {
            return true;
        }
    }
})(document, window);

