```tsx
import './basic-navigation-migration.scoped.css';

import {
  IxApplication,
  IxApplicationHeader,
  IxMenu,
  IxMenuItem,
} from '@siemens/ix-react';

export default () => {
  return (
    <IxApplication>
      {}
      <IxApplicationHeader name="My Application">
        <div className="placeholder-logo" slot="logo"></div>
      </IxApplicationHeader>

      <IxMenu>
        <IxMenuItem>Item 1</IxMenuItem>
        <IxMenuItem>Item 2</IxMenuItem>
      </IxMenu>
    </IxApplication>
  );
};
```
