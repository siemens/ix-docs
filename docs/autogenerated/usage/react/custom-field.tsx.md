```tsx
import { useRef } from 'react';
import { IxCustomField, IxIconButton, IxInput } from '@siemens/ix-react';

export default () => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <IxCustomField helper-text="Choose file">
      <IxInput value="Enter text here" readonly></IxInput>
      <IxIconButton
        icon="open-file"
        variant="primary"
        outline
        onClick={() => {
          ref.current?.click();
        }}
      ></IxIconButton>
      <input
        ref={ref}
        id="file-upload"
        type="file"
        style={{ display: 'none' }}
        onInput={(e: any) => console.log(e.target.files)}
      />
    </IxCustomField>
  );
};
```
