```tsx
import './message-bar.scoped.css';

import { IxButton, IxMessageBar } from '@siemens/ix-react';

export default () => {
  return (
    <>
      <div className="message-bar">
        <IxMessageBar dismissible={false}>Message text</IxMessageBar>
        <IxMessageBar dismissible={false} type="warning">Message text</IxMessageBar>
        <IxMessageBar dismissible={false} type="danger">
          <div className="message-bar-danger">
            Message text <IxButton>Action</IxButton>
          </div>
        </IxMessageBar>
      </div>
    </>
  );
};
```
