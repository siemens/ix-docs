import "./global-DsITLPyL.js";
import { a as showMessage } from "./index-t8Zui8Hu.js";
import "./init-385Sg7gS.js";
import "./modal-DaGSr1j4-BA-0pEIr.js";
import "./typed-event-CWshStHZ-DBYwEilm.js";
import "./animation-BqeSHO6C-CazTJry4.js";
import "./index-BeX6RWvV-CXzUIwMU.js";
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
