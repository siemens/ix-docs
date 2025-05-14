```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Input pattern example</title>
  </head>
  <body>
    <ix-input
      helper-text="Only characters a-d are allowed"
      allowed-characters-pattern="[a-d]"
      max-length="4"
    ></ix-input>

    <script type="module" src="./init.js"></script>
  </body>
</html>
```
