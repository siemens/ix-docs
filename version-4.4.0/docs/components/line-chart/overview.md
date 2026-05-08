# Line chart

> Line charts display data as a series of data points connected by straight line segments. Line charts are commonly used to visualize trends over time or compare two variables. We typically use line charts to visualize continuous data.

# Line chart - Code

## Basic

Basic line charts use a series of data points connected by straight lines to show changes in values, making it easy to identify patterns, trends and fluctuations. Line charts are particularly effective for displaying continuous data, such as stock prices, temperature changes or sales figures. Their simplicity and clarity make them a popular choice for dashboards, where understanding data trends is essential.

### React Examples

#### echarts-line-simple.tsx
```tsx
import './echarts-line-simple.scoped.css';

import { useEffect, useState } from 'react';
import { registerTheme } from '@siemens/ix-echarts';
import { themeSwitcher } from '@siemens/ix';
import ReactEcharts from 'echarts-for-react';

import { EChartsOption } from 'echarts';

export default function EchartsLineSimple() {
  registerTheme(echarts);

  const [theme, setTheme] = useState(themeSwitcher.getCurrentTheme());

  useEffect(() => {
    themeSwitcher.themeChanged.on((theme: string) => {
      setTheme(theme);
    });
  }, []);

  const data = {
    weekdays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    value: [150, 230, 224, 218, 135, 147, 260],
  };

  const options: EChartsOption = {
    xAxis: {
      type: 'category',
      data: data.weekdays,
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: data.value,
        type: 'line',
      },
    ],
  };

  return (
    <ReactEcharts
      style={{ height: '40rem' }}
      option={options}
      theme={theme}
      className="echarts"
    />
  );
}
```

#### echarts-line-simple.scoped.css
```css
.echarts {
  position: relative;
  width: 100%;
  height: 40rem;
  padding-top: 1rem;
}
```

### Angular Examples

#### echarts-line-simple.ts
```ts
import { Component, OnInit } from '@angular/core';
import { registerTheme } from '@siemens/ix-echarts';
import { themeSwitcher } from '@siemens/ix';

import { EChartsOption } from 'echarts';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './echarts-line-simple.html',
  styleUrls: ['./echarts-line-simple.css'],
})
export default class EchartsLineSimple implements OnInit {
  theme = themeSwitcher.getCurrentTheme();

  data = {
    weekdays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    value: [150, 230, 224, 218, 135, 147, 260],
  };

  value = 60;

  options: EChartsOption = {
    xAxis: {
      type: 'category',
      data: this.data.weekdays,
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: this.data.value,
        type: 'line',
      },
    ],
  };

  ngOnInit() {
    registerTheme(echarts);

    themeSwitcher.themeChanged.on((theme: string) => {
      this.theme = theme;
    });
  }
}
```

#### echarts-line-simple.html
```html
<div
  echarts
  [options]="options"
  [theme]="theme"
  class="echarts"
></div>
```

#### echarts-line-simple.css
```css
.echarts {
  position: relative;
  width: 100%;
  height: 40rem;
  padding-top: 1rem;
}
```

### Angular Standalone Examples

#### echarts-line-simple.ts
```ts
import { Component, OnInit } from '@angular/core';
import { NgxEchartsDirective, provideEchartsCore } from 'ngx-echarts';

import { registerTheme } from '@siemens/ix-echarts';
import { themeSwitcher } from '@siemens/ix';

import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-example',
  providers: [provideEchartsCore({ echarts })],
  imports: [NgxEchartsDirective],
  templateUrl: './echarts-line-simple.html',
  styleUrls: ['./echarts-line-simple.css'],
})
export default class EchartsLineSimple implements OnInit {
  theme = themeSwitcher.getCurrentTheme();

  data = {
    weekdays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    value: [150, 230, 224, 218, 135, 147, 260],
  };

  value = 60;

  options: EChartsOption = {
    xAxis: {
      type: 'category',
      data: this.data.weekdays,
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: this.data.value,
        type: 'line',
      },
    ],
  };

  ngOnInit() {
    registerTheme(echarts);

    themeSwitcher.themeChanged.on((theme: string) => {
      this.theme = theme;
    });
  }
}
```

#### echarts-line-simple.html
```html
<div echarts [options]="options" [theme]="theme" class="echarts"></div>
```

