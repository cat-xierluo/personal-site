# personal-site 任务源

> **当前阶段**：v0.1.0-alpha.6 — Phase 1 + 1.5 + 2 + 3 主体 + v1.1（i18n + 微信二维码） + 部署修复（ISS-009） + 真实微信二维码替换（ISS-010）均已落定。ISS-008 自定义域按用户决策取消。

## 活跃任务

> 当前无可执行活跃任务。如下方"已取消任务"或"归档任务索引"所示，v1 MVP / v1.1 增量 / 部署链路 / QR 真实化均已收口。下一步候选：FaroPDF 仓同步真实 QR（跨仓 follow-up，DEC-009 § 已知限制）、v1.2 内容增量（ISS-011 候选：博客 / 案例 / 时讯 / RSS / sitemap）等，等 PM 启动。

## 已取消任务

### ISS-008 自定义域（v1.2，已取消）

- 优先级：P2
- 类型：部署
- 状态：**用户决策取消（2026-06-05）**
- 依赖：v1 MVP + v1.1
- 范围：DNS 配置 + `astro.config.mjs` site URL
- 目标：从 `cat-xierluo.github.io/personal-site/` 迁到自定义域（如 `yangweixin.com` / `weixin.law` 等）
- 验收：DNS CNAME 配置正确；HTTPS 证书自动；`PERSONAL_SITE_URL` 环境变量在 deploy.yml 覆盖
- **取消原因**：用户在 ISS-009 排查期间明确决定"项目的域名就先不做配置吧，我们就用这个 GitHub 本身的那个，GitHub 点 io 的这个网址"，保持 `https://cat-xierluo.github.io/personal-site/` 作为正式站点。资源投入（DNS / CNAME / HTTPS 证书 / 续费）相对项目体量（v1 MVP 6 页静态站）ROI 偏低；如未来需要再重启为 v1.3+ 任务。

## 归档任务索引

### ISS-001 个人主页 scaffold + bio + 产品列表（已完成）

- 2026-06-05：commit `a92dacd`。3 页静态生成（`index.html` / `folia/index.html` / `faropdf/index.html`），5 段齐全（hero / about / products / contact / footer），资源从源项目复用（DEC-002 § 2.3）。

### ISS-002 personal-site GitHub Pages 自动部署（workflow 已交付，ISS-009 修复激活）

- 2026-06-05：commit `01c4f75`。workflow 文件就位（permissions / concurrency / 环境变量 / 步骤顺序）。
- 2026-06-05：ISS-009 排查发现 workflow 文件本身正确，但 main 上 5 个 push 的 Actions 全部失败，根因不在 workflow 而是 (1) 缺 lock file + (2) GitHub Pages 未启用 + (3) Node 20 不足以跑 Astro 6.4。三项在 ISS-009 / DEC-008 收口（见归档）。

### ISS-003 Folia website 迁出到 personal-site（Phase 2 主体，已完成）

- 2026-06-05：commit `3891da4`。Folia 详情页 5 段式（hero / app mockup / intro / features 4 / workflow 4 / download）从 `cat-xierluo/Folia/website/src/pages/index.astro` 完整迁出。Folia 仓 cleanup（删 `website/` + 更新 README）由 ISS-005 PR-A 处理。

### ISS-004 FaroPDF 详情页扩为全结构（Phase 3，已完成）

- 2026-06-05：commit `6d8f52b`。FaroPDF 详情页从 minimal 扩为 Folia 同结构（hero / intro / features 8 / workflow 4 / download），数据严格来自 FaroPDF CHANGELOG 0.1.0-alpha.0 ~ 0.1.0-alpha.13 实际交付能力，**不**发明未交付功能。

### ISS-005 跨仓 cleanup（Folio + FaroPDF README 链接，已完成）

- 2026-06-05：PR-A Folia `website/` 删除 + README 更新 / PR-B FaroPDF README 链接更新（PR-A 已合并 / PR-B 已合并）。两个仓 README 一致指向 personal-site 产品页。

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

### ISS-009 修复 Actions 失败：补 lock file + 启用 GitHub Pages + 升 Node 22（已完成）

