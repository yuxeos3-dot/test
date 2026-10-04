/* 黑料头条 页头交互：搜索可用 + 登录/注册弹窗 + 收藏本站 (GitHub Pages 子路径 /test) */
(function () {
  function go(q) {
    q = (q || '').trim();
    if (!q) return;
    location.href = '/test/search/' + encodeURIComponent(q) + '/';
  }
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Enter' && e.keyCode !== 13) return;
    var t = e.target; if (!t) return;
    if (t.id === 'hlh-q' || t.id === 'input-desktop-control-key'
        || t.id === 'mobile-search-box-input'
        || (t.classList && t.classList.contains('input-control'))) {
      e.preventDefault(); go(t.value);
    }
  }, true);

  var modal = null;
  function buildModal() {
    if (modal) return modal;
    var mask = document.createElement('div');
    mask.className = 'hl-modal-mask'; mask.style.display = 'none';
    mask.innerHTML =
      '<div class="hl-modal" role="dialog" aria-modal="true">' +
        '<button class="hl-modal-close" aria-label="关闭">&times;</button>' +
        '<div class="hl-modal-logo"><img src="/test/assets/hl-logo.svg" alt="黑料头条"></div>' +
        '<div class="hl-modal-head"><button data-tab="login" class="on">登录</button><button data-tab="register">注册</button></div>' +
        '<div class="hl-modal-body">' +
          '<div class="fld"><input type="text" name="u" placeholder="用户名 / 手机号" autocomplete="username"></div>' +
          '<div class="fld"><input type="password" name="p" placeholder="密码" autocomplete="current-password"></div>' +
          '<div class="fld hl-fld-confirm" style="display:none"><input type="password" name="p2" placeholder="确认密码"></div>' +
          '<button class="hl-modal-submit">登录</button>' +
          '<p class="hl-modal-tip">登录即代表同意本站 <a href="/test/privacy.html">隐私政策</a> 与 <a href="/test/dmca.html">免责声明</a></p>' +
        '</div>' +
      '</div>';
    document.body.appendChild(mask); modal = mask;
    var headBtns = mask.querySelectorAll('.hl-modal-head button');
    var submit = mask.querySelector('.hl-modal-submit');
    var confirm = mask.querySelector('.hl-fld-confirm');
    function setTab(tab) {
      headBtns.forEach(function (b) { b.classList.toggle('on', b.getAttribute('data-tab') === tab); });
      confirm.style.display = (tab === 'register') ? '' : 'none';
      submit.textContent = (tab === 'register') ? '注册' : '登录';
    }
    headBtns.forEach(function (b) { b.addEventListener('click', function () { setTab(b.getAttribute('data-tab')); }); });
    mask.querySelector('.hl-modal-close').addEventListener('click', hideModal);
    mask.addEventListener('click', function (e) { if (e.target === mask) hideModal(); });
    submit.addEventListener('click', function () { mask.querySelector('.hl-modal-tip').innerHTML = '服务器开小差了，请稍后再试 ~'; });
    mask._setTab = setTab; return mask;
  }
  function showModal(tab) { var m = buildModal(); m._setTab(tab || 'login'); m.style.display = 'flex'; }
  function hideModal() { if (modal) modal.style.display = 'none'; }

  document.addEventListener('click', function (e) {
    var tgt = e.target;
    var icon = tgt.closest && tgt.closest('.hlh-search svg, .mobile-search-box .search-btn');
    if (icon) {
      var box = icon.closest('.hlh-search, .mobile-search-box');
      var inp = box && box.querySelector('input');
      if (inp && inp.value.trim()) { e.preventDefault(); go(inp.value); return; }
    }
    var au = tgt.closest && tgt.closest('[data-hl-auth]');
    if (au) { e.preventDefault(); showModal(au.getAttribute('data-hl-auth')); return; }
    var bm = tgt.closest && tgt.closest('.hlh-bookmark, .hl-bookmark');
    if (bm) { e.preventDefault(); try { window.alert('按 Ctrl+D（Mac 为 ⌘+D）即可收藏本站'); } catch (_) {} }
  }, true);
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') hideModal(); });
})();
