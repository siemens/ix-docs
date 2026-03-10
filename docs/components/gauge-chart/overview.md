# Gauge chart

> Gauge charts are a type of chart that displays data using a dial or needle to indicate a value within a specific range. Gauge charts are commonly used to visualize performance metrics, such as speedometers, progress meters, and other KPIs. We typically use gauge charts to represent a single value within a range of values.

# Gauge chart - Code

## Metric gauge charts

Metrics gauge charts, also known as dial or speedometer charts, are an effective way to visualize key performance indicators (KPIs) and other metrics. These charts indicate the current value of a metric within a predefined range, often segmented into different zones, e.g. red for poor performance, green for good performance, etc.

### React Examples

#### echarts-gauge.tsx
```tsx
import './echarts-gauge.scoped.css';

import { useEffect, useState } from 'react';
import { getComputedCSSProperty, registerTheme } from '@siemens/ix-echarts';
import { themeSwitcher } from '@siemens/ix';
import ReactEcharts from 'echarts-for-react';

import { EChartsOption } from 'echarts';

export default function EchartsGauge() {
  registerTheme(echarts);

  const [theme, setTheme] = useState(themeSwitcher.getCurrentTheme());

  useEffect(() => {
    themeSwitcher.themeChanged.on((theme: string) => {
      setTheme(theme);
    });
  }, []);

  const value = 45.3;

  function getGaugeColor(value: number) {
    if (value > 60) return getComputedCSSProperty('color-success');
    else if (value > 25) return getComputedCSSProperty('color-warning');
    else {
      return getComputedCSSProperty('color-alarm');
    }
  }

  const options: EChartsOption = {
    series: [
      {
        id: '1',
        type: 'gauge',
        axisLine: {
          show: true,
          lineStyle: {
            width: 18,
            color: [[1, getComputedCSSProperty('color-neutral-40')]],
          },
        },
        axisTick: {
          show: false,
        },
        radius: '75%',
        center: ['50%', '60%'],
        startAngle: 180,
        endAngle: 0,
        splitNumber: 1,
        splitLine: {
          show: true,
        },
        axisLabel: {
          show: true,
          distance: 30,
          fontSize: 16,
          color: getComputedCSSProperty('color-std-text'),
        },
        progress: {
          show: true,
          overlap: false,
          width: 35,
          itemStyle: {
            borderMiterLimit: 16,
            color: getGaugeColor(value),
          },
        },
        pointer: {
          show: false,
        },
        data: [
          {
            value: value,
            title: {
              show: false,
            },
            detail: {
              show: true,
              offsetCenter: [0, -70],
              overflow: 'break',
              fontSize: '1.5rem',
              width: 250,
              lineHeight: 35,
              color: getComputedCSSProperty('color-soft-text'),
              formatter: '{value}Mbps \nNetwork Speed',
            },
            pointer: {
              show: false,
            },
          },
        ],
      },
      {
        id: '2',
        type: 'gauge',
        splitLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          show: false,
        },
        axisLine: {
          show: true,
          lineStyle: {
            width: 5,
            color: [
              [0.25, getComputedCSSProperty('color-alarm')],
              [0.6, getComputedCSSProperty('color-warning')],
              [1, getComputedCSSProperty('color-success')],
            ],
          },
        },
        radius: '80%',
        center: ['50%', '60%'],
        startAngle: 180,
        endAngle: 0,
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

#### echarts-gauge.scoped.css
```css
.echarts {
  position: relative;
  width: 100%;
  height: 40rem;
  padding-top: 1rem;
}
```

### Angular Examples

#### echarts-gauge.ts
```ts
import { Component, OnInit } from '@angular/core';
import { getComputedCSSProperty, registerTheme } from '@siemens/ix-echarts';
import { themeSwitcher } from '@siemens/ix';

import { EChartsOption } from 'echarts';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './echarts-gauge.html',
  styleUrls: ['./echarts-gauge.css'],
})
export default class EchartsGauge implements OnInit {
  theme = themeSwitcher.getCurrentTheme();

  value = 45.3;

  private getGaugeColor(value: number) {
    if (value > 60) return getComputedCSSProperty('color-success');
    else if (value > 25) return getComputedCSSProperty('color-warning');
    else {
      return getComputedCSSProperty('color-alarm');
    }
  }

