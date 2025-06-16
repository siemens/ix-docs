import "./global-9b2308da.js";
import { a as addIcons } from "./icon-1ecd1404-8007a342.js";
import "./init-394db2f8.js";
import { E as iconCapacity } from "./index-da7f59e9.js";
const card = "";
addIcons({
  iconCapacity
});
(async () => {
  await window.customElements.whenDefined("ix-card");
  const cardElement = document.querySelector("ix-card");
  cardElement.addEventListener("click", console.log);
})();
