```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Map navigation example</title>
  </head>
  <body>
    <ix-map-navigation
      application-name="My Application"
      navigation-title="Navigation title"
      hide-context-menu="false"
    >
      <div class="placeholder-logo" slot="logo"></div>

      <ix-menu>
        <ix-menu-item>Item 1</ix-menu-item>
        <ix-menu-item>Item 2</ix-menu-item>
      </ix-menu>

      <ix-content slot="sidebar-content">Sidebar content</ix-content>

      <ix-content>
        <ix-content-header
          slot="header"
          header-title="My Content Page"
        ></ix-content-header>
      </ix-content>
    </ix-map-navigation>
    <script type="module" src="./init.js"></script>
  </body>
</html>
```
