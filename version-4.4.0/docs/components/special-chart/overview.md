# Special chart

> ECharts offer a wide variety of different chart types and features. The following page deals with some of the more special chart types and features.

# Special chart - Code

## Interactive toolbox

Apache ECharts offers a versatile toolbox that enables users to interact with and manipulate charts effectively. By default, the toolbox appears in the top right corner of the chart. It includes various interactive tools like download, zoom, zoom reset and restore. Each has been designed to enhance the user experience. You can customize this toolbox using the `toolbox` option within the option object.

Below is an example demonstrating some of the most commonly used tools and how you can configure them.

### React Examples

#### echarts-special-toolbox.tsx
```tsx
import './echarts-special-toolbox.scoped.css';

import { useEffect, useState } from 'react';
import { registerTheme } from '@siemens/ix-echarts';
import { themeSwitcher } from '@siemens/ix';
import ReactEcharts from 'echarts-for-react';

import { EChartsOption } from 'echarts';

export default function EchartsSpecialToolbox() {
  registerTheme(echarts);

  const [theme, setTheme] = useState(themeSwitcher.getCurrentTheme());

  useEffect(() => {
    themeSwitcher.themeChanged.on((theme: string) => {
      setTheme(theme);
    });
  }, []);

  const data = {
    months: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    values: [150, 230, 224, 218, 135, 147, 260],
  };

  const options: EChartsOption = {
    toolbox: {
      feature: {
        dataZoom: {
          yAxisIndex: 'none',
        },
        restore: {},
        saveAsImage: {},
        magicType: {
          type: ['line', 'bar'],
        },
        dataView: {
          show: true,
        },
      },
    },
    xAxis: {
      type: 'category',
      data: data.months,
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: data.values,
        type: 'line',
        step: 'end',
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

#### echarts-special-toolbox.scoped.css
```css
.echarts {
  position: relative;
  width: 100%;
  height: 40rem;
  padding-top: 1rem;
}
```

### Angular Examples

#### echarts-special-toolbox.ts
```ts
import { Component, OnInit } from '@angular/core';
import { registerTheme } from '@siemens/ix-echarts';
import { themeSwitcher } from '@siemens/ix';

import { EChartsOption } from 'echarts';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './echarts-special-toolbox.html',
  styleUrls: ['./echarts-special-toolbox.css'],
})
export default class EchartsSpecialToolbox implements OnInit {
  theme = themeSwitcher.getCurrentTheme();

  options: EChartsOption = {
    toolbox: {
      feature: {
        dataZoom: {
          yAxisIndex: 'none',
        },
        restore: {},
        saveAsImage: {},
        magicType: {
          type: ['line', 'bar'],
        },
        dataView: {
          show: true,
          title: '123',
        },
      },
    },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
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

#### echarts-special-toolbox.html
```html
<div
  echarts
  [options]="options"
  [theme]="theme"
  class="echarts"
></div>
```

#### echarts-special-toolbox.css
```css
.echarts {
  position: relative;
  width: 100%;
  height: 40rem;
  padding-top: 1rem;
}
```

### Angular Standalone Examples

#### echarts-special-toolbox.ts
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
  templateUrl: './echarts-special-toolbox.html',
  styleUrls: ['./echarts-special-toolbox.css'],
})
export default class EchartsSpecialToolbox implements OnInit {
  theme = themeSwitcher.getCurrentTheme();

  options: EChartsOption = {
    toolbox: {
      feature: {
        dataZoom: {
          yAxisIndex: 'none',
        },
        restore: {},
        saveAsImage: {},
        magicType: {
          type: ['line', 'bar'],
        },
        dataView: {
          show: true,
          title: '123',
        },
      },
    },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
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

#### echarts-special-toolbox.html
```html
<div echarts [options]="options" [theme]="theme" class="echarts"></div>
```

#### echarts-special-toolbox.css
```css
.echarts {
  position: relative;
  width: 100%;
  height: 40rem;
  padding-top: 1rem;
}
```

### Vue Examples

#### echarts-special-toolbox.vue
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
  components.ToolboxComponent,
  charts.LineChart,
  renderer.CanvasRenderer,
]);

registerTheme(echarts);

const theme = ref(themeSwitcher.getCurrentTheme());

themeSwitcher.themeChanged.on((newTheme: string) => {
  theme.value = newTheme;
});

const data = {
  months: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  values: [150, 230, 224, 218, 135, 147, 260],
};

