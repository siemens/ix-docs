```vue
<script setup lang="ts">
import { IxCustomField } from '@siemens/ix-vue';
</script>

<template>
  <div>
    <IxCustomField
      helper-text="Add your first name here"
      valid-text="Valid first name"
      label="First name"
    >
      <input
        id="first-name"
        className="ix-form-control ix-valid"
        value="Jane"
      />
    </IxCustomField>
  </div>

  <div>
    <IxCustomField info-text="Family name" label="Last name">
      <input id="last-name" className="ix-form-control ix-info" value="Doe" />
    </IxCustomField>
  </div>

  <div>
    <IxCustomField warning-text="Not a valid email address" label="Email">
      <input id="email" className="ix-form-control ix-warning" value="info@" />
    </IxCustomField>
  </div>

  <div>
    <IxCustomField invalid-text="Required" label="Address">
      <input id="address" className="ix-form-control ix-invalid" />
    </IxCustomField>
  </div>
</template>
```
