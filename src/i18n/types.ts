export type SiteLocale = "en" | "ja";

export interface PrivacyPolicyItem {
  title: string;
  body: string;
  link?: {
    href: string;
    label: string;
  };
}

export interface PrivacyPolicySection {
  id: string;
  title: string;
  paragraphs: string[];
  items?: PrivacyPolicyItem[];
}

export interface PrivacyPolicyCopy {
  meta: {
    title: string;
    description: string;
  };
  eyebrow: string;
  title: string;
  lede: string;
  updatedLabel: string;
  updatedDate: string;
  updatedDateDisplay: string;
  highlightsLabel: string;
  highlights: string[];
  contentsLabel: string;
  sections: PrivacyPolicySection[];
  backHomeLabel: string;
}

export interface SupportPageItem {
  title: string;
  body: string;
}

export interface SupportPageSection {
  id: string;
  title: string;
  paragraphs: string[];
  items?: SupportPageItem[];
}

export interface SupportPageCopy {
  meta: {
    title: string;
    description: string;
  };
  eyebrow: string;
  title: string;
  lede: string;
  highlightsLabel: string;
  highlights: string[];
  contentsLabel: string;
  sections: SupportPageSection[];
  contactLabel: string;
  contactEmail: string;
  privacyLinkLabel: string;
  backHomeLabel: string;
}

export interface SiteCopy {
  locale: SiteLocale;
  htmlLang: string;
  ogLocale: string;
  alternateOgLocale: string;
  brandLabel: string;
  meta: {
    title: string;
    description: string;
  };
  skipLink: string;
  navigation: {
    label: string;
    homeLabel: string;
    items: Array<{
      href: string;
      label: string;
    }>;
    languageLabel: string;
  };
  hero: {
    eyebrow: string;
    titleLead: string;
    titleAccentLines: string[];
    lede: string;
    primaryAction: string;
    secondaryAction: string;
    notice: string;
    imageAlt: string;
  };
  flow: {
    eyebrow: string;
    title: string;
    lede: string;
    stages: Array<{
      label: string;
      title: string;
      detail: string;
    }>;
    footnote: string;
  };
  features: {
    eyebrow: string;
    title: string;
    lede: string;
    items: Array<{
      title: string;
      body: string;
    }>;
  };
  privacy: {
    eyebrow: string;
    title: string;
    lede: string;
    items: Array<{
      title: string;
      body: string;
    }>;
    networkLabel: string;
    networkBody: string;
    policyLink: string;
  };
  privacyPolicy: PrivacyPolicyCopy;
  support: SupportPageCopy;
  stack: {
    eyebrow: string;
    title: string;
    lede: string;
    items: Array<{
      title: string;
      body: string;
    }>;
  };
  status: {
    eyebrow: string;
    title: string;
    lede: string;
    platforms: Array<{
      name: string;
      state: string;
      detail: string;
    }>;
  };
  footer: {
    descriptor: string;
    statusLink: string;
    privacyLink: string;
    supportLink: string;
    navigationLabel: string;
  };
}
