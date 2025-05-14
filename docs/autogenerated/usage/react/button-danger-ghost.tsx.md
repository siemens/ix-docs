```tsx
import './button-danger-ghost.scoped.css';

import { IxButton } from '@siemens/ix-react';

export default () => {
  return (
    <>
      <IxButton ghost variant="secondary">
        Button
      </IxButton>
      <IxButton disabled ghost variant="secondary">
        Button
      </IxButton>
    </>
  );
};
```