  options: EChartsOption = {
    series: [
      {
        id: '1',
        type: 'gauge',
        axisLine: {
          show: true,
          lineStyle: {
            width: 18,
            color: [[1, getComputedCSSProperty('color-neutral-40')]],
          },
        },
        axisTick: {
          show: false,
        },
        radius: '75%',
        center: ['50%', '60%'],
        startAngle: 180,
        endAngle: 0,
        splitNumber: 1,
        splitLine: {
          show: true,
        },
        axisLabel: {
          show: true,
          distance: 30,
          fontSize: 16,
          color: getComputedCSSProperty('color-std-text'),
        },
        progress: {
          show: true,
          overlap: false,
          width: 35,
          itemStyle: {
            borderMiterLimit: 16,
            color: this.getGaugeColor(this.value),
          },
        },
        pointer: {
          show: false,
        },
        data: [
          {
            value: this.value,
            title: {
              show: false,
            },
            detail: {
              show: true,
              offsetCenter: [0, -70],
              overflow: 'break',
              fontSize: '1.5rem',
              width: 250,
              lineHeight: 35,
              color: getComputedCSSProperty('color-soft-text'),
              formatter: '{value}Mbps \nNetwork Speed',
            },
            pointer: {
              show: false,
            },
          },
        ],
      },
      {
        id: '2',
        type: 'gauge',
        splitLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          show: false,
        },
        axisLine: {
          show: true,
          lineStyle: {
            width: 5,
            color: [
              [0.25, getComputedCSSProperty('color-alarm')],
              [0.6, getComputedCSSProperty('color-warning')],
              [1, getComputedCSSProperty('color-success')],
            ],
          },
        },
        radius: '80%',
        center: ['50%', '60%'],
        startAngle: 180,
        endAngle: 0,
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

#### echarts-gauge.html
```html
<div
  echarts
  [options]="options"
  [theme]="theme"
  class="echarts"
></div>
```

#### echarts-gauge.css
```css
.echarts {
  position: relative;
  width: 100%;
  height: 40rem;
  padding-top: 1rem;
}
```

### Angular Standalone Examples

#### echarts-gauge.ts
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
  templateUrl: './echarts-gauge.html',
  styleUrls: ['./echarts-gauge.css'],
})
export default class EchartsGauge implements OnInit {
  theme = themeSwitcher.getCurrentTheme();

  value = 45.3;

  private getGaugeColor(value: number) {
    if (value > 60) return getComputedCSSProperty('color-success');
    else if (value > 25) return getComputedCSSProperty('color-warning');
    else {
      return getComputedCSSProperty('color-alarm');
    }
  }

