import "./global-DaepF4XF.js";
import "./index-izCz6i3r.js";
import { a as showMessage } from "./modal-DTeAn2rp-C0o4FQ8m.js";
import "./init-D14Q4inb.js";
import "./logical-filter-operator-BH3f5fa3-983MLV_l.js";
import "./flip-tile-state-BQ6999e5-4Q8a8MuB.js";
import "./upload-file-state-BGzrnl_l-DLdhtkd7.js";
import "./animation-Dp15M30K-JKj3Fz7Y.js";
import "./theme-switcher-BTKjoGYj-DH1_ZAJ5.js";
import "./typed-event-BdCnOrqW-CWsLM0S_.js";
import "./index-CB6MK0tq-MglExpDl.js";
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
