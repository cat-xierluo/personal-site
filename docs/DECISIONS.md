# personal-site 决策记录

## DEC-001 Astro 6.3.1 静态站（不引入 React / Vue）

- 日期：2026-06-05
- 状态：已采纳
- 关联任务：ISS-001

### 决策

框架选 **Astro 6.3.1** 静态站（与 Folia website 同一技术栈）。

### 关键配置

```js
// astro.config.mjs
export default defineConfig({
  site: process.env.PERSONAL_SITE_URL ?? 'https://cat-xierluo.github.io',
  base: process.env.PERSONAL_BASE_PATH ?? '/',
  output: 'static',
  trailingSlash: 'always',
});
```

- `site` / `base` 通过环境变量覆盖，方便本地 dev vs 部署切换
- `output: 'static'` 完全静态，无 SSR
- `trailingSlash: 'always'`（避免 GitHub Pages 子路径下相对路径 bug）

### 拒绝的方案

- **Vite + React**：对纯静态营销页太重，client JS bundle 拖累首屏
- **Next.js**：SSR 优势用不上（没有动态数据），deploy 复杂度高
- **Hugo / Jekyll**：Folia website 已经在用 Astro，跨项目不一致
- **纯 HTML + CSS**：没有组件化，后期维护成本高

---

## DEC-002 资源来源单一真相源

- 日期：2026-06-05
- 状态：已采纳
- 关联任务：ISS-001 / ISS-003 / ISS-004

### 决策

**所有 icon / favicon 资源严格从源项目复用**，不重新设计。避免视觉分裂（DEC-054 在 FaroPDF 项目的教训：自创 SVG 与项目 icon 风格不一致）。

| 资源 | 源 | personal-site 位置 |
| --- | --- | --- |
| Folia icon | `Folio/website/src/assets/folia-icon.png`（577KB） | `src/assets/folia-icon.png` + `public/icons/folia-icon.png`（256×256） |
| FaroPDF icon | `FaroPDF/src-tauri/icons/icon-source.png`（1254×1254） | `public/icons/faropdf-icon.png`（256×256） |
| 站点 favicon | Folia icon 64×64 简化版 | `public/favicon.png` |

### 衍生规则

- PNG 衍生用 `sips -z N N source.png --out target.png`
- 256×256 用于 README inline / 详情页 hero
- 64×64 用于 favicon
- 源 PNG（577KB / 1.3MB）不进 personal-site 仓库

---

## DEC-003 5 段式详情页结构（继承自 Folia website）

- 日期：2026-06-05
- 状态：已采纳
- 关联任务：ISS-003 / ISS-004

### 决策

**所有产品详情页统一 5 段结构**：
1. **hero**：产品 icon + 产品名 + tagline + 摘要 + 主 CTA + 可选 app mockup
2. **intro**："为什么做 [产品]" 背景说明
3. **features**：3-8 项产品能力（feature-card 彩条视觉）
4. **workflow**：3-6 步典型使用流程（workflow-list 编号圆）
5. **download**：GitHub Releases 链接 + 平台说明

CSS 类名跨页共享（`.feature-card` / `.workflow-list` / `.download-panel` 等）。

### 变体约定

- **Folia**：完整 5 段，含 app mockup（markdown editor + paper preview，纯 HTML/CSS）
- **FaroPDF**：完整 5 段，icon-only hero（app mockup 留 v1.1）
- **Legal Skills**：完整 5 段，icon-only hero

---

## DEC-004 项目文档协议

- 日期：2026-06-05
- 状态：已采纳
- 关联任务：所有 ISS

### 决策

沿用 FaroPDF / Folia 的项目文档协议：README + TASKS + DECISIONS + ROADMAP + CHANGELOG。决策编号 DEC-XXX 连续。与 FaroPDF 协议一致，跨项目切换无认知断层。

---

## DEC-005 GitHub Pages + GitHub Actions 部署

- 日期：2026-06-05
- 状态：已采纳
- 关联任务：ISS-002

### 决策

push main 自动部署。workflow 用 `withastro/action` + `actions/deploy-pages@v4`。并发组 `pages`（避免并发 deploy 互相覆盖）。免费（公开 repo）。

### 配置要点

- 触发：`push main` + `workflow_dispatch`
- 权限：`pages: write` + `id-token: write`
- 环境：`github-pages`（GitHub 强制要求）
- 首次需手动在 GitHub repo Settings → Pages → Source = GitHub Actions 启用

