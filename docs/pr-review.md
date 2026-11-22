# Pull requests

How a change goes from a task branch to a PR ready for review. [AGENTS.md](../AGENTS.md)
holds the rules and the writing guide the reviews check against.

## Before the PR

1. Work on a task branch from `origin/main`; `mise run wt:new -- <branch>` makes a fresh
   worktree. Branch names never begin with `codex` (any case, including `codex/` and
   `codex-`).
2. Run `mise run verify`, or `mise run verify:docs` when only prose guides changed. For page
   or layout changes, also inspect the affected localized routes at narrow and wide widths,
   including keyboard navigation.
3. Run both [review passes](#review-passes) on `git diff origin/main...HEAD`. Fix what they
   find, rerun the affected checks and repeat both passes after material edits.

## Publishing

Push the task branch and open a draft PR against `main`. Its description gives the problem
and resulting behaviour, the checks that ran with their results, the review results, and
anything not checked, such as visual or browser evidence. Mark it ready for review once
`mise run verify` passes for the pushed commit and neither pass has an open blocker. A
blocker that needs a product decision keeps the PR a draft, and the description names that
decision.

Merging and publishing each happen when the owner asks for them.

## Review passes

Run each pass in a fresh context, such as a subagent or a new session, that reads the diff
itself rather than the author's summary. Each pass returns its blockers with `file:line`, the
rule or scenario each breaks and a fix, then smaller notes.

### Contract pass

- All four locales (`src/i18n/en.ts`, `ja.ts`, `zh-hans.ts`, `zh-hant.ts`) say the same
  thing, each written natively, with routes, navigation, canonical URLs and metadata
  consistent.
- Wording follows the [writing and terminology guide](../AGENTS.md#writing-and-terminology-guide):
  parallel store verbs, the retired terms it lists, and Japanese orthography.
- Store, X and Discord links come only from `src/i18n/routes.ts`, and the page adds no
  testimonials, usage figures, compatibility badges, availability promises or restricted
  product assets.
- Product, privacy and support claims match the kokage documentation and release records;
  a change that Kokage Cloud's privacy or account pages also state names its follow-up in
  kokage-cloud or kokage.cloud.

### Adversarial pass

- Failure paths: missing translations, empty fields, long strings at narrow widths, broken
  relative links and anchors, and pages that only work with JavaScript.
- Accessibility: headings, link text, focus order and keyboard navigation on the changed
  pages.
- Test integrity: skipped static tests and weakened or deleted assertions.
- Evidence: each claim in the PR description matches a command that ran and its output;
  visual and browser checks that did not run are listed as open.

## Local hooks

`mise run setup` installs `lefthook` hooks for the clone and all of its worktrees. A commit
is refused on `main`, on a `codex*` branch, or with staged whitespace errors. A push is
refused when it targets or deletes `main`, names a `codex*` branch, or its commits carry
whitespace errors. The hooks run only where lefthook is installed and are skipped by
`--no-verify` or `LEFTHOOK=0`; this repository's GitHub plan offers no branch protection, so
they guard the local machine only.
