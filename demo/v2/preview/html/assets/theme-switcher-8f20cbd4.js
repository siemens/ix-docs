import "./global-12d56384.js";
import "./index-f166e813.js";
import { t as themeSwitcher$1 } from "./theme-switcher-CA3k28fo-1ea0d744.js";
import "./init-8d433615.js";
import "./logical-filter-operator-BH3f5fa3-cf778d91.js";
import "./flip-tile-state-BQ6999e5-360bf4fb.js";
import "./upload-file-state-BGzrnl_l-efe6c7ce.js";
import "./modal-hSHQdjTH-a56a8fa0.js";
import "./index-v48bcPT9-71a9ba2b.js";
import "./typed-event-BdCnOrqW-8705fd69.js";
import "./animation-Dp15M30K-84b87f65.js";
const themeSwitcher = "";
(async function() {
  const themes = ["theme-classic-light", "theme-classic-dark"];
  let selectedTheme = themes[1];
  setTimeout(() => {
    themeSwitcher$1.setTheme(selectedTheme);
  });
  const toggleModeButton = document.getElementById("toggle-mode");
  toggleModeButton.addEventListener("click", () => {
    themeSwitcher$1.toggleMode();
  });
  const themeSelect = document.getElementById("select-theme");
  themes.forEach((theme) => {
    const item = document.createElement("ix-select-item");
    item.label = theme;
    item.value = theme;
    themeSelect.appendChild(item);
  });
  themeSelect.value = selectedTheme;
  themeSelect.addEventListener("valueChange", ({ detail: theme }) => {
    themeSwitcher$1.setTheme(theme);
    selectedTheme = theme;
  });
  const toggleSystem = document.getElementById("system");
  toggleSystem.addEventListener("change", ({ target }) => {
    if (target.checked) {
      themeSwitcher$1.setVariant();
      return;
    }
    themeSwitcher$1.setTheme(selectedTheme);
  });
})();
