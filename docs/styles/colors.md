# Color palette

> The system color tokens provide consistent, accessible roles for application surfaces, content, states, effects, and data visualization.

# Color palette

Use system colors by referencing their complete custom-property name with the
CSS `var()` function:

```css
.some-example {
  background-color: var(--si-sys-color-background-1);
  color: var(--si-sys-color-text-primary);
}
```

Choose a token for its semantic role rather than for its current rendered
color. This allows the light and dark color schemes to provide the
appropriate value automatically.

## Usage guidance

- **Background** tokens establish the application layers and interactive
  surfaces, including icons that only enhance the visual design, e.g. icons in [message modals](../components/message-modal).
- **Text** tokens provide foreground roles, including status, on-color variants and icons that convey meaning, e.g. icons in [chips](../components/chip). Do not select a status color solely by appearance; verify the required contrast in its intended context.
- **Code** tokens provide syntax-highlighting roles.
- **Data** tokens provide categorical, rating, and sequential visualization
  palettes. Preserve the documented sequence when assigning a series.
- **Effects** tokens cover color values used by visual effects.

Border colors have their own [border reference](./borders).

The reference below is generated from the system-token manifest shipped by the
installed `@siemens/ix` package. It intentionally excludes reference and legacy
tokens.

## Background {#token-group-color-background}

