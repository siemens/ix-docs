```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Key value with custom value example</title>
    <link rel="stylesheet" href="./key-value-with-custom-value.css" />
  </head>
  <body>
    <ix-key-value label="Label">
      <input
        class="ix-form-control"
        placeholder="Enter text here"
        type="text"
        slot="custom-value"
      />
    </ix-key-value>
    <script type="module" src="./init.js"></script>
  </body>
</html>
```
