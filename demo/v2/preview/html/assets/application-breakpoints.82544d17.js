import "./global.a48637e8.js";
import "./init.3190bf0c.js";
(async () => {
  await window.customElements.whenDefined("ix-application");
  const nav = document.querySelector("ix-application");
  nav.breakpoints = ["md"];
  const radioButtons = document.querySelectorAll('input[type="radio"]');
  radioButtons.forEach(
    (rb) => rb.addEventListener("change", (event) => {
      nav.breakpoints = [event.target.value];
    })
  );
})();