| Token | Description | CSS expression | Source token |
| --- | --- | --- | --- |
| `--si-sys-color-background-0` | The absolute bottom layer, the literal background of the application. | `var(--si-sys-color-background-0)` | `si.sys.color.background.0` |
| `--si-sys-color-background-1` | The primary surface layer where most UI components sit. E.g., cards, side panels, containers that rest above background-0 | `var(--si-sys-color-background-1)` | `si.sys.color.background.1` |
| `--si-sys-color-background-2` | For elements that are placed above background-1, implying a higher visual elevation. | `var(--si-sys-color-background-2)` | `si.sys.color.background.2` |
| `--si-sys-color-background-3` | Used for temporary UI layers that sit above all base surfaces and partially cover the interface below. Is usually paired with drop-shadows. E.g., toast notification, popovers, dropdowns, modals. | `var(--si-sys-color-background-3)` | `si.sys.color.background.3` |
| `--si-sys-color-background-4` | Used to layer in any of the other bases, when a stronger distinction is needed, especially to highlight a container. | `var(--si-sys-color-background-4)` | `si.sys.color.background.4` |
| `--si-sys-color-background-accent` | Background color for accent elements. | `var(--si-sys-color-background-accent)` | `si.sys.color.background.accent` |
| `--si-sys-color-background-accent-active` | Background color for active states on accent elements. | `var(--si-sys-color-background-accent-active)` | `si.sys.color.background.accent-active` |
| `--si-sys-color-background-accent-hover` | Background color for hover states on accent elements. | `var(--si-sys-color-background-accent-hover)` | `si.sys.color.background.accent-hover` |
| `--si-sys-color-background-accent-secondary` | Background color for secondary accent elements. | `var(--si-sys-color-background-accent-secondary)` | `si.sys.color.background.accent-secondary` |
| `--si-sys-color-background-accent-secondary-active` | Background color for active states on secondary accent elements. | `var(--si-sys-color-background-accent-secondary-active)` | `si.sys.color.background.accent-secondary-active` |
| `--si-sys-color-background-accent-secondary-hover` | Background color for hover states on secondary accent elements. | `var(--si-sys-color-background-accent-secondary-hover)` | `si.sys.color.background.accent-secondary-hover` |
| `--si-sys-color-background-active` | Background color for acitve states. | `var(--si-sys-color-background-active)` | `si.sys.color.background.active` |
| `--si-sys-color-background-caution` | Background color for emphasis on caution states. | `var(--si-sys-color-background-caution)` | `si.sys.color.background.caution` |
| `--si-sys-color-background-caution-active` | Background color for active states on caution elements. | `var(--si-sys-color-background-caution-active)` | `si.sys.color.background.caution-active` |
| `--si-sys-color-background-caution-hover` | Background color for hover states on caution elements. | `var(--si-sys-color-background-caution-hover)` | `si.sys.color.background.caution-hover` |
| `--si-sys-color-background-caution-subtle` | Background color for subtle caution states. | `var(--si-sys-color-background-caution-subtle)` | `si.sys.color.background.caution-subtle` |
| `--si-sys-color-background-critical` | Background color for emphasis on critical states. | `var(--si-sys-color-background-critical)` | `si.sys.color.background.critical` |
| `--si-sys-color-background-critical-active` | Background color for active states on critical elements. | `var(--si-sys-color-background-critical-active)` | `si.sys.color.background.critical-active` |
| `--si-sys-color-background-critical-hover` | Background color for hover states on critical elements. | `var(--si-sys-color-background-critical-hover)` | `si.sys.color.background.critical-hover` |
| `--si-sys-color-background-critical-subtle` | Background color for subtle critical states. | `var(--si-sys-color-background-critical-subtle)` | `si.sys.color.background.critical-subtle` |
| `--si-sys-color-background-danger` | Background color for emphasis on danger states. | `var(--si-sys-color-background-danger)` | `si.sys.color.background.danger` |
| `--si-sys-color-background-danger-active` | Background color for active states on danger. | `var(--si-sys-color-background-danger-active)` | `si.sys.color.background.danger-active` |
| `--si-sys-color-background-danger-hover` | Background color for hover states on danger. | `var(--si-sys-color-background-danger-hover)` | `si.sys.color.background.danger-hover` |
| `--si-sys-color-background-danger-secondary` | Background color for secondary states on danger. | `var(--si-sys-color-background-danger-secondary)` | `si.sys.color.background.danger-secondary` |
| `--si-sys-color-background-danger-subtle` | Background color for subtle danger states. | `var(--si-sys-color-background-danger-subtle)` | `si.sys.color.background.danger-subtle` |
| `--si-sys-color-background-disabled` | Background color for the disabled state for specific components, like buttons and other controls | `var(--si-sys-color-background-disabled)` | `si.sys.color.background.disabled` |
| `--si-sys-color-background-hover` | Background color for hover states. | `var(--si-sys-color-background-hover)` | `si.sys.color.background.hover` |
| `--si-sys-color-background-information` | Background color for emphasis on information states. | `var(--si-sys-color-background-information)` | `si.sys.color.background.information` |
| `--si-sys-color-background-information-active` | Background color for active states on information elements. | `var(--si-sys-color-background-information-active)` | `si.sys.color.background.information-active` |
| `--si-sys-color-background-information-hover` | Background color for hover states on information elements. | `var(--si-sys-color-background-information-hover)` | `si.sys.color.background.information-hover` |
| `--si-sys-color-background-information-subtle` | Background color for subtle information states. | `var(--si-sys-color-background-information-subtle)` | `si.sys.color.background.information-subtle` |
| `--si-sys-color-background-inverse` | Background color for inverse states. | `var(--si-sys-color-background-inverse)` | `si.sys.color.background.inverse` |
| `--si-sys-color-background-neutral` | Background color for neutral or unknown states. | `var(--si-sys-color-background-neutral)` | `si.sys.color.background.neutral` |
| `--si-sys-color-background-neutral-active` | Background color for active states on neutral or unknown states. | `var(--si-sys-color-background-neutral-active)` | `si.sys.color.background.neutral-active` |
| `--si-sys-color-background-neutral-hover` | Background color for hover states on neutral or unknown states. | `var(--si-sys-color-background-neutral-hover)` | `si.sys.color.background.neutral-hover` |
| `--si-sys-color-background-selected` | Background color for acitve states. | `var(--si-sys-color-background-selected)` | `si.sys.color.background.selected` |
| `--si-sys-color-background-success` | Background color for emphasis on success states. | `var(--si-sys-color-background-success)` | `si.sys.color.background.success` |
| `--si-sys-color-background-success-active` | Background color for active states on success elements. | `var(--si-sys-color-background-success-active)` | `si.sys.color.background.success-active` |
| `--si-sys-color-background-success-hover` | Background color for hover states on success elements. | `var(--si-sys-color-background-success-hover)` | `si.sys.color.background.success-hover` |
| `--si-sys-color-background-success-subtle` | Background color for subtle success states. | `var(--si-sys-color-background-success-subtle)` | `si.sys.color.background.success-subtle` |
| `--si-sys-color-background-warning` | Background color for emphasis on warning states. | `var(--si-sys-color-background-warning)` | `si.sys.color.background.warning` |
| `--si-sys-color-background-warning-active` | Background color for active states on warning. | `var(--si-sys-color-background-warning-active)` | `si.sys.color.background.warning-active` |
| `--si-sys-color-background-warning-hover` | Background color for hover states on warning. | `var(--si-sys-color-background-warning-hover)` | `si.sys.color.background.warning-hover` |
| `--si-sys-color-background-warning-secondary` | Background color for active states on warning. | `var(--si-sys-color-background-warning-secondary)` | `si.sys.color.background.warning-secondary` |
| `--si-sys-color-background-warning-subtle` | Background color for subtle warning states. | `var(--si-sys-color-background-warning-subtle)` | `si.sys.color.background.warning-subtle` |

