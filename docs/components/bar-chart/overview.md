# Bar chart

> Bar charts display data using rectangular bars. The length of each bar is proportional to the value it represents. Bar charts are commonly used to compare the values of different categories. We typically use bar charts to visualize data that is categorical or ordinal in nature.

# Bar chart - Code

## Basic

Common bar charts normally compare the values of different categories where the length of the bars are proportional to their values.

### React Examples

#### echarts-bar-simple.tsx
```tsx
import './echarts-bar-simple.scoped.css';

import { useEffect, useState } from 'react';
import { registerTheme } from '@siemens/ix-echarts';
import { themeSwitcher } from '@siemens/ix';
import ReactEcharts from 'echarts-for-react';

import { EChartsOption } from 'echarts';

export default function EchartsBarSimple() {
  registerTheme(echarts);

  const [theme, setTheme] = useState(themeSwitcher.getCurrentTheme());

  useEffect(() => {
    themeSwitcher.themeChanged.on((theme: string) => {
      setTheme(theme);
    });
  }, []);

  const data = {
    products: [
      'Product A',
      'Product B',
      'Product C',
      'Product D',
      'Product E',
      'Product F',
    ],
    sales: [10.3, 9.2, 7.3, 6.4, 6.2, 4.4],
  };

  const options: EChartsOption = {
    xAxis: {
      data: data.products,
      name: 'Product',
      nameLocation: 'end',
    },
    yAxis: {
      name: 'Number of sold products \n (in Mio)',
      nameLocation: 'end',
    },
    legend: {
      show: true,
    },
    series: [
      {
        data: data.sales,
        type: 'bar',
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

#### echarts-bar-simple.scoped.css
```css
.echarts {
  position: relative;
  width: 100%;
  height: 40rem;
  padding-top: 1rem;
}
```

### Angular Examples

#### echarts-bar-simple.ts
```ts
import { Component, OnInit } from '@angular/core';
import { registerTheme } from '@siemens/ix-echarts';
import { themeSwitcher } from '@siemens/ix';

import { EChartsOption } from 'echarts';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './echarts-bar-simple.html',
  styleUrls: ['./echarts-bar-simple.css'],
})
export default class EchartsBarSimple implements OnInit {
  theme = themeSwitcher.getCurrentTheme();
  data = {
    products: [
      'Product A',
      'Product B',
      'Product C',
      'Product D',
      'Product E',
      'Product F',
    ],
    sales: [10.3, 9.2, 7.3, 6.4, 6.2, 4.4],
  };

