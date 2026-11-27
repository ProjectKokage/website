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
    supportLabel: string;
    cloudLabel: string;
    themeToggleLight: string;
    themeToggleDark: string;
    languageLabel: string;
  };
  hero: {
    title: string;
    lede: string;
    appStoreAction: string;
    googlePlayAction: string;
    imageAlt: string;
    chatDayAlt: string;
    chatNightAlt: string;
  };
  features: {
    title: string;
    lede: string;
    switcherLabel: string;
    photoTab: string;
    personalityTab: string;
    charactersTab: string;
    photoAlt: string;
    personalityAlt: string;
    charactersAlt: string;
    items: Array<{
      title: string;
      body: string;
    }>;
  };
  cloud: {
    title: string;
    lede: string;
    switcherLabel: string;
    motionTab: string;
    voiceTab: string;
    newlookTab: string;
    motionAlt: string;
    voiceAlt: string;
    newlookAlt: string;
    items: Array<{
      title: string;
      body: string;
    }>;
    accountLink: string;
  };
  privacy: {
    title: string;
    points: [string, string, string];
    policyLink: string;
  };
  privacyPolicy: PrivacyPolicyCopy;
  support: SupportPageCopy;
  status: {
    title: string;
    platforms: Array<{
      name: string;
      link: ExternalLink;
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
