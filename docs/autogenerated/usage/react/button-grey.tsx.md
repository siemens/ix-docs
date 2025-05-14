```tsx
import './button-grey.scoped.css';

import { IxButton } from '@siemens/ix-react';

export default () => {
  return (
    <>
      <IxButton variant="secondary">Button</IxButton>
      <IxButton disabled variant="secondary">
        Button
      </IxButton>
    </>
  );
};
```
