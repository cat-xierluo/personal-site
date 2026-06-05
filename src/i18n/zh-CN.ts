import type { Messages } from './types';

const messages: Messages = {
  nav: {
    home: '主页',
    folia: 'Folia',
    faropdf: 'FaroPDF',
    github: 'GitHub',
    switchLanguage: 'EN',
    switchLanguageTitle: 'Switch to English',
    switchLanguageAria: '切换到英文',
  },

  footer: {
    home: '主页',
    folia: 'Folia',
    faropdf: 'FaroPDF',
    github: 'GitHub',
    wechatLabel: '微信',
    copyright: 'Apache License 2.0',
  },

  productCard: {
    eyebrow: '开源项目 · 个人开发',
    detailCta: '了解详情',
    sourceCta: '查看源码',
    iconAlt: '图标',
  },

  meta: {
    descriptionSuffix: '。产品：Folia（Markdown 阅读与 Word 导出）与 FaroPDF（律师 PDF 阅读器）。',
    productsList: 'Folia（Markdown 阅读与 Word 导出）与 FaroPDF（律师 PDF 阅读器）',
    foliaDescription: '面向知识工作者的 Markdown 阅读与 Word 导出工具：稳定阅读复杂 Markdown，所见即所得切换源码，Word 纸张预览与导出。',
    faropdfDescription: '面向律师的独立 PDF 阅读器：快读、检索、批注、整理、OCR、表单签署，卷宗 / 证据 / 扫描材料一条龙。',
  },

  index: {
    heroEyebrow: '个人主页 · 律师 + 独立开发者',
    heroPrimaryCta: '查看产品',
    heroSecondaryCtaPrefix: 'GitHub · ',
    aboutKicker: '关于',
    aboutTitle: '把法律工作里的小障碍，一件一件解决。',
    aboutParagraph1:
      '我是杨卫薪律师，专注于技术类纠纷领域，包括知识产权、数据与 AI 相关争议；同时长期关注 AI 技术在法律实务、知识管理和专业写作中的应用。',
    aboutParagraph2:
      '这个页面是「作者 + 产品」的入口。下面两个项目都来自日常法律工作中的真实痛点：Folia 解决「复杂 Markdown 文档的稳定阅读和纸面导出」，FaroPDF 解决「卷宗、证据、扫描件、合同 PDF 的快读、批注、OCR 和签署交付」。',
    aboutContactLine: '联系方式',
    productsKicker: '产品',
    productsTitle: '两个为日常法律工作打磨的开源项目。',
    contactKicker: '联系方式',
    contactTitle: '欢迎交流合作、产品建议或法律问题咨询。',
    contactWechatLabel: '微信',
    contactGithubLabel: 'GitHub',
    contactDomainLabel: '领域',
    contactDomainValue: '技术类纠纷 · 数据与 AI 相关争议',
  },

  folia: {
    heroEyebrow: 'Markdown reader for demanding documents',
    heroBack: '← 返回主页',
    heroDownload: '下载最新版',
    heroViewSource: '查看源码',
    preview: {
      filename: '项目复盘.md',
      heading1: '# 项目复盘',
      heading2a: '## 一、关键结论',
      bullet1: '- 交付范围已确认',
      bullet2: '- 后续问题进入清单',
      heading2b: '## 二、资料整理',
      paragraph: '请核对每份材料的来源、状态和下一步动作。',
      tableCol1: '模块',
      tableCol2: '材料',
      tableCol3: '状态',
      cellInput: '输入',
      cellInterview: '访谈记录',
      cellOrganized: '已整理',
      cellReference: '参考资料',
      cellPending: '待复核',
      cellOutput: '输出',
      cellOutputValue: '报告草稿、附件清单与后续任务',
      blockquote: 'Folia 会尽量保持复杂 Markdown 的阅读结构和纸面版式一致。',
    },
    introKickerPrefix: '为什么做',
    introTitle: 'Markdown 很轻，复杂资料却经常很重。',
    introBody:
      '重点解决知识工作里的两个断点：复杂 Markdown 在常见工具里容易变形，导出 Word 前又很难确认最终纸面效果。它把阅读、轻量编辑、纸张预览和导出放在一个克制的桌面窗口里。',
    featuresKicker: '核心能力',
    featuresTitle: '为长文档和复杂表格保留耐心。',
    features: [
      {
        title: '复杂 Markdown 稳定阅读',
        text: '长文档、HTML 片段、宽表格和混合排版可以保持清晰，不把复杂资料压成难以阅读的源码。',
      },
      {
        title: 'Markdown 所见即所得',
        text: '普通 Markdown 默认进入轻量编辑视图，源码模式仍可随时切回，适合阅读、修订和整理知识材料。',
      },
      {
        title: 'Word 纸张预览与导出',
        text: '导出前先看到接近 A4 的页面效果，再用内置或自定义 JSON 预设生成可交付的 .docx。',
      },
      {
        title: 'HTML 文章与演示预览',
        text: '可复制为公众号编辑器友好的 HTML，也能隔离运行自包含 HTML 演示文件。',
      },
    ],
    workflowKicker: '使用流程',
    workflowTitle: '从打开文件到交付结果，只保留必要步骤。',
    workflow: [
      '打开 Markdown、HTML 或拖拽文件进入窗口',
      '阅读复杂 Markdown，必要时切换源码或结构化编辑',
      '打开 Word 或 HTML 预览，确认输出效果',
      '导出 .docx 或复制 HTML 到目标编辑器',
    ],
    downloadKicker: '下载',
    downloadTitle: '从 GitHub Releases 获取最新版本。',
    downloadBody:
      '当前版本尚未做 Apple Developer 公证。macOS 首次运行如果提示无法验证开发者，请参考 README 中的首次运行说明。',
    downloadPrimary: '打开下载页',
    downloadSecondary: '阅读 README',
    downloadListAria: '安装包选择说明',
    downloadOptions: [
      'macOS Apple Silicon：选择 aarch64 或 arm64 安装包',
      'macOS Intel：选择 x64 或 x86_64 安装包',
      'Windows：选择 .exe 或 .msi 安装包',
    ],
  },

  faropdf: {
    heroEyebrow: 'PDF reader for legal materials · v0.1.0-alpha',
    heroBack: '← 返回主页',
    heroDownload: '下载最新版',
    heroViewSource: '查看源码',
    heroIconAlt: '图标',
    introKickerPrefix: '为什么做',
    introTitle: '法律材料很多 PDF，PDF 阅读器却常常不替它们着想。',
    introBody:
      '起点是律师日常处理卷宗、证据、判决、合同和扫描件的真实痛点：打开慢、检索难、批注零散、OCR 结果靠碰运气、交付时还要再过一遍整理。把快读、批注、OCR、页面整理和签署放在一个克制的桌面窗口里，并把「高风险操作绝不覆盖原始 PDF」当作硬约束。',
    featuresKicker: '核心能力',
    featuresTitle: '八条主线，覆盖法律 PDF 处理的常见动作。',
    features: [
      {
        title: '阅读与检索',
        text:
          'PDF.js 加载、虚拟化渲染（只渲染可见页和邻近页）、4 种视图模式（连续 / 单页 / 双页 / 适合宽度）、8 项缩放预设 + 旋转、键盘翻页、缩略图、阅读位置本地恢复、按需全文索引与高亮。',
      },
      {
        title: '批注',
        text:
          '9 种批注类型（高亮 / 下划线 / 删除线 / 备注 / 文本框 / 矩形 / 箭头 / 手写 / 图章）+ 6 色色板 + 5 套图章模板 + 中文图章真实绘制（思源黑体 SC + pdf-lib fontkit 嵌入）+ sidecar 摘要导出。',
      },
      {
        title: '页面整理',
        text:
          'pdf-lib 真实改写：旋转 / 删除 / 重排 + 多选与 shift+click 区间选择 + 删除前 RiskConfirmDialog + 占位 Undo + 默认输出 `*-organized.pdf`，绝不覆盖原始文件。',
      },
      {
        title: 'OCR / 扫描',
        text:
          'OCR bridge 真实接入：本地 ocrmypdf + 云端 PaddleOCR / MinerU；任务队列持久化 + 启动回收；4 个 Tauri command；扫描预处理 lopdf 真实清洁；9 态质量检查（可检索页比例 / 关键词命中 / CER / 体积比 / 耗时）。',
      },
      {
        title: '导出',
        text:
          'pdf-lib 改写 + 表单 / 批注 flatten 双策略 + 文字 / 图片水印 + Bates 编号 + 普通页码 + 证据图片 A4 编排 + 压缩 plan-only。',
      },
      {
        title: '表单签署',
        text:
          'AcroForm 字段识别（text / dropdown / checkbox / radio）+ 填值 + 签名图片 + FormsPanel 浮层 + flatten 导出（单条失败封装为 `failed` 不中断后续）。',
      },
      {
        title: '法律材料友好',
        text:
          '为律师工作流量身打造，重点支持长卷宗、扫描件、证据材料、批注汇总、页面编号与签署交付；高风险操作另存为新 PDF，不覆盖原始文件。',
      },
      {
        title: '设置 + 自动更新',
        text:
          '默认保存目录 / OCR provider / 隐私确认 / API Key 脱敏；检查更新走 `tauri-plugin-updater` 9 态状态机；`autoUpdateCheck` 设置项可关闭自动检查（DEC-056）。',
      },
    ],
    workflowKicker: '使用流程',
    workflowTitle: '从打开卷宗到交付结果，路径尽量短。',
    workflow: [
      '打开本地 PDF 或拖拽文件进入窗口',
      '阅读 / 批注 / 整理页面，OCR 模式处理扫描件',
      '填表 / 签名 / 批注 flatten，导出为新 PDF',
      '另存为 `*-delivery.pdf` / `*-organized.pdf` / `*-evidence-pack.pdf` 交付',
    ],
    downloadKicker: '下载',
    downloadTitle: '从 GitHub Releases 获取最新版本。',
    downloadBody1:
      '当前 0.1.0 仍处 alpha 阶段：全平台打包与自动更新流水线已就位（`docs/RELEASE.md`），但**尚未生成任何公开 release**。下面的安装包说明在首个 release 发布后即生效。',
    downloadBody2:
      'macOS 首次运行如果提示「无法验证开发者」或「已损坏」，未来指引是把 `FaroPDF.app` 拖到「应用程序」后在终端执行 `xattr -dr com.apple.quarantine /Applications/FaroPDF.app`，具体步骤以 release 时 `docs/RELEASE.md` 为准。',
    downloadPrimary: '打开下载页（待发布）',
    downloadSecondary: '阅读 README',
    downloadListAria: '安装包选择说明',
    downloadOptions: [
      'macOS Apple Silicon：选择 aarch64 / arm64 安装包',
      'macOS Intel：选择 x64 / x86_64 安装包',
      'Windows：选择 .exe 或 .msi 安装包',
    ],
  },
};

export default messages;
