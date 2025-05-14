```tsx
import {
  IxDropdown,
  IxDropdownItem,
  IxGroup,
  IxGroupItem,
} from '@siemens/ix-react';

export default () => {
  return (
    <IxGroup header="Header text" subHeader="Subheader text">
      <IxDropdown slot="dropdown">
        <IxDropdownItem label="Item 1"></IxDropdownItem>
        <IxDropdownItem label="Item 2"></IxDropdownItem>
      </IxDropdown>
      <IxGroupItem text="Example text 1"></IxGroupItem>
      <IxGroupItem text="Example text 2"></IxGroupItem>
      <IxGroupItem text="Example text 3"></IxGroupItem>
    </IxGroup>
  );
};
```
