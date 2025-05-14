```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  template: `
    <ix-category-filter
      placeholder="Filter by"
      [suggestions]="suggestions"
    ></ix-category-filter>
  `,
})
export default class CategoryFilterSuggestions {
  suggestions = ['Item 1', 'Item 2'];
}
```
