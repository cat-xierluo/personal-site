# personal-site 变更日志

## 0.1.0-alpha.3 - 2026-06-05

- ISS-006 中英文切换（v1.1）落地：3 页 zh-CN 全部支持 en 镜像，3 个公共组件（SiteHeader / SiteFooter / ProductCard）走 dict 驱动，SiteHeader 右上角加 lang-switch pill 按钮。
  - i18n 框架选型：自建轻量字典 + `/en/` 子路径，zh-CN 为默认（DEC-006）。**不**引入 astro-i18next / paraglide / next-intl 等运行时库。
  - **新增** `src/i18n/{types,zh-CN,en,index}.ts` 4 个文件 ~600 行：`Locale = 'zh-CN' | 'en'`，`Messages` interface 强约束字典结构，漏译 TS 编译失败。工具函数 `isLocale` / `resolveLocale` / `getDictionary` / `localeFromPath` / `alternatePathForLocale`。
  - **重构** `src/data/author.ts` 加 `nameEn` / `titleEn` / `focusEn` / `bioEn` 4 个英文字段。`bioEn` 由 ChatGPT 协助翻译（专有名词「技术类纠纷」/「数据与 AI 相关争议」/「证据组织 / OCR / 翻译 / 整理」等关键术语保持与中文一致语义）。
  - **重构** `src/layouts/BaseLayout.astro` 接受可选 `locale?: Locale` prop（URL 检测 fallback），计算 `htmlLang` 输出到 `<html lang>`，author 信息根据 locale 切中英，`description` 优先用 `dict.meta.defaultDescription`。
  - **重构** `src/components/SiteHeader.astro`：3 个导航链接走 `dict.nav.{home,folia,faropdf}`，按 locale 拼 base 路径；右上角新增 `.lang-switch` 按钮，href 由 `alternatePathForLocale(Astro.url.pathname, locale, base)` 计算，p2p 切换保留当前页面（不强制回首页）。
  - **重构** `src/components/SiteFooter.astro`：微信联系方式行根据 locale 切全角「：」/ 半角「:」分号，版权行加 `${year} · ` 前缀。
  - **重构** `src/components/ProductCard.astro`：按 locale 切 `taglineEn` / `summaryEn`，详情页 href 在 en locale 加 `/en/` 前缀。
  - **新增** `src/components/pages/{HomePage,FolioPage,FaroPdfPage}.astro` 3 个 page 组件，**重构动机**：避免 zh-CN / en 6 个页面 body 内容重复 ~1000 行。所有 page 组件接受 `locale: Locale` prop，内部 compute dict / title / backHref / 各种 locale-aware 值，再渲染完整 body + scoped `<style>` 块。
  - **重命名** `FolioPage.astro` → `FoliaPage.astro`（typo fix，与 Folia 产品名一致；class 命名都是 `folia-`）。
  - **重写** `src/pages/{index,folia,faropdf}.astro` 为 thin wrappers（5 行：URL 检测 locale → 调用 page 组件）。
  - **新增** `src/pages/en/{index,folia,faropdf}.astro` 镜像（4 行：直接 `<Component locale="en" />`）。
  - **关键交互**：FaroPDF downloadBody1 / Body2 用 `set:html` 指令渲染 `<strong>` / `<code>` 标签。Folia preview 窗口 paper pane h2 用 `preview.heading1.replace(/^#\s*/, '')` 去掉 `# ` 前缀（中英都生效）。
  - **新增** Folia preview 字典化：filename / heading1 / heading2a / heading2b / bullet1 / bullet2 / paragraph / tableCol1-3 / cellInput / cellInterview / cellOrganized / cellReference / cellPending / cellOutput / cellOutputValue / blockquote，共 18 个字段，中英两套完整对照。
  - **范围**：1 commit（feat/iss-006-i18n，squash merge）。未修改任何源项目（Folia / FaroPDF）仓内容。
  - **验证**：`npm run build` 干净，6 页（3 zh-CN + 3 en）生成。`dist/index.html` / `dist/en/index.html` / `dist/faropdf/index.html` / `dist/en/faropdf/index.html` 抽检中英差异正确，lang-switch href 切换方向正确（中文页 `href="/personal-site/en/"`，英文页 `href="/personal-site/"`）。`@astrojs/check` 未装（无 typecheck npm script，build 内置类型校验通过即认为 OK）。
  - **已知限制**：v1 不做 locale cookie 记忆（用户每次切语言不持久化），不做 `/zh/` 显式前缀（zh-CN 是 root 默认）。后续 ISS-007 微信二维码和 ISS-008 自定义域与 i18n 框架正交，可独立推进。

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