#### echarts-line-simple.css
```css
.echarts {
  position: relative;
  width: 100%;
  height: 40rem;
  padding-top: 1rem;
}
```

### Vue Examples

#### echarts-line-simple.vue
```vue
<script setup lang="ts">
import { ref } from 'vue';
import { registerTheme } from '@siemens/ix-echarts';
import { themeSwitcher } from '@siemens/ix';
import VueECharts from 'vue-echarts';

import { EChartsOption } from 'echarts';

echarts.use([
  components.TooltipComponent,
  components.LegendComponent,
  components.GridComponent,
  components.MarkLineComponent,
  charts.LineChart,
  renderer.CanvasRenderer,
]);

registerTheme(echarts);

const theme = ref(themeSwitcher.getCurrentTheme());

themeSwitcher.themeChanged.on((newTheme: string) => {
  theme.value = newTheme;
});

const data = {
  weekdays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  value: [150, 230, 224, 218, 135, 147, 260],
};

const value = 60;

const options = {
  xAxis: {
    type: 'category',
    data: data.weekdays,
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: data.value,
      type: 'line',
    },
  ],
} as EChartsOption;
</script>

<style scoped src="./echarts-line-simple.css"></style>

<template>
  <VueECharts :theme="theme" :option="options" autoresize></VueECharts>
</template>
```

#### echarts-line-simple.css
```css
.echarts {
  position: relative;
  width: 100%;
  height: 40rem;
  padding-top: 1rem;
}
```

## Multi-y-axis line charts

Multi-y-axis line charts are used to compare multiple data series that have different scales or units of measurement. By using multiple y-axes, you can display data with different ranges on the same chart, making it easier to compare trends and relationships between variables. Multi-y-axis line charts are particularly useful when visualizing data with distinct patterns or trends.

### React Examples

#### echarts-line-multiple-y-axis.tsx
```tsx
import './echarts-line-multiple-y-axis.scoped.css';

import { useEffect, useState } from 'react';
import { getComputedCSSProperty, registerTheme } from '@siemens/ix-echarts';
import { themeSwitcher } from '@siemens/ix';
import ReactEcharts from 'echarts-for-react';

import { EChartsOption, SeriesOption } from 'echarts';
import { YAXisOption } from 'echarts/types/dist/shared';

export default function EchartsLineMultipleYAxis() {
  registerTheme(echarts);

  const [theme, setTheme] = useState(themeSwitcher.getCurrentTheme());

  useEffect(() => {
    themeSwitcher.themeChanged.on((theme: string) => {
      setTheme(theme);
    });
  }, []);

  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const data = {
    evaporation: months.map(() => (Math.random() * 100).toFixed(2)),
    precipitation: months.map(() => (Math.random() * 200).toFixed(2)),
    temperature: months.map(() => (Math.random() * 30).toFixed(2)),
  };

  const themeChartList = Array.from({ length: 17 }, (_, i) =>
    getComputedCSSProperty(`chart-${i + 1}`)
  );

  function createYAxis(
    name: string,
    position: 'left' | 'right',
    color: string,
    formatter: string,
    offset: number = 0
  ): YAXisOption {
    return {
      type: 'value',
      name: name,
      position: position,
      offset: offset,
      alignTicks: true,
      axisLabel: {
        formatter: formatter,
      },
      axisTick: {
        lineStyle: {
          color: color,
        },
      },
      axisLine: {
        lineStyle: {
          color: color,
        },
      },
    };
  }

  function createSeries(
    name: string,
    yAxisIndex: number,
    data: any,
    color: string
  ): SeriesOption {
    return {
      name: name,
      type: 'line',
      yAxisIndex: yAxisIndex,
      data: data,
      lineStyle: {
        color: color,
      },
      itemStyle: {
        color: color,
      },
    };
  }

  const options: EChartsOption = {
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'cross' },
    },
    grid: {
      right: '20%',
    },
    legend: {
      show: true,
      bottom: '0',
      left: '0',
    },
    xAxis: [
      {
        type: 'category',
        axisTick: { alignWithLabel: true },
        data: months,
      },
    ],
    yAxis: [
      createYAxis('Evaporation', 'right', themeChartList[0], '{value} ml'),
      createYAxis(
        'Precipitation',
        'right',
        themeChartList[7],
        '{value} ml',
        80
      ),
      createYAxis('Temperature', 'left', themeChartList[12], '{value} °C'),
    ],
    series: [
      createSeries('Evaporation', 0, data.evaporation, themeChartList[0]),
      createSeries('Precipitation', 1, data.precipitation, themeChartList[7]),
      createSeries('Temperature', 2, data.temperature, themeChartList[12]),
    ],
  };

  return <ReactEcharts option={options} theme={theme} className="echarts" />;
}
```

