```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Message bar example</title>
    <link rel="stylesheet" href="./message-bar.css" />
  </head>

  <body>
    <div class="message-bar">
      <ix-message-bar dismissible="false">Message text</ix-message-bar>
      <ix-message-bar dismissible="false" type="warning">Message text</ix-message-bar>
      <ix-message-bar dismissible="false" type="danger">
        <div class="message-bar-danger">
          Message text
          <ix-button>Action</ix-button>
        </div>
      </ix-message-bar>
    </div>
    <script type="module" src="./init.js"></script>
  </body>
</html>
```
