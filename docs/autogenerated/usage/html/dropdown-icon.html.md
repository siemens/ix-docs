```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Dropdown icon example</title>
    <script type="module">
      import { addIcons } from '@siemens/ix-icons';
      import {
        iconStar,
        iconBulb,
        iconDocument,
      } from '@siemens/ix-icons/icons';
      addIcons({
        iconStar,
        iconBulb,
        iconDocument,
      });
    </script>
  </head>
  <body>
    <ix-button id="iconTriggerId">Open</ix-button>
    <ix-dropdown trigger="iconTriggerId">
      <ix-dropdown-item label="Item 1" icon="star"></ix-dropdown-item>
      <ix-dropdown-item label="Item 2" icon="document"></ix-dropdown-item>
      <ix-dropdown-item label="Item 3" icon="bulb"></ix-dropdown-item>
    </ix-dropdown>
    <script type="module" src="./init.js"></script>
  </body>
</html>
```
