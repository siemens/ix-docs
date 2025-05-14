import "./global.a48637e8.js";
import { a as addIcons } from "./icon-1ecd1404.6eb90fe2.js";
import "./init.3190bf0c.js";
import { f as iconBulb } from "./index.4b950771.js";
const mapNavigationMigration = "";
addIcons({
  iconBulb
});
const overlay = document.getElementById("overlay");
const buttonOpenOverlay = document.getElementById("btn-open-overlay");
let expanded = overlay.getAttribute("expanded") === "true";
overlay.addEventListener("expandedChanged", (e) => {
  expanded = e.detail.expanded;
});
buttonOpenOverlay.addEventListener("click", () => {
  expanded = !expanded;
  overlay.setAttribute("expanded", expanded);
});
