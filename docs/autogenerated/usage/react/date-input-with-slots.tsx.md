```tsx
import { IxDateInput, IxIcon, IxTypography } from '@siemens/ix-react';
import { iconBulb } from '@siemens/ix-icons/icons';

export default () => {
  return (
    <IxDateInput value="1970/01/01">
      <IxIcon name={iconBulb} slot="start" size="16"></IxIcon>
      <IxTypography slot="end">Slot</IxTypography>
    </IxDateInput>
  );
};
```
