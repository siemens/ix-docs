```tsx
import './toggle-button-primary.scoped.css';

import { IxToggleButton } from '@siemens/ix-react';

export default () => {
  return (
    <>
      <IxToggleButton variant="primary">Normal</IxToggleButton>
      <IxToggleButton variant="primary" pressed>
        Pressed
      </IxToggleButton>
      <IxToggleButton variant="primary" disabled>
        Disabled
      </IxToggleButton>
      <IxToggleButton variant="primary" disabled loading>
        Loading
      </IxToggleButton>
    </>
  );
};
```
