```tsx
import { IxIcon } from '@siemens/ix-react';
import { addIcons } from '@siemens/ix-icons';
import { iconStar, iconStarFilled } from '@siemens/ix-icons/icons';

import './icon-toggle-button-secondary.scoped.css';

export default () => {
  addIcons({ iconStar, iconStarFilled });

  return (
    <>
      <IxIcon name={iconStar}></IxIcon>
      <IxIcon name="star"></IxIcon>

      <IxIcon name={iconStarFilled}></IxIcon>
      <IxIcon name="starFilled"></IxIcon>
      <IxIcon name="star-filled"></IxIcon>
    </>
  );
};
```
