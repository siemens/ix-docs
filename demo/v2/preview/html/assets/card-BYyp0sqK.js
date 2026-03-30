import "./global-7ZbTfMw3.js";
import { a as addIcons } from "./ix-icon.entry-Co7qlYpz.js";
import { G as iconCapacity } from "./index-BWsIQ1EH.js";
import "./init-6zSVdjuR.js";
addIcons({
  iconCapacity
});
(async () => {
  await window.customElements.whenDefined("ix-card");
  const cardElement = document.querySelector("ix-card");
  cardElement.addEventListener("click", console.log);
})();
