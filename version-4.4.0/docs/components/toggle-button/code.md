# Toggle button - Code

> Code examples and API documentation for the ix-icon-toggle-button, ix-toggle-button

# Toggle button - Code

## Secondary

### React Examples

#### toggle-button-secondary.tsx
```tsx
import './toggle-button-secondary.scoped.css';

import { IxToggleButton } from '@siemens/ix-react';
import { useState } from 'react';
import {
  iconTextBold,
  iconTextItalic,
  iconTextUnderline,
} from '@siemens/ix-icons/icons';

export default () => {
  const [boldPressed, setBoldPressed] = useState(false);
  const [underlinePressed, setUnderlinePressed] = useState(true);

  const handleBoldClick = () => {
    setBoldPressed(!boldPressed);
  };

  const handleUnderlineClick = () => {
    setUnderlinePressed(!underlinePressed);
  };
  return (
    <>
      <div className="button-container">
        <IxToggleButton
          variant="secondary"
          icon={iconTextBold}
          pressed={boldPressed}
          onClick={handleBoldClick}
        >
          Bold
        </IxToggleButton>
        <IxToggleButton variant="secondary" disabled icon={iconTextItalic}>
          Italic
        </IxToggleButton>
        <IxToggleButton
          variant="secondary"
          icon={iconTextUnderline}
          pressed={underlinePressed}
          onClick={handleUnderlineClick}
        >
          Underline
        </IxToggleButton>
        <IxToggleButton variant="secondary" disabled loading>
          Strikethrough
        </IxToggleButton>
      </div>
      <p
        style={{
          fontWeight: boldPressed ? 'bold' : 'normal',
          textDecoration: underlinePressed ? 'underline' : 'none',
        }}
      >
        Lorem ipsum text
      </p>
    </>
  );
};
```

#### toggle-button-secondary.scoped.css
```css
body {
  display: flex;
  flex-direction: column;
}

.button-container {
  display: flex;
  margin-bottom: 1rem;
}

ix-toggle-button {
  margin: 0.25rem;
}
```

### Angular Examples

#### toggle-button-secondary.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  template: `
    <div class="button-container">
      <ix-toggle-button
        variant="secondary"
        icon="text-bold"
        [pressed]="boldPressed"
        (click)="handleBoldClick()"
        >Bold</ix-toggle-button
      >
      <ix-toggle-button variant="secondary" disabled icon="text-italic"
        >Italic</ix-toggle-button
      >
      <ix-toggle-button
        variant="secondary"
        icon="text-underline"
        [pressed]="underlinePressed"
        (click)="handleUnderlineClick()"
        >Underline</ix-toggle-button
      >
      <ix-toggle-button variant="secondary" disabled loading>
        Strikethrough
      </ix-toggle-button>
    </div>
    <p [style.fontWeight]="boldPressed ? 'bold' : 'normal'" [style.text-decoration]="underlinePressed ? 'underline' : 'none'">Lorem ipsum text</p>
  `,
  styleUrls: ['./toggle-button-secondary.css'],
})
export default class Buttons {
  boldPressed = false;
  underlinePressed = true;

  handleBoldClick() {
    this.boldPressed = !this.boldPressed;
  }

  handleUnderlineClick() {
    this.underlinePressed = !this.underlinePressed;
  }
}
```

#### toggle-button-secondary.css
```css
body {
  display: flex;
  flex-direction: column;
}

.button-container {
  display: flex;
  margin-bottom: 1rem;
}

ix-toggle-button {
  margin: 0.25rem;
}
```

### Angular Standalone Examples

#### toggle-button-secondary.ts
```ts
import { Component } from '@angular/core';
import { IxToggleButton } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxToggleButton],
  template: `
    <div class="button-container">
      <ix-toggle-button
        variant="secondary"
        icon="text-bold"
        [pressed]="boldPressed"
        (click)="handleBoldClick()"
        >Bold</ix-toggle-button
      >
      <ix-toggle-button variant="secondary" disabled icon="text-italic"
        >Italic</ix-toggle-button
      >
      <ix-toggle-button
        variant="secondary"
        icon="text-underline"
        [pressed]="underlinePressed"
        (click)="handleUnderlineClick()"
        >Underline</ix-toggle-button
      >
      <ix-toggle-button variant="secondary" disabled loading>
        Strikethrough
      </ix-toggle-button>
    </div>
    <p
      [style.fontWeight]="boldPressed ? 'bold' : 'normal'"
      [style.text-decoration]="underlinePressed ? 'underline' : 'none'"
    >
      Lorem ipsum text
    </p>
  `,
  styleUrls: ['./toggle-button-secondary.css'],
})
export default class Buttons {
  boldPressed = false;
  underlinePressed = true;

  handleBoldClick() {
    this.boldPressed = !this.boldPressed;
  }

  handleUnderlineClick() {
    this.underlinePressed = !this.underlinePressed;
  }
}
```

#### toggle-button-secondary.css
```css
body {
  display: flex;
  flex-direction: column;
}

.button-container {
  display: flex;
  margin-bottom: 1rem;
}

ix-toggle-button {
  margin: 0.25rem;
}
```

### Vue Examples

#### toggle-button-secondary.vue
```vue
<script setup lang="ts">
import { ref, computed } from 'vue';
import {
  iconTextBold,
  iconTextItalic,
  iconTextUnderline,
} from '@siemens/ix-icons/icons';
import { IxToggleButton } from '@siemens/ix-vue';

const boldPressed = ref(false);
const underlinePressed = ref(true);

const handleBoldClick = () => {
  boldPressed.value = !boldPressed.value;
};

const handleUnderlineClick = () => {
  underlinePressed.value = !underlinePressed.value;
};

const paragraphStyle = computed(() => ({
  fontWeight: boldPressed.value ? 'bold' : 'normal',
  textDecoration: underlinePressed.value ? 'underline' : 'none',
}));
</script>

<style scoped src="./toggle-button-secondary.css"></style>

<template>
  <div class="button-container">
    <IxToggleButton
      variant="secondary"
      :icon="iconTextBold"
      :pressed="boldPressed"
      @click="handleBoldClick"
    >
      Bold
    </IxToggleButton>
    <IxToggleButton variant="secondary" disabled :icon="iconTextItalic">
      Italic
    </IxToggleButton>
    <IxToggleButton
      variant="secondary"
      :icon="iconTextUnderline"
      :pressed="underlinePressed"
      @click="handleUnderlineClick"
    >
      Underline
    </IxToggleButton>
    <IxToggleButton variant="secondary" disabled loading>
      Strikethrough
    </IxToggleButton>
  </div>
  <p :style="paragraphStyle">Lorem ipsum text</p>
</template>
```

#### toggle-button-secondary.css
```css
body {
  display: flex;
  flex-direction: column;
}

.button-container {
  display: flex;
  margin-bottom: 1rem;
}

ix-toggle-button {
  margin: 0.25rem;
}
```

## Tertiary

### React Examples

