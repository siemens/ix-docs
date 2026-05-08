# Overview

> Charts are essential tools for visualizing data, making complex information more accessible and easier to understand.

# Overview - Code

Siemens Industrial Experience provides a theme for the popular chart library [ECharts](https://echarts.apache.org/handbook/en/get-started).
This lets you seamlessly integrate ECharts into the Siemens Industrial Experience design system.

ECharts is a third-party library distributed under [Apache License 2.0](https://www.apache.org/licenses).

![Chart usage guide](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?node-id=3532-4181&t=MD9MvUCkoIcmSi8H-4)

## Attributes

| Name           | Description
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| **Axes**       | Axes are used to display the data in a chart. They are the horizontal and vertical lines that form the chart's grid. Axes are labeled to indicate what data they represent.
| **Scale**      | Scales are used to map data values to a visual representation. The scale type is determined by the type of data being visualized.
| **Labels**     | Labels are used to describe the dimensions represented, often including units of measurement, e.g. “Distance traveled (m)”.
| **Grid lines** | Grid lines help to visually align data points within the chart.
| **Legend**     | Legends explain the symbols, colors or patterns used in the chart to represent different data sets. You can toggle the visibility of the data series by clicking on the date in the legend.
| **Tooltip**    | Tooltips provide more details about data while hovering over the area.

## Installation

To install the Siemens Industrial Experience ECharts theme, follow the steps below:

```sh
npm install --save @siemens/ix-echarts
```

1. Import the `registerTheme` function from our module.
2. Invoke this function, passing in your `echarts` instance as an argument. You do not need to provide the `echarts` instance if it’s provided globally in your `window` object when using vanilla JavaScript.
3. Once this is done, you’ll be able to utilize the `brand-dark`, `brand-light`, `classic-dark` and `classic-light` themes for your chart.

```typescript
import { registerTheme } from '@siemens/ix-echarts';

registerTheme(echarts);
```

For Angular, make sure to correctly add `NgxEcharts` in your module file.

## Colors

The Siemens Industrial Experience ECharts theme provides a set of colors that are used to style the charts. These colors are optimized for accessibility and readability.

### Categorical data
For easily distinguishable data series, where each category is distinct but not ordered, we recommend the following color sequence.
Example: Different product types or regions.

![Colors for categorical data](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?node-id=3223-1647&t=MD9MvUCkoIcmSi8H-4)

### Sequential data
For ordered data, we recommend using every second color, e.g. chart-1, chart-3, chart-5.
Example: monthly data.

![Colors for sequential data](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?node-id=3225-2412&t=MD9MvUCkoIcmSi8H-4)

### Comparative data
For comparing data within a category, we recommend using the matching -40 color with 40% opacity.
Example: last year and current year.

![Colors for comparative data](https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?node-id=3225-2885&t=MD9MvUCkoIcmSi8H-4)

### React Examples

#### echarts.tsx
```tsx
import './echarts.scoped.css';

import { useEffect, useState } from 'react';
import { registerTheme } from '@siemens/ix-echarts';
import { themeSwitcher } from '@siemens/ix';
import ReactEcharts from 'echarts-for-react';

import { EChartsOption } from 'echarts';

export default function Echarts() {
  registerTheme(echarts);

  const [theme, setTheme] = useState(themeSwitcher.getCurrentTheme());

  useEffect(() => {
    themeSwitcher.themeChanged.on((theme: string) => {
      setTheme(theme);
    });
  }, []);

  const options: EChartsOption = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    legend: {
      icon: 'rect',
      bottom: 0,
      left: 0,
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '7%',
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
    ],
    yAxis: [
      {
        type: 'value',
      },
    ],
    series: [
      {
        name: 'Direct',
        type: 'bar',
        emphasis: {
          focus: 'series',
        },
        data: [320, 332, 301, 334, 390, 330, 320],
      },
      {
        name: 'Email',
        type: 'bar',
        stack: 'Ad',
        emphasis: {
          focus: 'series',
        },
        data: [120, 132, 101, 134, 90, 230, 210],
      },
      {
        name: 'Union Ads',
        type: 'bar',
        stack: 'Ad',
        emphasis: {
          focus: 'series',
        },
        data: [220, 182, 191, 234, 290, 330, 310],
      },
      {
        name: 'Video Ads',
        type: 'bar',
        stack: 'Ad',
        emphasis: {
          focus: 'series',
        },
        data: [150, 232, 201, 154, 190, 330, 410],
      },
      {
        name: 'Search Engine',
        type: 'bar',
        data: [862, 1018, 964, 1026, 1679, 1600, 1570],
        emphasis: {
          focus: 'series',
        },
        markLine: {
          lineStyle: {
            type: 'dashed',
          },
          data: [[{ type: 'min' }, { type: 'max' }]],
        },
      },
      {
        name: 'Baidu',
        type: 'bar',
        barWidth: 5,
        stack: 'Search Engine',
        emphasis: {
          focus: 'series',
        },
        data: [620, 732, 701, 734, 1090, 1130, 1120],
      },
      {
        name: 'Google',
        type: 'bar',
        stack: 'Search Engine',
        emphasis: {
          focus: 'series',
        },
        data: [120, 132, 101, 134, 290, 230, 220],
      },
      {
        name: 'Bing',
        type: 'bar',
        stack: 'Search Engine',
        emphasis: {
          focus: 'series',
        },
        data: [60, 72, 71, 74, 190, 130, 110],
      },
      {
        name: 'Others',
        type: 'bar',
        stack: 'Search Engine',
        emphasis: {
          focus: 'series',
        },
        data: [62, 82, 91, 84, 109, 110, 120],
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

#### echarts.scoped.css
```css
.echarts {
  position: relative;
  width: 100%;
  height: 40rem;
  padding-top: 1rem;
}
```

### Angular Examples

#### echarts.ts
```ts
import { Component, OnInit } from '@angular/core';
import { registerTheme } from '@siemens/ix-echarts';
import { themeSwitcher } from '@siemens/ix';

import { EChartsOption } from 'echarts';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './echarts.html',
  styleUrls: ['./echarts.css'],
})
export default class Echarts implements OnInit {
  theme = themeSwitcher.getCurrentTheme();

