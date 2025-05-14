```tsx
import './grid-size.scoped.css';

import { IxCol, IxLayoutGrid, IxRow, IxTypography } from '@siemens/ix-react';

export default () => {
  return (
    <div className="grid">
      <h4>Column 6 takes up more space to a max of 12 columns total</h4>
      <IxLayoutGrid>
        <IxRow>
          <IxCol>
            <IxTypography format="display">1</IxTypography>
          </IxCol>
          <IxCol>
            <IxTypography format="display">2</IxTypography>
          </IxCol>
          <IxCol>
            <IxTypography format="display">3</IxTypography>
          </IxCol>
          <IxCol>
            <IxTypography format="display">4</IxTypography>
          </IxCol>
          <IxCol>
            <IxTypography format="display">5</IxTypography>
          </IxCol>
          <IxCol size="6">
            <IxTypography format="display">6</IxTypography>
          </IxCol>
        </IxRow>
      </IxLayoutGrid>

      <h4>Stack columns on smaller screens</h4>
      <IxLayoutGrid>
        <IxRow>
          <IxCol size="12" size-md="3">
            <IxTypography format="display">1</IxTypography>
          </IxCol>
          <IxCol size="12" size-md="3">
            <IxTypography format="display">2</IxTypography>
          </IxCol>
          <IxCol size="12" size-md="3">
            <IxTypography format="display">3</IxTypography>
          </IxCol>
          <IxCol size="12" size-md="3">
            <IxTypography format="display">4</IxTypography>
          </IxCol>
        </IxRow>
      </IxLayoutGrid>
    </div>
  );
};
```
