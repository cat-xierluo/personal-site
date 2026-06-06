# personal-site 决策记录

## DEC-001 Astro 6.3.1 静态站（不引入 React / Vue）

- 日期：2026-06-05
- 状态：已采纳
- 关联任务：ISS-001

### 背景

杨卫薪律师个人主页 v1 需要：作者 bio + 两个开源产品展示 + 联系方式 + 后续 i18n（v1.1）。内容以营销 / 介绍为主，无交互逻辑、无服务端依赖。设计语言继承自 `cat-xierluo/Folia` 的 `website/`（同一作者、同一协议、同一图标风格家族）。

### 决策

框架选 **Astro 6.3.1** 静态站（与 Folia website 同一技术栈）。

### 关键决策

- **优**：
  - 零运行时 JS（默认），SEO 友好，静态 CDN 部署
  - 单页 / 多页模式都自然（`src/pages/*.astro`）
  - 与 Folia website 用同一套 astro 模式，认知负担最低
  - 组件化清晰（`src/components/` + `src/layouts/` + `src/data/`）
  - Markdown / MDX 支持（v1.1 blog 扩展）
- **劣**：
  - 缺少 Folia 那种"app mockup 窗口"的纯 HTML/CSS 复刻能力（Astro `<style scoped>` 仍可写 CSS，但不像纯 HTML 那样粘在一起）
  - i18n 需额外配置（astro-i18next / 自建 / paraglide）
  - 没有 React 那种客户端组件生态（如果未来要加交互组件要 `client:` directive）
- **拒绝的方案**：
  - **Vite + React**（与 FaroPDF 主项目一致）：对纯静态营销页太重；client JS bundle 拖累首屏；不易部署到 GitHub Pages 纯静态
  - **Next.js**：SSR 优势用不上（没有动态数据），deploy 复杂度高
  - **Hugo / Jekyll**：Folia website 已经在用 Astro，跨项目不一致
  - **纯 HTML + CSS**：没有组件化，后期维护成本高

### 关键配置

```js
// astro.config.mjs
export default defineConfig({
  site: process.env.PERSONAL_SITE_URL ?? 'https://cat-xierluo.github.io',
  base: process.env.PERSONAL_BASE_PATH ?? '/personal-site',
  output: 'static',
  trailingSlash: 'always',
});
```

- `site` / `base` 通过环境变量覆盖，方便本地 dev（`/` base）vs 部署（`/personal-site` base）切换
- `output: 'static'` 完全静态，无 SSR
- `trailingSlash: 'always'` 与 Folia website 一致（避免 GitHub Pages 子路径下相对路径 bug）

### 验证

- `npm run build` 3 页面（`index.html` / `folia/index.html` / `faropdf/index.html`）干净生成
- 部署目标：GitHub Pages + `actions/deploy-pages@v4`

## DEC-002 资源来源单一真相源

- 日期：2026-06-05
- 状态：已采纳
- 关联任务：ISS-001 / ISS-003 / ISS-004

### 背景

personal-site 主页需要两个产品 icon（Folia + FaroPDF）+ 站点 favicon。**自创 SVG / PNG 会出现视觉分裂**（DEC-054 在 FaroPDF 项目的同等教训：自创 SVG 灯塔与项目 `icon-source.png` 风格不一致，PR #39 修正）。

### 决策

**所有 icon / favicon 资源严格从源项目复用**，不重新设计。

| 资源 | 源 | 在 personal-site 的位置 |
| --- | --- | --- |
| Folia icon | `cat-xierluo/Folio/website/src/assets/folia-icon.png`（577KB 原始） | `src/assets/folia-icon.png`（Astro 资源处理）+ `public/icons/folia-icon.png`（256×256 衍生） |
| FaroPDF icon | `cat-xierluo/FaroPDF/src-tauri/icons/icon-source.png`（1254×1254 master） | `public/icons/faropdf-icon.png`（256×256 衍生） |
| 站点 favicon | Folia icon 64×64 简化版 | `public/favicon.png` |

### 关键决策

- **优**：
  - 视觉一致：与 Folia / FaroPDF 平台图标 / 营销材料统一
  - 单一真相源：避免出现"两套灯塔" / "两套 FaroPDF icon"
  - 减少设计债：不引入新的设计资产
- **劣**：
  - 资源依赖两个仓：Folio 和 FaroPDF 的资产需要可访问
  - Folia icon 源是 577KB（personal-site 仓库会膨胀）

### 衍生规则

- PNG 衍生用 `sips -z N N source.png --out target.png`
- 256×256 用于 README inline / 详情页 hero
- 64×64 用于 favicon
- 源 PNG（577KB / 1.3MB）不进 personal-site 仓库（除了 Folia 的，因 Folia 已是 577KB 必要源）

### 验证

- 视觉上 favicon 与详情页 hero icon 与原项目 icon 100% 一致
- personal-site 不持有自创 SVG / PNG

## DEC-003 5 段式详情页结构（继承自 Folia website）

- 日期：2026-06-05
- 状态：已采纳
- 关联任务：ISS-003 / ISS-004

### 背景

Folia website 详情页结构：hero（app mockup）+ intro（"为什么做 Folia"）+ features（4 项）+ workflow（4 步）+ download（GitHub Releases + 平台说明）。FaroPDF 详情页 v1 是 minimal 状态（6 features 列表 + GitHub 链接），需要扩为同结构。

