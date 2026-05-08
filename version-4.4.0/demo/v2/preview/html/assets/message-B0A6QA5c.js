import "./global-7ZbTfMw3.js";
import "./index-B_6Kcb-H.js";
import { a as showMessage } from "./modal-BJAcx3Qd-CMIZ8YSL.js";
import "./init-6zSVdjuR.js";
import "./logical-filter-operator-BH3f5fa3-983MLV_l.js";
import "./upload-file-state-BGzrnl_l-DLdhtkd7.js";
import "./animation-BLaucX4x-BWLd_Wig.js";
import "./theme-switcher-CpQ8JvHL-B4B-3Xrp.js";
import "./typed-event-BdCnOrqW-CWsLM0S_.js";
import "./index-BBzEV-f4-ChQfUIyc.js";
const btn = document.querySelector("ix-button");
btn.addEventListener("click", async () => {
  (await showMessage.success(
    "Example title",
    "message",
    "Save",
    "Cancel",
    "payload:save",
    "payload:cancel"
  )).once(console.log);
});
