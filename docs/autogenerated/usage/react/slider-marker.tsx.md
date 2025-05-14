```tsx
import { IxSlider } from '@siemens/ix-react';

export default () => {
  return (
    <>
      <IxSlider marker={[0, 25, 50, 75, 100]}>
        <span slot="label-start">0</span>
        <span slot="label-end">100</span>
      </IxSlider>

      <IxSlider min={0} max={50} step={10} marker={[0, 10, 20, 30, 40, 50]}>
        <span slot="label-start">0</span>
        <span slot="label-end">50</span>
      </IxSlider>
    </>
  );
};
```
