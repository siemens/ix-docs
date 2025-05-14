```tsx
import './basic-navigation.scoped.css';

import { IxBasicNavigation, IxMenu, IxMenuItem } from '@siemens/ix-react';

export default () => {
  return (
    <IxBasicNavigation applicationName="Application name">
      <div className="placeholder-logo" slot="logo"></div>
      <IxMenu>
        <IxMenuItem>Item 1</IxMenuItem>
        <IxMenuItem>Item 2</IxMenuItem>
      </IxMenu>
    </IxBasicNavigation>
  );
};
```
