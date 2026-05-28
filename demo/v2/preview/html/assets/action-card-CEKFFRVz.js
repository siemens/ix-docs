import "./global-j8oXcCx7.js";
import { a as addIcons } from "./ix-icon.entry-a1KgNNth.js";
import { y as iconRefresh } from "./index-vnsUAEMY.js";
import "./init-XAylx2Fy.js";
addIcons({
  iconRefresh
});
(async () => {
  await window.customElements.whenDefined("ix-action-card");
  const pushCardElement = document.querySelector("ix-action-card");
  pushCardElement.addEventListener("click", console.log);
})();
