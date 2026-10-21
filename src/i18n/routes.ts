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
