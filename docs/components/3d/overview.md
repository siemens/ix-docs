# 3D chart

> 3D charts are a powerful way to visualize data in three dimensions. They provide a more immersive and interactive experience compared to traditional 2D charts. We typically use 3D charts to represent complex data sets or to visualize data in a more engaging way.

# 3D Chart - Code

The `echarts-gl` package extends ECharts to support 3D visualizations. With this package, you can design a variety of 3D charts, including:

- 3D scatter plots
- 3D bar charts
- 3D surface plots

## Basic

### React Examples

#### echarts-special-3d.tsx
```tsx
import './echarts-special-3d.scoped.css';

import { useEffect, useState } from 'react';
import { getComputedCSSProperty, registerTheme } from '@siemens/ix-echarts';
import { themeSwitcher } from '@siemens/ix';
import ReactEcharts from 'echarts-for-react';

import { EChartsOption } from 'echarts';

export default function EchartsSpecial3d() {
  registerTheme(echarts);

  const [theme, setTheme] = useState(themeSwitcher.getCurrentTheme());

  useEffect(() => {
    themeSwitcher.themeChanged.on((theme: string) => {
      setTheme(theme);
    });
  }, []);

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

  const options: EChartsOption = {
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
          z: (x: number, y: number): string | number => {
            if (Math.abs(x) < 0.1 && Math.abs(y) < 0.1) {
              return '-';
            }
            return Math.sin(x * Math.PI) * Math.sin(y * Math.PI);
          },
        },
      } as any,
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

#### echarts-special-3d.scoped.css
```css
.echarts {
  position: relative;
  width: 100%;
  height: 40rem;
  padding-top: 1rem;
}
```

### Angular Examples

#### echarts-special-3d.ts
```ts
import { Component, OnInit } from '@angular/core';
import { getComputedCSSProperty, registerTheme } from '@siemens/ix-echarts';
import { themeSwitcher } from '@siemens/ix';
import { EChartsOption } from 'echarts';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './echarts-special-3d.html',
  styleUrls: ['./echarts-special-3d.css'],
})
export default class EchartsSpecial3d implements OnInit {
  theme = themeSwitcher.getCurrentTheme();

  gridConfig() {
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

  options: EChartsOption = {
    tooltip: {},
    visualMap: {
      show: false,
      dimension: 2,
      min: -1,
      max: 1,
    },
    xAxis3D: this.gridConfig(),
    yAxis3D: this.gridConfig(),
    zAxis3D: this.gridConfig(),
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
          z: (x: number, y: number): string | number => {
            if (Math.abs(x) < 0.1 && Math.abs(y) < 0.1) {
              return '-';
            }
            return Math.sin(x * Math.PI) * Math.sin(y * Math.PI);
          },
        },
      } as any,
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

#### echarts-special-3d.html
```html
<div
  echarts
  [options]="options"
  [theme]="theme"
  class="echarts"
></div>
```

#### echarts-special-3d.css
```css
.echarts {
  position: relative;
  width: 100%;
  height: 40rem;
  padding-top: 1rem;
}
```

### Angular Standalone Examples

#### echarts-special-3d.ts
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
  templateUrl: './echarts-special-3d.html',
  styleUrls: ['./echarts-special-3d.css'],
})
export default class EchartsSpecial3d implements OnInit {
  theme = themeSwitcher.getCurrentTheme();

  gridConfig() {
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

  options: EChartsOption = {
    tooltip: {},
    visualMap: {
      show: false,
      dimension: 2,
      min: -1,
      max: 1,
    },
    xAxis3D: this.gridConfig(),
    yAxis3D: this.gridConfig(),
    zAxis3D: this.gridConfig(),
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
          z: (x: number, y: number): string | number => {
            if (Math.abs(x) < 0.1 && Math.abs(y) < 0.1) {
              return '-';
            }
            return Math.sin(x * Math.PI) * Math.sin(y * Math.PI);
          },
        },
      } as any,
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

#### echarts-special-3d.html
```html
<div echarts [options]="options" [theme]="theme" class="echarts"></div>
```

#### echarts-special-3d.css
```css
.echarts {
  position: relative;
  width: 100%;
  height: 40rem;
  padding-top: 1rem;
}
```

### Vue Examples

#### echarts-special-3d.vue
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
  charts.BarChart,
  renderer.CanvasRenderer,
]);

registerTheme(echarts);

const theme = ref(themeSwitcher.getCurrentTheme());

themeSwitcher.themeChanged.on((newTheme: string) => {
  theme.value = newTheme;
});

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
        z: (x: number, y: number): string | number => {
          if (Math.abs(x) < 0.1 && Math.abs(y) < 0.1) {
            return '-';
          }
          return Math.sin(x * Math.PI) * Math.sin(y * Math.PI);
        },
      },
    } as any,
  ],
} as EChartsOption;
</script>

<style scoped src="./echarts-special-3d.css"></style>

<template>
  <VueECharts :theme="theme" :option="options" autoresize></VueECharts>
</template>
```

#### echarts-special-3d.css
```css
.echarts {
  position: relative;
  width: 100%;
  height: 40rem;
  padding-top: 1rem;
}
```

## 3D-Charting

To use 3D charts, import the `echarts-gl` package into your project:

```typescript
import 'echarts-gl';
```

## Dos and Don’ts

- Do use with data that's best seen and interpreted in multiple dimensions
- Don’t use 3D charts for simple data that can be effectively represented with 2D charts
- Don’t overuse 3D charts as they can make the data harder to interpret
