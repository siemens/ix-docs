```tsx
import { showMessage } from '@siemens/ix';
import { IxButton } from '@siemens/ix-react';

export default () => {
  const triggerMessage = async () => {
    (
      await showMessage.success(
        'Example title',
        'message',
        'Save',
        'Cancel',
        'payload:save',
        'payload:cancel'
      )
    ).once(console.log);
  };
  return (
    <IxButton onClick={() => triggerMessage()}>Show 'success' message</IxButton>
  );
};
```
