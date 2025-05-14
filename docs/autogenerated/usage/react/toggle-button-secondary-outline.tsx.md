```tsx
import './toggle-button-secondary-outline.scoped.css';

import { IxToggleButton } from '@siemens/ix-react';

export default () => {
  return (
    <>
      <IxToggleButton outline>Normal</IxToggleButton>
      <IxToggleButton outline pressed>
        Pressed
      </IxToggleButton>
      <IxToggleButton outline disabled>
        Disabled
      </IxToggleButton>
      <IxToggleButton outline disabled loading>
        Loading
      </IxToggleButton>
    </>
  );
};
```
