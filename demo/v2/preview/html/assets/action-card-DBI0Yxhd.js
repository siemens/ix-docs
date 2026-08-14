import "./global-BTgWS9s6.js";
import { a as addIcons } from "./ix-icon.entry-1fVg5y2r.js";
import { y as iconRefresh } from "./index-lQqpelqO.js";
import "./init-sssqTNLl.js";
addIcons({
  iconRefresh
});
(async () => {
  await window.customElements.whenDefined("ix-action-card");
  const pushCardElement = document.querySelector("ix-action-card");
  pushCardElement.addEventListener("click", console.log);
})();