  options: EChartsOption = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    legend: {
      icon: 'rect',
      bottom: 0,
      left: 0,
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '7%',
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
    ],
    yAxis: [
      {
        type: 'value',
      },
    ],
    series: [
      {
        name: 'Direct',
        type: 'bar',
        emphasis: {
          focus: 'series',
        },
        data: [320, 332, 301, 334, 390, 330, 320],
      },
      {
        name: 'Email',
        type: 'bar',
        stack: 'Ad',
        emphasis: {
          focus: 'series',
        },
        data: [120, 132, 101, 134, 90, 230, 210],
      },
      {
        name: 'Union Ads',
        type: 'bar',
        stack: 'Ad',
        emphasis: {
          focus: 'series',
        },
        data: [220, 182, 191, 234, 290, 330, 310],
      },
      {
        name: 'Video Ads',
        type: 'bar',
        stack: 'Ad',
        emphasis: {
          focus: 'series',
        },
        data: [150, 232, 201, 154, 190, 330, 410],
      },
      {
        name: 'Search Engine',
        type: 'bar',
        data: [862, 1018, 964, 1026, 1679, 1600, 1570],
        emphasis: {
          focus: 'series',
        },
        markLine: {
          lineStyle: {
            type: 'dashed',
          },
          data: [[{ type: 'min' }, { type: 'max' }]],
        },
      },
      {
        name: 'Baidu',
        type: 'bar',
        barWidth: 5,
        stack: 'Search Engine',
        emphasis: {
          focus: 'series',
        },
        data: [620, 732, 701, 734, 1090, 1130, 1120],
      },
      {
        name: 'Google',
        type: 'bar',
        stack: 'Search Engine',
        emphasis: {
          focus: 'series',
        },
        data: [120, 132, 101, 134, 290, 230, 220],
      },
      {
        name: 'Bing',
        type: 'bar',
        stack: 'Search Engine',
        emphasis: {
          focus: 'series',
        },
        data: [60, 72, 71, 74, 190, 130, 110],
      },
      {
        name: 'Others',
        type: 'bar',
        stack: 'Search Engine',
        emphasis: {
          focus: 'series',
        },
        data: [62, 82, 91, 84, 109, 110, 120],
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

#### echarts.html
```html
<div
  echarts
  [options]="options"
  [theme]="theme"
  class="echarts"
></div>
```

#### echarts.css
```css
.echarts {
  position: relative;
  width: 100%;
  height: 40rem;
  padding-top: 1rem;
}
```

### Angular Standalone Examples

#### echarts.ts
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
  templateUrl: './echarts.html',
  styleUrls: ['./echarts.css'],
})
export default class Echarts implements OnInit {
  theme = themeSwitcher.getCurrentTheme();

