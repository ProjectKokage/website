// The language menu is a native <details> disclosure, so it opens and its
// links work without JavaScript. This only adds the dismissal people expect
// from a dropdown: clicking elsewhere or pressing Escape closes it.
export function initializeLanguageMenu({
  documentObject = globalThis.document,
} = {}) {
  if (documentObject === undefined) {
    return;
  }

  for (const menu of documentObject.querySelectorAll(".language-menu")) {
    documentObject.addEventListener("click", (event) => {
      if (menu.open && !menu.contains(event.target)) {
        menu.open = false;
      }
    });

    menu.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && menu.open) {
        menu.open = false;
        menu.querySelector("summary")?.focus();
      }
    });
  }
}
