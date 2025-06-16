import "./global-9b2308da.js";
import { a as addIcons } from "./icon-1ecd1404-8007a342.js";
import "./init-394db2f8.js";
import { z as iconRefresh } from "./index-da7f59e9.js";
addIcons({
  iconRefresh
});
(async () => {
  await window.customElements.whenDefined("ix-action-card");
  const pushCardElement = document.querySelector("ix-action-card");
  pushCardElement.addEventListener("click", console.log);
})();
