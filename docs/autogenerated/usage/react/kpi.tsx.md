```tsx
import './kpi.scoped.css';

import { IxKpi } from '@siemens/ix-react';

export default () => {
  return (
    <div className="kpi">
      <IxKpi label="Motor speed" value="Nominal"></IxKpi>
      <IxKpi label="Motor speed" value="{122.6}" unit="rpm"></IxKpi>
      <IxKpi label="Motor speed" value="{122.6}" state="alarm"></IxKpi>
      <IxKpi label="Motor speed" value="{122.6}" state="warning"></IxKpi>

      <IxKpi label="Motor speed" value="Nominal" orientation="vertical"></IxKpi>
      <IxKpi
        label="Motor speed"
        value="{122.6}"
        unit="rpm"
        state="alarm"
        orientation="vertical"
      ></IxKpi>
    </div>
  );
};
```
