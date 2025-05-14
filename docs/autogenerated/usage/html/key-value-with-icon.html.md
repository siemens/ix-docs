```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Key value with icon example</title>
    <script type="module">
      import { addIcons } from '@siemens/ix-icons';
      import { iconLocation } from '@siemens/ix-icons/icons';
      addIcons({
        iconLocation,
      });
    </script>
  </head>
  <body>
    <ix-key-value icon="location" label="Label" value="Value"></ix-key-value>
    <script type="module" src="./init.js"></script>
  </body>
</html>
```
