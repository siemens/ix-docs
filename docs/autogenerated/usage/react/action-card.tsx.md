```tsx
import { iconRefresh } from '@siemens/ix-icons/icons';
import { IxActionCard } from '@siemens/ix-react';

export default () => {
  return (
    <IxActionCard
      icon={iconRefresh}
      heading="Scan for new devices"
      subheading="Secondary text"
      variant="outline"
      onClick={console.log}
    ></IxActionCard>
  );
};
```
