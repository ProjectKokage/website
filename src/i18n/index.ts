import { en } from "./en";
import { ja } from "./ja";
import { zhHans } from "./zh-hans";
import { zhHant } from "./zh-hant";
import type { SiteCopy, SiteLocale } from "./types";

export const translations = {
  en,
  ja,
  "zh-hans": zhHans,
  "zh-hant": zhHant,
} satisfies Record<SiteLocale, SiteCopy>;

export type { SiteCopy, SiteLocale } from "./types";
