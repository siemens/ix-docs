```tsx
import { iconCheckboxes } from '@siemens/ix-icons/icons';
import './icon-toggle-button-primary-ghost.scoped.css';

import { IxIconToggleButton, IxLayoutGrid, IxRow } from '@siemens/ix-react';

export default () => {
  return (
    <IxLayoutGrid>
      <IxRow>
        <IxIconToggleButton
          variant="primary"
          ghost
          icon={iconCheckboxes}
        ></IxIconToggleButton>
        <IxIconToggleButton
          variant="primary"
          pressed
          ghost
          icon={iconCheckboxes}
        ></IxIconToggleButton>
        <IxIconToggleButton
          variant="primary"
          disabled
          ghost
          icon={iconCheckboxes}
        ></IxIconToggleButton>
        <IxIconToggleButton
          variant="primary"
          disabled
          loading
          ghost
          icon={iconCheckboxes}
        ></IxIconToggleButton>
      </IxRow>
      <IxRow>
        <IxIconToggleButton
          variant="primary"
          ghost
          icon={iconCheckboxes}
          oval
        ></IxIconToggleButton>
        <IxIconToggleButton
          variant="primary"
          pressed
          ghost
          icon={iconCheckboxes}
          oval
        ></IxIconToggleButton>
        <IxIconToggleButton
          variant="primary"
          disabled
          ghost
          icon={iconCheckboxes}
          oval
        ></IxIconToggleButton>
        <IxIconToggleButton
          variant="primary"
          disabled
          loading
          ghost
          icon={iconCheckboxes}
          oval
        ></IxIconToggleButton>
      </IxRow>
    </IxLayoutGrid>
  );
};
```
