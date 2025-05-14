```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Input legacy with icon example</title>
    <script type="module">
      import { addIcons } from '@siemens/ix-icons';
      import { iconAbout } from '@siemens/ix-icons/icons';

      addIcons({
        iconAbout,
      });
    </script>
  </head>
  <body>
    <form class="needs-validation">
      <ix-input-group>
        <input class="ix-form-control" type="text" />
        <span slot="input-end"><ix-icon name="about" size="16"></ix-icon></span>
      </ix-input-group>
    </form>

    <script>
      document
        .querySelector('form')
        .addEventListener('submit', (evt) => evt.preventDefault());
    </script>
    <script type="module" src="./init.js"></script>
  </body>
</html>
```
