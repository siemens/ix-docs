```tsx
import { IxDateInput } from '@siemens/ix-react';

export default () => {
  return (
    <>
      <div>
        <IxDateInput
          value="1970/01/01"
          infoText="Info text"
          className="ix-info"
        ></IxDateInput>
      </div>

      <div>
        <IxDateInput
          value="1970/01/01"
          warningText="Warning text"
          className="ix-warning"
        ></IxDateInput>
      </div>

      <div>
        <IxDateInput
          value="1970/01/01"
          validText="Valid text"
          className="ix-valid"
        ></IxDateInput>
      </div>

      <div>
        <IxDateInput
          value="1970/01/01"
          invalidText="Invalid text"
          className="ix-invalid"
        ></IxDateInput>
      </div>
    </>
  );
};
```