const options = {
  toolbox: {
    feature: {
      dataZoom: {
        yAxisIndex: 'none',
      },
      restore: {},
      saveAsImage: {},
      magicType: {
        type: ['line', 'bar'],
      },
      dataView: {
        show: true,
      },
    },
  },
  xAxis: {
    type: 'category',
    data: data.months,
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: data.values,
      type: 'line',
      step: 'end',
    },
  ],
} as EChartsOption;
</script>

<style scoped src="./echarts-special-toolbox.css"></style>

<template>
  <VueECharts :theme="theme" :option="options" autoresize></VueECharts>
</template>
```

#### echarts-special-toolbox.css
```css
.echarts {
  position: relative;
  width: 100%;
  height: 40rem;
  padding-top: 1rem;
}
```

## Advanced zoom and pan

In addition to the toolbox, ECharts provides zoom and pan functionality for a more interactive chart experience.
Users can zoom in and out using the mouse wheel, and pan the chart by clicking and dragging. These advanced features offer a seamless way to explore detailed data within the chart.

### React Examples

#### echarts-special-zoom.tsx
```tsx
import './echarts-special-zoom.scoped.css';

import { useEffect, useState } from 'react';
import { getComputedCSSProperty, registerTheme } from '@siemens/ix-echarts';
import { themeSwitcher } from '@siemens/ix';
import ReactEcharts from 'echarts-for-react';

import { EChartsOption } from 'echarts';

export default function EchartsSpecialZoom() {
  registerTheme(echarts);

  const [theme, setTheme] = useState(themeSwitcher.getCurrentTheme());

  useEffect(() => {
    themeSwitcher.themeChanged.on((theme: string) => {
      setTheme(theme);
    });
  }, []);

  //create some random data
  let base = +new Date(1968, 9, 3);
  const oneDay = 24 * 3600 * 1000;
  const date: (string | number)[] = [];

  const data: number[] = [0];

  function generateData(): void {
    for (let i = 1; i < 20000; i++) {
      const now = new Date((base += oneDay));
      date.push(`${now.getFullYear()}/${now.getMonth() + 1}/${now.getDate()}`);
      data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
    }
  }

  generateData();

  const options: EChartsOption = {
    toolbox: {
      feature: {
        dataZoom: {
          yAxisIndex: 'none',
        },
      },
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: date,
    },
    yAxis: {
      type: 'value',
      boundaryGap: [0, '100%'],
    },
    dataZoom: [
      {
        type: 'inside',
        start: 0,
        end: 10,
      },
      {
        start: 0,
        end: 10,
      },
    ],
    series: [
      {
        name: 'Synthetic data',
        type: 'line',
        symbol: 'none',
        sampling: 'lttb',
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: getComputedCSSProperty('color-primary'),
            },
            {
              offset: 1,
              color: 'transparent',
            },
          ]),
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

#### echarts-special-zoom.scoped.css
```css
.echarts {
  position: relative;
  width: 100%;
  height: 40rem;
  padding-top: 1rem;
}
```

### Angular Examples

#### echarts-special-zoom.ts
```ts
import { Component, OnInit } from '@angular/core';
import { registerTheme, getComputedCSSProperty } from '@siemens/ix-echarts';
import { themeSwitcher } from '@siemens/ix';

import { EChartsOption } from 'echarts';

@Component({
  standalone: false,
  selector: 'app-example',
  templateUrl: './echarts-special-zoom.html',
  styleUrls: ['./echarts-special-zoom.css'],
})
export default class EchartsSpecialZoom implements OnInit {
  theme = themeSwitcher.getCurrentTheme();

  //create some random data
  private base = +new Date(1968, 9, 3);
  private oneDay = 24 * 3600 * 1000;
  private date: (string | number)[] = [];

  data: number[] = [0];

  options: EChartsOption = {
    toolbox: {
      feature: {
        dataZoom: {
          yAxisIndex: 'none',
        },
      },
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: this.date,
    },
    yAxis: {
      type: 'value',
      boundaryGap: [0, '100%'],
    },
    dataZoom: [
      {
        type: 'inside',
        start: 0,
        end: 10,
      },
      {
        start: 0,
        end: 10,
      },
    ],
    series: [
      {
        name: 'Synthetic data',
        type: 'line',
        symbol: 'none',
        sampling: 'lttb',
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: getComputedCSSProperty('color-primary'),
            },
            {
              offset: 1,
              color: 'transparent',
            },
          ]),
        },
        data: this.data,
      },
    ],
  };

  generateData(): void {
    for (let i = 1; i < 20000; i++) {
      const now = new Date((this.base += this.oneDay));
      this.date.push(
        `${now.getFullYear()}/${now.getMonth() + 1}/${now.getDate()}`
      );
      this.data.push(Math.round((Math.random() - 0.5) * 20 + this.data[i - 1]));
    }
  }

  ngOnInit() {
    this.generateData();

    registerTheme(echarts);

    themeSwitcher.themeChanged.on((theme: string) => {
      this.theme = theme;
    });
  }
}
```

#### echarts-special-zoom.html
```html
<div
  echarts
  [options]="options"
  [theme]="theme"
  class="echarts"
></div>
```

#### echarts-special-zoom.css
```css
.echarts {
  position: relative;
  width: 100%;
  height: 40rem;
  padding-top: 1rem;
}
```

### Angular Standalone Examples

#### echarts-special-zoom.ts
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
  templateUrl: './echarts-special-zoom.html',
  styleUrls: ['./echarts-special-zoom.css'],
})
export default class EchartsSpecialZoom implements OnInit {
  theme = themeSwitcher.getCurrentTheme();

