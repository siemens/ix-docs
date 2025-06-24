import "./global-7dbfff85.js";
import { g as getComputedCSSProperty, r as registerTheme } from "./index-606f8c8b.js";
import "./index-6069fe5d.js";
import { t as themeSwitcher } from "./theme-switcher-CA3k28fo-1ea0d744.js";
import "./init-77cf101f.js";
import "./logical-filter-operator-BH3f5fa3-cf778d91.js";
import "./flip-tile-state-BQ6999e5-360bf4fb.js";
import "./upload-file-state-BGzrnl_l-efe6c7ce.js";
import "./modal-BldRA6Um-d6fd228a.js";
import "./index-DLTnniMb-a143a692.js";
import "./typed-event-BdCnOrqW-8705fd69.js";
import "./animation-Dp15M30K-84b87f65.js";
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
