import "./global-DaepF4XF.js";
import { r as registerTheme } from "./index-CINcPcO9.js";
import "./index-izCz6i3r.js";
import { t as themeSwitcher } from "./theme-switcher-BTKjoGYj-DH1_ZAJ5.js";
import "./init-D14Q4inb.js";
import "./logical-filter-operator-BH3f5fa3-983MLV_l.js";
import "./flip-tile-state-BQ6999e5-4Q8a8MuB.js";
import "./upload-file-state-BGzrnl_l-DLdhtkd7.js";
import "./modal-DTeAn2rp-C0o4FQ8m.js";
import "./index-CB6MK0tq-MglExpDl.js";
import "./typed-event-BdCnOrqW-CWsLM0S_.js";
import "./animation-Dp15M30K-JKj3Fz7Y.js";
const echartsBarHorizontalStacked = "";
function initChart(theme, options2) {
  var myChart2 = echarts.init(document.querySelector("#main"), theme);
  myChart2.setOption(options2);
  return myChart2;
}
const data = {
  years: ["2023", "2022", "2021", "2020", "2019"],
  salesEurope: [87, 22, 28, 43, 79],
  salesUS: [35, 24, 33, 5, 40],
  salesChina: [19, 44, 23, 5, 10]
};
const seriesData = [
  { name: "Europe", data: data.salesEurope },
  { name: "U.S", data: data.salesUS },
  { name: "China", data: data.salesChina }
];
const series = seriesData.map(({ name, data: data2 }) => ({
  name,
  data: data2,
  type: "bar",
  stack: "x"
}));
const options = {
  xAxis: {
    type: "value",
    name: "Revenue (in Millions of USD)",
    nameLocation: "middle",
    nameGap: 40
  },
  yAxis: {
    type: "category",
    data: data.years,
    name: "Years",
    nameLocation: "end"
  },
  legend: {
    show: true,
    bottom: "0",
    left: "0"
  },
  series
};
registerTheme(echarts);
var myChart = initChart(themeSwitcher.getCurrentTheme(), options);
themeSwitcher.themeChanged.on((theme) => {
  myChart.dispose();
  myChart = initChart(theme, options);
});
window.onresize = function() {
  myChart.resize();
};
