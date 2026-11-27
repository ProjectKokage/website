export function initializeScreenSwitchers() {
  for (const switcher of document.querySelectorAll("[data-screen-switcher]")) {
    const tabs = Array.from(switcher.querySelectorAll("[data-screen-tab]"));
    const panels = Array.from(
      switcher.querySelectorAll("[data-screen-panel]"),
    );

    for (const tab of tabs) {
      tab.addEventListener("click", () => {
        const target = tab.getAttribute("data-screen-tab");
        if (!target) return;

        for (const other of tabs) {
          other.setAttribute("aria-pressed", String(other === tab));
        }
        for (const panel of panels) {
          const isMatch = panel.getAttribute("data-screen-panel") === target;
          panel.setAttribute("data-active", String(isMatch));
        }
      });
    }
  }
}
