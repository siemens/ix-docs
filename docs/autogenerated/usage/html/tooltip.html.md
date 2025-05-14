```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Tooltip example</title>
    <link rel="stylesheet" href="./tooltip.css" />
  </head>
  <body>
    <ix-button class="any-class" aria-describedby="tooltip-1">
      Hover me
    </ix-button>
    <ix-tooltip id="tooltip-1" for=".any-class">Simple selector</ix-tooltip>

    <ix-button
      my-custom-special-selector="any-value"
      aria-describedby="tooltip-2"
    >
      Also hover me
    </ix-button>
    <ix-tooltip id="tooltip-2" for="[my-custom-special-selector='any-value']">
      Custom selector
    </ix-tooltip>
    <script type="module" src="./init.js"></script>
  </body>
</html>
```
