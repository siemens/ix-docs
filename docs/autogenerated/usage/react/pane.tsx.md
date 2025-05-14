```tsx
import { IxButton, IxPane } from '@siemens/ix-react';
import { useState } from 'react';

export default () => {
  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <IxPane
        heading="Pane Popup"
        composition="right"
        size="50%"
        variant="floating"
        hideOnCollapse
        expanded={expanded}
        onExpandedChanged={(event: CustomEvent) => {
          setExpanded(event.detail.expanded);
        }}
        style={{
          position: 'absolute',
          right: '0',
          zIndex: '1',
        }}
      >
        <p>This is a popup pane.</p>
      </IxPane>

      <IxButton
        onClick={() => setExpanded(!expanded)}
        style={{ margin: '2.5rem' }}
      >
        Toggle Expanded
      </IxButton>
    </div>
  );
};
```
