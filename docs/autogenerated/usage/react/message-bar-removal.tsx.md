```tsx
import './message-bar.scoped.css';

import { IxMessageBar, IxButton } from '@siemens/ix-react';
import { useState } from 'react';

export default () => {
  const [messageBarVisible, setMessageBarVisible] = useState(true);

  const handleCloseAnimationCompleted = () => {
    setMessageBarVisible(false);
  };

  const handleShowMessage = () => {
    setMessageBarVisible(true);
  };

  return (
    <div className="message-bar">
      {messageBarVisible && (
        <IxMessageBar
          onCloseAnimationCompleted={handleCloseAnimationCompleted}
        >
          Message text
        </IxMessageBar>
      )}
      {!messageBarVisible && (
        <IxButton onClick={handleShowMessage}>
          Show message bar
        </IxButton>
      )}
    </div>
  );
};
```
