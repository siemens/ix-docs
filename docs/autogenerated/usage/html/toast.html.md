```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Toast example</title>
  </head>
  <body >
    <ix-toast-container></ix-toast-container>

    <ix-button id="toastButton">Trigger toast</ix-button>

    <script type="module">
      import { toast } from '@siemens/ix';

      (async function () {
        await window.customElements.whenDefined('ix-toast-container');
        document.getElementById('toastButton').addEventListener('click', () => {
          toast({
            message: 'My toast message!',
          });
        });
      })();
    </script>
    <script type="module" src="./init.js"></script>
  </body>
</html>
```
