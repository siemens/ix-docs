```tsx
import { iconPrint } from '@siemens/ix-icons/icons';
import './chip.scoped.css';

import { IxChip } from '@siemens/ix-react';

export default () => {
  return (
    <div className="chip">
      <IxChip closable outline>
        Primary
      </IxChip>
      <IxChip icon={iconPrint} tooltipText="Custom tooltip text">
        Primary with icon
      </IxChip>
      <IxChip icon={iconPrint} tooltipText closable>
        Primary
      </IxChip>

      <IxChip variant="critical" closable outline>
        Alarm
      </IxChip>
      <IxChip variant="alarm" icon={iconPrint}>
        Alarm with icon
      </IxChip>
      <IxChip variant="alarm" icon={iconPrint} closable>
        Alarm
      </IxChip>
      <IxChip variant="warning" icon={iconPrint} closable>
        Alarm
      </IxChip>
      <IxChip
        background="purple"
        chip-color="green"
        variant="custom"
        icon={iconPrint}
        closable
      >
        Custom
      </IxChip>
    </div>
  );
};
```
