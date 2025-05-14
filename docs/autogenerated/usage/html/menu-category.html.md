```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Menu category example</title>
    <script type="module">
      import { addIcons } from '@siemens/ix-icons';
      import { iconHome, iconGlobe, iconRocket } from '@siemens/ix-icons/icons';
      addIcons({
        iconHome, iconGlobe, iconRocket,
      });
    </script>
  </head>
  <body>
    <ix-application force-breakpoint="lg">
      <ix-menu>
        <ix-menu-item home icon="home">Home</ix-menu-item>
        <ix-menu-item icon="globe">Normal Tab</ix-menu-item>
        <ix-menu-category label="Top level Category" icon="rocket">
          <ix-menu-item icon="globe">Nested Tab</ix-menu-item>
          <ix-menu-item icon="globe">Nested Tab</ix-menu-item>
        </ix-menu-category>
      </ix-menu>
    </ix-application>

    <script type="module">
      (async () => {
        await window.customElements.whenDefined('ix-menu');
        const menu = document.querySelector('ix-menu');
        menu.breakpoints = ['medium'];
      })();
    </script>
    <script type="module" src="./init.js"></script>
  </body>
</html>
```
