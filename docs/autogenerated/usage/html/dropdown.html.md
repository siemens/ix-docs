```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Dropdown example</title>
  </head>
  <body>
    <ix-button id="triggerId">Open</ix-button>
    <ix-dropdown trigger="triggerId">
      <ix-dropdown-header label="Category"></ix-dropdown-header>
      <ix-dropdown-item label="Item 2"></ix-dropdown-item>
      <ix-dropdown-item label="Item 3"></ix-dropdown-item>
      <ix-dropdown-item label="Item 4"></ix-dropdown-item>
      <ix-divider></ix-divider>
      <ix-dropdown-item label="Item 5"></ix-dropdown-item>
    </ix-dropdown>
    <script type="module" src="./init.js"></script>
  </body>
</html>
```
