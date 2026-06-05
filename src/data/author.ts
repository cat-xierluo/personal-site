export const author = {
  name: '杨卫薪律师',
  nameEn: 'Yang Weixin, Esq.',
  title: '律师',
  titleEn: 'Lawyer',
  focus: '技术类纠纷 · 数据与 AI 相关争议',
  focusEn: 'Technology-related disputes · Data and AI-related issues',
  bio:
    '专注于技术类纠纷领域，包括知识产权、数据与 AI 相关争议，同时长期关注 AI 技术在法律实务、知识管理和专业写作中的应用。',
  bioEn:
    'Focus on technology-related disputes, intellectual property, data and AI-related issues. Long-term interest in the application of AI to legal practice, knowledge management, and professional writing.',
  contacts: {
    github: 'https://github.com/cat-xierluo',
    wechat: 'ywxlaw',
    githubHandle: 'cat-xierluo',
  },
  products: ['folia', 'faropdf'] as const,
} as const;

export type Author = typeof author;
export type ProductSlug = (typeof author.products)[number];
