```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Dropdown submenu example</title>
    <script type="module">
      import { addIcons } from '@siemens/ix-icons';
      import {
        iconStar,
        iconDocument,
        iconBulb,
      } from '@siemens/ix-icons/icons';
      addIcons({
        iconStar,
        iconDocument,
        iconBulb,
      });
    </script>
  </head>
  <body>
    <ix-button id="iconTriggerId">Open</ix-button>
    <ix-dropdown trigger="iconTriggerId">
      <ix-dropdown-item id="submenuTrigger" label="Submenu"></ix-dropdown-item>
      <ix-dropdown-item icon="star" label="Item 1"></ix-dropdown-item>
      <ix-dropdown-item icon="document" label="Item 2"></ix-dropdown-item>
      <ix-dropdown-item icon="bulb" label="Item 3"></ix-dropdown-item>
    </ix-dropdown>
    <ix-dropdown trigger="submenuTrigger" placement="right-start">
      <ix-dropdown-item icon="star" label="Item 1"></ix-dropdown-item>
      <ix-dropdown-item icon="document" label="Item 2"></ix-dropdown-item>
    </ix-dropdown>
    <script type="module" src="./init.js"></script>
  </body>
</html>
```