  options: EChartsOption = {
    series: [
      {
        id: '1',
        type: 'gauge',
        axisLine: {
          show: true,
          lineStyle: {
            width: 18,
            color: [[1, getComputedCSSProperty('color-neutral-40')]],
          },
        },
        axisTick: {
          show: false,
        },
        radius: '75%',
        center: ['50%', '60%'],
        startAngle: 180,
        endAngle: 0,
        splitNumber: 1,
        splitLine: {
          show: true,
        },
        axisLabel: {
          show: true,
          distance: 30,
          fontSize: 16,
          color: getComputedCSSProperty('color-std-text'),
        },
        progress: {
          show: true,
          overlap: false,
          width: 35,
          itemStyle: {
            borderMiterLimit: 16,
            color: this.getGaugeColor(this.value),
          },
        },
        pointer: {
          show: false,
        },
        data: [
          {
            value: this.value,
            title: {
              show: false,
            },
            detail: {
              show: true,
              offsetCenter: [0, -70],
              overflow: 'break',
              fontSize: '1.5rem',
              width: 250,
              lineHeight: 35,
              color: getComputedCSSProperty('color-soft-text'),
              formatter: '{value}Mbps \nNetwork Speed',
            },
            pointer: {
              show: false,
            },
          },
        ],
      },
      {
        id: '2',
        type: 'gauge',
        splitLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          show: false,
        },
        axisLine: {
          show: true,
          lineStyle: {
            width: 5,
            color: [
              [0.25, getComputedCSSProperty('color-alarm')],
              [0.6, getComputedCSSProperty('color-warning')],
              [1, getComputedCSSProperty('color-success')],
            ],
          },
        },
        radius: '80%',
        center: ['50%', '60%'],
        startAngle: 180,
        endAngle: 0,
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

#### echarts-gauge.html
```html
<div echarts [options]="options" [theme]="theme" class="echarts"></div>
```

#### echarts-gauge.css
```css
.echarts {
  position: relative;
  width: 100%;
  height: 40rem;
  padding-top: 1rem;
}
```

### Vue Examples

#### echarts-gauge.vue
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
  charts.GaugeChart,
  renderer.CanvasRenderer,
]);

registerTheme(echarts);

const theme = ref(themeSwitcher.getCurrentTheme());

themeSwitcher.themeChanged.on((newTheme: string) => {
  theme.value = newTheme;
});

const value = 45.3;

function getGaugeColor(value: number) {
  if (value > 60) return getComputedCSSProperty('color-success');
  else if (value > 25) return getComputedCSSProperty('color-warning');
  else {
    return getComputedCSSProperty('color-alarm');
  }
}

const options: EChartsOption = {
  series: [
    {
      id: '1',
      type: 'gauge',
      axisLine: {
        show: true,
        lineStyle: {
          width: 18,
          color: [[1, getComputedCSSProperty('color-neutral-40')]],
        },
      },
      axisTick: {
        show: false,
      },
      radius: '75%',
      center: ['50%', '60%'],
      startAngle: 180,
      endAngle: 0,
      splitNumber: 1,
      splitLine: {
        show: true,
      },
      axisLabel: {
        show: true,
        distance: 30,
        fontSize: 16,
        color: getComputedCSSProperty('color-std-text'),
      },
      progress: {
        show: true,
        overlap: false,
        width: 35,
        itemStyle: {
          borderMiterLimit: 16,
          color: getGaugeColor(value),
        },
      },
      pointer: {
        show: false,
      },
      data: [
        {
          value: value,
          title: {
            show: false,
          },
          detail: {
            show: true,
            offsetCenter: [0, -70],
            overflow: 'break',
            fontSize: '1.5rem',
            width: 250,
            lineHeight: 35,
            color: getComputedCSSProperty('color-soft-text'),
            formatter: '{value}Mbps \nNetwork Speed',
          },
          pointer: {
            show: false,
          },
        },
      ],
    },
    {
      id: '2',
      type: 'gauge',
      splitLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
      axisLine: {
        show: true,
        lineStyle: {
          width: 5,
          color: [
            [0.25, getComputedCSSProperty('color-alarm')],
            [0.6, getComputedCSSProperty('color-warning')],
            [1, getComputedCSSProperty('color-success')],
          ],
        },
      },
      radius: '80%',
      center: ['50%', '60%'],
      startAngle: 180,
      endAngle: 0,
    },
  ],
} as EChartsOption;
</script>

<style scoped src="./echarts-gauge.css"></style>

<template>
  <VueECharts :theme="theme" :option="options" autoresize></VueECharts>
</template>
```

#### echarts-gauge.css
```css
.echarts {
  position: relative;
  width: 100%;
  height: 40rem;
  padding-top: 1rem;
}
```

## Circle gauge charts

Circle gauge charts, also known as radial progress charts or circular progress bars, are a visually appealing way to represent data and track progress towards a goal. These charts use a circle to display the percentage of completion, making it easy to quickly grasp the status of a project or task. The circle is typically filled in proportion to the progress made, with the center often displaying the percentage value.

### React Examples

#### echarts-progress-circle.tsx
```tsx
import './echarts-progress-circle.scoped.css';

import { useEffect, useState } from 'react';
import { getComputedCSSProperty, registerTheme } from '@siemens/ix-echarts';
import { themeSwitcher } from '@siemens/ix';
import ReactEcharts from 'echarts-for-react';

import { EChartsOption } from 'echarts';

export default function EchartsGauge() {
  registerTheme(echarts);

  const [theme, setTheme] = useState(themeSwitcher.getCurrentTheme());

  useEffect(() => {
    themeSwitcher.themeChanged.on((theme: string) => {
      setTheme(theme);
    });
  }, []);

  const value = 60;

  const options: EChartsOption = {
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
        startAngle: 90,
        endAngle: -270,
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
              fontSize: '2rem',
              fontWeight: 'normal',
              color: getComputedCSSProperty('color-soft-text'),
              rich: {
                valueStyle: {
                  fontSize: '2rem',
                  color: getComputedCSSProperty('color-soft-text'),
                  fontWeight: 'bold',
                },
                textStyle: {
                  fontSize: '1.5rem',
                  color: getComputedCSSProperty('color-soft-text'),
                },
              },
              formatter: `{valueStyle|{value}}/100\n{textStyle|completed}`,
            },
            pointer: {
              show: false,
            },
          },
        ],
      },
    ],
  };

  return (
    <ReactEcharts
      style={{ height: '40rem' }}
      option={options}
      theme={theme}
      className="echarts-gauge"
    />
  );
}
```

#### echarts-progress-circle.scoped.css
```css
.echarts-gauge {
  position: relative;
  width: 100%;
  height: 20rem;
  padding-top: 3rem;
}
```

### Angular Examples

#### echarts-progress-circle.ts
```ts
import { Component, OnInit } from '@angular/core';
import { getComputedCSSProperty, registerTheme } from '@siemens/ix-echarts';
import { themeSwitcher } from '@siemens/ix';

