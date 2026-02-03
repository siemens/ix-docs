import "./global-X2k8gwUL.js";
import { a as addIcons } from "./ix-icon.entry-CAC9hLPU.js";
import { y as iconRefresh } from "./index-CtK4JYCE.js";
import "./init-BwA_PJxl.js";
addIcons({
  iconRefresh
});
(async () => {
  await window.customElements.whenDefined("ix-action-card");
  const pushCardElement = document.querySelector("ix-action-card");
  pushCardElement.addEventListener("click", console.log);
})();
