# personal-site 变更日志

## 0.1.0-alpha.12 - 2026-06-07

- v1.0 内容事实核查 + FaroPDF v0.1.1 同步：对齐三个源仓库（Folia / FaroPDF / Legal Skills）当前状态。docs 同步。
  - **FaroPDF 版本**：hero eyebrow 去掉 `v0.1.0-alpha` 版本标记（已发布 v0.1.1 稳定版）
  - **FaroPDF 下载**：download 文案从"尚未发布"改为"v0.1.1 已发布"；macOS 首次运行指引更新为实际 release 说明；CTA 从"待发布"改为"打开下载页"
  - **FaroPDF 批注**：补充"分组摘要面板（按类型 / 颜色 / 页面维度分组）+ 案件材料核查清单导出"（v0.1.1 新功能 DEC-068）
  - **FaroPDF 导出**：补充"法院上传压缩 4 档（5/10/20/50MB Canvas API JPEG DCTDecode 真实重编码）"（v0.1.1 新功能 DEC-069）；去掉"压缩 plan-only"（已真实交付）
  - **FaroPDF 自动更新**："9 态状态机"→"10 态状态机（含 fallback）"（v0.1.0-alpha.20 DEC-066）
  - **Legal Skills workflow**：中英 workflow 第一步 "47 个 skills" → "48 个 skills"（与 features 标题一致）
  - **FaroPDF QR 跨仓**：FaroPDF 仓 `wechat-qrcode.png` 已是 183KB 真实图片（非 67B 占位），无需操作
  - **范围**：仅 i18n 字典更新（`src/i18n/{zh-CN,en}.ts`），零代码 / 组件 / CSS 改动

## 0.1.0-alpha.11 - 2026-06-06

- ISS-014 Header / Footer 简化。docs 同步。
  - Header：删 `.brand`（不显作者名）；主页左上留空；详情页 back-link 上移到 header；hero 下方 in-content back-link 全删
  - Footer：删 `.footer-links` + `.footer-wechat` + WechatQr（与 header/homepage 重复）+ 8 dead 字段 + ~50 行死样式。只剩 brand + copyright
  - 净 -110 行 dead code（9 files / +15 / -125）

## 0.1.0-alpha.10 - 2026-06-06

- ISS-013 Legal Skills 48 skill 卡片：4 大类分组 + hover 动画 + mono repo 链接（41 in-仓 + 7 独立 repo）。i18n 重写 `SkillGroup[]` 结构（~308 处翻译）。

## 0.1.0-alpha.9 - 2026-06-06

- 代码质量清理：dead-code 批量清（5 i18n 字段 + 1 dead type）+ 3 详情页重复 CSS 提全局。零用户可见变更。

## 0.1.0-alpha.8 - 2026-06-06

- ISS-012 Legal Skills 集成：第 3 张产品卡（royal）+ 5 段式详情页（16 features + 4 workflow）+ 共享 back-link。8 页（4 zh + 4 en）。DEC-011。

## 0.1.0-alpha.7 - 2026-06-05

- ISS-011 URL 去 subpath：仓名 `personal-site` → `cat-xierluo.github.io`，`base: '/'`。旧 URL 404（用户确认接受）。顺手修 products.ts icon 前导 `/`。DEC-010。

## 0.1.0-alpha.6 - 2026-06-05

- ISS-010 真实 QR 替换：1×1 占位 → `Folia/docs/wechat-qr.png` 184KB。DEC-009 supersede DEC-007。

## 0.1.0-alpha.5 - 2026-06-05

- ISS-009 部署修复三根因：补 lock file + 启用 Pages（手动）+ Node 20→22。ISS-008 自定义域取消。DEC-008。

## 0.1.0-alpha.4 - 2026-06-05

- ISS-007 微信二维码：`WechatQr.astro` 共享组件（footer 64×64 + contact 160×160）。DEC-007。（当时 1×1 占位，ISS-010 替换）

## 0.1.0-alpha.3 - 2026-06-05

- ISS-006 中英文切换：自建 i18n 字典 + `/en/` 子路径。6 页（3 zh + 3 en）。DEC-006。

## 0.1.0-alpha.2 - 2026-06-05

- ISS-004 FaroPDF 详情页扩全结构：minimal → 5 段式（hero / intro / 8 features / workflow 4 步 / download）。

## 0.1.0-alpha.1 - 2026-06-05

- Phase 1+1.5+2 合并发布：Astro scaffold + bio + 产品列表（Folia / FaroPDF）+ Folia website 迁出 + GitHub Pages CI。DEC-001~005。
