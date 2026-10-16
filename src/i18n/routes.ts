import type { SiteLocale } from "./types";

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
} satisfies Record<
  SiteLocale,
  { home: string; privacy: string; support: string }
>;

export const storeListings = {
  appStore: "https://apps.apple.com/app/id6792312333",
  googlePlay:
    "https://play.google.com/store/apps/details?id=com.orcalogy.kokage",
};
