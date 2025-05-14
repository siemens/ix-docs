```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Popover news example</title>
  </head>
  <body>
    <ix-application>
      <ix-application-header>
        <div class="placeholder-logo" slot="logo"></div>
      </ix-application-header>
      <ix-menu>
        <ix-menu-about>
          <ix-menu-about-item label="Example"> </ix-menu-about-item>
        </ix-menu-about>
        <ix-menu-about-news label="Test" show about-item-label="Example">
          Test
        </ix-menu-about-news>
      </ix-menu>
    </ix-application>
    <script type="module" src="./init.js"></script>
  </body>
</html>
```