## Code {#token-group-color-code}

| Token | Description | CSS expression | Source token |
| --- | --- | --- | --- |
| `--si-sys-color-code-1` | Code color default. | `var(--si-sys-color-code-1)` | `si.sys.color.code.1` |
| `--si-sys-color-code-2` | Code color for operators and keywords. | `var(--si-sys-color-code-2)` | `si.sys.color.code.2` |
| `--si-sys-color-code-3` | Code color for constant / boolean. | `var(--si-sys-color-code-3)` | `si.sys.color.code.3` |
| `--si-sys-color-code-4` | Code color for variables. | `var(--si-sys-color-code-4)` | `si.sys.color.code.4` |
| `--si-sys-color-code-5` | Code color for functions. | `var(--si-sys-color-code-5)` | `si.sys.color.code.5` |
| `--si-sys-color-code-6` | Code color for strings. | `var(--si-sys-color-code-6)` | `si.sys.color.code.6` |
| `--si-sys-color-code-7` | Code colors for numbers. | `var(--si-sys-color-code-7)` | `si.sys.color.code.7` |
| `--si-sys-color-code-8` | Code color for comments. | `var(--si-sys-color-code-8)` | `si.sys.color.code.8` |
| `--si-sys-color-code-9` | Code colors for punctuation. | `var(--si-sys-color-code-9)` | `si.sys.color.code.9` |
| `--si-sys-color-code-10` | Code color for tags. | `var(--si-sys-color-code-10)` | `si.sys.color.code.10` |
| `--si-sys-color-code-11` | Color for typescript. | `var(--si-sys-color-code-11)` | `si.sys.color.code.11` |
| `--si-sys-color-code-12` | Code color for errors. | `var(--si-sys-color-code-12)` | `si.sys.color.code.12` |

## Data {#token-group-color-data}

### Categorical {#token-group-color-data-categorical}

| Token | Description | CSS expression | Source token |
| --- | --- | --- | --- |
| `--si-sys-color-data-categorical-1` | No description is provided by the package manifest. | `var(--si-sys-color-data-categorical-1)` | `si.sys.color.data.categorical.1` |
| `--si-sys-color-data-categorical-2` | No description is provided by the package manifest. | `var(--si-sys-color-data-categorical-2)` | `si.sys.color.data.categorical.2` |
| `--si-sys-color-data-categorical-3` | No description is provided by the package manifest. | `var(--si-sys-color-data-categorical-3)` | `si.sys.color.data.categorical.3` |
| `--si-sys-color-data-categorical-4` | No description is provided by the package manifest. | `var(--si-sys-color-data-categorical-4)` | `si.sys.color.data.categorical.4` |
| `--si-sys-color-data-categorical-5` | No description is provided by the package manifest. | `var(--si-sys-color-data-categorical-5)` | `si.sys.color.data.categorical.5` |
| `--si-sys-color-data-categorical-6` | No description is provided by the package manifest. | `var(--si-sys-color-data-categorical-6)` | `si.sys.color.data.categorical.6` |
| `--si-sys-color-data-categorical-7` | No description is provided by the package manifest. | `var(--si-sys-color-data-categorical-7)` | `si.sys.color.data.categorical.7` |
| `--si-sys-color-data-categorical-8` | No description is provided by the package manifest. | `var(--si-sys-color-data-categorical-8)` | `si.sys.color.data.categorical.8` |
| `--si-sys-color-data-categorical-9` | No description is provided by the package manifest. | `var(--si-sys-color-data-categorical-9)` | `si.sys.color.data.categorical.9` |
| `--si-sys-color-data-categorical-10` | No description is provided by the package manifest. | `var(--si-sys-color-data-categorical-10)` | `si.sys.color.data.categorical.10` |
| `--si-sys-color-data-categorical-11` | No description is provided by the package manifest. | `var(--si-sys-color-data-categorical-11)` | `si.sys.color.data.categorical.11` |
| `--si-sys-color-data-categorical-12` | No description is provided by the package manifest. | `var(--si-sys-color-data-categorical-12)` | `si.sys.color.data.categorical.12` |
| `--si-sys-color-data-categorical-13` | No description is provided by the package manifest. | `var(--si-sys-color-data-categorical-13)` | `si.sys.color.data.categorical.13` |
| `--si-sys-color-data-categorical-14` | No description is provided by the package manifest. | `var(--si-sys-color-data-categorical-14)` | `si.sys.color.data.categorical.14` |
| `--si-sys-color-data-categorical-15` | No description is provided by the package manifest. | `var(--si-sys-color-data-categorical-15)` | `si.sys.color.data.categorical.15` |
| `--si-sys-color-data-categorical-16` | No description is provided by the package manifest. | `var(--si-sys-color-data-categorical-16)` | `si.sys.color.data.categorical.16` |
| `--si-sys-color-data-categorical-17` | No description is provided by the package manifest. | `var(--si-sys-color-data-categorical-17)` | `si.sys.color.data.categorical.17` |

