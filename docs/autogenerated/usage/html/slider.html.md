```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Slider example</title>
  </head>
  <body>
    <ix-slider value="25">
      <span slot="label-start">0</span>
      <span slot="label-end">100</span>
    </ix-slider>

    <ix-slider min="0" max="50" step="10" value="10">
      <span slot="label-start">0</span>
      <span slot="label-end">50</span>
    </ix-slider>
    <script type="module" src="./init.js"></script>
  </body>
</html>
```
