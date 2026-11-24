# Borders

> Border color tokens define boundaries, communicate state, and structure application surfaces.

System border tokens provide colors. Combine a semantic border color with the
appropriate width and style for the component:

```css
.some-example {
  border: var(--si-sys-sizing-border-width-default) solid
    var(--si-sys-color-border-1);
}
```

Use neutral border roles to structure surfaces, accent roles for interaction,
and status roles only when the border communicates that status. Use a
`--si-sys-sizing-border-width-*` token for the border width.

The generated swatches below set `border-color`; they do not infer a legacy
composite border or interaction-state relationship.

| Token | Description | CSS expression | Source token |
| --- | --- | --- | --- |
| `--si-sys-color-border-1` | Primary border color for high emphasis. | `var(--si-sys-color-border-1)` | `si.sys.color.border.1` |
| `--si-sys-color-border-2` | Secondary border color for default borders. | `var(--si-sys-color-border-2)` | `si.sys.color.border.2` |
| `--si-sys-color-border-3` | Tertiary border color for ghost and chips borders. | `var(--si-sys-color-border-3)` | `si.sys.color.border.3` |
| `--si-sys-color-border-4` | Very subtle border color for dividers, input disabled, outline for cards, status toggle. | `var(--si-sys-color-border-4)` | `si.sys.color.border.4` |
| `--si-sys-color-border-accent` | Border color for accent elements. | `var(--si-sys-color-border-accent)` | `si.sys.color.border.accent` |
| `--si-sys-color-border-accent-active` | Border color for active states for accent secondary. | `var(--si-sys-color-border-accent-active)` | `si.sys.color.border.accent-active` |
| `--si-sys-color-border-accent-hover` | Border color for hover states for accent secondary. | `var(--si-sys-color-border-accent-hover)` | `si.sys.color.border.accent-hover` |
| `--si-sys-color-border-caution` | Border color for caution states. | `var(--si-sys-color-border-caution)` | `si.sys.color.border.caution` |
| `--si-sys-color-border-critical` | Border color for critical states. | `var(--si-sys-color-border-critical)` | `si.sys.color.border.critical` |
| `--si-sys-color-border-danger` | Border color for danger states. | `var(--si-sys-color-border-danger)` | `si.sys.color.border.danger` |
| `--si-sys-color-border-danger-secondary` | Border color for danger secondary states. | `var(--si-sys-color-border-danger-secondary)` | `si.sys.color.border.danger-secondary` |
| `--si-sys-color-border-disabled` | Border color for disabled interactive controls, such as buttons and inputs. | `var(--si-sys-color-border-disabled)` | `si.sys.color.border.disabled` |
| `--si-sys-color-border-information` | Border color for information states. | `var(--si-sys-color-border-information)` | `si.sys.color.border.information` |
| `--si-sys-color-border-inverse` | Border color for inverse elements. | `var(--si-sys-color-border-inverse)` | `si.sys.color.border.inverse` |
| `--si-sys-color-border-neutral` | Border color for neutral borders. | `var(--si-sys-color-border-neutral)` | `si.sys.color.border.neutral` |
| `--si-sys-color-border-success` | Border color for success states. | `var(--si-sys-color-border-success)` | `si.sys.color.border.success` |
| `--si-sys-color-border-warning` | Border color for warning states. | `var(--si-sys-color-border-warning)` | `si.sys.color.border.warning` |
| `--si-sys-color-border-warning-secondary` | Border color for warning secondary states. | `var(--si-sys-color-border-warning-secondary)` | `si.sys.color.border.warning-secondary` |
