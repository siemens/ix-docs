```tsx
import { IxTextarea } from '@siemens/ix-react';

export default () => {
  return (
    <IxTextarea
      maxLength={100}
      name="comment"
      label="Comment"
      textareaRows={15}
      textareaCols={20}
      helperText="Let us know if you have any special requests or comments. We will do our best to accommodate you."
    ></IxTextarea>
  );
};
```
