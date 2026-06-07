# personal-site 路线图

## 愿景

杨卫薪律师个人主页 — 作者 bio + 三个开源产品（Folia / FaroPDF / Legal Skills）+ 联系方式 + 中英文切换。技术方向：Astro 静态站，部署在 GitHub Pages（`cat-xierluo.github.io/`）。

## 阶段总览

| 阶段 | 目标 | 状态 |
| --- | --- | --- |
| Phase 1 | scaffold + bio + 产品列表 | ✅ commit `a92dacd` |
| Phase 1.5 | GitHub Pages 自动部署 | ✅ commit `01c4f75` |
| Phase 2 | Folia website 迁出 + 跨仓 cleanup | ✅ commit `3891da4` + ISS-005 |
| Phase 3 | FaroPDF 详情页扩全结构 | ✅ commit `6d8f52b` |
| Phase 3.5 | Legal Skills 集成 | ✅ PR #7 + #9 |
| Phase 3.6 | Header / Footer 简化 | ✅ PR #10 |
| v1.0 事实核查 | 内容与源仓对齐 | ✅ FaroPDF v0.1.1 同步 |

## v1.0 收口条件

- Phase 1-3.6 全部收口 ✅
- 跨仓 cleanup（ISS-005）落定 ✅
- 部署到 `cat-xierluo.github.io/` 公开访问 ✅
- 内容事实核查 ✅

## v1.1 增量（已落地）

- **ISS-006** 中英文切换 ✅
- **ISS-007** 微信二维码 ✅

## v1.2 远期

- **ISS-008** 自定义域（用户已取消，可重启）
- analytics / SEO 增强（sitemap + meta + OG）
- blog 子栏目
- i18n 同步到产品仓 README

## 跨仓协调

| 阶段 | 跨仓动作 | 状态 |
| --- | --- | --- |
| Phase 2 | Folia 仓删 `website/` + 更新 README；FaroPDF 更新 README | ✅ |
| v1.0 | Folia README 官网链接需更新（旧 URL） | 待办 |
| v1.0 | FaroPDF README download 需更新（"待发布"→ 已发布） | 待办 |
