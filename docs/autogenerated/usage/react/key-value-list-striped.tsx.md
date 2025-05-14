```tsx
import { IxKeyValue, IxKeyValueList } from '@siemens/ix-react';

export default () => {
  return (
    <IxKeyValueList striped={true}>
      <IxKeyValue label="Label" labelPosition="left" value="Value"></IxKeyValue>
      <IxKeyValue label="Label" labelPosition="left" value="Value"></IxKeyValue>
      <IxKeyValue label="Label" labelPosition="left" value="Value"></IxKeyValue>
    </IxKeyValueList>
  );
};
```
