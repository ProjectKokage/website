import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("the website loads and applies the app's Zen Maru Gothic font", async () => {
  const [css, html] = await Promise.all([
    readFile(new URL("../src/styles/global.css", import.meta.url), "utf8"),
    readFile(new URL("../dist/index.html", import.meta.url), "utf8"),
  ]);

  assert.match(
    html,
    /href="https:\/\/fonts\.googleapis\.com\/css2\?family=Zen\+Maru\+Gothic&amp;display=swap"/,
  );
  assert.match(html, /href="https:\/\/fonts\.gstatic\.com" crossorigin/);
  assert.match(css, /"Zen Maru Gothic", ui-rounded/);
  assert.match(css, /font-family: var\(--font-kokage\)/);
});
