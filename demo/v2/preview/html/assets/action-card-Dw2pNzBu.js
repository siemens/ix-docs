import "./global-CTsFSACc.js";
import { a as addIcons } from "./ix-icon.entry-CpsZxuQT.js";
import { y as iconRefresh } from "./index-B86ot3BK.js";
import "./init-D1W8HyUe.js";
addIcons({
  iconRefresh
});
(async () => {
  await window.customElements.whenDefined("ix-action-card");
  const pushCardElement = document.querySelector("ix-action-card");
  pushCardElement.addEventListener("click", console.log);
})();
