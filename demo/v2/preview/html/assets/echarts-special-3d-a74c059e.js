import "./global-bbf431ac.js";
import { r as registerTheme, g as getComputedCSSProperty } from "./index-606f8c8b.js";
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
const echartsSpecial3d = "";
function initChart(theme, options2) {
  var myChart2 = echarts.init(document.querySelector("#main"), theme);
  myChart2.setOption(options2);
  return myChart2;
}
function gridConfig() {
  return {
    type: "value",
    axisLine: {
      lineStyle: {
        color: getComputedCSSProperty("chart-axes")
      }
    },
    splitLine: {
      lineStyle: {
        color: getComputedCSSProperty("chart-grid-lines")
      }
    },
    axisLabel: {
      color: getComputedCSSProperty("color-std-text")
    }
  };
}
const options = {
  tooltip: {},
  visualMap: {
    show: false,
    dimension: 2,
    min: -1,
    max: 1
  },
  xAxis3D: gridConfig(),
  yAxis3D: gridConfig(),
  zAxis3D: gridConfig(),
  grid3D: {
    viewControl: {
      projection: "orthographic"
    }
  },
  series: [
    {
      type: "surface",
      equation: {
        x: {
          step: 0.05
        },
        y: {
          step: 0.05
        },
        z: function(x, y) {
          if (Math.abs(x) < 0.1 && Math.abs(y) < 0.1) {
            return "-";
          }
          return Math.sin(x * Math.PI) * Math.sin(y * Math.PI);
        }
      }
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
