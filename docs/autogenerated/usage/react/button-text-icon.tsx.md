```tsx
import { iconStar } from '@siemens/ix-icons/icons';
import './button-text-icon.scoped.css';

import { IxButton } from '@siemens/ix-react';

export default () => {
  return (
    <>
      <IxButton icon={iconStar}>Button</IxButton>
      <IxButton variant="secondary" icon={iconStar}>
        Button
      </IxButton>
      <IxButton outline icon={iconStar}>
        Button
      </IxButton>
      <IxButton ghost icon={iconStar}>
        Button
      </IxButton>
    </>
  );
};
```
