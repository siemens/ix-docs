```tsx
import { IxCategoryFilter } from '@siemens/ix-react';
import { useState } from 'react';

export default () => {
  const [suggestions] = useState(['Item 1', 'Item 2']);

  return (
    <IxCategoryFilter
      placeholder="Filter by"
      suggestions={suggestions}
    ></IxCategoryFilter>
  );
};
```