- 2026-06-05：ISS-009 落地（PR #3 fix/iss-009-lock-file 已合并为 `4ffff64`；本次 follow-up PR docs/iss-009-deploy-fix 待合并）
  - **根因 1 — 缺 `package-lock.json`**：`npm ci` 严格要求 lock file，scaffold 时只生成 `package.json`。**修复**：`npm install --package-lock-only` 生成 `package-lock.json`（257 packages / 0 vulnerabilities），让 Install 步骤通过。PR #3。
  - **根因 2 — GitHub Pages 未启用**：`.github/workflows/deploy.yml` 假设 Pages 已开，但仓库 Settings 默认是关闭的。**修复**：用户手动在 GitHub 仓库 Settings → Pages → Source = GitHub Actions 启用一次（一次性配置，Agent 不应代调 API 改共享仓库设置）。验证：`GET /repos/cat-xierluo/personal-site/pages` 返回 `{"build_type":"workflow","public":true,"html_url":"https://cat-xierluo.github.io/personal-site/"}`。
  - **根因 3 — Node 20 不支持 Astro 6.4**（follow-up 发现）：补完 lock file 后 PR #3 触发的 run 仍然失败 —— Astro 6.4.4 要求 Node `>=22.12.0`，但 `setup-node@v4` 装的是 20.20.2，错误信息 `Node.js v20.20.2 is not supported by Astro!`。**修复**：
    - `.github/workflows/deploy.yml` line 27 `node-version: 20` → `node-version: 22`
    - `package.json` 新增 `"engines": { "node": ">=22.12.0" }` 显式声明
  - **范围**：1 commit（fix/iss-009-lock-file）+ 1 follow-up commit（docs/iss-009-deploy-fix，含 workflow 修复 + 文档同步）。未修改任何源项目（Folia / FaroPDF）仓内容。
  - **验证（预期）**：`gh run watch` 跑完一次 main 触发的 deploy 应进入 success；`curl -I https://cat-xierluo.github.io/personal-site/` 应返回 200 + `text/html`。
  - **决策记录**：DEC-008（背景 / 决策 / 关键决策 / 拒绝的方案 / 资源放置 / 验证 / 已知限制）。
  - **已知限制**：GitHub Pages 启用是用户一次性手动操作（未来 transfer ownership 或新 fork 需要重做）；Astro 6.4.x 仍在 minor 演进，未来若引入 Node 24+ 强制要求需同步升 setup-node。

### ISS-010 真实微信二维码替换（已完成）

- 2026-06-05：ISS-010 落地（feat/iss-010-real-qr，docs 同步）
  - **修正 DEC-007 单源声明**：DEC-007 § 资源单源 写的"从 `FaroPDF/src/assets/wechat-qrcode.png` 复制"实际是误读 — FaroPDF 那个文件自 ISS-007 时就是 1×1 占位（67 字节），真实 QR 一直在 `Folia/docs/wechat-qr.png`（734×734 / 184KB / 2026-05-20 入仓）。本次新增 DEC-009 supersede 修正单源 = Folia docs，**不**改 DEC-007 原文保留历史
  - **资源替换**：`cp Folia/docs/wechat-qr.png personal-site/src/assets/wechat-qrcode.png`（734×734 / 184KB），Astro build 资源 hash 从 `DdK2Yptz`（占位 67B）自动变为 `BL2G81aV`（真图 184KB）。零代码改动
  - **范围**：1 commit（feat/iss-010-real-qr）。**未**修改任何源项目（Folia / FaroPDF）仓内容；FaroPDF 仓 `AuthorCard` 仍是 1×1 占位，跨仓 follow-up 不在本次范围
  - **验证**：`npm run build` 干净 6 页生成，`dist/_astro/wechat-qrcode.BL2G81aV.png` 184KB 已替换占位版本，HTML/JS 自动跟随新 hash
  - **决策记录**：DEC-009（背景 / DEC-007 修正说明 / 决策 / 关键决策 / 拒绝的方案 / 资源放置 / 验证 / 已知限制）

## 进度日志

- 2026-06-05：ISS-001 scaffold + bio + 产品列表占位 + 主页（commit `a92dacd`）
- 2026-06-05：ISS-002 GitHub Actions workflow（commit `01c4f75`）
- 2026-06-05：ISS-003 Folia website 迁出主体（commit `3891da4`）
- 2026-06-05：ISS-004 FaroPDF 详情页扩全结构（commit `6d8f52b`）
- 2026-06-05：项目协议落地（AGENTS / docs/TASKS / docs/DECISIONS / docs/ROADMAP / CHANGELOG，commit `0ef5455`）
- 2026-06-05：ISS-005 跨仓 cleanup（PR-A Folia `website/` 删除 + README 更新 / PR-B FaroPDF README 链接更新，PR-A 已合并 / PR-B 已合并）
- 2026-06-05：ISS-006 中英文切换（feat/iss-006-i18n，6 页 + 3 components + 1 layout + 2 data + i18n/ 字典，docs-only 同步）
- 2026-06-05：ISS-007 微信二维码（feat/iss-007-wechat-qr，QR 资源从 FaroPDF 复制 + 新 WechatQr 共享组件 + footer mini 64×64 + contact big 160×160 + i18n 字典扩展 + docs 同步）
- 2026-06-05：ISS-009 部署修复（PR #3 fix/iss-009-lock-file 补 `package-lock.json` + 用户手动启用 GitHub Pages + 本次 follow-up 升 Node 22 修 Astro 6.4 engine；DEC-008 落地）
- 2026-06-05：ISS-008 自定义域按用户决策取消，保持 `https://cat-xierluo.github.io/personal-site/`
- 2026-06-05：ISS-010 真实微信二维码替换（feat/iss-010-real-qr，从 Folia/docs 真源复制 184KB QR，hash 升级到 `BL2G81aV`；DEC-009 supersede 修正 DEC-007 单源）
- 下一步：v1 MVP / v1.1 增量 / 部署链路 / QR 真实化 全部收口；可启动跨仓 follow-up（FaroPDF 仓同步真实 QR）或 v1.2 内容增量（ISS-011 候选：博客 / 案例 / 时讯 / RSS / sitemap 等），等用户下一步指令
