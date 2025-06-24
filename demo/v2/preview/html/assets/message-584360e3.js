import "./global-7dbfff85.js";
import "./index-6069fe5d.js";
import { a as showMessage } from "./modal-BldRA6Um-d6fd228a.js";
import "./init-77cf101f.js";
import "./logical-filter-operator-BH3f5fa3-cf778d91.js";
import "./flip-tile-state-BQ6999e5-360bf4fb.js";
import "./upload-file-state-BGzrnl_l-efe6c7ce.js";
import "./animation-Dp15M30K-84b87f65.js";
import "./theme-switcher-CA3k28fo-1ea0d744.js";
import "./typed-event-BdCnOrqW-8705fd69.js";
import "./index-DLTnniMb-a143a692.js";
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