#### toggle-button-tertiary.tsx
```tsx
import './toggle-button-tertiary.scoped.css';

import { IxToggleButton } from '@siemens/ix-react';
import { useState } from 'react';
import {
  iconTextBold,
  iconTextItalic,
  iconTextUnderline,
} from '@siemens/ix-icons/icons';

export default () => {
  const [boldPressed, setBoldPressed] = useState(false);
  const [underlinePressed, setUnderlinePressed] = useState(true);

  const handleBoldClick = () => {
    setBoldPressed(!boldPressed);
  };

  const handleUnderlineClick = () => {
    setUnderlinePressed(!underlinePressed);
  };
  return (
    <>
      <div className="button-container">
        <IxToggleButton
          variant="tertiary"
          icon={iconTextBold}
          pressed={boldPressed}
          onClick={handleBoldClick}
        >
          Bold
        </IxToggleButton>
        <IxToggleButton variant="tertiary" disabled icon={iconTextItalic}>
          Italic
        </IxToggleButton>
        <IxToggleButton
          variant="tertiary"
          icon={iconTextUnderline}
          pressed={underlinePressed}
          onClick={handleUnderlineClick}
        >
          Underline
        </IxToggleButton>
        <IxToggleButton variant="tertiary" disabled loading>
          Strikethrough
        </IxToggleButton>
      </div>
      <p
        style={{
          fontWeight: boldPressed ? 'bold' : 'normal',
          textDecoration: underlinePressed ? 'underline' : 'none',
        }}
      >
        Lorem ipsum text
      </p>
    </>
  );
};
```

#### toggle-button-tertiary.scoped.css
```css
body {
  display: flex;
  flex-direction: column;
}

.button-container {
  display: flex;
  margin-bottom: 1rem;
}

ix-toggle-button {
  margin: 0.25rem;
}
```

### Angular Examples

#### toggle-button-tertiary.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  template: `
    <div class="button-container">
      <ix-toggle-button
        variant="tertiary"
        icon="text-bold"
        [pressed]="boldPressed"
        (click)="handleBoldClick()"
        >Bold</ix-toggle-button
      >
      <ix-toggle-button variant="tertiary" disabled icon="text-italic"
        >Italic</ix-toggle-button
      >
      <ix-toggle-button
        variant="tertiary"
        icon="text-underline"
        [pressed]="underlinePressed"
        (click)="handleUnderlineClick()"
        >Underline</ix-toggle-button
      >
      <ix-toggle-button variant="tertiary" disabled loading>
        Strikethrough
      </ix-toggle-button>
    </div>
    <p [style.fontWeight]="boldPressed ? 'bold' : 'normal'" [style.text-decoration]="underlinePressed ? 'underline' : 'none'">Lorem ipsum text</p>
  `,
  styleUrls: ['./toggle-button-tertiary.css'],
})
export default class Buttons {
  boldPressed = false;
  underlinePressed = true;

  handleBoldClick() {
    this.boldPressed = !this.boldPressed;
  }

  handleUnderlineClick() {
    this.underlinePressed = !this.underlinePressed;
  }
}
```

#### toggle-button-tertiary.css
```css
body {
  display: flex;
  flex-direction: column;
}

.button-container {
  display: flex;
  margin-bottom: 1rem;
}

ix-toggle-button {
  margin: 0.25rem;
}
```

### Angular Standalone Examples

#### toggle-button-tertiary.ts
```ts
import { Component } from '@angular/core';
import { IxToggleButton } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxToggleButton],
  template: `
    <div class="button-container">
      <ix-toggle-button
        variant="tertiary"
        icon="text-bold"
        [pressed]="boldPressed"
        (click)="handleBoldClick()"
        >Bold</ix-toggle-button
      >
      <ix-toggle-button variant="tertiary" disabled icon="text-italic"
        >Italic</ix-toggle-button
      >
      <ix-toggle-button
        variant="tertiary"
        icon="text-underline"
        [pressed]="underlinePressed"
        (click)="handleUnderlineClick()"
        >Underline</ix-toggle-button
      >
      <ix-toggle-button variant="tertiary" disabled loading>
        Strikethrough
      </ix-toggle-button>
    </div>
    <p
      [style.fontWeight]="boldPressed ? 'bold' : 'normal'"
      [style.text-decoration]="underlinePressed ? 'underline' : 'none'"
    >
      Lorem ipsum text
    </p>
  `,
  styleUrls: ['./toggle-button-tertiary.css'],
})
export default class Buttons {
  boldPressed = false;
  underlinePressed = true;

  handleBoldClick() {
    this.boldPressed = !this.boldPressed;
  }

  handleUnderlineClick() {
    this.underlinePressed = !this.underlinePressed;
  }
}
```

#### toggle-button-tertiary.css
```css
body {
  display: flex;
  flex-direction: column;
}

.button-container {
  display: flex;
  margin-bottom: 1rem;
}

ix-toggle-button {
  margin: 0.25rem;
}
```

### Vue Examples

#### toggle-button-tertiary.vue
```vue
<script setup lang="ts">
import { ref, computed } from 'vue';
import {
  iconTextBold,
  iconTextItalic,
  iconTextUnderline,
} from '@siemens/ix-icons/icons';
import { IxToggleButton } from '@siemens/ix-vue';

const boldPressed = ref(false);
const underlinePressed = ref(true);

const handleBoldClick = () => {
  boldPressed.value = !boldPressed.value;
};

const handleUnderlineClick = () => {
  underlinePressed.value = !underlinePressed.value;
};

const paragraphStyle = computed(() => ({
  fontWeight: boldPressed.value ? 'bold' : 'normal',
  textDecoration: underlinePressed.value ? 'underline' : 'none',
}));
</script>

<style scoped src="./toggle-button-tertiary.css"></style>

<template>
  <div class="button-container">
    <IxToggleButton
      variant="tertiary"
      :icon="iconTextBold"
      :pressed="boldPressed"
      @click="handleBoldClick"
    >
      Bold
    </IxToggleButton>
    <IxToggleButton variant="tertiary" disabled :icon="iconTextItalic">
      Italic
    </IxToggleButton>
    <IxToggleButton
      variant="tertiary"
      :icon="iconTextUnderline"
      :pressed="underlinePressed"
      @click="handleUnderlineClick"
    >
      Underline
    </IxToggleButton>
    <IxToggleButton variant="tertiary" disabled loading>
      Strikethrough
    </IxToggleButton>
  </div>
  <p :style="paragraphStyle">Lorem ipsum text</p>
</template>
```

#### toggle-button-tertiary.css
```css
body {
  display: flex;
  flex-direction: column;
}

.button-container {
  display: flex;
  margin-bottom: 1rem;
}

ix-toggle-button {
  margin: 0.25rem;
}
```

## Subtle secondary

### React Examples

#### toggle-button-subtle-secondary.tsx
```tsx
import './toggle-button-subtle-secondary.scoped.css';

import { IxToggleButton } from '@siemens/ix-react';
import { useState } from 'react';
import {
  iconTextBold,
  iconTextItalic,
  iconTextUnderline,
} from '@siemens/ix-icons/icons';

export default () => {
  const [boldPressed, setBoldPressed] = useState(false);
  const [underlinePressed, setUnderlinePressed] = useState(true);

  const handleBoldClick = () => {
    setBoldPressed(!boldPressed);
  };

  const handleUnderlineClick = () => {
    setUnderlinePressed(!underlinePressed);
  };
  return (
    <>
      <div className="button-container">
        <IxToggleButton
          variant="subtle-secondary"
          icon={iconTextBold}
          pressed={boldPressed}
          onClick={handleBoldClick}
        >
          Bold
        </IxToggleButton>
        <IxToggleButton variant="subtle-secondary" disabled icon={iconTextItalic}>
          Italic
        </IxToggleButton>
        <IxToggleButton
          variant="subtle-secondary"
          icon={iconTextUnderline}
          pressed={underlinePressed}
          onClick={handleUnderlineClick}
        >
          Underline
        </IxToggleButton>
        <IxToggleButton variant="subtle-secondary" disabled loading>
          Strikethrough
        </IxToggleButton>
      </div>
      <p
        style={{
          fontWeight: boldPressed ? 'bold' : 'normal',
          textDecoration: underlinePressed ? 'underline' : 'none',
        }}
      >
        Lorem ipsum text
      </p>
    </>
  );
};
```

