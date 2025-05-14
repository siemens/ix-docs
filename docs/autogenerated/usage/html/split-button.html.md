```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Split button example</title>
    <script type="module">
      import { addIcons } from '@siemens/ix-icons';
      import { iconChevronDownSmall } from '@siemens/ix-icons/icons';
      addIcons({
        iconChevronDownSmall,
      });
    </script>
  </head>
  <body>
    <ix-split-button label="Action text" split-icon="chevron-down-small">
      <ix-dropdown-item label="Item 1"></ix-dropdown-item>
      <ix-dropdown-item label="Item 2"></ix-dropdown-item>
    </ix-split-button>
    <script type="module" src="./init.js"></script>
  </body>
</html>
```
