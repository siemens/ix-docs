```tsx
import { iconGlobe, iconHome, iconRocket } from '@siemens/ix-icons/icons';
import {
  IxApplication,
  IxMenu,
  IxMenuCategory,
  IxMenuItem,
} from '@siemens/ix-react';

export default () => {
  return (
    <IxApplication>
      <IxMenu>
        <IxMenuItem home icon={iconHome}>
          Home
        </IxMenuItem>
        <IxMenuItem icon={iconGlobe}>Normal Tab</IxMenuItem>
        <IxMenuCategory label="Top level Category" icon={iconRocket}>
          <IxMenuItem icon={iconGlobe}>Nested Tab</IxMenuItem>
          <IxMenuItem icon={iconGlobe}>Nested Tab</IxMenuItem>
        </IxMenuCategory>
      </IxMenu>
    </IxApplication>
  );
};
```
