export type Locale = 'zh-CN' | 'en';

export const LOCALES: readonly Locale[] = ['zh-CN', 'en'] as const;
export const DEFAULT_LOCALE: Locale = 'zh-CN';

export interface NavMessages {
  home: string;
  folia: string;
  faropdf: string;
  legalSkills: string;
  github: string;
  switchLanguage: string;
  switchLanguageTitle: string;
  switchLanguageAria: string;
}

export interface FooterMessages {
  home: string;
  folia: string;
  faropdf: string;
  github: string;
  wechatLabel: string;
  wechatHandlePrefix: string;
  wechatQrAlt: string;
  copyright: string;
}

export interface ProductCardMessages {
  eyebrow: string;
  detailCta: string;
  sourceCta: string;
  iconAlt: string;
}

export interface IndexMessages {
  heroEyebrow: string;
  heroPrimaryCta: string;
  heroSecondaryCtaPrefix: string;
  aboutKicker: string;
  aboutTitle: string;
  aboutParagraph1: string;
  aboutParagraph2: string;
  aboutContactLine: string;
  productsKicker: string;
  productsTitle: string;
  contactKicker: string;
  contactTitle: string;
  contactWechatLabel: string;
  contactWechatCaption: string;
  contactWechatQrAlt: string;
  contactGithubLabel: string;
  contactDomainLabel: string;
  contactDomainValue: string;
}

export interface FoliaPreviewMessages {
  filename: string;
  heading1: string;
  heading2a: string;
  bullet1: string;
  bullet2: string;
  heading2b: string;
  paragraph: string;
  tableCol1: string;
  tableCol2: string;
  tableCol3: string;
  cellInput: string;
  cellInterview: string;
  cellOrganized: string;
  cellReference: string;
  cellPending: string;
  cellOutput: string;
  cellOutputValue: string;
  blockquote: string;
}

export interface ProductFeature {
  title: string;
  text: string;
}

export interface FoliaMessages {
  heroEyebrow: string;
  heroBack: string;
  heroDownload: string;
  heroViewSource: string;
  preview: FoliaPreviewMessages;
  introKickerPrefix: string;
  introTitle: string;
  introBody: string;
  featuresKicker: string;
  featuresTitle: string;
  features: ProductFeature[];
  workflowKicker: string;
  workflowTitle: string;
  workflow: string[];
  downloadKicker: string;
  downloadTitle: string;
  downloadBody: string;
  downloadPrimary: string;
  downloadSecondary: string;
  downloadListAria: string;
  downloadOptions: string[];
}

export interface FaroPdfMessages {
  heroEyebrow: string;
  heroBack: string;
  heroDownload: string;
  heroViewSource: string;
  heroIconAlt: string;
  introKickerPrefix: string;
  introTitle: string;
  introBody: string;
  featuresKicker: string;
  featuresTitle: string;
  features: ProductFeature[];
  workflowKicker: string;
  workflowTitle: string;
  workflow: string[];
  downloadKicker: string;
  downloadTitle: string;
  downloadBody1: string;
  downloadBody2: string;
  downloadPrimary: string;
  downloadSecondary: string;
  downloadListAria: string;
  downloadOptions: string[];
}

export interface MetaMessages {
  descriptionSuffix: string;
  productsList: string;
  foliaDescription: string;
  faropdfDescription: string;
  legalSkillsDescription: string;
  backToHome: string;
}

export interface LegalSkillsMessages {
  heroEyebrow: string;
  heroKicker: string;
  heroPrimaryCta: string;
  heroSecondaryCta: string;
  introKickerPrefix: string;
  introTitle: string;
  introBody: string;
  featuresKicker: string;
  featuresTitle: string;
  features: ProductFeature[];
  workflowKicker: string;
  workflowTitle: string;
  workflow: string[];
  downloadKicker: string;
  downloadTitle: string;
  downloadBody: string;
  downloadPrimary: string;
  downloadSecondary: string;
}

export interface Messages {
  nav: NavMessages;
  footer: FooterMessages;
  productCard: ProductCardMessages;
  meta: MetaMessages;
  index: IndexMessages;
  folia: FoliaMessages;
  faropdf: FaroPdfMessages;
  legalSkills: LegalSkillsMessages;
}