#### toggle-button-subtle-secondary.scoped.css
```css
body {
  display: flex;
  flex-direction: column;
}

.button-container {
  display: flex;
  margin-bottom: 1rem;
}

ix-toggle-button {
  margin: 0.25rem;
}
```

### Angular Examples

#### toggle-button-subtle-secondary.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  template: `
    <div class="button-container">
      <ix-toggle-button
        variant="subtle-secondary"
        icon="text-bold"
        [pressed]="boldPressed"
        (click)="handleBoldClick()"
        >Bold</ix-toggle-button
      >
      <ix-toggle-button variant="subtle-secondary" disabled icon="text-italic"
        >Italic</ix-toggle-button
      >
      <ix-toggle-button
        variant="subtle-secondary"
        icon="text-underline"
        [pressed]="underlinePressed"
        (click)="handleUnderlineClick()"
        >Underline</ix-toggle-button
      >
      <ix-toggle-button variant="subtle-secondary" disabled loading>
        Strikethrough
      </ix-toggle-button>
    </div>
    <p [style.fontWeight]="boldPressed ? 'bold' : 'normal'" [style.text-decoration]="underlinePressed ? 'underline' : 'none'">Lorem ipsum text</p>
  `,
  styleUrls: ['./toggle-button-subtle-secondary.css'],
})
export default class Buttons {
  boldPressed = false;
  underlinePressed = true;

  handleBoldClick() {
    this.boldPressed = !this.boldPressed;
  }

  handleUnderlineClick() {
    this.underlinePressed = !this.underlinePressed;
  }
}
```

#### toggle-button-subtle-secondary.css
```css
body {
  display: flex;
  flex-direction: column;
}

.button-container {
  display: flex;
  margin-bottom: 1rem;
}

ix-toggle-button {
  margin: 0.25rem;
}
```

### Angular Standalone Examples

#### toggle-button-subtle-secondary.ts
```ts
import { Component } from '@angular/core';
import { IxToggleButton } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxToggleButton],
  template: `
    <div class="button-container">
      <ix-toggle-button
        variant="subtle-secondary"
        icon="text-bold"
        [pressed]="boldPressed"
        (click)="handleBoldClick()"
        >Bold</ix-toggle-button
      >
      <ix-toggle-button variant="subtle-secondary" disabled icon="text-italic"
        >Italic</ix-toggle-button
      >
      <ix-toggle-button
        variant="subtle-secondary"
        icon="text-underline"
        [pressed]="underlinePressed"
        (click)="handleUnderlineClick()"
        >Underline</ix-toggle-button
      >
      <ix-toggle-button variant="subtle-secondary" disabled loading>
        Strikethrough
      </ix-toggle-button>
    </div>
    <p
      [style.fontWeight]="boldPressed ? 'bold' : 'normal'"
      [style.text-decoration]="underlinePressed ? 'underline' : 'none'"
    >
      Lorem ipsum text
    </p>
  `,
  styleUrls: ['./toggle-button-subtle-secondary.css'],
})
export default class Buttons {
  boldPressed = false;
  underlinePressed = true;

  handleBoldClick() {
    this.boldPressed = !this.boldPressed;
  }

  handleUnderlineClick() {
    this.underlinePressed = !this.underlinePressed;
  }
}
```

#### toggle-button-subtle-secondary.css
```css
body {
  display: flex;
  flex-direction: column;
}

.button-container {
  display: flex;
  margin-bottom: 1rem;
}

ix-toggle-button {
  margin: 0.25rem;
}
```

### Vue Examples

#### toggle-button-subtle-secondary.vue
```vue
<script setup lang="ts">
import { ref, computed } from 'vue';
import {
  iconTextBold,
  iconTextItalic,
  iconTextUnderline,
} from '@siemens/ix-icons/icons';
import { IxToggleButton } from '@siemens/ix-vue';

const boldPressed = ref(false);
const underlinePressed = ref(true);

const handleBoldClick = () => {
  boldPressed.value = !boldPressed.value;
};

const handleUnderlineClick = () => {
  underlinePressed.value = !underlinePressed.value;
};

const paragraphStyle = computed(() => ({
  fontWeight: boldPressed.value ? 'bold' : 'normal',
  textDecoration: underlinePressed.value ? 'underline' : 'none',
}));
</script>

<style scoped src="./toggle-button-subtle-secondary.css"></style>

<template>
  <div class="button-container">
    <IxToggleButton
      variant="subtle-secondary"
      :icon="iconTextBold"
      :pressed="boldPressed"
      @click="handleBoldClick"
    >
      Bold
    </IxToggleButton>
    <IxToggleButton variant="subtle-secondary" disabled :icon="iconTextItalic">
      Italic
    </IxToggleButton>
    <IxToggleButton
      variant="subtle-secondary"
      :icon="iconTextUnderline"
      :pressed="underlinePressed"
      @click="handleUnderlineClick"
    >
      Underline
    </IxToggleButton>
    <IxToggleButton variant="subtle-secondary" disabled loading>
      Strikethrough
    </IxToggleButton>
  </div>
  <p :style="paragraphStyle">Lorem ipsum text</p>
</template>
```

#### toggle-button-subtle-secondary.css
```css
body {
  display: flex;
  flex-direction: column;
}

.button-container {
  display: flex;
  margin-bottom: 1rem;
}

ix-toggle-button {
  margin: 0.25rem;
}
```

## Subtle tertiary

### React Examples

#### toggle-button-subtle-tertiary.tsx
```tsx
import './toggle-button-subtle-tertiary.scoped.css';

import { IxToggleButton } from '@siemens/ix-react';
import { useState } from 'react';
import {
  iconTextBold,
  iconTextItalic,
  iconTextUnderline,
} from '@siemens/ix-icons/icons';

export default () => {
  const [boldPressed, setBoldPressed] = useState(false);
  const [underlinePressed, setUnderlinePressed] = useState(true);

  const handleBoldClick = () => {
    setBoldPressed(!boldPressed);
  };

  const handleUnderlineClick = () => {
    setUnderlinePressed(!underlinePressed);
  };
  return (
    <>
      <div className="button-container">
        <IxToggleButton
          variant="subtle-tertiary"
          icon={iconTextBold}
          pressed={boldPressed}
          onClick={handleBoldClick}
        >
          Bold
        </IxToggleButton>
        <IxToggleButton variant="subtle-tertiary" disabled icon={iconTextItalic}>
          Italic
        </IxToggleButton>
        <IxToggleButton
          variant="subtle-tertiary"
          icon={iconTextUnderline}
          pressed={underlinePressed}
          onClick={handleUnderlineClick}
        >
          Underline
        </IxToggleButton>
        <IxToggleButton variant="subtle-tertiary" disabled loading>
          Strikethrough
        </IxToggleButton>
      </div>
      <p
        style={{
          fontWeight: boldPressed ? 'bold' : 'normal',
          textDecoration: underlinePressed ? 'underline' : 'none',
        }}
      >
        Lorem ipsum text
      </p>
    </>
  );
};
```

