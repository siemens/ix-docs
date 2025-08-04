import "./global-DaepF4XF.js";
import { a as addIcons } from "./ix-icon.entry-5KbfRuSi.js";
import "./init-D14Q4inb.js";
import { q as iconInfo } from "./index-TgiuVEsn.js";
import { r as registerTheme } from "./index-CINcPcO9.js";
import "./index-izCz6i3r.js";
import { t as themeSwitcher } from "./theme-switcher-BTKjoGYj-DH1_ZAJ5.js";
import "./logical-filter-operator-BH3f5fa3-983MLV_l.js";
import "./flip-tile-state-BQ6999e5-4Q8a8MuB.js";
import "./upload-file-state-BGzrnl_l-DLdhtkd7.js";
import "./modal-DTeAn2rp-C0o4FQ8m.js";
import "./index-CB6MK0tq-MglExpDl.js";
import "./typed-event-BdCnOrqW-CWsLM0S_.js";
import "./animation-Dp15M30K-JKj3Fz7Y.js";
const echartsEmptyState = "";
addIcons({
  iconInfo
});
function initChart(theme, options2) {
  var myChart2 = echarts.init(document.querySelector("#main"), theme);
  myChart2.setOption(options2);
  return myChart2;
}
function toggleOverlay() {
  const overlay2 = document.getElementById("empty-state-container");
  if (overlay2.style.display === "block") {
    overlay2.style.display = "none";
  } else {
    overlay2.style.display = "block";
  }
}
async function loadData(chart) {
  toggleOverlay();
  chart.showLoading({
    text: "Loading...",
    textStyle: {
      fontSize: 30
    }
  });
  await new Promise((resolve) => setTimeout(resolve, 2e3));
  chart.hideLoading();
  toggleOverlay();
}
const data = {
  weekdays: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  value: []
};
const options = {
  xAxis: {
    type: "category",
    data: data.weekdays
  },
  yAxis: {
    type: "value"
  },
  series: [
    {
      data: data.value,
      type: "line"
    }
  ]
};
const overlay = document.getElementById("empty-state-container");
if (data.value.length === 0) {
  overlay.style.display = "block";
} else {
  overlay.style.display = "none";
}
registerTheme(echarts);
var myChart = initChart(themeSwitcher.getCurrentTheme(), options);
themeSwitcher.themeChanged.on((theme) => {
  myChart.dispose();
  myChart = initChart(theme, options);
});
(async function() {
  await window.customElements.whenDefined("ix-empty-state");
  const emptyState = document.querySelector("ix-empty-state");
  emptyState.addEventListener(
    "actionClick",
    (event) => loadData(myChart)
  );
})();
window.onresize = function() {
  myChart.resize();
};
