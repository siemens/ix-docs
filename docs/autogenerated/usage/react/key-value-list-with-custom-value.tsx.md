```tsx
import './key-value-list-with-custom-value.scoped.css';
import { IxKeyValue, IxKeyValueList } from '@siemens/ix-react';

export default () => {
  return (
    <IxKeyValueList>
      <IxKeyValue label="Label" labelPosition="left">
        <input
          className="ix-form-control"
          placeholder="Enter text here"
          type="text"
          slot="custom-value"
        />
      </IxKeyValue>
      <IxKeyValue label="Label" labelPosition="left">
        <input
          className="ix-form-control"
          placeholder="Enter text here"
          type="text"
          slot="custom-value"
        />
      </IxKeyValue>
      <IxKeyValue label="Label" labelPosition="left">
        <input
          className="ix-form-control"
          placeholder="Enter text here"
          type="text"
          slot="custom-value"
        />
      </IxKeyValue>
    </IxKeyValueList>
  );
};
```
