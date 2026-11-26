export type SiteLocale = "en" | "ja" | "zh-hans" | "zh-hant";

export interface ExternalLink {
  href: string;
  label: string;
}

export interface PrivacyPolicyItem {
  title: string;
  body: string;
  link?: ExternalLink;
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

export type SupportPageItem = PrivacyPolicyItem;

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
  cloudLinkLabel: string;
  privacyLinkLabel: string;
  backHomeLabel: string;
}

export interface SiteCopy {
  locale: SiteLocale;
  htmlLang: string;
  ogLocale: string;
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
    appStoreAction: string;
    googlePlayAction: string;
    cloudAction: string;
    notice: string;
    imageAlt: string;
    showcase: {
      ariaLabel: string;
      characterName: string;
      statusLabel: string;
      previewAlt: string;
      userMessage: string;
      replyMessage: string;
      voiceTag: string;
      motionTag: string;
      modeTag: string;
    };
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
  cloud: {
    eyebrow: string;
    title: string;
    lede: string;
    items: Array<{
      label: string;
      title: string;
      body: string;
    }>;
    leafLabel: string;
    leafBody: string;
    accountLink: string;
    policyLink: string;
  };
  privacy: {
    eyebrow: string;
    title: string;
    lede: string;
    pillars: Array<{
      title: string;
      body: string;
    }>;
    policyLink: string;
  };
  privacyPolicy: PrivacyPolicyCopy;
  support: SupportPageCopy;
  status: {
    eyebrow: string;
    title: string;
    lede: string;
    platforms: Array<{
      name: string;
      state: string;
      detail: string;
      link?: ExternalLink;
    }>;
  };
  footer: {
    descriptor: string;
    statusLink: string;
    cloudLink: string;
    privacyLink: string;
    supportLink: string;
    xLink: string;
    discordLink: string;
    navigationLabel: string;
  };
}
