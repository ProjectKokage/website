export function initializeScreenSwitchers() {
  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  const syncPanelVideo = (panel, isActive) => {
    if (!(panel instanceof HTMLVideoElement)) return;
    if (isActive && !reducedMotion) {
      panel.play().catch(() => {});
    } else {
      panel.pause();
    }
  };

  for (const switcher of document.querySelectorAll("[data-screen-switcher]")) {
    const tabs = Array.from(switcher.querySelectorAll("[data-screen-tab]"));
    const panels = Array.from(
      switcher.querySelectorAll("[data-screen-panel]"),
    );

    for (const panel of panels) {
      syncPanelVideo(panel, panel.getAttribute("data-active") === "true");
    }

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
          syncPanelVideo(panel, isMatch);
        }
      });
    }
  }
}
