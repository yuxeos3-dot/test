(async function (doc, win, layer, hotRankList, keyword) {
    const sanitizeSearchKeyword = (k) => {
        let out = '', cn = 0, en = 0;
        for (const ch of String(k ?? '')) {
            if (/[\u4e00-\u9fa5]/.test(ch)) {
                if (cn < 20) { out += ch; cn++; }
            } else if (/[a-zA-Z0-9]/.test(ch)) {
                if (en < 30) { out += ch; en++; }
            }
        }
        return out;
    };
    const tipInvalidKeyword = (raw) => { if (raw) layer.msg('关键词仅支持中文、字母和数字'); };
    const buildSearchUrl = (k) => `/search/${encodeURIComponent(sanitizeSearchKeyword(k))}/`;
    // 列表(搜索结果)
    class SortList {
        constructor(selector, url) {
            const _this = this;
            this.$archive = () => $(selector);
            this.keyword = keyword;
            this.url = url;
            this.sort = '';
            this.page = 1;

            // 单选
            $(document).on('change', '.xqbj-search-sort input[name="searchsort"][type="radio"]', function() {
                _this.sort = $(this).val();
                _this.page = 1;
                _this.load();
            });
        }

        // 入口方法
        load() {
            this.showLoading();
            this.fetchData()
                .done((html) => {
                    this.renderList(html);
                    this.bindEvents();
                })
                .fail(() => {
                    layer.msg('数据请求失败');
                })
                .always(() => {
                    this.goTop();
                    setTimeout(() => {
                        layer.closeAll('loading')
                    }, 500);
                });
        }

        // 请求
        fetchData() {
            const data = {
                q: this.keyword,
                sort: this.sort,
                page: this.page,
            };

            return $.ajax({
                url: this.url,
                method: 'GET',
                data
            });
        }

        // 渲染[后端处理]
        renderList(html) {
            this.$archive().fadeOut('fast', () => {
                // [后端处理]
                // this.$archive.replaceWith(this.listTemplate()).fadeIn(300);
                this.$archive().replaceWith(html).fadeIn(300);
            });
        }

        // 模板(列表 + 分页)[后端处理]
        listTemplate = (html) => {
            return `
                <div id="archive" role="main">
                    <article itemscope itemtype="http://schema.org/BlogPosting" class="">
                        <div class="display-none" itemscope itemprop="author" itemtype="http://schema.org/Person">
                            <meta itemprop="name" content="瓜瓜"/>
                            <meta itemprop="url" content=""/>
                        </div>
                        <div class="display-none" itemscope itemprop="publisher" itemtype="http://schema.org/Organization">
                            <meta itemprop="name" content="瓜瓜"/>
                            <div itemscope itemprop="logo" itemtype="http://schema.org/ImageObject">
                                <meta itemprop="url" content="/usr/themes/Mirages/images/51cg.png?v=3&amp;s=50&amp;r=G&amp;d=">
                            </div>
                        </div>
                        <meta itemprop="url mainEntityOfPage" content="https://51cg1.com/archives/207221/" />
                        <meta itemprop="dateModified" content="2025-05-19T09:10:30+00:00">
                        <a href="https://51cg1.com/archives/207221/" >
                            <div class="post-card" id="post-card-207221" >
                                <div class="blog-background"></div>
                                <script type="text/javascript">
                                    loadBannerDirect('https://pic.sqbcn.cn/upload_01/xiao/20250517/2025051717181423596.jpeg', '', document.querySelector('#post-card-207221'), '-1', document.querySelector('#post-card-207221').offsetWidth, document.querySelector('#post-card-207221').offsetHeight);
                                </script>
                                <div class="post-card-mask ">
                                <div class="post-card-container">
                                    <h2 class="post-card-title" itemprop="headline">日本AV女优路边撩素人 偶遇中国猛男上集 车内激战持久狂野 事后甩50万日元惊呆女优 形象瞬间高大！</h2>
                                        <div class="post-card-info">
                                            <span itemprop="author" itemscope itemtype="http://schema.org/Person">瓜瓜 • </span>                                                <span itemprop="datePublished" content="2025-05-17T16:18:00+00:00">2025 年 05 月 17 日 • </span>
                                            <span>今日吃瓜, 看片娱乐</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </article>
                    <article itemscope itemtype="http://schema.org/BlogPosting" class="">
                        <div class="display-none" itemscope itemprop="author" itemtype="http://schema.org/Person">
                            <meta itemprop="name" content="瓜表妹"/>
                            <meta itemprop="url" content=""/>
                        </div>
                        <div class="display-none" itemscope itemprop="publisher" itemtype="http://schema.org/Organization">
                            <meta itemprop="name" content="瓜表妹"/>
                            <div itemscope itemprop="logo" itemtype="http://schema.org/ImageObject">
                                <meta itemprop="url" content="/usr/themes/Mirages/images/51cg.png?v=3&amp;s=50&amp;r=G&amp;d=">
                            </div>
                        </div>
                        <meta itemprop="url mainEntityOfPage" content="https://51cg1.com/archives/206994/" />
                        <meta itemprop="dateModified" content="2025-05-19T09:10:36+00:00">
                        <a href="https://51cg1.com/archives/206994/" >
                            <div class="post-card" id="post-card-206994" >
                                <div class="blog-background"></div>
                                <script type="text/javascript">
                                loadBannerDirect('https://pic.sqbcn.cn/upload_01/xiao/20250516/2025051621385232406.jpeg', '', document.querySelector('#post-card-206994'), '-1', document.querySelector('#post-card-206994').offsetWidth, document.querySelector('#post-card-206994').offsetHeight);
                                </script>
                                <div class="post-card-mask ">
                                    <div class="post-card-container">
                                        <h2 class="post-card-title" itemprop="headline">台湾极品福利姬女神 波衣 道具自慰喷水私拍合集 近距离展示美乳嫩穴无限魅惑 娇喘勾魂诱人！</h2>
                                        <div class="post-card-info">
                                            <span itemprop="author" itemscope itemtype="http://schema.org/Person">瓜表妹 • </span>                                                <span itemprop="datePublished" content="2025-05-17T16:00:00+00:00">2025 年 05 月 17 日 • </span>
                                            <span>今日吃瓜, 网红黑料</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </article>
                    <article itemscope itemtype="http://schema.org/BlogPosting" class="">
                        <div class="display-none" itemscope itemprop="author" itemtype="http://schema.org/Person">
                            <meta itemprop="name" content="瓜表妹"/>
                            <meta itemprop="url" content=""/>
                        </div>
                        <div class="display-none" itemscope itemprop="publisher" itemtype="http://schema.org/Organization">
                            <meta itemprop="name" content="瓜表妹"/>
                            <div itemscope itemprop="logo" itemtype="http://schema.org/ImageObject">
                                <meta itemprop="url" content="/usr/themes/Mirages/images/51cg.png?v=3&amp;s=50&amp;r=G&amp;d=">
                            </div>
                        </div>
                        <meta itemprop="url mainEntityOfPage" content="https://51cg1.com/archives/206989/" />
                        <meta itemprop="dateModified" content="2025-05-19T09:10:44+00:00">
                        <a href="https://51cg1.com/archives/206989/" >
                            <div class="post-card" id="post-card-206989" >
                                <div class="blog-background"></div>
                                <script type="text/javascript">
                                    loadBannerDirect('https://pic.sqbcn.cn/upload_01/xiao/20250516/2025051620282659908.jpeg', '', document.querySelector('#post-card-206989'), '-1', document.querySelector('#post-card-206989').offsetWidth, document.querySelector('#post-card-206989').offsetHeight);
                                </script>
                                <div class="post-card-mask ">
                                    <div class="post-card-container">
                                        <h2 class="post-card-title" itemprop="headline">极品反差女神 私拍道具插穴特写 粉嫩蜜穴淫水泛滥 蜜桃臀高潮喷涌 画面撩到爆！</h2>
                                        <div class="post-card-info">
                                            <span itemprop="author" itemscope itemtype="http://schema.org/Person">瓜表妹 • </span>                                                <span itemprop="datePublished" content="2025-05-17T15:30:00+00:00">2025 年 05 月 17 日 • </span>
                                            <span>今日吃瓜, 骚男骚女</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </article>
                    <article itemscope itemtype="http://schema.org/BlogPosting" class="">
                        <div class="display-none" itemscope itemprop="author" itemtype="http://schema.org/Person">
                            <meta itemprop="name" content="瓜二哥"/>
                            <meta itemprop="url" content=""/>
                        </div>
                        <div class="display-none" itemscope itemprop="publisher" itemtype="http://schema.org/Organization">
                            <meta itemprop="name" content="瓜二哥"/>
                            <div itemscope itemprop="logo" itemtype="http://schema.org/ImageObject">
                                <meta itemprop="url" content="/usr/themes/Mirages/images/51cg.png?v=3&amp;s=50&amp;r=G&amp;d=">
                            </div>
                        </div>
                        <meta itemprop="url mainEntityOfPage" content="https://51cg1.com/archives/207136/" />
                        <meta itemprop="dateModified" content="2025-05-19T09:09:56+00:00">
                        <a href="https://51cg1.com/archives/207136/" >
                            <div class="post-card" id="post-card-207136" >
                                <div class="blog-background"></div>
                                <script type="text/javascript">
                                loadBannerDirect('https://pic.sqbcn.cn/upload_01/xiao/20250516/2025051621454710950.jpeg', '', document.querySelector('#post-card-207136'), '-1', document.querySelector('#post-card-207136').offsetWidth, document.querySelector('#post-card-207136').offsetHeight);
                                </script>
                                <div class="post-card-mask ">
                                    <div class="post-card-container">
                                        <h2 class="post-card-title" itemprop="headline">抖音推特双平台反差母狗 露脸自慰裸舞合集 抖奶露穴超级淫骚 性感身材令人血脉喷张！</h2>
                                        <div class="post-card-info">
                                            <span itemprop="author" itemscope itemtype="http://schema.org/Person">瓜二哥 • </span>                                                <span itemprop="datePublished" content="2025-05-17T15:21:00+00:00">2025 年 05 月 17 日 • </span>
                                            <span>今日吃瓜, 网红黑料</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </article>

                    <div class="page-nav page-nav-ajax">
                        <div class="page-jump">
                            <div id="pageForm" method="get">
                                <span class="page-info"> 12/518 </span>
                                <input type="number" id="pageNum">
                                <button id="submitBtn">跳转</button>
                            </div>
                        </div>
                        <ul class="page-navigator">
                            <li class="prev"><a href="javascript:void(0);" data-page="11">上一页</a></li>
                            <li><span></span></li>
                            <li class="next"><a href="javascript:void(0);" data-page="13">下一页</a></li>
                        </ul>
                    </div>
                </div>
            `;
        }

        // 事件
        bindEvents() {
            const _this = this;
            $(doc).off('click.pageNav')

                // 上一页
                .on('click.pageNav', '.page-nav-ajax .prev a', function (e) {
                    e.preventDefault();
                    _this.page = $(this)?.data('page') || 1;
                    // console.log('prev clicked', $(this).data('page'));
                    _this.load();
                })

                // 下一页
                .on('click.pageNav', '.page-nav-ajax .next a', function (e) {
                    e.preventDefault();
                    _this.page = $(this)?.data('page') || 1;
                    _this.load();
                })

                // 跳转按钮
                .on('click.pageNav', '.page-nav-ajax #submitBtn', function (e) {
                    e.preventDefault();
                    const input = $(this).closest('.page-nav-ajax').find('input').val();

                    _this.page = (1 * input || 1);
                    _this.load();
                });
        }

        // 显示加载动画
        showLoading() {
            layer.load(0);
        }

        // 显示加载动画
        goTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    }

    // 导航(头部导航)
    class NavSearch {
        constructor(hoturl, url, throttleInterval, keyLength) {
            const _this = this;
            this.hoturl = hoturl;
            this.url = url;
            this.throttleInterval = throttleInterval;
            this.keyLength = keyLength;
            this.domparser = new DOMParser();

            // 模板定义(历史)
            this.hotTemplate = (c = []) => {
                const list = Array.isArray(c) ? c.slice(0, 10) : [];
                const hasData = list.length > 0;
                return `
                    <div class="container-search-context">
                    <div class="search-container">
                        <div class="search-title">
                        <span>历史记录</span>
                        <div class="r-text on-history-clear">
                            <div class="xqbj-icon-delete icon"></div>
                            清空记录
                        </div>
                        </div>
                        <div class="container-search-tags">
                        <div class="list history-record">
                            <div class="no-data">暂无数据</div>
                        </div>
                        </div>

                        <div class="search-title search-border">
                        <span>热门搜索</span>
                        </div>
                        <div class="container-search-hots">
                        ${
                    hasData
                        ? `
                                <div class="rank-list">
                                    ${(c.slice(0, 10)).map((e, index) => `
                                        <a href="${e.permalink}" class="rank-card">
                                            ${index <= 2 ? `<div class="xqbj-icon-rank-${index + 1}"></div>` : `<div class="rank-card-icon">${index + 1}</div>`}
                                                <div class="rank-card-title text-line-ellipsis-1">
                                                    ${e.title}
                                                </div>
                                                    ${index <= 9 ? `<i class="xqbj-icon-hot"></i>` : ``}
                                                <div class="view">${e.hot_formatted} 热度</div>
                                        </a>
                                    `).join("")}
                                </div>
                            `
                        : `<div class="no-data">暂无数据</div>`
                }
                        </div>
                    </div>
                    </div>
                `;
            };


            this.seaTemplate = (c) => {
                const list = Array.isArray(c?.list) ? c.list.slice(0, 20) : [];
                if (list.length === 0) return "";

                return `
                    <div class="container-search-context">
                      <div class="search-container">
                        <div class="container-search-hots container-search-lists">
                          <div class="rank-list">
                            ${list.map((e) => `
                              <a href="${e.url}" class="rank-card">
                                <div class="xqbj-icon-search1"></div>
                                <div class="rank-card-title text-line-ellipsis-1">${e.title ?? ""}</div>
                              </a>
                            `).join("")}
                          </div>
                        </div>
                      </div>
                    </div>
              `;
            };


            // 2026-03-23 start
            $(document).on('click', '.expand-btn', function (event) {
                event.stopPropagation(); // 防止冒泡
                $('ul.expand-contract-group').toggle();
            });

            // 点击其他地方关闭
            $(document).on('click', function (event) {
                if (
                    !$(event.target).closest('.expand-btn').length &&
                    !$(event.target).closest('ul.expand-contract-group').length
                ) {
                    $('ul.expand-contract-group').hide();
                }
            });
            // 2026-03-23 end

            // 初始(mobile)
            $(doc).on('click', 'form#search-form', function () {
                top.location.href = '/search-page.html';
            });

            // 输入(mobile)
            $(doc).on('input', '#input-mobile-control-key', _this.debounce(function() {
                const navSearchContainer = $(this).closest('.nav-search-container');
                const hotSearchContainer = navSearchContainer.find('.container-hot-search').get(0);
                const listSearchContainer = navSearchContainer.find('.container-list-search').get(0);
                const keyword = $(this).val().trim();

                if (keyword) {
                    _this.fetchSearchData(keyword)
                        .done((d) => {
                            const data = {
                                list: d.map(e => ({ title: e, url: buildSearchUrl(e) }))
                            };

                            // 渲色处理
                            data.list = data.list.map(item => {
                                const safeKeyword = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                                const regex = new RegExp(safeKeyword, 'g');

                                return {
                                    ...item,
                                    title: item.title.replace(regex, `<span class="keyword">${keyword}</span>`)
                                };
                            });

                            // 乱序处理
                            // data.list = data.list.sort(() => Math.random() - 0.5);

                            // 模板构建
                            const tpl = _this.seaTemplate(data);

                            // 模板渲染
                            $(listSearchContainer).html(tpl);
                        })
                        .fail(() => {
                            // layer.msg('数据请求失败');
                            // console.log('数据请求失败');
                        })
                        .always(() => {
                            $(listSearchContainer).addClass('show');
                            $(hotSearchContainer).removeClass('show');
                        });
                } else {
                    $(listSearchContainer).removeClass('show');
                    $(hotSearchContainer).removeClass('show');
                }
            }, _this.throttleInterval));


            // 搜索(pc)
            $(doc).on('click', '.input-mobile-search-btn-pc', function () {
                onPcInputSearch()
            });
            // 搜索(pc)回车事件
            $(doc).on('keydown', '.search-input', function (event) {
                if (event.keyCode === 13) { 
                    event.preventDefault(); 
                    onPcInputSearch()
                }
            })
            // pc搜索处理逻辑
            function onPcInputSearch(event) {
                const keywordval = $('.search-input').val().trim();
                const keywordhtml = _this.domparser.parseFromString(keywordval, 'text/html');
                const keyword = sanitizeSearchKeyword(keywordhtml.body.textContent);

                if(keyword.length < 1) {
                    tipInvalidKeyword(keywordval);
                    return;
                }
                try {
                    // 需要[后端处理]
                    top.location.href = buildSearchUrl(keyword);
                } finally {
                    $HistoryRecord.add(keyword);
                }
            }

            // 搜索(mobile)
            $(doc).on('click', '.input-mobile-search-btn', function () {
                const navSearchContainer = $(this).closest('.van-nav-bar');
                const keywordval = navSearchContainer.find('#input-mobile-control-key').val().trim();
                const keywordhtml = _this.domparser.parseFromString(keywordval, 'text/html');
                const keyword = sanitizeSearchKeyword(keywordhtml.body.textContent);

                if(keyword.length < 1) {
                    tipInvalidKeyword(keywordval);
                    return;
                }
                try {
                    // 需要[后端处理]
                    top.location.href = buildSearchUrl(keyword);
                } finally {
                    $HistoryRecord.add(keyword);
                }
            });

            // xf0714 搜索-键盘(mobile) start
            $('#input-mobile-control-key').on('keydown', function (event) {
                if (event.key === 'Enter') {
                    event.preventDefault(); // 防止表单提交
                    const navSearchContainer = $(this).closest('.van-nav-bar');
                    const keywordval = navSearchContainer.find('#input-mobile-control-key').val().trim();
                    const keywordhtml = _this.domparser.parseFromString(keywordval, 'text/html');
                    const keyword = sanitizeSearchKeyword(keywordhtml.body.textContent);
                    if (!keyword) {
                        tipInvalidKeyword(keywordval);
                        return;
                    }
                    try {
                        // 需要[后端处理]
                        top.location.href = buildSearchUrl(keyword);
                    } finally {
                        $HistoryRecord.add(keyword);
                    }
                }
            });
            // xf0714 搜索-键盘(mobile) end


            // 初始(desktop)
            $(doc).on('click', '.nav-search-container.nav-search-container-hook', function () {
                // $(this).addClass('expand').find('#input-desktop-control-key').focus();
                win.location.href = '/search-page.html';
            });

            // 输入(desktop)
            // $(doc).on('input', '#input-desktop-control-key', _this.debounce(function() {
            //     const navSearchContainer = $(this).closest('.nav-search-container');
            //     const hotSearchContainer = navSearchContainer.find('.container-hot-search').get(0);
            //     const listSearchContainer = navSearchContainer.find('.container-list-search').get(0);
            //     const keywordhtml = _this.domparser.parseFromString($(this).val(), 'text/html');
            //     const keyword = keywordhtml.body.textContent;
            //
            //     if(keyword.length < 1) {
            //         return;
            //     }
            //     if (keyword) {
            //         _this.fetchSearchData(keyword)
            //             .done((d) => {
            //
            //                 const data = {
            //                     list: d.map(e => ({ title: e, url: buildSearchUrl(e) }))
            //                 };
            //
            //                 // 渲色处理
            //                 data.list = data.list.map(item => {
            //                     const safeKeyword = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            //                     const regex = new RegExp(safeKeyword, 'g');
            //
            //                     return {
            //                         ...item,
            //                         title: item.title.replace(regex, `<span class="keyword">${keyword}</span>`)
            //                     };
            //                 });
            //
            //                 // 乱序处理
            //                 // data.list = data.list.sort(() => Math.random() - 0.5);
            //
            //                 // 模板构建
            //                 const tpl = _this.seaTemplate(data);
            //
            //                 // 模板渲染
            //                 $(listSearchContainer).html(tpl);
            //             })
            //             .fail(() => {
            //                 // layer.msg('数据请求失败');
            //                 // console.log('数据请求失败');
            //             })
            //             .always(() => {
            //                 $(listSearchContainer).addClass('show');
            //                 $(hotSearchContainer).removeClass('show');
            //             });
            //     } else {
            //         $(listSearchContainer).removeClass('show');
            //         $(hotSearchContainer).addClass('show');
            //     }
            // }, _this.throttleInterval));

            // 区域失焦(desktop)
            $(doc).on('mouseleave', '#navbarCollapse', function () {
                // console.log("@区域失焦(desktop)");
                const navSearchContainer = $(this).find('.nav-search-container');
                const navSearchinput = $(this).find('#input-desktop-control-key');

                if(navSearchinput.val() === '') {
                    $(navSearchContainer).removeClass('expand');
                    $(navSearchinput).val('').blur();
                }
            });

            // 点击失焦(desktop)
            $(doc).on('click', function (event) {
                // console.log("@点击失焦(desktop)");
                const navSearchContainer = $('#navbarCollapse .nav-search-container');
                if($(event.target).closest('#navbarCollapse').length) {

                } else if($(event.target).closest('.on-history-delete').length) {

                } else {
                    $(navSearchContainer).removeClass('expand');
                    $(_this).val('');
                }
            });

            // 确认(desktop)
            $(doc).on('keydown', '#input-desktop-control-key', function (e) {
                if (e.key === 'Enter') {
                    const keywordval = $(this).val().trim();
                    const keywordhtml = _this.domparser.parseFromString(keywordval, 'text/html');
                    const keyword = sanitizeSearchKeyword(keywordhtml.body.textContent);
                    if (!keyword) tipInvalidKeyword(keywordval);
                    if (keyword) {
                        try {
                            top.location.href = buildSearchUrl(keyword);
                        } finally {
                            $HistoryRecord.add(keyword);
                        }
                    }
                }
            });

            // 返回
            $(doc).on('click', '.backbtn', function () {
                const currentUrl = window.location.href;

                if (currentUrl.includes('search-page')) {
                    top.location.href = '/';
                } else if (window.location.protocol === 'file:' || (!document.referrer && document.referrer.startsWith('file://'))) {
                    top.location.href = `/`;
                } else if (!document.referrer) {
                    top.location.href = `/`;
                } else {
                    const fallbackUrl = '/';
                    const firstUrl = sessionStorage.getItem('firstNonSearchUrl');
                    if (firstUrl) {
                        top.location.href = firstUrl;
                    } else {
                        top.location.href = fallbackUrl;
                    }
                }
            });

            // 搜索历史收集(mobile and desktop)
            $(doc).on('click', '.container-search-tags a, .container-search-lists a, .xqbj-search-tags-list a, .xqbj-search-none a', function (event) {
                const keywordhtml = _this.domparser.parseFromString($(event.target)?.text()?.replace(/(^\s*)|(\s*$)/g, ""), 'text/html');
                const keyword = keywordhtml.body.textContent;
                try {
                    $HistoryRecord.add(keyword);
                } catch (error) {
                    // console.log("历史信息收集失败", error);
                }
            });

            //
            this.init();
        }

        // 初始化
        init() {
            const _this = this;
            const navSearchContainer = $("#navbar .nav-search-container");
            const hotSearchContainer = navSearchContainer.find('.container-hot-search').get(0);

            // 模板构建
            const tpl = _this.hotTemplate(hotRankList);

            // 模板渲染
            $(hotSearchContainer).html(tpl);

            //
            $(hotSearchContainer).addClass('show');

            //
            win?.$HistoryRecord && win?.$HistoryRecord.init();

        }

        // 搜索请求
        fetchSearchData(keyword) {
            const _this = this;
            if(keyword.length <= _this.keyLength) throw new Error('关键词长度必须大于2');

            const data = {
                q: encodeURIComponent(keyword)
            };

            return $.ajax({
                url: `${this.url}`,
                method: 'GET',
                data
            });
        }

        // 热门请求
        fetchHotData() {
            const _this = this;
            return $.ajax({
                url: _this.hoturl,
                method: 'POST'
            });
        }

        // 节流
        debounce(func, delay) {
            let timer = null;
            return function(...args) {
                if (timer) clearTimeout(timer);
                timer = setTimeout(() => {
                    func.apply(this, args);
                    timer = null;
                }, delay);
            };
        }
    }

    // 历史(搜索历史)
    class HistoryRecord {
        constructor() {
            this.key = '__GLOBAL_SEARCH_HISTORY__';      // localStorage 的 key
            this.max = 8;                                // 最多保存 20 条记录
            this.listcontainer = 'div.history-record';   // 列表容器元素
            this.init();                                 // 初始加载记录
        }

        // 加载
        init() {
            const _this = this;
            const history = JSON.parse(localStorage.getItem(this.key)) || [];
            this.show(history);

            // 事件
            _this.event();
        }

        // 事件
        event() {
            const _this = this;
            $(doc).on('click', '.on-history-clear', function () {
                _this.clear();
            });

            $(doc).on('click', '.on-history-delete', function (e) {
                e.preventDefault();
                const keyword = $(this).closest('button').data('keyword');
                _this.del(keyword);
            });

            $(doc).on('click', '.search-history-item', function (e) {
                e.preventDefault();
                const keyword = sanitizeSearchKeyword($(this).data('keyword'));
                if (!keyword) return;
                top.location.href = buildSearchUrl(keyword);
            });
        }

        // 显示(操作)
        show(historys) {
            const $container = $(this.listcontainer);
            $container && $container.each((index, c) => {
                let tpl = '<div class="no-data">暂无记录</div>';
                if(historys?.length > 0) {
                    /* 搜索seo优化 start */
                    tpl = historys.map(item => `<button data-keyword="${item}" class="search-history-item"><span class="text-line-ellipsis-1">${item}</span></button>`).join('');
                    /* 搜索seo优化 end */
                }
                c.innerHTML = tpl;
            });
        }

        // 添加
        add(keyword) {
            if (!keyword) return;

            let history = JSON.parse(localStorage.getItem(this.key)) || [];

            // 去重 + 添加到开头 + 限制数量
            history = [keyword, ...history.filter(item => item !== keyword)].slice(0, this.max);

            localStorage.setItem(this.key, JSON.stringify(history));
            this.show(history);
        }

        // 删除
        del(keyword) {
            if (!keyword) return;

            let history = JSON.parse(localStorage.getItem(this.key)) || [];

            // 删除
            history = history.filter(k => k !== keyword);

            localStorage.setItem(this.key, JSON.stringify(history));
            this.show(history);
        }

        // 清空
        clear() {
            localStorage.removeItem(this.key);
            this.show([]);
        }
    }



    // 初始化
    document.addEventListener('DOMContentLoaded', function () {
        const isSearchPage = window.location.pathname.includes('/search/');
        const landingKey = 'firstNonSearchUrl';

        if (!isSearchPage) {
            sessionStorage.setItem(landingKey, window.location.href);
        }
        win['$NavSearch'] = new NavSearch(
            '/action/suggest',                   // 热门接口(废弃)
            '/action/suggest', 500, 0            // 搜索接口
        );
        win['$SortList'] = new SortList(
            "div#archive",
            '/action/search_by'
        );
        win['$HistoryRecord'] = new HistoryRecord();
    }, false);

 function buildUrlWithToken(href, token) {
         if (!token) return href;
         try {
           var url = new URL(href, window.location.href);
           url.searchParams.set('token', token);
           return url.href;
         } catch (error) {
           var separator = href.indexOf('?') === -1 ? '?' : '&';
           return href + separator + 'token=' + encodeURIComponent(token);
         }
       }

document.addEventListener('click', function (e) {
        const target = e.target
        if (!target || !target.closest) return
        const link = target.closest('a.ip_activity_link')
        if (!link) return
        e.preventDefault()
        let token = null
        try {
            token = JSON.parse(window.localStorage.getItem('__token__'))
        } catch (e) {
            token = window.localStorage.getItem('__token__')
        }
        const rawHref =
            link.dataset.rawHref ||
            link.getAttribute('href') ||
            ''

        if (!rawHref) return
        link.dataset.rawHref = rawHref
        const finalUrl = token
            ? buildUrlWithToken(rawHref, token)
            : rawHref

        window.open(finalUrl, '_blank')

    }, { passive: false })


})(document, window, layer, hotRankList, keyword);