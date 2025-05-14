```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './datepicker-locale.html',
})
export default class DatepickerLocale {
  locale: 'de' | 'en' | (string & {}) = 'de';

  setLocale(event: Event) {
    const { detail } = event as CustomEvent<string>;

    this.locale = detail;
  }
}
```
