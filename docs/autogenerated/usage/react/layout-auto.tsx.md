```tsx
import './layout-auto.scoped.css';

import { IxLayoutAuto, IxTypography } from '@siemens/ix-react';

export default () => {
  return (
    <IxLayoutAuto className="LayoutExample">
      <IxTypography format="display">1</IxTypography>
      <IxTypography format="display">2</IxTypography>
      <IxTypography format="display">3</IxTypography>
      <IxTypography format="display" data-colspan="2">
        4
      </IxTypography>
      <IxTypography format="display">5</IxTypography>
      <IxTypography format="display">6</IxTypography>
    </IxLayoutAuto>
  );
};
```
