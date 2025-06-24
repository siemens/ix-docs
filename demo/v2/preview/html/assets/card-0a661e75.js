import "./global-bbf431ac.js";
import { a as addIcons } from "./icon-1ecd1404-a606277f.js";
import "./init-af7d69a1.js";
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
