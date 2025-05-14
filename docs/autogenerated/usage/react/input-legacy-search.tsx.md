```tsx
import { useState } from 'react';
import { IxIcon, IxIconButton, IxInputGroup } from '@siemens/ix-react';
import { iconClear, iconSearch } from '@siemens/ix-icons/icons';

export default () => {
  const [message, setMessage] = useState('');

  function reset() {
    setMessage('');
  }

  let display = message === '' ? 'none' : 'block';

  const handleChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setMessage(event.target.value);
  };

  return (
    <form className="needs-validation">
      <IxInputGroup>
        <span slot="input-start">
          <IxIcon name={iconSearch} size="16"></IxIcon>
        </span>
        <input
          id="input-string"
          type="string"
          className="ix-form-control"
          onChange={handleChange}
          value={message}
        />
        <span slot="input-end">
          <IxIconButton
            onClick={reset}
            id="clear-button"
            icon={iconClear}
            ghost
            size="16"
            style={{ display: display }}
          ></IxIconButton>
        </span>
      </IxInputGroup>
    </form>
  );
};
```
