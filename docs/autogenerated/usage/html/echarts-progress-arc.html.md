```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>ECharts progress arc example</title>
    <link rel="stylesheet" href="./echarts-progress-arc.css" />
    
    <script src="https://cdn.jsdelivr.net/npm/echarts@5.4.1/dist/echarts.min.js"></script>
    
  </head>
  <body class="theme-classic-dark">
    <div id="main" class="echarts-gauge"></div>

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

      const value = 68;

      const options = {
        series: [
          {
            id: '1',
            type: 'gauge',
            axisLine: {
              show: true,
              lineStyle: {
                width: 15,
                color: [[1, getComputedCSSProperty('color-neutral-40')]],
              },
            },
            axisTick: {
              show: false,
            },
            radius: '100%',
            startAngle: 200,
            endAngle: -20,
            splitLine: {
              show: false,
            },
            axisLabel: {
              show: false,
            },
            progress: {
              show: true,
              overlap: false,
              width: 35,
              itemStyle: {
                borderMiterLimit: 16,
                color: getComputedCSSProperty('color-success'),
              },
            },
            pointer: {
              show: false,
            },
            data: [
              {
                value: value,
                detail: {
                  offsetCenter: [0, 0],
                  overflow: 'break',
                  fontSize: '2rem',
                  fontWeight: 'normal',
                  color: getComputedCSSProperty('color-soft-text'),
                  width: 250,
                  lineHeight: 35,
                  formatter: '{value} / 100 \n completed',
                },
                pointer: {
                  show: false,
                },
              },
            ],
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
