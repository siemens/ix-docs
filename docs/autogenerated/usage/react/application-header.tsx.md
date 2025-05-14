```tsx
import { iconCheckboxes } from '@siemens/ix-icons/icons';
import {
  IxApplicationHeader,
  IxAvatar,
  IxDropdownButton,
  IxDropdownItem,
  IxIconButton,
} from '@siemens/ix-react';

export default () => {
  return (
    <IxApplicationHeader name="My Application">
      <div className="placeholder-logo" slot="logo"></div>

      <IxIconButton ghost icon={iconCheckboxes}></IxIconButton>
      <IxIconButton ghost icon={iconCheckboxes}></IxIconButton>
      <IxIconButton ghost icon={iconCheckboxes}></IxIconButton>

      <IxDropdownButton variant="secondary" label="Select config" ghost>
        <IxDropdownItem label="Config 1"></IxDropdownItem>
        <IxDropdownItem label="Config 2"></IxDropdownItem>
        <IxDropdownItem label="Config 3"></IxDropdownItem>
      </IxDropdownButton>

      <IxAvatar username="John Doe" extra="Administrator">
        <IxDropdownItem label="Action 1"></IxDropdownItem>
        <IxDropdownItem label="Action 2"></IxDropdownItem>
      </IxAvatar>
    </IxApplicationHeader>
  );
};
```
