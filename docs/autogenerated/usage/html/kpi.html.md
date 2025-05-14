```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Kpi example</title>
    <link rel="stylesheet" href="./kpi.css" />
  </head>
  <body>
    <div class="example">
      <ix-kpi label="Motor speed" value="Nominal"></ix-kpi>
      <ix-kpi label="Motor speed" value="122.6" unit="rpm"></ix-kpi>
      <ix-kpi label="Motor speed" value="122.6" state="alarm"></ix-kpi>
      <ix-kpi label="Motor speed" value="122.6" state="warning"></ix-kpi>

      <ix-kpi
        label="Motor speed"
        value="Nominal"
        orientation="vertical"
      ></ix-kpi>
      <ix-kpi
        label="Motor speed"
        value="122.6"
        unit="rpm"
        state="alarm"
        orientation="vertical"
      ></ix-kpi>
    </div>
    <script type="module" src="./init.js"></script>
  </body>
</html>
```
