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
} as const;

export type Product = (typeof products)[keyof typeof products];
