/* 黑料头条 移动端汉堡菜单抽屉 (GitHub Pages 子路径 /test) */
(function () {
  function init() {
    var navbar = document.querySelector('#navbar.hlh-bar');
    if (!navbar || document.querySelector('.hlm-burger')) return;
    var mainWrap = navbar.querySelector('.hlh-main .hlh-wrap');
    if (!mainWrap) return;

    var burger = document.createElement('button');
    burger.className = 'hlm-burger';
    burger.setAttribute('aria-label', '打开菜单');
    burger.innerHTML = '<span></span><span></span><span></span>';
    mainWrap.insertBefore(burger, mainWrap.firstChild);

    var cats = [['/test/', '首页'], ['/test/category/jrcg/', '今日吃瓜'], ['/test/category/whhl/', '网红黑料'],
      ['/test/category/xsxy/', '学生校园'], ['/test/category/rmdg/', '热门大瓜'], ['/test/category/thjx/', '探花精选'],
      ['/test/category/fcbl/', '反差爆料'], ['/test/category/fcbn/', '反差骚女'], ['/test/category/flwh/', '福利网黄'],
      ['/test/category/hjll/', '海角乱伦'], ['/test/category/ldms/', '领导秘事'], ['/test/category/mrds/', '头条大赛'],
      ['/test/category/djcp/', '独家出品'], ['/test/category/aidj/', 'Ai成人短剧']];
    var quick = [['/test/weburl.html', '最新地址'], ['/test/app.html', 'APP下载'], ['/test/telegram.html', 'TG官方群'],
      ['/test/qun.html', 'QQ官方群'], ['/test/contribute.html', '求瓜投稿'], ['/test/48552.html', '商务合作'],
      ['/test/faq.html', '常见问题'], ['/test/homeway.html', '回家的路']];

    var sparkle = '<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l1.8 5.4L19.5 9l-5.7 1.6L12 16l-1.8-5.4L4.5 9l5.7-1.6L12 2z"></path></svg>';
    var drawer = document.createElement('div');
    drawer.className = 'hlm-drawer';
    drawer.innerHTML =
      '<div class="hlm-mask"></div>' +
      '<aside class="hlm-panel">' +
        '<div class="hlm-head"><a href="/test/" class="hlm-logo"><img src="/test/assets/hl-logo.svg" alt="黑料头条"></a><button class="hlm-close" aria-label="关闭">&times;</button></div>' +
        '<a class="hlm-ai" href="/test/ai/">' + sparkle + 'AI 科技</a>' +
        '<div class="hlm-auth"><a class="login" data-hl-auth="login">登录</a><a class="reg" data-hl-auth="register">注册</a></div>' +
        '<div class="hlm-sec">栏目导航</div>' +
        '<nav class="hlm-nav">' + cats.map(function (c) { return '<a href="' + c[0] + '">' + c[1] + '</a>'; }).join('') + '</nav>' +
        '<div class="hlm-sec">快捷入口</div>' +
        '<nav class="hlm-quick">' + quick.map(function (q) { return '<a href="' + q[0] + '">' + q[1] + '</a>'; }).join('') + '</nav>' +
      '</aside>';
    document.body.appendChild(drawer);

    function open() { drawer.classList.add('on'); document.documentElement.style.overflow = 'hidden'; }
    function close() { drawer.classList.remove('on'); document.documentElement.style.overflow = ''; }
    burger.addEventListener('click', open);
    drawer.querySelector('.hlm-mask').addEventListener('click', close);
    drawer.querySelector('.hlm-close').addEventListener('click', close);
    drawer.querySelectorAll('[data-hl-auth]').forEach(function (a) { a.addEventListener('click', close); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });

    var sb = navbar.querySelector('.hlh-search');
    if (sb) {
      sb.addEventListener('click', function (e) {
        if (window.innerWidth <= 991 && !sb.classList.contains('expanded')) {
          e.preventDefault(); e.stopPropagation();
          sb.classList.add('expanded');
          var inp = sb.querySelector('input'); if (inp) setTimeout(function () { inp.focus(); }, 50);
        }
      }, true);
      document.addEventListener('click', function (e) {
        if (sb.classList.contains('expanded') && !sb.contains(e.target)) sb.classList.remove('expanded');
      });
    }
  }
  if (document.readyState !== 'loading') init(); else document.addEventListener('DOMContentLoaded', init);
})();
