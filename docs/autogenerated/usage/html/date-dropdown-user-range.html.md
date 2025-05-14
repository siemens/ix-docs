```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Date dropdown user range example</title>
  </head>
  <body>
    <ix-date-dropdown
      date-range-id="last-7"
      format="LL/dd/yyyy"
    ></ix-date-dropdown>

    <script>
      const today = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      });

      const lastSevenDays = new Date(
        new Date().getTime() - 7 * 24 * 60 * 60 * 1000
      ).toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      });

      document.querySelector('ix-date-dropdown').dateRangeOptions = [
        {
          id: 'last-7',
          label: 'Last 7 days',
          from: lastSevenDays,
          to: today,
        },
        {
          id: 'today',
          label: 'Today',
          from: today,
          to: today,
        },
      ];
    </script>
    <script type="module" src="./init.js"></script>
  </body>
</html>
```
