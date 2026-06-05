# personal-site 项目协作指南

## 项目定位

杨卫薪律师个人主页 — Astro 6.3.1 静态站。展示作者 bio + 两个开源产品（Folia / FaroPDF）+ 联系方式。技术栈与设计语言与 [Folia](https://github.com/cat-xierluo/Folia) 的 `website/` 保持一致（同一作者、同一协议、同一图标风格家族）。

## 基本约定

- 全程使用中文回复与写作。
- 重要技术选择记录到 `docs/DECISIONS.md`（沿用 FaroPDF 项目协议）。
- 任务状态、Phase 推进、待办记录在 `docs/TASKS.md`。
- 用户可见变更写入 `CHANGELOG.md`。
- 资源（icon / favicon）严格从源项目复用：
  - Folia icon 源：`https://github.com/cat-xierluo/Folia` 仓库内 `website/src/assets/folia-icon.png`
  - FaroPDF icon 源：`https://github.com/cat-xierluo/FaroPDF` 仓库内 `src-tauri/icons/icon-source.png`
  - 衍生 PNG（`public/icons/`）由 sips 从源生成，**不**自创。
- 涉及架构 / 数据流 / 模块边界变更时同步更新 `docs/ARCHITECTURE.md`（首版暂未建）。
- 不引入新依赖除非必要（Astro 是唯一 devDep）；如需，加在 `package.json` 时说明理由。

## 文件清单

| 文档 | 职责 |
| --- | --- |
| `README.md` | 项目介绍、文件结构、本地开发、构建 / 部署指南 |
| `AGENTS.md` | 协作规则（本文） |
| `CHANGELOG.md` | 用户可见变更记录（按 phase 顺序） |
| `docs/TASKS.md` | 唯一任务源：阶段 / Phase 推进、待办、归档索引 |
| `docs/DECISIONS.md` | 决策记录：框架选型、目录结构、icon 源、设计语言继承 |
| `docs/ROADMAP.md` | Phase 0-4 路线图 + v1 范围 |
| `astro.config.mjs` | Astro 配置：site URL + base path 环境变量可覆盖 |
| `tsconfig.json` | TypeScript strict + Astro 类型预设 |
| `src/data/author.ts` | 作者 bio + 联系方式 |
| `src/data/products.ts` | Folia + FaroPDF 产品元数据 |
| `src/pages/index.astro` | 主页（bio + about + 产品列表 + 联系方式） |
| `src/pages/folia.astro` | Folia 详情页（hero / intro / features / workflow / download） |
| `src/pages/faropdf.astro` | FaroPDF 详情页（与 Folia 同结构） |
| `src/components/SiteHeader.astro` | 站点导航 |
| `src/components/SiteFooter.astro` | 站点页脚 |
| `src/components/ProductCard.astro` | 产品卡片（主页用） |
| `src/layouts/BaseLayout.astro` | 公共布局（head + header + footer） |
| `src/styles/site.css` | 共享设计 tokens + 基础组件样式（OKLCH 调色板 + 衬体大标题 + 现代无衬体正文） |
| `public/favicon.png` | 64×64 favicon |
| `public/icons/folia-icon.png` | Folia 产品 icon（256×256 衍生） |
| `public/icons/faropdf-icon.png` | FaroPDF 产品 icon（256×256 衍生） |
| `.github/workflows/deploy.yml` | GitHub Pages 自动部署 workflow |

## 本地开发

```bash
npm install
npm run dev      # 127.0.0.1 默认端口
```

## 构建 + 预览

```bash
npm run build
npm run preview
```

## 部署

GitHub Pages 自动部署。Push `main` 分支触发 `.github/workflows/deploy.yml`，自动 build + deploy。

环境变量（默认 `cat-xierluo.github.io/personal-site/`）：

- `PERSONAL_SITE_URL`：站点 URL（默认 `https://cat-xierluo.github.io`）
- `PERSONAL_BASE_PATH`：base path（默认 `/personal-site`）

## 完成标准

1. 功能或文档变更已完整落地。
2. `npm run build` 干净。
3. 相关文档已同步更新（`docs/DECISIONS.md` / `CHANGELOG.md` / `docs/TASKS.md`）。
4. 来源于 `docs/TASKS.md` 的任务已更新状态或归档。
5. 资源（icon / favicon）严格从源项目复用，无自创。
6. 无遗留 `/tmp/faropdf-*` 或 `/Users/.../folia-icon.png` 等绝对路径引用。

## 设计语言继承

从 Folia website 继承：
- OKLCH 色彩 token：`--bg` / `--surface` / `--surface-strong` / `--ink` / `--muted` / `--border` / `--accent` / `--accent-deep` / `--sage` / `--steel`
- 字体：display 用 Iowan Old Style/Charter/Noto Serif SC（衬体大标题），body 用 system-ui，mono 用 ui-monospace
- 段落节奏：clamp 响应式 + min(max-width, 100%) 容器
- 媒体查询断点：980px / 680px 两档

Folio / FaroPDF 详情页内嵌的专有样式（hero app mockup / paper 卡片 / workflow 编号圆 / feature-card 彩条）放在各自页面的 `<style>` 块内，scoped 不污染全局。

## 与其他项目的关系

| 关系 | 说明 |
| --- | --- |
| Folia (上游) | 设计语言 + icon 源 + 产品页迁出；Folia 仓库未来会移除 `website/` 子目录并把 README §"官方仓库" 指向 personal-site/folia |
| FaroPDF (平行) | 同一作者、同一协议；product card 引用其元数据；FaroPDF README §"官方仓库" 未来会指向 personal-site/faropdf |
| 不在范围 | 个人 blog（v1.1 之后）、i18n 英文版（v1.1）、自定义域（v1.2）、微信二维码（v1.1） |

## Skill 强制调用

| 触发场景 | 必须先调用 | 调用的理由 |
| --- | --- | --- |
| git 提交、批量提交、commit message 拆分 | `git-batch-commit` | 拆分粒度、commit 格式、PR 编号后缀 |
| 分支创建、PR、merge、push 前安全检查 | `git-workflow` | 安全门禁、Monorepo 目录级 checkout、fail-closed 合并 |
| PR 创建后 / merge 后体检 | `doc-curator` | 文档瘦身与归档一致性体检（`bash .claude/skills/doc-curator/scripts/scan.sh`） |
| 视觉/UI 改动 | `ui-ux-pro-max` | UI 设计智能（50 styles / 21 palettes / 50 font pairings） |
| 文档 / 创意设计 | `brainstorming` | 设计前先 brainstorm（结构 / 边界 / 验收） |
| 跨仓协调（与 Folia / FaroPDF） | `cross-agent-coordination` | 跨项目任务状态协调 |

## 跨项目链接

- Folia 主仓：`https://github.com/cat-xierluo/Folia`
- FaroPDF 主仓：`https://github.com/cat-xierluo/FaroPDF`
- Folia 设计参考（site.css / index.astro）：在 Folia 仓库 `website/` 子目录
- FaroPDF 设计参考（types / AuthorCard）：在 FaroPDF 仓库 `src/components/settings/`