import { EChartsOption } from 'echarts';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './echarts-progress-circle.html',
  styleUrls: ['./echarts-progress-circle.css'],
})
export default class EchartsProgressCircle implements OnInit {
  theme = themeSwitcher.getCurrentTheme();

  value = 60;

  options: EChartsOption = {
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
        startAngle: 90,
        endAngle: -270,
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
            value: this.value,
            detail: {
              offsetCenter: [0, 0],
              fontSize: '2rem',
              fontWeight: 'normal',
              color: getComputedCSSProperty('color-soft-text'),
              rich: {
                valueStyle: {
                  fontSize: '2rem',
                  color: getComputedCSSProperty('color-soft-text'),
                  fontWeight: 'bold',
                },
                textStyle: {
                  fontSize: '1.5rem',
                  color: getComputedCSSProperty('color-soft-text'),
                },
              },
              formatter: `{valueStyle|{value}}/100\n{textStyle|completed}`,
            },
            pointer: {
              show: false,
            },
          },
        ],
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

#### echarts-progress-circle.html
```html
<div
  echarts
  [options]="options"
  [theme]="theme"
  class="echarts-gauge"
></div>
```

#### echarts-progress-circle.css
```css
.echarts-gauge {
  position: relative;
  width: 100%;
  height: 20rem;
  padding-top: 3rem;
}
```

### Angular Standalone Examples

#### echarts-progress-circle.ts
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
  templateUrl: './echarts-progress-circle.html',
  styleUrls: ['./echarts-progress-circle.css'],
})
export default class EchartsProgressCircle implements OnInit {
  theme = themeSwitcher.getCurrentTheme();

  value = 60;

  options: EChartsOption = {
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
        startAngle: 90,
        endAngle: -270,
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
            value: this.value,
            detail: {
              offsetCenter: [0, 0],
              fontSize: '2rem',
              fontWeight: 'normal',
              color: getComputedCSSProperty('color-soft-text'),
              rich: {
                valueStyle: {
                  fontSize: '2rem',
                  color: getComputedCSSProperty('color-soft-text'),
                  fontWeight: 'bold',
                },
                textStyle: {
                  fontSize: '1.5rem',
                  color: getComputedCSSProperty('color-soft-text'),
                },
              },
              formatter: `{valueStyle|{value}}/100\n{textStyle|completed}`,
            },
            pointer: {
              show: false,
            },
          },
        ],
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

#### echarts-progress-circle.html
```html
<div echarts [options]="options" [theme]="theme" class="echarts-gauge"></div>
```

#### echarts-progress-circle.css
```css
.echarts-gauge {
  position: relative;
  width: 100%;
  height: 20rem;
  padding-top: 3rem;
}
```

### Vue Examples

#### echarts-progress-circle.vue
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
  charts.GaugeChart,
  renderer.CanvasRenderer,
]);

registerTheme(echarts);

const theme = ref(themeSwitcher.getCurrentTheme());

themeSwitcher.themeChanged.on((newTheme: string) => {
  theme.value = newTheme;
});

const value = 60;

const options: EChartsOption = {
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
      startAngle: 90,
      endAngle: -270,
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
            fontSize: '2rem',
            fontWeight: 'normal',
            color: getComputedCSSProperty('color-soft-text'),
            rich: {
              valueStyle: {
                fontSize: '2rem',
                color: getComputedCSSProperty('color-soft-text'),
                fontWeight: 'bold',
              },
              textStyle: {
                fontSize: '1.5rem',
                color: getComputedCSSProperty('color-soft-text'),
              },
            },
            formatter: `{valueStyle|{value}}/100\n{textStyle|completed}`,
          },
          pointer: {
            show: false,
          },
        },
      ],
    },
  ],
} as EChartsOption;
</script>

<style scoped src="./echarts-progress-circle.css"></style>

<template>
  <VueECharts
    :theme="theme"
    :option="options"
    autoresize
    class="echarts-gauge"
  ></VueECharts>
