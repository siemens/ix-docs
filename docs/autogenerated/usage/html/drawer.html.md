```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Drawer example</title>
  </head>
  <body>
    <ix-drawer>
      <span>Some content of drawer</span>
    </ix-drawer>
    <ix-button>Toggle drawer</ix-button>

    <script>
      (async function () {
        await window.customElements.whenDefined('ix-drawer');

        const drawer = document.querySelector('ix-drawer');
        drawer.fullHeight = false;
        drawer.closeOnClickOutside = true;

        const button = document.querySelector('ix-button');
        button.addEventListener('click', () => {
          drawer.show = !drawer.show;
        });
      })();
    </script>
    <script type="module" src="./init.js"></script>
  </body>
</html>
```
