```tsx
import './input-types.scoped.css';

import { IxInput } from '@siemens/ix-react';

export default () => {
  return (
    <>
      <div>
        <IxInput type="text" label="Username" value="MaxMuster1"></IxInput>
      </div>

      <div>
        <IxInput
          type="email"
          label="Email"
          value="example@example.com"
        ></IxInput>
      </div>

      <div>
        <IxInput
          type="password"
          label="Password"
          placeholder="Enter your password"
          value="1234"
        ></IxInput>
      </div>

      <div>
        <IxInput
          type="tel"
          label="Telephone"
          placeholder="Enter your phone number"
          value="+49 123 456789"
        ></IxInput>
      </div>

      <div>
        <IxInput
          type="url"
          label="URL"
          placeholder="Enter your URL"
          value="https://ix.siemens.io"
        ></IxInput>
      </div>
    </>
  );
};
```
