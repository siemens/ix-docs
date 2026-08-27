import "./global-DsITLPyL.js";
import { a as addIcons } from "./ix-icon.entry-BcpFc0RJ.js";
import { y as iconRefresh } from "./index-lQqpelqO.js";
import "./init-385Sg7gS.js";
addIcons({
  iconRefresh
});
(async () => {
  await window.customElements.whenDefined("ix-action-card");
  const pushCardElement = document.querySelector("ix-action-card");
  pushCardElement.addEventListener("click", console.log);
})();
