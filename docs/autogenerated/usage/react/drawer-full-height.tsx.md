```tsx
import { IxButton, IxDrawer } from '@siemens/ix-react';
import { useState } from 'react';

export default () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <IxDrawer
        closeOnClickOutside={true}
        fullHeight={true}
        show={show}
        onDrawerClose={() => setShow(false)}
      >
        <span>Some content of drawer</span>
      </IxDrawer>
      <IxButton onClick={() => setShow(!show)}>Toggle drawer</IxButton>
    </>
  );
};
```
