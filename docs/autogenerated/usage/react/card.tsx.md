```tsx
import './card.scoped.css';

import { IxCard, IxCardContent, IxIcon, IxTypography } from '@siemens/ix-react';
import { iconCapacity } from '@siemens/ix-icons/icons';

export default () => {
  return (
    <IxCard variant="outline" onClick={console.log}>
      <IxCardContent>
        <IxIcon name={iconCapacity}></IxIcon>
        <IxTypography bold>Number of components</IxTypography>
        <IxTypography>
          Vanilla JavaScript
          <br />
          Angular
          <br />
          Blazor
          <br />
          React
          <br />
          Vue.js
        </IxTypography>
        <IxTypography format="h1">123</IxTypography>
      </IxCardContent>
    </IxCard>
  );
};
```