#### toggle-button-subtle-tertiary.scoped.css
```css
body {
  display: flex;
  flex-direction: column;
}

.button-container {
  display: flex;
  margin-bottom: 1rem;
}

ix-toggle-button {
  margin: 0.25rem;
}
```

### Angular Examples

#### toggle-button-subtle-tertiary.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  template: `
    <div class="button-container">
      <ix-toggle-button
        variant="subtle-tertiary"
        icon="text-bold"
        [pressed]="boldPressed"
        (click)="handleBoldClick()"
        >Bold</ix-toggle-button
      >
      <ix-toggle-button variant="subtle-tertiary" disabled icon="text-italic"
        >Italic</ix-toggle-button
      >
      <ix-toggle-button
        variant="subtle-tertiary"
        icon="text-underline"
        [pressed]="underlinePressed"
        (click)="handleUnderlineClick()"
        >Underline</ix-toggle-button
      >
      <ix-toggle-button variant="subtle-tertiary" disabled loading>
        Strikethrough
      </ix-toggle-button>
    </div>
    <p [style.fontWeight]="boldPressed ? 'bold' : 'normal'" [style.text-decoration]="underlinePressed ? 'underline' : 'none'">Lorem ipsum text</p>
  `,
  styleUrls: ['./toggle-button-subtle-tertiary.css'],
})
export default class Buttons {
  boldPressed = false;
  underlinePressed = true;

  handleBoldClick() {
    this.boldPressed = !this.boldPressed;
  }

  handleUnderlineClick() {
    this.underlinePressed = !this.underlinePressed;
  }
}
```

#### toggle-button-subtle-tertiary.css
```css
body {
  display: flex;
  flex-direction: column;
}

.button-container {
  display: flex;
  margin-bottom: 1rem;
}

ix-toggle-button {
  margin: 0.25rem;
}
```

### Angular Standalone Examples

#### toggle-button-subtle-tertiary.ts
```ts
import { Component } from '@angular/core';
import { IxToggleButton } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxToggleButton],
  template: `
    <div class="button-container">
      <ix-toggle-button
        variant="subtle-tertiary"
        icon="text-bold"
        [pressed]="boldPressed"
        (click)="handleBoldClick()"
        >Bold</ix-toggle-button
      >
      <ix-toggle-button variant="subtle-tertiary" disabled icon="text-italic"
        >Italic</ix-toggle-button
      >
      <ix-toggle-button
        variant="subtle-tertiary"
        icon="text-underline"
        [pressed]="underlinePressed"
        (click)="handleUnderlineClick()"
        >Underline</ix-toggle-button
      >
      <ix-toggle-button variant="subtle-tertiary" disabled loading>
        Strikethrough
      </ix-toggle-button>
    </div>
    <p
      [style.fontWeight]="boldPressed ? 'bold' : 'normal'"
      [style.text-decoration]="underlinePressed ? 'underline' : 'none'"
    >
      Lorem ipsum text
    </p>
  `,
  styleUrls: ['./toggle-button-subtle-tertiary.css'],
})
export default class Buttons {
  boldPressed = false;
  underlinePressed = true;

  handleBoldClick() {
    this.boldPressed = !this.boldPressed;
  }

  handleUnderlineClick() {
    this.underlinePressed = !this.underlinePressed;
  }
}
```

#### toggle-button-subtle-tertiary.css
```css
body {
  display: flex;
  flex-direction: column;
}

.button-container {
  display: flex;
  margin-bottom: 1rem;
}

ix-toggle-button {
  margin: 0.25rem;
}
```

### Vue Examples

#### toggle-button-subtle-tertiary.vue
```vue
<script setup lang="ts">
import { ref, computed } from 'vue';
import {
  iconTextBold,
  iconTextItalic,
  iconTextUnderline,
} from '@siemens/ix-icons/icons';
import { IxToggleButton } from '@siemens/ix-vue';

const boldPressed = ref(false);
const underlinePressed = ref(true);

const handleBoldClick = () => {
  boldPressed.value = !boldPressed.value;
};

const handleUnderlineClick = () => {
  underlinePressed.value = !underlinePressed.value;
};

const paragraphStyle = computed(() => ({
  fontWeight: boldPressed.value ? 'bold' : 'normal',
  textDecoration: underlinePressed.value ? 'underline' : 'none',
}));
</script>

<style scoped src="./toggle-button-subtle-tertiary.css"></style>

<template>
  <div class="button-container">
    <IxToggleButton
      variant="subtle-tertiary"
      :icon="iconTextBold"
      :pressed="boldPressed"
      @click="handleBoldClick"
    >
      Bold
    </IxToggleButton>
    <IxToggleButton variant="subtle-tertiary" disabled :icon="iconTextItalic">
      Italic
    </IxToggleButton>
    <IxToggleButton
      variant="subtle-tertiary"
      :icon="iconTextUnderline"
      :pressed="underlinePressed"
      @click="handleUnderlineClick"
    >
      Underline
    </IxToggleButton>
    <IxToggleButton variant="subtle-tertiary" disabled loading> Strikethrough </IxToggleButton>
  </div>
  <p :style="paragraphStyle">Lorem ipsum text</p>
</template>
```

#### toggle-button-subtle-tertiary.css
```css
body {
  display: flex;
  flex-direction: column;
}

.button-container {
  display: flex;
  margin-bottom: 1rem;
}

ix-toggle-button {
  margin: 0.25rem;
}
```

## Icon secondary

### React Examples

#### icon-toggle-button-secondary.tsx
```tsx
import {
  iconTextBold,
  iconTextItalic,
  iconTextUnderline,
} from '@siemens/ix-icons/icons';
import './icon-toggle-button-secondary.scoped.css';

import { IxIconToggleButton } from '@siemens/ix-react';
import { useState } from 'react';

export default () => {
  const [boldPressed, setBoldPressed] = useState(false);
  const [underlinePressed, setUnderlinePressed] = useState(true);

  const handleBoldClick = () => {
    setBoldPressed(!boldPressed);
  };

  const handleUnderlineClick = () => {
    setUnderlinePressed(!underlinePressed);
  };
  return (
    <>
      <div className="button-container">
        <IxIconToggleButton
          variant="secondary"
          icon={iconTextBold}
          pressed={boldPressed}
          onClick={handleBoldClick}
        >
          Bold
        </IxIconToggleButton>
        <IxIconToggleButton variant="secondary" disabled icon={iconTextItalic}>
          Italic
        </IxIconToggleButton>
        <IxIconToggleButton
          variant="secondary"
          icon={iconTextUnderline}
          pressed={underlinePressed}
          onClick={handleUnderlineClick}
        >
          Underline
        </IxIconToggleButton>
        <IxIconToggleButton variant="secondary" disabled loading>
          Strikethrough
        </IxIconToggleButton>
      </div>
      <p
        style={{
          fontWeight: boldPressed ? 'bold' : 'normal',
          textDecoration: underlinePressed ? 'underline' : 'none',
        }}
      >
        Lorem ipsum text
      </p>
    </>
  );
};
```