  options: EChartsOption = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    legend: {
      icon: 'rect',
      bottom: 0,
      left: 0,
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '7%',
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
    ],
    yAxis: [
      {
        type: 'value',
      },
    ],
    series: [
      {
        name: 'Direct',
        type: 'bar',
        emphasis: {
          focus: 'series',
        },
        data: [320, 332, 301, 334, 390, 330, 320],
      },
      {
        name: 'Email',
        type: 'bar',
        stack: 'Ad',
        emphasis: {
          focus: 'series',
        },
        data: [120, 132, 101, 134, 90, 230, 210],
      },
      {
        name: 'Union Ads',
        type: 'bar',
        stack: 'Ad',
        emphasis: {
          focus: 'series',
        },
        data: [220, 182, 191, 234, 290, 330, 310],
      },
      {
        name: 'Video Ads',
        type: 'bar',
        stack: 'Ad',
        emphasis: {
          focus: 'series',
        },
        data: [150, 232, 201, 154, 190, 330, 410],
      },
      {
        name: 'Search Engine',
        type: 'bar',
        data: [862, 1018, 964, 1026, 1679, 1600, 1570],
        emphasis: {
          focus: 'series',
        },
        markLine: {
          lineStyle: {
            type: 'dashed',
          },
          data: [[{ type: 'min' }, { type: 'max' }]],
        },
      },
      {
        name: 'Baidu',
        type: 'bar',
        barWidth: 5,
        stack: 'Search Engine',
        emphasis: {
          focus: 'series',
        },
        data: [620, 732, 701, 734, 1090, 1130, 1120],
      },
      {
        name: 'Google',
        type: 'bar',
        stack: 'Search Engine',
        emphasis: {
          focus: 'series',
        },
        data: [120, 132, 101, 134, 290, 230, 220],
      },
      {
        name: 'Bing',
        type: 'bar',
        stack: 'Search Engine',
        emphasis: {
          focus: 'series',
        },
        data: [60, 72, 71, 74, 190, 130, 110],
      },
      {
        name: 'Others',
        type: 'bar',
        stack: 'Search Engine',
        emphasis: {
          focus: 'series',
        },
        data: [62, 82, 91, 84, 109, 110, 120],
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

#### echarts.html
```html
<div echarts [options]="options" [theme]="theme" class="echarts"></div>
```

#### echarts.css
```css
.echarts {
  position: relative;
  width: 100%;
  height: 40rem;
  padding-top: 1rem;
}
```

### Vue Examples

#### echarts.vue
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
  charts.BarChart,
  renderer.CanvasRenderer,
]);

registerTheme(echarts);

const theme = ref(themeSwitcher.getCurrentTheme());

themeSwitcher.themeChanged.on((newTheme: string) => {
  theme.value = newTheme;
});

const options: EChartsOption = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
    },
  },
  legend: {
    icon: 'rect',
    bottom: 0,
    left: 0,
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true,
  },
  xAxis: [
    {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
  ],
  yAxis: [
    {
      type: 'value',
    },
  ],
  series: [
    {
      name: 'Direct',
      type: 'bar',
      emphasis: {
        focus: 'series',
      },
      data: [320, 332, 301, 334, 390, 330, 320],
    },
    {
      name: 'Email',
      type: 'bar',
      stack: 'Ad',
      emphasis: {
        focus: 'series',
      },
      data: [120, 132, 101, 134, 90, 230, 210],
    },
    {
      name: 'Union Ads',
      type: 'bar',
      stack: 'Ad',
      emphasis: {
        focus: 'series',
      },
      data: [220, 182, 191, 234, 290, 330, 310],
    },
    {
      name: 'Video Ads',
      type: 'bar',
      stack: 'Ad',
      emphasis: {
        focus: 'series',
      },
      data: [150, 232, 201, 154, 190, 330, 410],
    },
    {
      name: 'Search Engine',
      type: 'bar',
      data: [862, 1018, 964, 1026, 1679, 1600, 1570],
      emphasis: {
        focus: 'series',
      },
      markLine: {
        lineStyle: {
          type: 'dashed',
        },
        data: [[{ type: 'min' }, { type: 'max' }]],
      },
    },
    {
      name: 'Baidu',
      type: 'bar',
      barWidth: 5,
      stack: 'Search Engine',
      emphasis: {
        focus: 'series',
      },
      data: [620, 732, 701, 734, 1090, 1130, 1120],
    },
    {
      name: 'Google',
      type: 'bar',
      stack: 'Search Engine',
      emphasis: {
        focus: 'series',
      },
      data: [120, 132, 101, 134, 290, 230, 220],
    },
    {
      name: 'Bing',
      type: 'bar',
      stack: 'Search Engine',
      emphasis: {
        focus: 'series',
      },
      data: [60, 72, 71, 74, 190, 130, 110],
    },
    {
      name: 'Others',
      type: 'bar',
      stack: 'Search Engine',
      emphasis: {
        focus: 'series',
      },
      data: [62, 82, 91, 84, 109, 110, 120],
    },
  ],
} as EChartsOption;
</script>