### 决策

**两个产品详情页都采用 Folia website 的 5 段式结构**：
1. **hero**：产品 icon + 产品名 + tagline + 摘要 + 主要操作按钮（了解详情 / GitHub）+ 可选 app mockup
2. **intro**："为什么做 [产品]" 一段式背景说明
3. **features**：3-8 项产品能力（feature-card 彩条视觉）
4. **workflow**：3-6 步典型使用流程（workflow-list 编号圆）
5. **download**：GitHub Releases 链接 + 平台说明 + macOS 首次运行提示（如有）

### 关键决策

- **优**：
  - 跨产品一致：用户从 Folia 详情页切到 FaroPDF 详情页无认知断层
  - 模板化：Folio 详情页 5 段可作为 FaroPDF 详情页改写模板（ISS-004）
  - 维护成本下降：CSS 类名（`.feature-card` / `.workflow-list` 等）已就位
- **劣**：
  - 不是所有产品都适合"app mockup"（FaroPDF 的 mockup 复杂度高，需要设计 / 截图）
  - 工作流步骤数差异大（Folia 4 步 vs FaroPDF 可能 6 步）

### 变体约定

- **Folia**（已落）：完整 5 段，含 app mockup（markdown editor + paper preview，纯 HTML/CSS）
- **FaroPDF**（v1 当前 minimal，ISS-004 扩）：完整 5 段，app mockup 可选（v1 阶段若设计成本高可暂用 icon-only hero；v1.1 加 mockup）

### 验证

- Folia 详情页（commit `3891da4`）5 段齐全，build 干净
- FaroPDF 详情页（ISS-004 后续 worker）需扩为同结构

## DEC-004 项目文档协议（AGENTS / TASKS / DECISIONS / ROADMAP / CHANGELOG）

- 日期：2026-06-05
- 状态：已采纳
- 关联任务：所有 ISS

### 背景

personal-site 是个新项目，没有现成的项目协议。但作为长期维护的项目（v0.1 → v0.2 → v1.0 → v1.1 → v1.2），需要清晰的协议让 PM 和 worker 能直接进入项目工作。

### 决策

**沿用 FaroPDF / Folia 的项目文档协议**：
- `README.md`：项目介绍 + 快速开始
- `AGENTS.md`：协作规则 + 文档清单 + Skill 强制调用
- `docs/TASKS.md`：唯一任务源（ISS 任务卡）
- `docs/DECISIONS.md`：决策记录（DEC-XXX 编号连续）
- `docs/ROADMAP.md`：Phase 0-4 路线图
- `CHANGELOG.md`：用户可见变更

### 关键决策

- **优**：
  - 与 FaroPDF 协议一致：PM / worker 跨项目切换无认知断层
  - 协议轻量：5 个文档，边界清晰
  - 决策可追溯：DEC 编号 + 任务卡 + 进度日志三件套
- **劣**：
  - 新项目阶段文档可能略重（Phase 1 阶段实际工作量不大）
  - 后续需要 doc-curator 维护一致性

### 当前文档状态

| 文档 | 状态 | 备注 |
| --- | --- | --- |
| `README.md` | ✅ 第一版 | 项目介绍 + 文件清单 + 资源来源 + 部署 |
| `AGENTS.md` | ✅ 第一版 | 协作规则 + 文档清单 + Skill 调用 |
| `docs/TASKS.md` | ✅ 第一版 | ISS-001 ~ ISS-008 任务卡（5 活跃 + 3 暂缓） |
| `docs/DECISIONS.md` | ✅ 第一版 | DEC-001 ~ DEC-004（框架 / 资源 / 结构 / 协议） |
| `docs/ROADMAP.md` | ⏳ 待补 | Phase 0-4 路线图 + v1 范围（v0.2 阶段） |
| `docs/ARCHITECTURE.md` | ⏳ 待补 | 架构 / 数据流 / 模块边界（v0.2 阶段，结构简单暂不需要） |
| `CHANGELOG.md` | ⏳ 待补 | Phase 1 / 1.5 / 2 变更记录（待 ISS-003 + ISS-004 收口后统一出） |

### 验证

- 协议与 FaroPDF 一致：跨项目切换无需重新学习
- 任务卡可被 worker 直接领取：ISS-001 ~ ISS-008 都有范围 / 验收 / 当前进度
- 决策记录有编号：DEC-001 ~ DEC-004 连续

## DEC-005 部署：GitHub Pages + GitHub Actions

- 日期：2026-06-05
- 状态：已采纳
- 关联任务：ISS-002

### 背景

personal-site 是纯静态站，需要：
- 自动部署（push main 即生效）
- 不需要域名注册（v1 阶段 cat-xierluo.github.io 子路径即可）
- 部署成本 = 0（GitHub Pages 公开 repo 免费）

### 决策

**GitHub Pages + GitHub Actions**：
- Workflow：`.github/workflows/deploy.yml`
- 触发：`push main` + `workflow_dispatch`
- 步骤：checkout → setup-node 20 → setup-pages → install (npm ci) → build → upload-artifact → deploy-pages
- 权限：`pages: write` + `id-token: write`（官方 actions/deploy-pages 需要）
- 并发组：`pages`（避免并发 deploy 互相覆盖）
- 环境：`github-pages`（GitHub 强制要求）

