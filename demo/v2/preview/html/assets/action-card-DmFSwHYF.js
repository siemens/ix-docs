import "./global-CJeEgyUn.js";
import { a as addIcons } from "./ix-icon.entry-DkCgv7Zc.js";
import { y as iconRefresh } from "./index-B86ot3BK.js";
import "./init-DlgoXen4.js";
addIcons({
  iconRefresh
});
(async () => {
  await window.customElements.whenDefined("ix-action-card");
  const pushCardElement = document.querySelector("ix-action-card");
  pushCardElement.addEventListener("click", console.log);
})();
