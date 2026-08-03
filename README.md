# Kokage website

The bilingual project site for Kokage, built as a static Astro site.

## Development

```sh
npm install
npm run dev
```

Run all repository checks with:

```sh
npm test
```

English is served at `/` and Japanese at `/ja/`.
The privacy policy is served at `/privacy/` and `/ja/privacy/`.
Set `KOKAGE_SITE_URL` to the approved site origin before running a production build.
Development uses a loopback origin, and the test runner uses a reserved non-public origin.

## Content and asset boundary

Product claims come from the sibling `../kokage` repository, primarily its root README, current constraints, runtime contract, trust contract, and release records.
The site must continue to describe Kokage as an experimental prototype and must not add download claims, testimonials, usage figures, compatibility badges, or unverified platform promises.

The icon and leaf artwork under `public/brand/` and `src/assets/brand/` are copied from Kokage's current canonical branding assets.
No character render, application screenshot, generated motion, model weight, voice, or other restricted product asset belongs in this repository.
