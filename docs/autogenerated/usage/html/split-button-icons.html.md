```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Split button icons example</title>
    <script type="module">
      import { addIcons } from '@siemens/ix-icons';
      import {
        iconDocument,
        iconChevronDownSmall,
        iconCut,
        iconBulb,
      } from '@siemens/ix-icons/icons';
      addIcons({
        iconDocument,
        iconChevronDownSmall,
        iconCut,
        iconBulb,
      });
    </script>
  </head>
  <body>
    <ix-split-button icon="document" split-icon="chevron-down-small">
      <ix-dropdown-item icon="cut"></ix-dropdown-item>
      <ix-dropdown-item icon="bulb"></ix-dropdown-item>
    </ix-split-button>
    <script type="module" src="./init.js"></script>
  </body>
</html>
```
