```tsx
import { iconAdd } from '@siemens/ix-icons/icons';
import { IxEmptyState } from '@siemens/ix-react';

export default () => {
  return (
    <IxEmptyState
      layout="compactBreak"
      header="No elements available"
      subHeader="Create an element first"
      icon={iconAdd}
      action="Create element"
      onActionClick={console.log}
    ></IxEmptyState>
  );
};
```