### Rating {#token-group-color-data-rating}

| Token | Description | CSS expression | Source token |
| --- | --- | --- | --- |
| `--si-sys-color-data-rating-average` | No description is provided by the package manifest. | `var(--si-sys-color-data-rating-average)` | `si.sys.color.data.rating.average` |
| `--si-sys-color-data-rating-bad` | No description is provided by the package manifest. | `var(--si-sys-color-data-rating-bad)` | `si.sys.color.data.rating.bad` |
| `--si-sys-color-data-rating-excellent` | No description is provided by the package manifest. | `var(--si-sys-color-data-rating-excellent)` | `si.sys.color.data.rating.excellent` |
| `--si-sys-color-data-rating-good` | No description is provided by the package manifest. | `var(--si-sys-color-data-rating-good)` | `si.sys.color.data.rating.good` |
| `--si-sys-color-data-rating-poor` | No description is provided by the package manifest. | `var(--si-sys-color-data-rating-poor)` | `si.sys.color.data.rating.poor` |

### Sequential {#token-group-color-data-sequential}

#### Avocado {#token-group-color-data-sequential-avocado}

| Token | Description | CSS expression | Source token |
| --- | --- | --- | --- |
| `--si-sys-color-data-sequential-avocado-1` | No description is provided by the package manifest. | `var(--si-sys-color-data-sequential-avocado-1)` | `si.sys.color.data.sequential.avocado.1` |
| `--si-sys-color-data-sequential-avocado-2` | No description is provided by the package manifest. | `var(--si-sys-color-data-sequential-avocado-2)` | `si.sys.color.data.sequential.avocado.2` |
| `--si-sys-color-data-sequential-avocado-3` | No description is provided by the package manifest. | `var(--si-sys-color-data-sequential-avocado-3)` | `si.sys.color.data.sequential.avocado.3` |
| `--si-sys-color-data-sequential-avocado-4` | No description is provided by the package manifest. | `var(--si-sys-color-data-sequential-avocado-4)` | `si.sys.color.data.sequential.avocado.4` |

#### Blue {#token-group-color-data-sequential-blue}

| Token | Description | CSS expression | Source token |
| --- | --- | --- | --- |
| `--si-sys-color-data-sequential-blue-1` | No description is provided by the package manifest. | `var(--si-sys-color-data-sequential-blue-1)` | `si.sys.color.data.sequential.blue.1` |
| `--si-sys-color-data-sequential-blue-2` | No description is provided by the package manifest. | `var(--si-sys-color-data-sequential-blue-2)` | `si.sys.color.data.sequential.blue.2` |
| `--si-sys-color-data-sequential-blue-3` | No description is provided by the package manifest. | `var(--si-sys-color-data-sequential-blue-3)` | `si.sys.color.data.sequential.blue.3` |
| `--si-sys-color-data-sequential-blue-4` | No description is provided by the package manifest. | `var(--si-sys-color-data-sequential-blue-4)` | `si.sys.color.data.sequential.blue.4` |

