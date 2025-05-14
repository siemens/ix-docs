```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Message example</title>
  </head>
  <body>
    <ix-button>Show 'success' message</ix-button>

    <script type="module">
      import { showMessage } from '@siemens/ix';

      const btn = document.querySelector('ix-button');
      btn.addEventListener('click', async () => {
        (
          await showMessage.success(
            'Example title',
            'message',
            'Save',
            'Cancel',
            'payload:save',
            'payload:cancel'
          )
        ).once(console.log);
      });
    </script>
    <script type="module" src="./init.js"></script>
  </body>
</html>
```
