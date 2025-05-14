```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Date input with slots example</title>
    <script type="module">
      import { addIcons } from '@siemens/ix-icons';
      import { iconBulb } from '@siemens/ix-icons/icons';

      addIcons({
        iconBulb,
      });
    </script>
  </head>
  <body>
    <ix-date-input value="1970/01/01">
      <ix-icon slot="start" name="bulb" size="16"></ix-icon>
      <ix-typography slot="end">Slot</ix-typography>
    </ix-date-input>

    <script type="module" src="./init.js"></script>
  </body>
</html>
```
