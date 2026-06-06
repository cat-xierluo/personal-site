import type { Messages } from './types';

const messages: Messages = {
  nav: {
    home: '主页',
    folia: 'Folia',
    faropdf: 'FaroPDF',
    legalSkills: 'Legal Skills',
    github: 'GitHub',
    switchLanguage: 'EN',
    switchLanguageTitle: 'Switch to English',
    switchLanguageAria: '切换到英文',
  },

  footer: {
    home: '主页',
    folia: 'Folia',
    faropdf: 'FaroPDF',
    legalSkills: 'Legal Skills',
    github: 'GitHub',
    wechatLabel: '微信',
    wechatHandlePrefix: '微信：',
    wechatQrAlt: '微信二维码 — ywxlaw',
    copyright: 'Apache License 2.0',
  },

  productCard: {
    eyebrow: '开源项目 · 个人开发',
    detailCta: '了解详情',
    sourceCta: '查看源码',
    iconAlt: '图标',
  },

  meta: {
    descriptionSuffix: '。产品：Folia（Markdown 阅读与 Word 导出）、FaroPDF（律师 PDF 阅读器）与 Legal Skills（AI Agent Skills 集合）。',
    backToHome: '回到作者主页',
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
      '这个页面是「作者 + 产品」的入口。Folia 解决「复杂 Markdown 文档的稳定阅读和纸面导出」，FaroPDF 解决「卷宗、证据、扫描件、合同 PDF 的快读、批注、OCR 和签署交付」，Legal Skills 把这一整套工作流沉淀成可装配的 AI Agent 技能。',
    aboutContactLine: '联系方式',
    productsKicker: '产品',
    productsTitle: '三个为日常法律工作打磨的开源项目。',
    contactKicker: '联系方式',
    contactTitle: '欢迎交流合作、产品建议或法律问题咨询。',
    contactWechatLabel: '微信',
    contactWechatCaption: '扫码添加微信',
    contactWechatQrAlt: '微信二维码 — 扫码添加 ywxlaw',
    contactGithubLabel: 'GitHub',
    contactDomainLabel: '领域',
    contactDomainValue: '技术类纠纷 · 数据与 AI 相关争议',
  },

  folia: {
    heroEyebrow: 'Markdown reader for demanding documents',
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

  legalSkills: {
    heroEyebrow: 'AI Agent Skills 集合',
    heroPrimaryCta: '了解详情',
    heroSecondaryCta: '查看 GitHub',
    introKickerPrefix: '为什么做',
    introTitle: '律师既是专业工作者，也是创作者。',
    introBody:
      '日常工作的两端都需要顺手工具：一端是从公众号、扫描件、录音视频里把材料拿进来，另一端是把研究成果写成可交付的方案、报告与文章。Legal Skills 把这一整套链路沉淀成可装配的 AI Agent 技能，让律师在自己的 Agent 工作流里直接调用。',
    featuresKicker: '全部 Skills',
    featuresTitle: '按 4 大类划分，共 48 个 skill（外链到对应 GitHub 仓）。',
    features: [
      {
        key: 'contentFetch',
        title: '📥 内容获取',
        items: [
          {
            title: 'wechat-article-fetch',
            text: '无头抓取微信公众号文章，保存为 Markdown。',
            url: 'https://github.com/cat-xierluo/legal-skills/tree/main/skills/wechat-article-fetch',
          },
          {
            title: 'legal-ocr',
            text: 'OCR 与扫描识别统一入口，覆盖 PDF、图片、Office 文档和 URL。',
            url: 'https://github.com/cat-xierluo/legal-skills/tree/main/skills/legal-ocr',
          },
          {
            title: 'mineru-ocr',
            text: '通过 MinerU API 将 PDF / 图片转 Markdown，支持表格与公式识别。',
            url: 'https://github.com/cat-xierluo/legal-skills/tree/main/skills/mineru-ocr',
          },
          {
            title: 'paddle-ocr',
            text: '面向法律 PDF 与扫描件的 PaddleOCR 结构化解析，保留 archive。',
            url: 'https://github.com/cat-xierluo/legal-skills/tree/main/skills/paddle-ocr',
          },
          {
            title: 'funasr-transcribe',
            text: '本地语音转文字，支持说话人分离、会议记录与视频字幕。',
            url: 'https://github.com/cat-xierluo/legal-skills/tree/main/skills/funasr-transcribe',
          },
          {
            title: 'tingwu-asr',
            text: '阿里云通义听悟云端语音转录，长音频高精度场景。',
            url: 'https://github.com/cat-xierluo/legal-skills/tree/main/skills/tingwu-asr',
          },
          {
            title: 'universal-media-downloader',
            text: '视频与播客平台下载，支持抖音 / B 站 / YouTube / 小宇宙等。',
            url: 'https://github.com/cat-xierluo/legal-skills/tree/main/skills/universal-media-downloader',
          },
          {
            title: 'douyin-batch-download',
            text: '抖音视频批量下载，基于 F2 框架，支持 Cookie 自动管理。',
            url: 'https://github.com/cat-xierluo/legal-skills/tree/main/skills/douyin-batch-download',
          },
          {
            title: 'multi-search',
            text: '智能多主题深度研究，并行 Subagent 检索生成系统化文档。',
            url: 'https://github.com/cat-xierluo/legal-skills/tree/main/skills/multi-search',
          },
        ],
      },
      {
        key: 'legalApp',
        title: '⚖️ 法律专业应用',
        items: [
          {
            title: 'yuandian-law-search',
            text: '元典法条与案例检索，5 种检索模式。',
            url: 'https://github.com/cat-xierluo/legal-skills/tree/main/skills/yuandian-law-search',
          },
          {
            title: 'zhihe-legal-research',
            text: '智合 AI 法律大模型研究，提交问题自动调研并生成 docx 报告。',
            url: 'https://github.com/cat-xierluo/legal-skills/tree/main/skills/zhihe-legal-research',
          },
          {
            title: 'court-sms',
            text: '法院短信识别与文书下载，自动归档到对应案件目录。',
            url: 'https://github.com/cat-xierluo/legal-skills/tree/main/skills/court-sms',
          },
          {
            title: 'new-case',
            text: '将案件 / 咨询材料整理成标准化目录结构（诉讼 12 目录 / 咨询 3 目录）。',
            url: 'https://github.com/cat-xierluo/legal-skills/tree/main/skills/new-case',
          },
          {
            title: 'litigation-analysis',
            text: '诉讼分析：起诉状与证据、判决书深度分析、庭审笔录复盘。',
            url: 'https://github.com/cat-xierluo/legal-skills/tree/main/skills/litigation-analysis',
          },
          {
            title: 'contract-copilot',
            text: '合同起草与审查：风险清单、起草骨架、修改建议、推荐措辞。',
            url: 'https://github.com/cat-xierluo/contract-copilot.skill',
          },
          {
            title: 'legal-case-analysis',
            text: '通用法律分析：多场景分析支架与法律任务前置分析引擎。',
            url: 'https://github.com/cat-xierluo/legal-skills/tree/main/skills/legal-case-analysis',
          },
          {
            title: 'legal-proposal-generator',
            text: '诉讼方案 / 咨询报告 / 建议书 / 结案汇报等法律服务文档自动生成。',
            url: 'https://github.com/cat-xierluo/legal-skills/tree/main/skills/legal-proposal-generator',
          },
          {
            title: 'legal-text-format',
            text: '法律条文与案例转规范 Markdown，archive 归档。',
            url: 'https://github.com/cat-xierluo/legal-skills/tree/main/skills/legal-text-format',
          },
          {
            title: 'legal-qa-extractor',
            text: '从律师与客户沟通记录提取 QA 对，结构化知识库 + 脱敏。',
            url: 'https://github.com/cat-xierluo/legal-skills/tree/main/skills/legal-qa-extractor',
          },
          {
            title: 'trademark-assistant',
            text: '商标服务助手：类别规划、可注册性初筛、申请材料准备。',
            url: 'https://github.com/cat-xierluo/trademark-assistant.skill',
          },
          {
            title: 'patent-analysis',
            text: '专利分析 7 种场景：单专利要点、侵权比对、FTO、稳定性、规避设计。',
            url: 'https://github.com/cat-xierluo/patent-analysis.skill',
          },
          {
            title: 'code2patent',
            text: '从代码项目提取技术实现证据，生成发明专利申请材料。',
            url: 'https://github.com/cat-xierluo/code2patent.skill',
          },
          {
            title: 'opc-legal-counsel',
            text: '面向一人公司 / 单人创业者的常年法律顾问技能。',
            url: 'https://github.com/cat-xierluo/opc-legal-counsel.skill',
          },
        ],
      },
      {
        key: 'contentProcess',
        title: '📤 内容处理',
        items: [
          {
            title: 'pdf-processor',
            text: 'PDF 全能处理：扫描件预处理、OCR 双层、页码、合并、解密、水印、压缩。',
            url: 'https://github.com/cat-xierluo/legal-skills/tree/main/skills/pdf-processor',
          },
          {
            title: 'img2pdf',
            text: '图片 / PDF 按 N 张 / 页编排为标准化 A4 PDF，法律证据材料整理。',
            url: 'https://github.com/cat-xierluo/legal-skills/tree/main/skills/img2pdf',
          },
          {
            title: 'pdf-organizer',
            text: '法律 PDF 整理：拆分 / 合并 / 重命名，生成页面索引与下游交接文件。',
            url: 'https://github.com/cat-xierluo/legal-skills/tree/main/skills/pdf-organizer',
          },
          {
            title: 'course-generator',
            text: '课程内容管理：转录稿 / 文献生成结构化课程，归档到知识库。',
            url: 'https://github.com/cat-xierluo/legal-skills/tree/main/skills/course-generator',
          },
          {
            title: 'video-screenshot',
            text: '从录屏视频自动抽取关键帧，场景变化检测与去重。',
            url: 'https://github.com/cat-xierluo/legal-skills/tree/main/skills/video-screenshot',
          },
          {
            title: 'article2book',
            text: '现有内容资产再组织：文章、专栏、课程讲稿转书 / 课程 / 手册。',
            url: 'https://github.com/cat-xierluo/legal-skills/tree/main/skills/article2book',
          },
          {
            title: 'svg-article-illustrator',
            text: 'AI 驱动 SVG 文章配图生成，支持动态 SVG 与 PNG 导出。',
            url: 'https://github.com/cat-xierluo/legal-skills/tree/main/skills/svg-article-illustrator',
          },
          {
            title: 'svg-book-illustrator',
            text: '书籍 / 文章 SVG 配图，架构图 / 流程图 / 层次图，按印刷尺寸优化。',
            url: 'https://github.com/cat-xierluo/legal-skills/tree/main/skills/svg-book-illustrator',
          },
          {
            title: 'piclist-upload',
            text: '通过 PicList HTTP Server 将本地图片上传到图床，替换 Markdown 云端链接。',
            url: 'https://github.com/cat-xierluo/legal-skills/tree/main/skills/piclist-upload',
          },
          {
            title: 'md2word',
            text: 'Markdown 转标准格式 Word，自动应用法律文书排版。',
            url: 'https://github.com/cat-xierluo/md2word.skill',
          },
          {
            title: 'de-ai-polish',
            text: '检测并去除文章 AI 化表述，24 种 AI 写作检测规则 + 5 维度质量评分。',
            url: 'https://github.com/cat-xierluo/de-ai-polish.skill',
          },
          {
            title: 'video-compressor',
            text: '视频压缩与静默片段剪切，FFmpeg CRF 模式 + 硬件加速。',
            url: 'https://github.com/cat-xierluo/legal-skills/tree/main/skills/video-compressor',
          },
        ],
      },
      {
        key: 'devTool',
        title: '🔧 开发工具',
        items: [
          {
            title: 'agent-email',
            text: 'Agent 专用邮箱服务，通过邮件收发指令和结果。',
            url: 'https://github.com/cat-xierluo/legal-skills/tree/main/skills/agent-email',
          },
          {
            title: 'project-init',
            text: '项目初始化：自动生成 CLAUDE.md / docs 体系，6 种项目类型。',
            url: 'https://github.com/cat-xierluo/legal-skills/tree/main/skills/project-init',
          },
          {
            title: 'skill-manager',
            text: 'AI Agent Skills 的安装、同步、卸载与列表查看，本地路径和 GitHub 仓库。',
            url: 'https://github.com/cat-xierluo/legal-skills/tree/main/skills/skill-manager',
          },
          {
            title: 'skill-architect',
            text: '技能架构师向导与审查，整合 skill-creator 流程与合规检查。',
            url: 'https://github.com/cat-xierluo/legal-skills/tree/main/skills/skill-architect',
          },
          {
            title: 'git-batch-commit',
            text: '智能 Git 批量提交，混合修改按类型分类，标准化 commit message。',
            url: 'https://github.com/cat-xierluo/legal-skills/tree/main/skills/git-batch-commit',
          },
          {
            title: 'git-workflow',
            text: 'Git 全流程：分支、Monorepo 安全合并、PR 创建 / 审查 / 合并、冲突恢复。',
            url: 'https://github.com/cat-xierluo/legal-skills/tree/main/skills/git-workflow',
          },
          {
            title: 'cross-agent-coordination',
            text: '跨平台 Agent 任务协调：任务分配、能力路由、交接上下文。',
            url: 'https://github.com/cat-xierluo/legal-skills/tree/main/skills/cross-agent-coordination',
          },
          {
            title: 'multi-agent-orchestration',
            text: '多 Agent 本地执行编排：worktree / session 隔离、Agent Teams / tmux、PM 巡检。',
            url: 'https://github.com/cat-xierluo/legal-skills/tree/main/skills/multi-agent-orchestration',
          },
          {
            title: 'release-workflow',
            text: 'GitHub 项目发布全流程：版本号、CHANGELOG、tag、CI 监控。',
            url: 'https://github.com/cat-xierluo/legal-skills/tree/main/skills/release-workflow',
          },
          {
            title: 'github-star-manager',
            text: 'GitHub Star 项目管理：自动发现 / 同步已 Star 项目，分类与 Dashboard。',
            url: 'https://github.com/cat-xierluo/legal-skills/tree/main/skills/github-star-manager',
          },
          {
            title: 'skill-lint',
            text: 'Skill 格式审查：Frontmatter / 版本同步 / 文档一致性 / 冗余内容。',
            url: 'https://github.com/cat-xierluo/legal-skills/tree/main/skills/skill-lint',
          },
          {
            title: 'clawhub-sync',
            text: '本地 Skills 批量同步到 ClawHub 平台，智能 .gitignore 过滤。',
            url: 'https://github.com/cat-xierluo/legal-skills/tree/main/skills/clawhub-sync',
          },
          {
            title: 'subtree-publish',
            text: 'monorepo 子目录通过 git subtree 推送到独立 GitHub 仓库。',
            url: 'https://github.com/cat-xierluo/legal-skills/tree/main/skills/subtree-publish',
          },
        ],
      },
    ],
    featureCardViewRepo: '查看 GitHub',
    featureCardVisitAria: '在 GitHub 上查看',
    workflowKicker: '使用流程',
    workflowTitle: '从选 Skill 到多 Agent 协作。',
    workflow: [
      '在 README 的 47 个 skills 里挑出本任务需要的能力',
      '复制一行安装提示语到 Agent，一键装到 Claude Code / OpenClaw / WorkBuddy / CodeX / OpenCode / Hermes',
      '用 cross-agent-coordination 在多 Agent 之间路由和交接上下文',
      '用 multi-agent-orchestration 起多个 worktree 并行跑长任务',
    ],
    downloadKicker: '安装',
    downloadTitle: '从 GitHub 复制一行提示即可。',
    downloadBody:
      '本仓库采用双许可证：MIT 技能可自由使用包括商用，CC-BY-NC 技能可自由使用但不可商用且需保留署名。商用前请添加微信（ywxlaw）联系授权。安装方法：把「请帮我从 GitHub 安装 legal-skills 技能集合：https://github.com/cat-xierluo/legal-skills」发给 Agent 即可。',
    downloadPrimary: '打开 GitHub 仓库',
    downloadSecondary: '阅读 README',
  },
};

export default messages;