### 关键决策

- **优**：
  - 完全自动：push 即可
  - 免费：公开 repo + GitHub Pages
  - 与 Folia website 部署模式一致（同样 GitHub Pages + GitHub Actions）
- **劣**：
  - URL 受限于 `cat-xierluo.github.io/personal-site/`，自定义域要 v1.2 单独做（ISS-008）
  - GitHub Pages 不支持 SSR / Edge Functions（v1 纯静态够用）

### 启用步骤（首次）

1. GitHub repo → Settings → Pages → Source = GitHub Actions
2. 之后 push `main` 自动部署

### 验证

- workflow 文件已落（commit `01c4f75`）
- deploy.yml 用 withastro/action + actions/deploy-pages 官方组合

## DEC-006 i18n：自建轻量字典 + `/en/` 子路径（zh-CN 为默认）

- 日期：2026-06-05
- 状态：已采纳
- 关联任务：ISS-006

### 背景

personal-site v1 是中文-only（杨卫薪律师中文受众为主）。v1.1 路线图要补英文版：Folia / FaroPDF 是开源技术产品，国际读者中英文都重要，i18n 是产品曝光必要项。3 页（首页 / Folia 详情 / FaroPDF 详情）+ SiteHeader / SiteFooter / ProductCard 共 6 个组件都要支持中英。

### 决策

**自建轻量字典**（`src/i18n/{types,zh-CN,en,index}.ts`）：
- `Locale = 'zh-CN' | 'en'`，`DEFAULT_LOCALE = 'zh-CN'`
- 字典按页面分组（`nav` / `footer` / `index` / `folia` / `faropdf` / `meta`），不引入 astro-i18next / paraglide
- 路由用 `src/pages/en/*` 子路径分组，zh-CN 页面在 `src/pages/*`（默认 root）
- 三个 zh-CN 页面 + 三个 en 页面都是 thin wrapper，调用 `HomePage` / `FoliaPage` / `FaroPdfPage` 组件，组件接受 `locale: Locale` prop

### 关键决策

- **优**：
  - 零运行时依赖：不需要 astro-i18next / paraglide / next-intl 等库
  - 类型安全：`Messages` interface 强约束字典结构，漏译 TS 编译失败
  - 字典集中：所有翻译文本在 `src/i18n/{zh-CN,en}.ts` 两个文件，新增 locale 复制一份即可
  - 与 Folia website 风格延续：Folia website 早期是手写 if/else 处理 i18n，轻量可读
  - 6 个页面去重：所有 zh-CN / en 页面共享 3 个 page components + 3 个 public components，不重复 ~1000 行 body
- **劣**：
  - 手写字典：缺 IDE 翻译高亮、缺 plural / interpolation 标准库（自写 `{name}` 占位符替换）
  - 不支持运行时 locale 协商：靠 URL 切换，无 cookie 记忆
  - 不支持按 locale 拆 bundle：所有字典被 build-time 拉入（但 v1 字典 < 5KB 可忽略）

### 拒绝的方案

- **astro-i18next**：与 i18next 体系强耦合，多余中间层；项目无动态 locale 协商需求
- **paraglide-js**（inlang）：tree-shake 友好但需 build pipeline 集成，v1 阶段无此需求
- **Astro 官方 i18n routing**（`i18n: { defaultLocale, locales }` config）：原生支持有限，routing 与 dictionary 解耦需要自己写，本项目用 URL 直接判断更直观

### 路由约定

```text
src/pages/
  index.astro            → /personal-site/             (zh-CN, URL-detected)
  folia.astro            → /personal-site/folia/       (zh-CN, URL-detected)
  faropdf.astro          → /personal-site/faropdf/     (zh-CN, URL-detected)
  en/
    index.astro          → /personal-site/en/          (en, hardcoded)
    folia.astro          → /personal-site/en/folia/    (en, hardcoded)
    faropdf.astro        → /personal-site/en/faropdf/  (en, hardcoded)
```

zh-CN 页面 thin wrapper：URL 检测 locale 后传给 `HomePage` / `FoliaPage` / `FaroPdfPage` 组件。en 页面 thin wrapper：直接 `locale="en"` 硬编码。

### 关键工具

- `isLocale(value)`：类型守卫
- `resolveLocale(value)`：归一化（容错）
- `getDictionary(locale)`：返回 `Messages`（强制类型对齐）
- `localeFromPath(pathname, baseUrl)`：去掉 baseUrl 后判断是否以 `/en/` 开头，返回 'en' | 'zh-CN' | 默认
- `alternatePathForLocale(pathname, currentLocale, baseUrl)`：计算语言切换 URL（从 `/en/foo/` 切到 `/foo/`，从 `/foo/` 切到 `/en/foo/`），保留 `trailingSlash: 'always'`

### 语言切换器

- `SiteHeader` 右上角 pill 样式按钮：中文页显示「EN」+ `title="Switch to English"` + `aria-label="切换到英文"`；英文页显示「中」+ `title="Switch to Chinese"` + `aria-label="Switch to English"`
- 切换 URL 通过 `alternatePathForLocale` 计算，保留在当前页面（不强制回首页）
- 用 `data-locale` 标记当前 locale，便于后续 CSS / a11y 扩展

