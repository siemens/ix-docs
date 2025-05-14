```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Application example</title>
  </head>
  <body>
    <ix-application>
      <ix-application-header name="My Application">
        <div class="placeholder-logo" slot="logo"></div>
      </ix-application-header>

      <ix-menu>
        <ix-menu-item>Item 1</ix-menu-item>
        <ix-menu-item>Item 2</ix-menu-item>
      </ix-menu>

      <ix-content>
        <ix-content-header slot="header" header-title="My Content Page">
        </ix-content-header>
      </ix-content>
    </ix-application>

    <script type="module">
      (async () => {
        await window.customElements.whenDefined('ix-application');
        const menu = document.querySelector('ix-application');
        menu.breakpoints = ['md'];
      })();
    </script>
    <script type="module" src="./init.js"></script>
  </body>
</html>
```
