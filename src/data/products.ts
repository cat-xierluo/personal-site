export const products = {
  folia: {
    slug: 'folia',
    name: 'Folia',
    tagline: '面向知识工作者的 Markdown 阅读与 Word 导出工具',
    taglineEn: 'A Markdown reader and Word export tool for demanding documents',
    summary:
      '稳定阅读复杂 Markdown（HTML 表格、混合排版），所见即所得切换源码，Word 纸张预览与导出。',
    summaryEn:
      'Stable rendering of complex Markdown (HTML tables, mixed layouts), WYSIWYG with source-mode fallback, and Word paper preview & export.',
    repo: 'https://github.com/cat-xierluo/Folia',
    path: '/folia',
    icon: 'icons/folia-icon.png',
    accent: 'sage',
  },
  faropdf: {
    slug: 'faropdf',
    name: 'FaroPDF',
    tagline: '面向律师的独立 PDF 阅读器',
    taglineEn: 'An independent PDF reader for lawyers',
    summary:
      '打开卷宗、证据、判决、合同和扫描材料时能「快读、检索、批注、整理、OCR、表单签署」一条龙。',
    summaryEn:
      'Fast read, search, annotate, organize, OCR, and form signing for case files, evidence, judgments, contracts, and scanned materials.',
    repo: 'https://github.com/cat-xierluo/FaroPDF',
    path: '/faropdf',
    icon: 'icons/faropdf-icon.png',
    accent: 'steel',
  },
  'legal-skills': {
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
  },
} as const;
