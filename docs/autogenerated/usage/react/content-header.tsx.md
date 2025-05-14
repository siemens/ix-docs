```tsx
import { IxButton, IxContentHeader } from '@siemens/ix-react';


export default () => {
  return (
    <IxContentHeader
      has-back-button
      header-title="Content title"
      header-subtitle="Subtitle"
    >
      <IxButton ghost>Button1</IxButton>
      <IxButton ghost>Button2</IxButton>
      <IxButton ghost>Button3</IxButton>
    </IxContentHeader>
  );
};
```
