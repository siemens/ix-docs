```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Category filter suggestions example</title>
  </head>
  <body>
    <ix-category-filter placeholder="Filter by"></ix-category-filter>

    <script>
      const categoryFilter = document.querySelector('ix-category-filter');
      categoryFilter.suggestions = ['Item 1', 'Item 2'];
    </script>
    <script type="module" src="./init.js"></script>
  </body>
</html>
```