#### icon-toggle-button-secondary.scoped.css
```css
body {
  display: flex;
  flex-direction: column;
}

.button-container {
  display: flex;
  margin-bottom: 1rem;
}

ix-icon-toggle-button {
  margin: 0.25rem;
}
```

### Angular Examples

#### icon-toggle-button-secondary.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  template: `
    <div class="button-container">
      <ix-icon-toggle-button
        variant="secondary"
        icon="text-bold"
        [pressed]="boldPressed"
        (click)="handleBoldClick()"
        >Bold</ix-icon-toggle-button
      >
      <ix-icon-toggle-button variant="secondary" disabled icon="text-italic"
        >Italic</ix-icon-toggle-button
      >
      <ix-icon-toggle-button
        variant="secondary"
        icon="text-underline"
        [pressed]="underlinePressed"
        (click)="handleUnderlineClick()"
        >Underline</ix-icon-toggle-button
      >
      <ix-icon-toggle-button variant="secondary" disabled loading>
        Strikethrough
      </ix-icon-toggle-button>
    </div>
    <p [style.fontWeight]="boldPressed ? 'bold' : 'normal'" [style.text-decoration]="underlinePressed ? 'underline' : 'none'">Lorem ipsum text</p>
  `,
  styleUrls: ['./icon-toggle-button-secondary.css'],
})
export default class Buttons {
  boldPressed = false;
  underlinePressed = true;

  handleBoldClick() {
    this.boldPressed = !this.boldPressed;
  }

  handleUnderlineClick() {
    this.underlinePressed = !this.underlinePressed;
  }
}
```

#### icon-toggle-button-secondary.css
```css
body {
  display: flex;
  flex-direction: column;
}

.button-container {
  display: flex;
  margin-bottom: 1rem;
}

ix-icon-toggle-button {
  margin: 0.25rem;
}
```

### Angular Standalone Examples

#### icon-toggle-button-secondary.ts
```ts
import { Component } from '@angular/core';
import { IxIconToggleButton } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxIconToggleButton],
  template: `
    <div class="button-container">
      <ix-icon-toggle-button
        variant="secondary"
        icon="text-bold"
        [pressed]="boldPressed"
        (click)="handleBoldClick()"
        >Bold</ix-icon-toggle-button
      >
      <ix-icon-toggle-button variant="secondary" disabled icon="text-italic"
        >Italic</ix-icon-toggle-button
      >
      <ix-icon-toggle-button
        variant="secondary"
        icon="text-underline"
        [pressed]="underlinePressed"
        (click)="handleUnderlineClick()"
        >Underline</ix-icon-toggle-button
      >
      <ix-icon-toggle-button variant="secondary" disabled loading>
        Strikethrough
      </ix-icon-toggle-button>
    </div>
    <p [style.fontWeight]="boldPressed ? 'bold' : 'normal'" [style.text-decoration]="underlinePressed ? 'underline' : 'none'">Lorem ipsum text</p>
  `,
  styleUrls: ['./icon-toggle-button-secondary.css'],
})
export default class Buttons {
  boldPressed = false;
  underlinePressed = true;

  handleBoldClick() {
    this.boldPressed = !this.boldPressed;
  }

  handleUnderlineClick() {
    this.underlinePressed = !this.underlinePressed;
  }
}
```

#### icon-toggle-button-secondary.css
```css
body {
  display: flex;
  flex-direction: column;
}

.button-container {
  display: flex;
  margin-bottom: 1rem;
}

ix-icon-toggle-button {
  margin: 0.25rem;
}
```

### Vue Examples

#### icon-toggle-button-secondary.vue
```vue
<script setup lang="ts">
import { ref, computed } from 'vue';
import {
  iconTextBold,
  iconTextItalic,
  iconTextUnderline,
} from '@siemens/ix-icons/icons';
import { IxIconToggleButton } from '@siemens/ix-vue';

const boldPressed = ref(false);
const underlinePressed = ref(true);

const handleBoldClick = () => {
  boldPressed.value = !boldPressed.value;
};

const handleUnderlineClick = () => {
  underlinePressed.value = !underlinePressed.value;
};

const paragraphStyle = computed(() => ({
  fontWeight: boldPressed.value ? 'bold' : 'normal',
  textDecoration: underlinePressed.value ? 'underline' : 'none',
}));
</script>

<style scoped src="./icon-toggle-button-secondary.css"></style>

<template>
  <div class="button-container">
    <IxIconToggleButton
      variant="secondary"
      :icon="iconTextBold"
      :pressed="boldPressed"
      @click="handleBoldClick"
    >
      Bold
    </IxIconToggleButton>
    <IxIconToggleButton variant="secondary" disabled :icon="iconTextItalic">
      Italic
    </IxIconToggleButton>
    <IxIconToggleButton
      variant="secondary"
      :icon="iconTextUnderline"
      :pressed="underlinePressed"
      @click="handleUnderlineClick"
    >
      Underline
    </IxIconToggleButton>
    <IxIconToggleButton variant="secondary" disabled loading>
      Strikethrough
    </IxIconToggleButton>
  </div>
  <p :style="paragraphStyle">Lorem ipsum text</p>
</template>
```

#### icon-toggle-button-secondary.css
```css
body {
  display: flex;
  flex-direction: column;
}

.button-container {
  display: flex;
  margin-bottom: 1rem;
}

ix-icon-toggle-button {
  margin: 0.25rem;
}
```

## Icon tertiary

### React Examples

#### icon-toggle-button-tertiary.tsx
```tsx
import {
  iconTextBold,
  iconTextItalic,
  iconTextUnderline,
} from '@siemens/ix-icons/icons';
import './icon-toggle-button-tertiary.scoped.css';

import { IxIconToggleButton } from '@siemens/ix-react';
import { useState } from 'react';

export default () => {
  const [boldPressed, setBoldPressed] = useState(false);
  const [underlinePressed, setUnderlinePressed] = useState(true);

  const handleBoldClick = () => {
    setBoldPressed(!boldPressed);
  };

  const handleUnderlineClick = () => {
    setUnderlinePressed(!underlinePressed);
  };
  return (
    <>
      <div className="button-container">
        <IxIconToggleButton
          variant="tertiary"
          icon={iconTextBold}
          pressed={boldPressed}
          onClick={handleBoldClick}
        >
          Bold
        </IxIconToggleButton>
        <IxIconToggleButton variant="tertiary" disabled icon={iconTextItalic}>
          Italic
        </IxIconToggleButton>
        <IxIconToggleButton
          variant="tertiary"
          icon={iconTextUnderline}
          pressed={underlinePressed}
          onClick={handleUnderlineClick}
        >
          Underline
        </IxIconToggleButton>
        <IxIconToggleButton variant="tertiary" disabled loading>
          Strikethrough
        </IxIconToggleButton>
      </div>
      <p
        style={{
          fontWeight: boldPressed ? 'bold' : 'normal',
          textDecoration: underlinePressed ? 'underline' : 'none',
        }}
      >
        Lorem ipsum text
      </p>
    </>
  );
};
```

#### icon-toggle-button-tertiary.scoped.css
```css
body {
  display: flex;
  flex-direction: column;
}

.button-container {
  display: flex;
  margin-bottom: 1rem;
}

ix-icon-toggle-button {
  margin: 0.25rem;
}
```

### Angular Examples

