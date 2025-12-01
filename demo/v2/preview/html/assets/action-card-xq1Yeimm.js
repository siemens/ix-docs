import "./global-BkHs9YbB.js";
import { a as addIcons } from "./ix-icon.entry-B7yXlqBM.js";
import { y as iconRefresh } from "./index-B86ot3BK.js";
import "./init-BY4076Vr.js";
addIcons({
  iconRefresh
});
(async () => {
  await window.customElements.whenDefined("ix-action-card");
  const pushCardElement = document.querySelector("ix-action-card");
  pushCardElement.addEventListener("click", console.log);
})();
