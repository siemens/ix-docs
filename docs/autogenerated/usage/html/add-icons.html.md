```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Action card example</title>
  </head>
  <body>
    <ix-icon name="star"></ix-icon>
    <ix-icon name="starFilled"></ix-icon>
    <ix-icon name="star-filled"></ix-icon>

    <script type="module">
      import { addIcons } from '@siemens/ix-icons';
      import { iconStar, iconStarFilled } from '@siemens/ix-icons/icons';

      addIcons({
        iconStar,
        iconStarFilled,
      });
    </script>
    <script type="module" src="./init.js"></script>
  </body>
</html>
```
