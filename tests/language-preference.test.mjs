import assert from "node:assert/strict";
import test from "node:test";
import {
  DEFAULT_LOCALE,
  detectBrowserLocale,
  initializeLanguagePreference,
  LANGUAGE_PREFERENCE_STORAGE_KEY,
  localeFromLanguageTag,
  resolvePreferredLocale,
} from "../src/scripts/language-preference.mjs";

function createStorage(initialEntries = []) {
  const values = new Map(initialEntries);

  return {
    getItem(key) {
      return values.get(key) ?? null;
    },
    setItem(key, value) {
      values.set(key, value);
    },
    value(key) {
      return values.get(key);
    },
  };
}

function createLanguageLink(locale) {
  let clickListener;

  return {
    dataset: { languageOption: locale },
    addEventListener(type, listener) {
      if (type === "click") {
        clickListener = listener;
      }
    },
    click() {
      clickListener?.();
    },
  };
}

function createBrowserRuntime({
  currentLocale = "en",
  autoDetect = true,
  languages = ["en"],
  language = languages[0],
  storage = createStorage(),
  search = "",
  hash = "",
  englishUrl = "/",
  japaneseUrl = "/ja/",
} = {}) {
  const replacements = [];
  const links = [createLanguageLink("en"), createLanguageLink("ja")];

  return {
    documentObject: {
      documentElement: {
        dataset: {
          siteLocale: currentLocale,
          englishUrl,
          japaneseUrl,
          languageAutoDetect: String(autoDetect),
        },
      },
      querySelectorAll() {
        return links;
      },
    },
    windowObject: {
      localStorage: storage,
      navigator: { language, languages },
      location: {
        search,
        hash,
        replace(target) {
          replacements.push(target);
        },
      },
    },
    links,
    replacements,
    storage,
  };
}

test("browser language tags map to supported site locales", () => {
  assert.equal(localeFromLanguageTag("ja"), "ja");
  assert.equal(localeFromLanguageTag("JA-jp"), "ja");
  assert.equal(localeFromLanguageTag("en_GB"), "en");
  assert.equal(localeFromLanguageTag("fr-FR"), null);
  assert.equal(localeFromLanguageTag(undefined), null);

  assert.equal(detectBrowserLocale(["fr-FR", "ja-JP"]), "ja");
  assert.equal(detectBrowserLocale(["fr-FR", "de-DE"]), DEFAULT_LOCALE);
  assert.equal(detectBrowserLocale([]), DEFAULT_LOCALE);
});

test("manual preferences take priority while explicit localized links are respected", () => {
  assert.equal(
    resolvePreferredLocale({
      storedLocale: "ja",
      currentLocale: "en",
      browserLanguages: ["en-US"],
      autoDetect: true,
    }),
    "ja",
  );
  assert.equal(
    resolvePreferredLocale({
      storedLocale: "invalid",
      currentLocale: "en",
      browserLanguages: ["ja-JP"],
      autoDetect: true,
    }),
    "ja",
  );
  assert.equal(
    resolvePreferredLocale({
      storedLocale: "en",
      currentLocale: "ja",
      browserLanguages: ["ja-JP"],
      autoDetect: false,
    }),
    "en",
  );
  assert.equal(
    resolvePreferredLocale({
      storedLocale: null,
      currentLocale: "ja",
      browserLanguages: ["en-US"],
      autoDetect: false,
    }),
    "ja",
  );
});

test("a first visit selects Japanese without storing an automatic choice", () => {
  const runtime = createBrowserRuntime({
    languages: ["ja-JP", "en-US"],
    search: "?source=test",
    hash: "#privacy",
  });

  initializeLanguagePreference(runtime);

  assert.deepEqual(runtime.replacements, ["/ja/?source=test#privacy"]);
  assert.equal(
    runtime.storage.value(LANGUAGE_PREFERENCE_STORAGE_KEY),
    undefined,
  );
});

test("navigator.language is used when navigator.languages is unavailable", () => {
  const runtime = createBrowserRuntime({
    language: "ja-JP",
  });
  delete runtime.windowObject.navigator.languages;

  initializeLanguagePreference(runtime);

  assert.deepEqual(runtime.replacements, ["/ja/"]);
});

test("manual language choices are stored and win on the next visit", () => {
  const initialVisit = createBrowserRuntime({ languages: ["en-US"] });
  initializeLanguagePreference(initialVisit);
  initialVisit.links[1].click();

  assert.equal(
    initialVisit.storage.value(LANGUAGE_PREFERENCE_STORAGE_KEY),
    "ja",
  );

  const nextVisit = createBrowserRuntime({
    languages: ["en-US"],
    storage: initialVisit.storage,
  });
  initializeLanguagePreference(nextVisit);

  assert.deepEqual(nextVisit.replacements, ["/ja/"]);
});

test("a stored English choice overrides a later Japanese route", () => {
  const storage = createStorage([[LANGUAGE_PREFERENCE_STORAGE_KEY, "en"]]);
  const runtime = createBrowserRuntime({
    currentLocale: "ja",
    autoDetect: false,
    languages: ["ja-JP"],
    storage,
  });

  initializeLanguagePreference(runtime);

  assert.deepEqual(runtime.replacements, ["/"]);
});

test("localized subpages keep their route while changing language", () => {
  const japaneseVisit = createBrowserRuntime({
    languages: ["ja-JP"],
    englishUrl: "/privacy/",
    japaneseUrl: "/ja/privacy/",
    search: "?source=app-store",
    hash: "#retention",
  });

  initializeLanguagePreference(japaneseVisit);

  assert.deepEqual(japaneseVisit.replacements, [
    "/ja/privacy/?source=app-store#retention",
  ]);

  const storedEnglish = createBrowserRuntime({
    currentLocale: "ja",
    autoDetect: false,
    languages: ["ja-JP"],
    storage: createStorage([[LANGUAGE_PREFERENCE_STORAGE_KEY, "en"]]),
    englishUrl: "/privacy/",
    japaneseUrl: "/ja/privacy/",
  });

  initializeLanguagePreference(storedEnglish);

  assert.deepEqual(storedEnglish.replacements, ["/privacy/"]);
});

test("unavailable browser storage never blocks detection or language links", () => {
  const runtime = createBrowserRuntime({ languages: ["ja-JP"] });
  runtime.windowObject.localStorage = {
    getItem() {
      throw new Error("storage disabled");
    },
    setItem() {
      throw new Error("storage disabled");
    },
  };

  assert.doesNotThrow(() => initializeLanguagePreference(runtime));
  assert.doesNotThrow(() => runtime.links[1].click());
  assert.deepEqual(runtime.replacements, ["/ja/"]);
});