### HTML `lang` 属性

`BaseLayout` 在 `<html lang={htmlLang}>` 中输出 `en` 或 `zh-CN`，便于 SEO / 浏览器翻译 / 屏幕阅读器。

### 验证

- `npm run build` 6 页（3 zh-CN + 3 en）干净生成
- 抽检 `dist/index.html` / `dist/en/index.html`：
  - `<title>`：中文 `杨卫薪律师 — 律师（技术类纠纷 · 数据与 AI 相关争议）` vs 英文 `Yang Weixin, Esq. — Lawyer (Technology-related disputes · Data and AI-related issues)`
  - hero tagline：FaroPDF 中文 `面向律师的独立 PDF 阅读器` vs 英文 `An independent PDF reader for lawyers`
  - lang switch href：中文页 `href="/personal-site/en/"`，英文页 `href="/personal-site/"`
- 后续 ISS-007 微信二维码和 ISS-008 自定义域不影响 i18n 框架
- 已知限制：v1 不做 locale cookie 记忆（用户每次切语言不持久化），不做 `/zh/` 显式前缀（zh-CN 是 root 默认）

## DEC-007 微信二维码：FaroPDF 资源单源复制 + 共享 WechatQr 组件

- 日期：2026-06-05
- 状态：已采纳
- 关联任务：ISS-007

### 背景

personal-site v1.1（继 ISS-006 中英文切换之后）需要在 footer + 首页 contact section 露出微信二维码 `ywxlaw`，便于扫码联系作者。资源在 FaroPDF 仓 `src/assets/wechat-qrcode.png` 已有占位文件（被 `AboutSection.tsx` 的 `AuthorCard` 引用），任务是把它带到 personal-site 并设计成可复用的共享组件，避免后续改文案 / 替换真实二维码时在多处散改。

### 决策

1. **资源单源**：从 `FaroPDF/src/assets/wechat-qrcode.png` 复制到 `personal-site/src/assets/wechat-qrcode.png`。后续 PM 替换真实二维码时，两仓分别替换即可（FaroPDF 的 `AuthorCard` 已经引用同名路径）。
2. **共享组件**：新建 `src/components/WechatQr.astro`，props `size: 64 | 160` + `alt: string` + `caption?: string`。footer 用 64×64 不带 caption，contact section 用 160×160 带 caption。
3. **i18n 字典扩展**：`FooterMessages` 加 `wechatHandlePrefix`（"微信：" / "WeChat: "）+ `wechatQrAlt`（footer 64×64 的 alt 文案）；`IndexMessages` 加 `contactWechatCaption`（"扫码添加微信" / "Scan to add on WeChat"）+ `contactWechatQrAlt`（160×160 的 alt 文案）。

### 关键决策

- **优**：
  - 共享组件 + alt 字典让 64/160 两种尺寸共用同一份图片资源 + 同一段 `<img>` 渲染逻辑，文案 / 替换只改一处
  - Astro 的 `import qrImage from '../assets/wechat-qrcode.png'` 自动把图片打进 `dist/_astro/`，build 时生成 hash 文件名，BASE_URL 正确前缀
  - 用 `class:list` 区分 `.wechat-qr--64` / `.wechat-qr--160`，CSS 集中控制尺寸而不靠 props 拼 inline style
  - 资源单源（personal-site 复刻 FaroPDF 资源）符合 DEC-002 单一真相源原则
- **劣**：
  - 依赖 FaroPDF 占位文件状态：FaroPDF 仓的 `wechat-qrcode.png` 当前是 1×1 灰度占位（67 字节），personal-site 复制得到的也是 1×1 像素（已确认 `file` 报告 `PNG image data, 1 x 1, 8-bit grayscale, non-interlaced`）。ISS-007 任务卡接受标准里写明「实际添加时 PM 替换真实二维码」
  - Astro 不会做 CDN 缓存优化（直接走 `/_astro/` 静态 hash 文件），但 site 流量低、QR 几乎不更新，无影响
  - alt 文案写死「ywxlaw」在字典里，未来换账号需要改两处 dict（zh-CN / en）。**接受**：换号本身就是低频的破坏性动作，集中改两处比拆 dict 字段更直观
- **拒绝的方案**：
  - **用 SVG inline / 远程 QR 生成 API**：增加运行时或第三方依赖；ISS-007 是营销展示，不需要动态生成
  - **不做组件、footer 和 contact 各贴一份 `<img>`**：30 行内就要散改，不符合 DEC-002
  - **图片用 base64 内联到 CSS**：会让 CSS 文件膨胀，hash 缓存失效；Astro 的 import 已经是正确做法
  - **复制图片到 `public/` 而非 `src/assets/`**：`public/` 走原始文件名发布，BASE_URL / cache busting 都不友好

### 资源放置与文案

- `src/assets/wechat-qrcode.png`（Astro build 产物：`dist/_astro/wechat-qrcode.<hash>.png`）
- `src/components/WechatQr.astro`：`<figure>` + `<img>` + 可选 `<figcaption>`，带 `loading="lazy"` + `decoding="async"`
- `src/components/SiteFooter.astro`：`footer-meta` 行内 `footer-wechat` 块，64×64 QR + "微信 / WeChat" 标签 + handle 文本
- `src/components/pages/HomePage.astro`：contact 列表新增一项 `contact-item--qr`，160×160 QR + caption
- `src/styles/site.css`：新增 `.wechat-qr`、`.wechat-qr--64`、`.wechat-qr--160`、`.wechat-qr__caption`、`.contact-item--qr`、`.footer-wechat` 样式；窄屏（≤680px）下 `.contact-item--qr` 改单列布局