#### echarts-line-multiple-y-axis.scoped.css
```css
.echarts {
  position: relative;
  width: 100%;
  height: 40rem;
  padding-top: 1rem;
}
```

### Angular Examples

#### echarts-line-multiple-y-axis.ts
```ts
import { Component, OnInit } from '@angular/core';
import { getComputedCSSProperty, registerTheme } from '@siemens/ix-echarts';
import { themeSwitcher } from '@siemens/ix';

import { EChartsOption, SeriesOption } from 'echarts';
import { YAXisOption } from 'echarts/types/dist/shared';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './echarts-line-multiple-y-axis.html',
  styleUrls: ['./echarts-line-multiple-y-axis.css'],
})
export default class EchartsLineMultipleYAxis implements OnInit {
  theme = themeSwitcher.getCurrentTheme();

  dates = Array.from({ length: 2025 - 2013 }, (_, i) => (2013 + i).toString());

  months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  data = {
    evaporation: this.months.map(() => (Math.random() * 100).toFixed(2)),
    precipitation: this.months.map(() => (Math.random() * 200).toFixed(2)),
    temperature: this.months.map(() => (Math.random() * 30).toFixed(2)),
  };

  themeChartList = Array.from({ length: 17 }, (_, i) =>
    getComputedCSSProperty(`chart-${i + 1}`)
  );

  createYAxis(
    name: string,
    position: 'left' | 'right',
    color: string,
    formatter: string,
    offset: number = 0
  ): YAXisOption {
    return {
      type: 'value',
      name: name,
      position: position,
      offset: offset,
      alignTicks: true,
      axisLabel: {
        formatter: formatter,
      },
      axisTick: {
        lineStyle: {
          color: color,
        },
      },
      axisLine: {
        lineStyle: {
          color: color,
        },
      },
    };
  }

  createSeries(
    name: string,
    yAxisIndex: number,
    data: any,
    color: string
  ): SeriesOption {
    return {
      name: name,
      type: 'line',
      yAxisIndex: yAxisIndex,
      data: data,
      lineStyle: {
        color: color,
      },
      itemStyle: {
        color: color,
      },
    };
  }

  options: EChartsOption = {
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'cross' },
    },
    grid: {
      right: '20%',
    },
    legend: {
      show: true,
      bottom: '0',
      left: '0',
    },
    xAxis: [
      {
        type: 'category',
        axisTick: { alignWithLabel: true },
        data: this.months,
      },
    ],
    yAxis: [
      this.createYAxis(
        'Evaporation',
        'right',
        this.themeChartList[0],
        '{value} ml'
      ),
      this.createYAxis(
        'Precipitation',
        'right',
        this.themeChartList[7],
        '{value} ml',
        80
      ),
      this.createYAxis(
        'Temperature',
        'left',
        this.themeChartList[12],
        '{value} °C'
      ),
    ],
    series: [
      this.createSeries(
        'Evaporation',
        0,
        this.data.evaporation,
        this.themeChartList[0]
      ),
      this.createSeries(
        'Precipitation',
        1,
        this.data.precipitation,
        this.themeChartList[7]
      ),
      this.createSeries(
        'Temperature',
        2,
        this.data.temperature,
        this.themeChartList[12]
      ),
    ],
  };

  ngOnInit() {
    registerTheme(echarts);

    themeSwitcher.themeChanged.on((theme: string) => {
      this.theme = theme;
    });
  }
}
```

#### echarts-line-multiple-y-axis.html
```html
<div
  echarts
  [options]="options"
  [theme]="theme"
  class="echarts"
></div>
```

#### echarts-line-multiple-y-axis.css
```css
.echarts {
  position: relative;
  width: 100%;
  height: 40rem;
  padding-top: 1rem;
}
```

### Angular Standalone Examples

