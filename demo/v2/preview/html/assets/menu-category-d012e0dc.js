import "./global-bbf431ac.js";
import { a as addIcons } from "./icon-1ecd1404-a606277f.js";
import "./init-af7d69a1.js";
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
