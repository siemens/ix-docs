```tsx
import { IxIcon, IxInputGroup } from '@siemens/ix-react';
import { iconAbout } from '@siemens/ix-icons/icons';

export default () => {
  return (
    <form className="needs-validation">
      <IxInputGroup>
        <input className="ix-form-control" type="text" />
        <span slot="input-end">
          <IxIcon name={iconAbout} size="16"></IxIcon>
        </span>
      </IxInputGroup>
    </form>
  );
};
```
