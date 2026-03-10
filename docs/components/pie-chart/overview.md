# Pie chart

> Pie charts display data using a circular graph. The length of each slice is proportional to the value it represents. Pie charts are commonly used to visualize the parts of a whole and are particularly useful for comparing the relative sizes of different categories.

# Pie chart - Code

## Basic

### React Examples

#### echarts-pie.tsx
```tsx
import './echarts-pie.scoped.css';

import { useEffect, useState } from 'react';
import { getComputedCSSProperty, registerTheme } from '@siemens/ix-echarts';
import { themeSwitcher } from '@siemens/ix';
import ReactEcharts from 'echarts-for-react';

import { EChartsOption } from 'echarts';

export default function EchartsPie() {
  registerTheme(echarts);

  const [theme, setTheme] = useState(themeSwitcher.getCurrentTheme());

  useEffect(() => {
    themeSwitcher.themeChanged.on((theme: string) => {
      setTheme(theme);
    });
  }, []);

  const data = [
    { value: 29.4, name: 'China' },
    { value: 14.3, name: 'U.S' },
    { value: 9.8, name: 'EEA' },
    { value: 6.8, name: 'India' },
    { value: 4.9, name: 'Russia' },
    { value: 3.5, name: 'Japan' },
    { value: 31.5, name: 'Other' },
  ];

  const options: EChartsOption = {
    tooltip: {
      trigger: 'item',
    },
    legend: {
      icon: 'rect',
      bottom: '0',
      left: '0',
    },
    series: [
      {
        name: 'CO2 emissions from<',
        type: 'pie',
        radius: '80%',
        data: data,
        label: {
          show: true,
          color: getComputedCSSProperty('color-neutral'),
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
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

#### echarts-pie.scoped.css
```css
.echarts {
  position: relative;
  width: 100%;
  height: 40rem;
  padding-top: 1rem;
}
```

### Angular Examples

#### echarts-pie.ts
```ts
import { Component, OnInit } from '@angular/core';
import { getComputedCSSProperty, registerTheme } from '@siemens/ix-echarts';
import { themeSwitcher } from '@siemens/ix';

import { EChartsOption } from 'echarts';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './echarts-pie.html',
  styleUrls: ['./echarts-pie.css'],
})
export default class EchartsPie implements OnInit {
  theme = themeSwitcher.getCurrentTheme();

  data = [
    { value: 29.4, name: 'China' },
    { value: 14.3, name: 'U.S' },
    { value: 9.8, name: 'EEA' },
    { value: 6.8, name: 'India' },
    { value: 4.9, name: 'Russia' },
    { value: 3.5, name: 'Japan' },
    { value: 31.5, name: 'Other' },
  ];

