import "./global-CJeEgyUn.js";
import { a as addIcons } from "./ix-icon.entry-DkCgv7Zc.js";
import { g as iconRocket, D as iconGlobe, d as iconHome } from "./index-B86ot3BK.js";
import "./init-DlgoXen4.js";
addIcons({
  iconHome,
  iconGlobe,
  iconRocket
});
(async () => {
  await window.customElements.whenDefined("ix-menu");
  const menu = document.querySelector("ix-menu");
  menu.breakpoints = ["medium"];
})();
