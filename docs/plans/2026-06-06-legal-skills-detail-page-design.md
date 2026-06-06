# ISS-012 Legal Skills 集成 — 设计文档

- 日期：2026-06-06
- 状态：已采纳（待实施）
- 关联任务：ISS-012

## 背景

`cat-xierluo/legal-skills` 是杨卫薪律师 star 数最多的公开项目（316 stars / 47 forks / 47 skills），是面向法律从业者的 AI Agent Skills 集合，跨 Claude Code / OpenClaw / WorkBuddy / QoderWork / CodeX / OpenCode / Hermes 等平台。personal-site 当前只展示 Folia / FaroPDF 两个产品，需要把 Legal Skills 也露出，让访问主页的人能直接找到这个 star 数最高、对法律人最实用的项目。

## 目标

把 Legal Skills 以「主页产品卡 + 5 段式详情页」形式集成到 personal-site，与 Folia / FaroPDF 架构一致。同时给所有产品详情页（Folia / FaroPDF / Legal Skills，中英双版）hero 顶部加"回到作者主页"小链接。

## 决策摘要

| 决策点 | 选择 | 原因 |
| --- | --- | --- |
| 集成粒度 | 主页产品卡 + 5 段式详情页 | 与 Folia / FaroPDF 现有架构一致（C 选项） |
| i18n | 中英双语同步出 | 沿用 ISS-006 i18n 框架一致性 |
| 详情页 hero icon | 80×80 方形，裁中心 1024×1024 区域 | 与 Folia / FaroPDF 详情页 80×80 hero 一致 |
| Accent 色板 | **royal**（深紫蓝 OKLCH 0.30 0.16 285） | AI / 智能 / 科技感，分子结构图调性，与 sage / steel 区分 |
| Features 段 | 16 张 feature-card 4-column 网格 | 用户明确要求"十几二十个"，4-column × 4 行 16 个覆盖 4 大类各 4 代表 |
| 主页 grid | 3 张 product-card 3-column 网格 | 增加第 3 张后 3 列等宽 |
| 回到主页链接 | hero 顶部"← 回到作者主页"小链接 | Apple / Vercel / Linear 等产品页习惯一致，权重低不抢戏 |
| 16 个 skill 挑选 | 4 大类各 4 个代表（content fetch / legal app / content process / dev tool） | 不发明新分类，对齐 README 现有 4 大类 |
| 数字 / 版本号 | tagline + features **不**带数字 / 版本号 / 许可证 | 项目持续更新，硬编码易过期；README 才是准 |

## 16 个 Skill 列表（features 段）

| # | 类别 | skill | 一句话说明 |
| --- | --- | --- | --- |
| 1 | 内容获取 | wechat-article-fetch | 公众号文章无头抓取，保存为 Markdown |
| 2 | 内容获取 | legal-ocr | OCR 与扫描识别统一入口（PDF / 图片 / Office / URL） |
| 3 | 内容获取 | funasr-transcribe | 本地语音转文字，支持说话人分离 |
| 4 | 内容获取 | universal-media-downloader | 视频 / 播客平台下载，支持字幕和音频 |
| 5 | 法律应用 | litigation-analysis | 诉讼分析：起诉状 / 判决书 / 庭审笔录 |
| 6 | 法律应用 | contract-copilot | 合同起草与审查：风险清单 + 起草骨架 + 修订建议 |
| 7 | 法律应用 | legal-proposal-generator | 诉讼方案 / 咨询报告 / 建议书自动生成 |
| 8 | 法律应用 | patent-analysis | 专利分析：7 种场景，含侵权比对与 FTO |
| 9 | 内容处理 | pdf-processor | PDF 全能处理：OCR 双层、页码、合并、解密、压缩 |
| 10 | 内容处理 | pdf-organizer | 法律 PDF 整理：拆分 / 合并 / 重命名 + 页面索引 |
| 11 | 内容处理 | md2word | Markdown 转标准格式 Word（法律文书样式） |
| 12 | 内容处理 | svg-article-illustrator | 公众号文章 SVG 配图生成 |
| 13 | 开发工具 | multi-agent-orchestration | 多 Agent 本地执行编排：worktree / session 隔离、PM 巡检 |
| 14 | 开发工具 | cross-agent-coordination | 跨平台 Agent 任务协调与能力路由 |
| 15 | 开发工具 | project-init | 项目初始化：自动生成 CLAUDE.md / docs 体系 |
| 16 | 开发工具 | skill-manager | AI Agent Skills 的安装、同步、卸载与列表查看 |

数据来源：legal-skills README（2026-06-05 抓取）。一句话说明严格从 README 抄 / 改写，**不**发明未交付功能。

## 架构

### 1. 数据层

`src/data/products.ts` 新增 `legalSkills` 条目（沿用现有 Folia / FaroPDF 字段结构）：

