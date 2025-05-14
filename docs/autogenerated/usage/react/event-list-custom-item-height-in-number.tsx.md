```tsx
import { IxEventList, IxEventListItem } from '@siemens/ix-react';
import { useState } from 'react';

export default () => {
  const [items] = useState([1, 2, 3]);

  return (
    <IxEventList itemHeight={60}>
      {items.map((item) => (
        <div key={item}>
          <IxEventListItem itemColor="color-primary">
            Text {item}
          </IxEventListItem>
        </div>
      ))}
    </IxEventList>
  );
};
```
