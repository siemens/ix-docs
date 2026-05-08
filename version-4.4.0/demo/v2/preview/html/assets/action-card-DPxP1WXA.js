import "./global-7ZbTfMw3.js";
import { a as addIcons } from "./ix-icon.entry-Co7qlYpz.js";
import { y as iconRefresh } from "./index-BWsIQ1EH.js";
import "./init-6zSVdjuR.js";
addIcons({
  iconRefresh
});
(async () => {
  await window.customElements.whenDefined("ix-action-card");
  const pushCardElement = document.querySelector("ix-action-card");
  pushCardElement.addEventListener("click", console.log);
})();