#### echarts-line-multiple-y-axis.ts
```ts
import { Component, OnInit } from '@angular/core';
import { NgxEchartsDirective, provideEchartsCore } from 'ngx-echarts';

import { getComputedCSSProperty, registerTheme } from '@siemens/ix-echarts';
import { themeSwitcher } from '@siemens/ix';

import { EChartsOption, SeriesOption } from 'echarts';
import { YAXisOption } from 'echarts/types/dist/shared';

@Component({
  selector: 'app-example',
  providers: [provideEchartsCore({ echarts })],
  imports: [NgxEchartsDirective],
  templateUrl: './echarts-line-multiple-y-axis.html',
  styleUrls: ['./echarts-line-multiple-y-axis.css'],
})
export default class EchartsLineMultipleYAxis implements OnInit {
  theme = themeSwitcher.getCurrentTheme();

  dates = Array.from({ length: 2025 - 2013 }, (_, i) => (2013 + i).toString());

  months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  data = {
    evaporation: this.months.map(() => (Math.random() * 100).toFixed(2)),
    precipitation: this.months.map(() => (Math.random() * 200).toFixed(2)),
    temperature: this.months.map(() => (Math.random() * 30).toFixed(2)),
  };

  themeChartList = Array.from({ length: 17 }, (_, i) =>
    getComputedCSSProperty(`chart-${i + 1}`)
  );

  createYAxis(
    name: string,
    position: 'left' | 'right',
    color: string,
    formatter: string,
    offset: number = 0
  ): YAXisOption {
    return {
      type: 'value',
      name: name,
      position: position,
      offset: offset,
      alignTicks: true,
      axisLabel: {
        formatter: formatter,
      },
      axisTick: {
        lineStyle: {
          color: color,
        },
      },
      axisLine: {
        lineStyle: {
          color: color,
        },
      },
    };
  }

  createSeries(
    name: string,
    yAxisIndex: number,
    data: any,
    color: string
  ): SeriesOption {
    return {
      name: name,
      type: 'line',
      yAxisIndex: yAxisIndex,
      data: data,
      lineStyle: {
        color: color,
      },
      itemStyle: {
        color: color,
      },
    };
  }

  options: EChartsOption = {
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'cross' },
    },
    grid: {
      right: '20%',
    },
    legend: {
      show: true,
      bottom: '0',
      left: '0',
    },
    xAxis: [
      {
        type: 'category',
        axisTick: { alignWithLabel: true },
        data: this.months,
      },
    ],
    yAxis: [
      this.createYAxis(
        'Evaporation',
        'right',
        this.themeChartList[0],
        '{value} ml'
      ),
      this.createYAxis(
        'Precipitation',
        'right',
        this.themeChartList[7],
        '{value} ml',
        80
      ),
      this.createYAxis(
        'Temperature',
        'left',
        this.themeChartList[12],
        '{value} °C'
      ),
    ],
    series: [
      this.createSeries(
        'Evaporation',
        0,
        this.data.evaporation,
        this.themeChartList[0]
      ),
      this.createSeries(
        'Precipitation',
        1,
        this.data.precipitation,
        this.themeChartList[7]
      ),
      this.createSeries(
        'Temperature',
        2,
        this.data.temperature,
        this.themeChartList[12]
      ),
    ],
  };

  ngOnInit() {
    registerTheme(echarts);

    themeSwitcher.themeChanged.on((theme: string) => {
      this.theme = theme;
    });
  }
}
```

#### echarts-line-multiple-y-axis.html
```html
<div echarts [options]="options" [theme]="theme" class="echarts"></div>
```

#### echarts-line-multiple-y-axis.css
```css
.echarts {
  position: relative;
  width: 100%;
  height: 40rem;
  padding-top: 1rem;
}
```

### Vue Examples

