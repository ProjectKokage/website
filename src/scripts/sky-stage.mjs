export function initializeSkyStage() {
  const stage = document.querySelector("[data-sky-stage]");
  if (!stage) return;

  const buttons = Array.from(stage.querySelectorAll("[data-sky-option]"));
  for (const button of buttons) {
    button.addEventListener("click", () => {
      const sky = button.getAttribute("data-sky-option");
      if (!sky) return;
      stage.setAttribute("data-sky", sky);
      for (const other of buttons) {
        other.setAttribute("aria-pressed", String(other === button));
      }
    });
  }
}
