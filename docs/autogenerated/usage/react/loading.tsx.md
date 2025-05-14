```tsx
import { showModalLoading } from '@siemens/ix';
import { IxButton } from '@siemens/ix-react';

export default () => {
  const startLoading = () => {
    let count = 0;
    const progress = showModalLoading('Loading 0/2');
    const interval = setInterval(() => {
      count++;
      progress.update(`Loading ${count}/2`);

      if (count === 2) {
        progress.finish('Done');
        clearInterval(interval);
      }
    }, 1000);
  };
  return <IxButton onClick={() => startLoading()}>Start loading</IxButton>;
};
```
