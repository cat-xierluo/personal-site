import type { Messages } from './types';

const messages: Messages = {
  nav: {
    home: 'Home',
    folia: 'Folia',
    faropdf: 'FaroPDF',
    legalSkills: 'Legal Skills',
    github: 'GitHub',
    switchLanguage: '中文',
    switchLanguageTitle: '切换到中文',
    switchLanguageAria: 'Switch to Chinese',
  },

  footer: {
    home: 'Home',
    folia: 'Folia',
    faropdf: 'FaroPDF',
    legalSkills: 'Legal Skills',
    github: 'GitHub',
    wechatLabel: 'WeChat',
    wechatHandlePrefix: 'WeChat: ',
    wechatQrAlt: 'WeChat QR code — ywxlaw',
    copyright: 'Apache License 2.0',
  },

  productCard: {
    eyebrow: 'Open source · solo developed',
    detailCta: 'Learn more',
    sourceCta: 'View source',
    iconAlt: 'icon',
  },

  meta: {
    descriptionSuffix: '. Products: Folia (Markdown reader with Word export), FaroPDF (a PDF reader for lawyers), and Legal Skills (AI Agent Skills collection).',
    backToHome: 'Back to author homepage',
  },

  index: {
    heroEyebrow: 'Personal site · Lawyer + independent developer',
    heroPrimaryCta: 'See products',
    heroSecondaryCtaPrefix: 'GitHub · ',
    aboutKicker: 'About',
    aboutTitle: 'Solving the small friction points in legal work, one at a time.',
    aboutParagraph1:
      'I am Yang Weixin, an attorney-at-law. I focus on technology-related disputes, intellectual property, and data & AI-related issues. I also keep a long-running interest in applying AI to legal practice, knowledge management, and professional writing.',
    aboutParagraph2:
      'This page is the entry point for "about + products". Folia solves "stable reading and paper export for complex Markdown documents", FaroPDF solves "fast read, annotation, OCR, and signing delivery for case files, evidence, scanned materials, and contract PDFs", and Legal Skills consolidates the whole workflow into composable AI Agent skills.',
    aboutContactLine: 'Contact',
    productsKicker: 'Products',
    productsTitle: 'Three open source projects refined for everyday legal work.',
    contactKicker: 'Contact',
    contactTitle: 'Open to collaboration, product feedback, and legal inquiries.',
    contactWechatLabel: 'WeChat',
    contactWechatCaption: 'Scan to add on WeChat',
    contactWechatQrAlt: 'WeChat QR code — scan to add ywxlaw',
    contactGithubLabel: 'GitHub',
    contactDomainLabel: 'Focus',
    contactDomainValue: 'Technology-related disputes · Data and AI-related issues',
  },

  folia: {
    heroEyebrow: 'Markdown reader for demanding documents',
    heroDownload: 'Download latest',
    heroViewSource: 'View source',
    preview: {
      filename: 'project-retrospective.md',
      heading1: '# Project retrospective',
      heading2a: '## 1. Key conclusions',
      bullet1: '- Delivery scope confirmed',
      bullet2: '- Outstanding items moved to backlog',
      heading2b: '## 2. Source material',
      paragraph: 'Verify the source, status, and next action for each piece of material.',
      tableCol1: 'Module',
      tableCol2: 'Material',
      tableCol3: 'Status',
      cellInput: 'Input',
      cellInterview: 'Interview notes',
      cellOrganized: 'Organized',
      cellReference: 'Reference docs',
      cellPending: 'Pending review',
      cellOutput: 'Output',
      cellOutputValue: 'Draft report, attachments index, and follow-up tasks',
      blockquote: 'Folia keeps the reading structure of complex Markdown aligned with the printed layout.',
    },
    introKickerPrefix: 'Why',
    introTitle: 'Markdown is light, but demanding documents are heavy.',
    introBody:
      'Folia targets two friction points in knowledge work: complex Markdown easily breaks in common tools, and it is hard to confirm the printed result before exporting to Word. It puts reading, lightweight editing, paper preview, and export in one restrained desktop window.',
    featuresKicker: 'Core capabilities',
    featuresTitle: 'Patience for long documents and complex tables.',
    features: [
      {
        title: 'Stable reading of complex Markdown',
        text: 'Long documents, HTML fragments, wide tables, and mixed layouts stay legible — complex material is not squeezed into hard-to-read source.',
      },
      {
        title: 'WYSIWYG for Markdown',
        text: 'Ordinary Markdown opens in a lightweight editing view by default; source mode is always one click away, suited for reading, revising, and organizing knowledge.',
      },
      {
        title: 'Word paper preview and export',
        text: 'See an A4-like page before exporting, then generate a deliverable .docx using built-in or custom JSON presets.',
      },
      {
        title: 'HTML article and slide preview',
        text: 'Copy as editor-friendly HTML for WeChat-style articles, or run self-contained HTML slide files in an isolated viewer.',
      },
    ],
    workflowKicker: 'Workflow',
    workflowTitle: 'From opening a file to delivering the result, only the necessary steps.',
    workflow: [
      'Open a Markdown or HTML file, or drag one into the window',
      'Read complex Markdown; switch to source or structured edit when needed',
      'Open the Word or HTML preview to confirm the output',
      'Export .docx or copy HTML into the target editor',
    ],
    downloadKicker: 'Download',
    downloadTitle: 'Get the latest version from GitHub Releases.',
    downloadBody:
      'The current build is not yet notarized by Apple Developer. If macOS shows "cannot verify developer" on first launch, follow the first-run notes in the README.',
    downloadPrimary: 'Open downloads',
    downloadSecondary: 'Read README',
    downloadListAria: 'Installer selection notes',
    downloadOptions: [
      'macOS Apple Silicon: pick the aarch64 or arm64 installer',
      'macOS Intel: pick the x64 or x86_64 installer',
      'Windows: pick the .exe or .msi installer',
    ],
  },

  faropdf: {
    heroEyebrow: 'PDF reader for legal materials · v0.1.0-alpha',
    heroDownload: 'Download latest',
    heroViewSource: 'View source',
    heroIconAlt: 'icon',
    introKickerPrefix: 'Why',
    introTitle: 'Legal materials are full of PDFs; PDF readers rarely are built for them.',
    introBody:
      'FaroPDF starts from the daily pain points of lawyers handling case files, evidence, judgments, contracts, and scanned materials: slow open, weak search, scattered annotations, hit-or-miss OCR, and one more pass of cleanup before delivery. It puts fast read, annotation, OCR, page organization, and signing in one restrained desktop window, and treats "high-risk operations never overwrite the original PDF" as a hard constraint.',
    featuresKicker: 'Core capabilities',
    featuresTitle: 'Eight tracks covering the common motions in legal PDF work.',
    features: [
      {
        title: 'Reading and search',
        text:
          'PDF.js loading, virtualized rendering (only visible and adjacent pages), four view modes (continuous / single / double / fit width), eight zoom presets plus rotation, keyboard page-turn, thumbnails, local reading-position restore, on-demand full-text index and highlight.',
      },
      {
        title: 'Annotation',
        text:
          'Nine annotation types (highlight / underline / strikethrough / note / text box / rectangle / arrow / freehand / stamp) plus a six-color palette, five stamp templates, real Chinese stamp rendering (Source Han Sans SC + pdf-lib fontkit embedding), and sidecar summary export.',
      },
      {
        title: 'Page organization',
        text:
          'Real pdf-lib rewrite: rotate / delete / reorder, multi-select and shift+click range selection, RiskConfirmDialog before delete, placeholder Undo, and default output `*-organized.pdf` that never overwrites the source.',
      },
      {
        title: 'OCR / scans',
        text:
          'Real OCR bridge: local ocrmypdf plus cloud PaddleOCR / MinerU. Persistent task queue with startup recovery, four Tauri commands, real lopdf-based scan cleanup, and a 9-state quality check (searchable-page ratio / keyword hit / CER / size ratio / elapsed).',
      },
      {
        title: 'Export',
        text:
          'pdf-lib rewrite, form / annotation flatten with dual strategy, text and image watermark, Bates numbering, plain page numbers, A4 evidence image composition, and compression plan-only.',
      },
      {
        title: 'Forms and signing',
        text:
          'AcroForm field detection (text / dropdown / checkbox / radio), fill values, signature images, the FormsPanel overlay, and flatten export (a single failure is wrapped as `failed` and does not abort the rest).',
      },
      {
        title: 'Legal-material friendly',
        text:
          'Tailored to the lawyer workflow: long case files, scanned materials, evidence, annotation rollup, page numbering, and signing delivery. High-risk operations save as a new PDF instead of overwriting the source.',
      },
      {
        title: 'Settings and auto-update',
        text:
          'Default save directory, OCR provider, privacy confirmation, and redacted API keys. Update checks run through the `tauri-plugin-updater` 9-state machine, and the `autoUpdateCheck` setting can disable automatic checks (DEC-056).',
      },
    ],
    workflowKicker: 'Workflow',
    workflowTitle: 'From opening a case file to delivering the result, the path stays short.',
    workflow: [
      'Open a local PDF or drag a file into the window',
      'Read, annotate, and organize pages; use OCR mode for scanned material',
      'Fill forms, sign, flatten annotations, and export to a new PDF',
      'Save as `*-delivery.pdf` / `*-organized.pdf` / `*-evidence-pack.pdf` for delivery',
    ],
    downloadKicker: 'Download',
    downloadTitle: 'Get the latest version from GitHub Releases.',
    downloadBody1:
      '0.1.0 is still in alpha: the cross-platform packaging and auto-update pipeline is in place (`docs/RELEASE.md`), but **no public release has been published yet**. The installer notes below will apply once the first release is out.',
    downloadBody2:
      'If macOS shows "cannot verify developer" or "damaged" on first launch, the future guidance is to drag `FaroPDF.app` to Applications and run `xattr -dr com.apple.quarantine /Applications/FaroPDF.app` in Terminal. See `docs/RELEASE.md` at release time for the exact steps.',
    downloadPrimary: 'Open downloads (pending)',
    downloadSecondary: 'Read README',
    downloadListAria: 'Installer selection notes',
    downloadOptions: [
      'macOS Apple Silicon: pick the aarch64 / arm64 installer',
      'macOS Intel: pick the x64 or x86_64 installer',
      'Windows: pick the .exe or .msi installer',
    ],
  },

  legalSkills: {
    heroEyebrow: 'AI Agent Skills collection',
    heroPrimaryCta: 'Learn more',
    heroSecondaryCta: 'View on GitHub',
    introKickerPrefix: 'Why',
    introTitle: 'Lawyers are professionals and creators at once.',
    introBody:
      'Both ends of the daily workflow need sharp tools: bringing materials in from WeChat articles, scanned documents, audio and video on one end; turning research into deliverable proposals, reports, and articles on the other. Legal Skills consolidates the whole chain into composable AI Agent skills that lawyers can invoke directly inside their own Agent workflows.',
    featuresKicker: 'Representative Skills',
    featuresTitle: 'Pick by scenario — from content acquisition to multi-agent orchestration.',
    features: [
      {
        title: 'wechat-article-fetch',
        text: 'Headless scraping of WeChat official-account articles, saved as Markdown.',
      },
      {
        title: 'legal-ocr',
        text: 'Unified OCR and scan recognition across PDF, images, Office documents, and URLs.',
      },
      {
        title: 'funasr-transcribe',
        text: 'Local speech-to-text with speaker diarization for meeting notes, video subtitles, podcasts.',
      },
      {
        title: 'universal-media-downloader',
        text: 'Video and podcast downloads for Douyin, Bilibili, YouTube, Xiaoyuzhou, and more.',
      },
      {
        title: 'litigation-analysis',
        text: 'Litigation analysis across complaints and evidence, judgments, and trial transcripts.',
      },
      {
        title: 'contract-copilot',
        text: 'Contract drafting and review — risk checklist, draft skeleton, and revision suggestions in a four-step flow.',
      },
      {
        title: 'legal-proposal-generator',
        text: 'Auto-generate litigation plans, advisory reports, proposal letters, and case-closing summaries.',
      },
      {
        title: 'patent-analysis',
        text: 'Seven patent-analysis scenarios: single-patent extraction, infringement comparison, FTO, stability, design-around.',
      },
      {
        title: 'pdf-processor',
        text: 'Full PDF processing: scan preprocessing, OCR double-layer PDF, page numbers, merge, decrypt, watermark, compress.',
      },
      {
        title: 'pdf-organizer',
        text: 'Legal PDF organization: split, merge, rename, with page index and handoff files for downstream steps.',
      },
      {
        title: 'md2word',
        text: 'Convert Markdown to standard Word with automatic legal-document layout applied.',
      },
      {
        title: 'svg-article-illustrator',
        text: 'AI-driven SVG illustration generation for WeChat-style articles, with dynamic SVG and PNG export.',
      },
      {
        title: 'multi-agent-orchestration',
        text: 'Local multi-agent orchestration: worktree/session isolation, Agent Teams / tmux launch, PM patrol, PR closeout.',
      },
      {
        title: 'cross-agent-coordination',
        text: 'Cross-platform agent task coordination hub: task allocation, capability routing, handoff context.',
      },
      {
        title: 'project-init',
        text: 'Project initialization: auto-generate CLAUDE.md / docs system, supports 6 project types.',
      },
      {
        title: 'skill-manager',
        text: 'Install, sync, uninstall, and list AI Agent Skills from local paths or GitHub repos.',
      },
    ],
    workflowKicker: 'Workflow',
    workflowTitle: 'From picking a skill to multi-agent collaboration.',
    workflow: [
      'Browse the 47 skills in the README and pick the ones the task needs',
      'Copy a one-line install hint to your Agent — it lands in Claude Code / OpenClaw / WorkBuddy / CodeX / OpenCode / Hermes in one shot',
      'Use cross-agent-coordination to route tasks and pass context between agents',
      'Use multi-agent-orchestration to spin up parallel worktrees for long-running jobs',
    ],
    downloadKicker: 'Install',
    downloadTitle: 'One line from GitHub is all it takes.',
    downloadBody:
      'Dual license: MIT skills are free to use including commercial; CC-BY-NC skills are free for non-commercial use with attribution. For commercial use of CC-BY-NC skills, please reach out on WeChat (ywxlaw) for a license. To install, send your Agent: "Please install the legal-skills collection from GitHub: https://github.com/cat-xierluo/legal-skills".',
    downloadPrimary: 'Open GitHub repo',
    downloadSecondary: 'Read README',
  },
};

export default messages;
