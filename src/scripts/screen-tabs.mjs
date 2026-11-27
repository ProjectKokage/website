export function initializeScreenSwitchers() {
  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  for (const switcher of document.querySelectorAll("[data-screen-switcher]")) {
    const tabs = Array.from(switcher.querySelectorAll("[data-screen-tab]"));
    const panels = Array.from(
      switcher.querySelectorAll("[data-screen-panel]"),
    );
    let inView = false;

    function syncVideos() {
      for (const panel of panels) {
        if (panel.tagName !== "VIDEO") continue;
        const isActive = panel.getAttribute("data-active") === "true";
        if (reducedMotion || !isActive || !inView) {
          panel.pause();
        } else {
          panel.play().catch(() => {});
        }
      }
    }

    if (reducedMotion) {
      for (const panel of panels) {
        if (panel.tagName === "VIDEO") {
          panel.removeAttribute("autoplay");
          panel.pause();
        }
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        inView = entries[0]?.isIntersecting ?? false;
        syncVideos();
      },
      { threshold: 0.25 },
    );
    observer.observe(switcher);

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
        syncVideos();
      });
    }
  }
}
