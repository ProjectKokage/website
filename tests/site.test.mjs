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
  assert.equal((primaryNavigation.match(/<a /g) ?? []).length, 4);
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
    alternate: { lang: "ja", href: `${siteOrigin}/ja/` },
    xDefault: `${siteOrigin}/`,
    title: "Kokage | Talk with your 3D AI character",
    description:
      "Kokage is an app for talking with a 3D AI character. Make replies free on your device, or use Kokage Cloud for instant chat, cloud voices, new looks and Cloud Motion. On the App Store and Google Play.",
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
    title: "こかげ | 3DのAIキャラクターと話せるアプリ",
    description:
      "こかげは、3DのAIキャラクターと話せるアプリです。返事は端末で無料で作るほか、こかげクラウドならすぐに会話でき、クラウドの声、新しい見た目、クラウドモーションも使えます。App StoreとGoogle Playで配信中です。",
    ogLocale: "ja_JP",
    alternateOgLocale: "en_US",
  });

  assert.match(english, /Talk with your AI character/);
  assert.match(english, /Download on the App Store/);
  assert.match(english, /Get it on Google Play/);
  assert.equal(
    (english.match(/<span class="brand__name">Kokage<\/span>/g) ?? []).length,
    2,
  );
  assert.match(
    japanese.replaceAll(/<[^>]+>/g, ""),
    /あなたのAIキャラクターと話す。端末でも、クラウドでも。/,
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
  assert.match(english, /VRM 0\.x or 1\.0 file/);
  assert.match(english, /public Hugging Face model/);
  assert.match(english, /import character cards/);
  assert.match(japanese, /日本語、英語、中国語（簡体字・繁体字）/);
  assert.match(japanese, /VRM 0\.x／1\.0ファイル/);
  assert.match(japanese, /公開されているHugging Faceのモデル/);
  assert.match(japanese, /キャラクターカードをファイルやリンクから読み込んだり/);
  assert.doesNotMatch(
    `${english}\n${japanese}`,
    /current dependency graph|ONNX Runtime|API 36|署名済み配布/,
  );
  assert.doesNotMatch(
    japanese,
    /ConversationCoordinator|単調増加|プロジェクター|再生済みサンプル|開発者ゲート|マイクのPCM/,
  );
  assert.match(japanese, /Silero/);
  assert.match(japanese, /SenseVoice/);
  assert.match(japanese, /sherpa_onnx/);
  assert.match(english, /record for bounded microphone capture/);
  assert.match(english, /Silero VAD/);
  assert.match(english, /SenseVoice ASR/);
  assert.match(japanese, /recordで長さを制限/);
  assert.match(japanese, /Silero VAD/);
  assert.match(japanese, /SenseVoice音声認識/);
  assert.doesNotMatch(`${english}\n${japanese}`, /Apple Speech|AVFAudio/);
  assert.doesNotMatch(english, /Voice input is unavailable in this release/);
  assert.doesNotMatch(japanese, /音声入力はこのリリースでは利用できません/);

  for (const name of ["Cloud chat", "Cloud voices", "Create a new look", "Cloud Motion"]) {
    assert.match(english, new RegExp(`<p class="cloud-label">${name}</p>`));
  }
  assert.match(english, /Kokage Cloud features spend Leaf/);
  assert.match(english, /in the App Store version for iPhone and iPad/);
  assert.match(english, /The Android version does not include Kokage Cloud/);
  assert.match(english, /the app explains what cloud chat sends before you use it/);
  assert.match(
    english,
    /no advertising, analytics or remote crash-reporting feature/,
  );
  assert.match(english, /Saved memory can enter a cloud request you have consented to/);
  assert.match(english, /saves the conversation on your device as displayed/);
  assert.match(english, /Photo retention starts on/);
  assert.match(english, /A report that you review and confirm in the app sends only/);
  assert.doesNotMatch(
    english,
    /remote inference|telemetry|unavailable in this release|persistent history|remains unavailable|Conversation processing stays on your device/,
  );
  for (const name of ["クラウドで会話する", "クラウドの声", "新しい見た目を作る", "クラウドモーション"]) {
    assert.match(japanese, new RegExp(`<p class="cloud-label">${name}</p>`));
  }
  assert.match(japanese, /こかげクラウドの機能には言の葉を使います/);
  assert.match(japanese, /iPhoneとiPad向けのApp Store版で使える/);
  assert.match(japanese, /Android版にこかげクラウドは含まれません/);
  assert.match(japanese, /クラウドでの会話を使う前に送信する内容をアプリが説明し/);
  assert.match(japanese, /広告、解析、遠隔クラッシュ報告の機能は組み込んでいません/);
  assert.match(japanese, /保存済みの記憶は、同意済みのクラウド会話に含まれる場合があります/);
  assert.match(japanese, /画面に表示した会話を端末に保存し/);
  assert.match(japanese, /写真の保存は初期状態でオンです/);
  assert.match(japanese, /アプリ内で内容を確認して送信する報告/);
  assert.doesNotMatch(
    japanese,
    /外部推論|テレメトリー|このリリースでは利用できません|端末内だけに残り|会話履歴にも残しません|報告機能は利用できません|会話の処理は端末の中で/,
  );

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
      englishPath: "/privacy/",
      japanesePath: "/ja/privacy/",
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
      englishPath: "/privacy/",
      japanesePath: "/ja/privacy/",
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

  // Cloud features are disclosed, with the configured-build qualifier.
  assert.match(english, /or, in a configured build, cloud chat/);
  assert.match(
    english,
    /On-device replies keep their generation context on your device/,
  );
  assert.match(english, /Kokage Cloud is run by Orcalogy LLC on Google Cloud/);
  assert.match(english, /go through OpenRouter to third-party AI model providers/);
  assert.match(english, /Cloud Motion is on by default when cloud access is configured/);
  assert.match(english, /delete your Kokage Cloud account in Settings/);
  assert.match(english, /have no fixed deletion date/);
  assert.match(english, /There is no fixed retention period/);
  assert.match(japanese, /対応ビルドでのクラウド会話を選べます/);
  assert.match(japanese, /端末内のモデルへの入力は端末内にとどまります/);
  assert.match(
    japanese,
    /こかげクラウドはOrcalogy LLCがGoogle Cloud上で運用しています/,
  );
  assert.match(japanese, /OpenRouterを経由して第三者のAIモデル提供事業者に送られます/);
  assert.match(japanese, /クラウドモーションはクラウド接続を設定すると初期状態でオン/);
  assert.match(japanese, /こかげクラウドのアカウントを削除/);
  assert.match(japanese, /削除期日は定めていません/);
  assert.match(japanese, /保存期間は定めていません/);

  // Microphone recognition stays on the device; only a confirmed voice-clone
  // recording is uploaded.
  assert.match(english, /Microphone recognition runs on-device/);
  assert.match(
    english,
    /recognition drafts, intermediate results and voice metadata are transient and are not logged or uploaded/,
  );
  assert.match(japanese, /音声認識は端末内で行います/);
  assert.match(japanese, /一時的に扱い、保存、ログ記録、アップロードしません/);

  // The report reference and the permission prompts are named as the app
  // names and asks for them.
  assert.match(english, /a random Reference ID/);
  assert.match(english, /with the Reference ID the app showed you/);
  assert.doesNotMatch(english, /report reference/);
  assert.match(japanese, /ランダムな受付ID/);
  assert.match(japanese, /アプリに表示された受付IDを添えて/);
  assert.doesNotMatch(japanese, /参照ID|報告番号/);
  assert.match(english, /or take a picture for an avatar/);
  assert.match(english, /before voice capture or a voice-clone recording/);
  assert.match(japanese, /アバター用の画像を撮影するときにカメラの使用許可/);
  assert.match(japanese, /声の複製のための録音を始める前にマイクの使用許可/);

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
      englishPath: "/support/",
      japanesePath: "/ja/support/",
      canonical: `${siteOrigin}/support/`,
      title: "Support | Kokage",
      description:
        "Getting Kokage, troubleshooting, Kokage Cloud and Leaf, local-data guidance, and a privacy-conscious way to ask questions and contact the project.",
      heading: "Support for Kokage",
      homePath: "/",
      privacyPath: "/privacy/",
    },
    {
      html: japanese,
      locale: "ja",
      lang: "ja",
      englishPath: "/support/",
      japanesePath: "/ja/support/",
      canonical: `${siteOrigin}/ja/support/`,
      title: "サポート | こかげ",
      description:
        "こかげの入手方法、問題の切り分け、こかげクラウドと言の葉、端末内データの案内、質問や連絡の方法を説明します。",
      heading: "サポートのご案内",
      homePath: "/ja/",
      privacyPath: "/ja/privacy/",
    },
  ];

  for (const support of cases) {
    const { html } = support;
    assert.match(html, new RegExp(`<html lang="${support.lang}"`));
    assert.match(html, new RegExp(`data-site-locale="${support.locale}"`));
    assert.match(
      html,
      new RegExp(`data-english-url="${escapeRegExp(support.englishPath)}"`),
    );
    assert.match(
      html,
      new RegExp(`data-japanese-url="${escapeRegExp(support.japanesePath)}"`),
    );
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

  assert.match(english, /cloud features send what the privacy policy lists/);
  assert.match(english, /exists in a build configured for Report/);
  assert.doesNotMatch(english, /remains unavailable/);
  assert.match(
    japanese,
    /クラウド機能は、プライバシーポリシーに記載したデータを送信します/,
  );
  assert.match(japanese, /報告機能を設定したビルドで利用できます/);
  assert.doesNotMatch(japanese, /有効にするまで利用できません|\bKokage\b(?!%20support)/);
  assert.match(english, /No response time is promised/);
  assert.match(japanese, /返信までの期間は約束していません/);
  assert.match(english, /Kokage Cloud features and Leaf packs are in the App Store version/);
  assert.match(english, /use Delete Kokage Cloud account in Settings/);
  assert.match(japanese, /こかげクラウドの機能と言の葉のパックは、iPhoneとiPad向けのApp Store版/);
  assert.match(japanese, /設定の「こかげクラウドのアカウントを削除」を使います/);
  assert.match(english, /microphone access before voice capture/);
  assert.match(english, /Retry voice input or review microphone access/);
  assert.match(japanese, /録音を始める前にマイクの使用許可/);
  assert.match(japanese, /音声入力を再試行するか、OSの設定でマイク/);
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
  assert.match(sitemap, /hreflang="en"/);
  assert.match(sitemap, /hreflang="ja"/);
  assert.match(robots, new RegExp(`${siteOrigin}/sitemap-index\.xml`));

  const urlBlocks = sitemap.match(/<url>[\s\S]*?<\/url>/g) ?? [];
  for (const page of ["privacy", "support"]) {
    for (const location of [
      `${siteOrigin}/${page}/`,
      `${siteOrigin}/ja/${page}/`,
    ]) {
      const block = urlBlocks.find((entry) =>
        entry.includes(`<loc>${location}</loc>`),
      );
      assert.ok(block, location);
      assert.match(
        block,
        new RegExp(
          `hreflang="en" href="${escapeRegExp(`${siteOrigin}/${page}/`)}"`,
        ),
      );
      assert.match(
        block,
        new RegExp(
          `hreflang="ja" href="${escapeRegExp(`${siteOrigin}/ja/${page}/`)}"`,
        ),
      );
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
