```html
<ix-application [appSwitchConfig]="appSwitchConfig">
  <ix-application-header name="My Application">
    <div class="placeholder-logo" slot="logo"></div>

    <ix-dropdown-button variant="secondary" label="Select config" ghost>
      <ix-dropdown-item label="Config 1"></ix-dropdown-item>
      <ix-dropdown-item label="Config 2"></ix-dropdown-item>
      <ix-dropdown-item label="Config 3"></ix-dropdown-item>
    </ix-dropdown-button>

    <ix-avatar>
      <ix-dropdown-item label="Action 1"></ix-dropdown-item>
      <ix-dropdown-item label="Action 2"></ix-dropdown-item>
      <ix-dropdown-item label="Action 3"></ix-dropdown-item>
    </ix-avatar>
  </ix-application-header>

  <ix-menu>
    <ix-menu-item>Item 1</ix-menu-item>
    <ix-menu-item>Item 2</ix-menu-item>
  </ix-menu>

  <ix-content>
    <ix-content-header slot="header" header-title="My Content Page">
    </ix-content-header>
  </ix-content>
</ix-application>
```