```ts
legalSkills: {
  slug: 'legal-skills',
  name: 'Legal Skills',
  tagline: '面向法律从业者的 AI Agent Skills 集合',
  taglineEn: 'A collection of AI Agent Skills for legal professionals',
  summary: '从内容获取、处理到专业写作，覆盖律师日常工作全流程。',
  summaryEn: 'From content acquisition to professional writing — covering the full daily workflow of lawyers.',
  repo: 'https://github.com/cat-xierluo/legal-skills',
  path: '/legal-skills',
  icon: 'icons/legal-skills-icon.png',
  accent: 'royal',
}
```

`icon` 路径**不**带前导 `/`（沿用 ISS-011 修复的 `${base}${icon}` 拼接规则）。

### 2. 资源

- **源图**：`https://raw.githubusercontent.com/cat-xierluo/legal-skills/main/docs/legal-skills-icon.jpg`（1536×1024 横向 JPG，104KB）
- **复制到**：`src/assets/legal-skills-icon.jpg`
- **裁中心方形**：`sips -c 1024 1024`（中心对齐）
- **缩放 256×256**：`sips -z 256 256`
- **衍生**：`public/icons/legal-skills-icon.png`（与 Folia / FaroPDF 256×256 衍生一致）
- 主页 product card 80×80 + 详情页 hero icon 80×80 共用同一张

**裁切风险**：原图左侧是分子结构 + 右侧是黑方块 "LEGAL SKILLS" 字样。中心方形裁切 = 分子结构右侧 1/2 + 黑方块左侧 1/2，可能 OK 也可能失衡。建仓前会在终端 `open` 预览让用户确认，不满意再调裁切偏移或换源图。

### 3. 详情页 5 段式结构

新文件 `src/components/pages/LegalSkillsPage.astro`（与 FoliaPage / FaroPdfPage 同结构）：

| 段 | 内容 |
| --- | --- |
| **hero 顶部** | "← 回到作者主页"小左箭头链接（直回 `/`），i18n 字段共享 `meta.backToHome` |
| **hero** | 80×80 royal icon frame + 产品名「Legal Skills」+ kicker "AI Agent Skills 集合" + tagline + "了解详情"（锚 features）/ "查看 GitHub"（外链） |
| **intro** | "为什么做 Legal Skills" 一段式（律师兼内容创作者双重身份 → 内容获取 / 处理 / 专业写作基础设施） |
| **features** | 16 张 feature-card，4-column 网格（>980px）/ 2-column（680-980px）/ 1-column（<680px），每张：技能名 + 一句话 + 适用场景标签 |
| **workflow** | 4 步编号圆：选 Skill → 装到 Agent → 跨平台协作 → 多 Agent 调度 |
| **download** | GitHub 仓链接 + 双许可证说明（MIT 可商用 / CC-BY-NC 不可商用）+ 安装提示语（"请帮我从 GitHub 安装 legal-skills 技能集合"） |

### 4. thin wrappers

- `src/pages/legal-skills.astro`（zh 默认，URL 检测 locale）
- `src/pages/en/legal-skills.astro`（en 硬编码 `locale="en"`）

### 5. i18n 字典扩展

`src/i18n/zh-CN.ts` + `src/i18n/en.ts` 新增 `legalSkills` 页块 + `meta.backToHome` 共享字段：

| 字段 | zh | en |
| --- | --- | --- |
| `meta.backToHome` | "回到作者主页" | "Back to author homepage" |
| `legalSkills.heroKicker` | "AI Agent Skills 集合" | "AI Agent Skills collection" |
| `legalSkills.heroPrimaryCta` | "了解详情" | "Learn more" |
| `legalSkills.heroSecondaryCta` | "查看 GitHub" | "View on GitHub" |
| `legalSkills.introKickerPrefix` | "为什么做" | "Why" |
| `legalSkills.introBody` | 一段式 | 英文版 |
| `legalSkills.featuresTitle` | "代表性 Skills" | "Representative Skills" |
| `legalSkills.features` (16 项 × `kicker` / `title` / `body`) | 表格对应 | 英文版 |
| `legalSkills.workflowTitle` | "从选 Skill 到多 Agent 协作" | "From picking a skill to multi-agent collaboration" |
| `legalSkills.workflowSteps` (4 项 × `title` / `body`) | 4 步 | 英文版 |
| `legalSkills.downloadTitle` | "从 GitHub 获取" | "Get it from GitHub" |
| `legalSkills.downloadBody` | 双许可证说明 + 安装提示 | 英文版 |
| `legalSkills.downloadPrimaryCta` | "查看 GitHub" | "View on GitHub" |
| `legalSkills.downloadSecondaryCta` | "安装提示" | "Install hint" |

字段数：~20 文本字段 + 16 features × 3 + 4 workflow × 2 = **~84 字段 × 2 语种 = 168 处翻译**。

### 6. 主页 3-card grid

`src/components/pages/HomePage.astro` 的 `.product-grid` 改 grid-template-columns：

