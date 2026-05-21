import "./global-DjWMysHf.js";
import { a as addIcons } from "./ix-icon.entry-C28RAXb9.js";
import { y as iconRefresh } from "./index-vnsUAEMY.js";
import "./init-CkDeqDdJ.js";
addIcons({
  iconRefresh
});
(async () => {
  await window.customElements.whenDefined("ix-action-card");
  const pushCardElement = document.querySelector("ix-action-card");
  pushCardElement.addEventListener("click", console.log);
})();
