```tsx
import './button-danger-outline.scoped.css';

import { IxButton } from '@siemens/ix-react';

export default () => {
  return (
    <>
      <IxButton outline variant="danger">
        Button
      </IxButton>
      <IxButton disabled outline variant="danger">
        Button
      </IxButton>
    </>
  );
};
```