### 验证

- `npm run build` 6 页（3 zh-CN + 3 en）干净生成，无类型 / 资源警告
- 抽检 `dist/index.html` / `dist/en/index.html`：
  - footer mini QR（64×64）：`alt="微信二维码 — ywxlaw"` / `alt="WeChat QR code — ywxlaw"`，`src="/personal-site/_astro/wechat-qrcode.DdK2Yptz.png"`
  - contact big QR（160×160）：`alt="微信二维码 — 扫码添加 ywxlaw"` / `alt="WeChat QR code — scan to add ywxlaw"`，同源
  - 资源哈希一致（`DdK2Yptz`）：64/160 共用同一张图
- footer "微信：ywxlaw" / "WeChat: ywxlaw" 在中英两版 footer 均出现
- 窄屏（≤680px）下 contact-item--qr 自动从 92px + auto 改单列，QR 居左

### 已知限制

- 当前两仓的 `wechat-qrcode.png` 都是 1×1 灰度占位，扫描不可识别。ISS-007 任务卡明文接受标准「实际添加时 PM 替换真实二维码」；替换入口：FaroPDF 仓 `src/assets/wechat-qrcode.png` 和 personal-site 仓 `src/assets/wechat-qrcode.png` 各替换一次（rebuild 后 hash 变化，build 产物自然刷新）
- 没有把 QR 资源发布到 CDN 或 OSS：当前体量不需要，PM 替换文件后随 next release 一起发布即可
- v1 不做「点击按钮复制微信号」之类的客户端交互；只露出 QR + 文字 handle

## DEC-008 修复 GitHub Pages 部署失败：补 lock file + 启用 Pages + 升 Node 22

- 日期：2026-06-05
- 状态：已采纳
- 关联任务：ISS-009（PR #3） + 本次 follow-up 修复

### 背景

ISS-002 已交付 `.github/workflows/deploy.yml`（commit `01c4f75`），CI 配置正确（permissions / concurrency / 环境变量 / 步骤顺序），但 main 上 5 个 push commit 的 Actions 全部失败，站点 `https://cat-xierluo.github.io/personal-site/` 实际未上线。用户在浏览器观察 commit list 时发现所有 Actions 显示叉号，触发 ISS-009 排查。

排查过程发现三个根因（按发现顺序）：

1. **缺 `package-lock.json`**：`npm ci` 严格要求仓库根存在 lock file（`actions/setup-node@v4` 缓存 lock file + `actions/cache@v4` 都依赖它），但 scaffold 时只生成 `package.json` 没有 lock file。`npm ci` 失败 → Install 步骤退出。
2. **GitHub Pages 未启用**：`.github/workflows/deploy.yml` 是「Build and deployment source = GitHub Actions」的前提，但仓库 Settings → Pages 默认是关闭的。`actions/configure-pages@v5` 静默通过（即使 Pages 关闭），`actions/deploy-pages@v4` 在 deploy 阶段才报错。这是 GitHub 仓库级一次性配置，**Agent 不能也不应通过 API 代用户开启**（Auto mode 拒绝 `POST /repos/{owner}/{repo}/pages`，保护共享仓库不被擅自改设置）。PM 决策：调查阶段只汇报根因，启用动作由用户手动完成。
3. **Node 版本过低**：补完 lock file 后，PR #3 重新触发的 run 在「Build with Astro」步骤仍然失败 —— Astro 6.4.4（lock file 装到的实际版本）要求 Node `>=22.12.0`，但 `actions/setup-node@v4` 默认 / 显式 `node-version: 20` 装的是 20.20.2。错误信息：`Node.js v20.20.2 is not supported by Astro! Please upgrade Node.js to a supported version: ">=22.12.0"`。这是 2025-09 GitHub Blog 公告的 Node 20 deprecation 同步时机 —— GitHub 建议 actions 升 Node 22/24。

### 决策

按"最小代码改 + 一致文档协议"三步修复：

1. **PR #3（`4ffff64`）**：`npm install --package-lock-only` 生成 `package-lock.json`（257 packages，0 vulnerabilities），让 `npm ci` 通过。
2. **用户手动** 在 GitHub 仓库 Settings → Pages → Source = GitHub Actions 启用 Pages（一次性）。
3. **本次 follow-up（DEC-008）**：
   - `.github/workflows/deploy.yml`：`node-version: 20` → `node-version: 22`，匹配 Astro 6.4 的 engine 要求
   - `package.json`：加 `engines.node = ">=22.12.0"`，把引擎约束显式写进 manifest，让本地开发与 CI 行为一致
   - 文档同步：DEC-008（本文档）+ TASKS.md 归档 ISS-009 + 取消 ISS-008 + CHANGELOG 0.1.0-alpha.5

### 关键决策

