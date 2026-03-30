import "./global-7ZbTfMw3.js";
import { a as setToastPosition, t as toast } from "./index-B_6Kcb-H.js";
import "./init-6zSVdjuR.js";
import "./logical-filter-operator-BH3f5fa3-983MLV_l.js";
import "./upload-file-state-BGzrnl_l-DLdhtkd7.js";
import "./modal-BJAcx3Qd-CMIZ8YSL.js";
import "./index-BBzEV-f4-ChQfUIyc.js";
import "./typed-event-BdCnOrqW-CWsLM0S_.js";
import "./animation-BLaucX4x-BWLd_Wig.js";
import "./theme-switcher-CpQ8JvHL-B4B-3Xrp.js";
(async function() {
  await window.customElements.whenDefined("ix-toast-container");
  setToastPosition("top-right");
  document.getElementById("toastButton").addEventListener("click", () => {
    toast({
      message: "My toast message!"
    });
  });
})();
