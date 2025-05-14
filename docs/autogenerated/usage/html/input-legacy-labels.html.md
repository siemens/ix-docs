```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Input legacy labels example</title>
  </head>

  <body>
    <form class="needs-validation">
      <ix-input-group style="margin-bottom: 0.5rem">
        <span slot="input-start">Label Start</span>
        <input class="ix-form-control" type="text" />
      </ix-input-group>

      <ix-input-group>
        <input class="ix-form-control" type="text" />
        <span slot="input-end">Label End</span>
      </ix-input-group>
    </form>
    <script type="module" src="./init.js"></script>
  </body>
</html>
```
