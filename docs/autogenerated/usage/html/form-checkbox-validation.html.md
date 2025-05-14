```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Form checkbox validation example</title>
  </head>
  <body>
    <div>
      <ix-checkbox-group label="Terms of something" info-text="Info text">
        <ix-checkbox
          label="I agree everything"
          name="agreed"
          class="ix-info"
        ></ix-checkbox>
      </ix-checkbox-group>
    </div>

    <div>
      <ix-checkbox-group label="Terms of something" warning-text="Warning text">
        <ix-checkbox label="I agree everything" name="agreed"></ix-checkbox>
        <ix-checkbox
          label="I disagree everything"
          name="agreed"
          class="ix-warning"
        ></ix-checkbox>
      </ix-checkbox-group>
    </div>

    <div>
      <ix-checkbox-group label="Terms of something" invalid-text="Invalid text">
        <ix-checkbox label="I agree everything" name="agreed"></ix-checkbox>
        <ix-checkbox
          label="I disagree everything"
          name="agreed"
          class="ix-invalid"
        ></ix-checkbox>
      </ix-checkbox-group>
    </div>

    <div>
      <ix-checkbox-group label="Terms of something" valid-text="Valid text">
        <ix-checkbox label="I agree everything" name="agreed"></ix-checkbox>
        <ix-checkbox
          label="I disagree everything"
          name="agreed"
          class="ix-valid"
        ></ix-checkbox>
      </ix-checkbox-group>
    </div>

    <script type="module" src="./init.js"></script>
  </body>
</html>
```
