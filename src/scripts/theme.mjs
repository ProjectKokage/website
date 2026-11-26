const STORAGE_KEY = "kokage-theme";

function readStoredTheme() {
  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    return value === "light" || value === "dark" ? value : null;
  } catch {
    return null;
  }
}

function writeStoredTheme(theme) {
  try {
    window.localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    // Storage may be disabled in private browsing.
  }
}

function currentTheme() {
  const attr = document.documentElement.dataset.theme;
  if (attr === "light" || attr === "dark") return attr;
  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  for (const button of document.querySelectorAll("[data-theme-toggle]")) {
    const isDark = theme === "dark";
    button.setAttribute("aria-pressed", String(isDark));
    const nextLabel = isDark
      ? button.getAttribute("data-label-light")
      : button.getAttribute("data-label-dark");
    if (nextLabel) {
      button.setAttribute("aria-label", nextLabel);
      button.setAttribute("title", nextLabel);
    }
  }
}

export function initializeTheme() {
  applyTheme(currentTheme());

  for (const button of document.querySelectorAll("[data-theme-toggle]")) {
    button.addEventListener("click", () => {
      const next = currentTheme() === "dark" ? "light" : "dark";
      writeStoredTheme(next);
      applyTheme(next);
    });
  }

  const media = window.matchMedia("(prefers-color-scheme: light)");
  const onChange = (event) => {
    if (readStoredTheme() !== null) return;
    applyTheme(event.matches ? "light" : "dark");
  };
  media.addEventListener("change", onChange);
}
