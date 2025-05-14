```tsx
import { iconGlobe, iconHome, iconStar } from '@siemens/ix-icons/icons';
import './vertical-tabs.scoped.css';

import { IxMenu, IxMenuItem } from '@siemens/ix-react';

export default () => {
  return (
    <IxMenu>
      <IxMenuItem home tab-icon={iconHome}>
        Home
      </IxMenuItem>
      <IxMenuItem tab-icon={iconGlobe}> Normal Tab </IxMenuItem>
      <IxMenuItem tab-icon={iconStar} disabled>
        Disabled Tab
      </IxMenuItem>
      <IxMenuItem tab-icon={iconStar}> With other Icon </IxMenuItem>
      <IxMenuItem tab-icon={iconGlobe} style={{ display: 'none' }}>
        Should not be visible
      </IxMenuItem>
    </IxMenu>
  );
};
```
