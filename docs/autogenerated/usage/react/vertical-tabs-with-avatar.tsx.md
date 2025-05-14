```tsx
import {
  iconGlobe,
  iconHome,
  iconStar,
  iconUserProfile,
} from '@siemens/ix-icons/icons';
import './vertical-tabs-with-avatar.scoped.css';

import {
  IxMenu,
  IxMenuAvatar,
  IxMenuAvatarItem,
  IxMenuItem,
} from '@siemens/ix-react';

export default () => {
  return (
    <IxMenu>
      <IxMenuAvatar
        top="john.doe@company.com"
        bottom="Administrator"
        image="https://ui-avatars.com/api/?name=John+Doe"
      >
        <IxMenuAvatarItem
          icon={iconUserProfile}
          label="User profile..."
        ></IxMenuAvatarItem>
      </IxMenuAvatar>
      <IxMenuItem home tab-icon={iconHome}>
        Home
      </IxMenuItem>
      <IxMenuItem tab-icon={iconGlobe}> Normal Tab </IxMenuItem>
      <IxMenuItem tab-icon={iconStar} disabled>
        Disabled Tab
      </IxMenuItem>
      <IxMenuItem tab-icon={iconStar}> With other Icon </IxMenuItem>
    </IxMenu>
  );
};
```
