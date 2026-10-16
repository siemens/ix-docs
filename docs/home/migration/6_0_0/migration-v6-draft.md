This is the library with the breaking changes guide
/Users/felixleist/Dev/ix/BREAKING_CHANGES/v6.md
Reference sections

# Foundations

## Color tokens

## Typography

## Sizing tokens

## Icon size


# Status variants


# Deprecated components

## Pill


# Architectural changes

## React callback types
https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#react-callback-types

## Vue modal types
https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#vue-modal-types

## Vue 3.5 requirement
https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#vue-35-requirement

## Angular 21 requirement
https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#angular-21-requirement

## Stencil collection optional peers
https://github.com/siemens/ix/blob/main/BREAKING_CHANGES/v6.md#stencil-collection-optional-peers


# Figma changes

## Applying tokens across the library

Inside components and library assets we
- applied new sys colors
- applied new typography
- applied new density tokens

If you have used the previous colors in your Figma file for custom components:
- Follow the mapping table provided in [Figma](https://www.figma.com/design/oXZxXsUnBraWcasjOcaMR3/Card-status-variants-revisited?node-id=146865-399077&t=FAK8a9KbsJkbGeh5-4) to migrate.
- We suggest using a [skill.md](https://www.figma.com/design/oXZxXsUnBraWcasjOcaMR3/Card-status-variants-revisited?node-id=147439-14972&t=FAK8a9KbsJkbGeh5-4) to migrate colors.

If you have used the previous typography in your Figma file for custom components:
- Follow the font size mapping in [Figma](https://www.figma.com/design/oXZxXsUnBraWcasjOcaMR3/Card-status-variants-revisited?node-id=135347-2143&t=FAK8a9KbsJkbGeh5-4)

## Status variants

In alignment with Siemens Design Language and the new color tokens we renamed status variants and introduced missing status variants.

| Before      | After        |
| ----------- | ------------ |
| primary     | accent       |
| neutral     | neutral      |
| info        | information  |
| success     | success      |
| warning     | caution      |
| critical    | warning      |
| alarm       | danger       |
| N/A         | critical     |

Affected components are: ix-blind, ix-card, ix-action-card, ix-push-card, ix-chip, ix-event-list, ix-flip-tile, ix-kpi, ix-list, ix-message-bar, ix-message-modal, ix-system-banner, ix-toast

## Icon size

We changed the icon size from 24px to 20px. This change has been done globally via the Icon library.

Affected components are: ix-blind, ix-breadcrumb, ix-button, ix-card-list, ix-chip, ix-date-dropdown, ix-dropdown, ix-event-list, ix-group, ix-icon-button, ix-input (date time), ix-date-time-picker, ix-key-value, ix-message-bar, ix-popover, ix-split-button, ix-tree, ix-upload, ix-workflow

## App frame
### Changed
- Applied min-width to popover news container to align with code

## App menu
### Changed
- Changed app-menu size (with menu items, menu category and menu subitem): Collapsed to size-100, expanded to size-160
### Fixed
- Fixed dropdown for menu categories by replacing fixed widths with hug content and min-width to align with code


## Blind
### Added
- New variant: critical (purple)
### Changed
- Adaptions needed with icon size change: changed to auto layout, max height 48px, gap between chevron and title set to 8px again
### Breaking
- Reset icon buttons in header so that they receive updates
- Removed old slot
### Deprecated
- Blind has been deprecated. Access to old blind: click here (https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q?node-id=388-3986)

## Button
### Changed
- Added auto-layout
### Breaking
- Reset button group default content text+icon and icon only (otherwise icon color won’t update with property changes)

## Card
### Added
- New variants for all cards: critical (purple)
### Changed
- Removed color-0 (transparent colors)
- Removed component set background
### Breaking
- New boolean property introduced for all cards: outline
- Changed fill color for all outline=false to background-1
- Added color strip for all status variants for outline=false

## Category filter
### Changed
- Changed icon button for clear action from oval to rectangular
- Changed height of dropdown area layer to 0px to ensure correct position on all densities
- Applied min-height and center alignment to search icon

## Charts
### Changed
- Set density mode to default for all subcomponents

## Checkbox
### Added
- Added new slot property
### Breaking
- Removed separate focus variant and added it as a boolean property instead to improve performance and consistency

## Chip
### Changed
- Changed color for custom variant

## Date dropdown
### Changed
- Reset previous/next month icon buttons to receive the correct colors

## Dropdown
### Changed
- Adaptions: Icon padding right changed from 4px to 2px

## Flip tile
### Added
- Added new slot property
- Added new status variants

## Group
### Added
- Added new slot property
### Changed
- Replaced extra layer for status indicator with border
- Changed item height from hug-content to tokenized fixed-height

## Icon button
### Added
- Added new 20px variant (incl. specs)
### Changed
- Reset nested loading spinner instance to receive color changes from main component
- Changed Icon button with 32px button size to fixed dimensions for the loading state to not hug the 20px spinner

## 🔶 Inline notification
### Added
- Added new Inline notification 

## 🔶 Info page
### Added
- Component and specification added

## Input (date), date picker
### Changed
- Added new 20px variant
### Fixed
- Fixed width of preset items from fix-width to hug-content and applied min-width to align with code

## Input (date time), date time picker
### Changed
- As the date time input was released already in 5.x, removed 🔶 from name

## Input (number)
### Added
- Added 20px end & start slot buttons

## Input (text)
### Added
- Added 20px end & start slot buttons

## Link button
### Added
- Added new component with new properties: Position and Icon
### Changed
- Adapted hover & active state
### Deprecated
- Deprecated previous link button

## 🔶 List
### Added
- New component

## Loading modal
### Changed
- Aligned background color with SDL tokens

## Message bar
### Changed
- Changed left padding of icon container 

## Modal
### Changed
- Set slots for modal
### Deprecated
- Marked older version of modal as deprecated

## Pagination
### Changed
- Reset prev/next page buttons to receive correct colors from the actual components
- Changed width of nested input & select to size-110

## Progress indicator
### Changed
- Changed circular progress indicator from 24px to 20px to align with spinner component and new icon size
- Changed min-width of slots to size-80

## Radio and radio group
### Breaking
- Removed separate focus variant and added it as a boolean property instead to improve performance and consistency

## Search
### Changed
- Change default width to size-150

## Slider
### Fixed
- Fixed y-position of tooltip (moved 1px up)

## Spinner
### Changed
- Changed variant names to align with progress indicator (xxs, xs, sm, md, xxl)
- Changed sm-spinner from 24px to 20px to align with new icon sizes

## Split button
### Breaking
- Reset icon button and re-apply overrides

## 🔶 System banner
### Added
- Added new System banner

## Table
### Added
- Added component specification

## Tabs
### Changed
- Changed icon size to 20px in icon+text tabs and icon-only tabs

## Tile
### Added
- Added component specification
### Changed
- Set slots in tile
### Deprecated
- Marked older version of tile as deprecated

## Toast
### Changed
- Updated colors of background (all variants) and warning icon (warning variant)
- Reset nested button (overrides should be preserved)

## Toggle
### Changed
- Changed height & width of thumb to size-50
### Breaking
- Removed separate focus variant and added it as a boolean property instead to improve performance and consistency

## Toggle button
### Added
- Added new 20px variant
### Changed
- Changed Icon toggle button with 32px button size to fixed dimensions for the loading state to not hug the 20px spinner

## Tooltip
### Changed
- Changed background to 3
- Set slots in tooltip
### Deprecated
- Marked older version of tooltip as deprecated

## Upload
### Changed
- Updated Icon frame

## Workflow
### Added
- Added component specification
### Changed
- Changed colors for lines from border-x to text-x colors

## Scrollbar
### Changed
- Colors adapted to SDL sys tokens
- Contrast increased to meet WCAG contrast guidelines

## Common atoms
### Changed
- Renamed typography formats to have new variant names in brackets prepared and removed 🔶 where there is already a developed variant in place
