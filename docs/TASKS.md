# personal-site 任务源

> **当前阶段**：Phase 1 + Phase 1.5 + Phase 2 主体已落（v0.1.0-alpha.1）。Phase 3 详情页扩内容 + 跨仓 cleanup 待推进。

## 活跃任务

### ISS-001 个人主页 scaffold + bio + 产品列表

- 优先级：P0
- 类型：项目卫生（chore / 工具链）
- 状态：第一版已交付
- 建议分支：—
- 依赖：无
- 范围：`astro.config.mjs` / `package.json` / `tsconfig.json` / `src/{components,data,layouts,pages,styles}/` / `public/{favicon.png,icons/}` / `README.md` / `AGENTS.md` / `docs/{TASKS,DECISIONS,ROADMAP}.md` / `CHANGELOG.md`
- 目标：杨卫薪律师个人主页 v1 MVP 落地：bio hero + about + 产品列表（2 cards：Folia / FaroPDF）+ 联系方式；产品详情页占位版本（待 Phase 3 扩内容）
- 验收：
  - `npm run build` 干净
  - 主页 5 段齐全（hero / about / products / contact / footer）
  - Folia / FaroPDF 详情页可达
  - 资源严格从源项目复用（DEC-002 § 2.3）
  - 部署到 `https://cat-xierluo.github.io/personal-site/`
- 当前进度：3 页静态生成（`index.html` / `folia/index.html` / `faropdf/index.html`），commit `a92dacd` 已 push。Folia / FaroPDF 详情页是 minimal 状态。

### ISS-002 personal-site GitHub Pages 自动部署

- 优先级：P0
- 类型：CI / 部署
- 状态：第一版已交付
- 建议分支：—
- 依赖：无
- 范围：`.github/workflows/deploy.yml`
- 目标：main 分支 push 后自动 build + deploy 到 GitHub Pages
- 验收：
  - workflow 触发：push main / workflow_dispatch
  - 步骤：checkout → setup-node 20 → setup-pages → install (npm ci) → build (PERSONAL_SITE_URL/PERSONAL_BASE_PATH env) → upload-artifact → deploy-pages
  - 权限：pages: write + id-token: write
  - 并发组：pages（避免并发 deploy 互相覆盖）
  - 环境：github-pages
- 当前进度：commit `01c4f75` 已 push，workflow 文件已就位。**首次需要手动在 GitHub repo Settings → Pages → Source = GitHub Actions 启用一次**，之后全自动。

### ISS-003 Folia website 迁出到 personal-site（Phase 2 主体）

- 优先级：P0
- 类型：内容迁移（跨仓协调）
- 状态：主体已落，跨仓 cleanup 待办
- 建议分支：—
- 依赖：无（独立 Phase 1.5 后即可）
- 范围：`src/pages/folia.astro` / `src/assets/folia-icon.png`
- 目标：把 `cat-xierluo/Folia/website/src/pages/index.astro` 完整内容迁到 personal-site，替换 minimal 详情页
- 验收：
  - hero（app mockup：editor + paper 双栏）+ intro + features 4 项 + workflow 4 步 + download 5 段齐全
  - 复用 personal-site BaseLayout / SiteHeader / SiteFooter / 共享 site.css
  - Folia 专属样式（app mockup / paper / workflow 编号圆 / feature-card 彩条）内嵌在 `<style>` 块
  - 资源从源项目 `cat-xierluo/Folia/website/src/assets/folia-icon.png` 复制
- 当前进度：commit `3891da4` 已 push。Folia 仓库 cleanup（删 `website/` + 更新 README）**未做**，是独立小 PR。

### ISS-004 FaroPDF 详情页扩为全结构（Phase 3）

- 优先级：P1
- 类型：内容扩写
- 状态：第一版已交付
- 建议分支：—
- 依赖：ISS-001 scaffold
- 范围：`src/pages/faropdf.astro`
- 目标：把当前 minimal FaroPDF 详情页（6 features 列表）扩为 Folia website 同结构：hero（含产品 icon + tagline + 介绍 + 主要操作）+ intro（"为什么做 FaroPDF"）+ features 6-8 大类（阅读 / 批注 / 页面整理 / OCR / 导出 / 表单签署 / 设置 / 法律材料）+ workflow 4-6 步 + download（GitHub Releases + 安装包说明 + macOS 首次运行提示）
- 验收：
  - 结构与 Folia 详情页一致（hero / intro / features / workflow / download）✅
  - 数据来源：FaroPDF CHANGELOG 0.1.0-alpha.0 ~ 0.1.0-alpha.13 实际交付能力 ✅
  - **不**发明未交付功能 ✅
  - Icon 源：`cat-xierluo/FaroPDF/src-tauri/icons/icon-source.png`（与 DEC-002 § 2.3 单一真相源一致）✅
  - `npm run build` 干净 ✅
