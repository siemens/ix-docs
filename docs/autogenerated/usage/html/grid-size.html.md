```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Grid size example</title>
    <link rel="stylesheet" href="./grid-size.css" />
  </head>
  <body>
    <div class="grid">
      <h4>Column 6 takes up more space to a max of 12 columns total</h4>
      <ix-layout-grid>
        <ix-row>
          <ix-col><ix-typography format="display">1</ix-typography></ix-col>
          <ix-col><ix-typography format="display">2</ix-typography></ix-col>
          <ix-col><ix-typography format="display">3</ix-typography></ix-col>
          <ix-col><ix-typography format="display">4</ix-typography></ix-col>
          <ix-col><ix-typography format="display">5</ix-typography></ix-col>
          <ix-col size="6"
            ><ix-typography format="display">6</ix-typography></ix-col
          >
        </ix-row>
      </ix-layout-grid>

      <h4>Stack columns on smaller screens</h4>
      <ix-layout-grid>
        <ix-row>
          <ix-col size="12" size-md="3"
            ><ix-typography format="display">1</ix-typography></ix-col
          >
          <ix-col size="12" size-md="3"
            ><ix-typography format="display">2</ix-typography></ix-col
          >
          <ix-col size="12" size-md="3"
            ><ix-typography format="display">3</ix-typography></ix-col
          >
          <ix-col size="12" size-md="3"
            ><ix-typography format="display">4</ix-typography></ix-col
          >
        </ix-row>
      </ix-layout-grid>
    </div>
    <script type="module" src="./init.js"></script>
  </body>
</html>
```