#### icon-toggle-button-tertiary.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  template: `
    <div class="button-container">
      <ix-icon-toggle-button
        variant="tertiary"
        icon="text-bold"
        [pressed]="boldPressed"
        (click)="handleBoldClick()"
        >Bold</ix-icon-toggle-button
      >
      <ix-icon-toggle-button variant="tertiary" disabled icon="text-italic"
        >Italic</ix-icon-toggle-button
      >
      <ix-icon-toggle-button
        variant="tertiary"
        icon="text-underline"
        [pressed]="underlinePressed"
        (click)="handleUnderlineClick()"
        >Underline</ix-icon-toggle-button
      >
      <ix-icon-toggle-button variant="tertiary" disabled loading>
        Strikethrough
      </ix-icon-toggle-button>
    </div>
    <p [style.fontWeight]="boldPressed ? 'bold' : 'normal'" [style.text-decoration]="underlinePressed ? 'underline' : 'none'">Lorem ipsum text</p>
  `,
  styleUrls: ['./icon-toggle-button-tertiary.css'],
})
export default class Buttons {
  boldPressed = false;
  underlinePressed = true;

  handleBoldClick() {
    this.boldPressed = !this.boldPressed;
  }

  handleUnderlineClick() {
    this.underlinePressed = !this.underlinePressed;
  }
}
```

#### icon-toggle-button-tertiary.css
```css
body {
  display: flex;
  flex-direction: column;
}

.button-container {
  display: flex;
  margin-bottom: 1rem;
}

ix-icon-toggle-button {
  margin: 0.25rem;
}
```

### Angular Standalone Examples

#### icon-toggle-button-tertiary.ts
```ts
import { Component } from '@angular/core';
import { IxIconToggleButton } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxIconToggleButton],
  template: `
    <div class="button-container">
      <ix-icon-toggle-button
        variant="tertiary"
        icon="text-bold"
        [pressed]="boldPressed"
        (click)="handleBoldClick()"
        >Bold</ix-icon-toggle-button
      >
      <ix-icon-toggle-button variant="tertiary" disabled icon="text-italic"
        >Italic</ix-icon-toggle-button
      >
      <ix-icon-toggle-button
        variant="tertiary"
        icon="text-underline"
        [pressed]="underlinePressed"
        (click)="handleUnderlineClick()"
        >Underline</ix-icon-toggle-button
      >
      <ix-icon-toggle-button variant="tertiary" disabled loading>
        Strikethrough
      </ix-icon-toggle-button>
    </div>
    <p [style.fontWeight]="boldPressed ? 'bold' : 'normal'" [style.text-decoration]="underlinePressed ? 'underline' : 'none'">Lorem ipsum text</p>
  `,
  styleUrls: ['./icon-toggle-button-tertiary.css'],
})
export default class Buttons {
  boldPressed = false;
  underlinePressed = true;

  handleBoldClick() {
    this.boldPressed = !this.boldPressed;
  }

  handleUnderlineClick() {
    this.underlinePressed = !this.underlinePressed;
  }
}
```

#### icon-toggle-button-tertiary.css
```css
body {
  display: flex;
  flex-direction: column;
}

.button-container {
  display: flex;
  margin-bottom: 1rem;
}

ix-icon-toggle-button {
  margin: 0.25rem;
}
```

### Vue Examples

#### icon-toggle-button-tertiary.vue
```vue
<script setup lang="ts">
import { ref, computed } from 'vue';
import {
  iconTextBold,
  iconTextItalic,
  iconTextUnderline,
} from '@siemens/ix-icons/icons';
import { IxIconToggleButton } from '@siemens/ix-vue';

const boldPressed = ref(false);
const underlinePressed = ref(true);

const handleBoldClick = () => {
  boldPressed.value = !boldPressed.value;
};

const handleUnderlineClick = () => {
  underlinePressed.value = !underlinePressed.value;
};

const paragraphStyle = computed(() => ({
  fontWeight: boldPressed.value ? 'bold' : 'normal',
  textDecoration: underlinePressed.value ? 'underline' : 'none',
}));
</script>

<style scoped src="./icon-toggle-button-tertiary.css"></style>

<template>
  <div class="button-container">
    <IxIconToggleButton
      variant="tertiary"
      :icon="iconTextBold"
      :pressed="boldPressed"
      @click="handleBoldClick"
    >
      Bold
    </IxIconToggleButton>
    <IxIconToggleButton variant="tertiary" disabled :icon="iconTextItalic">
      Italic
    </IxIconToggleButton>
    <IxIconToggleButton
      variant="tertiary"
      :icon="iconTextUnderline"
      :pressed="underlinePressed"
      @click="handleUnderlineClick"
    >
      Underline
    </IxIconToggleButton>
    <IxIconToggleButton variant="tertiary" disabled loading>
      Strikethrough
    </IxIconToggleButton>
  </div>
  <p :style="paragraphStyle">Lorem ipsum text</p>
</template>
```

#### icon-toggle-button-tertiary.css
```css
body {
  display: flex;
  flex-direction: column;
}

.button-container {
  display: flex;
  margin-bottom: 1rem;
}

ix-icon-toggle-button {
  margin: 0.25rem;
}
```

## Icon subtle secondary

### React Examples

#### icon-toggle-button-subtle-secondary.tsx
```tsx
import {
  iconTextBold,
  iconTextItalic,
  iconTextUnderline,
} from '@siemens/ix-icons/icons';
import './icon-toggle-button-subtle-secondary.scoped.css';

import { IxIconToggleButton } from '@siemens/ix-react';
import { useState } from 'react';

export default () => {
  const [boldPressed, setBoldPressed] = useState(false);
  const [underlinePressed, setUnderlinePressed] = useState(true);

  const handleBoldClick = () => {
    setBoldPressed(!boldPressed);
  };

  const handleUnderlineClick = () => {
    setUnderlinePressed(!underlinePressed);
  };
  return (
    <>
      <div className="button-container">
        <IxIconToggleButton
          variant="subtle-secondary"
          icon={iconTextBold}
          pressed={boldPressed}
          onClick={handleBoldClick}
        >
          Bold
        </IxIconToggleButton>
        <IxIconToggleButton variant="subtle-secondary" disabled icon={iconTextItalic}>
          Italic
        </IxIconToggleButton>
        <IxIconToggleButton
          variant="subtle-secondary"
          icon={iconTextUnderline}
          pressed={underlinePressed}
          onClick={handleUnderlineClick}
        >
          Underline
        </IxIconToggleButton>
        <IxIconToggleButton variant="subtle-secondary" disabled loading>
          Strikethrough
        </IxIconToggleButton>
      </div>
      <p
        style={{
          fontWeight: boldPressed ? 'bold' : 'normal',
          textDecoration: underlinePressed ? 'underline' : 'none',
        }}
      >
        Lorem ipsum text
      </p>
    </>
  );
};
```

#### icon-toggle-button-subtle-secondary.scoped.css
```css
body {
  display: flex;
  flex-direction: column;
}

.button-container {
  display: flex;
  margin-bottom: 1rem;
}

ix-icon-toggle-button {
  margin: 0.25rem;
}
```

### Angular Examples