#### Deep blue {#token-group-color-data-sequential-deep-blue}

| Token | Description | CSS expression | Source token |
| --- | --- | --- | --- |
| `--si-sys-color-data-sequential-deep-blue-1` | No description is provided by the package manifest. | `var(--si-sys-color-data-sequential-deep-blue-1)` | `si.sys.color.data.sequential.deep-blue.1` |
| `--si-sys-color-data-sequential-deep-blue-2` | No description is provided by the package manifest. | `var(--si-sys-color-data-sequential-deep-blue-2)` | `si.sys.color.data.sequential.deep-blue.2` |
| `--si-sys-color-data-sequential-deep-blue-3` | No description is provided by the package manifest. | `var(--si-sys-color-data-sequential-deep-blue-3)` | `si.sys.color.data.sequential.deep-blue.3` |
| `--si-sys-color-data-sequential-deep-blue-4` | No description is provided by the package manifest. | `var(--si-sys-color-data-sequential-deep-blue-4)` | `si.sys.color.data.sequential.deep-blue.4` |

#### Green {#token-group-color-data-sequential-green}

| Token | Description | CSS expression | Source token |
| --- | --- | --- | --- |
| `--si-sys-color-data-sequential-green-1` | No description is provided by the package manifest. | `var(--si-sys-color-data-sequential-green-1)` | `si.sys.color.data.sequential.green.1` |
| `--si-sys-color-data-sequential-green-2` | No description is provided by the package manifest. | `var(--si-sys-color-data-sequential-green-2)` | `si.sys.color.data.sequential.green.2` |
| `--si-sys-color-data-sequential-green-3` | No description is provided by the package manifest. | `var(--si-sys-color-data-sequential-green-3)` | `si.sys.color.data.sequential.green.3` |
| `--si-sys-color-data-sequential-green-4` | No description is provided by the package manifest. | `var(--si-sys-color-data-sequential-green-4)` | `si.sys.color.data.sequential.green.4` |

#### Interactive coral {#token-group-color-data-sequential-interactive-coral}

| Token | Description | CSS expression | Source token |
| --- | --- | --- | --- |
| `--si-sys-color-data-sequential-interactive-coral-1` | No description is provided by the package manifest. | `var(--si-sys-color-data-sequential-interactive-coral-1)` | `si.sys.color.data.sequential.interactive-coral.1` |
| `--si-sys-color-data-sequential-interactive-coral-2` | No description is provided by the package manifest. | `var(--si-sys-color-data-sequential-interactive-coral-2)` | `si.sys.color.data.sequential.interactive-coral.2` |
| `--si-sys-color-data-sequential-interactive-coral-3` | No description is provided by the package manifest. | `var(--si-sys-color-data-sequential-interactive-coral-3)` | `si.sys.color.data.sequential.interactive-coral.3` |
| `--si-sys-color-data-sequential-interactive-coral-4` | No description is provided by the package manifest. | `var(--si-sys-color-data-sequential-interactive-coral-4)` | `si.sys.color.data.sequential.interactive-coral.4` |

#### Orange {#token-group-color-data-sequential-orange}

| Token | Description | CSS expression | Source token |
| --- | --- | --- | --- |
| `--si-sys-color-data-sequential-orange-1` | No description is provided by the package manifest. | `var(--si-sys-color-data-sequential-orange-1)` | `si.sys.color.data.sequential.orange.1` |
| `--si-sys-color-data-sequential-orange-2` | No description is provided by the package manifest. | `var(--si-sys-color-data-sequential-orange-2)` | `si.sys.color.data.sequential.orange.2` |
| `--si-sys-color-data-sequential-orange-3` | No description is provided by the package manifest. | `var(--si-sys-color-data-sequential-orange-3)` | `si.sys.color.data.sequential.orange.3` |
| `--si-sys-color-data-sequential-orange-4` | No description is provided by the package manifest. | `var(--si-sys-color-data-sequential-orange-4)` | `si.sys.color.data.sequential.orange.4` |

#### Orchid {#token-group-color-data-sequential-orchid}

