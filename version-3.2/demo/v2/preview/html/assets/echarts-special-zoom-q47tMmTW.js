import "./global-DaepF4XF.js";
import { g as getComputedCSSProperty, r as registerTheme } from "./index-CINcPcO9.js";
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
const echartsSpecialZoom = "";
function initChart(theme, options2) {
  var myChart2 = echarts.init(document.querySelector("#main"), theme);
  myChart2.setOption(options2);
  return myChart2;
}
let base = +new Date(1968, 9, 3);
let oneDay = 24 * 3600 * 1e3;
let date = [];
let data = [Math.random() * 300];
for (let i = 1; i < 2e4; i++) {
  var now = new Date(base += oneDay);
  date.push(
    [now.getFullYear(), now.getMonth() + 1, now.getDate()].join("/")
  );
  data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
}
const options = {
  toolbox: {
    feature: {
      dataZoom: {
        yAxisIndex: "none"
      }
    }
  },
  xAxis: {
    type: "category",
    boundaryGap: false,
    data: date
  },
  yAxis: {
    type: "value",
    boundaryGap: [0, "100%"]
  },
  dataZoom: [
    {
      type: "inside",
      start: 0,
      end: 10
    },
    {
      start: 0,
      end: 10
    }
  ],
  series: [
    {
      name: "Synthetic data",
      type: "line",
      symbol: "none",
      sampling: "lttb",
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: getComputedCSSProperty("color-primary")
          },
          {
            offset: 1,
            color: "transparent"
          }
        ])
      },
      data
    }
  ]
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
