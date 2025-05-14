```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Input validation example</title>
  </head>
  <style>
    ix-input {
      margin-bottom: 1rem;
    }
  </style>
  <body>
    <div>
      <ix-input
        label="Username"
        placeholder="Enter your Username"
        info-text="Info text"
        class="ix-info"
      ></ix-input>
    </div>

    <div>
      <ix-input
        label="Username"
        placeholder="Enter your Username"
        warning-text="Warning text"
        class="ix-warning"
      ></ix-input>
    </div>

    <div>
      <ix-input
        label="Username"
        placeholder="Enter your Username"
        valid-text="Valid text"
        class="ix-valid"
      ></ix-input>
    </div>

    <div>
      <ix-input
        label="Username"
        placeholder="Enter your Username"
        invalid-text="Invalid text"
        class="ix-invalid"
      ></ix-input>
    </div>

    <script type="module" src="./init.js"></script>
  </body>
</html>
```
