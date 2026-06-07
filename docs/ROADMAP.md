# personal-site 路线图

## 愿景

杨卫薪律师个人主页 — 作者 bio + 两个开源产品（Folia / FaroPDF）+ 联系方式 + 后续 i18n。技术方向：Astro 静态站，部署在 GitHub Pages。

## Phase 0 调研

- 2026-06-05：调研 Folia website Astro 单页结构
- 2026-06-05：brainstorm ISS-028 关键决策

## Phase 1 scaffold + bio + 产品列表占位

**目标**：v0.1.0-alpha.1 落地

- Astro 6.3.1 脚手架
- bio hero + about + 产品列表（2 cards）+ 联系方式
- Folia / FaroPDF 详情页 minimal 占位
- AGENTS.md / docs/TASKS.md / docs/DECISIONS.md / docs/ROADMAP.md 项目协议

**完成**：commit `a92dacd`

## Phase 1.5 GitHub Pages 自动部署

**目标**：push main 自动 build + deploy

- `.github/workflows/deploy.yml` 完整 workflow
- withastro/action + actions/deploy-pages 官方组合
- 环境变量：PERSONAL_SITE_URL / PERSONAL_BASE_PATH

**完成**：commit `01c4f75`（首次需要在 GitHub repo Settings → Pages → Source = GitHub Actions 手动启用一次）

## Phase 2 Folia website 迁出

**目标**：Folia website 完整内容迁到 personal-site/folia，跨仓 cleanup

- 主体：5 段式迁到 `src/pages/folia.astro`（commit `3891da4`）
- 跨仓 cleanup（ISS-005）：Folia 仓删 `website/` + 更新 README / FaroPDF 仓更新 README

**完成**：PR-A / PR-B 已合并

## Phase 3 FaroPDF 详情页扩全结构

**目标**：FaroPDF 详情页与 Folia 同结构（hero / intro / features / workflow / download）

- 从 Folia 详情页模板复用 CSS 类
- 数据来源：FaroPDF CHANGELOG 0.1.0-alpha.0 ~ 0.1.0-alpha.13 实际交付能力
- **不**发明未交付功能

**完成**：commit `6d8f52b`

## Phase 3.5 Legal Skills 集成

**目标**：第 3 个产品（Legal Skills）加入站点

- 主页第 3 张 product-card（royal 彩条）+ 3-column 网格
- 5 段式详情页 16 features + 共享 back-link
- 4 大类分组 + 全部 48 skill 卡片 + hover 动画 + mono repo 链接

**完成**：ISS-012 commit + ISS-013 PR #9 + 代码质量清理 PR #8

## Phase 3.6 Header / Footer 简化

**目标**：减少重复信息，提升详情页视觉

- 详情页 back-link 上移到 header 左上角
- 删 header brand 块（不显示作者名）
- Footer 去除重复 nav + 微信 QR，只留 brand + copyright
- 净删 110 行 dead code

**完成**：ISS-014 PR #10

## v1.0 范围

第一版发布条件：
- Phase 1-3.6 全部收口 ✅
- ISS-005 跨仓 cleanup 落定 ✅
- 部署到 cat-xierluo.github.io/ 公开访问 ✅
- 内容事实核查（与 Folia / FaroPDF / Legal Skills 当前状态对齐）

## v1.1 增量

- **ISS-006** 中英文切换
- **ISS-007** 微信二维码
- 可能：blog 子栏目（暂缓）

## v1.2 远期

- **ISS-008** 自定义域（DNS + HTTPS）
- 也许：analytics / SEO 增强

## 与 Folia / FaroPDF 协调

| 阶段 | 状态 | 跨仓动作 |
| --- | --- | --- |
| Phase 0 | ✅ | 无 |
| Phase 1 | ✅ | 无 |
| Phase 1.5 | ✅ | 无 |
| Phase 2 | ✅ | Folia 仓删 website/ + 更新 README；FaroPDF 仓更新 README（ISS-005） |
| Phase 3 | ✅ | FaroPDF 详情页扩全结构（ISS-004） |
| Phase 3.5 | ✅ | Legal Skills 集成（ISS-012/013） |
| Phase 3.6 | ✅ | Header / Footer 简化（ISS-014） |
| v1.0 | ⏳ | 跨仓 README 双向链接（personal-site ↔ Folia ↔ FaroPDF） |
| v1.1 | ⏳ | 视情况同步 i18n 到产品仓的 README |
| v1.2 | ⏳ | 自定义域 + DNS |
