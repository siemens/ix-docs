import "./global-7ZbTfMw3.js";
import { a as addIcons } from "./ix-icon.entry-Co7qlYpz.js";
import { K as iconUndo } from "./index-BWsIQ1EH.js";
import { t as toast } from "./index-B_6Kcb-H.js";
import "./init-6zSVdjuR.js";
import "./logical-filter-operator-BH3f5fa3-983MLV_l.js";
import "./upload-file-state-BGzrnl_l-DLdhtkd7.js";
import "./modal-BJAcx3Qd-CMIZ8YSL.js";
import "./index-BBzEV-f4-ChQfUIyc.js";
import "./typed-event-BdCnOrqW-CWsLM0S_.js";
import "./animation-BLaucX4x-BWLd_Wig.js";
import "./theme-switcher-CpQ8JvHL-B4B-3Xrp.js";
addIcons({
  iconUndo
});
(async function() {
  await window.customElements.whenDefined("ix-toast-container");
  document.getElementById("toastMessageButton").addEventListener("click", async () => {
    const customModal = document.createElement("div");
    const template = document.getElementById("custom-toast-message");
    const templateContent = template.content.cloneNode(true);
    customModal.appendChild(templateContent);
    const customModalAction = document.createElement("div");
    const templateAction = document.getElementById("custom-toast-action");
    const templateContentAction = templateAction.content.cloneNode(true);
    customModalAction.appendChild(templateContentAction);
    await toast({
      title: "Toast headline",
      message: customModal,
      type: "success"
    });
  });
  document.getElementById("toastActionButton").addEventListener("click", async () => {
    const customModal = document.createElement("div");
    const template = document.getElementById("custom-toast-message");
    const templateContent = template.content.cloneNode(true);
    customModal.appendChild(templateContent);
    const customModalAction = document.createElement("div");
    const templateAction = document.getElementById("custom-toast-action");
    const templateContentAction = templateAction.content.cloneNode(true);
    customModalAction.appendChild(templateContentAction);
    const instance = await toast({
      title: "Toast headline",
      message: customModal,
      action: customModalAction
    });
    customModal.querySelector("ix-button").addEventListener("click", () => {
      instance.close();
    });
  });
})();
