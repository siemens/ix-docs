```html
<ix-application application-name="Application name" [breakpoints]="breakpoints">
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
    <ix-content-header slot="header" header-title="Choose breakpoint">
    </ix-content-header>

    <input
      id="small"
      type="radio"
      name="layout"
      value="sm"
      class="ix-form-control"
      (change)="onCheckedChange('sm')"
    />
    <label class="ix-form-label" for="small">Small</label>

    <input
      id="medium"
      type="radio"
      name="layout"
      value="md"
      class="ix-form-control"
      (change)="onCheckedChange('md')"
      checked
    />
    <label class="ix-form-label" for="medium">Medium</label>

    <input
      id="large"
      type="radio"
      name="layout"
      value="lg"
      class="ix-form-control"
      (change)="onCheckedChange('lg')"
    />
    <label class="ix-form-label" for="large">Large</label>
  </ix-content>
</ix-application>
```
