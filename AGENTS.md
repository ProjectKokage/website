# Working on the Kokage website

This is Kokage's bilingual static Astro site. English routes are at `/` and
Japanese routes at `/ja/`; privacy and support pages exist in both languages.

## Start here

Read [README](README.md) and [package.json](package.json). For product claims,
consult the sibling [Kokage documentation index](../kokage/docs/README.md),
current constraints and release records. Preserve current owner decisions and
identify any mismatch with older documentation before changing public claims.
Inspect the working tree, preserve unrelated work and state scope and checks.

## Essential rules

- Keep changes focused and use existing Astro components/styles. Preserve the
  static site, route structure, accessibility and both language versions.
- Keep translations, navigation, canonical URLs, metadata, privacy and support
  pages consistent. Verify copy against its source rather than inventing claims.
- Do not add store/download links, testimonials, usage figures, compatibility
  badges or availability promises without approval in the owning release record.
  A submission in progress may be described as a release in preparation.
- Preserve the branding sources recorded in README. Do not add VRM renders,
  screenshots, generated motion, models, voices or restricted product assets.
- Use the Node version required by package.json and the committed npm lockfile.
  Do not upgrade packages as routine setup. Keep credentials out of Git and
  client-side code.
- Production builds require the approved `KOKAGE_SITE_URL`. Keep development
  and tests on their documented non-public origins; do not invent a live URL.

## Commands and verification

From the repository root, install with `npm ci` when dependencies are needed.
For site source, content or configuration changes, run:

```sh
npm test
```

The test runner owns static tests and the build checks. Use `npm run dev` for
local inspection. For page/layout changes, also inspect the affected English
and Japanese routes at narrow and wide widths, including keyboard navigation.
A successful build does not establish visual correctness.

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
