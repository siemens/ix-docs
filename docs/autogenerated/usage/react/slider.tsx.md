```tsx
import { IxSlider } from '@siemens/ix-react';

export default () => {
  return (
    <>
      <IxSlider value={25}>
        <span slot="label-start">0</span>
        <span slot="label-end">100</span>
      </IxSlider>

      <IxSlider min={0} max={50} step={10} value={10}>
        <span slot="label-start">0</span>
        <span slot="label-end">50</span>
      </IxSlider>
    </>
  );
};
```