- `>980px`：`repeat(3, 1fr)` — 3 列等宽
- `680-980px`：`repeat(2, 1fr)` — 2 列（第 3 张换行）
- `<680px`：`1fr` — 单列堆叠

`ProductCard.astro` 已用 `class:list` 模板字符串拼接 `--${accent}`，新增 `royal` accent 后自动渲染对应彩条，**不**需改组件逻辑。

### 7. CSS 新增 royal 样式

`src/styles/site.css` 增补：

```css
:root {
  --royal: oklch(0.30 0.16 285);
  --royal-soft: oklch(0.92 0.05 285);
}

.product-card--royal .product-card__icon,
.feature-card--royal {
  border-left-color: var(--royal);
}
.feature-card--royal {
  border-top: 3px solid var(--royal);
}
.product-card--royal .button-primary {
  background: var(--royal);
  color: white;
}
```

具体 OKLCH 数值实施时会先 sips 截图看 royal 在 sage / steel 旁边是否和谐，不和谐微调。

## Folia / FaroPDF 详情页 hero 顶部 back-link

按用户新需求，"每一个项目的二级目录"加"回到作者主页"按钮，所以 Folia / FaroPDF / Legal Skills 三个详情页都加。

实现方式：
- `meta.backToHome` 共享 i18n 字段（zh / en 各 1）
- 3 个 page 组件（`FoliaPage.astro` / `FaroPdfPage.astro` / `LegalSkillsPage.astro`）各自 hero 顶部加 1 行模板：
  ```astro
  <a class="back-link" href={base}>{dict.meta.backToHome}</a>
  ```
- 3 个 en 版本页组件同理（用 en dict）

## 范围控制（YAGNI）

- **不做**内容搜索 / 标签过滤
- **不做**子页面（每个 skill 详情页）
- **不做**"skill 数量实时显示"（README 顶部 badge 静态即可）
- **不做**deep-dive 任何具体 skill（首页 16 features 段已覆盖代表性）
- **不做**"star 数实时显示"（README badge 静态）

## 数据流

```
products.ts (legalSkills entry)
    ↓
HomePage.astro (loops over products → 3 ProductCard)
    ↓
ProductCard.astro (auto applies accent class)
    ↓
site.css (.product-card--royal border / button)

LegalSkillsPage.astro (5 段式 + back-link)
    ↓
i18n dict (legalSkills + meta.backToHome)
    ↓
site.css (.feature-card--royal / .back-link)
```

## 验证

- `npm run build` 干净 8 页生成（4 zh + 4 en，从 6 增到 8）
- HTML 抽检：zh 主页 3 product-card 链接（`/folia/` `/faropdf/` `/legal-skills/`），en 主页 3 链接（`/en/...`）
- 详情页 hero 顶部 3 处 back-link 都出现，链接回 `/`
- 资源 200：favicon / icons / _astro CSS / _astro QR
- 浏览器实测 8 个页面 + 3 处 back-link
- 控制台 0 error / 0 warning
- i18n 漏译 TS 编译失败（Messages interface 强约束）

## 实施步骤（计划）

1. 创建分支 `feat/iss-012-legal-skills`（已完成）
2. 复制 + 裁切 + 缩放 icon 资源
3. `src/data/products.ts` 加 `legalSkills` 条目
4. `src/styles/site.css` 加 royal 样式 + .back-link 样式
5. `src/i18n/{types,zh-CN,en,index}.ts` 加 `legalSkills` 页块 + `meta.backToHome`
6. `src/components/pages/LegalSkillsPage.astro` 新建（5 段式）
7. `src/components/pages/FolioPage.astro` + `FaroPdfPage.astro` 加 back-link
8. `src/components/pages/HomePage.astro` 改 grid 3-column
9. `src/pages/legal-skills.astro` + `src/pages/en/legal-skills.astro` thin wrappers
10. `npm run build` 验证
11. 浏览器实测 8 页面
12. 提交 + push + 开 PR

## 已知限制

- 16 个 skill 的代表性可能不全：legal-skills 项目持续演进，README 4 大类下的具体 skill 会有增减。本次设计挑的是"按代表性稳定"的 skill，未来某 skill 移除或归档后，详情页对应卡片也要更新（"代表性"语义会随时间漂移）
- royal OKLCH 数值是初选值，实施时如与 sage / steel 在视觉上不和谐会微调
- 源图横版裁中心可能失衡：实施前 `open` 预览确认
- 不做"4 大类分类标题"（feature-card 段没分类标签），靠 README 自身分类逻辑呈现；如需未来加重可加 `.feature-card--category` 子标题

## 关联决策

- DEC-002 资源来源单一真相源（沿用）
- DEC-003 5 段式详情页结构（沿用）
- DEC-006 i18n 框架（沿用）
- DEC-007 / DEC-009 微信二维码单源（无关，跳过）
- DEC-010 URL 去 subpath（沿用新 base）
- DEC-011（本 PR 新增）待 ISS-012 收口时落地
