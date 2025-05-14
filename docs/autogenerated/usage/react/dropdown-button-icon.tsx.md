```tsx
import { iconCheckboxes } from '@siemens/ix-icons/icons';
import './dropdown-button-icon.scoped.css';

import { IxDropdownButton, IxDropdownItem } from '@siemens/ix-react';

export default () => {
  return (
    <div className="dropdown-button">
      <IxDropdownButton label="" icon={iconCheckboxes}>
        <IxDropdownItem label="Item 1"></IxDropdownItem>
        <IxDropdownItem label="Item 2"></IxDropdownItem>
      </IxDropdownButton>
      <IxDropdownButton label="" outline icon={iconCheckboxes}>
        <IxDropdownItem label="Item 1"></IxDropdownItem>
        <IxDropdownItem label="Item 2"></IxDropdownItem>
      </IxDropdownButton>
      <IxDropdownButton label="" ghost icon={iconCheckboxes}>
        <IxDropdownItem label="Item 1"></IxDropdownItem>
        <IxDropdownItem label="Item 2"></IxDropdownItem>
      </IxDropdownButton>
      <IxDropdownButton
        label=""
        disabled
        icon={iconCheckboxes}
      ></IxDropdownButton>
    </div>
  );
};
```
