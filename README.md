# personal-site

杨卫薪律师个人主页 — Astro 6.3.1 静态站。

> **当前状态**：v1 MVP scaffold（ISS-028 Phase 1 落地），bio + 产品列表 + 联系方式单页 + 2 个产品详情页。

## 站点结构

```
personal-site/
├── astro.config.mjs    # site URL + base path 可通过环境变量覆盖
├── package.json
├── tsconfig.json
├── public/
│   ├── favicon.png     # 64×64 简化版（用 folia-icon）
│   ├── favicon-faropdf.png  # 备用
│   └── icons/
│       ├── folia-icon.png    # 从 folia/website 衍生
│       └── faropdf-icon.png  # 从 FaroPDF/src-tauri/icons 衍生
└── src/
    ├── components/
    │   ├── SiteHeader.astro
    │   ├── SiteFooter.astro
    │   └── ProductCard.astro
    ├── data/
    │   ├── author.ts    # 杨卫薪律师信息
    │   └── products.ts  # Folia + FaroPDF 元数据
    ├── layouts/
    │   └── BaseLayout.astro
    ├── pages/
    │   ├── index.astro  # 主页（bio + 产品 + 联系方式）
    │   ├── folia.astro  # Folia 详情页
    │   └── faropdf.astro # FaroPDF 详情页
    └── styles/
        └── site.css     # 复用 Folia 色彩 + 排版，新增 product card / contact 样式
```

## 本地开发

```bash
npm install
npm run dev    # 127.0.0.1 默认端口
```

## 构建 + 预览

```bash
npm run build
npm run preview
```

## 部署

GitHub Pages。推送 `main` 分支后自动部署（需在 GitHub repo Settings → Pages 选 GitHub Actions）。

环境变量：
- `PERSONAL_SITE_URL`（默认 `https://cat-xierluo.github.io`）
- `PERSONAL_BASE_PATH`（默认 `/personal-site`）

## 资源

- Folia icon 源：`folia/website/src/assets/folia-icon.png`
- FaroPDF icon 源：`FaroPDF/src-tauri/icons/icon-source.png`
- 复用 Folia website 的色彩 / 排版体系（OKLCH 调色板 + 衬体大标题 + 现代无衬体正文）
