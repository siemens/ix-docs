import "./global-C4tOo1JZ.js";
import { a as addIcons } from "./ix-icon.entry-Cowm6yyV.js";
import { y as iconRefresh } from "./index-BWsIQ1EH.js";
import "./init-C6MyAp9T.js";
addIcons({
  iconRefresh
});
(async () => {
  await window.customElements.whenDefined("ix-action-card");
  const pushCardElement = document.querySelector("ix-action-card");
  pushCardElement.addEventListener("click", console.log);
})();
