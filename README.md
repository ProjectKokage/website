# Kokage website

The multilingual project site for Kokage, built as a static Astro site.

## Development

```sh
npm install
npm run dev
```

Run all repository checks with:

```sh
npm test
```

English is served at `/`, Japanese at `/ja/`, Simplified Chinese at `/zh-hans/`, and Traditional Chinese at `/zh-hant/`.
Each language includes a home page, privacy policy (`privacy/`), and support page (`support/`).
Set `KOKAGE_SITE_URL` to the approved site origin before running a production build.
Development uses a loopback origin, and the test runner uses a reserved non-public origin.

## Search engines and AI assistants

Every page's head (`src/layouts/SiteLayout.astro`) gives its canonical address, the same page in the other languages, the Open Graph card and schema.org data (`src/seo/structured-data.ts`): the home pages describe the site, the app with its two store listings and its X and Discord links, and Orcalogy LLC as publisher; the privacy and support pages are `WebPage`s of that site.
`/sitemap-index.xml` lists every page with its languages, and `/llms.txt` ([llmstxt.org](https://llmstxt.org), `src/seo/llms.ts`) summarises the app and lists every page with its description.
All of it is built from the copy in `src/i18n/`, so it follows any copy change.

## Content and asset boundary

Product claims come from the sibling `../kokage` repository, primarily its root README, current constraints, runtime contract, trust contract, and release records; where those documents lag reality, the product owner's current statements win.
Kokage is published on the App Store (iPhone and iPad) and on Google Play (Android), with free on-device chat and optional Kokage Cloud features on both platforms; the site links to those two listings and to `kokage.cloud`, whose URLs live in `src/i18n/routes.ts`. Every page's footer also links Kokage's X account (@KokageApp) and Discord server; those addresses live in the same file. Check the live listings before changing what the site says about a platform. The site must not add testimonials, usage figures, compatibility badges, or unverified platform promises.

The icon and leaf artwork under `public/brand/` are copied from Kokage's current canonical branding assets.
`public/brand/kokochan-hero.png`, `kokochan-speaking.png`, `kokochan-motion.png`, and `kokochan-preview.png`, along with the interactive showcase model `public/models/kokochan.vrm` and motion clips (`idle.vrma`, `speaking.vrma`, `nod.vrma`), are owner-approved showcase assets sourced from `../kokage` for the interactive 3D hero and product previews; model weights, voices, and other restricted product assets do not belong in this repository.
