import "./global-nUAVWB12.js";
import { a as addIcons } from "./ix-icon.entry-BAEVBK2x.js";
import { y as iconRefresh } from "./index-lQqpelqO.js";
import "./init-B2X-QHiR.js";
addIcons({
  iconRefresh
});
(async () => {
  await window.customElements.whenDefined("ix-action-card");
  const pushCardElement = document.querySelector("ix-action-card");
  pushCardElement.addEventListener("click", console.log);
})();
