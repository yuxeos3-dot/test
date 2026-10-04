/* 黑料头条 分页增强: 把主题默认分页重渲染为数字分页(‹ 1 2 … N › 跳转 GO 每页) */
(function () {
  function init() {
    var nav = document.querySelector('.page-navigator');
    if (!nav) return;
    var total = 1, cur = 1;
    nav.querySelectorAll('a').forEach(function (a) {
      var n = parseInt((a.textContent || '').trim());
      if (!isNaN(n) && n > total) total = n;
    });
    var act = nav.querySelector('li.active a, .active a');
    if (act) { var c = parseInt((act.textContent || '').trim()); if (!isNaN(c)) cur = c; }
    var mm = location.pathname.match(/page\/(\d+)\/?/); if (mm) cur = parseInt(mm[1]);
    if (cur > total) total = cur;

    var base = location.pathname.replace(/page\/\d+\/?$/, '');
    if (base.slice(-1) !== '/') base += '/';
    function url(k) { return k <= 1 ? base : base + 'page/' + k + '/'; }

    function num(k) { return k === cur ? '<span class="hp-cur">' + k + '</span>' : '<a class="hp-num" href="' + url(k) + '">' + k + '</a>'; }

    var html = '';
    html += cur > 1 ? '<a class="hp-btn" href="' + url(cur - 1) + '" aria-label="上一页">‹</a>' : '<span class="hp-btn hp-dis">‹</span>';
    var pages = [], seen = {};
    function add(k) { if (k >= 1 && k <= total && !seen[k]) { seen[k] = 1; pages.push(k); } }
    add(1); add(2);
    for (var k = cur - 2; k <= cur + 2; k++) add(k);
    add(total - 1); add(total);
    pages.sort(function (a, b) { return a - b; });
    var prev = 0;
    pages.forEach(function (k) {
      if (prev && k - prev > 1) html += '<span class="hp-gap">…</span>';
      html += num(k);
      prev = k;
    });
    html += cur < total ? '<a class="hp-btn" href="' + url(cur + 1) + '" aria-label="下一页">›</a>' : '<span class="hp-btn hp-dis">›</span>';
    html += '<span class="hp-jump">跳转至<input type="number" min="1" max="' + total + '" class="hp-jin" value="' + cur + '"><span class="hp-ye">页</span><button type="button" class="hp-go">GO</button></span>';
    html += '<span class="hp-pp">每页<select class="hp-sel"><option>30</option></select>个</span>';

    var wrap = document.createElement('div');
    wrap.className = 'hp-pager';
    wrap.innerHTML = html;

    var container = nav.parentElement;
    var jump = container.querySelector('.page-jump');
    nav.replaceWith(wrap);
    if (jump) jump.remove();
    // 可能的旧 page-jump 在别处
    document.querySelectorAll('.page-jump').forEach(function (e) { e.remove(); });

    var jin = wrap.querySelector('.hp-jin'), go = wrap.querySelector('.hp-go');
    function jumpTo() { var v = parseInt(jin.value); if (v >= 1 && v <= total) location.href = url(v); }
    go.addEventListener('click', jumpTo);
    jin.addEventListener('keydown', function (e) { if (e.key === 'Enter') { e.preventDefault(); jumpTo(); } });
  }
  if (document.readyState !== 'loading') init(); else document.addEventListener('DOMContentLoaded', init);
})();