#### icon-toggle-button-subtle-secondary.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  template: `
    <div class="button-container">
      <ix-icon-toggle-button
        variant="subtle-secondary"
        icon="text-bold"
        [pressed]="boldPressed"
        (click)="handleBoldClick()"
        >Bold</ix-icon-toggle-button
      >
      <ix-icon-toggle-button variant="subtle-secondary" disabled icon="text-italic"
        >Italic</ix-icon-toggle-button
      >
      <ix-icon-toggle-button
        variant="subtle-secondary"
        icon="text-underline"
        [pressed]="underlinePressed"
        (click)="handleUnderlineClick()"
        >Underline</ix-icon-toggle-button
      >
      <ix-icon-toggle-button variant="subtle-secondary" disabled loading>
        Strikethrough
      </ix-icon-toggle-button>
    </div>
    <p [style.fontWeight]="boldPressed ? 'bold' : 'normal'" [style.text-decoration]="underlinePressed ? 'underline' : 'none'">Lorem ipsum text</p>
  `,
  styleUrls: ['./icon-toggle-button-subtle-secondary.css'],
})
export default class Buttons {
  boldPressed = false;
  underlinePressed = true;

  handleBoldClick() {
    this.boldPressed = !this.boldPressed;
  }

  handleUnderlineClick() {
    this.underlinePressed = !this.underlinePressed;
  }
}
```

#### icon-toggle-button-subtle-secondary.css
```css
body {
  display: flex;
  flex-direction: column;
}

.button-container {
  display: flex;
  margin-bottom: 1rem;
}

ix-icon-toggle-button {
  margin: 0.25rem;
}
```

### Angular Standalone Examples

#### icon-toggle-button-subtle-secondary.ts
```ts
import { Component } from '@angular/core';
import { IxIconToggleButton } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxIconToggleButton],
  template: `
    <div class="button-container">
      <ix-icon-toggle-button
        variant="subtle-secondary"
        icon="text-bold"
        [pressed]="boldPressed"
        (click)="handleBoldClick()"
        >Bold</ix-icon-toggle-button
      >
      <ix-icon-toggle-button variant="subtle-secondary" disabled icon="text-italic"
        >Italic</ix-icon-toggle-button
      >
      <ix-icon-toggle-button
        variant="subtle-secondary"
        icon="text-underline"
        [pressed]="underlinePressed"
        (click)="handleUnderlineClick()"
        >Underline</ix-icon-toggle-button
      >
      <ix-icon-toggle-button variant="subtle-secondary" disabled loading>
        Strikethrough
      </ix-icon-toggle-button>
    </div>
    <p [style.fontWeight]="boldPressed ? 'bold' : 'normal'" [style.text-decoration]="underlinePressed ? 'underline' : 'none'">Lorem ipsum text</p>
  `,
  styleUrls: ['./icon-toggle-button-subtle-secondary.css'],
})
export default class Buttons {
  boldPressed = false;
  underlinePressed = true;

  handleBoldClick() {
    this.boldPressed = !this.boldPressed;
  }

  handleUnderlineClick() {
    this.underlinePressed = !this.underlinePressed;
  }
}
```

#### icon-toggle-button-subtle-secondary.css
```css
body {
  display: flex;
  flex-direction: column;
}

.button-container {
  display: flex;
  margin-bottom: 1rem;
}

ix-icon-toggle-button {
  margin: 0.25rem;
}
```

### Vue Examples

#### icon-toggle-button-subtle-secondary.vue
```vue
<script setup lang="ts">
import { ref, computed } from 'vue';
import {
  iconTextBold,
  iconTextItalic,
  iconTextUnderline,
} from '@siemens/ix-icons/icons';
import { IxIconToggleButton } from '@siemens/ix-vue';

const boldPressed = ref(false);
const underlinePressed = ref(true);

const handleBoldClick = () => {
  boldPressed.value = !boldPressed.value;
};

const handleUnderlineClick = () => {
  underlinePressed.value = !underlinePressed.value;
};

const paragraphStyle = computed(() => ({
  fontWeight: boldPressed.value ? 'bold' : 'normal',
  textDecoration: underlinePressed.value ? 'underline' : 'none',
}));
</script>

<style scoped src="./icon-toggle-button-subtle-secondary.css"></style>

<template>
  <div class="button-container">
    <IxIconToggleButton
      variant="subtle-secondary"
      :icon="iconTextBold"
      :pressed="boldPressed"
      @click="handleBoldClick"
    >
      Bold
    </IxIconToggleButton>
    <IxIconToggleButton
      variant="subtle-secondary"
      disabled
      :icon="iconTextItalic"
    >
      Italic
    </IxIconToggleButton>
    <IxIconToggleButton
      variant="subtle-secondary"
      :icon="iconTextUnderline"
      :pressed="underlinePressed"
      @click="handleUnderlineClick"
    >
      Underline
    </IxIconToggleButton>
    <IxIconToggleButton variant="subtle-secondary" disabled loading>
      Strikethrough
    </IxIconToggleButton>
  </div>
  <p :style="paragraphStyle">Lorem ipsum text</p>
</template>
```

#### icon-toggle-button-subtle-secondary.css
```css
body {
  display: flex;
  flex-direction: column;
}

.button-container {
  display: flex;
  margin-bottom: 1rem;
}

ix-icon-toggle-button {
  margin: 0.25rem;
}
```

## Icon subtle tertiary

### React Examples

#### icon-toggle-button-subtle-tertiary.tsx
```tsx
import {
  iconTextBold,
  iconTextItalic,
  iconTextUnderline,
} from '@siemens/ix-icons/icons';
import './icon-toggle-button-subtle-tertiary.scoped.css';

import { IxIconToggleButton } from '@siemens/ix-react';
import { useState } from 'react';

export default () => {
  const [boldPressed, setBoldPressed] = useState(false);
  const [underlinePressed, setUnderlinePressed] = useState(true);

  const handleBoldClick = () => {
    setBoldPressed(!boldPressed);
  };

  const handleUnderlineClick = () => {
    setUnderlinePressed(!underlinePressed);
  };
  return (
    <>
      <div className="button-container">
        <IxIconToggleButton
          variant="subtle-tertiary"
          icon={iconTextBold}
          pressed={boldPressed}
          onClick={handleBoldClick}
        >
          Bold
        </IxIconToggleButton>
        <IxIconToggleButton variant="subtle-tertiary" disabled icon={iconTextItalic}>
          Italic
        </IxIconToggleButton>
        <IxIconToggleButton
          variant="subtle-tertiary"
          icon={iconTextUnderline}
          pressed={underlinePressed}
          onClick={handleUnderlineClick}
        >
          Underline
        </IxIconToggleButton>
        <IxIconToggleButton variant="subtle-tertiary" disabled loading>
          Strikethrough
        </IxIconToggleButton>
      </div>
      <p
        style={{
          fontWeight: boldPressed ? 'bold' : 'normal',
          textDecoration: underlinePressed ? 'underline' : 'none',
        }}
      >
        Lorem ipsum text
      </p>
    </>
  );
};
```

#### icon-toggle-button-subtle-tertiary.scoped.css
```css
body {
  display: flex;
  flex-direction: column;
}

.button-container {
  display: flex;
  margin-bottom: 1rem;
}

ix-icon-toggle-button {
  margin: 0.25rem;
}
```

### Angular Examples

