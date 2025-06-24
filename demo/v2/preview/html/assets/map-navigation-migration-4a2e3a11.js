import "./global-7dbfff85.js";
import { a as addIcons } from "./icon-1ecd1404-d891335b.js";
import "./init-77cf101f.js";
import { d as iconBulb } from "./index-da7f59e9.js";
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
