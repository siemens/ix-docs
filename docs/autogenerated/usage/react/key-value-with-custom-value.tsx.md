```tsx
import './key-value-with-custom-value.scoped.css';
import { IxKeyValue } from '@siemens/ix-react';

export default () => {
  return (
    <IxKeyValue label="Label">
      <input
        className="ix-form-control"
        placeholder="Enter text here"
        type="text"
        slot="custom-value"
      />
    </IxKeyValue>
  );
};
```