| Token | Description | CSS expression | Source token |
| --- | --- | --- | --- |
| `--si-sys-color-data-sequential-orchid-1` | No description is provided by the package manifest. | `var(--si-sys-color-data-sequential-orchid-1)` | `si.sys.color.data.sequential.orchid.1` |
| `--si-sys-color-data-sequential-orchid-2` | No description is provided by the package manifest. | `var(--si-sys-color-data-sequential-orchid-2)` | `si.sys.color.data.sequential.orchid.2` |
| `--si-sys-color-data-sequential-orchid-3` | No description is provided by the package manifest. | `var(--si-sys-color-data-sequential-orchid-3)` | `si.sys.color.data.sequential.orchid.3` |
| `--si-sys-color-data-sequential-orchid-4` | No description is provided by the package manifest. | `var(--si-sys-color-data-sequential-orchid-4)` | `si.sys.color.data.sequential.orchid.4` |

#### Plum {#token-group-color-data-sequential-plum}

| Token | Description | CSS expression | Source token |
| --- | --- | --- | --- |
| `--si-sys-color-data-sequential-plum-1` | No description is provided by the package manifest. | `var(--si-sys-color-data-sequential-plum-1)` | `si.sys.color.data.sequential.plum.1` |
| `--si-sys-color-data-sequential-plum-2` | No description is provided by the package manifest. | `var(--si-sys-color-data-sequential-plum-2)` | `si.sys.color.data.sequential.plum.2` |
| `--si-sys-color-data-sequential-plum-3` | No description is provided by the package manifest. | `var(--si-sys-color-data-sequential-plum-3)` | `si.sys.color.data.sequential.plum.3` |
| `--si-sys-color-data-sequential-plum-4` | No description is provided by the package manifest. | `var(--si-sys-color-data-sequential-plum-4)` | `si.sys.color.data.sequential.plum.4` |

#### Purple {#token-group-color-data-sequential-purple}

| Token | Description | CSS expression | Source token |
| --- | --- | --- | --- |
| `--si-sys-color-data-sequential-purple-1` | No description is provided by the package manifest. | `var(--si-sys-color-data-sequential-purple-1)` | `si.sys.color.data.sequential.purple.1` |
| `--si-sys-color-data-sequential-purple-2` | No description is provided by the package manifest. | `var(--si-sys-color-data-sequential-purple-2)` | `si.sys.color.data.sequential.purple.2` |
| `--si-sys-color-data-sequential-purple-3` | No description is provided by the package manifest. | `var(--si-sys-color-data-sequential-purple-3)` | `si.sys.color.data.sequential.purple.3` |
| `--si-sys-color-data-sequential-purple-4` | No description is provided by the package manifest. | `var(--si-sys-color-data-sequential-purple-4)` | `si.sys.color.data.sequential.purple.4` |

#### Red {#token-group-color-data-sequential-red}

| Token | Description | CSS expression | Source token |
| --- | --- | --- | --- |
| `--si-sys-color-data-sequential-red-1` | No description is provided by the package manifest. | `var(--si-sys-color-data-sequential-red-1)` | `si.sys.color.data.sequential.red.1` |
| `--si-sys-color-data-sequential-red-2` | No description is provided by the package manifest. | `var(--si-sys-color-data-sequential-red-2)` | `si.sys.color.data.sequential.red.2` |
| `--si-sys-color-data-sequential-red-3` | No description is provided by the package manifest. | `var(--si-sys-color-data-sequential-red-3)` | `si.sys.color.data.sequential.red.3` |
| `--si-sys-color-data-sequential-red-4` | No description is provided by the package manifest. | `var(--si-sys-color-data-sequential-red-4)` | `si.sys.color.data.sequential.red.4` |

#### Royal blue {#token-group-color-data-sequential-royal-blue}

| Token | Description | CSS expression | Source token |
| --- | --- | --- | --- |
| `--si-sys-color-data-sequential-royal-blue-1` | No description is provided by the package manifest. | `var(--si-sys-color-data-sequential-royal-blue-1)` | `si.sys.color.data.sequential.royal-blue.1` |
| `--si-sys-color-data-sequential-royal-blue-2` | No description is provided by the package manifest. | `var(--si-sys-color-data-sequential-royal-blue-2)` | `si.sys.color.data.sequential.royal-blue.2` |
| `--si-sys-color-data-sequential-royal-blue-3` | No description is provided by the package manifest. | `var(--si-sys-color-data-sequential-royal-blue-3)` | `si.sys.color.data.sequential.royal-blue.3` |
| `--si-sys-color-data-sequential-royal-blue-4` | No description is provided by the package manifest. | `var(--si-sys-color-data-sequential-royal-blue-4)` | `si.sys.color.data.sequential.royal-blue.4` |

