```tsx
import { IxNumberInput } from '@siemens/ix-react';

export default () => {
  return (
    <>
      <div>
        <IxNumberInput
          value={5}
          infoText="Info text"
          className="ix-info"
        ></IxNumberInput>
      </div>

      <div>
        <IxNumberInput
          value={5}
          warningText="Warning text"
          className="ix-warning"
        ></IxNumberInput>
      </div>

      <div>
        <IxNumberInput
          value={5}
          validText="Valid text"
          className="ix-valid"
        ></IxNumberInput>
      </div>

      <div>
        <IxNumberInput
          value={5}
          invalidText="Invalid text"
          class="ix-invalid"
        ></IxNumberInput>
      </div>
    </>
  );
};
```