</template>
```

#### echarts-progress-circle.css
```css
.echarts-gauge {
  position: relative;
  width: 100%;
  height: 20rem;
  padding-top: 3rem;
}
```

## Arc gauge charts

Arc gauge charts, also known as semi-circular progress bars, are a dynamic way to visualize data and track progress. Unlike circle charts, arc gauge charts use a semi-circle or arc to represent the percentage of completion. This design can be particularly effective in dashboards and user interfaces where users need a clear and engaging visual representation but space is limited.

### React Examples

#### echarts-progress-arc.tsx
```tsx
import './echarts-progress-arc.scoped.css';

import { useEffect, useState } from 'react';
import { getComputedCSSProperty, registerTheme } from '@siemens/ix-echarts';
import { themeSwitcher } from '@siemens/ix';
import ReactEcharts from 'echarts-for-react';

import { EChartsOption } from 'echarts';

export default function EchartsProgressArc() {
  registerTheme(echarts);

  const [theme, setTheme] = useState(themeSwitcher.getCurrentTheme());

  useEffect(() => {
    themeSwitcher.themeChanged.on((theme: string) => {
      setTheme(theme);
    });
  }, []);

  const value = 60;

  const options: EChartsOption = {
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

  return (
    <ReactEcharts
      style={{ height: '40rem' }}
      option={options}
      theme={theme}
      className="echarts-gauge"
    />
  );
}
```

#### echarts-progress-arc.scoped.css
```css
.echarts-gauge {
  position: relative;
  width: 100%;
  height: 20rem;
  padding-top: 3rem;
}
```

### Angular Examples

#### echarts-progress-arc.ts
```ts
import { Component, OnInit } from '@angular/core';
import { getComputedCSSProperty, registerTheme } from '@siemens/ix-echarts';
import { themeSwitcher } from '@siemens/ix';

import { EChartsOption } from 'echarts';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './echarts-progress-arc.html',
  styleUrls: ['./echarts-progress-arc.css'],
})
export default class EchartsProgressArc implements OnInit {
  theme = themeSwitcher.getCurrentTheme();

  value = 60;

  options: EChartsOption = {
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
            value: this.value,
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

  ngOnInit() {
    registerTheme(echarts);

    themeSwitcher.themeChanged.on((theme: string) => {
      this.theme = theme;
    });
  }
}
```

#### echarts-progress-arc.html
```html
<div
  echarts
  [options]="options"
  [theme]="theme"
  class="echarts-gauge"
></div>
```

#### echarts-progress-arc.css
```css
.echarts-gauge {
  position: relative;
  width: 100%;
  height: 20rem;
  padding-top: 3rem;
}
```

### Angular Standalone Examples

#### echarts-progress-arc.ts
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
  templateUrl: './echarts-progress-arc.html',
  styleUrls: ['./echarts-progress-arc.css'],
})
export default class EchartsProgressArc implements OnInit {
  theme = themeSwitcher.getCurrentTheme();

  value = 60;

  options: EChartsOption = {
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
            value: this.value,
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

  ngOnInit() {
    registerTheme(echarts);

    themeSwitcher.themeChanged.on((theme: string) => {
      this.theme = theme;
    });
  }
}
```

#### echarts-progress-arc.html
```html
<div echarts [options]="options" [theme]="theme" class="echarts-gauge"></div>
```

#### echarts-progress-arc.css
```css
.echarts-gauge {
  position: relative;
  width: 100%;
  height: 20rem;
  padding-top: 3rem;
}
```

### Vue Examples

#### echarts-progress-arc.vue
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
  charts.GaugeChart,
  renderer.CanvasRenderer,
]);

registerTheme(echarts);

const theme = ref(themeSwitcher.getCurrentTheme());

themeSwitcher.themeChanged.on((newTheme: string) => {
  theme.value = newTheme;
});

const value = 60;

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
    } as EChartsOption,
  ],
};
</script>

<style scoped src="./echarts-progress-arc.css"></style>

<template>
  <VueECharts
    :theme="theme"
    :option="options"
    autoresize
    class="echarts-gauge"
  ></VueECharts>
</template>
```

#### echarts-progress-arc.css
```css
.echarts-gauge {
  position: relative;
  width: 100%;
  height: 20rem;
  padding-top: 3rem;
}
```

## Dos and Don’ts

- Do keep it simple and easy to read, with a clear needle and well-defined ranges
- Do use color coding, e.g. green for good, red for danger, etc. to indicate different ranges
- Do label ranges and the needle value clearly to avoid confusion
- Don’t overcrowd the gauge with too many ranges or labels
- Don’t use gauge charts for visualizing complex data or large datasets
- Don’t use similar colors for adjacent ranges to avoid confusion