- 当前进度：commit `6d8f52b` 已 push。FaroPDF 详情页 5 段齐全（hero / intro / features 8 项 / workflow 4 步 / download），8 项 features 与 FaroPDF CHANGELOG 实际交付一致。下载入口标"待发布"（与 README + DEC-048 一致）。

### ISS-005 跨仓 cleanup（Folia + FaroPDF README 链接）

- 优先级：P1
- 类型：跨仓协调
- 状态：待 PM 启动
- 建议分支：分别独立小 PR
- 依赖：ISS-003 + ISS-004 落定
- 范围：
  - **Folia 仓**（`cat-xierluo/Folia`）：
    - 删 `website/` 子目录（内容已迁到 personal-site）
    - 删 `.github/workflows/pages.yml`（Folia 不再自部署）
    - 更新 `README.md` §"官方仓库" 或加注 "官网迁到 https://cat-xierluo.github.io/personal-site/folia/"
  - **FaroPDF 仓**（`cat-xierluo/FaroPDF`）：
    - 更新 `README.md` §"官方仓库" 链接到 `https://cat-xierluo.github.io/personal-site/faropdf/`
    - 同步更新 `docs/ROADMAP.md` §"v0.3 性能与发布"（如果提到官网）
- 验收：
  - 两个仓 README 一致指向 personal-site 产品页
  - Folia 仓 `website/` 删除干净（无遗漏引用）
  - Folia GitHub Pages 配置不冲突（已删 workflow）
  - 跨仓链接从 `https://github.com/cat-xierluo/personal-site` 反向连接到 `https://github.com/cat-xierluo/FaroPDF` 等

## 暂缓任务

### ISS-008 自定义域（v1.2）

- 优先级：P2
- 类型：部署
- 状态：暂缓
- 依赖：v1 MVP + v1.1
- 范围：DNS 配置 + `astro.config.mjs` site URL
- 目标：从 `cat-xierluo.github.io/personal-site/` 迁到自定义域（如 `yangweixin.com` / `weixin.law` 等）
- 验收：DNS CNAME 配置正确；HTTPS 证书自动；`PERSONAL_SITE_URL` 环境变量在 deploy.yml 覆盖

## 归档任务索引

### Phase 0 调研（已完成）

- 2026-06-05：调研 Folia website Astro 6.3.1 单页静态站结构（`website/src/pages/index.astro` + `site.css` + `public/favicon.png` + `src/assets/folia-icon.png`），与 FaroPDF 主项目 `src-tauri/icons/icon-source.png` 作为两个 icon 源
- 2026-06-05：brainstorm ISS-028 关键决策（独立仓库 / Astro / 必选 bio+产品 / 联系方式可选 / i18n v1.1 / Folia 迁出）

### ISS-006 中英文切换（v1.1，已完成）

- 2026-06-05：ISS-006 落地（PR feat/iss-006-i18n，待合并）
  - i18n 框架选型：自建轻量字典 + `/en/` 子路径，zh-CN 为默认（DEC-006）
  - **新增** `src/i18n/{types.ts,zh-CN.ts,en.ts,index.ts}`：4 个文件 ~600 行，强类型 Messages interface
  - **重构** `src/data/author.ts`：补 `nameEn` / `titleEn` / `focusEn` / `bioEn`
  - **重构** `src/layouts/BaseLayout.astro`：接受 `locale?` prop，URL 检测 fallback，`<html lang>` 切换
  - **重构** `src/components/{SiteHeader,SiteFooter,ProductCard}.astro`：3 个公共组件全走 dict，SiteHeader 右上角加 lang-switch pill 按钮
  - **新增** `src/components/pages/{HomePage,FoliaPage,FaroPdfPage}.astro`：3 个 page 组件（zh-CN / en 共享），`FolioPage.astro` 已重命名为 `FoliaPage.astro`
  - **重写** `src/pages/{index,folia,faropdf}.astro` 为 thin wrappers（URL 检测 locale）
  - **新增** `src/pages/en/{index,folia,faropdf}.astro` 镜像（locale="en" 硬编码）
  - **新增** `set:html` 指令用于 FaroPDF downloadBody1/Body2 渲染 `<strong>` / `<code>` 标签
  - Folia preview 窗口 h2 用 `preview.heading1.replace(/^#\s*/, '')` 去掉 `# ` 前缀（中英都生效）
  - **范围**：1 commit（feat/iss-006-i18n）。未修改任何源项目（Folia / FaroPDF）仓内容。
  - **验证**：`npm run build` 干净，6 页（3 zh-CN + 3 en）生成。`dist/index.html` / `dist/en/index.html` / `dist/faropdf/index.html` / `dist/en/faropdf/index.html` 抽检中英差异正确，lang-switch href 切换方向正确。

