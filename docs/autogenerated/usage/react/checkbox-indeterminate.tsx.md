```tsx
import { useLayoutEffect, useRef } from 'react';

export default () => {
  const ref = useRef<HTMLInputElement>(null);

  useLayoutEffect(() => {
    const element = ref.current;

    if (element) {
      element.indeterminate = true;
    }
  }, []);

  return (
    <>
      <input
        className="ix-form-control"
        type="checkbox"
        id="checkbox_01"
        ref={ref}
      />
      <label className="ix-form-label" htmlFor="checkbox_01">
        Simple checkbox
      </label>
    </>
  );
};
```
