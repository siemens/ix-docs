import "./global-7dbfff85.js";
import { a as addIcons } from "./icon-1ecd1404-d891335b.js";
import "./init-77cf101f.js";
import { z as iconRefresh } from "./index-da7f59e9.js";
addIcons({
  iconRefresh
});
(async () => {
  await window.customElements.whenDefined("ix-action-card");
  const pushCardElement = document.querySelector("ix-action-card");
  pushCardElement.addEventListener("click", console.log);
})();
