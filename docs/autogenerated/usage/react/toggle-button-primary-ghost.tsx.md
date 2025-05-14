```tsx
import './toggle-button-primary-ghost.scoped.css';

import { IxToggleButton } from '@siemens/ix-react';

export default () => {
  return (
    <>
      <IxToggleButton variant="primary" ghost>
        Normal
      </IxToggleButton>
      <IxToggleButton variant="primary" ghost pressed>
        Pressed
      </IxToggleButton>
      <IxToggleButton variant="primary" ghost disabled>
        Disabled
      </IxToggleButton>
      <IxToggleButton variant="primary" ghost disabled loading>
        Loading
      </IxToggleButton>
    </>
  );
};
```
