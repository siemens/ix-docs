```tsx
import { IxIcon, IxTabItem, IxTabs } from '@siemens/ix-react';
import {
  iconCalendarSettings,
  iconHierarchy,
  iconMaintenance,
  iconSoundLoud,
  iconSuccess,
  iconTree,
} from '@siemens/ix-icons/icons';

export default () => {
  return (
    <IxTabs rounded>
      <IxTabItem>
        <IxIcon name={iconSuccess}></IxIcon>
      </IxTabItem>
      <IxTabItem counter={200}>
        <IxIcon name={iconTree}></IxIcon>
      </IxTabItem>
      <IxTabItem>
        <IxIcon name={iconMaintenance}></IxIcon>
      </IxTabItem>
      <IxTabItem disabled counter={24}>
        <IxIcon name={iconSoundLoud}></IxIcon>
      </IxTabItem>
      <IxTabItem>
        <IxIcon name={iconHierarchy}></IxIcon>
      </IxTabItem>
      <IxTabItem disabled>
        <IxIcon name={iconCalendarSettings}></IxIcon>
      </IxTabItem>
    </IxTabs>
  );
};
```
