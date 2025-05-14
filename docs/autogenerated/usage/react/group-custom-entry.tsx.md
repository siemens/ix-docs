```tsx
import { IxButton, IxGroup, IxGroupItem } from '@siemens/ix-react';

export default () => {
  return (
    <IxGroup header="Header text" subHeader="Subheader text">
      <IxGroupItem text="Example text 1"></IxGroupItem>
      <IxGroupItem text="Example text 2"></IxGroupItem>
      <IxGroupItem>
        <IxButton>Test</IxButton>
      </IxGroupItem>
    </IxGroup>
  );
};
```
