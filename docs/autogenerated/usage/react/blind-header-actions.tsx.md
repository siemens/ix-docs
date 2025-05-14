```tsx
import {
  iconContextMenu,
  iconInfo,
  iconRename,
  iconTrashcan,
} from '@siemens/ix-icons/icons';
import './blind-header-actions.scoped.css';

import {
  IxBlind,
  IxDropdown,
  IxDropdownItem,
  IxIconButton,
} from '@siemens/ix-react';

export default () => {
  return (
    <>
      <IxBlind label="Example" icon={iconInfo}>
        <IxIconButton
          id="context-menu"
          slot="header-actions"
          ghost
          icon={iconContextMenu}
          iconColor="color-primary"
        ></IxIconButton>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
        rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
        ipsum dolor sit amet.
      </IxBlind>
      <IxDropdown trigger={'context-menu'}>
        <IxDropdownItem icon={iconRename}>Rename...</IxDropdownItem>
        <IxDropdownItem icon={iconTrashcan}>Delete</IxDropdownItem>
      </IxDropdown>
    </>
  );
};
```
