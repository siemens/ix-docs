```tsx
import { IxInput } from '@siemens/ix-react';

export default () => {
  return (
    <IxInput
      helperText="Only characters a-d are allowed"
      allowedCharactersPattern="[a-d]"
      maxLength={4}
    ></IxInput>
  );
};
```
