```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Content example</title>
  </head>
  <body>
    <ix-content>
      <ix-content-header slot="header" header-title="My Content Page">
      </ix-content-header>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
      amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
      nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
      diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
      sit amet.
    </ix-content>
    <script type="module">
      (async () => {
        await window.customElements.whenDefined('ix-application');
        const menu = document.querySelector('ix-application');
        menu.breakpoints = ['md'];
      })();
    </script>
    <script type="module" src="./init.js"></script>
  </body>
</html>
```
