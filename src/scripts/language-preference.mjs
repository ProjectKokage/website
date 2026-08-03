export const DEFAULT_LOCALE = "en";
export const LANGUAGE_PREFERENCE_STORAGE_KEY = "kokage-language";

const supportedLocales = new Set(["en", "ja"]);

export function isSiteLocale(value) {
  return typeof value === "string" && supportedLocales.has(value);
}

export function localeFromLanguageTag(value) {
  if (typeof value !== "string") {
    return null;
  }

  const [primaryLanguage] = value.trim().toLowerCase().split(/[-_]/u);
  return isSiteLocale(primaryLanguage) ? primaryLanguage : null;
}

export function detectBrowserLocale(languageTags = []) {
  for (const languageTag of languageTags) {
    const locale = localeFromLanguageTag(languageTag);
    if (locale !== null) {
      return locale;
    }
  }

  return DEFAULT_LOCALE;
}

export function resolvePreferredLocale({
  storedLocale,
  currentLocale,
  browserLanguages = [],
  autoDetect,
}) {
  if (isSiteLocale(storedLocale)) {
    return storedLocale;
  }

  if (!autoDetect && isSiteLocale(currentLocale)) {
    return currentLocale;
  }

  return detectBrowserLocale(browserLanguages);
}

export function readLanguagePreference(storage) {
  try {
    const value = storage?.getItem(LANGUAGE_PREFERENCE_STORAGE_KEY);
    return isSiteLocale(value) ? value : null;
  } catch {
    return null;
  }
}

export function writeLanguagePreference(storage, locale) {
  if (!isSiteLocale(locale)) {
    return;
  }

  try {
    storage?.setItem(LANGUAGE_PREFERENCE_STORAGE_KEY, locale);
  } catch {
    // The language links still work when browser storage is unavailable.
  }
}

function browserLanguageTags(navigatorObject) {
  const languageTags = [];

  try {
    if (navigatorObject?.languages != null) {
      languageTags.push(...navigatorObject.languages);
    }
  } catch {
    // Continue to the singular language fallback when the list is unavailable.
  }

  try {
    if (navigatorObject?.language != null) {
      languageTags.push(navigatorObject.language);
    }
  } catch {
    // Missing navigator language data falls back to English.
  }

  return languageTags;
}

function browserStorage(windowObject) {
  try {
    return windowObject.localStorage;
  } catch {
    return null;
  }
}

export function initializeLanguagePreference({
  documentObject = globalThis.document,
  windowObject = globalThis.window,
} = {}) {
  if (documentObject === undefined || windowObject === undefined) {
    return;
  }

  const {
    siteLocale: currentLocale,
    englishUrl,
    japaneseUrl,
    languageAutoDetect,
  } = documentObject.documentElement.dataset;

  if (!isSiteLocale(currentLocale)) {
    return;
  }

  const storage = browserStorage(windowObject);

  for (const link of documentObject.querySelectorAll(
    "[data-language-option]",
  )) {
    link.addEventListener("click", () => {
      writeLanguagePreference(storage, link.dataset.languageOption);
    });
  }

  const preferredLocale = resolvePreferredLocale({
    storedLocale: readLanguagePreference(storage),
    currentLocale,
    browserLanguages: browserLanguageTags(windowObject.navigator),
    autoDetect: languageAutoDetect === "true",
  });

  if (preferredLocale === currentLocale) {
    return;
  }

  const targetPath = preferredLocale === "ja" ? japaneseUrl : englishUrl;
  if (targetPath === undefined || targetPath.length === 0) {
    return;
  }

  windowObject.location.replace(
    `${targetPath}${windowObject.location.search}${windowObject.location.hash}`,
  );
}
