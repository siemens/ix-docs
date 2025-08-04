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
const echartsProgressArc = "";
function initChart(theme, options2) {
  var myChart2 = echarts.init(document.querySelector("#main"), theme);
  myChart2.setOption(options2);
  return myChart2;
}
const value = 68;
const options = {
  series: [
    {
      id: "1",
      type: "gauge",
      axisLine: {
        show: true,
        lineStyle: {
          width: 15,
          color: [[1, getComputedCSSProperty("color-neutral-40")]]
        }
      },
      axisTick: {
        show: false
      },
      radius: "100%",
      startAngle: 200,
      endAngle: -20,
      splitLine: {
        show: false
      },
      axisLabel: {
        show: false
      },
      progress: {
        show: true,
        overlap: false,
        width: 35,
        itemStyle: {
          borderMiterLimit: 16,
          color: getComputedCSSProperty("color-success")
        }
      },
      pointer: {
        show: false
      },
      data: [
        {
          value,
          detail: {
            offsetCenter: [0, 0],
            overflow: "break",
            fontSize: "2rem",
            fontWeight: "normal",
            color: getComputedCSSProperty("color-soft-text"),
            width: 250,
            lineHeight: 35,
            formatter: "{value} / 100 \n completed"
          },
          pointer: {
            show: false
          }
        }
      ]
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
