import "./global-bbf431ac.js";
import { g as getComputedCSSProperty, r as registerTheme } from "./index-606f8c8b.js";
import "./index-70359acc.js";
import { t as themeSwitcher } from "./theme-switcher-CA3k28fo-1ea0d744.js";
import "./init-af7d69a1.js";
import "./logical-filter-operator-BH3f5fa3-cf778d91.js";
import "./flip-tile-state-BQ6999e5-360bf4fb.js";
import "./upload-file-state-BGzrnl_l-efe6c7ce.js";
import "./modal-WcMUMcY_-9f632f6e.js";
import "./index-C0zeM1D4-b0cf2da8.js";
import "./typed-event-BdCnOrqW-8705fd69.js";
import "./animation-Dp15M30K-84b87f65.js";
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
