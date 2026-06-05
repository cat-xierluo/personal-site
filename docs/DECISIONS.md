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
