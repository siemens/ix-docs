```tsx
import './button-danger.scoped.css';

import { IxButton } from '@siemens/ix-react';

export default () => {
  return (
    <>
      <IxButton variant="danger">Button</IxButton>
      <IxButton disabled variant="danger">
        Button
      </IxButton>
    </>
  );
};
```
