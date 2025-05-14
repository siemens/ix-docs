```tsx
import {
  IxContent,
  IxContentHeader,
  IxMapNavigation,
  IxMenu,
  IxMenuItem,
} from '@siemens/ix-react';

export default () => {
  return (
    <IxMapNavigation
      applicationName="My Application"
      navigationTitle="Navigation title"
      hideContextMenu={false}
    >
      <div className="placeholder-logo" slot="logo"></div>

      <IxMenu>
        <IxMenuItem>Item 1</IxMenuItem>
        <IxMenuItem>Item 2</IxMenuItem>
      </IxMenu>

      <IxContent slot="sidebar-content">Sidebar content</IxContent>

      <IxContent>
        <IxContentHeader
          slot="header"
          header-title="My Content Page"
        ></IxContentHeader>
      </IxContent>
    </IxMapNavigation>
  );
};
```