  options: EChartsOption = {
    tooltip: {
      trigger: 'item',
    },
    legend: {
      icon: 'rect',
      bottom: '0',
      left: '0',
    },
    series: [
      {
        name: 'CO2 emissions from<',
        type: 'pie',
        radius: '80%',
        data: this.data,
        label: {
          show: true,
          color: getComputedCSSProperty('color-neutral'),
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
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

#### echarts-pie.html
```html
<div
  echarts
  [options]="options"
  [theme]="theme"
  class="echarts"
></div>
```

#### echarts-pie.css
```css
.echarts {
  position: relative;
  width: 100%;
  height: 40rem;
  padding-top: 1rem;
}
```

### Angular Standalone Examples

#### echarts-pie.ts
```ts
import { Component, OnInit } from '@angular/core';
import { NgxEchartsDirective, provideEchartsCore } from 'ngx-echarts';

import { getComputedCSSProperty, registerTheme } from '@siemens/ix-echarts';
import { themeSwitcher } from '@siemens/ix';

import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-example',
  providers: [provideEchartsCore({ echarts })],
  imports: [NgxEchartsDirective],
  templateUrl: './echarts-pie.html',
  styleUrls: ['./echarts-pie.css'],
})
export default class EchartsPie implements OnInit {
  theme = themeSwitcher.getCurrentTheme();

  data = [
    { value: 29.4, name: 'China' },
    { value: 14.3, name: 'U.S' },
    { value: 9.8, name: 'EEA' },
    { value: 6.8, name: 'India' },
    { value: 4.9, name: 'Russia' },
    { value: 3.5, name: 'Japan' },
    { value: 31.5, name: 'Other' },
  ];

  options: EChartsOption = {
    tooltip: {
      trigger: 'item',
    },
    legend: {
      icon: 'rect',
      bottom: '0',
      left: '0',
    },
    series: [
      {
        name: 'CO2 emissions from<',
        type: 'pie',
        radius: '80%',
        data: this.data,
        label: {
          show: true,
          color: getComputedCSSProperty('color-neutral'),
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
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

#### echarts-pie.html
```html
<div echarts [options]="options" [theme]="theme" class="echarts"></div>
```

#### echarts-pie.css
```css
.echarts {
  position: relative;
  width: 100%;
  height: 40rem;
  padding-top: 1rem;
}
```

### Vue Examples

#### echarts-pie.vue
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
  charts.PieChart,
  renderer.CanvasRenderer,
]);

registerTheme(echarts);

const theme = ref(themeSwitcher.getCurrentTheme());

themeSwitcher.themeChanged.on((newTheme: string) => {
  theme.value = newTheme;
});

const data = [
  { value: 29.4, name: 'China' },
  { value: 14.3, name: 'U.S' },
  { value: 9.8, name: 'EEA' },
  { value: 6.8, name: 'India' },
  { value: 4.9, name: 'Russia' },
  { value: 3.5, name: 'Japan' },
  { value: 31.5, name: 'Other' },
];

const options: EChartsOption = {
  tooltip: {
    trigger: 'item',
  },
  legend: {
    icon: 'rect',
    bottom: '0',
    left: '0',
  },
  series: [
    {
      name: 'CO2 emissions from<',
      type: 'pie',
      radius: '80%',
      data: data,
      label: {
        show: true,
        color: getComputedCSSProperty('color-neutral'),
      },
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
        },
      },
    },
  ],
} as EChartsOption;
</script>

<style scoped src="./echarts-pie.css"></style>

<template>
  <VueECharts :theme="theme" :option="options" autoresize></VueECharts>
</template>
```

#### echarts-pie.css
```css
.echarts {
  position: relative;
  width: 100%;
  height: 40rem;
  padding-top: 1rem;
}
```

## Donut charts

Donut charts are a variation of pie charts that have a hole in the center. Donut charts are often used to display the same information as a pie chart, but additional information can be displayed in the center of the chart.

### React Examples

#### echarts-circle.tsx
```tsx
import './echarts-circle.scoped.css';

import { useEffect, useState } from 'react';
import { getComputedCSSProperty, registerTheme } from '@siemens/ix-echarts';
import { themeSwitcher } from '@siemens/ix';
import ReactEcharts from 'echarts-for-react';

import { EChartsOption } from 'echarts';

export default function EchartsCircle() {
  registerTheme(echarts);

  const [theme, setTheme] = useState(themeSwitcher.getCurrentTheme());

  useEffect(() => {
    themeSwitcher.themeChanged.on((theme: string) => {
      setTheme(theme);
    });
  }, []);

  const data = [
    { value: 72.17, name: 'Windows' },
    { value: 15.42, name: 'macOS' },
    { value: 4.03, name: 'Linux' },
    { value: 2.27, name: 'Chrome OS' },
    { value: 6.11, name: 'Other' },
  ];

  const options: EChartsOption = {
    tooltip: {
      trigger: 'item',
    },
    legend: {
      icon: 'rect',
      bottom: '0',
      left: '0',
    },
    series: [
      {
        name: 'OS Share',
        type: 'pie',
        radius: ['60%', '90%'],
        label: {
          show: true,
          color: getComputedCSSProperty('color-neutral'),
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 25,
            fontWeight: 'bold',
          },
        },
        labelLine: {
          show: true,
        },
        data: data,
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

#### echarts-circle.scoped.css
```css
.echarts {
  position: relative;
  width: 100%;
  height: 40rem;
  padding-top: 1rem;
}
```

### Angular Examples

#### echarts-circle.ts
```ts
import { Component, OnInit } from '@angular/core';
import { getComputedCSSProperty, registerTheme } from '@siemens/ix-echarts';
import { themeSwitcher } from '@siemens/ix';

import { EChartsOption } from 'echarts';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './echarts-circle.html',
  styleUrls: ['./echarts-circle.css'],
})
export default class EchartsCircle implements OnInit {
  theme = themeSwitcher.getCurrentTheme();

  data = [
    { value: 72.17, name: 'Windows' },
    { value: 15.42, name: 'macOS' },
    { value: 4.03, name: 'Linux' },
    { value: 2.27, name: 'Chrome OS' },
    { value: 6.11, name: 'Other' },
  ];

  options: EChartsOption = {
    tooltip: {
      trigger: 'item',
    },
    legend: {
      icon: 'rect',
      bottom: '0',
      left: '0',
    },
    series: [
      {
        name: 'OS Share',
        type: 'pie',
        radius: ['60%', '90%'],
        label: {
          show: true,
          color: getComputedCSSProperty('color-neutral'),
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 25,
            fontWeight: 'bold',
          },
        },
        labelLine: {
          show: true,
        },
        data: this.data,
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

#### echarts-circle.html
```html
<div
  echarts
  [options]="options"
  [theme]="theme"
  class="echarts"
></div>
```

#### echarts-circle.css
```css
.echarts {
  position: relative;
  width: 100%;
  height: 40rem;
  padding-top: 1rem;
}
```

### Angular Standalone Examples

#### echarts-circle.ts
```ts
import { Component, OnInit } from '@angular/core';
import { NgxEchartsDirective, provideEchartsCore } from 'ngx-echarts';

import { getComputedCSSProperty, registerTheme } from '@siemens/ix-echarts';
import { themeSwitcher } from '@siemens/ix';

import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-example',
  providers: [provideEchartsCore({ echarts })],
  imports: [NgxEchartsDirective],
  templateUrl: './echarts-circle.html',
  styleUrls: ['./echarts-circle.css'],
})
export default class EchartsCircle implements OnInit {
  theme = themeSwitcher.getCurrentTheme();

  data = [
    { value: 72.17, name: 'Windows' },
    { value: 15.42, name: 'macOS' },
    { value: 4.03, name: 'Linux' },
    { value: 2.27, name: 'Chrome OS' },
    { value: 6.11, name: 'Other' },
  ];

  options: EChartsOption = {
    tooltip: {
      trigger: 'item',
    },
    legend: {
      icon: 'rect',
      bottom: '0',
      left: '0',
    },
    series: [
      {
        name: 'OS Share',
        type: 'pie',
        radius: ['60%', '90%'],
        label: {
          show: true,
          color: getComputedCSSProperty('color-neutral'),
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 25,
            fontWeight: 'bold',
          },
        },
        labelLine: {
          show: true,
        },
        data: this.data,
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

#### echarts-circle.html
```html
<div echarts [options]="options" [theme]="theme" class="echarts"></div>
```

#### echarts-circle.css
```css
.echarts {
  position: relative;
  width: 100%;
  height: 40rem;
  padding-top: 1rem;
}
```

### Vue Examples

#### echarts-circle.vue
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
  charts.PieChart,
  renderer.CanvasRenderer,
]);

registerTheme(echarts);

const theme = ref(themeSwitcher.getCurrentTheme());

themeSwitcher.themeChanged.on((newTheme: string) => {
  theme.value = newTheme;
});

const data = [
  { value: 72.17, name: 'Windows' },
  { value: 15.42, name: 'macOS' },
  { value: 4.03, name: 'Linux' },
  { value: 2.27, name: 'Chrome OS' },
  { value: 6.11, name: 'Other' },
];

const options: EChartsOption = {
  tooltip: {
    trigger: 'item',
  },
  legend: {
    icon: 'rect',
    bottom: '0',
    left: '0',
  },
  series: [
    {
      name: 'OS Share',
      type: 'pie',
      radius: ['60%', '90%'],
      label: {
        show: true,
        color: getComputedCSSProperty('color-neutral'),
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 25,
          fontWeight: 'bold',
        },
      },
      labelLine: {
        show: true,
      },
      data: data,
    },
  ],
} as EChartsOption;
</script>

<style scoped src="./echarts-circle.css"></style>

<template>
  <VueECharts :theme="theme" :option="options" autoresize></VueECharts>
</template>
```

#### echarts-circle.css
```css
.echarts {
  position: relative;
  width: 100%;
  height: 40rem;
  padding-top: 1rem;
}
```
