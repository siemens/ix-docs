```tsx
import './button-ghost.scoped.css';

import { IxButton } from '@siemens/ix-react';

export default () => {
  return (
    <>
      <IxButton ghost>
        Button
      </IxButton>
      <IxButton disabled ghost>
        Button
      </IxButton>
    </>
  );
};
```
