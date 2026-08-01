export type SiteLocale = "en" | "ja";

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
  };
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
  };
}
