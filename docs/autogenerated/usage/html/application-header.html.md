```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Application header example</title>
    <script type="module">
      import { addIcons } from '@siemens/ix-icons';
      import { iconCheckboxes } from '@siemens/ix-icons/icons';
      addIcons({
        iconCheckboxes,
      });
    </script>
  </head>
  <body>
    <ix-application-header name="My Application">
      <div class="placeholder-logo" slot="logo"></div>

      <ix-icon-button ghost icon="checkboxes"></ix-icon-button>
      <ix-icon-button ghost icon="checkboxes"></ix-icon-button>
      <ix-icon-button ghost icon="checkboxes"></ix-icon-button>

      <ix-dropdown-button variant="secondary" label="Select config" ghost>
        <ix-dropdown-item label="Config 1"></ix-dropdown-item>
        <ix-dropdown-item label="Config 2"></ix-dropdown-item>
        <ix-dropdown-item label="Config 3"></ix-dropdown-item>
      </ix-dropdown-button>

      <ix-avatar username="John Doe" extra="Administrator">
        <ix-dropdown-item label="Action 1"></ix-dropdown-item>
        <ix-dropdown-item label="Action 2"></ix-dropdown-item>
      </ix-avatar>
    </ix-application-header>
    <script type="module" src="./init.js"></script>
  </body>
</html>
```
