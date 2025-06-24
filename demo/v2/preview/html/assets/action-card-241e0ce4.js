import "./global-bbf431ac.js";
import { a as addIcons } from "./icon-1ecd1404-a606277f.js";
import "./init-af7d69a1.js";
import { z as iconRefresh } from "./index-da7f59e9.js";
addIcons({
  iconRefresh
});
(async () => {
  await window.customElements.whenDefined("ix-action-card");
  const pushCardElement = document.querySelector("ix-action-card");
  pushCardElement.addEventListener("click", console.log);
})();
