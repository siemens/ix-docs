import "./global.1f5cc68d.js";
import { s as showModalLoading } from "./index.76650ad5.js";
import "./init.d2f0b7c3.js";
import "./logical-filter-operator-BH3f5fa3.777c0249.js";
import "./flip-tile-state-BQ6999e5.70579bb3.js";
import "./upload-file-state-BGzrnl_l.166f4809.js";
import "./modal-DUew4SCE.40a294ca.js";
import "./typed-event-BdCnOrqW.51d2f30a.js";
import "./animation-Dp15M30K.7b5f0f8a.js";
import "./theme-switcher-CA3k28fo.db6435f7.js";
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