#### Sand {#token-group-color-data-sequential-sand}

| Token | Description | CSS expression | Source token |
| --- | --- | --- | --- |
| `--si-sys-color-data-sequential-sand-1` | No description is provided by the package manifest. | `var(--si-sys-color-data-sequential-sand-1)` | `si.sys.color.data.sequential.sand.1` |
| `--si-sys-color-data-sequential-sand-2` | No description is provided by the package manifest. | `var(--si-sys-color-data-sequential-sand-2)` | `si.sys.color.data.sequential.sand.2` |
| `--si-sys-color-data-sequential-sand-3` | No description is provided by the package manifest. | `var(--si-sys-color-data-sequential-sand-3)` | `si.sys.color.data.sequential.sand.3` |
| `--si-sys-color-data-sequential-sand-4` | No description is provided by the package manifest. | `var(--si-sys-color-data-sequential-sand-4)` | `si.sys.color.data.sequential.sand.4` |

#### Turquoise {#token-group-color-data-sequential-turquoise}

| Token | Description | CSS expression | Source token |
| --- | --- | --- | --- |
| `--si-sys-color-data-sequential-turquoise-1` | No description is provided by the package manifest. | `var(--si-sys-color-data-sequential-turquoise-1)` | `si.sys.color.data.sequential.turquoise.1` |
| `--si-sys-color-data-sequential-turquoise-2` | No description is provided by the package manifest. | `var(--si-sys-color-data-sequential-turquoise-2)` | `si.sys.color.data.sequential.turquoise.2` |
| `--si-sys-color-data-sequential-turquoise-3` | No description is provided by the package manifest. | `var(--si-sys-color-data-sequential-turquoise-3)` | `si.sys.color.data.sequential.turquoise.3` |
| `--si-sys-color-data-sequential-turquoise-4` | No description is provided by the package manifest. | `var(--si-sys-color-data-sequential-turquoise-4)` | `si.sys.color.data.sequential.turquoise.4` |

#### Yellow {#token-group-color-data-sequential-yellow}

| Token | Description | CSS expression | Source token |
| --- | --- | --- | --- |
| `--si-sys-color-data-sequential-yellow-1` | No description is provided by the package manifest. | `var(--si-sys-color-data-sequential-yellow-1)` | `si.sys.color.data.sequential.yellow.1` |
| `--si-sys-color-data-sequential-yellow-2` | No description is provided by the package manifest. | `var(--si-sys-color-data-sequential-yellow-2)` | `si.sys.color.data.sequential.yellow.2` |
| `--si-sys-color-data-sequential-yellow-3` | No description is provided by the package manifest. | `var(--si-sys-color-data-sequential-yellow-3)` | `si.sys.color.data.sequential.yellow.3` |
| `--si-sys-color-data-sequential-yellow-4` | No description is provided by the package manifest. | `var(--si-sys-color-data-sequential-yellow-4)` | `si.sys.color.data.sequential.yellow.4` |

## Effects {#token-group-color-effects}

| Token | Description | CSS expression | Source token |
| --- | --- | --- | --- |
| `--si-sys-color-effects-backdrop` | No description is provided by the package manifest. | `var(--si-sys-color-effects-backdrop)` | `si.sys.color.effects.backdrop` |
| `--si-sys-color-effects-focus` | Reserved for focus ring, for keyboard navigation. | `var(--si-sys-color-effects-focus)` | `si.sys.color.effects.focus` |
| `--si-sys-color-effects-logo` | No description is provided by the package manifest. | `var(--si-sys-color-effects-logo)` | `si.sys.color.effects.logo` |

## Text {#token-group-color-text}

