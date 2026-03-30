import "./global-7ZbTfMw3.js";
import { s as showModalLoading } from "./index-B_6Kcb-H.js";
import "./init-6zSVdjuR.js";
import "./logical-filter-operator-BH3f5fa3-983MLV_l.js";
import "./upload-file-state-BGzrnl_l-DLdhtkd7.js";
import "./modal-BJAcx3Qd-CMIZ8YSL.js";
import "./index-BBzEV-f4-ChQfUIyc.js";
import "./typed-event-BdCnOrqW-CWsLM0S_.js";
import "./animation-BLaucX4x-BWLd_Wig.js";
import "./theme-switcher-CpQ8JvHL-B4B-3Xrp.js";
const btn = document.querySelector("ix-button");
btn.addEventListener("click", () => {
  let count = 0;
  const progress = showModalLoading({ message: "Loading 0/2" });
  const interval = setInterval(() => {
    count++;
    progress.update(`Loading ${count}/2`);
    if (count === 2) {
      progress.finish("Done");
      clearInterval(interval);
    }
  }, 1e3);
});