  //create some random data
  private base = +new Date(1968, 9, 3);

  private readonly oneDay = 24 * 3600 * 1000;
  private readonly date: (string | number)[] = [];

  data: number[] = [0];

  options: EChartsOption = {
    toolbox: {
      feature: {
        dataZoom: {
          yAxisIndex: 'none',
        },
      },
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: this.date,
    },
    yAxis: {
      type: 'value',
      boundaryGap: [0, '100%'],
    },
    dataZoom: [
      {
        type: 'inside',
        start: 0,
        end: 10,
      },
      {
        start: 0,
        end: 10,
      },
    ],
    series: [
      {
        name: 'Synthetic data',
        type: 'line',
        symbol: 'none',
        sampling: 'lttb',
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: getComputedCSSProperty('color-primary'),
            },
            {
              offset: 1,
              color: 'transparent',
            },
          ]),
        },
        data: this.data,
      },
    ],
  };

  generateData(): void {
    for (let i = 1; i < 20000; i++) {
      const now = this.createNewBase();
      this.date.push(
        `${now.getFullYear()}/${now.getMonth() + 1}/${now.getDate()}`
      );
      this.data.push(Math.round((Math.random() - 0.5) * 20 + this.data[i - 1]));
    }
  }

  ngOnInit() {
    this.generateData();

    registerTheme(echarts);

    themeSwitcher.themeChanged.on((theme: string) => {
      this.theme = theme;
    });
  }

  private createNewBase() {
    this.base += this.oneDay;

    return new Date(this.base);
  }
}
```

#### echarts-special-zoom.html
```html
<div echarts [options]="options" [theme]="theme" class="echarts"></div>
```

#### echarts-special-zoom.css
```css
.echarts {
  position: relative;
  width: 100%;
  height: 40rem;
  padding-top: 1rem;
}
```

### Vue Examples

#### echarts-special-zoom.vue
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
  components.DataZoomComponent,
  components.ToolboxComponent,
  charts.LineChart,
  renderer.CanvasRenderer,
]);

registerTheme(echarts);

const theme = ref(themeSwitcher.getCurrentTheme());

themeSwitcher.themeChanged.on((newTheme: string) => {
  theme.value = newTheme;
});

//create some random data
let base = +new Date(1968, 9, 3);
const oneDay = 24 * 3600 * 1000;
const date: (string | number)[] = [];

const data: number[] = [0];

function generateData(): void {
  for (let i = 1; i < 20000; i++) {
    const now = new Date((base += oneDay));
    date.push(`${now.getFullYear()}/${now.getMonth() + 1}/${now.getDate()}`);
    data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
  }
}

generateData();

const options: EChartsOption = {
  toolbox: {
    feature: {
      dataZoom: {
        yAxisIndex: 'none',
      },
    },
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: date,
  },
  yAxis: {
    type: 'value',
    boundaryGap: [0, '100%'],
  },
  dataZoom: [
    {
      type: 'inside',
      start: 0,
      end: 10,
    },
    {
      start: 0,
      end: 10,
    },
  ],
  series: [
    {
      name: 'Synthetic data',
      type: 'line',
      symbol: 'none',
      sampling: 'lttb',
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: getComputedCSSProperty('color-primary'),
          },
          {
            offset: 1,
            color: 'transparent',
          },
        ]),
      },
      data: data,
    },
  ],
} as EChartsOption;
</script>

<style scoped src="./echarts-special-zoom.css"></style>

<template>
  <VueECharts :theme="theme" :option="options" autoresize></VueECharts>
</template>
```

#### echarts-special-zoom.css
```css
.echarts {
  position: relative;
  width: 100%;
  height: 40rem;
  padding-top: 1rem;
}
```
