```tsx
import { iconLocation } from '@siemens/ix-icons/icons';
import { IxKeyValue, IxKeyValueList } from '@siemens/ix-react';

export default () => {
  return (
    <IxKeyValueList>
      <IxKeyValue
        icon={iconLocation}
        label="Label"
        labelPosition="left"
        value="Value"
      ></IxKeyValue>
      <IxKeyValue
        icon={iconLocation}
        label="Label"
        labelPosition="left"
        value="Value"
      ></IxKeyValue>
      <IxKeyValue
        icon={iconLocation}
        label="Label"
        labelPosition="left"
        value="Value"
      ></IxKeyValue>
    </IxKeyValueList>
  );
};
```
