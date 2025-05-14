```tsx
import { iconGlobe, iconHome } from '@siemens/ix-icons/icons';
import { IxMenu, IxMenuItem } from '@siemens/ix-react';

export default () => {
  return (
    <IxMenu>
      <IxMenuItem home tab-icon={iconHome}>
        Home
      </IxMenuItem>
      <IxMenuItem tab-icon={iconGlobe} slot="bottom">
        Bottom Tab
      </IxMenuItem>
    </IxMenu>
  );
};
```
