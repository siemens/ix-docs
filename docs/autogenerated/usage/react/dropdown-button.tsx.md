```tsx
import { iconCheckboxes } from '@siemens/ix-icons/icons';
import './dropdown-button.scoped.css';

import { IxDropdownButton, IxDropdownItem } from '@siemens/ix-react';

export default () => {
  return (
    <div className="dropdown-button">
      <IxDropdownButton label="Dropdown" icon={iconCheckboxes}>
        <IxDropdownItem label="Item 1"></IxDropdownItem>
        <IxDropdownItem label="Item 2"></IxDropdownItem>
      </IxDropdownButton>
      <IxDropdownButton label="Dropdown" outline icon={iconCheckboxes}>
        <IxDropdownItem label="Item 1"></IxDropdownItem>
        <IxDropdownItem label="Item 2"></IxDropdownItem>
      </IxDropdownButton>
      <IxDropdownButton label="Dropdown" ghost icon={iconCheckboxes}>
        <IxDropdownItem label="Item 1"></IxDropdownItem>
        <IxDropdownItem label="Item 2"></IxDropdownItem>
      </IxDropdownButton>
      <IxDropdownButton
        label="Dropdown"
        disabled
        icon={iconCheckboxes}
      ></IxDropdownButton>
    </div>
  );
};
```
