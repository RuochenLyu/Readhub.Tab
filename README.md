<p align="center">
  <img src="icon.svg" width="96" height="96" alt="Readhub.Tab" />
</p>

<h1 align="center">Readhub.Tab</h1>

<p align="center">
  打开 Chrome 新标签页，顺手看一眼 <a href="https://readhub.cn">Readhub</a> 的当日热点。扫一眼就走，不打扰。
</p>

<p align="center">
  <a href="https://chromewebstore.google.com/detail/readhubtab/lplndfbdjbiofehpnckdkfjobpdbfpma">
    <img src="https://img.shields.io/chrome-web-store/v/lplndfbdjbiofehpnckdkfjobpdbfpma?label=Chrome%20Web%20Store" alt="Chrome Web Store" />
  </a>
  <img src="https://img.shields.io/badge/license-MIT-blue" alt="MIT" />
  <img src="https://img.shields.io/badge/manifest-v3-success" alt="Manifest V3" />
</p>

---

## 特性

- **轻**：运行时 ~7KB gzipped，冷启动毫秒级
- **克制**：20 条当日热点，极简排版，支持深色模式
- **快**：`localStorage` 缓存做到秒开，tab 切回自动刷新（60s 节流）
- **稳**：`stale-while-revalidate`，请求失败保留旧数据不白屏

## 安装

<a href="https://chromewebstore.google.com/detail/readhubtab/lplndfbdjbiofehpnckdkfjobpdbfpma">
  <img src="https://raw.githubusercontent.com/GoogleChrome/webstore-docs/refs/heads/master/images/ChromeWebStore_BadgeWBorder_v2_496x150.png" alt="Available in the Chrome Web Store" width="248" height="75">
</a>

### 本地加载

```bash
npm install
npm run build
```

1. 打开 `chrome://extensions`
2. 启用「开发者模式」
3. 点「加载已解压的扩展程序」，选择 `dist/` 目录
4. 新开标签页即可

## 开发

```bash
npm run dev      # Vite dev server + HMR
npm run build    # 生产构建到 dist/
npm run zip      # 打包 dist/ 为 readhub-tab.zip（用于上传 Web Store）
npm run gen:icons  # 从 icon.svg 重新生成 5 个尺寸的 PNG
```

## 技术栈

| 层 | 选型 |
|---|---|
| 框架 | [Preact 10](https://preactjs.com) |
| 打包 | [Vite 8](https://vitejs.dev) + [@crxjs/vite-plugin](https://crxjs.dev) |
| 语言 | TypeScript |
| 数据层 | 手写 `useTopics` hook（localStorage + stale-while-revalidate + visibilitychange 刷新） |
| 相对时间 | 原生 `Intl.RelativeTimeFormat` |
| CJK 空格 | CSS `text-autospace: normal` |
| 图标生成 | [resvg-js](https://github.com/yisibl/resvg-js) + [opentype.js](https://opentype.js.org) 渲染 Calluna R 字形 |

**运行时依赖**：只有 `preact` 一个。

## 项目结构

```
├── icon.svg              # 插件图标源（Calluna Bold R + Readhub 蓝）
├── index.html            # 扩展入口 HTML
├── manifest.config.ts    # Manifest V3 声明（由 @crxjs 消费）
├── scripts/
│   └── gen-icons.mjs     # SVG → PNG 生成器
├── public/               # 直接拷贝到 dist 根（字体、图标）
└── src/
    ├── main.tsx          # Preact render 入口
    ├── app.tsx
    ├── types.ts          # Readhub API 响应类型
    ├── components/
    │   ├── TopicList.tsx
    │   ├── Topic.tsx
    │   └── Skeleton.tsx
    ├── lib/
    │   ├── api.ts        # useTopics hook
    │   └── format.ts     # formatRelative
    └── styles/
        ├── reset.css
        └── global.css
```

## 历史

2017 年首发（Vue 版），2022 年重构为 Next.js + React，2026 年迁至 Vite + Preact + TypeScript。每一代都保持一个原则：**扫一眼就走**。

## License

[MIT](LICENSE) © Ruochen Lyu