### ISS-007 微信二维码（v1.1，已完成）

- 2026-06-05：ISS-007 落地（feat/iss-007-wechat-qr，docs 同步）
  - 资源单源：从 `FaroPDF/src/assets/wechat-qrcode.png` 复制到 `personal-site/src/assets/wechat-qrcode.png`（DEC-002 § 2.3 + DEC-007）
  - 已知事实：两仓当前都是 1×1 灰度占位（67 字节），任务卡接受标准里写明「实际添加时 PM 替换真实二维码」（替换入口：FaroPDF `src/assets/wechat-qrcode.png` 和 personal-site `src/assets/wechat-qrcode.png` 各替换一次，rebuild 后 hash 自动刷新）
  - **新增** `src/components/WechatQr.astro`：共享组件，props `size: 64 | 160` + `alt: string` + `caption?: string`；用 Astro `import qrImage from '../assets/wechat-qrcode.png'` 走 `dist/_astro/` hash 资源
  - **重构** `src/components/SiteFooter.astro`：`footer-meta` 行内新增 `footer-wechat` 块，64×64 QR + 微信标签 + handle 文本
  - **重构** `src/components/pages/HomePage.astro`：contact 列表新增 `contact-item--qr` 一项，160×160 QR + caption
  - **扩展** i18n 字典（4 个字段 ×2 语种 = 8 处）：`footer.wechatHandlePrefix` / `footer.wechatQrAlt` / `index.contactWechatCaption` / `index.contactWechatQrAlt`
  - **扩展** `src/styles/site.css`：`.wechat-qr` 系列 + `.contact-item--qr` + `.footer-wechat` 样式，窄屏（≤680px）下 contact-item--qr 改单列布局
  - **范围**：1 commit（feat/iss-007-wechat-qr）。未修改任何源项目（Folia / FaroPDF）仓内容；后续 PM 替换真实二维码时需要分别去两仓替换一次。
  - **验证**：`npm run build` 干净，6 页（3 zh-CN + 3 en）生成。`dist/index.html` / `dist/en/index.html` 抽检 footer mini QR + contact big QR 都在，alt 文案中英分别正确（`微信二维码 — ywxlaw` / `WeChat QR code — ywxlaw` 等），资源 hash 一致（`DdK2Yptz`），BASE_URL 前缀 `/personal-site/` 正确。

## 进度日志

- 2026-06-05：ISS-001 scaffold + bio + 产品列表占位 + 主页（commit `a92dacd`）
- 2026-06-05：ISS-002 GitHub Actions workflow（commit `01c4f75`）
- 2026-06-05：ISS-003 Folia website 迁出主体（commit `3891da4`）
- 2026-06-05：ISS-004 FaroPDF 详情页扩全结构（commit `6d8f52b`）
- 2026-06-05：项目协议落地（AGENTS / docs/TASKS / docs/DECISIONS / docs/ROADMAP / CHANGELOG，commit `0ef5455`）
- 2026-06-05：ISS-005 跨仓 cleanup（PR-A Folia `website/` 删除 + README 更新 / PR-B FaroPDF README 链接更新，PR-A 已合并 / PR-B 已合并）
- 2026-06-05：ISS-006 中英文切换（feat/iss-006-i18n，6 页 + 3 components + 1 layout + 2 data + i18n/ 字典，docs-only 同步）
- 2026-06-05：ISS-007 微信二维码（feat/iss-007-wechat-qr，QR 资源从 FaroPDF 复制 + 新 WechatQr 共享组件 + footer mini 64×64 + contact big 160×160 + i18n 字典扩展 + docs 同步）
- 下一步：ISS-008 自定义域（personal-site v1.2）
