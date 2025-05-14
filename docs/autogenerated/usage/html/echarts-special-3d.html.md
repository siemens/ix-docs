```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>ECharts special 3d example</title>
    <link rel="stylesheet" href="./echarts-special-3d.css" />
    
    <script src="https://cdn.jsdelivr.net/npm/echarts@5.4.1/dist/echarts.min.js"></script>
    <script src="https://fastly.jsdelivr.net/npm/echarts-gl@2/dist/echarts-gl.min.js"></script>
    
  </head>
  <body class="theme-classic-dark">
    <div id="main" class="echarts"></div>

    <script type="module">
      import {
        getComputedCSSProperty,
        registerTheme,
      } from '@siemens/ix-echarts';
      import { themeSwitcher } from '@siemens/ix';

      function initChart(theme, options) {
        var myChart = echarts.init(document.querySelector('#main'), theme);
        myChart.setOption(options);

        return myChart;
      }

      function gridConfig() {
        return {
          type: 'value',
          axisLine: {
            lineStyle: {
              color: getComputedCSSProperty('chart-axes'),
            },
          },
          splitLine: {
            lineStyle: {
              color: getComputedCSSProperty('chart-grid-lines'),
            },
          },
          axisLabel: {
            color: getComputedCSSProperty('color-std-text'),
          },
        };
      }

      const options = {
        tooltip: {},
        visualMap: {
          show: false,
          dimension: 2,
          min: -1,
          max: 1,
        },
        xAxis3D: gridConfig(),
        yAxis3D: gridConfig(),
        zAxis3D: gridConfig(),
        grid3D: {
          viewControl: {
            projection: 'orthographic',
          },
        },
        series: [
          {
            type: 'surface',
            equation: {
              x: {
                step: 0.05,
              },
              y: {
                step: 0.05,
              },
              z: function (x, y) {
                if (Math.abs(x) < 0.1 && Math.abs(y) < 0.1) {
                  return '-';
                }
                return Math.sin(x * Math.PI) * Math.sin(y * Math.PI);
              },
            },
          },
        ],
      };

      // providing echarts is in this case optional
      registerTheme(echarts);

      var myChart = initChart(themeSwitcher.getCurrentTheme(), options);

      themeSwitcher.themeChanged.on((theme) => {
        myChart.dispose();
        myChart = initChart(theme, options);
      });

      window.onresize = function () {
        myChart.resize();
      };
    </script>

    <script type="module" src="./init.js"></script>
  </body>
</html>
```
