```tsx
import './echarts-special-toolbox.scoped.css';

import { useEffect, useState } from 'react';
import { registerTheme } from '@siemens/ix-echarts';
import { themeSwitcher } from '@siemens/ix';
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts/core';
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
