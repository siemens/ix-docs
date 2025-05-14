```tsx
import { IxSlider } from '@siemens/ix-react';

export default () => {
  return (
    <>
      <IxSlider trace trace-reference={50} marker={[0, 25, 50, 75, 100]} error>
        <span slot="label-start">0</span>
        <span slot="label-end">100</span>
      </IxSlider>

      <IxSlider
        min={0}
        max={50}
        step={10}
        trace
        trace-reference={10}
        marker={[0, 10, 20, 30, 40, 50]}
        error={'Error message'}
      >
        <span slot="label-start">0</span>
        <span slot="label-end">50</span>
      </IxSlider>
    </>
  );
};
```
