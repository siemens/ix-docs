```tsx
import { IxInputGroup } from '@siemens/ix-react';

export default () => {
  return (
    <form className="needs-validation">
      <IxInputGroup>
        <span slot="input-start">Label Start</span>
        <input className="ix-form-control" type="text" />
      </IxInputGroup>

      <IxInputGroup>
        <input className="ix-form-control" type="text" />
        <span slot="input-end">Label End</span>
      </IxInputGroup>
    </form>
  );
};
```
