import "./global-9b2308da.js";
import { a as addIcons } from "./icon-1ecd1404-8007a342.js";
import "./init-394db2f8.js";
import { q as iconHome, B as iconGlobe, c as iconRocket } from "./index-da7f59e9.js";
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
