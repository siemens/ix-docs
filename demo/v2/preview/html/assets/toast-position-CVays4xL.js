import "./global-C4tOo1JZ.js";
import { b as setToastPosition, t as toast } from "./index-8iGKQYNS.js";
import "./init-C6MyAp9T.js";
import "./modal-DaGSr1j4-BA-0pEIr.js";
import "./typed-event-CWshStHZ-DBYwEilm.js";
import "./animation-DNIQ2C1K-BYpQk_MF.js";
import "./index-DgUGsIlh-CLxQRaVd.js";
(async function() {
  await window.customElements.whenDefined("ix-toast-container");
  setToastPosition("top-right");
  document.getElementById("toastButton").addEventListener("click", () => {
    toast({
      message: "My toast message!"
    });
  });
})();
