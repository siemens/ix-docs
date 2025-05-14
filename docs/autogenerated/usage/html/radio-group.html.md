```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Radio group example</title>
  </head>
  <body>
    <ix-radio-group label="Storage options">
      <ix-radio
        label="256GB SSD storage"
        value="256"
        name="storage-256gb"
      ></ix-radio>
      <ix-radio
        label="512GB SSD storage"
        value="512"
        name="storage-512gb"
      ></ix-radio>
      <ix-radio
        label="1TB SSD storage"
        value="1024"
        name="storage-1tb"
      ></ix-radio>
      <ix-radio
        label="2TB SSD storage"
        value="2048"
        name="storage-2tb"
        disabled
      ></ix-radio>
    </ix-radio-group>

    <script type="module" src="./init.js"></script>
  </body>
</html>
```
