import "./global-7dbfff85.js";
import { s as showModalLoading } from "./index-6069fe5d.js";
import "./init-77cf101f.js";
import "./logical-filter-operator-BH3f5fa3-cf778d91.js";
import "./flip-tile-state-BQ6999e5-360bf4fb.js";
import "./upload-file-state-BGzrnl_l-efe6c7ce.js";
import "./modal-BldRA6Um-d6fd228a.js";
import "./index-DLTnniMb-a143a692.js";
import "./typed-event-BdCnOrqW-8705fd69.js";
import "./animation-Dp15M30K-84b87f65.js";
import "./theme-switcher-CA3k28fo-1ea0d744.js";
const btn = document.querySelector("ix-button");
btn.addEventListener("click", () => {
  let count = 0;
  const progress = showModalLoading("Loading 0/2");
  const interval = setInterval(() => {
    count++;
    progress.update(`Loading ${count}/2`);
    if (count === 2) {
      progress.finish("Done");
      clearInterval(interval);
    }
  }, 1e3);
});