- **优**：
  - 一次 follow-up 把所有阻塞 deploy 的问题收口：lock file / Pages 启用 / Node 版本都到齐
  - `engines` 字段在 `npm install` 时会触发 EBADENGINE warning（与 Actions log 中已经看到的告警一致），给本地开发者明确信号
  - Node 22 是 GitHub 2026-06 后强制 default（见 log 末尾「Node.js 20 actions are deprecated」warning），提前切到 22 避免半年内再追一次
  - 用户手动启用 Pages 符合"Agent 不擅自改共享仓库设置"的安全边界，PR 描述也方便审计
- **劣**：
  - `engines` 字段是 advisory 性质（不强制阻断 install），但 `astro build` 启动时会再次校验 Node 版本，是实际生效的
  - 没有把 Node 22 写进 `.nvmrc`：Astro / GitHub Pages CI 都用 workflow 指定版本，本地开发没有 .nvmrc 就要靠 package.json engines 提示。可接受 —— 项目是个人主页，协作者 1 人
  - 没有改 `package.json` 的 `astro: ^6.3.1` 范围去 pin 6.4.x：Astro 6.3 → 6.4 是 minor bump 且 engine 要求一致（都 >=22.12.0），下次更新仍然需要 Node 22
- **拒绝的方案**：
  - **把 Node 锁在 20、把 Astro 降到 6.3.x 之前的版本**：Astro 6.3.1 自己也要求 Node >=18.17.1 / >=20.3.0 / >=22.0.0，但 6.4 明确要求 >=22.12.0；6.3.x 在 lock file 下仍可能被 npm 升到 6.4.x。锁 Astro 6.3.1 需要 `"astro": "6.3.1"`（无 caret）并 `--save-exact`，但 Astro 6.3 → 6.4 是正常的 minor 升级，长期不可持续
  - **`npm install` 替代 `npm ci`**：放弃 lock file 锁版本能力，与 GitHub Pages "可复现构建" 期望相悖
  - **用 Volta / nvm 在 workflow 里装 Node 22**：增加维护成本，与 GitHub 官方 `actions/setup-node@v4` 路径相比无优势
  - **Agent 代调 `POST /pages` 启用 Pages**：被 Auto mode 拒绝（保护共享仓库），且即便能调也违反"用户授权边界"

### 资源放置与验证

- `.github/workflows/deploy.yml` line 27：`node-version: 20` → `node-version: 22`
- `package.json` 加 `"engines": { "node": ">=22.12.0" }`
- 验证（pre-PR）：本地 `npm run build` 在 Node 22 下成功（`@astrojs/prism@4.0.2` / `astro@6.4.4` 都不再 EBADENGINE）
- 验证（post-merge）：`gh run watch` 跑完一次 main 触发的 deploy，应进入 success；`curl -I https://cat-xierluo.github.io/personal-site/` 应返回 200 + `text/html`

### 已知限制

- 用户在 GitHub 仓库 Settings 启用 Pages 是**一次性手动操作**，新开仓库或新协作者 transfer ownership 时需要再做一次
- Astro 6.4.x 仍在 minor 演进，未来若引入 Node 24+ 强制要求，需同步升 setup-node
- `engines` 字段不阻断 `npm install --force`，但 `astro build` 启动时会硬性校验

## DEC-009 真实微信二维码替换 + 修正 DEC-007 单源声明

- 日期：2026-06-05
- 状态：已采纳
- 关联任务：ISS-010

### 背景

ISS-007 + DEC-007 落地后，personal-site `src/assets/wechat-qrcode.png` 是 1×1 灰度占位（67 字节，扫码不可识别），footer mini QR + contact section big QR 露出的是占位图。任务卡明文「实际添加时 PM 替换真实二维码」是占位策略；ISS-010 推进这个落地。

**修正 DEC-007**：DEC-007 § 资源单源 写的是"从 `FaroPDF/src/assets/wechat-qrcode.png` 复制"，但实际：
- `FaroPDF/src/assets/wechat-qrcode.png` 自 ISS-007 时就是 1×1 占位（`file` 报告 `PNG image data, 1 x 1, 8-bit grayscale, non-interlaced`，67 字节）
- 真实 QR 一直在 `Folia/docs/wechat-qr.png`（734×734，184KB，2026-05-20 入仓）
- ISS-007 时未核验 FaroPDF 那个文件实际尺寸，把"已存在的 PNG"误当作真实 QR 复制

本次修正：
1. personal-site 换成真实 QR（184KB，hash 从 `DdK2Yptz` → `BL2G81aV`）
2. **不**修改 DEC-007 原文（保留历史准确性），新增 DEC-009 标注单源修正

### 决策

1. **真实 QR 单源 = `Folio/docs/wechat-qr.png`**（734×734 / 184KB / 8-bit gray+alpha）
2. **personal-site 复制**：`Folio/docs/wechat-qr.png` → `personal-site/src/assets/wechat-qrcode.png`（Astro build 资源，hash 自动）
3. **FaroPDF 同步**：复制同一份到 `FaroPDF/src/assets/wechat-qrcode.png`（同步跨仓一致性 — 后续跨仓 cleanup 可选 PR 跟进）
4. **Folia 仓不动**：`Folia/docs/wechat-qr.png` 已是真源

### 关键决策

