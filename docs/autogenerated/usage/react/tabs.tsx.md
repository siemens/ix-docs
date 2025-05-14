```tsx
import './tabs.scoped.css';

import { IxTabItem, IxTabs } from '@siemens/ix-react';
import { useState } from 'react';

export default () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const changeTab = (tabId: number) => setSelectedTab(tabId);

  return (
    <div className="tabs">
      <IxTabs selected={selectedTab}>
        <IxTabItem onClick={() => changeTab(0)}>Tab 1</IxTabItem>
        <IxTabItem onClick={() => changeTab(1)}>Tab 2</IxTabItem>
        <IxTabItem onClick={() => changeTab(2)}>Tab 3</IxTabItem>
      </IxTabs>
      {selectedTab === 0 ? <div>Content 1</div> : null}
      {selectedTab === 1 ? <div>Content 2</div> : null}
      {selectedTab === 2 ? <div>Content 3</div> : null}
    </div>
  );
};
```
