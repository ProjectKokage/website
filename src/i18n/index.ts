import { en } from "./en";
import { ja } from "./ja";
import type { SiteCopy, SiteLocale } from "./types";

export const translations = { en, ja } satisfies Record<SiteLocale, SiteCopy>;

export type { SiteCopy, SiteLocale } from "./types";
