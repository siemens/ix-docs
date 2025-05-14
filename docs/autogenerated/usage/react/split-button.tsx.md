```tsx
import { iconChevronDownSmall } from '@siemens/ix-icons/icons';
import { IxDropdownItem, IxSplitButton } from '@siemens/ix-react';

export default () => {
  return (
    <IxSplitButton label="Action text" splitIcon={iconChevronDownSmall}>
      <IxDropdownItem label="Item 1"></IxDropdownItem>
      <IxDropdownItem label="Item 2"></IxDropdownItem>
    </IxSplitButton>
  );
};
```
