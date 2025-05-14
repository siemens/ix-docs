```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  template: `
    <ix-blind label="Example" icon="info">
      <ix-icon-button
        id="context-menu"
        slot="header-actions"
        ghost
        icon="context-menu"
        icon-color="color-primary"
      ></ix-icon-button>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
      amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
      nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
      diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
      sit amet.
    </ix-blind>
    <ix-dropdown trigger="context-menu">
      <ix-dropdown-item icon="rename">Rename...</ix-dropdown-item>
      <ix-dropdown-item icon="trashcan">Delete...</ix-dropdown-item>
    </ix-dropdown>
  `,
  styleUrls: ['./blind-header-actions.css'],
})
export default class Blind {}
```
