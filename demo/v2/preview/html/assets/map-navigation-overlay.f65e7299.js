import "./global.a48637e8.js";
import "./init.3190bf0c.js";
const mapNav = document.querySelector("ix-map-navigation");
const buttonOpenOverlay = document.getElementById("btn-open-overlay");
buttonOpenOverlay.addEventListener("click", () => {
  const overlay = document.createElement("ix-map-navigation-overlay");
  overlay.slot = "overlay";
  overlay.name = "Custom overlay";
  overlay.icon = "bulb";
  const overlayContent = document.createElement("ix-content");
  overlayContent.textContent = "Overlay content";
  overlay.appendChild(overlayContent);
  mapNav.appendChild(overlay);
  overlay.addEventListener("closeClick", (e) => {
    overlay.parentNode.removeChild(overlay);
  });
});
