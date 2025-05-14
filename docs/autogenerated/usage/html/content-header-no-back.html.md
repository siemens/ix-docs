```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Content header no back example</title>
    <script type="module">
      import { addIcons } from '@siemens/ix-icons';
      import {
        iconPen,
        iconTrashcan,
        iconContextMenu,
      } from '@siemens/ix-icons/icons';
      addIcons({
        iconPen,
        iconTrashcan,
        iconContextMenu,
      });
    </script>
  </head>
  <body>
    <ix-content-header
      variant="secondary"
      header-title="Content title"
      header-subtitle="Subtitle"
    >
      <ix-icon-button icon="pen" ghost variant="primary">
        Button1
      </ix-icon-button>
      <ix-icon-button icon="trashcan" ghost variant="primary">
        Button2
      </ix-icon-button>
      <ix-icon-button icon="context-menu" ghost variant="primary">
        Button3
      </ix-icon-button>
    </ix-content-header>
    <script type="module" src="./init.js"></script>
  </body>
</html>
```
