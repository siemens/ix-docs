```tsx
import './toggle-button-primary-outline.scoped.css';

import { IxToggleButton } from '@siemens/ix-react';

export default () => {
  return (
    <>
      <IxToggleButton variant="primary" outline>Normal</IxToggleButton>
      <IxToggleButton variant="primary" outline pressed>
        Pressed
      </IxToggleButton>
      <IxToggleButton variant="primary" outline disabled>
        Disabled
      </IxToggleButton>
      <IxToggleButton variant="primary" outline disabled loading>
        Loading
      </IxToggleButton>
    </>
  );
};
```