#### echarts-line-multiple-y-axis.vue
```vue
<script setup lang="ts">
import { ref } from 'vue';
import { getComputedCSSProperty, registerTheme } from '@siemens/ix-echarts';
import { themeSwitcher } from '@siemens/ix';
import VueECharts from 'vue-echarts';

import { EChartsOption, SeriesOption } from 'echarts';
import { YAXisOption } from 'echarts/types/dist/shared';

echarts.use([
  components.TooltipComponent,
  components.LegendComponent,
  components.GridComponent,
  components.MarkLineComponent,
  charts.LineChart,
  renderer.CanvasRenderer,
]);

registerTheme(echarts);

const theme = ref(themeSwitcher.getCurrentTheme());

const dates = Array.from({ length: 2025 - 2013 }, (_, i) =>
  (2013 + i).toString()
);

const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const data = {
  evaporation: months.map(() => (Math.random() * 100).toFixed(2)),
  precipitation: months.map(() => (Math.random() * 200).toFixed(2)),
  temperature: months.map(() => (Math.random() * 30).toFixed(2)),
};

const themeChartList = Array.from({ length: 17 }, (_, i) =>
  getComputedCSSProperty(`chart-${i + 1}`)
);

function createYAxis(
  name: string,
  position: 'left' | 'right',
  color: string,
  formatter: string,
  offset: number = 0
): YAXisOption {
  return {
    type: 'value',
    name: name,
    position: position,
    offset: offset,
    alignTicks: true,
    axisLabel: {
      formatter: formatter,
    },
    axisTick: {
      lineStyle: {
        color: color,
      },
    },
    axisLine: {
      lineStyle: {
        color: color,
      },
    },
  };
}

function createSeries(
  name: string,
  yAxisIndex: number,
  data: any,
  color: string
): SeriesOption {
  return {
    name: name,
    type: 'line',
    yAxisIndex: yAxisIndex,
    data: data,
    lineStyle: {
      color: color,
    },
    itemStyle: {
      color: color,
    },
  } as SeriesOption;
}

const options: EChartsOption = {
  tooltip: {
    trigger: 'axis',
    axisPointer: { type: 'cross' },
  },
  grid: {
    right: '20%',
  },
  legend: {
    show: true,
    bottom: '0',
    left: '0',
  },
  xAxis: [
    {
      type: 'category',
      axisTick: { alignWithLabel: true },
      data: months,
    },
  ],
  yAxis: [
    createYAxis('Evaporation', 'right', themeChartList[0], '{value} ml'),
    createYAxis('Precipitation', 'right', themeChartList[7], '{value} ml', 80),
    createYAxis('Temperature', 'left', themeChartList[12], '{value} °C'),
  ],
  series: [
    createSeries('Evaporation', 0, data.evaporation, themeChartList[0]),
    createSeries('Precipitation', 1, data.precipitation, themeChartList[7]),
    createSeries('Temperature', 2, data.temperature, themeChartList[12]),
  ],
} as EChartsOption;
</script>

<style scoped src="./echarts-line-multiple-y-axis.css"></style>

<template>
  <VueECharts :theme="theme" :option="options" autoresize></VueECharts>
</template>
```

#### echarts-line-multiple-y-axis.css
```css
.echarts {
  position: relative;
  width: 100%;
  height: 40rem;
  padding-top: 1rem;
}
```

## Advanced line charts

Advanced line charts are an enhanced version of basic line charts, designed to provide deeper insights and a more detailed analysis of data trends. These charts often incorporate features such as multiple data series, interactive elements, and additional annotations to highlight key points or events. Advanced line charts can also include trend lines, moving averages and other statistical tools to help identify patterns and correlations.

### React Examples

#### echarts-line-advanced.tsx
```tsx
import './echarts-line-advanced.scoped.css';

import { useEffect, useState } from 'react';
import { getComputedCSSProperty, registerTheme } from '@siemens/ix-echarts';
import { themeSwitcher } from '@siemens/ix';
import ReactEcharts from 'echarts-for-react';

import { EChartsOption } from 'echarts';

export default function EchartsLineAdvanced() {
  registerTheme(echarts);

  const [theme, setTheme] = useState(themeSwitcher.getCurrentTheme());

  useEffect(() => {
    themeSwitcher.themeChanged.on((theme: string) => {
      setTheme(theme);
    });
  }, []);

  const dates = Array.from({ length: 2025 - 2013 }, (_, i) =>
    (2013 + i).toString()
  );

  const stockData = [
    77.67, 82.81, 84.09, 91.75, 118.15, 107.48, 99.36, 93.07, 137.18, 104.38,
    156.48, 168.52,
  ];

  const options: EChartsOption = {
    tooltip: { trigger: 'axis' },
    xAxis: { type: 'category', data: dates },
    yAxis: {
      type: 'value',
      splitLine: { lineStyle: { type: 'dashed' } },
    },
    series: [
      {
        type: 'line',
        data: stockData,
        smooth: true,
        lineStyle: { width: 4, shadowBlur: 10 },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: getComputedCSSProperty('color-primary'),
            },
            { offset: 1, color: 'transparent' },
          ]),
        },
        markPoint: {
          data: [
            { type: 'max', name: 'Max', symbol: 'circle', symbolSize: 60 },
            { type: 'min', name: 'Min', symbol: 'circle', symbolSize: 60 },
          ],
          label: {
            fontWeight: 'bold',
            color: getComputedCSSProperty('color-inv-contrast-text'),
          },
        },
        markLine: {
          data: [{ type: 'average', name: 'Avg' }],
          lineStyle: { type: 'dashed' },
        },
      },
    ],
  };

  return (
    <ReactEcharts
      style={{ height: '40rem' }}
      option={options}
      theme={theme}
      className="echarts"
    />
  );
}
```

