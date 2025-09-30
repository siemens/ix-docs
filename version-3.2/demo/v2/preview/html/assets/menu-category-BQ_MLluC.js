import "./global-DaepF4XF.js";
import { a as addIcons } from "./ix-icon.entry-5KbfRuSi.js";
import "./init-D14Q4inb.js";
import { d as iconRocket, B as iconGlobe, r as iconHome } from "./index-TgiuVEsn.js";
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
