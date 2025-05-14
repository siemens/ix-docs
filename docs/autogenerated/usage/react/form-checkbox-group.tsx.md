```tsx
import { IxCheckbox, IxCheckboxGroup } from '@siemens/ix-react';

export default () => {
  return (
    <IxCheckboxGroup label="Terms of something">
      <IxCheckbox label="I agree everything" name="agreed"></IxCheckbox>
      <IxCheckbox label="I agree with most of it" name="most"></IxCheckbox>
    </IxCheckboxGroup>
  );
};
```
