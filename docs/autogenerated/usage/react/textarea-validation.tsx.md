```tsx
import { IxTextarea } from '@siemens/ix-react';

export default () => {
  return (
    <>
      <div>
        <IxTextarea
          maxLength={100}
          name="comment"
          label="Comment"
          infoText="Info text"
          class="ix-info"
        ></IxTextarea>
      </div>

      <div>
        <IxTextarea
          maxLength={100}
          name="comment"
          label="Comment"
          warningText="Warning text"
          class="ix-warning"
        ></IxTextarea>
      </div>

      <div>
        <IxTextarea
          maxLength={100}
          name="comment"
          label="Comment"
          validText="Valid text"
          className="valid"
        ></IxTextarea>
      </div>

      <div>
        <IxTextarea
          maxLength={100}
          name="comment"
          label="Comment"
          invalidText="Invalid text"
          class="ix-invalid"
        ></IxTextarea>
      </div>
    </>
  );
};
```