  options: EChartsOption = {
    xAxis: {
      data: this.data.products,
      name: 'Product',
      nameLocation: 'end',
    },
    yAxis: {
      name: 'Number of sold products \n (in Mio)',
      nameLocation: 'end',
    },
    legend: {
      show: true,
    },
    series: [
      {
        data: this.data.sales,
        type: 'bar',
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

#### echarts-bar-simple.html
```html
<div
  echarts
  [options]="options"
  [theme]="theme"
  class="echarts"
></div>
```

#### echarts-bar-simple.css
```css
.echarts {
  position: relative;
  width: 100%;
  height: 40rem;
  padding-top: 1rem;
}
```

### Angular Standalone Examples

#### echarts-bar-simple.ts
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
  templateUrl: './echarts-bar-simple.html',
  styleUrls: ['./echarts-bar-simple.css'],
})
export default class EchartsBarSimple implements OnInit {
  theme = themeSwitcher.getCurrentTheme();
  data = {
    products: [
      'Product A',
      'Product B',
      'Product C',
      'Product D',
      'Product E',
      'Product F',
    ],
    sales: [10.3, 9.2, 7.3, 6.4, 6.2, 4.4],
  };

  options: EChartsOption = {
    xAxis: {
      data: this.data.products,
      name: 'Product',
      nameLocation: 'end',
    },
    yAxis: {
      name: 'Number of sold products \n (in Mio)',
      nameLocation: 'end',
    },
    legend: {
      show: true,
    },
    series: [
      {
        data: this.data.sales,
        type: 'bar',
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

#### echarts-bar-simple.html
```html
<div echarts [options]="options" [theme]="theme" class="echarts"></div>
```

#### echarts-bar-simple.css
```css
.echarts {
  position: relative;
  width: 100%;
  height: 40rem;
  padding-top: 1rem;
}
```

### Vue Examples

#### echarts-bar-simple.vue
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

const data = {
  products: [
    'Product A',
    'Product B',
    'Product C',
    'Product D',
    'Product E',
    'Product F',
  ],
  sales: [10.3, 9.2, 7.3, 6.4, 6.2, 4.4],
};

const options: EChartsOption = {
  xAxis: {
    data: data.products,
    name: 'Product',
    nameLocation: 'end',
  },
  yAxis: {
    name: 'Number of sold products \n (in Mio)',
    nameLocation: 'end',
  },
  legend: {
    show: true,
  },
  series: [
    {
      data: data.sales,
      type: 'bar',
    },
  ],
} as EChartsOption;
</script>

<style scoped src="./echarts-bar-simple.css"></style>

<template>
  <VueECharts :theme="theme" :option="options" autoresize></VueECharts>
</template>
```

#### echarts-bar-simple.css
```css
.echarts {
  position: relative;
  width: 100%;
  height: 40rem;
  padding-top: 1rem;
}
```

## Stacked bar chart

Stacked bar charts are typically used to visualize the relationship between the parts and the whole. Each bar is divided into segments, with each segment representing a different category.

### React Examples

#### echarts-bar-horizontal-stacked.tsx
```tsx
import './echarts-bar-horizontal-stacked.scoped.css';

import { useEffect, useState } from 'react';
import { registerTheme } from '@siemens/ix-echarts';
import { themeSwitcher } from '@siemens/ix';
import ReactEcharts from 'echarts-for-react';

import { BarSeriesOption, EChartsOption } from 'echarts';

export default function EchartsBarHorizontalStacked() {
  registerTheme(echarts);

  const [theme, setTheme] = useState(themeSwitcher.getCurrentTheme());

  useEffect(() => {
    themeSwitcher.themeChanged.on((theme: string) => {
      setTheme(theme);
    });
  }, []);

  const data = {
    years: ['2023', '2022', '2021', '2020', '2019'],
    salesEurope: [87, 22, 28, 43, 79],
    salesUS: [35, 24, 33, 5, 40],
    salesChina: [19, 44, 23, 5, 10],
  };

  const seriesData = [
    { name: 'Europe', data: data.salesEurope },
    { name: 'U.S', data: data.salesUS },
    { name: 'China', data: data.salesChina },
  ];

  const series: BarSeriesOption[] = seriesData.map(({ name, data }) => ({
    name,
    data,
    type: 'bar',
    stack: 'x',
  }));

  const options: EChartsOption = {
    xAxis: {
      type: 'value',
      name: 'Revenue (in Millions of USD)',
      nameLocation: 'middle',
      nameGap: 40,
    },
    yAxis: {
      type: 'category',
      data: data.years,
      name: 'Years',
      nameLocation: 'end',
    },
    legend: {
      show: true,
      left: '0',
      bottom: '0',
    },
    series: series,
  };

  return <ReactEcharts option={options} theme={theme} className="echarts" />;
}
```

#### echarts-bar-horizontal-stacked.scoped.css
```css
.echarts {
  position: relative;
  width: 100%;
  height: 40rem;
  padding-top: 1rem;
}
```

### Angular Examples

#### echarts-bar-horizontal-stacked.ts
```ts
import { Component, OnInit } from '@angular/core';
import { registerTheme } from '@siemens/ix-echarts';
import { themeSwitcher } from '@siemens/ix';

import { BarSeriesOption, EChartsOption } from 'echarts';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './echarts-bar-horizontal-stacked.html',
  styleUrls: ['./echarts-bar-horizontal-stacked.css'],
})
export default class EchartsBarHorizontalStacked implements OnInit {
  theme = themeSwitcher.getCurrentTheme();

  data = {
    years: ['2023', '2022', '2021', '2020', '2019'],
    salesEurope: [87, 22, 28, 43, 79],
    salesUS: [35, 24, 33, 5, 40],
    salesChina: [19, 44, 23, 5, 10],
  };

  seriesData = [
    { name: 'Europe', data: this.data.salesEurope },
    { name: 'U.S', data: this.data.salesUS },
    { name: 'China', data: this.data.salesChina },
  ];

  series: BarSeriesOption[] = this.seriesData.map(({ name, data }) => ({
    name,
    data,
    type: 'bar',
    stack: 'x',
  }));

  options: EChartsOption = {
    xAxis: {
      type: 'value',
      name: 'Revenue (in Millions of USD)',
      nameLocation: 'middle',
      nameGap: 40,
    },
    yAxis: {
      type: 'category',
      data: this.data.years,
      name: 'Years',
      nameLocation: 'end',
    },
    legend: {
      show: true,
      bottom: '0',
      left: '0',
    },
    series: this.series,
  };

  ngOnInit() {
    registerTheme(echarts);

    themeSwitcher.themeChanged.on((theme: string) => {
      this.theme = theme;
    });
  }
}
```

#### echarts-bar-horizontal-stacked.html
```html
<div
  echarts
  [options]="options"
  [theme]="theme"
  class="echarts"
></div>
```

#### echarts-bar-horizontal-stacked.css
```css
.echarts {
  position: relative;
  width: 100%;
  height: 40rem;
  padding-top: 1rem;
}
```

### Angular Standalone Examples

#### echarts-bar-horizontal-stacked.ts
```ts
import { Component, OnInit } from '@angular/core';
import { NgxEchartsDirective, provideEchartsCore } from 'ngx-echarts';

import { registerTheme } from '@siemens/ix-echarts';
import { themeSwitcher } from '@siemens/ix';

import { BarSeriesOption, EChartsOption } from 'echarts';

@Component({
  selector: 'app-example',
  providers: [provideEchartsCore({ echarts })],
  imports: [NgxEchartsDirective],
  templateUrl: './echarts-bar-horizontal-stacked.html',
  styleUrls: ['./echarts-bar-horizontal-stacked.css'],
})
export default class EchartsBarHorizontalStacked implements OnInit {
  theme = themeSwitcher.getCurrentTheme();

  data = {
    years: ['2023', '2022', '2021', '2020', '2019'],
    salesEurope: [87, 22, 28, 43, 79],
    salesUS: [35, 24, 33, 5, 40],
    salesChina: [19, 44, 23, 5, 10],
  };

  seriesData = [
    { name: 'Europe', data: this.data.salesEurope },
    { name: 'U.S', data: this.data.salesUS },
    { name: 'China', data: this.data.salesChina },
  ];

  series: BarSeriesOption[] = this.seriesData.map(({ name, data }) => ({
    name,
    data,
    type: 'bar',
    stack: 'x',
  }));

  options: EChartsOption = {
    xAxis: {
      type: 'value',
      name: 'Revenue (in Millions of USD)',
      nameLocation: 'middle',
      nameGap: 40,
    },
    yAxis: {
      type: 'category',
      data: this.data.years,
      name: 'Years',
      nameLocation: 'end',
    },
    legend: {
      show: true,
      bottom: '0',
      left: '0',
    },
    series: this.series,
  };

  ngOnInit() {
    registerTheme(echarts);

    themeSwitcher.themeChanged.on((theme: string) => {
      this.theme = theme;
    });
  }
}
```

#### echarts-bar-horizontal-stacked.html
```html
<div echarts [options]="options" [theme]="theme" class="echarts"></div>
```

#### echarts-bar-horizontal-stacked.css
```css
.echarts {
  position: relative;
  width: 100%;
  height: 40rem;
  padding-top: 1rem;
}
```

### Vue Examples

#### echarts-bar-horizontal-stacked.vue
```vue
<script setup lang="ts">
import { ref } from 'vue';
import { registerTheme } from '@siemens/ix-echarts';
import { themeSwitcher } from '@siemens/ix';
import VueECharts from 'vue-echarts';

import { BarSeriesOption, EChartsOption } from 'echarts';

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

const data = {
  years: ['2023', '2022', '2021', '2020', '2019'],
  salesEurope: [87, 22, 28, 43, 79],
  salesUS: [35, 24, 33, 5, 40],
  salesChina: [19, 44, 23, 5, 10],
};

const seriesData = [
  { name: 'Europe', data: data.salesEurope },
  { name: 'U.S', data: data.salesUS },
  { name: 'China', data: data.salesChina },
];

const series = seriesData.map(
  ({ name, data }) =>
    ({
      name,
      data,
      type: 'bar',
      stack: 'x',
    } as BarSeriesOption)
);

const options: EChartsOption = {
  xAxis: {
    type: 'value',
    name: 'Revenue (in Millions of USD)',
    nameLocation: 'middle',
    nameGap: 40,
  },
  yAxis: {
    type: 'category',
    data: data.years,
    name: 'Years',
    nameLocation: 'end',
  },
  legend: {
    show: true,
    bottom: '0',
    left: '0',
  },
  series: series,
} as EChartsOption;
</script>

<style scoped src="./echarts-bar-horizontal-stacked.css"></style>

<template>
  <VueECharts :theme="theme" :option="options" autoresize></VueECharts>
</template>
```

#### echarts-bar-horizontal-stacked.css
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
- Do use short and clear category names
- Do include context and additional information when necessary
- Do arrange categories and bars in a logical order
- Don’t use too many bars in one chart
- Don’t overcrowd charts with colors and categories, especially the stacked variant
- Don’t use stacked bars if the total value is not important
