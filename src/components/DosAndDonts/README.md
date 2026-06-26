# DosAndDonts Component

A reusable React component for displaying dos and don'ts patterns in your documentation with automatic styling and icons.

## Usage

### Import

```tsx
import { DosAndDonts, Dos, Donts } from '@site/src/components/DosAndDonts';
```

### Basic Example

```jsx
<DosAndDonts>
  <Dos>

- Values are displayed when you select events.
- Select an event to view values.

  </Dos>
  <Donts>

- Values aren't displayed when none are selected.
- Values do not appear until an event is selected.

  </Donts>
</DosAndDonts>
```

### Single Column (Full Width)

When you only provide a `<Dos>` without `<Donts>`, it spans the full width:

```jsx
<DosAndDonts>
  <Dos>

- Use American English
- Choose one language variant per product
- Maintain consistency

  </Dos>
</DosAndDonts>
```

## Features

✨ **Automatic styling:**
- ✅ Green checkmark icon for dos (with success color)
- ❌ Red X icon for don'ts (with alarm color)
- Side-by-side layout (2 columns)
- Full-width layout when single section
- Responsive design
- Consistent spacing and typography

## Markdown Inside

The component accepts Markdown content inside. Use standard Markdown syntax:

```jsx
<DosAndDonts>
  <Dos>

- **Bold text** for emphasis
- _Italic text_ for alternatives
- `Code` for UI elements
- [Links](https://example.com)

  </Dos>
  <Donts>

- Avoid this
- Don't do that

  </Donts>
</DosAndDonts>
```

## In MDX Files

Use in `.mdx` files just like the example above. The component handles all Markdown rendering:

```mdx
import { DosAndDonts, Dos, Donts } from '@site/src/components/DosAndDonts';

## Use positive framing

<DosAndDonts>
  <Dos>

- Values are displayed when you select events.
- Select an event to view values.

  </Dos>
  <Donts>

- Values aren't displayed when none are selected.
- Values do not appear until an event is selected.

  </Donts>
</DosAndDonts>
```

## Styling

The component uses CSS classes:
- `.dos-and-donts` - Container with 2-column grid
- `.dos` - Success/do section (green top border)
- `.donts` - Alarm/don't section (red top border)

Styles are defined in [DosAndDonts.scss](./DosAndDonts.scss).

## Migration from Raw HTML

**Before:**
```html
<div className="dos-and-donts" markdown="true">
  <div className="dos" markdown="true">

- Item 1
- Item 2

  </div>
  <div className="donts" markdown="true">

- Item 1
- Item 2

  </div>
</div>
```

**After:**
```jsx
<DosAndDonts>
  <Dos>

- Item 1
- Item 2

  </Dos>
  <Donts>

- Item 1
- Item 2

  </Donts>
</DosAndDonts>
```

## Tips

💡 **Best practices:**
- Keep items concise and scannable
- Use parallel structure (similar grammar)
- Include 2-4 items per section
- Provide context in the heading above
- Use icons and colors to reinforce meaning

---

**Still using raw HTML?** You can migrate existing content to use this component for better maintainability and consistency.