<style scoped src="./echarts.css"></style>

<template>
  <div>
    <VueECharts :theme="theme" :option="options" autoresize></VueECharts>
  </div>
</template>
```

#### echarts.css
```css
.echarts {
  position: relative;
  width: 100%;
  height: 40rem;
  padding-top: 1rem;
}
```

## Loading indicators

A loading indicator provides users with visual feedback that the chart is being processed and will be displayed shortly. The loading indicator should be displayed when the chart is loading data or performing a long-running operation.

## Empty states

An empty state occurs when a user first opens an application, no data is available, or the user has filtered out all data. The empty state should be visually distinct from the loading state and should provide a clear message to the user. This message should explain why the empty state is being displayed and provide guidance on how to proceed.

### React Examples

#### echarts-empty-state.tsx
```tsx
import './echarts-empty-state.scoped.css';

import { useEffect, useState } from 'react';
import { registerTheme } from '@siemens/ix-echarts';
import { themeSwitcher } from '@siemens/ix';
import ReactEcharts from 'echarts-for-react';

import { EChartsOption } from 'echarts';
import { IxEmptyState } from '@siemens/ix-react';
import { iconInfo } from '@siemens/ix-icons/icons';

export default function Echarts() {
  registerTheme(echarts);

  const [theme, setTheme] = useState(themeSwitcher.getCurrentTheme());

  useEffect(() => {
    themeSwitcher.themeChanged.on((theme: string) => {
      setTheme(theme);
    });
  }, []);

  const data = {
    weekdays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    value: [],
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
    <div className="echarts">
      {data.value.length === 0 && (
        <div className="empty-state-container">
          <IxEmptyState
            className="empty-state"
            header="No elements available"
            subHeader="Failed to retrieve data"
            icon={iconInfo}
            action="Try again"
          />
        </div>
      )}
      <ReactEcharts option={options} theme={theme} className="echarts" />
    </div>
  );
}
```

#### echarts-empty-state.scoped.css
```css
.echarts {
  position: relative;
  width: 100%;
  height: 40rem;
  padding-top: 1rem;
}
```

### Angular Examples

#### echarts-empty-state.ts
```ts
import { Component, OnInit } from '@angular/core';
import { registerTheme } from '@siemens/ix-echarts';
import { themeSwitcher } from '@siemens/ix';

