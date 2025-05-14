```tsx
import './button-grey-secondary.scoped.css';

import { IxButton } from '@siemens/ix-react';

export default () => {
  return (
    <>
      <IxButton outline variant="secondary">
        Button
      </IxButton>
      <IxButton disabled outline variant="secondary">
        Button
      </IxButton>
    </>
  );
};
```
