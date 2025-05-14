```ts
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-example',
  templateUrl: `./validation-select.html`,
})
export default class ValidationSelect {
  exampleForm = new FormGroup({
    car: new FormControl('', [Validators.required]),
  });

  submit() {
    console.log(this.exampleForm.value);
  }
}
```
