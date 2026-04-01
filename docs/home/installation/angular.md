---
sidebar_position: 1
sidebar_label: Angular
title: Angular
doc-type: 'banner'
component-tabs: ['']
no_single_tab: true
description: 'Angular is a popular framework for building dynamic web applications. This section guides you through the steps to install and set up our design system within an Angular project, ensuring a smooth integration process.'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### Peer dependencies

Both `@angular/core` and `@angular/forms` are peer dependencies that you must install before iX.

For the exact version requirements, see the [peerDependencies in package.json](https://github.com/siemens/ix/blob/main/packages/angular/package.json) (search for `peerDependencies` in that file).

```json
"peerDependencies": {
  "@angular/core": ">=20",
  "@angular/forms": ">=20",
}
```

### Library installation

Install `@siemens/ix`, `@siemens/ix-angular` and `@siemens/ix-icons` using a package manager:

<Tabs>
  <TabItem value="npm" label="NPM" default>
    ```
    npm install @siemens/ix @siemens/ix-angular @siemens/ix-icons
    ```
  </TabItem>
  <TabItem value="yarn" label="Yarn">
    ```
    yarn add @siemens/ix @siemens/ix-angular @siemens/ix-icons
    ```
  </TabItem>
  <TabItem value="pnpm" label="PNPM">
    ```
    pnpm add @siemens/ix @siemens/ix-angular @siemens/ix-icons
    ```
  </TabItem>
</Tabs>

### Apply theme

Import the design system styling in your global stylesheet (e.g.: `src/styles.scss`):

```css
@import '@siemens/ix/dist/siemens-ix/siemens-ix.css';
```

Set the `data-ix-theme` attribute of the `<html>` tag to the theme of choice (e.g. `classic`) and the corresponding `data-ix-color-schema` attribute to the value `light`,`dark` or `system` to set the color scheme. `system` will automatically apply the color scheme of the user's operating system.

```html
<html data-ix-theme="classic" data-ix-color-schema="dark">
  <!-- Framework related imports -->
  <!--  -->
  <body></body>
</html>
```

### Standalone setup

Standalone setup is a little different to module setup. Instead of importing the `IxModule` in your module file, iX components and necessary directives are directly imported from `@siemens/ix-angular/standalone` in your component file.

```typescript
import { Component } from '@angular/core';
import { IxButton, IxDropdown, IxDropdownItem, IxDropdownTriggerDirective } from '@siemens/ix-angular/standalone';

@Component({
  standalone: true,
  selector: 'standalone-example',
  imports: [IxButton, IxDropdown, IxDropdownItem, IxDropdownTriggerDirective],
  template: `
    <ix-button #trigger>Open</ix-button>
    <ix-dropdown [ixDropdownTrigger]="trigger">
      <ix-dropdown-item label="Item 2"></ix-dropdown-item>
      <ix-dropdown-item label="Item 3"></ix-dropdown-item>
      <ix-dropdown-item label="Item 4"></ix-dropdown-item>
      <ix-dropdown-item label="Item 5"></ix-dropdown-item>
    </ix-dropdown>
  `,
})
export default class StandaloneExample {}
```

:::info
When using iX form components in an Angular standalone setup, we recommend importing the appropriate value accessor directives from `@siemens/ix-angular/standalone` and include them in your component’s imports array (refer to preview examples). This prevents `No value accessor` errors.

Available value accessors:

- `IxTextValueAccessorDirective` - For `ix-input`, `ix-number-input`, `ix-textarea`
- `IxSelectValueAccessorDirective` - For `ix-select`
- `IxRadioValueAccessorDirective` - For `ix-radio`
- `IxBooleanValueAccessorDirective` - For `ix-checkbox`, `ix-toggle`
- `IxDateValueAccessorDirective` - For `ix-date-input`
- `IxTimeValueAccessorDirective` - For `ix-time-input`

:::

### Module setup (legacy)

Import `IxModule` and `BrowserAnimationsModule` (in some cases also the `RouterModule.forRoot([/** your routes **/])`) in your application module.

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IxModule } from '@siemens/ix-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, IxModule.forRoot(), BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```
