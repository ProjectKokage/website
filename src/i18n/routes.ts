import type { SiteLocale } from "./types";

export const siteLocales = [
  "en",
  "ja",
  "zh-hans",
  "zh-hant",
] as const satisfies readonly SiteLocale[];

// Each language is named in its own script so readers recognise it.
export const localeNames = {
  en: "English",
  ja: "日本語",
  "zh-hans": "简体中文",
  "zh-hant": "繁體中文",
} satisfies Record<SiteLocale, string>;

export const localizedRoutes = {
  en: {
    home: "/",
    privacy: "/privacy/",
    support: "/support/",
  },
  ja: {
    home: "/ja/",
    privacy: "/ja/privacy/",
    support: "/ja/support/",
  },
  "zh-hans": {
    home: "/zh-hans/",
    privacy: "/zh-hans/privacy/",
    support: "/zh-hans/support/",
  },
  "zh-hant": {
    home: "/zh-hant/",
    privacy: "/zh-hant/privacy/",
    support: "/zh-hant/support/",
  },
} satisfies Record<
  SiteLocale,
  { home: string; privacy: string; support: string }
>;

export const storeListings = {
  appStore: "https://apps.apple.com/app/id6792312333",
  googlePlay:
    "https://play.google.com/store/apps/details?id=com.orcalogy.kokage",
};

// Kokage Cloud account site (serves en, ja, zh, and zh-hant).
export const kokageCloudUrls = {
  en: "https://kokage.cloud/",
  ja: "https://kokage.cloud/ja/",
  "zh-hans": "https://kokage.cloud/zh/",
  "zh-hant": "https://kokage.cloud/zh-hant/",
} satisfies Record<SiteLocale, string>;

// Kokage's own accounts, linked from every page's footer.
export const communityLinks = {
  x: { handle: "@KokageApp", href: "https://x.com/KokageApp" },
  discord: { href: "https://discord.gg/srvMM3DyGT" },
};

// The company that publishes Kokage and runs Kokage Cloud, as its own site names it.
export const publisher = {
  id: "https://orcalogy.com/#organization",
  name: "Orcalogy LLC",
  legalName: "鯱哲工合同会社",
  url: "https://orcalogy.com/",
};
