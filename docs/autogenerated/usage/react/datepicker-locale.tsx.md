```tsx
import { IxDatePicker, IxSelect, IxSelectItem } from '@siemens/ix-react';
import { useState } from 'react';

export default () => {
  const [locale, setLocale] = useState<'de' | 'en' | (string & {})>('de');

  return (
    <>
      <span style={{ marginRight: '1rem' }}>Language:</span>
      <IxSelect
        value={locale}
        onValueChange={({ detail }) => {
          if (!Array.isArray(detail)) {
            setLocale(detail);
          }
        }}
        style={{
          margin: '1rem 0',
        }}
      >
        <IxSelectItem label="de" value={'de'}></IxSelectItem>
        <IxSelectItem label="en" value={'en'}></IxSelectItem>
      </IxSelect>
      <IxDatePicker locale={locale} />
    </>
  );
};
```
