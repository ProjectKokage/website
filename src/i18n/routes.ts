import type { SiteLocale } from "./types";

export const localizedRoutes = {
  en: {
    home: "/",
    privacy: "/privacy/",
  },
  ja: {
    home: "/ja/",
    privacy: "/ja/privacy/",
  },
} satisfies Record<SiteLocale, { home: string; privacy: string }>;
