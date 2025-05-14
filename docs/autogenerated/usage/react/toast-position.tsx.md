```tsx
import { setToastPosition, ToastPosition } from '@siemens/ix';
import { IxButton, showToast } from '@siemens/ix-react';
import { useEffect } from 'react';

function useToastPosition(position: ToastPosition) {
  useEffect(() => {
    setToastPosition(position);
  }, []);
}

export default () => {
  useToastPosition('top-right');

  return (
    <>
      <IxButton
        onClick={() => {
          showToast({
            message: 'My toast message!',
          });
        }}
      >
        Trigger toast
      </IxButton>
    </>
  );
};
```
