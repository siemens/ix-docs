```tsx
import { IxBreadcrumb, IxBreadcrumbItem } from '@siemens/ix-react';

export default () => {
  return (
    <IxBreadcrumb visibleItemCount={3}>
      <IxBreadcrumbItem label="Item 1"></IxBreadcrumbItem>
      <IxBreadcrumbItem label="Item 2"></IxBreadcrumbItem>
      <IxBreadcrumbItem label="Item 3"></IxBreadcrumbItem>
      <IxBreadcrumbItem label="Item 4"></IxBreadcrumbItem>
      <IxBreadcrumbItem label="Item 5"></IxBreadcrumbItem>
    </IxBreadcrumb>
  );
};
```
