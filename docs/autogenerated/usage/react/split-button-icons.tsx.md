```tsx
import {
  iconBulb,
  iconChevronDownSmall,
  iconCut,
} from '@siemens/ix-icons/icons';
import { IxDropdownItem, IxSplitButton } from '@siemens/ix-react';

export default () => {
  return (
    <IxSplitButton label="Action text" splitIcon={iconChevronDownSmall}>
      <IxDropdownItem label="Item 1" icon={iconCut}></IxDropdownItem>
      <IxDropdownItem label="Item 2" icon={iconBulb}></IxDropdownItem>
    </IxSplitButton>
  );
};
```
