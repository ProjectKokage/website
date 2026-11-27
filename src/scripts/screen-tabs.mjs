export function initializeScreenSwitchers() {
  const reducedMotionQuery = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  );
  const videoControllers = [];

  const setupPanelVideo = (panel) => {
    const video =
      panel instanceof HTMLVideoElement ? panel : panel.querySelector("video");
    if (!(video instanceof HTMLVideoElement)) return null;

    const toggle = panel.querySelector("[data-motion-toggle]");
    let userPaused = false;

    const updateToggleState = (isPaused) => {
      if (!toggle) return;
      toggle.setAttribute("data-paused", String(isPaused));
      const nextLabel = isPaused
        ? toggle.getAttribute("data-label-play")
        : toggle.getAttribute("data-label-pause");
      if (nextLabel) {
        toggle.setAttribute("aria-label", nextLabel);
        toggle.setAttribute("title", nextLabel);
      }
    };

    const sync = (isActive) => {
      const shouldPlay =
        isActive && !reducedMotionQuery.matches && !userPaused;
      if (shouldPlay) {
        updateToggleState(false);
        video.play().catch(() => {
          updateToggleState(true);
        });
      } else {
        video.pause();
        updateToggleState(true);
      }
    };

    if (toggle) {
      toggle.addEventListener("click", () => {
        if (video.paused) {
          userPaused = false;
          updateToggleState(false);
          video.play().catch(() => {
            updateToggleState(true);
          });
        } else {
          userPaused = true;
          video.pause();
          updateToggleState(true);
        }
      });
    }

    const controller = { panel, sync };
    videoControllers.push(controller);
    return controller;
  };

  for (const switcher of document.querySelectorAll("[data-screen-switcher]")) {
    const tablist = switcher.querySelector('[role="tablist"]');
    const tabs = Array.from(switcher.querySelectorAll("[data-screen-tab]"));
    const panels = Array.from(
      switcher.querySelectorAll("[data-screen-panel]"),
    );
    const controllers = new Map();

    for (const panel of panels) {
      const controller = setupPanelVideo(panel);
      if (controller) {
        controllers.set(panel, controller);
        controller.sync(panel.getAttribute("data-active") === "true");
      }
    }

    const activateTab = (tab, { moveFocus = false } = {}) => {
      const target = tab.getAttribute("data-screen-tab");
      if (!target) return;

      for (const other of tabs) {
        const isSelected = other === tab;
        other.setAttribute("aria-selected", String(isSelected));
        other.setAttribute("tabindex", isSelected ? "0" : "-1");
      }
      for (const panel of panels) {
        const isMatch = panel.getAttribute("data-screen-panel") === target;
        panel.setAttribute("data-active", String(isMatch));
        panel.setAttribute("aria-hidden", String(!isMatch));
        const controller = controllers.get(panel);
        if (controller) {
          controller.sync(isMatch);
        }
      }
      if (moveFocus) {
        tab.focus();
      }
    };

    for (const tab of tabs) {
      tab.addEventListener("click", () => activateTab(tab));
    }

    if (tablist) {
      tablist.addEventListener("keydown", (event) => {
        const currentIndex = tabs.indexOf(document.activeElement);
        if (currentIndex === -1) return;

        let nextIndex = -1;
        if (event.key === "ArrowRight") {
          nextIndex = (currentIndex + 1) % tabs.length;
        } else if (event.key === "ArrowLeft") {
          nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
        } else if (event.key === "Home") {
          nextIndex = 0;
        } else if (event.key === "End") {
          nextIndex = tabs.length - 1;
        } else {
          return;
        }

        event.preventDefault();
        activateTab(tabs[nextIndex], { moveFocus: true });
      });
    }
  }

  reducedMotionQuery.addEventListener("change", () => {
    for (const { panel, sync } of videoControllers) {
      sync(panel.getAttribute("data-active") === "true");
    }
  });
}
