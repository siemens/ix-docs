import "./global-7dbfff85.js";
import { r as registerTheme } from "./index-606f8c8b.js";
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
const echartsSpecialToolbox = "";
const data = {
  months: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  values: [150, 230, 224, 218, 135, 147, 260]
};
function initChart(theme, options2) {
  var myChart2 = echarts.init(document.querySelector("#main"), theme);
  myChart2.setOption(options2);
  return myChart2;
}
const options = {
  toolbox: {
    feature: {
      dataZoom: {
        yAxisIndex: "none"
      },
      restore: {},
      saveAsImage: {},
      magicType: {
        type: ["line", "bar"]
      },
      dataView: {
        show: true
      }
    }
  },
  xAxis: {
    type: "category",
    data: data.months
  },
  yAxis: {
    type: "value"
  },
  series: [
    {
      data: data.values,
      type: "line",
      step: "end"
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
