```tsx
import './toggle-button-secondary.scoped.css';

import { IxToggleButton } from '@siemens/ix-react';

export default () => {
  return (
    <>
      <IxToggleButton>Normal</IxToggleButton>
      <IxToggleButton pressed>Pressed</IxToggleButton>
      <IxToggleButton disabled>Disabled</IxToggleButton>
      <IxToggleButton disabled loading>
        Loading
      </IxToggleButton>
    </>
  );
};
```
