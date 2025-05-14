```tsx
import {
  IxApplication,
  IxApplicationHeader,
  IxMenu,
  IxMenuAbout,
  IxMenuAboutItem,
  IxMenuAboutNews,
} from '@siemens/ix-react';

export default () => {
  return (
    <IxApplication>
      <IxApplicationHeader>
        <div className="placeholder-logo" slot="logo"></div>
      </IxApplicationHeader>
      <IxMenu>
        <IxMenuAbout>
          <IxMenuAboutItem label="Example"> </IxMenuAboutItem>
        </IxMenuAbout>
        <IxMenuAboutNews label="Test" show about-item-label="Example">
          Test
        </IxMenuAboutNews>
      </IxMenu>
    </IxApplication>
  );
};
```