#### echarts-line-advanced.scoped.css
```css
.echarts {
  position: relative;
  width: 100%;
  height: 40rem;
  padding-top: 1rem;
}
```

### Angular Examples

#### echarts-line-advanced.ts
```ts
import { Component, OnInit } from '@angular/core';
import { registerTheme, getComputedCSSProperty } from '@siemens/ix-echarts';
import { themeSwitcher } from '@siemens/ix';

import { EChartsOption } from 'echarts';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './echarts-line-advanced.html',
  styleUrls: ['./echarts-line-advanced.css'],
})
export default class EchartsLineAdvanced implements OnInit {
  theme = themeSwitcher.getCurrentTheme();

  dates = Array.from({ length: 2025 - 2013 }, (_, i) => (2013 + i).toString());

  stockData = [
    77.67, 82.81, 84.09, 91.75, 118.15, 107.48, 99.36, 93.07, 137.18, 104.38,
    156.48, 168.52,
  ];

  options: EChartsOption = {
    tooltip: { trigger: 'axis' },
    xAxis: { type: 'category', data: this.dates },
    yAxis: {
      type: 'value',
      splitLine: { lineStyle: { type: 'dashed' } },
    },
    series: [
      {
        type: 'line',
        data: this.stockData,
        smooth: true,
        lineStyle: { width: 4, shadowBlur: 10 },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: getComputedCSSProperty('color-primary'),
            },
            { offset: 1, color: 'transparent' },
          ]),
        },
        markPoint: {
          data: [
            { type: 'max', name: 'Max', symbol: 'circle', symbolSize: 60 },
            { type: 'min', name: 'Min', symbol: 'circle', symbolSize: 60 },
          ],
          label: {
            fontWeight: 'bold',
            color: getComputedCSSProperty('color-inv-contrast-text'),
          },
        },
        markLine: {
          data: [{ type: 'average', name: 'Avg' }],
          lineStyle: { type: 'dashed' },
        },
      },
    ],
  };

  ngOnInit() {
    registerTheme(echarts);

    themeSwitcher.themeChanged.on((theme: string) => {
      this.theme = theme;
    });
  }
}
```

#### echarts-line-advanced.html
```html
<div
  echarts
  [options]="options"
  [theme]="theme"
  class="echarts"
></div>
```

#### echarts-line-advanced.css
```css
.echarts {
  position: relative;
  width: 100%;
  height: 40rem;
  padding-top: 1rem;
}
```

### Angular Standalone Examples