- **优**：
  - 真实 QR 一处真源（Folia docs），其它两仓各自复制，遵循 DEC-002 单一真相源原则
  - personal-site QR 资源 hash 从 `DdK2Yptz` → `BL2G81aV`，build 产物自动刷新，HTML/JS 无需改动
  - 替换只动 PNG 文件，零代码改动，零风险回退（git revert 即可）
  - `Folio/docs/wechat-qr.png` 不是 src 路径（不会被前端 bundle），适合做"只供复制的真源"角色
- **劣**：
  - 三仓各持一份同一图，未来若换微信号需要三仓同步替换（接受：换号本身就是低频破坏性动作，三处同步不难）
  - Folia 仓用 `docs/` 而不是 `src/assets/` 存 QR，路径不一致 —— 但已经在仓里且 ISS-007 之前就存在，**不**做历史重整
- **拒绝的方案**：
  - **改 Folia 把 QR 移到 `src/assets/` 统一路径**：侵入性大、改历史，违反"不重整已稳定仓"
  - **在 personal-site 用 `<img src="https://github.com/cat-xierluo/Folia/raw/main/docs/wechat-qr.png">` 远程拉**：依赖跨仓网络 / raw.githubusercontent 稳定性、CDN cache 不可控；现在 static build 走 `/_astro/` 已是正确做法
  - **直接用 SVG inline QR 生成**：增加客户端 JS 依赖或第三方库，ISS-007 设计选择"PNG + Astro import"就是为了零运行时
  - **在 DEC-007 原文上加 strikethrough / 修正段**：破坏 DEC 的时间戳语义；DEC-007 是历史快照，正确做法是新增 DEC-009 supersede

### 资源放置

| 仓 | 路径 | 状态 | 说明 |
| --- | --- | --- | --- |
| Folia（真源） | `docs/wechat-qr.png` | 734×734 / 184KB | 不动 |
| personal-site | `src/assets/wechat-qrcode.png` | 734×734 / 184KB | 本次替换（hash `BL2G81aV`） |
| FaroPDF | `src/assets/wechat-qrcode.png` | 待替换 | 跨仓 follow-up（FaroPDF 仓 PR） |

### 验证

- personal-site 本次：`npm run build` 干净 6 页生成，dist 抽检 `dist/_astro/wechat-qrcode.BL2G81aV.png`（184KB）已替换占位版本
- personal-site deploy（PR 合并后）：`curl https://cat-xierluo.github.io/personal-site/_astro/wechat-qrcode.BL2G81aV.png` 应返回 184KB PNG
- 抽检 `dist/index.html` / `dist/en/index.html` 的 `<img>` `src` 应已切换到新 hash

### 已知限制

- FaroPDF 仓本次未做替换（任务范围仅 personal-site）。FaroPDF 仓内 `AuthorCard` 的 QR 仍是 1×1 占位。如需统一，从 `personal-site` 仓的 `src/assets/wechat-qrcode.png`（或直接从 `Folio/docs/wechat-qr.png`）复制到 `FaroPDF/src/assets/wechat-qrcode.png` 即可 — 跨仓 follow-up。
- 三仓真源仍是 Folia docs（不在 src 路径）。如果未来有更多仓要带 QR，统一从 Folia 复制即可。

## DEC-010 站点 URL 去 subpath：改 GitHub 仓名为 `cat-xierluo.github.io`

- 日期：2026-06-05
- 状态：已采纳
- 关联任务：ISS-011

### 背景

ISS-005 收口后 personal-site 站点 URL 仍是 `https://cat-xierluo.github.io/personal-site/`（仓名 `cat-xierluo/personal-site` 决定 Pages 服务根在子路径）。用户在 ISS-011 brainstorm 时明确希望 URL 形态简化成 `https://cat-xierluo.github.io/`（无 subpath），「杨卫薪」等中文姓名信息只走页面内容（hero / footer / contact section），不进 URL。

GitHub Pages 服务的 URL 前缀**完全由仓库名决定**（与 `astro.config.mjs` 的 `base` 无关）：
- 仓名 `<username>/<username>.github.io` → 服务 URL `https://<username>.github.io/`（user site，根域）
- 仓名 `<username>/<anything-else>` → 服务 URL `https://<username>.github.io/<repo>/`（project site，子路径）

这是 GitHub 强制规则，没有"绕过 subpath 但不改名"的方案。ISS-008 自定义域已被用户取消（成本 / 续费 / 维护 ROI 偏低），所以本次决策只走改仓名路径。

### 决策

**仓名 `cat-xierluo/personal-site` → `cat-xierluo/cat-xierluo.github.io`**，对应：

1. **GitHub 端**：`gh api PATCH /repos/cat-xierluo/personal-site` 把 `name` 字段改为 `cat-xierluo.github.io`。这是 user site repo 的标准命名，Pages 服务 URL 自动从 `…/personal-site/` 变 `…/`。改名后旧 URL 立即 404（用户已确认接受，不加 404 引导页）
2. **代码层**：`astro.config.mjs` 的 `base` 默认从 `/personal-site` → `/`；`.github/workflows/deploy.yml` 的 `PERSONAL_BASE_PATH` 默认值同步。`src/**` 全部走 `import.meta.env.BASE_URL`，零代码改动（已 `grep` 验证 12 处 `import.meta.env.BASE_URL` 调用）
3. **当前活文档**：`AGENTS.md` 第 65-68 行（环境变量默认说明）改 `/`；`docs/ROADMAP.md` v1.0 段目标 URL 改 `cat-xierluo.github.io/`
4. **历史文档不改动**：`CHANGELOG.md` 0.1.0-alpha.1 ~ 0.1.0-alpha.6 / DEC-001 ~ DEC-009 / ISS-001 ~ ISS-010 里的 `https://cat-xierluo.github.io/personal-site/` 是历史事实，遵循 DEC 时间戳语义，**不**改写（参照 DEC-007 → DEC-009 supersede 模式）。新增 DEC-010 + CHANGELOG 0.1.0-alpha.7 + ISS-011 标注
5. **本地目录名**：保留 `personal-site/`（用户决策）。git remote URL 改向新名即可

