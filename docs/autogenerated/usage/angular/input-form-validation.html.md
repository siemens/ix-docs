```html
<form
  class="form-validation-example"
  [formGroup]="exampleForm"
  (ngSubmit)="submit()"
>
  <ix-input
    label="Name:"
    helperText="Write down your name"
    invalidText="Value is required"
    formControlName="name"
    required
  >
  </ix-input>
  <ix-button type="submit">Submit</ix-button>
</form>
```
