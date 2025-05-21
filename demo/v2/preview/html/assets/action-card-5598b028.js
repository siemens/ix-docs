import "./global-12d56384.js";
import { a as addIcons } from "./icon-1ecd1404-317dae9b.js";
import "./init-8d433615.js";
import { z as iconRefresh } from "./index-da7f59e9.js";
addIcons({
  iconRefresh
});
(async () => {
  await window.customElements.whenDefined("ix-action-card");
  const pushCardElement = document.querySelector("ix-action-card");
  pushCardElement.addEventListener("click", console.log);
})();