### 关键决策

- **优**：
  - URL 形态简化：`https://cat-xierluo.github.io/`，分享 / 打印 / 输入都更短
  - 长期可扩展：未来加 blog / case study / 时讯等子栏目时，子路径是新增的（如 `/blog/`），不是固化的项目名
  - 符合 GitHub Pages user site 主流模式：所有"<username>.github.io 用作个人主页"的开发者都用这个仓库名格式
  - 代码零改动：`src/**` 全部走 `BASE_URL`，改 astro config 一处生效
- **劣**：
  - 旧 URL（`/personal-site/*`）立即 404，跨仓外链（README 互链、聊天分享、邮件签名）会断。GitHub Pages 不支持 server-side 301，无法做旧 → 新 URL 跳页
  - 旧 `cat-xierluo/personal-site` 仓 ID 变化：现有 PR 链接 / commit 永久链接的 `repos/cat-xierluo/personal-site` 路径在 GitHub 内部会 301 到新名（GitHub 自动 redirect），但用户感知到的 URL 变了
  - 仓名变更是一次性 API 调用（可改回），但用户站点结构定型后再次改名会有更多外链/缓存负担
- **拒绝的方案**：
  - **只改 `astro.config.mjs` 的 `base: '/'`，仓名保持 `personal-site`**：不可行。GitHub 服务器端按仓名决定 URL 前缀，`base: '/'` 只影响 Astro 内部资源 / 链接生成，对 Pages 服务的根 URL 无任何影响。站点仍然服务在 `/personal-site/`，且 Astro 内部生成的链接会全部错位
  - **自定义域**（ISS-008）：用户已取消，重启要新任务，资源投入不匹配 v1 体量
  - **在仓内加 `404.html` 引导 + meta refresh JS 跳新 URL**：用户明确决定"不加，让旧 URL 直接 404"，简化方案
  - **保留旧仓 `personal-site` + 新建 `cat-xierluo.github.io` 两个仓并存**：每个 GitHub 账号只能有 1 个 user site 仓库（`<username>.github.io`），再建会冲突。而且两个仓同步维护 = 长期负担，不可持续

### 资源放置与验证

- `astro.config.mjs` line 4：`'/personal-site'` → `'/'`
- `.github/workflows/deploy.yml` line 39：`'/personal-site'` → `'/'`
- `AGENTS.md` line 65-68：环境变量默认描述同步
- `docs/ROADMAP.md` line 59：v1.0 段目标 URL 同步
- **`src/data/products.ts` icon 路径修复（顺手发现）**：`icon: '/icons/...'`（前导 `/`）改为 `icon: 'icons/...'`（去掉前导 `/`）。原代码 `${base}${product.icon}` 拼接：旧 `base='/personal-site/'` 输出 `/personal-site//icons/...`（中间双斜杠，浏览器容错"碰巧"能加载），新 `base='/'` 输出 `//icons/...`（protocol-relative URL，浏览器解释为 `https://icons/...`，跨域失败）。本次顺手修，避免新站点产品卡片 + FaroPDF hero icon 加载不出来。影响 `ProductCard.astro:22` + `FaroPdfPage.astro:36` 两处
- 验证（pre-PR）：`npm run build` 干净，6 页生成
  - `dist/index.html`（不再是 `dist/personal-site/index.html`）
  - HTML 抽检链接路径：`<a href="/folia/">` / `<a href="/faropdf/">` / `<a href="/en/">` / lang-switch `<a href="/en/">` / `<img src="/_astro/xxx.png">`，**无** `/personal-site/` 前缀
- 验证（post-merge）：`curl -I https://cat-xierluo.github.io/` 应返回 200 + `text/html`；旧 `https://cat-xierluo.github.io/personal-site/` 应 404

### 已知限制

- 旧 URL 失效窗口：从 `gh api` 改仓名到 PR merge 触发新 deploy 之间，`<username>.github.io/personal-site/` 是 404。按本次执行顺序（先 commit + push + PR，等用户 review + merge 后 deploy）窗口约数十分钟
- GitHub Pages 不支持 server-side 301，旧 → 新 URL 跳页无解（JS `meta refresh` 也不加，按用户决策）
- 旧 `personal-site` 仓的所有 commit / issue / PR 永久链接会在 GitHub 内部自动 redirect 到新名（`/personal-site/...` → `/cat-xierluo.github.io/...`），但感知上 URL 变了
- 仓名变更是可逆的（再次 `PATCH name` 即可），但每次变更都增加外链 / 缓存负担，非高频动作