---

## DEC-006 i18n 自建轻量字典 + `/en/` 子路径

- 日期：2026-06-05
- 状态：已采纳
- 关联任务：ISS-006

### 决策

自建 `src/i18n/{types,zh-CN,en,index}.ts`，不引入 astro-i18next / paraglide。`Messages` interface 强约束字典结构，漏译 TS 编译失败。路由用 `/en/` 子路径，zh-CN 为 root 默认。

### 路由约定

```text
src/pages/
  index.astro            → /              (zh-CN, URL-detected)
  folia.astro            → /folia/        (zh-CN)
  faropdf.astro          → /faropdf/      (zh-CN)
  legal-skills.astro     → /legal-skills/ (zh-CN)
  en/
    index.astro          → /en/           (en, hardcoded)
    folia.astro          → /en/folia/     (en)
    faropdf.astro        → /en/faropdf/   (en)
    legal-skills.astro   → /en/legal-skills/ (en)
```

zh-CN 页面 URL 检测 locale → 传给 page 组件。en 页面直接 `locale="en"` 硬编码。

### 工具函数

- `localeFromPath(pathname, baseUrl)`：去掉 baseUrl 后判断 `/en/` 前缀
- `alternatePathForLocale(pathname, currentLocale, baseUrl)`：计算语言切换 URL，保留当前页面
- `getDictionary(locale)`：返回 `Messages`（强制类型对齐）

### 语言切换器

SiteHeader 右上角 pill 按钮：中文页显示「EN」，英文页显示「中」。`<html lang>` 输出 `en` 或 `zh-CN`。

### 拒绝的方案

- **astro-i18next**：与 i18next 强耦合，多余中间层
- **paraglide-js**：tree-shake 友好但需 build pipeline 集成，v1 无此需求
- **Astro 官方 i18n routing**：原生支持有限，URL 直接判断更直观

### 已知限制

- v1 不做 locale cookie 记忆
- 不做 `/zh/` 显式前缀（zh-CN 是 root 默认）
- 不支持按 locale 拆 bundle（字典 < 5KB 可忽略）

---

## DEC-007 微信二维码：WechatQr 组件

- 日期：2026-06-05
- 状态：已采纳（DEC-009 修正资源源）
- 关联任务：ISS-007

### 决策

`WechatQr.astro` 共享组件（props: `size: 64 | 160` + `alt` + `caption?`），footer 64×64 + contact 160×160 共用同一图片资源。

- 图片走 `src/assets/`（Astro import 自动 hash + BASE_URL 前缀），不用 `public/`（无 cache busting）
- `<img>` 带 `loading="lazy"` + `decoding="async"`
- `class:list` 区分尺寸，CSS 集中控制

### DEC-009 修正

原声明"从 FaroPDF 复制"是误读（FaroPDF 那个自始至终是 1×1 占位）。真实单源 = `Folia/docs/wechat-qr.png`（734×734 / 184KB）。ISS-010 完成替换。FaroPDF 仓待跨仓同步。

### 拒绝的方案

- SVG inline / 远程 QR 生成 API：增加运行时或第三方依赖
- 不做组件、footer 和 contact 各贴 `<img>`：散改不符合 DEC-002
- 图片 base64 内联 CSS：CSS 膨胀，hash 缓存失效

---

## DEC-008 部署修复（lock file + Pages 启用 + Node 22）

- 日期：2026-06-05
- 状态：已采纳
- 关联任务：ISS-009

### 决策

三根因分别修复：
1. 补 `package-lock.json`（`npm ci` 要求 lock file 存在）
2. 用户手动启用 GitHub Pages（Agent 不擅自改共享仓库设置）
3. workflow Node 20 → 22（Astro 6.4 要求 >=22.12.0），`package.json` 加 `engines.node`

### 拒绝的方案

- 锁 Astro 6.3.1（minor 升级长期不可持续）
- `npm install` 替 `npm ci`（放弃 lock file 锁版本能力）
- Agent 代调 `POST /pages` 启 Pages（保护共享仓库，违反用户授权边界）

### 已知限制

- GitHub Pages 启用是用户一次性手动操作（transfer ownership 需重做）
- Astro minor 演进可能引入新 Node 版本要求
- `engines` 字段不阻断 `npm install --force`，但 `astro build` 硬性校验

---

## DEC-009 真实微信二维码替换 + DEC-007 修正

