```ts
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-example',
  templateUrl: `./input-form-validation.html`,
})
export default class InputFormValidation {
  exampleForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
  });

  submit() {
    console.log(this.exampleForm.value);
  }
}
```
