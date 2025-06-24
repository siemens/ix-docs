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
const echartsLineMultipleYAxis = "";
function initChart(theme, options2) {
  var myChart2 = echarts.init(document.querySelector("#main"), theme);
  myChart2.setOption(options2);
  return myChart2;
}
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
const data = {
  evaporation: months.map(() => (Math.random() * 100).toFixed(2)),
  precipitation: months.map(() => (Math.random() * 200).toFixed(2)),
  temperature: months.map(() => (Math.random() * 30).toFixed(2))
};
const themeChartList = Array.from(
  { length: 17 },
  (_, i) => getComputedCSSProperty(`chart-${i + 1}`)
);
function createYAxis(name, position, color, formatter, offset) {
  return {
    type: "value",
    name,
    position,
    offset,
    axisLabel: {
      formatter
    },
    axisTick: {
      lineStyle: {
        color
      }
    },
    axisLine: {
      lineStyle: {
        color
      }
    }
  };
}
function createSeries(name, yAxisIndex, data2, color) {
  return {
    name,
    type: "line",
    yAxisIndex,
    data: data2,
    lineStyle: {
      color
    },
    itemStyle: {
      color
    }
  };
}
const options = {
  tooltip: {
    trigger: "axis",
    axisPointer: { type: "cross" }
  },
  grid: {
    right: "20%"
  },
  legend: {
    show: true,
    bottom: "0",
    left: "0"
  },
  xAxis: [
    {
      type: "category",
      axisTick: { alignWithLabel: true },
      data: months
    }
  ],
  yAxis: [
    createYAxis("Evaporation", "right", themeChartList[0], "{value} ml"),
    createYAxis(
      "Precipitation",
      "right",
      themeChartList[7],
      "{value} ml",
      80
    ),
    createYAxis("Temperature", "left", themeChartList[12], "{value} °C")
  ],
  series: [
    createSeries("Evaporation", 0, data.evaporation, themeChartList[0]),
    createSeries(
      "Precipitation",
      1,
      data.precipitation,
      themeChartList[7]
    ),
    createSeries("Temperature", 2, data.temperature, themeChartList[12])
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