- 日期：2026-06-05
- 状态：已采纳
- 关联任务：ISS-010

### 决策

personal-site 换用 `Folia/docs/wechat-qr.png`（184KB 真实 QR）。DEC-007 原文保留不改动（历史准确性），本 DEC supersede。

### 三仓状态

| 仓 | 路径 | 状态 |
| --- | --- | --- |
| Folia（真源） | `docs/wechat-qr.png` | 734×734 / 184KB，不动 |
| personal-site | `src/assets/wechat-qrcode.png` | 184KB，已替换 |
| FaroPDF | `src/assets/wechat-qrcode.png` | 待跨仓同步 |

---

## DEC-010 站点 URL 去 subpath（改仓名为 cat-xierluo.github.io）

- 日期：2026-06-05
- 状态：已采纳
- 关联任务：ISS-011

### 决策

仓名 `cat-xierluo/personal-site` → `cat-xierluo/cat-xierluo.github.io`（user site，根域）。

- 代码 `base: '/'`，`src/**` 全走 `import.meta.env.BASE_URL`，零代码改动
- 旧 URL 立即 404（用户确认接受，不做 redirect / 404 引导页）
- 本地目录名保留 `personal-site/`（用户决策），git remote URL 改向新名
- 历史文档（CHANGELOG / DEC）里的旧 URL 不改写（DEC 时间戳语义）

### 顺手修复

`src/data/products.ts` icon 路径去前导 `/`（`'/icons/...'` → `'icons/...'`）。原 `${base}${product.icon}` 拼接在新 `base='/'` 下产生 `//icons/...`（protocol-relative URL 跨域失败）。

### 拒绝的方案

- 只改 `base: '/'` 不改名：不可行，GitHub 强制按仓名决定 URL 前缀
- 自定义域（ISS-008 已取消）
- 保留旧仓 + 新建 `cat-xierluo.github.io` 并存：每账号只能 1 个 user site，两个仓同步不可持续

### 已知限制

- 旧 → 新 URL 无 server-side 301（GitHub Pages 不支持）
- 改名到 deploy 之间有短暂 404 窗口（约数十分钟）

---

## DEC-011 Legal Skills 集成

- 日期：2026-06-06
- 状态：已采纳
- 关联任务：ISS-012

### 决策

主页加第 3 张产品卡（accent=royal 深紫蓝 `oklch(0.30 0.16 285)`），3-column grid。新建 Legal Skills 5 段式详情页。3 个详情页共享 `.back-link` + `meta.backToHome` 字段。

### 资源

legal-skills-icon：源 `legal-skills/docs/legal-skills-icon.jpg`（1536×1024 横版）→ PIL 裁中心 660×660 分子结构 → resize 256×256 → `public/icons/legal-skills-icon.png`（34KB）。横版裁去右侧文字方块（80px 下文字读不清，分子结构更标志性）。

### Features 设计约束

- 16 skill 按 4 大类各 4 个代表选取，**不**穷举（README 才是准）
- 卡内：技能名（mono 字体）+ 1 句话说明
- **不**带版本号 / 许可证 / 数量（项目持续演进）

### 拒绝的方案

- 按 4 大类分小节加分类标题：破坏与 Folia / FaroPDF 的统一结构
- 用横版裁全幅：破坏方形 icon 与其他产品一致性
- 实时显示 star 数：易过期数据不进文案
- back-link 放各 page 自己字段：移入共享 `meta.backToHome`

### 已知限制

- 16 skill 代表性会随时间漂移，未来需定期 sync
- 主页 3 张产品卡 680-980px 断点换行成 2+1（不对称）

---

## DEC-012 Header / Footer 简化

- 日期：2026-06-07
- 状态：已采纳
- 关联任务：ISS-014

### 决策

**Header**：删 `.brand` 块（不显作者名）；主页左上留空；详情页左上显 back-link（功能上移到 header，hero 下方 in-content back-link 全删）。Top-right nav 保留。

**Footer**：删 `.footer-links`（与 header nav 重复）+ 删 `.footer-wechat` + WechatQr（与 homepage contact 重复）+ 删 8 dead FooterMessages 字段 + 删 ~50 行死样式。Footer 只剩 brand + tagline（左）+ copyright（右）。

- `WechatQr.astro` 组件保留（homepage contact section 仍用）
- 净 -110 行（9 files / +15 / -125）
