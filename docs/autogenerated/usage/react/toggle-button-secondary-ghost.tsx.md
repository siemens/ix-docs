```tsx
import './toggle-button-secondary-ghost.scoped.css';

import { IxToggleButton } from '@siemens/ix-react';

export default () => {
  return (
    <>
      <IxToggleButton ghost>Normal</IxToggleButton>
      <IxToggleButton ghost pressed>
        Pressed
      </IxToggleButton>
      <IxToggleButton ghost disabled>
        Disabled
      </IxToggleButton>
      <IxToggleButton ghost disabled loading>
        Loading
      </IxToggleButton>
    </>
  );
};
```
