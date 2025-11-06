import "./global-CTsFSACc.js";
import { a as addIcons } from "./ix-icon.entry-CpsZxuQT.js";
import { z as iconNetworkDevice, A as iconPlant, B as iconPiechart, d as iconHome, C as iconAlarmBell } from "./index-B86ot3BK.js";
import "./init-D1W8HyUe.js";
addIcons({
  iconAlarmBell,
  iconHome,
  iconPiechart,
  iconPlant,
  iconNetworkDevice
});
(async function() {
  await window.customElements.whenDefined("ix-menu");
  const menuItems = document.querySelectorAll("ix-menu-item");
  function registerClickListener(itemElement) {
    itemElement.addEventListener("click", () => {
      for (const item of menuItems) {
        item.removeAttribute("active");
      }
      itemElement.setAttribute("active", "");
      document.getElementById("contentHeaderId").setAttribute(
        "header-title",
        `Example ${itemElement.innerText.toLowerCase()} content`
      );
    });
  }
  for (const element of menuItems) {
    registerClickListener(element);
  }
})();
