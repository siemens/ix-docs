---
sidebar_position: 1
sidebar_label: Colors
title: Color palette
hide_table_of_contents: false
toc_max_heading_level: 4
doc-type: 'banner'
component-tabs: ['']
no_single_tab: true
description: 'The system color tokens provide consistent, accessible roles for application surfaces, content, states, effects, and data visualization.'
---

import ColorTable from '@site/src/components/ColorTable';

#

Use system colors by referencing their complete custom-property name with the
CSS `var()` function:

```css
.some-example {
  background-color: var(--si-sys-color-background-1);
  color: var(--si-sys-color-text-primary);
}
```

Choose a token for its semantic role rather than for its current rendered
color. This allows the classic light and dark color schemes to provide the
appropriate value automatically.

## Usage guidance

- **Background** tokens establish the application layers and interactive
  surfaces.
- **Text** tokens provide foreground roles, including status and on-color
  variants. Do not select a status color solely by appearance; verify the
  required contrast in its intended context.
- **Code** tokens provide syntax-highlighting roles.
- **Data** tokens provide categorical, rating, and sequential visualization
  palettes. Preserve the documented sequence when assigning a series.
- **Effects** tokens cover color values used by visual effects.

Border colors have their own [border reference](./borders).

The reference below is generated from the system-token manifest shipped by the
installed `@siemens/ix` package. It intentionally excludes reference and legacy
tokens.

## Background {#token-group-color-background}

<ColorTable section="color.background" />

## Code {#token-group-color-code}

<ColorTable section="color.code" />

## Data {#token-group-color-data}

### Categorical {#token-group-color-data-categorical}

<ColorTable section="color.data.categorical" />

### Rating {#token-group-color-data-rating}

<ColorTable section="color.data.rating" />

### Sequential {#token-group-color-data-sequential}

#### Avocado {#token-group-color-data-sequential-avocado}

<ColorTable section="color.data.sequential.avocado" />

#### Blue {#token-group-color-data-sequential-blue}

<ColorTable section="color.data.sequential.blue" />

#### Deep blue {#token-group-color-data-sequential-deep-blue}

<ColorTable section="color.data.sequential.deep-blue" />

#### Green {#token-group-color-data-sequential-green}

<ColorTable section="color.data.sequential.green" />

#### Interactive coral {#token-group-color-data-sequential-interactive-coral}

<ColorTable section="color.data.sequential.interactive-coral" />

#### Orange {#token-group-color-data-sequential-orange}

<ColorTable section="color.data.sequential.orange" />

#### Orchid {#token-group-color-data-sequential-orchid}

<ColorTable section="color.data.sequential.orchid" />

#### Plum {#token-group-color-data-sequential-plum}

<ColorTable section="color.data.sequential.plum" />

#### Purple {#token-group-color-data-sequential-purple}

<ColorTable section="color.data.sequential.purple" />

#### Red {#token-group-color-data-sequential-red}

<ColorTable section="color.data.sequential.red" />

#### Royal blue {#token-group-color-data-sequential-royal-blue}

<ColorTable section="color.data.sequential.royal-blue" />

#### Sand {#token-group-color-data-sequential-sand}

<ColorTable section="color.data.sequential.sand" />

#### Turquoise {#token-group-color-data-sequential-turquoise}

<ColorTable section="color.data.sequential.turquoise" />

#### Yellow {#token-group-color-data-sequential-yellow}

<ColorTable section="color.data.sequential.yellow" />

## Effects {#token-group-color-effects}

<ColorTable section="color.effects" />

## Text {#token-group-color-text}

<ColorTable section="color.text" />
