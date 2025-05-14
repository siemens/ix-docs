```tsx
import { IxCheckbox, IxCheckboxGroup } from '@siemens/ix-react';

export default () => {
  return (
    <>
      <div>
        <IxCheckboxGroup label="Terms of something" infoText="Info text">
          <IxCheckbox
            label="I agree everything"
            name="agreed"
            className="ix-info"
          ></IxCheckbox>
        </IxCheckboxGroup>
      </div>

      <div>
        <IxCheckboxGroup label="Terms of something" warningText="Warning text">
          <IxCheckbox
            label="I agree everything"
            name="agreed"
            className="ix-warning"
          ></IxCheckbox>
          <IxCheckbox
            label="I disagree everything"
            name="agreed"
            className="ix-warning"
          ></IxCheckbox>
        </IxCheckboxGroup>
      </div>

      <div>
        <IxCheckboxGroup label="Terms of something" invalidText="Invalid text">
          <IxCheckbox
            label="I agree everything"
            name="agreed"
            className="ix-invalid"
          ></IxCheckbox>
          <IxCheckbox
            label="I disagree everything"
            name="agreed"
            className="ix-invalid"
          ></IxCheckbox>
        </IxCheckboxGroup>
      </div>

      <div>
        <IxCheckboxGroup label="Terms of something" validText="Valid text">
          <IxCheckbox
            label="I agree everything"
            name="agreed"
            className="ix-valid"
          ></IxCheckbox>
          <IxCheckbox
            label="I disagree everything"
            name="agreed"
            className="ix-valid"
          ></IxCheckbox>
        </IxCheckboxGroup>
      </div>
    </>
  );
};
```