| Token | Description | CSS expression | Source token |
| --- | --- | --- | --- |
| `--si-sys-color-text-accent` | Accent text color for interactive elements. | `var(--si-sys-color-text-accent)` | `si.sys.color.text.accent` |
| `--si-sys-color-text-accent-active` | Accent text color for active states on interactive elements. | `var(--si-sys-color-text-accent-active)` | `si.sys.color.text.accent-active` |
| `--si-sys-color-text-accent-hover` | Accent text color for hover states on interactive elements. | `var(--si-sys-color-text-accent-hover)` | `si.sys.color.text.accent-hover` |
| `--si-sys-color-text-caution` | Text color for caution states. | `var(--si-sys-color-text-caution)` | `si.sys.color.text.caution` |
| `--si-sys-color-text-critical` | Text color for critical states. | `var(--si-sys-color-text-critical)` | `si.sys.color.text.critical` |
| `--si-sys-color-text-danger` | Text color for danger states. | `var(--si-sys-color-text-danger)` | `si.sys.color.text.danger` |
| `--si-sys-color-text-disabled` | Text color for disabled states. | `var(--si-sys-color-text-disabled)` | `si.sys.color.text.disabled` |
| `--si-sys-color-text-information` | Text color for emphasis for information states. | `var(--si-sys-color-text-information)` | `si.sys.color.text.information` |
| `--si-sys-color-text-inverse` | Text color for use on dark backgrounds for contrast. | `var(--si-sys-color-text-inverse)` | `si.sys.color.text.inverse` |
| `--si-sys-color-text-on-accent` | Text color for use on accent backgrounds. | `var(--si-sys-color-text-on-accent)` | `si.sys.color.text.on-accent` |
| `--si-sys-color-text-on-accent-secondary` | Text color for use on secondary accent backgrounds. | `var(--si-sys-color-text-on-accent-secondary)` | `si.sys.color.text.on-accent-secondary` |
| `--si-sys-color-text-on-accent-secondary-active` | Text color for active states on secondary accent backgrounds. | `var(--si-sys-color-text-on-accent-secondary-active)` | `si.sys.color.text.on-accent-secondary-active` |
| `--si-sys-color-text-on-accent-secondary-hover` | Text color for hover states on secondary accent backgrounds. | `var(--si-sys-color-text-on-accent-secondary-hover)` | `si.sys.color.text.on-accent-secondary-hover` |
| `--si-sys-color-text-on-caution` | Text color for use on caution backgrounds. | `var(--si-sys-color-text-on-caution)` | `si.sys.color.text.on-caution` |
| `--si-sys-color-text-on-critical` | Text color for use on critical backgrounds. | `var(--si-sys-color-text-on-critical)` | `si.sys.color.text.on-critical` |
| `--si-sys-color-text-on-danger` | Text color for use on danger backgrounds. | `var(--si-sys-color-text-on-danger)` | `si.sys.color.text.on-danger` |
| `--si-sys-color-text-on-danger-secondary` | Text color for use on danger secondary backgrounds. | `var(--si-sys-color-text-on-danger-secondary)` | `si.sys.color.text.on-danger-secondary` |
| `--si-sys-color-text-on-disabled` | Text color for text on disabled backgrounds. | `var(--si-sys-color-text-on-disabled)` | `si.sys.color.text.on-disabled` |
| `--si-sys-color-text-on-information` | Text color for use on information backgrounds. | `var(--si-sys-color-text-on-information)` | `si.sys.color.text.on-information` |
| `--si-sys-color-text-on-neutral` | Text color for text on neutral backgrounds. | `var(--si-sys-color-text-on-neutral)` | `si.sys.color.text.on-neutral` |
| `--si-sys-color-text-on-success` | Text color for use on success backgrounds. | `var(--si-sys-color-text-on-success)` | `si.sys.color.text.on-success` |
| `--si-sys-color-text-on-warning` | Text color for use on warning backgrounds. | `var(--si-sys-color-text-on-warning)` | `si.sys.color.text.on-warning` |
| `--si-sys-color-text-on-warning-secondary` | Text color for use on warning secondary backgrounds. | `var(--si-sys-color-text-on-warning-secondary)` | `si.sys.color.text.on-warning-secondary` |
| `--si-sys-color-text-primary` | Primary text color for high emphasis text. | `var(--si-sys-color-text-primary)` | `si.sys.color.text.primary` |
| `--si-sys-color-text-secondary` | Secondary text color for medium emphasis text. | `var(--si-sys-color-text-secondary)` | `si.sys.color.text.secondary` |
| `--si-sys-color-text-success` | Text color for success states. | `var(--si-sys-color-text-success)` | `si.sys.color.text.success` |
| `--si-sys-color-text-warning` | Text color for warning states. | `var(--si-sys-color-text-warning)` | `si.sys.color.text.warning` |
