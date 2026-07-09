import "./global-C4tOo1JZ.js";
import { a as addIcons } from "./ix-icon.entry-Cowm6yyV.js";
import { g as iconRocket, D as iconGlobe, d as iconHome } from "./index-BWsIQ1EH.js";
import "./init-C6MyAp9T.js";
addIcons({
  iconHome,
  iconGlobe,
  iconRocket
});
(async () => {
  await window.customElements.whenDefined("ix-application");
  const app = document.querySelector("ix-application");
  if (app) {
    app.breakpoints = ["md"];
  }
})();
