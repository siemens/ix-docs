```tsx
import { IxIcon, IxNumberInput, IxTypography } from '@siemens/ix-react';
import { iconBulb } from '@siemens/ix-icons/icons';

export default () => {
  return (
    <IxNumberInput>
      <IxIcon name={iconBulb} slot="start" size="16"></IxIcon>
      <IxTypography slot="end">unit</IxTypography>
    </IxNumberInput>
  );
};
```
