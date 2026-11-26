import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("Zen Maru Gothic loads with real weights on en/ja and not on zh pages", async () => {
  const [css, enHtml, jaHtml, zhHansHtml, zhHantHtml] = await Promise.all([
    readFile(new URL("../src/styles/global.css", import.meta.url), "utf8"),
    readFile(new URL("../dist/index.html", import.meta.url), "utf8"),
    readFile(new URL("../dist/ja/index.html", import.meta.url), "utf8"),
    readFile(new URL("../dist/zh-hans/index.html", import.meta.url), "utf8"),
    readFile(new URL("../dist/zh-hant/index.html", import.meta.url), "utf8"),
  ]);

  for (const html of [enHtml, jaHtml]) {
    assert.match(
      html,
      /href="https:\/\/fonts\.googleapis\.com\/css2\?family=Zen\+Maru\+Gothic:wght@400;500;700&amp;display=swap"/,
    );
    assert.match(html, /href="https:\/\/fonts\.gstatic\.com" crossorigin/);
  }

  for (const html of [zhHansHtml, zhHantHtml]) {
    assert.doesNotMatch(html, /fonts\.googleapis\.com/);
    assert.doesNotMatch(html, /fonts\.gstatic\.com/);
  }

  assert.match(css, /"Zen Maru Gothic", ui-rounded/);
  assert.match(css, /font-family: var\(--font-kokage\)/);
  assert.doesNotMatch(css, /font-synthesis:\s*weight/);
  assert.doesNotMatch(css, /font-weight:\s*(?:600|800)\b/);
});
