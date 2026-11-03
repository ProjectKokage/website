# Working on the Kokage website

This is Kokage's multilingual static Astro site. Routes exist for English (`/`),
Japanese (`/ja/`), Simplified Chinese (`/zh-hans/`), and Traditional Chinese
(`/zh-hant/`); each locale has a home page, privacy policy (`privacy/`), and
support page (`support/`).

## Start here

Read [README](README.md) and [package.json](package.json). For product claims,
consult the sibling [Kokage documentation index](../kokage/docs/README.md),
current constraints and release records. Preserve current owner decisions and
identify any mismatch with older documentation before changing public claims.
Inspect the working tree, preserve unrelated work and state scope and checks.

## Essential rules

- Keep changes focused and use existing Astro components/styles. Preserve the
  static site, route structure, accessibility and all four language versions.
- Keep translations, navigation, canonical URLs, metadata, privacy and support
  pages consistent. Verify copy against its source rather than inventing claims.
- Link only to the approved App Store and Google Play listings defined in
  `src/i18n/routes.ts`. Do not add testimonials, usage figures, compatibility
  badges or unverified availability promises without approval in the owning
  release record.
- Preserve the branding sources recorded in README. Do not add VRM renders,
  screenshots, generated motion, models, voices or restricted product assets.
- Use the Node version required by package.json and the committed npm lockfile.
  Do not upgrade packages as routine setup. Keep credentials out of Git and
  client-side code.
- Production builds require the approved `KOKAGE_SITE_URL`. Keep development
  and tests on their documented non-public origins; do not invent a live URL.

## Writing and terminology guide

Keep wording parallel across paired elements and consistent within each locale
(`src/i18n/ja.ts`, `src/i18n/en.ts`, `src/i18n/zh-hans.ts`,
`src/i18n/zh-hant.ts`):

- **Store actions and listing links**: Use parallel verbs for the App Store and
  Google Play instead of mixing store badge slogans.
  - Primary download buttons (`hero.appStoreAction` / `hero.googlePlayAction`):
    - Japanese: `App Storeからダウンロード` / `Google Playからダウンロード`
      (do not use `Google Playで手に入れよう` or typo `ダンロード`)
    - English: `Download on the App Store` / `Download on Google Play` (do not
      use `Get it on Google Play`)
    - Simplified Chinese: `在 App Store 下载` / `在 Google Play 下载` (do not
      use `在 Google Play 获取`)
    - Traditional Chinese: `在 App Store 下載` / `在 Google Play 下載` (do not
      use `在 Google Play 取得`)
  - Store listing links (`status.platforms` and `support.sections`):
    - Japanese: `App Storeで見る` / `Google Playで見る` (do not mix with
      `App Storeのこかげ` / `Google Playのこかげ`)
    - English: `View on the App Store` / `View on Google Play` (do not mix with
      `Kokage on the App Store` / `Kokage on Google Play`)
    - Simplified & Traditional Chinese: `在 App Store 查看` /
      `在 Google Play 查看` (do not mix with `App Store 上的 Kokage` /
      `Google Play 上的 Kokage`)
- **Platform and service names**:
  - Pair Apple mobile devices as `iPhoneとiPad` in Japanese (not
    `iPhone・iPad`), `iPhone and iPad` in English, and `iPhone 和 iPad` in
    Chinese.
  - Write `Apple Home` in Japanese and English (`Apple 家庭` in Chinese); do not
    mix `Apple Home` with `Appleの「ホーム」`.
- **Product and feature terms**:
  - Brand name: `こかげ` on Japanese pages (never Latin `Kokage` in visible
    Japanese prose) and `Kokage` on English and Chinese pages; `こかげクラウド`
    in Japanese and `Kokage Cloud` in English and Chinese.
  - Credits and packs: `言の葉` (`Leaf` in English), `言の葉のパック`
    (`Leaf packs`, `言の葉礼包` / `言の葉禮包`).
  - Cloud features: `クラウド会話` (`cloud chat`, `云端对话` / `雲端對話`),
    `クラウドの声` (`cloud voices`, `云端声音` / `雲端聲音`),
    `新しい見た目を作る` / `3Dアバター作成` (`Create a new look` /
    `3D avatar creation`, `制作新形象` / `3D 虚拟形象制作`, `製作新形象` /
    `3D 虛擬形象製作`), `クラウドモーション` (`Cloud Motion`, `云端动作` /
    `雲端動作`).
  - On-device character card setting: `「端末内のみ」` (`on-device only`,
    `仅限设备端` / `僅限裝置端`); do not mix with `端末内推論のみ`
    (`on-device inference only`, `仅限设备端推理` / `僅限裝置端推論`).
  - Report identifier: `受付ID` in Japanese and `Reference ID` in English
    (`参考编号` / `參考編號` in Chinese).
  - Privacy policy link label: `プライバシーポリシーを読む` /
    `Read the privacy policy` / `阅读隐私政策` / `閱讀隱私權政策`.
  - Retired terms: Never use `相棒`, `コンパニオン`, `companion`, or `伙伴` /
    `夥伴` / `陪伴` / `同伴` / `伴侣` / `伴侶`; use `AIキャラクター` /
    `AI character` / `AI 角色`.
- **Japanese orthography**:
  - Katakana long vowel marks: Write `メモリ` (not `メモリー`), and keep
    trailing `ー` on `サーバー`, `ブラウザー`, `ユーザー`, `センサー`.
  - Hiragana vs. Kanji: Write standalone `あと` / `あとから` (not `後から`),
    `ほか`, `すべて`, `すでに`, `すぐ`, `とき`, `こと`, `ため`, `など`,
    `および`, `または`, `とおり`, `わかる`, `できる`, `ください` in hiragana.
  - Numerals: Use Arabic numerals for counts and quantities (`1つ`, `1回`,
    `1件`, `2枚`, `2分`, `3つ`, `6桁`, `7日間`, `24時間`, `60秒`), reserving
    kanji numerals for fixed idioms (`一度`, `一言`, `一時`, `一切`, `一覧`,
    `一部`, `一定`).
  - Website self-reference: Use `このウェブサイト` consistently (not
    `本ウェブサイト`).

## Commands and verification

From the repository root, install with `npm ci` when dependencies are needed.
For site source, content or configuration changes, run:

```sh
npm test
```

The test runner owns static tests and the build checks. Use `npm run dev` for
local inspection. For page/layout changes, also inspect the affected localized
routes at narrow and wide widths, including keyboard navigation. A successful
build does not establish visual correctness.

For prose-only repository guides or agent instructions, check relative links,
referenced commands and `git diff --check`; rebuilding the site is unnecessary.
Report the checks run and any missing visual or browser evidence.

## Delivery

Branch names must not begin with `codex` (case-insensitive), including
`codex/` and `codex-`. Rename tool-generated defaults before committing or
pushing; use a descriptive name such as `docs-agent-guides`.

Use a task branch and review the diff. Commit only task files; push, merge and
publish only when authorized for that action. Make routine fixes within the
requested scope; obtain approval before changing product, privacy or release
policy. Update the owning documentation for lasting behavior changes.
