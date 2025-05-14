```html
<div>
  <ix-radio-group
    label='Storage options'
  >
    <ix-radio
      label='256GB SSD storage'
      value='256'
      name='storage-256gb'
      checked
      class='ix-info'
      info-text='Storage options might differ in speed.'
    ></ix-radio>
    <ix-radio
      label='512GB SSD storage'
      value='512'
      name='storage-512gb'
      class='ix-warning'
      warning-text='Storage options might not be available.'
    ></ix-radio>
  </ix-radio-group>
</div>

<div>
  <ix-radio-group
    label='Storage options'
  >
    <ix-radio
      label='256GB SSD storage'
      value='256'
      name='storage-256gb'
      checked
      class='ix-valid'
      valid-text='Storage option is available.'
    ></ix-radio>
    <ix-radio
      label='512GB SSD storage'
      value='512'
      name='storage-512gb'
      class='ix-invalid'
      invalid-text='Storage option is not available.'
    ></ix-radio>
  </ix-radio-group>
</div>
```
