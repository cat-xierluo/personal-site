# personal-site 任务源

> **当前阶段**：v0.1.0-alpha.12 — 全部 Phase 收口，v1.0 事实核查完成。下一步：用户指定。

## 活跃任务

- **ISS-015** Agent Execute Recast 插件集成 — 在主页新增第 4 张产品卡 + 详情页（与 Folia / FaroPDF / Legal Skills 同级）

### 远期候选

- v1.1：i18n 同步到产品仓 README / blog 子栏目
- v1.2：analytics（Umani / Plausible）/ SEO（sitemap + meta + OG）/ 自定义域（已取消，可重启）

### 跨仓遗留

- Folia README 官网链接仍指向旧 URL `/personal-site/folia/` → 应改为 `/folia/`
- FaroPDF README download 部分仍说"待发布" → 应更新为 v0.1.1 已发布

## 已取消

- **ISS-008 自定义域**（2026-06-05 用户决策取消，保持 `cat-xierluo.github.io/`）

## 归档任务索引

详细实现记录见 CHANGELOG.md；决策背景见 docs/DECISIONS.md。

| ISS | 标题 | 日期 | 交付物 |
| --- | --- | --- | --- |
| ISS-001 | scaffold + bio + 产品列表 | 2026-06-05 | commit `a92dacd`，3 页 5 段式 |
| ISS-002 | GitHub Pages workflow | 2026-06-05 | commit `01c4f75`，ISS-009 修复激活 |
| ISS-003 | Folia website 迁出 | 2026-06-05 | commit `3891da4`，5 段式详情页 |
| ISS-004 | FaroPDF 详情页扩全结构 | 2026-06-05 | commit `6d8f52b`，8 features |
| ISS-005 | 跨仓 cleanup | 2026-06-05 | PR-A + PR-B 已合并 |
| ISS-006 | 中英文切换 | 2026-06-05 | 自建 i18n 字典，6→6 页 |
| ISS-007 | 微信二维码 | 2026-06-05 | WechatQr 组件 + footer/contact QR |
| ISS-009 | 部署修复 | 2026-06-05 | PR #3，lock file + Node 22 + Pages 启用 |
| ISS-010 | 真实 QR 替换 | 2026-06-05 | 184KB 真图替换 1×1 占位 |
| ISS-011 | URL 去 subpath | 2026-06-05 | PR #6，仓名 → `cat-xierluo.github.io` |
| ISS-012 | Legal Skills 集成 | 2026-06-06 | PR #7，第 3 张产品卡 + 5 段式详情页 |
| ISS-013 | 48 skill 卡片 | 2026-06-06 | PR #9，4 大类分组 + hover + mono repo |
| ISS-014 | Header / Footer 简化 | 2026-06-07 | PR #10，净删 110 行 |

## 进度日志

- 2026-06-05：ISS-001~005 + ISS-006~007 + ISS-009~011（10 个任务，scaffold → 部署 → i18n → QR → URL）
- 2026-06-06：ISS-012~013 + 代码质量清理（Legal Skills 集成 + 48 skill 卡片）
- 2026-06-07：ISS-014 + v1.0 内容事实核查（Header/Footer 简化 + FaroPDF v0.1.1 同步）
