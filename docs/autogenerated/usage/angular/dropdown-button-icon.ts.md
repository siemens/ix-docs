```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  styleUrls: ['./dropdown-button-icon.css'],
  template: `
    <div class="dropdown-button">
      <ix-dropdown-button label="" icon="checkboxes">
        <ix-dropdown-item label="Item 1" value="1"></ix-dropdown-item>
        <ix-dropdown-item label="Item 2" value="2"></ix-dropdown-item>
      </ix-dropdown-button>
      <ix-dropdown-button label="" outline icon="checkboxes">
        <ix-dropdown-item label="Item 1" value="1"></ix-dropdown-item>
        <ix-dropdown-item label="Item 2" value="2"></ix-dropdown-item>
      </ix-dropdown-button>
      <ix-dropdown-button label="" ghost icon="checkboxes">
        <ix-dropdown-item label="Item 1" value="1"></ix-dropdown-item>
        <ix-dropdown-item label="Item 2" value="2"></ix-dropdown-item>
      </ix-dropdown-button>
      <ix-dropdown-button label="" disabled icon="checkboxes">
      </ix-dropdown-button>
    </div>
  `,
})
export default class Dropdown {}
```