import { EChartsOption } from 'echarts';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './echarts-empty-state.html',
  styleUrls: ['./echarts-empty-state.css'],
})
export default class EchartsLineSimple implements OnInit {
  theme = themeSwitcher.getCurrentTheme();
  data = {
    weekdays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    value: [],
  };

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

#### echarts-empty-state.html
```html
<div class="echarts">
  <div
    *ngIf="this.data.value.length === 0"
    id="empty-state-container"
    class="empty-state-container"
  >
    <ix-empty-state
      class="empty-state"
      header="No elements available"
      sub-header="Failed to retrieve data"
      icon="info"
      action="Try again"
    ></ix-empty-state>
  </div>
  <div
    echarts
    class="echarts"
    [options]="options"
    [theme]="theme"
    id="main"
  ></div>
</div>
```

#### echarts-empty-state.css
```css
.echarts {
  position: relative;
  width: 100%;
  height: 40rem;
  padding-top: 1rem;
}
```

### Angular Standalone Examples

#### echarts-empty-state.ts
```ts
import { Component, OnInit } from '@angular/core';
import { NgxEchartsDirective, provideEchartsCore } from 'ngx-echarts';

import { NgIf } from '@angular/common';

import { IxEmptyState } from '@siemens/ix-angular/standalone';

import { registerTheme } from '@siemens/ix-echarts';
import { themeSwitcher } from '@siemens/ix';

import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-example',
  providers: [provideEchartsCore({ echarts })],
  imports: [IxEmptyState, NgIf, NgxEchartsDirective],
  templateUrl: './echarts-empty-state.html',
  styleUrls: ['./echarts-empty-state.css'],
})
export default class EchartsLineSimple implements OnInit {
  theme = themeSwitcher.getCurrentTheme();
  data = {
    weekdays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    value: [],
  };

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

#### echarts-empty-state.html
```html
<div class="echarts">
  <div
    *ngIf="this.data.value.length === 0"
    id="empty-state-container"
    class="empty-state-container"
  >
    <ix-empty-state
      class="empty-state"
      header="No elements available"
      sub-header="Failed to retrieve data"
      icon="info"
      action="Try again"
    ></ix-empty-state>
  </div>
  <div
    echarts
    class="echarts"
    [options]="options"
    [theme]="theme"
    id="main"
  ></div>
</div>
```

#### echarts-empty-state.css
```css
.echarts {
  position: relative;
  width: 100%;
  height: 40rem;
  padding-top: 1rem;
}
```

### Vue Examples

#### echarts-empty-state.vue
```vue
<script setup lang="ts">
import { ref } from 'vue';
import { registerTheme } from '@siemens/ix-echarts';
import { themeSwitcher } from '@siemens/ix';
import VueECharts from 'vue-echarts';

import { EChartsOption } from 'echarts';
import { IxEmptyState } from '@siemens/ix-vue';
import { iconInfo } from '@siemens/ix-icons/icons';

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
  value: [],
};

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

<style scoped src="./echarts-empty-state.css"></style>

<template>
  <div class="echarts">
    <div v-if="data.value.length === 0" class="empty-state-container">
      <IxEmptyState
        className="empty-state"
        header="No elements available"
        sub-header="Failed to retrieve data"
        :icon="iconInfo"
        action="Try again"
      ></IxEmptyState>
    </div>
    <VueECharts :theme="theme" :option="options" autoresize></VueECharts>
  </div>
</template>
```

#### echarts-empty-state.css
```css
.echarts {
  position: relative;
  width: 100%;
  height: 40rem;
  padding-top: 1rem;
}
```

## Failure and error messages

A failure occurs when no data can be displayed within the chart. This can happen for various reasons, such as connection failure and missing data. Error messages have the following elements to help guide the user:

- State problem: What happened? Add a clear reason for the error, e.g. "No data available"
- Explain cause: Why did the error appear? A clear and concise message explaining why the error happened, e.g. "Connection failure"
- Give solution: What can the user do to move forward? Add clear instructions for the user regarding what to do next to resolve the error, e.g. "Try again"

## Missing data points

Indicate missing data with a special visual marker (like a different color or shape) to highlight the gaps without connecting them.
