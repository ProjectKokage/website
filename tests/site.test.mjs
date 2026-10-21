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
const retiredProductTerms = [/相棒/, /コンパニオン/, /companion/i];
const storeLinks = [
  /href="https:\/\/apps\.apple\.com\/app\/id6792312333" rel="external"/,
  /href="https:\/\/play\.google\.com\/store\/apps\/details\?id=com\.orcalogy\.kokage" rel="external"/,
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

const localeCodes = [
  { locale: "en", hreflang: "en", ogLocale: "en_US", prefix: "" },
  { locale: "ja", hreflang: "ja", ogLocale: "ja_JP", prefix: "/ja" },
  { locale: "zh-hans", hreflang: "zh-Hans", ogLocale: "zh_CN", prefix: "/zh-hans" },
  { locale: "zh-hant", hreflang: "zh-Hant", ogLocale: "zh_TW", prefix: "/zh-hant" },
];

function localizedPath(prefix, page = "") {
  return `${prefix}/${page ? `${page}/` : ""}`;
}

function assertLanguageLinks(html, { locale, page = "" }) {
  const urls = Object.fromEntries(
    localeCodes.map(({ locale: code, prefix }) => [
      code,
      localizedPath(prefix, page),
    ]),
  );
  assert.ok(
    html.includes(
      `data-language-urls="${JSON.stringify(urls).replaceAll('"', "&quot;")}"`,
    ),
  );

  for (const { hreflang, prefix } of localeCodes) {
    assert.match(
      html,
      new RegExp(
        `hreflang="${hreflang}" href="${escapeRegExp(`${siteOrigin}${localizedPath(prefix, page)}`)}"`,
      ),
    );
  }
  assert.match(
    html,
    new RegExp(
      `hreflang="x-default" href="${escapeRegExp(`${siteOrigin}${localizedPath("", page)}`)}"`,
    ),
  );

  const current = localeCodes.find((entry) => entry.locale === locale);
  assert.match(
    html,
    new RegExp(`property="og:locale" content="${current.ogLocale}"`),
  );
  for (const { locale: code, ogLocale } of localeCodes) {
    const alternate = new RegExp(
      `property="og:locale:alternate" content="${ogLocale}"`,
    );
    if (code === locale) {
      assert.doesNotMatch(html, alternate);
    } else {
      assert.match(html, alternate);
    }
  }

  const languageSwitch = html.match(
    /<nav class="language-switch"[\s\S]*?<\/nav>/,
  )?.[0];
  assert.ok(languageSwitch);
  assert.match(languageSwitch, /<details class="language-menu">/);
  assert.match(languageSwitch, /<summary class="language-menu__toggle">/);
  for (const { locale: code, hreflang, prefix } of localeCodes) {
    assert.match(
      languageSwitch,
      new RegExp(
        `href="${escapeRegExp(localizedPath(prefix, page))}" hreflang="${hreflang}" lang="${hreflang}" data-language-option="${code}"`,
      ),
    );
  }
  assert.equal((languageSwitch.match(/aria-current="page"/g) ?? []).length, 1);
  assert.match(
    languageSwitch,
    new RegExp(`data-language-option="${locale}" aria-current="page"`),
  );
}

function assertPage(
  html,
  {
    locale,
    autoDetect,
    lang,
    canonical,
    title,
    description,
  },
) {
  assert.match(html, new RegExp(`<html lang="${lang}"`));
  assert.match(html, new RegExp(`data-site-locale="${locale}"`));
  assert.match(
    html,
    new RegExp(`data-language-auto-detect="${String(autoDetect)}"`),
  );
  assertLanguageLinks(html, { locale });
  assert.match(html, /<main id="main">/);
  assert.equal((html.match(/<h1[ >]/g) ?? []).length, 1);
  assert.match(html, new RegExp(`<link rel="canonical" href="${canonical}"`));
  assert.match(html, new RegExp(`<title>${escapeRegExp(title)}</title>`));
  assert.match(
    html,
    new RegExp(
      `<meta name="description" content="${escapeRegExp(description)}">`,
    ),
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
  assert.equal((primaryNavigation.match(/<a /g) ?? []).length, 4);
  assert.doesNotMatch(primaryNavigation, /href="#status"/);

  assert.match(html, /<ol class="turn-flow" role="list">/);
  assert.match(html, /<ul class="feature-list" role="list">/);
  assert.match(
    html,
    /<div class="brand-stage__icon"><img src="\/brand\/kokage-app-icon\.png"/,
  );
  assert.doesNotMatch(html, /\/_image\//);
  assert.ok(html.indexOf('id="features"') < html.indexOf('id="cloud"'));
  assert.ok(html.indexOf('id="cloud"') < html.indexOf('id="how"'));
  assert.match(html, /<ul class="cloud-grid" role="list">/);
  assert.match(html, /<aside class="leaf-note" aria-labelledby="leaf-note-title">/);
  for (const link of storeLinks) {
    assert.equal((html.match(new RegExp(link, "g")) ?? []).length, 2);
  }

  for (const id of ["how", "features", "cloud", "privacy", "status"]) {
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
    title: "Kokage | Talk with a 3D AI character",
    description:
      "Kokage is an app for talking with a 3D AI character on iPhone, iPad, and Android. Chat for free on your device, or use Kokage Cloud on iPhone and iPad for instant chat, custom voices, 3D avatars, and Cloud Motion.",
  });
  assertPage(japanese, {
    locale: "ja",
    autoDetect: false,
    lang: "ja",
    canonical: `${siteOrigin}/ja/`,
    title: "こかげ | 3DのAIキャラクターと話せるアプリ",
    description:
      "こかげは、iPhone、iPad、Androidで3DのAIキャラクターと会話できるアプリです。端末の中で無料で話せるほか、iPhoneとiPadではこかげクラウドを使って、キャラクターの声や3Dアバター、自然な動きを作れます。",
  });

  assert.match(english, /Talk with a 3D AI character/);
  assert.match(english, /Download on the App Store/);
  assert.match(english, /Get it on Google Play/);
  assert.equal(
    (english.match(/<span class="brand__name">Kokage<\/span>/g) ?? []).length,
    2,
  );
  assert.match(
    japanese.replaceAll(/<[^>]+>/g, ""),
    /3DのAIキャラクターと話す。端末でも、クラウドでも。/,
  );
  assert.match(japanese, /App Storeからダウンロード/);
  assert.match(japanese, /Google Playで手に入れよう/);
  assert.equal(
    (japanese.match(/<span class="brand__name">こかげ<\/span>/g) ?? []).length,
    2,
  );
  assert.doesNotMatch(japanese, /\bKokage\b/);
  assert.doesNotMatch(english, /internal prerelease|not currently distributed/);
  assert.doesNotMatch(japanese, /内部開発中|プレリリース|配布していません/);
  assert.doesNotMatch(english, /reach testers|distributed to testers/);
  assert.doesNotMatch(japanese, /テスト配信を始め|テスターに配信しています/);
  assert.match(english, /Japanese, English, or Chinese/);
  assert.match(english, /public Hugging Face model/);
  assert.match(english, /import character cards/);
  assert.match(japanese, /日本語、英語、中国語（簡体字・繁体字）/);
  assert.match(japanese, /公開されているHugging Faceのモデル/);
  assert.match(japanese, /キャラクターカードをファイルやリンクから読み込んだり/);
  assert.doesNotMatch(
    `${english}\n${japanese}`,
    /current dependency graph|ONNX Runtime|API 36|署名済み配布|sherpa_onnx|Silero|SenseVoice|fllamer|flvtterm|misakid|fonix|Irodori-TTS|VoxCPM2|NVIDIA ARDY|TRELLIS|FLUX/,
  );
  assert.doesNotMatch(
    japanese,
    /ConversationCoordinator|単調増加|プロジェクター|再生済みサンプル|開発者ゲート|マイクのPCM/,
  );
  assert.doesNotMatch(`${english}\n${japanese}`, /Apple Speech|AVFAudio/);
  assert.doesNotMatch(english, /Voice input is unavailable in this release/);
  assert.doesNotMatch(japanese, /音声入力はこのリリースでは利用できません/);

  for (const name of ["Cloud chat", "Cloud voices", "Create a new look", "Cloud Motion"]) {
    assert.match(english, new RegExp(`<p class="cloud-label">${name}</p>`));
  }
  assert.match(english, /Kokage Cloud features use Leaf/);
  assert.match(english, /the Android version does not include Kokage Cloud/);
  assert.match(english, /automatically switches to on-device replies/);
  assert.match(english, /explains what is sent beforehand/);
  assert.match(english, /no advertising or analytics/);
  assert.doesNotMatch(
    english,
    /remote inference|telemetry|unavailable in this release|persistent history|remains unavailable|Conversation processing stays on your device/,
  );
  for (const name of ["クラウドで会話する", "クラウドの声", "新しい見た目を作る", "クラウドモーション"]) {
    assert.match(japanese, new RegExp(`<p class="cloud-label">${name}</p>`));
  }
  assert.match(japanese, /こかげクラウドの機能は、アプリ内の「言の葉」を使って/);
  assert.match(japanese, /Android版にこかげクラウドは含まれません/);
  assert.match(japanese, /言の葉がなくなったときも自動で端末内の返事に切り替わります/);
  assert.match(japanese, /何が送信されるかを事前にわかりやすく案内し/);
  assert.match(japanese, /アプリに広告やアクセス解析もありません/);
  assert.doesNotMatch(
    japanese,
    /外部推論|テレメトリー|このリリースでは利用できません|端末内だけに残り|会話履歴にも残しません|報告機能は利用できません|会話の処理は端末の中で/,
  );

  for (const html of [english, japanese]) {
    assert.doesNotMatch(html, /class="privacy-grid"/);
    assert.doesNotMatch(html, /class="network-note"/);
    assert.match(
      html,
      /class="privacy-policy-link" href="\/(?:ja\/)?privacy\/"/,
    );
    assert.match(html, /<nav class="footer-nav"/);
    assert.match(html, /href="\/(?:ja\/)?support\/"/);
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
      canonical: `${siteOrigin}/privacy/`,
      title: "Privacy Policy | Kokage",
      description:
        "How Kokage handles on-device and cloud chat, Kokage Cloud motion, voices, speech and avatars, saved conversations, memory, reports, accounts, downloads, and website data.",
      heading:
        "What Kokage keeps on your device and what its cloud features send",
      siteName: "Kokage",
      date: "October 2, 2026",
      homePath: "/",
    },
    {
      html: japanese,
      locale: "ja",
      lang: "ja",
      canonical: `${siteOrigin}/ja/privacy/`,
      title: "プライバシーポリシー | こかげ",
      description:
        "こかげにおける端末内の会話とクラウド会話、こかげクラウドのモーション、声、読み上げ、アバター、会話の保存、記憶、報告、アカウント、ダウンロード、ウェブサイトのデータの扱いを説明します。",
      heading: "こかげが端末に保存するデータと、クラウド機能が送信するデータ",
      siteName: "こかげ",
      date: "2026年10月2日",
      homePath: "/ja/",
    },
  ];

  for (const policy of cases) {
    const { html } = policy;
    assert.match(html, new RegExp(`<html lang="${policy.lang}"`));
    assert.match(html, new RegExp(`data-site-locale="${policy.locale}"`));
    assertLanguageLinks(html, { locale: policy.locale, page: "privacy" });
    assert.match(
      html,
      new RegExp(`<link rel="canonical" href="${policy.canonical}"`),
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
        `<time datetime="2026-10-02">${escapeRegExp(policy.date)}</time>`,
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
      "chat",
      "cloud-motion",
      "cloud-voices",
      "avatar-creation",
      "local-data",
      "memory",
      "smart-home",
      "notifications",
      "characters",
      "cloud-account",
      "retention",
      "network",
      "reports",
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
    assert.match(html, /https:\/\/formspark\.io\/legal\/privacy-policy\//);
    assert.match(html, /href="https:\/\/openrouter\.ai\/privacy"/);
    assert.match(html, /href="https:\/\/www\.revenuecat\.com\/privacy"/);
    assert.match(html, /contact@orcalogy\.com/);
    assert.match(html, /Orcalogy LLC/);
    assert.doesNotMatch(html, /Lorem ipsum|TODO|placeholder|\[insert/i);
    assert.doesNotMatch(html, /href="#"/);
    for (const term of retiredProductTerms) {
      assert.doesNotMatch(html, term);
    }
  }

  assert.doesNotMatch(japanese, /\bKokage\b/);
  assert.match(japanese, /こかげクラウド/);

  // Cloud features are disclosed.
  assert.match(english, /or, on supported versions, Kokage Cloud/);
  assert.match(
    english,
    /When replies are made on your device, your conversation stays on your device/,
  );
  assert.match(english, /Kokage Cloud is operated by Orcalogy LLC on Google Cloud/);
  assert.match(english, /routed through OpenRouter to third-party AI model providers/);
  assert.match(english, /Cloud Motion is on by default when Kokage Cloud is available/);
  assert.match(english, /Delete Kokage Cloud account/);
  assert.match(english, /Reply on this device when Leaf runs out/);
  assert.match(english, /Redeem a code/);
  assert.match(english, /transfer code/);
  assert.match(english, /have no fixed deletion date/);
  assert.match(english, /there is no fixed retention period/);
  assert.match(japanese, /対応バージョンでのクラウド会話を選べます/);
  assert.match(japanese, /端末内のモデルで会話するとき、やり取りは端末の外へ送信されません/);
  assert.match(
    japanese,
    /こかげクラウドはOrcalogy LLCがGoogle Cloud上で運用しています/,
  );
  assert.match(japanese, /OpenRouterを通じて外部のAIモデル提供事業者へ送られます/);
  assert.match(japanese, /クラウドモーションは、こかげクラウドが使える環境では初期状態でオン/);
  assert.match(japanese, /こかげクラウドのアカウントを削除/);
  assert.match(japanese, /言の葉が足りないときはこの端末で返事する/);
  assert.match(japanese, /コードを使う/);
  assert.match(japanese, /引き継ぎコード/);
  assert.match(japanese, /一定の削除期日は設けていません/);
  assert.match(japanese, /保管期間は定めておらず/);

  // Microphone recognition stays on the device; only a confirmed voice-clone
  // recording is uploaded.
  assert.match(english, /Speech recognition runs on your device/);
  assert.match(
    english,
    /Microphone audio and in-progress transcription drafts are discarded immediately/,
  );
  assert.match(japanese, /音声認識は端末内で行います/);
  assert.match(japanese, /その場限りで破棄され、保存・ログ記録・アップロードは一切行いません/);

  // The report reference and the permission prompts are named as the app
  // names and asks for them.
  assert.match(english, /a random Reference ID/);
  assert.match(english, /with the Reference ID shown in the app/);
  assert.doesNotMatch(english, /report reference/);
  assert.match(japanese, /ランダムな受付ID/);
  assert.match(japanese, /アプリに表示された受付IDを添えて/);
  assert.doesNotMatch(japanese, /参照ID|報告番号/);
  assert.match(english, /or take a picture for a new avatar/);
  assert.match(english, /before voice input or voice-clone recording/);
  assert.match(japanese, /アバター作成用の写真を撮るときにカメラの許可/);
  assert.match(japanese, /声の複製のための録音を始める前にマイクの許可/);

  // Statements the app no longer supports, and draft-only notes, stay out.
  assert.doesNotMatch(
    english,
    /No Kokage account|developer-operated inference|no Kokage login|without a persistent chat log|unavailable in this release|remains? unavailable|must be (?:completed|added)|before publication|before this policy is published|Check:/i,
  );
  assert.doesNotMatch(
    japanese,
    /アカウント機能と、?開発者が運用する推論|永続的な会話ログへ書き込まず|このリリースでは利用できません|報告機能を利用できない状態|公開前に|Check:/,
  );
});

test("support pages are bilingual, indexable, and privacy-conscious", async () => {
  const [english, japanese] = await Promise.all([
    read("dist/support/index.html"),
    read("dist/ja/support/index.html"),
  ]);

  const cases = [
    {
      html: english,
      locale: "en",
      lang: "en",
      canonical: `${siteOrigin}/support/`,
      title: "Support | Kokage",
      description:
        "How to download Kokage, helpful tips when something is not working, managing Kokage Cloud and Leaf, your data on device, and how to contact us.",
      heading: "Support for Kokage",
      homePath: "/",
      privacyPath: "/privacy/",
    },
    {
      html: japanese,
      locale: "ja",
      lang: "ja",
      canonical: `${siteOrigin}/ja/support/`,
      title: "サポート | こかげ",
      description:
        "こかげのダウンロード方法、困ったときの確認事項、こかげクラウドと言の葉の使い方、データの管理、お問い合わせ方法を案内します。",
      heading: "サポートのご案内",
      homePath: "/ja/",
      privacyPath: "/ja/privacy/",
    },
  ];

  for (const support of cases) {
    const { html } = support;
    assert.match(html, new RegExp(`<html lang="${support.lang}"`));
    assert.match(html, new RegExp(`data-site-locale="${support.locale}"`));
    assertLanguageLinks(html, { locale: support.locale, page: "support" });
    assert.match(
      html,
      new RegExp(`<link rel="canonical" href="${support.canonical}"`),
    );
    assert.match(
      html,
      new RegExp(`<title>${escapeRegExp(support.title)}</title>`),
    );
    assert.match(
      html,
      new RegExp(
        `<meta name="description" content="${escapeRegExp(support.description)}">`,
      ),
    );
    assert.match(html, /<main id="main" class="policy-page support-page">/);
    assert.equal((html.match(/<h1[ >]/g) ?? []).length, 1);
    assert.match(
      html,
      new RegExp(`<h1[^>]*>${escapeRegExp(support.heading)}</h1>`),
    );
    assert.match(html, /"@type":"WebPage"/);
    assert.match(html, new RegExp(`class="brand" href="${support.homePath}"`));
    assert.match(
      html,
      new RegExp(`href="${support.privacyPath}">[^<]*(?:privacy|プライバシー)`),
    );
    assert.match(
      html,
      /href="mailto:contact@orcalogy\.com\?subject=Kokage%20support"/,
    );
    assert.match(html, /aria-current="page">[^<]*(?:Support|サポート)/);

    for (const id of [
      "availability",
      "troubleshooting",
      "kokage-cloud",
      "permissions",
      "local-data",
      "contact",
    ]) {
      assert.match(html, new RegExp(`href="#${id}"`));
      assert.match(html, new RegExp(`id="${id}"`));
    }

    assert.doesNotMatch(html, /Lorem ipsum|TODO|placeholder|\[insert/i);
    assert.doesNotMatch(html, /href="#"/);
    for (const term of retiredProductTerms) {
      assert.doesNotMatch(html, term);
    }
    for (const link of storeLinks) {
      assert.match(html, link);
    }
  }

  assert.match(english, /cloud features send only what the privacy policy describes/);
  assert.match(english, /use the in-app Report option/);
  assert.doesNotMatch(english, /remains unavailable/);
  assert.match(
    japanese,
    /クラウド機能は、プライバシーポリシーに記載したデータだけを送信します/,
  );
  assert.match(japanese, /アプリ内の報告ボタンからお知らせいただけます/);
  assert.doesNotMatch(japanese, /有効にするまで利用できません|\bKokage\b(?!%20support)/);
  assert.match(english, /cannot promise a specific response time/);
  assert.match(japanese, /個別の返信時期についてはお約束しておりません/);
  assert.match(english, /Kokage Cloud features and Leaf packs are available in the App Store version/);
  assert.match(english, /Delete Kokage Cloud account/);
  assert.match(japanese, /こかげクラウドの機能と言の葉のパックは、iPhoneとiPad向けのApp Store版/);
  assert.match(japanese, /設定の「こかげクラウドのアカウントを削除」から/);
  assert.match(english, /microphone access before voice input/);
  assert.match(english, /Retry voice input or check that microphone/);
  assert.match(japanese, /録音を始める前にだけ求めます/);
  assert.match(japanese, /音声入力を再試行するか、OSの設定でマイク/);
});

test("Chinese pages are complete, script-consistent, and free of retired terms", async () => {
  const chineseLocales = [
    {
      locale: "zh-hans",
      lang: "zh-Hans",
      prefix: "/zh-hans",
      // Characters that only appear in the other script.
      otherScript: /[這為們說時會發應頁設備帳戶隱關對話聲雲記憶]/,
    },
    {
      locale: "zh-hant",
      lang: "zh-Hant",
      prefix: "/zh-hant",
      otherScript: /[这为们说时会发应页设备账户隐关对话声云记忆]/,
    },
  ];
  const retiredChineseTerms = /伙伴|夥伴|陪伴|同伴|伴侣|伴侶|companion/i;

  for (const { locale, lang, prefix, otherScript } of chineseLocales) {
    for (const page of ["", "privacy", "support"]) {
      const html = await read(`dist${localizedPath(prefix, page)}index.html`);
      const label = `${locale} ${page || "home"}`;
      // Text outside the language menu, whose options name each language in
      // its own script.
      const text = html
        .replace(/<nav class="language-switch"[\s\S]*?<\/nav>/, "")
        .replace(/<script[\s\S]*?<\/script>/g, "")
        .replace(/<[^>]+>/g, " ");

      assert.match(html, new RegExp(`<html lang="${lang}"`), label);
      assert.match(html, new RegExp(`data-site-locale="${locale}"`), label);
      assertLanguageLinks(html, { locale, page });
      assert.equal((html.match(/<h1[ >]/g) ?? []).length, 1, label);
      assert.match(html, new RegExp(`"inLanguage":"${lang}"`), label);
      assert.match(
        html,
        new RegExp(`class="brand" href="${escapeRegExp(localizedPath(prefix))}"`),
        label,
      );
      assert.equal(
        (html.match(/<span class="brand__name">Kokage<\/span>/g) ?? []).length,
        2,
        label,
      );
      assert.doesNotMatch(text, retiredChineseTerms, label);
      assert.doesNotMatch(text, otherScript, label);
      // Japanese kana only appears inside the product term 言の葉.
      assert.doesNotMatch(
        text.replaceAll("言の葉", ""),
        /[\u3040-\u309f\u30a0-\u30ff]/,
        label,
      );
      assert.doesNotMatch(html, /Lorem ipsum|TODO|placeholder|href="#"/i, label);
      assert.doesNotMatch(html, /ONNX Runtime/, label);
      if (page !== "privacy") {
        for (const link of storeLinks) {
          assert.match(html, link, label);
        }
      }
    }

    const home = await read(`dist${localizedPath(prefix)}index.html`);
    for (const id of ["how", "features", "cloud", "privacy", "status"]) {
      assert.match(home, new RegExp(`href="#${id}"`));
      assert.match(home, new RegExp(`id="${id}"`));
    }
    const privacy = await read(`dist${localizedPath(prefix, "privacy")}index.html`);
    assert.match(privacy, /<time datetime="2026-10-02">2026年10月2日<\/time>/);
    assert.match(privacy, /contact@orcalogy\.com/);
    assert.match(privacy, /Orcalogy LLC/);
    assert.match(privacy, /zh-hans/);
  }
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
  assert.match(sitemap, new RegExp(`${siteOrigin}/support/`));
  assert.match(sitemap, new RegExp(`${siteOrigin}/ja/support/`));
  for (const { hreflang, prefix } of localeCodes) {
    assert.match(sitemap, new RegExp(`hreflang="${hreflang}"`));
    for (const page of ["", "privacy", "support"]) {
      assert.match(
        sitemap,
        new RegExp(`<loc>${escapeRegExp(`${siteOrigin}${localizedPath(prefix, page)}`)}</loc>`),
      );
    }
  }
  assert.match(robots, new RegExp(`${siteOrigin}/sitemap-index\.xml`));

  const urlBlocks = sitemap.match(/<url>[\s\S]*?<\/url>/g) ?? [];
  for (const page of ["privacy", "support"]) {
    for (const { prefix: locationPrefix } of localeCodes) {
      const location = `${siteOrigin}${localizedPath(locationPrefix, page)}`;
      const block = urlBlocks.find((entry) =>
        entry.includes(`<loc>${location}</loc>`),
      );
      assert.ok(block, location);
      for (const { hreflang, prefix } of localeCodes) {
        assert.match(
          block,
          new RegExp(
            `hreflang="${hreflang}" href="${escapeRegExp(`${siteOrigin}${localizedPath(prefix, page)}`)}"`,
          ),
        );
      }
    }
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