#### icon-toggle-button-subtle-tertiary.ts
```ts
import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-example',
  template: `
    <div class="button-container">
      <ix-icon-toggle-button
        variant="subtle-tertiary"
        icon="text-bold"
        [pressed]="boldPressed"
        (click)="handleBoldClick()"
        >Bold</ix-icon-toggle-button
      >
      <ix-icon-toggle-button variant="subtle-tertiary" disabled icon="text-italic"
        >Italic</ix-icon-toggle-button
      >
      <ix-icon-toggle-button
        variant="subtle-tertiary"
        icon="text-underline"
        [pressed]="underlinePressed"
        (click)="handleUnderlineClick()"
        >Underline</ix-icon-toggle-button
      >
      <ix-icon-toggle-button variant="subtle-tertiary" disabled loading>
        Strikethrough
      </ix-icon-toggle-button>
    </div>
    <p [style.fontWeight]="boldPressed ? 'bold' : 'normal'" [style.text-decoration]="underlinePressed ? 'underline' : 'none'">Lorem ipsum text</p>
  `,
  styleUrls: ['./icon-toggle-button-subtle-tertiary.css'],
})
export default class Buttons {
  boldPressed = false;
  underlinePressed = true;

  handleBoldClick() {
    this.boldPressed = !this.boldPressed;
  }

  handleUnderlineClick() {
    this.underlinePressed = !this.underlinePressed;
  }
}
```

#### icon-toggle-button-subtle-tertiary.css
```css
body {
  display: flex;
  flex-direction: column;
}

.button-container {
  display: flex;
  margin-bottom: 1rem;
}

ix-icon-toggle-button {
  margin: 0.25rem;
}
```

### Angular Standalone Examples

#### icon-toggle-button-subtle-tertiary.ts
```ts
import { Component } from '@angular/core';
import { IxIconToggleButton } from '@siemens/ix-angular/standalone';

@Component({
  selector: 'app-example',
  imports: [IxIconToggleButton],
  template: `
    <div class="button-container">
      <ix-icon-toggle-button
        variant="subtle-tertiary"
        icon="text-bold"
        [pressed]="boldPressed"
        (click)="handleBoldClick()"
        >Bold</ix-icon-toggle-button
      >
      <ix-icon-toggle-button variant="subtle-tertiary" disabled icon="text-italic"
        >Italic</ix-icon-toggle-button
      >
      <ix-icon-toggle-button
        variant="subtle-tertiary"
        icon="text-underline"
        [pressed]="underlinePressed"
        (click)="handleUnderlineClick()"
        >Underline</ix-icon-toggle-button
      >
      <ix-icon-toggle-button variant="subtle-tertiary" disabled loading>
        Strikethrough
      </ix-icon-toggle-button>
    </div>
    <p [style.fontWeight]="boldPressed ? 'bold' : 'normal'" [style.text-decoration]="underlinePressed ? 'underline' : 'none'">Lorem ipsum text</p>
  `,
  styleUrls: ['./icon-toggle-button-subtle-tertiary.css'],
})
export default class Buttons {
  boldPressed = false;
  underlinePressed = true;

  handleBoldClick() {
    this.boldPressed = !this.boldPressed;
  }

  handleUnderlineClick() {
    this.underlinePressed = !this.underlinePressed;
  }
}
```

#### icon-toggle-button-subtle-tertiary.css
```css
body {
  display: flex;
  flex-direction: column;
}

.button-container {
  display: flex;
  margin-bottom: 1rem;
}

ix-icon-toggle-button {
  margin: 0.25rem;
}
```

### Vue Examples

#### icon-toggle-button-subtle-tertiary.vue
```vue
<script setup lang="ts">
import { ref, computed } from 'vue';
import {
  iconTextBold,
  iconTextItalic,
  iconTextUnderline,
} from '@siemens/ix-icons/icons';
import { IxIconToggleButton } from '@siemens/ix-vue';

const boldPressed = ref(false);
const underlinePressed = ref(true);

const handleBoldClick = () => {
  boldPressed.value = !boldPressed.value;
};

const handleUnderlineClick = () => {
  underlinePressed.value = !underlinePressed.value;
};

const paragraphStyle = computed(() => ({
  fontWeight: boldPressed.value ? 'bold' : 'normal',
  textDecoration: underlinePressed.value ? 'underline' : 'none',
}));
</script>

<style scoped src="./icon-toggle-button-subtle-tertiary.css"></style>

<template>
  <div class="button-container">
    <IxIconToggleButton
      variant="subtle-tertiary"
      :icon="iconTextBold"
      :pressed="boldPressed"
      @click="handleBoldClick"
    >
      Bold
    </IxIconToggleButton>
    <IxIconToggleButton
      variant="subtle-tertiary"
      disabled
      :icon="iconTextItalic"
    >
      Italic
    </IxIconToggleButton>
    <IxIconToggleButton
      variant="subtle-tertiary"
      :icon="iconTextUnderline"
      :pressed="underlinePressed"
      @click="handleUnderlineClick"
    >
      Underline
    </IxIconToggleButton>
    <IxIconToggleButton variant="subtle-tertiary" disabled loading>
      Strikethrough
    </IxIconToggleButton>
  </div>
  <p :style="paragraphStyle">Lorem ipsum text</p>
</template>
```

#### icon-toggle-button-subtle-tertiary.css
```css
body {
  display: flex;
  flex-direction: column;
}

.button-container {
  display: flex;
  margin-bottom: 1rem;
}

ix-icon-toggle-button {
  margin: 0.25rem;
}
```

## API for ix-toggle-button

### Properties

| Name | Description | Attribute | Type | Default |
| --- | --- | --- | --- | --- |
| ariaLabelButton | ARIA label that will be set on the native HTML button element | aria-label-button | string \| undefined |  |
| disabled | Disable the button | disabled | boolean | false |
| icon | Icon name | icon | string \| undefined |  |
| iconRight | Icon name for the right side of the button | icon-right | string \| undefined |  |
| loading | Loading button | loading | boolean | false |
| pressed | Show button as pressed | pressed | boolean | false |
| variant | Button variant. | variant | "primary" \| "secondary" \| "subtle-primary" \| "subtle-secondary" \| "subtle-tertiary" \| "tertiary" | 'subtle-primary' |

### Events

| Name | Description | Event | Detail |
| --- | --- | --- | --- |
| pressedChange | Pressed change event | pressedChange | boolean |

## API for ix-icon-toggle-button

### Properties

| Name | Description | Attribute | Type | Default |
| --- | --- | --- | --- | --- |
| ariaLabelIconButton | ARIA label for the icon button Will be set for the native HTML button element | aria-label-icon-button | string \| undefined |  |
| disabled | Disable the button | disabled | boolean | false |
| ghost | Button with no background or outline | ghost | boolean | false |
| icon | Icon name | icon | string \| undefined |  |
| loading | Loading button | loading | boolean | false |
| outline | Outline button | outline | boolean | false |
| oval | Button in oval shape | oval | boolean | false |
| pressed | Show button as pressed | pressed | boolean | false |
| size | Size of icon in button | size | "12" \| "16" \| "24" | '24' |
| variant | Button variant. | variant | "danger-primary" \| "danger-secondary" \| "danger-tertiary" \| "primary" \| "secondary" \| "subtle-primary" \| "subtle-secondary" \| "subtle-tertiary" \| "tertiary" | 'subtle-primary' |

### Events

| Name | Description | Event | Detail |
| --- | --- | --- | --- |
| pressedChange | Pressed change event | pressedChange | boolean |
