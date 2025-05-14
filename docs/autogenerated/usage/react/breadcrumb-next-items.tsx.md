```tsx
import { IxBreadcrumb, IxBreadcrumbItem } from '@siemens/ix-react';
import { useEffect, useState } from 'react';

export default () => {
  const [nextItems, setNextItems] = useState<string[]>([]);

  useEffect(() => {
    setNextItems(['Next Item 1']);
  }, [setNextItems]);

  return (
    <IxBreadcrumb nextItems={nextItems}>
      <IxBreadcrumbItem label="Item 1"></IxBreadcrumbItem>
      <IxBreadcrumbItem label="Item 2"></IxBreadcrumbItem>
      <IxBreadcrumbItem label="Item 3"></IxBreadcrumbItem>
    </IxBreadcrumb>
  );
};
```
