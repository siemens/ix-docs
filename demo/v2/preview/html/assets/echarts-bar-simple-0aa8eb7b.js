import "./global-bbf431ac.js";
import { r as registerTheme } from "./index-606f8c8b.js";
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
const echartsBarSimple = "";
function initChart(theme, options2) {
  var myChart2 = echarts.init(document.querySelector("#main"), theme);
  myChart2.setOption(options2);
  return myChart2;
}
const data = {
  products: [
    "Product A",
    "Product B",
    "Product C",
    "Product D",
    "Product E",
    "Product F"
  ],
  sales: [10.3, 9.2, 7.3, 6.4, 6.2, 4.4]
};
const options = {
  xAxis: {
    data: data.products,
    name: "Product",
    nameLocation: "end"
  },
  yAxis: {
    name: "Number of sold products \n (in Mio)",
    nameLocation: "end"
  },
  legend: {
    show: true
  },
  series: [
    {
      data: data.sales,
      type: "bar"
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
