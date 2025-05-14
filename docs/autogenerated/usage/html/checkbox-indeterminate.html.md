```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Checkbox indeterminate example</title>
  </head>
  <body>
    <div>
      <input class="ix-form-control" type="checkbox" id="checkbox_01" />
      <label class="ix-form-label" for="checkbox_01">Simple checkbox</label>
    </div>

    <script>
      (function () {
        const checkbox = document.querySelector('#checkbox_01');
        checkbox.indeterminate = true;
      })();
    </script>
    <script type="module" src="./init.js"></script>
  </body>
</html>
```
