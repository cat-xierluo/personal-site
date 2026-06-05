# personal-site 变更日志

## 0.1.0-alpha.2 - 2026-06-05

- FaroPDF 详情页扩为全结构（ISS-004 Phase 3）：从 minimal（6 features 列表）扩为 Folia 详情页同 5 段式（hero / intro / features 8 项 / workflow 4 步 / download）。
  - **重写** `src/pages/faropdf.astro`（+332 / -74 行）：5 段式结构与 Folia 详情页完全对齐。features 数据严格来自 FaroPDF README + CHANGELOG 0.1.0-alpha.0 ~ 0.1.0-alpha.13 实际交付能力，**不**发明未交付功能。
  - 8 项 features：阅读与检索 / 批注 / 页面整理 / OCR 扫描 / 导出 / 表单签署 / 法律材料友好 / 设置 + 自动更新。每条带 ship 证据（如「9 种批注类型 / 6 色色板 / 5 套图章模板 / 中文图章真实绘制」/「OCR bridge 真实接入 ocrmypdf 本地 + PaddleOCR / MinerU 云端」/「tauri-plugin-updater 9 态状态机 + autoUpdateCheck 设置项 (DEC-056)」）。
  - hero 加 icon frame（132×132 圆角容器 + 96px icon 居中），比 minimal 直接放 80px icon 更"app icon"质感。
  - download 面板明示"待发布"（与 README 一致，alpha 阶段无公开 release），并附 macOS 首次运行 `xattr` 未来指引 + `docs/RELEASE.md` 引用。
  - 复用与 Folia 详情页相同的 `.feature-card` 彩条（:nth-child(2) sage / (3) accent / (4) steel）+ `.workflow-list` 编号圆 + 响应式 980/680px 两档断点。
  - FaroPDF 专属样式（hero icon-frame、hero text layout）放内嵌 `<style>` 块 scoped。
- 1 commit（`6d8f52b`）。未修改任何源项目（Folia / FaroPDF）仓内容。
- 验证：`npm run build` 干净，3 页（`/index.html` / `/folia/index.html` / `/faropdf/index.html`）生成，文件大小 5KB-13KB。
- 已知限制：ISS-005 跨仓 cleanup（删除 Folia `website/` + 删 `.github/workflows/pages.yml` + 更新 Folia / FaroPDF README 链接到 personal-site）未做，是独立小 PR。

## 0.1.0-alpha.1 - 2026-06-05

- Phase 1 + Phase 1.5 + Phase 2 合并发布：scaffold + bio + 产品列表 + Folia website 迁出 + GitHub Pages 自动部署（ISS-028 路线图 Phase 0-2 全部落定）。
  - **新增** Astro 6.3.1 脚手架：`astro.config.mjs`（site URL + base path 环境变量覆盖）+ `package.json`（astro + typescript devDeps）+ `tsconfig.json`（strict）+ `public/favicon.png` + `public/icons/{folia,faropdf}-icon.png`（256×256 衍生自源项目）。
  - **新增** 数据层 `src/data/author.ts`（杨卫薪律师 bio + 联系方式：微信 `ywxlaw` / GitHub `cat-xierluo`）+ `src/data/products.ts`（Folia / FaroPDF 产品元数据：slug / tagline / summary / repo / path / icon / accent 色板标签）。
  - **新增** 公共组件 `src/components/{SiteHeader,SiteFooter,ProductCard}.astro` + 公共布局 `src/layouts/BaseLayout.astro`（head + header + footer 统一封装）。
  - **新增** 共享设计系统 `src/styles/site.css`：OKLCH 色彩 token（`--bg` / `--surface` / `--ink` / `--accent` / `--sage` / `--steel`）+ 衬体大标题（Iowan Old Style / Charter / Noto Serif SC）+ 现代无衬体正文 + 媒体查询断点 980px / 680px。继承自 Folia website site.css，扩展 product-card / contact / about-grid 样式。
  - **新增** 主页 `src/pages/index.astro`：hero（杨卫薪律师名字 + 律师 + 工作领域 + bio 摘要 + GitHub CTA）+ about 段（个人定位与产品入口说明）+ products 段（ProductCard 2 cards：Folia sage 彩条 / FaroPDF steel 彩条）+ contact 段（微信 / GitHub / 领域标签）。
  - **新增** Folia 详情页 `src/pages/folia.astro`：5 段式（hero + app mockup 窗口 + intro + features 4 项 + workflow 4 步 + download 平台说明）。从 `cat-xierluo/Folia/website/src/pages/index.astro` 完整迁出，资源从 `cat-xierluo/Folio/website/src/assets/folia-icon.png` 复制（577KB 原图）。Folia 专属样式（app-window / paper / workflow 编号圆 / feature-card 彩条）内嵌 `<style>` 块 scoped。
  - **新增** FaroPDF 详情页 `src/pages/faropdf.astro`（v1 minimal 版本，Phase 3 扩为全结构 — 见 ISS-004）：产品 icon + tagline + summary + 6 features 列表（阅读 / 批注 / 页面整理 / OCR / 表单签署 / 导出 / 法律材料），主操作「查看源码（GitHub）」+「了解 Folia →」互链。
  - **新增** 项目协议文档：`README.md`（项目介绍 + 快速开始 + 资源来源 + 部署）+ `AGENTS.md`（协作规则 + 文件清单 + Skill 强制调用）+ `docs/TASKS.md`（ISS-001 ~ ISS-008 任务卡：5 活跃 + 3 暂缓）+ `docs/DECISIONS.md`（DEC-001 ~ DEC-005：框架 Astro / 资源单一真相源 / 5 段式详情页结构 / 项目文档协议 / GitHub Pages 部署）+ `docs/ROADMAP.md`（Phase 0-2 + v1.0 / v1.1 / v1.2 增量）。
  - **新增** CI `.github/workflows/deploy.yml`：push main / workflow_dispatch 触发 → checkout → setup-node 20 → setup-pages → npm ci → astro build（PERSONAL_SITE_URL / PERSONAL_BASE_PATH 环境变量）→ upload-pages-artifact → deploy-pages（github-pages 环境 + pages: write + id-token: write 权限）。**首次需手动在 GitHub repo Settings → Pages → Source = GitHub Actions 启用一次**。
  - **范围**：3 commit（`a92dacd` / `01c4f75` / `3891da4`）。未修改任何源项目（Folia / FaroPDF）仓内容。
- 已知限制：v1 不含 i18n 英文版（ISS-006 v1.1）、不含微信二维码（ISS-007 v1.1）、不含自定义域（ISS-008 v1.2）。FaroPDF 详情页是 minimal 状态（ISS-004 Phase 3 扩内容）。跨仓 cleanup（ISS-005：Folia 仓删 website/ + 更新 README，FaroPDF 仓更新 README）待启动。
- 验证：`npm run build` 干净，3 页（index.html / folia/index.html / faropdf/index.html）生成。`sips -g pixelWidth -g pixelHeight` 验证 256×256 / 64×64 PNG 实际像素正确。FaroPDF 详情页 6 features 与 CHANGELOG 0.1.0-alpha.0 ~ 0.1.0-alpha.13 实际交付能力一致。