#### echarts-line-advanced.ts
```ts
import { Component, OnInit } from '@angular/core';
import { NgxEchartsDirective, provideEchartsCore } from 'ngx-echarts';

import { registerTheme, getComputedCSSProperty } from '@siemens/ix-echarts';
import { themeSwitcher } from '@siemens/ix';

import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-example',
  providers: [provideEchartsCore({ echarts })],
  imports: [NgxEchartsDirective],
  templateUrl: './echarts-line-advanced.html',
  styleUrls: ['./echarts-line-advanced.css'],
})
export default class EchartsLineAdvanced implements OnInit {
  theme = themeSwitcher.getCurrentTheme();

  dates = Array.from({ length: 2025 - 2013 }, (_, i) => (2013 + i).toString());

  stockData = [
    77.67, 82.81, 84.09, 91.75, 118.15, 107.48, 99.36, 93.07, 137.18, 104.38,
    156.48, 168.52,
  ];

  options: EChartsOption = {
    tooltip: { trigger: 'axis' },
    xAxis: { type: 'category', data: this.dates },
    yAxis: {
      type: 'value',
      splitLine: { lineStyle: { type: 'dashed' } },
    },
    series: [
      {
        type: 'line',
        data: this.stockData,
        smooth: true,
        lineStyle: { width: 4, shadowBlur: 10 },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: getComputedCSSProperty('color-primary'),
            },
            { offset: 1, color: 'transparent' },
          ]),
        },
        markPoint: {
          data: [
            { type: 'max', name: 'Max', symbol: 'circle', symbolSize: 60 },
            { type: 'min', name: 'Min', symbol: 'circle', symbolSize: 60 },
          ],
          label: {
            fontWeight: 'bold',
            color: getComputedCSSProperty('color-inv-contrast-text'),
          },
        },
        markLine: {
          data: [{ type: 'average', name: 'Avg' }],
          lineStyle: { type: 'dashed' },
        },
      },
    ],
  };

  ngOnInit() {
    registerTheme(echarts);

    themeSwitcher.themeChanged.on((theme: string) => {
      this.theme = theme;
    });
  }
}
```

#### echarts-line-advanced.html
```html
<div echarts [options]="options" [theme]="theme" class="echarts"></div>
```

#### echarts-line-advanced.css
```css
.echarts {
  position: relative;
  width: 100%;
  height: 40rem;
  padding-top: 1rem;
}
```

### Vue Examples

#### echarts-line-advanced.vue
```vue
<script setup lang="ts">
import { ref } from 'vue';
import { getComputedCSSProperty, registerTheme } from '@siemens/ix-echarts';
import { themeSwitcher } from '@siemens/ix';
import VueECharts from 'vue-echarts';

import { EChartsOption } from 'echarts';

echarts.use([
  components.TooltipComponent,
  components.LegendComponent,
  components.GridComponent,
  components.MarkLineComponent,
  components.MarkPointComponent,
  charts.LineChart,
  renderer.CanvasRenderer,
]);

registerTheme(echarts);

const theme = ref(themeSwitcher.getCurrentTheme());

themeSwitcher.themeChanged.on((newTheme: string) => {
  theme.value = newTheme;
});

const dates = Array.from({ length: 2025 - 2013 }, (_, i) =>
  (2013 + i).toString()
);

const stockData = [
  77.67, 82.81, 84.09, 91.75, 118.15, 107.48, 99.36, 93.07, 137.18, 104.38,
  156.48, 168.52,
];

const options: EChartsOption = {
  tooltip: { trigger: 'axis' },
  xAxis: { type: 'category', data: dates },
  yAxis: {
    type: 'value',
    splitLine: { lineStyle: { type: 'dashed' } },
  },
  series: [
    {
      type: 'line',
      data: stockData,
      smooth: true,
      lineStyle: { width: 4, shadowBlur: 10 },
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: getComputedCSSProperty('color-primary'),
          },
          { offset: 1, color: 'transparent' },
        ]),
      },
      markPoint: {
        data: [
          { type: 'max', name: 'Max', symbol: 'circle', symbolSize: 60 },
          { type: 'min', name: 'Min', symbol: 'circle', symbolSize: 60 },
        ],
        label: {
          fontWeight: 'bold',
          color: getComputedCSSProperty('color-inv-contrast-text'),
        },
      },
      markLine: {
        data: [{ type: 'average', name: 'Avg' }],
        lineStyle: { type: 'dashed' },
      },
    },
  ],
} as EChartsOption;
</script>

<style scoped src="./echarts-line-advanced.css"></style>

<template>
  <VueECharts :theme="theme" :option="options" autoresize></VueECharts>
</template>
```

#### echarts-line-advanced.css
```css
.echarts {
  position: relative;
  width: 100%;
  height: 40rem;
  padding-top: 1rem;
}
```

## Dos and Don’ts

- Do start the Y-axis at zero and label axes clearly
- Do use contrasting colors for multiple lines to better distinguish different data series
- Do use consistent intervals on axes
- Do highlight important data points
- Do use visual cues to show gaps in data
- Don’t overcrowd the chart with colors
- Don’t clutter the chart with too many lines, we recommend no more than 7 lines
