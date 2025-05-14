```html
<form class="form-validation-example" [formGroup]="exampleForm" (ngSubmit)="submit()" data-ix-disable-valid>
  <ix-select
    allowClear
    label="Select Car"
    helperText="Select your car brand"
    invalidText="Value is required"
    formControlName="car"
  >
    <ix-select-item value="audi" label="Audi"></ix-select-item>
    <ix-select-item value="vw" label="VW"></ix-select-item>
  </ix-select>
  <ix-button type="submit">Submit</ix-button>
</form>
```
