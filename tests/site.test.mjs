import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { fileURLToPath } from "node:url";
import {
  DEVELOPMENT_SITE_ORIGIN,
  resolveSiteOrigin,
  TEST_SITE_ORIGIN,
} from "../scripts/site-origin.mjs";

const root = fileURLToPath(new URL("../", import.meta.url));
const siteOrigin = new URL(process.env.KOKAGE_SITE_URL ?? TEST_SITE_ORIGIN)
  .origin;
const retiredProductTerms = [
  new RegExp(["char", "acter"].join(""), "i"),
  new RegExp(
    String.fromCodePoint(0x30ad, 0x30e3, 0x30e9, 0x30af, 0x30bf, 0x30fc),
  ),
  new RegExp(String.fromCodePoint(0x76f8, 0x68d2)),
  new RegExp(
    `(?<!AI)${String.fromCodePoint(
      0x30b3,
      0x30f3,
      0x30d1,
      0x30cb,
      0x30aa,
      0x30f3,
    )}`,
    "u",
  ),
];

async function read(relativePath) {
  return readFile(new URL(relativePath, `file://${root}/`), "utf8");
}

async function digest(relativePath) {
  const bytes = await readFile(new URL(relativePath, `file://${root}/`));
  return createHash("sha256").update(bytes).digest("hex");
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function assertPage(
  html,
  {
    locale,
    autoDetect,
    lang,
    canonical,
    alternate,
    xDefault,
    title,
    description,
    ogLocale,
    alternateOgLocale,
  },
) {
  assert.match(html, new RegExp(`<html lang="${lang}"`));
  assert.match(html, new RegExp(`data-site-locale="${locale}"`));
  assert.match(
    html,
    new RegExp(`data-language-auto-detect="${String(autoDetect)}"`),
  );
  assert.match(html, /data-english-url="\/"/);
  assert.match(html, /data-japanese-url="\/ja\/"/);
  assert.match(html, /<main id="main">/);
  assert.equal((html.match(/<h1[ >]/g) ?? []).length, 1);
  assert.match(html, new RegExp(`<link rel="canonical" href="${canonical}"`));
  assert.match(
    html,
    new RegExp(`hreflang="${alternate.lang}" href="${alternate.href}"`),
  );
  assert.match(html, new RegExp(`hreflang="x-default" href="${xDefault}"`));
  assert.match(html, new RegExp(`<title>${escapeRegExp(title)}</title>`));
  assert.match(
    html,
    new RegExp(
      `<meta name="description" content="${escapeRegExp(description)}">`,
    ),
  );
  assert.match(html, new RegExp(`property="og:locale" content="${ogLocale}"`));
  assert.match(
    html,
    new RegExp(`property="og:locale:alternate" content="${alternateOgLocale}"`),
  );
  assert.match(html, new RegExp(`"inLanguage":"${lang}"`));
  assert.match(html, /"@type":"WebSite"/);
  assert.doesNotMatch(html, /href="#"/);
  assert.doesNotMatch(html, /Lorem ipsum|example\.com|TODO|placeholder/i);
  for (const term of retiredProductTerms) {
    assert.doesNotMatch(html, term);
  }

  const primaryNavigation = html.match(
    /<nav class="site-nav"[\s\S]*?<\/nav>/,
  )?.[0];
  assert.ok(primaryNavigation);
  assert.equal((primaryNavigation.match(/<a /g) ?? []).length, 3);
  assert.doesNotMatch(primaryNavigation, /href="#status"/);

  const languageSwitch = html.match(
    /<nav class="language-switch"[\s\S]*?<\/nav>/,
  )?.[0];
  assert.ok(languageSwitch);
  assert.match(languageSwitch, /href="\/"[^>]*data-language-option="en"/);
  assert.match(languageSwitch, /href="\/ja\/"[^>]*data-language-option="ja"/);

  assert.match(html, /<ol class="turn-flow" role="list">/);
  assert.match(html, /<ul class="feature-list" role="list">/);
  assert.match(
    html,
    /<div class="brand-stage__icon"><img src="\/brand\/kokage-app-icon\.png"/,
  );
  assert.doesNotMatch(html, /\/_image\//);
  assert.ok(html.indexOf('id="features"') < html.indexOf('id="how"'));

  for (const id of ["how", "features", "privacy", "status"]) {
    assert.match(html, new RegExp(`href="#${id}"`));
    assert.match(html, new RegExp(`id="${id}"`));
  }
}

test("English and Japanese pages emit localized metadata and complete navigation", async () => {
  const [english, japanese] = await Promise.all([
    read("dist/index.html"),
    read("dist/ja/index.html"),
  ]);

  assertPage(english, {
    locale: "en",
    autoDetect: true,
    lang: "en",
    canonical: `${siteOrigin}/`,
    alternate: { lang: "ja", href: `${siteOrigin}/ja/` },
    xDefault: `${siteOrigin}/`,
    title: "Kokage | Local-first companion chat",
    description:
      "Kokage is an AI companion app in beta that pairs an on-device language model with a 3D companion — bundled by default, replaceable with a VRM you choose.",
    ogLocale: "en_US",
    alternateOgLocale: "ja_JP",
  });
  assertPage(japanese, {
    locale: "ja",
    autoDetect: false,
    lang: "ja",
    canonical: `${siteOrigin}/ja/`,
    alternate: { lang: "en", href: `${siteOrigin}/` },
    xDefault: `${siteOrigin}/`,
    title: "こかげ | 端末で動くAIコンパニオンとのチャット",
    description:
      "こかげは、端末内の言語モデルと同梱の3DのAIコンパニオンを組み合わせた、ベータテスト中のアプリです。自分で選んだVRMへの置き換えにも対応します。",
    ogLocale: "ja_JP",
    alternateOgLocale: "en_US",
  });

  assert.match(english, /Talk with your companion/);
  assert.match(english, /Kokage is in prerelease beta testing/);
  assert.equal(
    (english.match(/<span class="brand__name">Kokage<\/span>/g) ?? []).length,
    2,
  );
  assert.match(
    japanese.replaceAll(/<[^>]+>/g, ""),
    /あなたの端末の中でAIコンパニオンと話す/,
  );
  assert.match(japanese, /こかげは現在ベータテスト中のプレリリース版/);
  assert.equal(
    (japanese.match(/<span class="brand__name">こかげ<\/span>/g) ?? []).length,
    2,
  );
  assert.doesNotMatch(japanese, /\bKokage\b/);
  assert.match(english, /TestFlight/);
  assert.match(japanese, /TestFlight/);
  assert.doesNotMatch(
    `${english}\n${japanese}`,
    /No public distribution|一般配布|配布承認|Google Play|欧州連合/,
  );
  assert.doesNotMatch(
    `${english}\n${japanese}`,
    /current dependency graph|ONNX Runtime|API 36|署名済み配布/,
  );
  assert.doesNotMatch(
    japanese,
    /ConversationCoordinator|単調増加|プロジェクター|再生済みサンプル|開発者ゲート|マイクのPCM/,
  );
  assert.match(japanese, /Silero VAD/);
  assert.match(japanese, /SenseVoice/);
  assert.match(japanese, /sherpa_onnx/);

  for (const html of [english, japanese]) {
    assert.match(
      html,
      /<aside class="network-note" aria-labelledby="network-note-title">/,
    );
    assert.match(
      html,
      /class="privacy-policy-link" href="\/(?:ja\/)?privacy\/"/,
    );
    assert.match(html, /<nav class="footer-nav"/);
  }
});

test("privacy policy pages are localized, indexable, and linked across languages", async () => {
  const [english, japanese] = await Promise.all([
    read("dist/privacy/index.html"),
    read("dist/ja/privacy/index.html"),
  ]);

  const cases = [
    {
      html: english,
      locale: "en",
      lang: "en",
      englishPath: "/privacy/",
      japanesePath: "/ja/privacy/",
      canonical: `${siteOrigin}/privacy/`,
      title: "Privacy Policy | Kokage",
      description:
        "How Kokage handles conversations, microphone and camera input, local data, model downloads, and website data.",
      heading: "Kokage processes conversations on your device.",
      siteName: "Kokage",
      date: "August 10, 2026",
      homePath: "/",
    },
    {
      html: japanese,
      locale: "ja",
      lang: "ja",
      englishPath: "/privacy/",
      japanesePath: "/ja/privacy/",
      canonical: `${siteOrigin}/ja/privacy/`,
      title: "プライバシーポリシー | こかげ",
      description:
        "こかげにおける会話、マイクとカメラの入力、端末内の保存データ、モデルのダウンロード、ウェブサイトのデータの扱いを説明します。",
      heading: "こかげは、会話を端末内で処理します。",
      siteName: "こかげ",
      date: "2026年8月10日",
      homePath: "/ja/",
    },
  ];

  for (const policy of cases) {
    const { html } = policy;
    assert.match(html, new RegExp(`<html lang="${policy.lang}"`));
    assert.match(html, new RegExp(`data-site-locale="${policy.locale}"`));
    assert.match(
      html,
      new RegExp(`data-english-url="${escapeRegExp(policy.englishPath)}"`),
    );
    assert.match(
      html,
      new RegExp(`data-japanese-url="${escapeRegExp(policy.japanesePath)}"`),
    );
    assert.match(
      html,
      new RegExp(`<link rel="canonical" href="${policy.canonical}"`),
    );
    assert.match(
      html,
      new RegExp(`hreflang="en" href="${siteOrigin}/privacy/"`),
    );
    assert.match(
      html,
      new RegExp(`hreflang="ja" href="${siteOrigin}/ja/privacy/"`),
    );
    assert.match(
      html,
      new RegExp(`hreflang="x-default" href="${siteOrigin}/privacy/"`),
    );
    assert.match(
      html,
      new RegExp(`<title>${escapeRegExp(policy.title)}</title>`),
    );
    assert.match(
      html,
      new RegExp(
        `<meta name="description" content="${escapeRegExp(policy.description)}">`,
      ),
    );
    assert.match(html, /<main id="main" class="policy-page">/);
    assert.equal((html.match(/<h1[ >]/g) ?? []).length, 1);
    assert.match(
      html,
      new RegExp(`<h1[^>]*>${escapeRegExp(policy.heading)}</h1>`),
    );
    assert.match(
      html,
      new RegExp(
        `<time datetime="2026-08-10">${escapeRegExp(policy.date)}</time>`,
      ),
    );
    assert.match(html, /"@type":"WebPage"/);
    assert.match(
      html,
      new RegExp(
        `"isPartOf":\\{"@type":"WebSite","name":"${policy.siteName}"`,
      ),
    );
    assert.match(html, new RegExp(`class="brand" href="${policy.homePath}"`));
    assert.match(
      html,
      /aria-current="page">[^<]*Privacy policy|aria-current="page">[^<]*プライバシーポリシー/,
    );

    for (const id of [
      "scope",
      "collection",
      "local-data",
      "network",
      "retention",
      "permissions",
      "website",
      "changes",
    ]) {
      assert.match(html, new RegExp(`href="#${id}"`));
      assert.match(html, new RegExp(`id="${id}"`));
    }

    assert.match(html, /https:\/\/huggingface\.co\/privacy/);
    assert.match(html, /https:\/\/docs\.github\.com\//);
    assert.match(
      html,
      /https:\/\/developers\.google\.com\/fonts\/faq\/privacy/,
    );
    assert.doesNotMatch(html, /Lorem ipsum|TODO|placeholder|\[insert/i);
    assert.doesNotMatch(html, /href="#"/);
    for (const term of retiredProductTerms) {
      assert.doesNotMatch(html, term);
    }
  }

  assert.doesNotMatch(japanese, /\bKokage\b/);
  assert.match(english, /same or greater standard as this policy/);
  assert.match(japanese, /本ポリシーと同等以上の保護/);
});

test("site origins distinguish development, test, and production builds", () => {
  assert.equal(
    resolveSiteOrigin({ command: "development" }),
    DEVELOPMENT_SITE_ORIGIN,
  );
  assert.equal(
    resolveSiteOrigin({
      command: "build",
      value: TEST_SITE_ORIGIN,
      allowTestOrigin: true,
    }),
    TEST_SITE_ORIGIN,
  );
  assert.equal(
    resolveSiteOrigin({ command: "build", value: "https://astro.build" }),
    "https://astro.build",
  );

  for (const value of [
    undefined,
    "http://localhost:4321",
    "https://localhost",
    TEST_SITE_ORIGIN,
    "https://www.example.com",
    "https://kokage.local",
    "https://internal",
    "https://user:password@astro.build",
    "https://astro.build/path",
    "https://astro.build?preview=true",
    "https://astro.build#preview",
  ]) {
    assert.throws(() => resolveSiteOrigin({ command: "build", value }));
  }
});

test("sitemap and robots output point to the configured production origin", async () => {
  const [sitemap, robots] = await Promise.all([
    read("dist/sitemap-0.xml"),
    read("dist/robots.txt"),
  ]);

  assert.match(sitemap, new RegExp(`${siteOrigin}/ja/`));
  assert.match(sitemap, new RegExp(`${siteOrigin}/privacy/`));
  assert.match(sitemap, new RegExp(`${siteOrigin}/ja/privacy/`));
  assert.match(sitemap, /hreflang="en"/);
  assert.match(sitemap, /hreflang="ja"/);
  assert.match(robots, new RegExp(`${siteOrigin}/sitemap-index\.xml`));

  const urlBlocks = sitemap.match(/<url>[\s\S]*?<\/url>/g) ?? [];
  for (const location of [
    `${siteOrigin}/privacy/`,
    `${siteOrigin}/ja/privacy/`,
  ]) {
    const block = urlBlocks.find((entry) =>
      entry.includes(`<loc>${location}</loc>`),
    );
    assert.ok(block, location);
    assert.match(
      block,
      new RegExp(
        `hreflang="en" href="${escapeRegExp(`${siteOrigin}/privacy/`)}"`,
      ),
    );
    assert.match(
      block,
      new RegExp(
        `hreflang="ja" href="${escapeRegExp(`${siteOrigin}/ja/privacy/`)}"`,
      ),
    );
  }
});

test("published branding stays byte-identical to Kokage source assets", async () => {
  const expected = new Map([
    [
      "public/brand/kokage-app-icon.svg",
      "27c812d40608e79746f142924cdf98fc5a7d9c8c311d93e2f605293c64b0c1dc",
    ],
    [
      "public/brand/kokage-app-icon.png",
      "3aa093afc19c43be5154b55c13cd3ab4394942629f07d34bce3eb72db9103189",
    ],
    [
      "public/brand/kokage-leaves.svg",
      "e2fd58ce0a1992b73ad1eec538575b3a63306c7e685938b61bc95cd2e76473bc",
    ],
    [
      "public/brand/kokage-large-leaf.svg",
      "a2d0d496959771c6701060c560838f76b854f2f52e4875d0ff55ced1ff940240",
    ],
    [
      "public/brand/kokage-large-leaf-with-petiole.svg",
      "766f7d1f5644d849123818990026444fce3db45bb02bdf5657096dbe1f5d68e5",
    ],
  ]);

  for (const [path, expectedDigest] of expected) {
    assert.equal(await digest(path), expectedDigest, path);
  }
});
