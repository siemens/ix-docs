import "./global-DaepF4XF.js";
import { a as addIcons } from "./ix-icon.entry-5KbfRuSi.js";
import "./init-D14Q4inb.js";
import { z as iconRefresh } from "./index-TgiuVEsn.js";
addIcons({
  iconRefresh
});
(async () => {
  await window.customElements.whenDefined("ix-action-card");
  const pushCardElement = document.querySelector("ix-action-card");
  pushCardElement.addEventListener("click", console.log);
})();
