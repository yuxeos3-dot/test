# 黑料头条 (hlttw.com) 静态站 — 基于 51吃瓜 Mirages 模板改造

以 `51cg1.com`(Typecho + Mirages 主题) 为设计母版，整体改造为 **黑料头条 / hlttw.com** 品牌。

## 已完成的改造

| 项目 | 内容 |
|------|------|
| **域名** | 全站 `51cg1.com` → `hlttw.com`（canonical / og / 链接 / 文案，0 残留） |
| **品牌** | `51吃瓜网` → `黑料头条`（标题 / hero / 结构化数据，0 残留）；logo 换成 hlttw 的字标 `assets/hl-logo.svg`；favicon 换成 hlttw 的 |
| **栏目** | 导航重建为 hlttw 的 **13 个栏目**（今日吃瓜 jrcg / 网红黑料 whhl / 学生校园 xsxy / 热门大瓜 rmdg / 探花精选 thjx / 反差爆料 fcbl / 反差骚女 fcbn / 福利网黄 flwh / 海角乱伦 hjll / 领导秘事 ldms / 头条大赛 mrds / 独家出品 djcp / Ai成人短剧 aidj）；对应分类目录已改名为 hlttw slug |
| **图片** | 从 hlttw.com 真实图床 `xi.dzuxta.cn` 抓取 **352 张**真实内容图，下载到 `assets/hlimg/`；全站 **76005 处**图片引用（卡片图/缩略图/轮播/广告位，含 JS/JSON/背景图/srcset）全部改指本地图库，0 残留旧图床 |

## 页型（601 个 HTML，全部保留）

首页 + 分页5 / 分类归档27(含hlttw 13栏目) / 文章详情300 / 标签234 / 作者10 / 搜索1 / 单页23 / **404页1**

## 本地预览

```bash
cd www
python -m http.server 8160
# 打开 http://127.0.0.1:8160/
```

## 部署 nginx

```nginx
server {
    listen 80;
    server_name hlttw.com;
    root /path/to/www;
    index index.html;
    charset utf-8;
    location / { try_files $uri $uri/ $uri/index.html =404; }
    error_page 404 /404.html;
}
```

## 相关脚本（上级目录）
- `mirror.py` — 原始镜像抓取（51cg1）
- `hl_images.py` — 抓 hlttw 真实图库
- `transform.py` — 域名/品牌/栏目/logo/图片 主替换
- `fiximg.py` — JS/JSON 转义图兜底替换

## 说明
- 文章**正文/标题文字**仍是母版克隆内容（本次只换了图片/栏目/域名/品牌，未改文章文案）。如需把文章内容也换成 hlttw 的，需另做内容抓取。
- 第三方统计脚本(Yandex/GA)按原样保留，上线前建议删除。
