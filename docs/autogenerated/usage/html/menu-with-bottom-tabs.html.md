```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Menu with bottom tabs example</title>
    <script type="module">
      import { addIcons } from '@siemens/ix-icons';
      import { iconHome, iconInfo } from '@siemens/ix-icons/icons';
      addIcons({
        iconHome,
        iconInfo,
      });
    </script>
  </head>
  <body>
    <ix-menu>
      <ix-menu-item home tab-icon="home"> Home </ix-menu-item>
      <ix-menu-item tab-icon="info" slot="bottom"> Bottom tab </ix-menu-item>
    </ix-menu>
    <script type="module" src="./init.js"></script>
  </body>
</html>
```
