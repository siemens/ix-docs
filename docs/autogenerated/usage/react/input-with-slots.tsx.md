```tsx
import { IxIcon, IxInput, IxTypography } from '@siemens/ix-react';
import { iconBulb } from '@siemens/ix-icons/icons';

export default () => {
  return (
    <IxInput>
      <IxIcon name={iconBulb} slot="start" size="16"></IxIcon>
      <IxTypography slot="end">unit</IxTypography>
    </IxInput>
  );
};
```
