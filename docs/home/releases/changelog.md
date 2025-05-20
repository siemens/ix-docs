---
sidebar_title: Changelog
description: ''
title: Changelog
doc-type: 'banner'
---
## [@siemens/ix@3.0.0](https://github.com/siemens/ix/releases/tag/%40siemens/ix%403.0.0) (2025-04-24T08:04:31Z)
### Major Changes

-   [#1581](https://github.com/siemens/ix/pull/1581) [`7eb4d5147056e1e3252e387e5a718df7e593909e`](https://github.com/siemens/ix/commit/7eb4d5147056e1e3252e387e5a718df7e593909e) Thanks [@matthiashader](https://github.com/matthiashader)! - Component Updates and Enhancements

    New Variants for Card Components:

    -   **ix-action-card**, **ix-card**, and **ix-push-card**:
        -   The `insight` and `notification` variants have been **replaced by** `outline` and `filled`.

    Property Updates:

    -   **ix-chip**:
        -   The `color` property has been **replaced by** `chipColor`.
    -   **ix-event-list**:
        -   The `color` attribute has been **replaced by** `itemColor`.
    -   **ix-icon-button**:
        -   The `color` attribute has been **replaced by** `iconColor`.
        -   Size `32` has been removed.
    -   **ix-pill**:
        -   The `color` attribute has been **replaced by** `pillColor`.
    -   **ix-typography**:
        -   The `color` attribute has been **replaced by** `textColor`.
    -   **ix-select**:
        -   The `selectedIndices` attribute has been **replaced by** `value`.
        -   The `itemSelectionChange` event has been **replaced by** `valueChange`.
    -   **ix-select-item**:
        -   The type of the `value` property type has been updated to `string`.

    Date and Time Picker Enhancements:

    -   **ix-date-picker**:
        -   Removed attributes: `individual` and `eventDelimiter`.
        -   The `textSelectedDate` property has been **replaced by** `i18nDone`.
        -   The `done` event has been **replaced by** `dateSelect`.
    -   **ix-datetime-picker**:
        -   The `textSelectedDate` property has been **replaced by** `i18nDone`.
        -   The `done` event has been **replaced by** `dateSelect`.
        -   Removed the `eventDelimiter` property.
    -   **ix-time-picker**:
        -   Removed attributes: `individual` and `showTimeReference`.

    Removed Features:

    -   **ix-menu**:
        -   Removed the `maxVisibleMenuItems` attribute.
    -   **ix-menu-item**:
        -   The `tabIcon` attribute has been removed and replaced with `icon`.

    Other Changes:

    -   **ix-modal**:
        -   The `keyboard` attribute has been **replaced by** `closeOnEscape`.

-   [#1700](https://github.com/siemens/ix/pull/1700) [`2e2972260eafb1a87b84e5a705e3c932b15b8467`](https://github.com/siemens/ix/commit/2e2972260eafb1a87b84e5a705e3c932b15b8467) Thanks [@jul-lam](https://github.com/jul-lam)! - The **ix-tooltip** is working as expected when utilized for an **ix-dropdown-item** inside an **ix-dropdown**. The tooltip is now displayed outside the dropdown without breaking its layout.

    Fixes #1618

-   [#1238](https://github.com/siemens/ix/pull/1238) [`8803f3185b8a183926576d9f28894f9e1aa92ec3`](https://github.com/siemens/ix/commit/8803f3185b8a183926576d9f28894f9e1aa92ec3) Thanks [@danielleroux](https://github.com/danielleroux)! - feat: reduce bundle size in combination with icons

-   [#1742](https://github.com/siemens/ix/pull/1742) [`8b757805d65f62e9296e6d1abd67a8f0b30099f3`](https://github.com/siemens/ix/commit/8b757805d65f62e9296e6d1abd67a8f0b30099f3) Thanks [@matthiashader](https://github.com/matthiashader)! - Adapt the event signature of the `dateSelect` event of the `ix-date-picker` to reflect undefined values.

-   [#1578](https://github.com/siemens/ix/pull/1578) [`dd8b3eb28eb162f30c5fef27b369036b3bd6dd8b`](https://github.com/siemens/ix/commit/dd8b3eb28eb162f30c5fef27b369036b3bd6dd8b) Thanks [@danielleroux](https://github.com/danielleroux)! - Remove `devDependency` and `peerDependency` to bootstrap. For more information checkout BREAKING_CHANGES.md

-   [#1817](https://github.com/siemens/ix/pull/1817) [`e4a8d713614c2a5f4850d26a81655756ad48e76d`](https://github.com/siemens/ix/commit/e4a8d713614c2a5f4850d26a81655756ad48e76d) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - **ix-content**: add padding to right side of content area

-   [#1758](https://github.com/siemens/ix/pull/1758) [`f6fd42a74b42ff0f9f2ffd2b4c2a49fbb4402760`](https://github.com/siemens/ix/commit/f6fd42a74b42ff0f9f2ffd2b4c2a49fbb4402760) Thanks [@danielleroux](https://github.com/danielleroux)! - Prevent global styling for `input` and `textarea`. If you still want to use the legacy styling provide a `class="ix-form-control"` to `input` or `textarea`.
    Prevent global styling for `label`. If you still want to use the legacy styling provide a `class="ix-form-label"` to `label`.

    Fixes #1398

-   [#1831](https://github.com/siemens/ix/pull/1831) [`5cec43bb4c627642721d65bb60a3c00a94072c80`](https://github.com/siemens/ix/commit/5cec43bb4c627642721d65bb60a3c00a94072c80) Thanks [@danielleroux](https://github.com/danielleroux)! - **ix-tree**: Fix typo of `isExpanded` of `nodeToggled`-event.

-   [#1457](https://github.com/siemens/ix/pull/1457) [`3d62fffdc107bfc92b2ecad8437662dc7c03796f`](https://github.com/siemens/ix/commit/3d62fffdc107bfc92b2ecad8437662dc7c03796f) Thanks [@matthiashader](https://github.com/matthiashader)! - fix(core/pane-layout): remove absolute positioning

-   [#1642](https://github.com/siemens/ix/pull/1642) [`c9c5bf0451998ce94a57247b974e00176f294437`](https://github.com/siemens/ix/commit/c9c5bf0451998ce94a57247b974e00176f294437) Thanks [@danielleroux](https://github.com/danielleroux)! - The **VariantMapping** that mapped legacy font classes to current ones was removed.

-   [#1644](https://github.com/siemens/ix/pull/1644) [`23402fc1ab914b7b6ca73f938b12c66dd1fd5120`](https://github.com/siemens/ix/commit/23402fc1ab914b7b6ca73f938b12c66dd1fd5120) Thanks [@danielleroux](https://github.com/danielleroux)! - Remove legacy `classic` theme

-   [#1830](https://github.com/siemens/ix/pull/1830) [`00b3988f7955d97080653544daf94fbd215ca0fb`](https://github.com/siemens/ix/commit/00b3988f7955d97080653544daf94fbd215ca0fb) Thanks [@danielleroux](https://github.com/danielleroux)! - Replace button group class `.btn-group` with `.ix-button-group`

-   [#1850](https://github.com/siemens/ix/pull/1850) [`6c9a6c87cd31976a6341a3d5b038d2ff0b9a104d`](https://github.com/siemens/ix/commit/6c9a6c87cd31976a6341a3d5b038d2ff0b9a104d) Thanks [@danielleroux](https://github.com/danielleroux)! - Change minimum required `@siemens/ix-icons` to `^3.0.0` from `^2.0.0`

-   [#1394](https://github.com/siemens/ix/pull/1394) [`24f3ad61ab275bf7c9bbd7e9ee84f6b4f7d3b5ff`](https://github.com/siemens/ix/commit/24f3ad61ab275bf7c9bbd7e9ee84f6b4f7d3b5ff) Thanks [@AndreasBerliner](https://github.com/AndreasBerliner)! - refactor: replace internal comments with annotations

-   [#1758](https://github.com/siemens/ix/pull/1758) [`f6fd42a74b42ff0f9f2ffd2b4c2a49fbb4402760`](https://github.com/siemens/ix/commit/f6fd42a74b42ff0f9f2ffd2b4c2a49fbb4402760) Thanks [@danielleroux](https://github.com/danielleroux)! - Change default width from `input.ix-from-control` from `width: 100%` to `width: auto`

-   [#1742](https://github.com/siemens/ix/pull/1742) [`db785bb8a4cc0654104cb24d420b7a1e2d45fdba`](https://github.com/siemens/ix/commit/db785bb8a4cc0654104cb24d420b7a1e2d45fdba) Thanks [@matthiashader](https://github.com/matthiashader)! - `ix-date-dropdown`: Adapt the types `DateDropdownOption` and `DateRangeChangeEvent` to reflect the changed signature of the `ix-date-picker`'s `dateSelect` event.

-   [#1742](https://github.com/siemens/ix/pull/1742) [`db785bb8a4cc0654104cb24d420b7a1e2d45fdba`](https://github.com/siemens/ix/commit/db785bb8a4cc0654104cb24d420b7a1e2d45fdba) Thanks [@matthiashader](https://github.com/matthiashader)! - `ix-date-input`: Adapt the `value` property and the `valueChange` event to reflect the changed signature of the `date-picker`'s `dateSelect` event.

-   [#1613](https://github.com/siemens/ix/pull/1613) [`b3846c925ec4f03fd5d26b0b66042185b766f099`](https://github.com/siemens/ix/commit/b3846c925ec4f03fd5d26b0b66042185b766f099) Thanks [@jul-lam](https://github.com/jul-lam)! - **ix-application** now utilizes full viewport height and full viewport width

-   [#1273](https://github.com/siemens/ix/pull/1273) [`e8f825f7f494c8cc05dcce075afcff77839f8096`](https://github.com/siemens/ix/commit/e8f825f7f494c8cc05dcce075afcff77839f8096) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - fix(core/checkbox): allow multiline labels and align checkbox at the top

### Minor Changes

-   [#1737](https://github.com/siemens/ix/pull/1737) [`149dfbd6518e94da9e966d06ea2292c8e96772ce`](https://github.com/siemens/ix/commit/149dfbd6518e94da9e966d06ea2292c8e96772ce) Thanks [@matthiashader](https://github.com/matthiashader)! - `ix-message-bar`: Add new types `critical`, `success`, `primary`, and `neutral`, and deprecate type `danger`.
    Additionally, add new `NotificationColor` colors `color-critical`, `color-alarm`, `color-neutral`, and `color-primary`.

-   [#1697](https://github.com/siemens/ix/pull/1697) [`9e13a08340efc9cb7dd1f0ef7d56481c8b5dcbbe`](https://github.com/siemens/ix/commit/9e13a08340efc9cb7dd1f0ef7d56481c8b5dcbbe) Thanks [@AndreasBerliner](https://github.com/AndreasBerliner)! - `ix-chip` and `ix-pill`: Add property `tooltip-text` to display an `ix-tooltip` with customizable text.

-   [#1676](https://github.com/siemens/ix/pull/1676) [`4685dc2c2b0de0961b464d305f633e1115a5926a`](https://github.com/siemens/ix/commit/4685dc2c2b0de0961b464d305f633e1115a5926a) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - `ix-flip-tile`: Expsose `index` property to allow setting of displayed content and add `toggle` event.

-   [#1803](https://github.com/siemens/ix/pull/1803) [`278d51b7597afadd7fa765187e3cf9e8cd5385c6`](https://github.com/siemens/ix/commit/278d51b7597afadd7fa765187e3cf9e8cd5385c6) Thanks [@AndreasBerliner](https://github.com/AndreasBerliner)! - **ix-tree**: Fix a bug where an event was not emitted when clicking tree items.
    **ix-tree**: Introduce a new attribute to enable tree items to be toggled on click.

    Fixes #1633.

-   [#1836](https://github.com/siemens/ix/pull/1836) [`9c4127cb14bd075c7e134e7c10673b51df2b993b`](https://github.com/siemens/ix/commit/9c4127cb14bd075c7e134e7c10673b51df2b993b) Thanks [@danielleroux](https://github.com/danielleroux)! - Introduce `required` property for **ix-radio**. To make the **ix-radio-group** required at least one **ix-radio** must be `required`

-   [#1814](https://github.com/siemens/ix/pull/1814) [`bc33e84a3ad378470dbbdff8dd85877c21355bae`](https://github.com/siemens/ix/commit/bc33e84a3ad378470dbbdff8dd85877c21355bae) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Add additional color `alarm-contrast`, `critical-contrast`, `warning-contrast`, `success-contrast`, `info-contrast`, `neutral-contrast` and `primary-contrast` to **ix-typography**

-   [#1688](https://github.com/siemens/ix/pull/1688) [`5a12c6ac20e80a77f9fd3ad9aaffd66468f72b40`](https://github.com/siemens/ix/commit/5a12c6ac20e80a77f9fd3ad9aaffd66468f72b40) Thanks [@matthiashader](https://github.com/matthiashader)! - `ix-message-bar`: Event `closedChange` can now be prevented via `event.preventDefault()`.
    An additional event is added to get notified after the close animation of the `ix-message-bar` is finished.

-   [#1743](https://github.com/siemens/ix/pull/1743) [`4bdec91e4a837e487caa4a25407f24eb37616531`](https://github.com/siemens/ix/commit/4bdec91e4a837e487caa4a25407f24eb37616531) Thanks [@lzeiml](https://github.com/lzeiml)! - **ix-date-picker**: Week numbers are now hidden by default inside the ix-date-picker. They can be shown by setting showWeekNumbers to true.
    **ix-datetime-picker**: Week numbers are now hidden by default inside the ix-date-picker. They can be shown by setting showWeekNumbers to true.
    **ix-date-dropdown**: Week numbers are now hidden by default inside the ix-date-picker. They can be shown by setting showWeekNumbers to true.
    **ix-date-input**: Week numbers are now hidden by default inside the ix-date-picker. They can be shown by setting showWeekNumbers to true.

-   [#1676](https://github.com/siemens/ix/pull/1676) [`4685dc2c2b0de0961b464d305f633e1115a5926a`](https://github.com/siemens/ix/commit/4685dc2c2b0de0961b464d305f633e1115a5926a) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - `ix-menu`: Add `openSettings` and `openAbout` events. Event `expandChange` can now be prevented via `event.preventDefault()`.

-   [#1767](https://github.com/siemens/ix/pull/1767) [`30a98977feb83c7fb8ec8ca76a4b524042b2e5af`](https://github.com/siemens/ix/commit/30a98977feb83c7fb8ec8ca76a4b524042b2e5af) Thanks [@raunak-matai](https://github.com/raunak-matai)! - Handle `preventDefault()` on native `click` event for `ix-tab-item`.

    Fixes #1655.

-   [#1758](https://github.com/siemens/ix/pull/1758) [`d20b43d5f5bd5291b5125b120d2bb2d72286acfd`](https://github.com/siemens/ix/commit/d20b43d5f5bd5291b5125b120d2bb2d72286acfd) Thanks [@danielleroux](https://github.com/danielleroux)! - Add new global class `.ix-table` and `.ix-table-striped` to display a simple html table

-   [#1676](https://github.com/siemens/ix/pull/1676) [`4685dc2c2b0de0961b464d305f633e1115a5926a`](https://github.com/siemens/ix/commit/4685dc2c2b0de0961b464d305f633e1115a5926a) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - `ìx-drawer`: Events `open` and `drawerClose` can now be prevented via`event.preventDefault()`.

-   [#1676](https://github.com/siemens/ix/pull/1676) [`4685dc2c2b0de0961b464d305f633e1115a5926a`](https://github.com/siemens/ix/commit/4685dc2c2b0de0961b464d305f633e1115a5926a) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Add `tabChange` event to `ix-menu-settings` and `ix-menu-about`.

-   [#1760](https://github.com/siemens/ix/pull/1760) [`ac163467de8fc4d943f5366415492a9a02748999`](https://github.com/siemens/ix/commit/ac163467de8fc4d943f5366415492a9a02748999) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - **ix-datetime-picker**: Time selection headline can now be translated via property `i18nTime`.

### Patch Changes

-   [#1798](https://github.com/siemens/ix/pull/1798) [`40e8c510e15dba741601b3b19b6025c024e170ef`](https://github.com/siemens/ix/commit/40e8c510e15dba741601b3b19b6025c024e170ef) Thanks [@lzeiml](https://github.com/lzeiml)! - If an invalid date string is passed to the **ix-date-picker**, a console error will be thrown and the string will not be used.

-   [#1791](https://github.com/siemens/ix/pull/1791) [`838c19239ac8a85e2d644696cc1fd3a67f5509d5`](https://github.com/siemens/ix/commit/838c19239ac8a85e2d644696cc1fd3a67f5509d5) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - **ix-tree**: Init hyperlist after re-attaching tree to DOM.

    Fixes #1703.

-   [#1818](https://github.com/siemens/ix/pull/1818) [`c7456367e276c31a9eb6c7cea8270857b5810360`](https://github.com/siemens/ix/commit/c7456367e276c31a9eb6c7cea8270857b5810360) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Add drop shadow to **ix-datetime-picker**.

    Fixes #1299.

-   [#1706](https://github.com/siemens/ix/pull/1706) [`e8bd3b6301d7553e6a02b79e2925aa0595b674ca`](https://github.com/siemens/ix/commit/e8bd3b6301d7553e6a02b79e2925aa0595b674ca) Thanks [@lzeiml](https://github.com/lzeiml)! - **ix-menu-category**: Dynamically added items are now instantly visible. This is achieved by adjusting the max-height everytime an item gets added.

    Fixes #1606

-   [#1821](https://github.com/siemens/ix/pull/1821) [`d0c4c9df8b269fc0206ffdce1c6c7ec4013028b6`](https://github.com/siemens/ix/commit/d0c4c9df8b269fc0206ffdce1c6c7ec4013028b6) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Remove space before required asterisk in **ix-field-label**.

    Fixes #1634.

-   [#1683](https://github.com/siemens/ix/pull/1683) [`aa63b4fd901bc50e98877826699412affa127ae7`](https://github.com/siemens/ix/commit/aa63b4fd901bc50e98877826699412affa127ae7) Thanks [@ridvandmrc](https://github.com/ridvandmrc)! - `active=false` of the `ix-chip` will now show the chip as not interactable.

    Fixed #1656

-   [#1828](https://github.com/siemens/ix/pull/1828) [`009519637b668f74f8abae7bd682c67045d2876f`](https://github.com/siemens/ix/commit/009519637b668f74f8abae7bd682c67045d2876f) Thanks [@RamVinayMandal](https://github.com/RamVinayMandal)! - Handle `null` gracefully in **ix-textarea**.

    Fixes #1789.

-   [#1836](https://github.com/siemens/ix/pull/1836) [`9c4127cb14bd075c7e134e7c10673b51df2b993b`](https://github.com/siemens/ix/commit/9c4127cb14bd075c7e134e7c10673b51df2b993b) Thanks [@danielleroux](https://github.com/danielleroux)! - Prevent required **ix-number-input** from becoming invalid if value is zero

-   [#1724](https://github.com/siemens/ix/pull/1724) [`e8049c9966e7d5019c8ed0ae0e6cf2597f81dce5`](https://github.com/siemens/ix/commit/e8049c9966e7d5019c8ed0ae0e6cf2597f81dce5) Thanks [@danielleroux](https://github.com/danielleroux)! - Prevent **ix-application-header** from waiting until the corporate logo is defined.

-   [#1840](https://github.com/siemens/ix/pull/1840) [`74ddf7d9931d3e7d123d34f42718a47b98de42a9`](https://github.com/siemens/ix/commit/74ddf7d9931d3e7d123d34f42718a47b98de42a9) Thanks [@danielleroux](https://github.com/danielleroux)! - Align colors of **ix-toggle-button** (primary only) with the latest figma specs

-   [#1838](https://github.com/siemens/ix/pull/1838) [`c7ce5be2cf5707b980d484e60dcc7dfa1814656b`](https://github.com/siemens/ix/commit/c7ce5be2cf5707b980d484e60dcc7dfa1814656b) Thanks [@danielleroux](https://github.com/danielleroux)! - Add `z-index` to **ix-validation-tooltip** to prevent overlapping labels

-   [#1790](https://github.com/siemens/ix/pull/1790) [`ff816a840b609491e1a647d64f6bad489ad214f0`](https://github.com/siemens/ix/commit/ff816a840b609491e1a647d64f6bad489ad214f0) Thanks [@varun-srinivasa](https://github.com/varun-srinivasa)! - **ix-select**: Allow re-opening of dropdown after clearing the select in `editable` mode.

    Fixes #1770.

-   [#1681](https://github.com/siemens/ix/pull/1681) [`5b56d90813239cb34d28b4c20255392b9dd1d66f`](https://github.com/siemens/ix/commit/5b56d90813239cb34d28b4c20255392b9dd1d66f) Thanks [@jul-lam](https://github.com/jul-lam)! - Update `@floating-ui/dom` dependency to fix a wrong placement of the `ix-dropdown` if the dropdown is placed inside a `dialog`-element with animations in certain environments.

-   [#1708](https://github.com/siemens/ix/pull/1708) [`96c8f78e4d3d4d304b1d5a41504d5b24401ea461`](https://github.com/siemens/ix/commit/96c8f78e4d3d4d304b1d5a41504d5b24401ea461) Thanks [@lzeiml](https://github.com/lzeiml)! - **ix-radio**: Now doesn't change height/layout anymore when clicked. This is achieved by changing the way one of the component's divs is rendered.
    **ix-checkbox**: Now doesn't change height/layout anymore when clicked. This is achieved by changing the way one of the component's SVGs is rendered.

    Fixes #1702

-   [#1724](https://github.com/siemens/ix/pull/1724) [`8324312fa39abc53711850d4a94b765d994f15cd`](https://github.com/siemens/ix/commit/8324312fa39abc53711850d4a94b765d994f15cd) Thanks [@danielleroux](https://github.com/danielleroux)! - **ix-drawer**: Remove `transition` attribute from the styling to prevent conflicts between `animejs`

-   [#1644](https://github.com/siemens/ix/pull/1644) [`b66381a68f94df878605a290a52c84d31fa45bf1`](https://github.com/siemens/ix/commit/b66381a68f94df878605a290a52c84d31fa45bf1) Thanks [@danielleroux](https://github.com/danielleroux)! - Relpace throw error of **ix-select-item** with a warning if no value is provided

-   [#1797](https://github.com/siemens/ix/pull/1797) [`df00884a5b65c7047ddc3506b8eaac66819c4ceb`](https://github.com/siemens/ix/commit/df00884a5b65c7047ddc3506b8eaac66819c4ceb) Thanks [@1307-Dev](https://github.com/1307-Dev)! - Fix button inside **ix-upload** component to be selectable via keyboard navigation.

-   [#1836](https://github.com/siemens/ix/pull/1836) [`9c4127cb14bd075c7e134e7c10673b51df2b993b`](https://github.com/siemens/ix/commit/9c4127cb14bd075c7e134e7c10673b51df2b993b) Thanks [@danielleroux](https://github.com/danielleroux)! - min-length of **ix-input** is now working as expected

-   [#1699](https://github.com/siemens/ix/pull/1699) [`093c78352916a193e7f2cbfab692362c4ba0de9a`](https://github.com/siemens/ix/commit/093c78352916a193e7f2cbfab692362c4ba0de9a) Thanks [@danielleroux](https://github.com/danielleroux)! - Update classic theme colors to match latest figma specs

-   [#1836](https://github.com/siemens/ix/pull/1836) [`9c4127cb14bd075c7e134e7c10673b51df2b993b`](https://github.com/siemens/ix/commit/9c4127cb14bd075c7e134e7c10673b51df2b993b) Thanks [@danielleroux](https://github.com/danielleroux)! - Show `required` validation error only after first interaction (pointer/focus) with **ix-checkbox**, **ix-radio** and **ix-toggle**

-   [#1561](https://github.com/siemens/ix/pull/1561) [`699958d387c1044b50def5071369f27de49f56ef`](https://github.com/siemens/ix/commit/699958d387c1044b50def5071369f27de49f56ef) Thanks [@ridvandmrc](https://github.com/ridvandmrc)! - Update slot references for **ix-input-group**.

-   [#1687](https://github.com/siemens/ix/pull/1687) [`2d4e3b8cdb756dff44627941adfea6a0230ccf26`](https://github.com/siemens/ix/commit/2d4e3b8cdb756dff44627941adfea6a0230ccf26) Thanks [@matthiashader](https://github.com/matthiashader)! - Fix issue of `ix-button` which prevent a form get submitted twice in row.

-   [#1642](https://github.com/siemens/ix/pull/1642) [`b5e2da18f871d6189c064a72bd9b29a82d0685eb`](https://github.com/siemens/ix/commit/b5e2da18f871d6189c064a72bd9b29a82d0685eb) Thanks [@danielleroux](https://github.com/danielleroux)! - fix(core): semver from stencil/core to minor

-   [#1724](https://github.com/siemens/ix/pull/1724) [`c448755f97b66af96cce435025dc1f37892e9eb8`](https://github.com/siemens/ix/commit/c448755f97b66af96cce435025dc1f37892e9eb8) Thanks [@danielleroux](https://github.com/danielleroux)! - Cleanup validation references for all validation components (e.g. `ix-date-input`, `ix-input`).

-   [#1691](https://github.com/siemens/ix/pull/1691) [`8726afc094adf2ddb4f8e927c6a42aa8dc0ed589`](https://github.com/siemens/ix/commit/8726afc094adf2ddb4f8e927c6a42aa8dc0ed589) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - `ix-workflow-step`: change icon for 'done' state to be different from the one shown for 'success' state to pervent confusion.

-   [#1682](https://github.com/siemens/ix/pull/1682) [`f41b5d60299cb874cec9730394038dd4c2df8a60`](https://github.com/siemens/ix/commit/f41b5d60299cb874cec9730394038dd4c2df8a60) Thanks [@danielleroux](https://github.com/danielleroux)! - Prevent input elements like (`ix-input`, `ix-number-input`, `ix-date-input`, `ix-select`, `ix-textarea`) to show `required` validation error without any user interaction.

    If the class `ix-invalid` is applied programmatically an error message is still shown even without a user interaction.

    Fixes #1638, #1680

-   [#1831](https://github.com/siemens/ix/pull/1831) [`5cec43bb4c627642721d65bb60a3c00a94072c80`](https://github.com/siemens/ix/commit/5cec43bb4c627642721d65bb60a3c00a94072c80) Thanks [@danielleroux](https://github.com/danielleroux)! - Avoid leaking event listener of **ix-tree**

-   [#1768](https://github.com/siemens/ix/pull/1768) [`8002d9a68ef8a5279d43726ecad28e85ad0ac53a`](https://github.com/siemens/ix/commit/8002d9a68ef8a5279d43726ecad28e85ad0ac53a) Thanks [@RamVinayMandal](https://github.com/RamVinayMandal)! - **ix-event-list**: Set custom height for dynamically created `ix-event-list-item`s.

    Fixes #1684.

-   [#1561](https://github.com/siemens/ix/pull/1561) [`699958d387c1044b50def5071369f27de49f56ef`](https://github.com/siemens/ix/commit/699958d387c1044b50def5071369f27de49f56ef) Thanks [@ridvandmrc](https://github.com/ridvandmrc)! - **ix-drawer**: Allow nested content to calculate it's layout properly by setting drawer width explicitly.

-   [#1769](https://github.com/siemens/ix/pull/1769) [`dacbced83d226380c256d868620ee640996cf229`](https://github.com/siemens/ix/commit/dacbced83d226380c256d868620ee640996cf229) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Refactor return type of `focusInput` method of `IxInputFieldComponent` interface to `Promise<void>`.

-   [#1724](https://github.com/siemens/ix/pull/1724) [`df65c4d5436bf97f08dc2ec2899e2556c4ad7eaa`](https://github.com/siemens/ix/commit/df65c4d5436bf97f08dc2ec2899e2556c4ad7eaa) Thanks [@danielleroux](https://github.com/danielleroux)! - Update @stencil/core dependency to 4.27.1

## [@siemens/ix-vue@3.0.0](https://github.com/siemens/ix/releases/tag/%40siemens/ix-vue%403.0.0) (2025-04-24T08:04:37Z)
### Major Changes

-   [#1581](https://github.com/siemens/ix/pull/1581) [`7eb4d5147056e1e3252e387e5a718df7e593909e`](https://github.com/siemens/ix/commit/7eb4d5147056e1e3252e387e5a718df7e593909e) Thanks [@matthiashader](https://github.com/matthiashader)! - Component Updates and Enhancements

    New Variants for Card Components:

    -   **ix-action-card**, **ix-card**, and **ix-push-card**:
        -   The `insight` and `notification` variants have been **replaced by** `outline` and `filled`.

    Property Updates:

    -   **ix-chip**:
        -   The `color` property has been **replaced by** `chipColor`.
    -   **ix-event-list**:
        -   The `color` attribute has been **replaced by** `itemColor`.
    -   **ix-icon-button**:
        -   The `color` attribute has been **replaced by** `iconColor`.
        -   Size `32` has been removed.
    -   **ix-pill**:
        -   The `color` attribute has been **replaced by** `pillColor`.
    -   **ix-typography**:
        -   The `color` attribute has been **replaced by** `textColor`.
    -   **ix-select**:
        -   The `selectedIndices` attribute has been **replaced by** `value`.
        -   The `itemSelectionChange` event has been **replaced by** `valueChange`.
    -   **ix-select-item**:
        -   The type of the `value` property type has been updated to `string`.

    Date and Time Picker Enhancements:

    -   **ix-date-picker**:
        -   Removed attributes: `individual` and `eventDelimiter`.
        -   The `textSelectedDate` property has been **replaced by** `i18nDone`.
        -   The `done` event has been **replaced by** `dateSelect`.
    -   **ix-datetime-picker**:
        -   The `textSelectedDate` property has been **replaced by** `i18nDone`.
        -   The `done` event has been **replaced by** `dateSelect`.
        -   Removed the `eventDelimiter` property.
    -   **ix-time-picker**:
        -   Removed attributes: `individual` and `showTimeReference`.

    Removed Features:

    -   **ix-menu**:
        -   Removed the `maxVisibleMenuItems` attribute.
    -   **ix-menu-item**:
        -   The `tabIcon` attribute has been removed and replaced with `icon`.

    Other Changes:

    -   **ix-modal**:
        -   The `keyboard` attribute has been **replaced by** `closeOnEscape`.

-   [#1238](https://github.com/siemens/ix/pull/1238) [`8803f3185b8a183926576d9f28894f9e1aa92ec3`](https://github.com/siemens/ix/commit/8803f3185b8a183926576d9f28894f9e1aa92ec3) Thanks [@danielleroux](https://github.com/danielleroux)! - feat: reduce bundle size in combination with icons

-   [#1394](https://github.com/siemens/ix/pull/1394) [`24f3ad61ab275bf7c9bbd7e9ee84f6b4f7d3b5ff`](https://github.com/siemens/ix/commit/24f3ad61ab275bf7c9bbd7e9ee84f6b4f7d3b5ff) Thanks [@AndreasBerliner](https://github.com/AndreasBerliner)! - refactor: replace internal comments with annotations

-   [#1328](https://github.com/siemens/ix/pull/1328) [`c17750dfad2fe69854f52fe56a447302c9ff4cc8`](https://github.com/siemens/ix/commit/c17750dfad2fe69854f52fe56a447302c9ff4cc8) Thanks [@danielleroux](https://github.com/danielleroux)! - feat(vue): remove commonjs

-   [#1644](https://github.com/siemens/ix/pull/1644) [`221e9e7d1490524dff5b7358557ee29c49119952`](https://github.com/siemens/ix/commit/221e9e7d1490524dff5b7358557ee29c49119952) Thanks [@danielleroux](https://github.com/danielleroux)! - Convert package to type="module"

### Minor Changes

-   [#1697](https://github.com/siemens/ix/pull/1697) [`9e13a08340efc9cb7dd1f0ef7d56481c8b5dcbbe`](https://github.com/siemens/ix/commit/9e13a08340efc9cb7dd1f0ef7d56481c8b5dcbbe) Thanks [@AndreasBerliner](https://github.com/AndreasBerliner)! - `ix-chip` and `ix-pill`: Add property `tooltip-text` to display an `ix-tooltip` with customizable text.

-   [#1676](https://github.com/siemens/ix/pull/1676) [`4685dc2c2b0de0961b464d305f633e1115a5926a`](https://github.com/siemens/ix/commit/4685dc2c2b0de0961b464d305f633e1115a5926a) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - `ix-flip-tile`: Expsose `index` property to allow setting of displayed content and add `toggle` event.

-   [#1803](https://github.com/siemens/ix/pull/1803) [`278d51b7597afadd7fa765187e3cf9e8cd5385c6`](https://github.com/siemens/ix/commit/278d51b7597afadd7fa765187e3cf9e8cd5385c6) Thanks [@AndreasBerliner](https://github.com/AndreasBerliner)! - **ix-tree**: Fix a bug where an event was not emitted when clicking tree items.
    **ix-tree**: Introduce a new attribute to enable tree items to be toggled on click.

    Fixes #1633.

-   [#1688](https://github.com/siemens/ix/pull/1688) [`5a12c6ac20e80a77f9fd3ad9aaffd66468f72b40`](https://github.com/siemens/ix/commit/5a12c6ac20e80a77f9fd3ad9aaffd66468f72b40) Thanks [@matthiashader](https://github.com/matthiashader)! - `ix-message-bar`: Event `closedChange` can now be prevented via `event.preventDefault()`.
    An additional event is added to get notified after the close animation of the `ix-message-bar` is finished.

-   [#1676](https://github.com/siemens/ix/pull/1676) [`4685dc2c2b0de0961b464d305f633e1115a5926a`](https://github.com/siemens/ix/commit/4685dc2c2b0de0961b464d305f633e1115a5926a) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - `ix-menu`: Add `openSettings` and `openAbout` events. Event `expandChange` can now be prevented via `event.preventDefault()`.

-   [#1676](https://github.com/siemens/ix/pull/1676) [`4685dc2c2b0de0961b464d305f633e1115a5926a`](https://github.com/siemens/ix/commit/4685dc2c2b0de0961b464d305f633e1115a5926a) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Add `tabChange` event to `ix-menu-settings` and `ix-menu-about`.

-   [#1760](https://github.com/siemens/ix/pull/1760) [`ac163467de8fc4d943f5366415492a9a02748999`](https://github.com/siemens/ix/commit/ac163467de8fc4d943f5366415492a9a02748999) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - **ix-datetime-picker**: Time selection headline can now be translated via property `i18nTime`.

### Patch Changes

-   Updated dependencies \[[`40e8c510e15dba741601b3b19b6025c024e170ef`](https://github.com/siemens/ix/commit/40e8c510e15dba741601b3b19b6025c024e170ef), [`838c19239ac8a85e2d644696cc1fd3a67f5509d5`](https://github.com/siemens/ix/commit/838c19239ac8a85e2d644696cc1fd3a67f5509d5), [`7eb4d5147056e1e3252e387e5a718df7e593909e`](https://github.com/siemens/ix/commit/7eb4d5147056e1e3252e387e5a718df7e593909e), [`c7456367e276c31a9eb6c7cea8270857b5810360`](https://github.com/siemens/ix/commit/c7456367e276c31a9eb6c7cea8270857b5810360), [`e8bd3b6301d7553e6a02b79e2925aa0595b674ca`](https://github.com/siemens/ix/commit/e8bd3b6301d7553e6a02b79e2925aa0595b674ca), [`d0c4c9df8b269fc0206ffdce1c6c7ec4013028b6`](https://github.com/siemens/ix/commit/d0c4c9df8b269fc0206ffdce1c6c7ec4013028b6), [`aa63b4fd901bc50e98877826699412affa127ae7`](https://github.com/siemens/ix/commit/aa63b4fd901bc50e98877826699412affa127ae7), [`009519637b668f74f8abae7bd682c67045d2876f`](https://github.com/siemens/ix/commit/009519637b668f74f8abae7bd682c67045d2876f), [`9c4127cb14bd075c7e134e7c10673b51df2b993b`](https://github.com/siemens/ix/commit/9c4127cb14bd075c7e134e7c10673b51df2b993b), [`149dfbd6518e94da9e966d06ea2292c8e96772ce`](https://github.com/siemens/ix/commit/149dfbd6518e94da9e966d06ea2292c8e96772ce), [`2e2972260eafb1a87b84e5a705e3c932b15b8467`](https://github.com/siemens/ix/commit/2e2972260eafb1a87b84e5a705e3c932b15b8467), [`9e13a08340efc9cb7dd1f0ef7d56481c8b5dcbbe`](https://github.com/siemens/ix/commit/9e13a08340efc9cb7dd1f0ef7d56481c8b5dcbbe), [`e8049c9966e7d5019c8ed0ae0e6cf2597f81dce5`](https://github.com/siemens/ix/commit/e8049c9966e7d5019c8ed0ae0e6cf2597f81dce5), [`4685dc2c2b0de0961b464d305f633e1115a5926a`](https://github.com/siemens/ix/commit/4685dc2c2b0de0961b464d305f633e1115a5926a), [`278d51b7597afadd7fa765187e3cf9e8cd5385c6`](https://github.com/siemens/ix/commit/278d51b7597afadd7fa765187e3cf9e8cd5385c6), [`8803f3185b8a183926576d9f28894f9e1aa92ec3`](https://github.com/siemens/ix/commit/8803f3185b8a183926576d9f28894f9e1aa92ec3), [`74ddf7d9931d3e7d123d34f42718a47b98de42a9`](https://github.com/siemens/ix/commit/74ddf7d9931d3e7d123d34f42718a47b98de42a9), [`c7ce5be2cf5707b980d484e60dcc7dfa1814656b`](https://github.com/siemens/ix/commit/c7ce5be2cf5707b980d484e60dcc7dfa1814656b), [`ff816a840b609491e1a647d64f6bad489ad214f0`](https://github.com/siemens/ix/commit/ff816a840b609491e1a647d64f6bad489ad214f0), [`5b56d90813239cb34d28b4c20255392b9dd1d66f`](https://github.com/siemens/ix/commit/5b56d90813239cb34d28b4c20255392b9dd1d66f), [`8b757805d65f62e9296e6d1abd67a8f0b30099f3`](https://github.com/siemens/ix/commit/8b757805d65f62e9296e6d1abd67a8f0b30099f3), [`dd8b3eb28eb162f30c5fef27b369036b3bd6dd8b`](https://github.com/siemens/ix/commit/dd8b3eb28eb162f30c5fef27b369036b3bd6dd8b), [`96c8f78e4d3d4d304b1d5a41504d5b24401ea461`](https://github.com/siemens/ix/commit/96c8f78e4d3d4d304b1d5a41504d5b24401ea461), [`e4a8d713614c2a5f4850d26a81655756ad48e76d`](https://github.com/siemens/ix/commit/e4a8d713614c2a5f4850d26a81655756ad48e76d), [`8324312fa39abc53711850d4a94b765d994f15cd`](https://github.com/siemens/ix/commit/8324312fa39abc53711850d4a94b765d994f15cd), [`b66381a68f94df878605a290a52c84d31fa45bf1`](https://github.com/siemens/ix/commit/b66381a68f94df878605a290a52c84d31fa45bf1), [`f6fd42a74b42ff0f9f2ffd2b4c2a49fbb4402760`](https://github.com/siemens/ix/commit/f6fd42a74b42ff0f9f2ffd2b4c2a49fbb4402760), [`5cec43bb4c627642721d65bb60a3c00a94072c80`](https://github.com/siemens/ix/commit/5cec43bb4c627642721d65bb60a3c00a94072c80), [`3d62fffdc107bfc92b2ecad8437662dc7c03796f`](https://github.com/siemens/ix/commit/3d62fffdc107bfc92b2ecad8437662dc7c03796f), [`c9c5bf0451998ce94a57247b974e00176f294437`](https://github.com/siemens/ix/commit/c9c5bf0451998ce94a57247b974e00176f294437), [`23402fc1ab914b7b6ca73f938b12c66dd1fd5120`](https://github.com/siemens/ix/commit/23402fc1ab914b7b6ca73f938b12c66dd1fd5120), [`df00884a5b65c7047ddc3506b8eaac66819c4ceb`](https://github.com/siemens/ix/commit/df00884a5b65c7047ddc3506b8eaac66819c4ceb), [`00b3988f7955d97080653544daf94fbd215ca0fb`](https://github.com/siemens/ix/commit/00b3988f7955d97080653544daf94fbd215ca0fb), [`9c4127cb14bd075c7e134e7c10673b51df2b993b`](https://github.com/siemens/ix/commit/9c4127cb14bd075c7e134e7c10673b51df2b993b), [`9c4127cb14bd075c7e134e7c10673b51df2b993b`](https://github.com/siemens/ix/commit/9c4127cb14bd075c7e134e7c10673b51df2b993b), [`093c78352916a193e7f2cbfab692362c4ba0de9a`](https://github.com/siemens/ix/commit/093c78352916a193e7f2cbfab692362c4ba0de9a), [`bc33e84a3ad378470dbbdff8dd85877c21355bae`](https://github.com/siemens/ix/commit/bc33e84a3ad378470dbbdff8dd85877c21355bae), [`6c9a6c87cd31976a6341a3d5b038d2ff0b9a104d`](https://github.com/siemens/ix/commit/6c9a6c87cd31976a6341a3d5b038d2ff0b9a104d), [`9c4127cb14bd075c7e134e7c10673b51df2b993b`](https://github.com/siemens/ix/commit/9c4127cb14bd075c7e134e7c10673b51df2b993b), [`5a12c6ac20e80a77f9fd3ad9aaffd66468f72b40`](https://github.com/siemens/ix/commit/5a12c6ac20e80a77f9fd3ad9aaffd66468f72b40), [`699958d387c1044b50def5071369f27de49f56ef`](https://github.com/siemens/ix/commit/699958d387c1044b50def5071369f27de49f56ef), [`24f3ad61ab275bf7c9bbd7e9ee84f6b4f7d3b5ff`](https://github.com/siemens/ix/commit/24f3ad61ab275bf7c9bbd7e9ee84f6b4f7d3b5ff), [`f6fd42a74b42ff0f9f2ffd2b4c2a49fbb4402760`](https://github.com/siemens/ix/commit/f6fd42a74b42ff0f9f2ffd2b4c2a49fbb4402760), [`2d4e3b8cdb756dff44627941adfea6a0230ccf26`](https://github.com/siemens/ix/commit/2d4e3b8cdb756dff44627941adfea6a0230ccf26), [`4bdec91e4a837e487caa4a25407f24eb37616531`](https://github.com/siemens/ix/commit/4bdec91e4a837e487caa4a25407f24eb37616531), [`db785bb8a4cc0654104cb24d420b7a1e2d45fdba`](https://github.com/siemens/ix/commit/db785bb8a4cc0654104cb24d420b7a1e2d45fdba), [`b5e2da18f871d6189c064a72bd9b29a82d0685eb`](https://github.com/siemens/ix/commit/b5e2da18f871d6189c064a72bd9b29a82d0685eb), [`db785bb8a4cc0654104cb24d420b7a1e2d45fdba`](https://github.com/siemens/ix/commit/db785bb8a4cc0654104cb24d420b7a1e2d45fdba), [`4685dc2c2b0de0961b464d305f633e1115a5926a`](https://github.com/siemens/ix/commit/4685dc2c2b0de0961b464d305f633e1115a5926a), [`c448755f97b66af96cce435025dc1f37892e9eb8`](https://github.com/siemens/ix/commit/c448755f97b66af96cce435025dc1f37892e9eb8), [`b3846c925ec4f03fd5d26b0b66042185b766f099`](https://github.com/siemens/ix/commit/b3846c925ec4f03fd5d26b0b66042185b766f099), [`8726afc094adf2ddb4f8e927c6a42aa8dc0ed589`](https://github.com/siemens/ix/commit/8726afc094adf2ddb4f8e927c6a42aa8dc0ed589), [`30a98977feb83c7fb8ec8ca76a4b524042b2e5af`](https://github.com/siemens/ix/commit/30a98977feb83c7fb8ec8ca76a4b524042b2e5af), [`f41b5d60299cb874cec9730394038dd4c2df8a60`](https://github.com/siemens/ix/commit/f41b5d60299cb874cec9730394038dd4c2df8a60), [`5cec43bb4c627642721d65bb60a3c00a94072c80`](https://github.com/siemens/ix/commit/5cec43bb4c627642721d65bb60a3c00a94072c80), [`8002d9a68ef8a5279d43726ecad28e85ad0ac53a`](https://github.com/siemens/ix/commit/8002d9a68ef8a5279d43726ecad28e85ad0ac53a), [`699958d387c1044b50def5071369f27de49f56ef`](https://github.com/siemens/ix/commit/699958d387c1044b50def5071369f27de49f56ef), [`d20b43d5f5bd5291b5125b120d2bb2d72286acfd`](https://github.com/siemens/ix/commit/d20b43d5f5bd5291b5125b120d2bb2d72286acfd), [`4685dc2c2b0de0961b464d305f633e1115a5926a`](https://github.com/siemens/ix/commit/4685dc2c2b0de0961b464d305f633e1115a5926a), [`4685dc2c2b0de0961b464d305f633e1115a5926a`](https://github.com/siemens/ix/commit/4685dc2c2b0de0961b464d305f633e1115a5926a), [`e8f825f7f494c8cc05dcce075afcff77839f8096`](https://github.com/siemens/ix/commit/e8f825f7f494c8cc05dcce075afcff77839f8096), [`ac163467de8fc4d943f5366415492a9a02748999`](https://github.com/siemens/ix/commit/ac163467de8fc4d943f5366415492a9a02748999), [`dacbced83d226380c256d868620ee640996cf229`](https://github.com/siemens/ix/commit/dacbced83d226380c256d868620ee640996cf229), [`df65c4d5436bf97f08dc2ec2899e2556c4ad7eaa`](https://github.com/siemens/ix/commit/df65c4d5436bf97f08dc2ec2899e2556c4ad7eaa)]:
    -   @siemens/ix@3.0.0

## [@siemens/ix-react@3.0.0](https://github.com/siemens/ix/releases/tag/%40siemens/ix-react%403.0.0) (2025-04-24T08:04:34Z)
### Major Changes

-   [#1581](https://github.com/siemens/ix/pull/1581) [`7eb4d5147056e1e3252e387e5a718df7e593909e`](https://github.com/siemens/ix/commit/7eb4d5147056e1e3252e387e5a718df7e593909e) Thanks [@matthiashader](https://github.com/matthiashader)! - Component Updates and Enhancements

    New Variants for Card Components:

    -   **ix-action-card**, **ix-card**, and **ix-push-card**:
        -   The `insight` and `notification` variants have been **replaced by** `outline` and `filled`.

    Property Updates:

    -   **ix-chip**:
        -   The `color` property has been **replaced by** `chipColor`.
    -   **ix-event-list**:
        -   The `color` attribute has been **replaced by** `itemColor`.
    -   **ix-icon-button**:
        -   The `color` attribute has been **replaced by** `iconColor`.
        -   Size `32` has been removed.
    -   **ix-pill**:
        -   The `color` attribute has been **replaced by** `pillColor`.
    -   **ix-typography**:
        -   The `color` attribute has been **replaced by** `textColor`.
    -   **ix-select**:
        -   The `selectedIndices` attribute has been **replaced by** `value`.
        -   The `itemSelectionChange` event has been **replaced by** `valueChange`.
    -   **ix-select-item**:
        -   The type of the `value` property type has been updated to `string`.

    Date and Time Picker Enhancements:

    -   **ix-date-picker**:
        -   Removed attributes: `individual` and `eventDelimiter`.
        -   The `textSelectedDate` property has been **replaced by** `i18nDone`.
        -   The `done` event has been **replaced by** `dateSelect`.
    -   **ix-datetime-picker**:
        -   The `textSelectedDate` property has been **replaced by** `i18nDone`.
        -   The `done` event has been **replaced by** `dateSelect`.
        -   Removed the `eventDelimiter` property.
    -   **ix-time-picker**:
        -   Removed attributes: `individual` and `showTimeReference`.

    Removed Features:

    -   **ix-menu**:
        -   Removed the `maxVisibleMenuItems` attribute.
    -   **ix-menu-item**:
        -   The `tabIcon` attribute has been removed and replaced with `icon`.

    Other Changes:

    -   **ix-modal**:
        -   The `keyboard` attribute has been **replaced by** `closeOnEscape`.

-   [#1644](https://github.com/siemens/ix/pull/1644) [`2660cc3877629aaf218bd427799013e87db572c7`](https://github.com/siemens/ix/commit/2660cc3877629aaf218bd427799013e87db572c7) Thanks [@danielleroux](https://github.com/danielleroux)! - - Add `nextjs@15` support (**experimental**).

    -   Introduced support for `server-side` components.

-   [#1326](https://github.com/siemens/ix/pull/1326) [`23307a0bed36c61da3ca3b77bad99d71f8b18f3c`](https://github.com/siemens/ix/commit/23307a0bed36c61da3ca3b77bad99d71f8b18f3c) Thanks [@danielleroux](https://github.com/danielleroux)! - feat(react): remove commonjs support

-   [#1644](https://github.com/siemens/ix/pull/1644) [`221e9e7d1490524dff5b7358557ee29c49119952`](https://github.com/siemens/ix/commit/221e9e7d1490524dff5b7358557ee29c49119952) Thanks [@danielleroux](https://github.com/danielleroux)! - Convert package to type="module"

-   [#1238](https://github.com/siemens/ix/pull/1238) [`8803f3185b8a183926576d9f28894f9e1aa92ec3`](https://github.com/siemens/ix/commit/8803f3185b8a183926576d9f28894f9e1aa92ec3) Thanks [@danielleroux](https://github.com/danielleroux)! - feat: reduce bundle size in combination with icons

-   [#1644](https://github.com/siemens/ix/pull/1644) [`2660cc3877629aaf218bd427799013e87db572c7`](https://github.com/siemens/ix/commit/2660cc3877629aaf218bd427799013e87db572c7) Thanks [@danielleroux](https://github.com/danielleroux)! - Add `react@19` support

-   [#1394](https://github.com/siemens/ix/pull/1394) [`24f3ad61ab275bf7c9bbd7e9ee84f6b4f7d3b5ff`](https://github.com/siemens/ix/commit/24f3ad61ab275bf7c9bbd7e9ee84f6b4f7d3b5ff) Thanks [@AndreasBerliner](https://github.com/AndreasBerliner)! - refactor: replace internal comments with annotations

### Patch Changes

-   Updated dependencies \[[`40e8c510e15dba741601b3b19b6025c024e170ef`](https://github.com/siemens/ix/commit/40e8c510e15dba741601b3b19b6025c024e170ef), [`838c19239ac8a85e2d644696cc1fd3a67f5509d5`](https://github.com/siemens/ix/commit/838c19239ac8a85e2d644696cc1fd3a67f5509d5), [`7eb4d5147056e1e3252e387e5a718df7e593909e`](https://github.com/siemens/ix/commit/7eb4d5147056e1e3252e387e5a718df7e593909e), [`c7456367e276c31a9eb6c7cea8270857b5810360`](https://github.com/siemens/ix/commit/c7456367e276c31a9eb6c7cea8270857b5810360), [`e8bd3b6301d7553e6a02b79e2925aa0595b674ca`](https://github.com/siemens/ix/commit/e8bd3b6301d7553e6a02b79e2925aa0595b674ca), [`d0c4c9df8b269fc0206ffdce1c6c7ec4013028b6`](https://github.com/siemens/ix/commit/d0c4c9df8b269fc0206ffdce1c6c7ec4013028b6), [`aa63b4fd901bc50e98877826699412affa127ae7`](https://github.com/siemens/ix/commit/aa63b4fd901bc50e98877826699412affa127ae7), [`009519637b668f74f8abae7bd682c67045d2876f`](https://github.com/siemens/ix/commit/009519637b668f74f8abae7bd682c67045d2876f), [`9c4127cb14bd075c7e134e7c10673b51df2b993b`](https://github.com/siemens/ix/commit/9c4127cb14bd075c7e134e7c10673b51df2b993b), [`149dfbd6518e94da9e966d06ea2292c8e96772ce`](https://github.com/siemens/ix/commit/149dfbd6518e94da9e966d06ea2292c8e96772ce), [`2e2972260eafb1a87b84e5a705e3c932b15b8467`](https://github.com/siemens/ix/commit/2e2972260eafb1a87b84e5a705e3c932b15b8467), [`9e13a08340efc9cb7dd1f0ef7d56481c8b5dcbbe`](https://github.com/siemens/ix/commit/9e13a08340efc9cb7dd1f0ef7d56481c8b5dcbbe), [`e8049c9966e7d5019c8ed0ae0e6cf2597f81dce5`](https://github.com/siemens/ix/commit/e8049c9966e7d5019c8ed0ae0e6cf2597f81dce5), [`4685dc2c2b0de0961b464d305f633e1115a5926a`](https://github.com/siemens/ix/commit/4685dc2c2b0de0961b464d305f633e1115a5926a), [`278d51b7597afadd7fa765187e3cf9e8cd5385c6`](https://github.com/siemens/ix/commit/278d51b7597afadd7fa765187e3cf9e8cd5385c6), [`8803f3185b8a183926576d9f28894f9e1aa92ec3`](https://github.com/siemens/ix/commit/8803f3185b8a183926576d9f28894f9e1aa92ec3), [`74ddf7d9931d3e7d123d34f42718a47b98de42a9`](https://github.com/siemens/ix/commit/74ddf7d9931d3e7d123d34f42718a47b98de42a9), [`c7ce5be2cf5707b980d484e60dcc7dfa1814656b`](https://github.com/siemens/ix/commit/c7ce5be2cf5707b980d484e60dcc7dfa1814656b), [`ff816a840b609491e1a647d64f6bad489ad214f0`](https://github.com/siemens/ix/commit/ff816a840b609491e1a647d64f6bad489ad214f0), [`5b56d90813239cb34d28b4c20255392b9dd1d66f`](https://github.com/siemens/ix/commit/5b56d90813239cb34d28b4c20255392b9dd1d66f), [`8b757805d65f62e9296e6d1abd67a8f0b30099f3`](https://github.com/siemens/ix/commit/8b757805d65f62e9296e6d1abd67a8f0b30099f3), [`dd8b3eb28eb162f30c5fef27b369036b3bd6dd8b`](https://github.com/siemens/ix/commit/dd8b3eb28eb162f30c5fef27b369036b3bd6dd8b), [`96c8f78e4d3d4d304b1d5a41504d5b24401ea461`](https://github.com/siemens/ix/commit/96c8f78e4d3d4d304b1d5a41504d5b24401ea461), [`e4a8d713614c2a5f4850d26a81655756ad48e76d`](https://github.com/siemens/ix/commit/e4a8d713614c2a5f4850d26a81655756ad48e76d), [`8324312fa39abc53711850d4a94b765d994f15cd`](https://github.com/siemens/ix/commit/8324312fa39abc53711850d4a94b765d994f15cd), [`b66381a68f94df878605a290a52c84d31fa45bf1`](https://github.com/siemens/ix/commit/b66381a68f94df878605a290a52c84d31fa45bf1), [`f6fd42a74b42ff0f9f2ffd2b4c2a49fbb4402760`](https://github.com/siemens/ix/commit/f6fd42a74b42ff0f9f2ffd2b4c2a49fbb4402760), [`5cec43bb4c627642721d65bb60a3c00a94072c80`](https://github.com/siemens/ix/commit/5cec43bb4c627642721d65bb60a3c00a94072c80), [`3d62fffdc107bfc92b2ecad8437662dc7c03796f`](https://github.com/siemens/ix/commit/3d62fffdc107bfc92b2ecad8437662dc7c03796f), [`c9c5bf0451998ce94a57247b974e00176f294437`](https://github.com/siemens/ix/commit/c9c5bf0451998ce94a57247b974e00176f294437), [`23402fc1ab914b7b6ca73f938b12c66dd1fd5120`](https://github.com/siemens/ix/commit/23402fc1ab914b7b6ca73f938b12c66dd1fd5120), [`df00884a5b65c7047ddc3506b8eaac66819c4ceb`](https://github.com/siemens/ix/commit/df00884a5b65c7047ddc3506b8eaac66819c4ceb), [`00b3988f7955d97080653544daf94fbd215ca0fb`](https://github.com/siemens/ix/commit/00b3988f7955d97080653544daf94fbd215ca0fb), [`9c4127cb14bd075c7e134e7c10673b51df2b993b`](https://github.com/siemens/ix/commit/9c4127cb14bd075c7e134e7c10673b51df2b993b), [`9c4127cb14bd075c7e134e7c10673b51df2b993b`](https://github.com/siemens/ix/commit/9c4127cb14bd075c7e134e7c10673b51df2b993b), [`093c78352916a193e7f2cbfab692362c4ba0de9a`](https://github.com/siemens/ix/commit/093c78352916a193e7f2cbfab692362c4ba0de9a), [`bc33e84a3ad378470dbbdff8dd85877c21355bae`](https://github.com/siemens/ix/commit/bc33e84a3ad378470dbbdff8dd85877c21355bae), [`6c9a6c87cd31976a6341a3d5b038d2ff0b9a104d`](https://github.com/siemens/ix/commit/6c9a6c87cd31976a6341a3d5b038d2ff0b9a104d), [`9c4127cb14bd075c7e134e7c10673b51df2b993b`](https://github.com/siemens/ix/commit/9c4127cb14bd075c7e134e7c10673b51df2b993b), [`5a12c6ac20e80a77f9fd3ad9aaffd66468f72b40`](https://github.com/siemens/ix/commit/5a12c6ac20e80a77f9fd3ad9aaffd66468f72b40), [`699958d387c1044b50def5071369f27de49f56ef`](https://github.com/siemens/ix/commit/699958d387c1044b50def5071369f27de49f56ef), [`24f3ad61ab275bf7c9bbd7e9ee84f6b4f7d3b5ff`](https://github.com/siemens/ix/commit/24f3ad61ab275bf7c9bbd7e9ee84f6b4f7d3b5ff), [`f6fd42a74b42ff0f9f2ffd2b4c2a49fbb4402760`](https://github.com/siemens/ix/commit/f6fd42a74b42ff0f9f2ffd2b4c2a49fbb4402760), [`2d4e3b8cdb756dff44627941adfea6a0230ccf26`](https://github.com/siemens/ix/commit/2d4e3b8cdb756dff44627941adfea6a0230ccf26), [`4bdec91e4a837e487caa4a25407f24eb37616531`](https://github.com/siemens/ix/commit/4bdec91e4a837e487caa4a25407f24eb37616531), [`db785bb8a4cc0654104cb24d420b7a1e2d45fdba`](https://github.com/siemens/ix/commit/db785bb8a4cc0654104cb24d420b7a1e2d45fdba), [`b5e2da18f871d6189c064a72bd9b29a82d0685eb`](https://github.com/siemens/ix/commit/b5e2da18f871d6189c064a72bd9b29a82d0685eb), [`db785bb8a4cc0654104cb24d420b7a1e2d45fdba`](https://github.com/siemens/ix/commit/db785bb8a4cc0654104cb24d420b7a1e2d45fdba), [`4685dc2c2b0de0961b464d305f633e1115a5926a`](https://github.com/siemens/ix/commit/4685dc2c2b0de0961b464d305f633e1115a5926a), [`c448755f97b66af96cce435025dc1f37892e9eb8`](https://github.com/siemens/ix/commit/c448755f97b66af96cce435025dc1f37892e9eb8), [`b3846c925ec4f03fd5d26b0b66042185b766f099`](https://github.com/siemens/ix/commit/b3846c925ec4f03fd5d26b0b66042185b766f099), [`8726afc094adf2ddb4f8e927c6a42aa8dc0ed589`](https://github.com/siemens/ix/commit/8726afc094adf2ddb4f8e927c6a42aa8dc0ed589), [`30a98977feb83c7fb8ec8ca76a4b524042b2e5af`](https://github.com/siemens/ix/commit/30a98977feb83c7fb8ec8ca76a4b524042b2e5af), [`f41b5d60299cb874cec9730394038dd4c2df8a60`](https://github.com/siemens/ix/commit/f41b5d60299cb874cec9730394038dd4c2df8a60), [`5cec43bb4c627642721d65bb60a3c00a94072c80`](https://github.com/siemens/ix/commit/5cec43bb4c627642721d65bb60a3c00a94072c80), [`8002d9a68ef8a5279d43726ecad28e85ad0ac53a`](https://github.com/siemens/ix/commit/8002d9a68ef8a5279d43726ecad28e85ad0ac53a), [`699958d387c1044b50def5071369f27de49f56ef`](https://github.com/siemens/ix/commit/699958d387c1044b50def5071369f27de49f56ef), [`d20b43d5f5bd5291b5125b120d2bb2d72286acfd`](https://github.com/siemens/ix/commit/d20b43d5f5bd5291b5125b120d2bb2d72286acfd), [`4685dc2c2b0de0961b464d305f633e1115a5926a`](https://github.com/siemens/ix/commit/4685dc2c2b0de0961b464d305f633e1115a5926a), [`4685dc2c2b0de0961b464d305f633e1115a5926a`](https://github.com/siemens/ix/commit/4685dc2c2b0de0961b464d305f633e1115a5926a), [`e8f825f7f494c8cc05dcce075afcff77839f8096`](https://github.com/siemens/ix/commit/e8f825f7f494c8cc05dcce075afcff77839f8096), [`ac163467de8fc4d943f5366415492a9a02748999`](https://github.com/siemens/ix/commit/ac163467de8fc4d943f5366415492a9a02748999), [`dacbced83d226380c256d868620ee640996cf229`](https://github.com/siemens/ix/commit/dacbced83d226380c256d868620ee640996cf229), [`df65c4d5436bf97f08dc2ec2899e2556c4ad7eaa`](https://github.com/siemens/ix/commit/df65c4d5436bf97f08dc2ec2899e2556c4ad7eaa)]:
    -   @siemens/ix@3.0.0

## [@siemens/ix-echarts@3.0.0](https://github.com/siemens/ix/releases/tag/%40siemens/ix-echarts%403.0.0) (2025-04-24T08:04:28Z)
### Major Changes

-   [#1238](https://github.com/siemens/ix/pull/1238) [`8803f3185b8a183926576d9f28894f9e1aa92ec3`](https://github.com/siemens/ix/commit/8803f3185b8a183926576d9f28894f9e1aa92ec3) Thanks [@danielleroux](https://github.com/danielleroux)! - feat: reduce bundle size in combination with icons

-   [#1630](https://github.com/siemens/ix/pull/1630) [`72021acc858698116e5a02d98b486c9d88269616`](https://github.com/siemens/ix/commit/72021acc858698116e5a02d98b486c9d88269616) Thanks [@jul-lam](https://github.com/jul-lam)! - - The **echarts** theme names have been adapted to the default theme names.
    -   `convertThemeName` function is removed because not needed anymore after aligning echarts theme names

### Patch Changes

-   [#1642](https://github.com/siemens/ix/pull/1642) [`241a5ea96cbcf07c3f9684f630ac308902449e1b`](https://github.com/siemens/ix/commit/241a5ea96cbcf07c3f9684f630ac308902449e1b) Thanks [@danielleroux](https://github.com/danielleroux)! - Added missing dist folder to deployment

## [@siemens/ix-angular@3.0.0](https://github.com/siemens/ix/releases/tag/%40siemens/ix-angular%403.0.0) (2025-04-24T08:04:40Z)
### Major Changes

-   [#1581](https://github.com/siemens/ix/pull/1581) [`7eb4d5147056e1e3252e387e5a718df7e593909e`](https://github.com/siemens/ix/commit/7eb4d5147056e1e3252e387e5a718df7e593909e) Thanks [@matthiashader](https://github.com/matthiashader)! - Component Updates and Enhancements

    New Variants for Card Components:

    -   **ix-action-card**, **ix-card**, and **ix-push-card**:
        -   The `insight` and `notification` variants have been **replaced by** `outline` and `filled`.

    Property Updates:

    -   **ix-chip**:
        -   The `color` property has been **replaced by** `chipColor`.
    -   **ix-event-list**:
        -   The `color` attribute has been **replaced by** `itemColor`.
    -   **ix-icon-button**:
        -   The `color` attribute has been **replaced by** `iconColor`.
        -   Size `32` has been removed.
    -   **ix-pill**:
        -   The `color` attribute has been **replaced by** `pillColor`.
    -   **ix-typography**:
        -   The `color` attribute has been **replaced by** `textColor`.
    -   **ix-select**:
        -   The `selectedIndices` attribute has been **replaced by** `value`.
        -   The `itemSelectionChange` event has been **replaced by** `valueChange`.
    -   **ix-select-item**:
        -   The type of the `value` property type has been updated to `string`.

    Date and Time Picker Enhancements:

    -   **ix-date-picker**:
        -   Removed attributes: `individual` and `eventDelimiter`.
        -   The `textSelectedDate` property has been **replaced by** `i18nDone`.
        -   The `done` event has been **replaced by** `dateSelect`.
    -   **ix-datetime-picker**:
        -   The `textSelectedDate` property has been **replaced by** `i18nDone`.
        -   The `done` event has been **replaced by** `dateSelect`.
        -   Removed the `eventDelimiter` property.
    -   **ix-time-picker**:
        -   Removed attributes: `individual` and `showTimeReference`.

    Removed Features:

    -   **ix-menu**:
        -   Removed the `maxVisibleMenuItems` attribute.
    -   **ix-menu-item**:
        -   The `tabIcon` attribute has been removed and replaced with `icon`.

    Other Changes:

    -   **ix-modal**:
        -   The `keyboard` attribute has been **replaced by** `closeOnEscape`.

-   [#1325](https://github.com/siemens/ix/pull/1325) [`71411db86c37d5cd0f5f71c4059322ea5e9d6f2d`](https://github.com/siemens/ix/commit/71411db86c37d5cd0f5f71c4059322ea5e9d6f2d) Thanks [@danielleroux](https://github.com/danielleroux)! - feat(angular): change angular compiler version to v17

-   [#1238](https://github.com/siemens/ix/pull/1238) [`8803f3185b8a183926576d9f28894f9e1aa92ec3`](https://github.com/siemens/ix/commit/8803f3185b8a183926576d9f28894f9e1aa92ec3) Thanks [@danielleroux](https://github.com/danielleroux)! - feat: reduce bundle size in combination with icons

-   [#1394](https://github.com/siemens/ix/pull/1394) [`24f3ad61ab275bf7c9bbd7e9ee84f6b4f7d3b5ff`](https://github.com/siemens/ix/commit/24f3ad61ab275bf7c9bbd7e9ee84f6b4f7d3b5ff) Thanks [@AndreasBerliner](https://github.com/AndreasBerliner)! - refactor: replace internal comments with annotations

-   [#1805](https://github.com/siemens/ix/pull/1805) [`e638ef08fbe34ad0e1dc153cff5a136d69492cd0`](https://github.com/siemens/ix/commit/e638ef08fbe34ad0e1dc153cff5a136d69492cd0) Thanks [@danielleroux](https://github.com/danielleroux)! - feat(angular): change angular compiler version to v18

### Minor Changes

-   [#1697](https://github.com/siemens/ix/pull/1697) [`9e13a08340efc9cb7dd1f0ef7d56481c8b5dcbbe`](https://github.com/siemens/ix/commit/9e13a08340efc9cb7dd1f0ef7d56481c8b5dcbbe) Thanks [@AndreasBerliner](https://github.com/AndreasBerliner)! - `ix-chip` and `ix-pill`: Add property `tooltip-text` to display an `ix-tooltip` with customizable text.

-   [#1676](https://github.com/siemens/ix/pull/1676) [`4685dc2c2b0de0961b464d305f633e1115a5926a`](https://github.com/siemens/ix/commit/4685dc2c2b0de0961b464d305f633e1115a5926a) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - `ix-flip-tile`: Expsose `index` property to allow setting of displayed content and add `toggle` event.

-   [#1325](https://github.com/siemens/ix/pull/1325) [`71411db86c37d5cd0f5f71c4059322ea5e9d6f2d`](https://github.com/siemens/ix/commit/71411db86c37d5cd0f5f71c4059322ea5e9d6f2d) Thanks [@danielleroux](https://github.com/danielleroux)! - feat(angular/standalone): add angular standalone components

-   [#1688](https://github.com/siemens/ix/pull/1688) [`5a12c6ac20e80a77f9fd3ad9aaffd66468f72b40`](https://github.com/siemens/ix/commit/5a12c6ac20e80a77f9fd3ad9aaffd66468f72b40) Thanks [@matthiashader](https://github.com/matthiashader)! - `ix-message-bar`: Event `closedChange` can now be prevented via `event.preventDefault()`.
    An additional event is added to get notified after the close animation of the `ix-message-bar` is finished.

-   [#1676](https://github.com/siemens/ix/pull/1676) [`4685dc2c2b0de0961b464d305f633e1115a5926a`](https://github.com/siemens/ix/commit/4685dc2c2b0de0961b464d305f633e1115a5926a) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - `ix-menu`: Add `openSettings` and `openAbout` events. Event `expandChange` can now be prevented via `event.preventDefault()`.

-   [#1682](https://github.com/siemens/ix/pull/1682) [`f41b5d60299cb874cec9730394038dd4c2df8a60`](https://github.com/siemens/ix/commit/f41b5d60299cb874cec9730394038dd4c2df8a60) Thanks [@danielleroux](https://github.com/danielleroux)! - Add `suppressClassMapping` to value-accessors to prevent that the accessors automatically map `ng-`-classes to `ix-`-classes.

    If `[suppressClassMapping]="true"` you need to control the `ix-`-classes on your own.

    ```html
    <ix-input
      label="Name:"
      formControlName="name"
      [suppressClassMapping]="true"
      [class.ix-invalid]="!form.get('name')!.valid && form.get('name')!.touched"
      required
    >
    </ix-input>
    ```

    `value-accessor` ignores NgControls which are untouched but have `required=true` errors

    Fixes #1638 #1680

-   [#1676](https://github.com/siemens/ix/pull/1676) [`4685dc2c2b0de0961b464d305f633e1115a5926a`](https://github.com/siemens/ix/commit/4685dc2c2b0de0961b464d305f633e1115a5926a) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Add `tabChange` event to `ix-menu-settings` and `ix-menu-about`.

-   [#1760](https://github.com/siemens/ix/pull/1760) [`ac163467de8fc4d943f5366415492a9a02748999`](https://github.com/siemens/ix/commit/ac163467de8fc4d943f5366415492a9a02748999) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - **ix-datetime-picker**: Time selection headline can now be translated via property `i18nTime`.

### Patch Changes

-   Updated dependencies \[[`40e8c510e15dba741601b3b19b6025c024e170ef`](https://github.com/siemens/ix/commit/40e8c510e15dba741601b3b19b6025c024e170ef), [`838c19239ac8a85e2d644696cc1fd3a67f5509d5`](https://github.com/siemens/ix/commit/838c19239ac8a85e2d644696cc1fd3a67f5509d5), [`7eb4d5147056e1e3252e387e5a718df7e593909e`](https://github.com/siemens/ix/commit/7eb4d5147056e1e3252e387e5a718df7e593909e), [`c7456367e276c31a9eb6c7cea8270857b5810360`](https://github.com/siemens/ix/commit/c7456367e276c31a9eb6c7cea8270857b5810360), [`e8bd3b6301d7553e6a02b79e2925aa0595b674ca`](https://github.com/siemens/ix/commit/e8bd3b6301d7553e6a02b79e2925aa0595b674ca), [`d0c4c9df8b269fc0206ffdce1c6c7ec4013028b6`](https://github.com/siemens/ix/commit/d0c4c9df8b269fc0206ffdce1c6c7ec4013028b6), [`aa63b4fd901bc50e98877826699412affa127ae7`](https://github.com/siemens/ix/commit/aa63b4fd901bc50e98877826699412affa127ae7), [`009519637b668f74f8abae7bd682c67045d2876f`](https://github.com/siemens/ix/commit/009519637b668f74f8abae7bd682c67045d2876f), [`9c4127cb14bd075c7e134e7c10673b51df2b993b`](https://github.com/siemens/ix/commit/9c4127cb14bd075c7e134e7c10673b51df2b993b), [`149dfbd6518e94da9e966d06ea2292c8e96772ce`](https://github.com/siemens/ix/commit/149dfbd6518e94da9e966d06ea2292c8e96772ce), [`2e2972260eafb1a87b84e5a705e3c932b15b8467`](https://github.com/siemens/ix/commit/2e2972260eafb1a87b84e5a705e3c932b15b8467), [`9e13a08340efc9cb7dd1f0ef7d56481c8b5dcbbe`](https://github.com/siemens/ix/commit/9e13a08340efc9cb7dd1f0ef7d56481c8b5dcbbe), [`e8049c9966e7d5019c8ed0ae0e6cf2597f81dce5`](https://github.com/siemens/ix/commit/e8049c9966e7d5019c8ed0ae0e6cf2597f81dce5), [`4685dc2c2b0de0961b464d305f633e1115a5926a`](https://github.com/siemens/ix/commit/4685dc2c2b0de0961b464d305f633e1115a5926a), [`278d51b7597afadd7fa765187e3cf9e8cd5385c6`](https://github.com/siemens/ix/commit/278d51b7597afadd7fa765187e3cf9e8cd5385c6), [`8803f3185b8a183926576d9f28894f9e1aa92ec3`](https://github.com/siemens/ix/commit/8803f3185b8a183926576d9f28894f9e1aa92ec3), [`74ddf7d9931d3e7d123d34f42718a47b98de42a9`](https://github.com/siemens/ix/commit/74ddf7d9931d3e7d123d34f42718a47b98de42a9), [`c7ce5be2cf5707b980d484e60dcc7dfa1814656b`](https://github.com/siemens/ix/commit/c7ce5be2cf5707b980d484e60dcc7dfa1814656b), [`ff816a840b609491e1a647d64f6bad489ad214f0`](https://github.com/siemens/ix/commit/ff816a840b609491e1a647d64f6bad489ad214f0), [`5b56d90813239cb34d28b4c20255392b9dd1d66f`](https://github.com/siemens/ix/commit/5b56d90813239cb34d28b4c20255392b9dd1d66f), [`8b757805d65f62e9296e6d1abd67a8f0b30099f3`](https://github.com/siemens/ix/commit/8b757805d65f62e9296e6d1abd67a8f0b30099f3), [`dd8b3eb28eb162f30c5fef27b369036b3bd6dd8b`](https://github.com/siemens/ix/commit/dd8b3eb28eb162f30c5fef27b369036b3bd6dd8b), [`96c8f78e4d3d4d304b1d5a41504d5b24401ea461`](https://github.com/siemens/ix/commit/96c8f78e4d3d4d304b1d5a41504d5b24401ea461), [`e4a8d713614c2a5f4850d26a81655756ad48e76d`](https://github.com/siemens/ix/commit/e4a8d713614c2a5f4850d26a81655756ad48e76d), [`8324312fa39abc53711850d4a94b765d994f15cd`](https://github.com/siemens/ix/commit/8324312fa39abc53711850d4a94b765d994f15cd), [`b66381a68f94df878605a290a52c84d31fa45bf1`](https://github.com/siemens/ix/commit/b66381a68f94df878605a290a52c84d31fa45bf1), [`f6fd42a74b42ff0f9f2ffd2b4c2a49fbb4402760`](https://github.com/siemens/ix/commit/f6fd42a74b42ff0f9f2ffd2b4c2a49fbb4402760), [`5cec43bb4c627642721d65bb60a3c00a94072c80`](https://github.com/siemens/ix/commit/5cec43bb4c627642721d65bb60a3c00a94072c80), [`3d62fffdc107bfc92b2ecad8437662dc7c03796f`](https://github.com/siemens/ix/commit/3d62fffdc107bfc92b2ecad8437662dc7c03796f), [`c9c5bf0451998ce94a57247b974e00176f294437`](https://github.com/siemens/ix/commit/c9c5bf0451998ce94a57247b974e00176f294437), [`23402fc1ab914b7b6ca73f938b12c66dd1fd5120`](https://github.com/siemens/ix/commit/23402fc1ab914b7b6ca73f938b12c66dd1fd5120), [`df00884a5b65c7047ddc3506b8eaac66819c4ceb`](https://github.com/siemens/ix/commit/df00884a5b65c7047ddc3506b8eaac66819c4ceb), [`00b3988f7955d97080653544daf94fbd215ca0fb`](https://github.com/siemens/ix/commit/00b3988f7955d97080653544daf94fbd215ca0fb), [`9c4127cb14bd075c7e134e7c10673b51df2b993b`](https://github.com/siemens/ix/commit/9c4127cb14bd075c7e134e7c10673b51df2b993b), [`9c4127cb14bd075c7e134e7c10673b51df2b993b`](https://github.com/siemens/ix/commit/9c4127cb14bd075c7e134e7c10673b51df2b993b), [`093c78352916a193e7f2cbfab692362c4ba0de9a`](https://github.com/siemens/ix/commit/093c78352916a193e7f2cbfab692362c4ba0de9a), [`bc33e84a3ad378470dbbdff8dd85877c21355bae`](https://github.com/siemens/ix/commit/bc33e84a3ad378470dbbdff8dd85877c21355bae), [`6c9a6c87cd31976a6341a3d5b038d2ff0b9a104d`](https://github.com/siemens/ix/commit/6c9a6c87cd31976a6341a3d5b038d2ff0b9a104d), [`9c4127cb14bd075c7e134e7c10673b51df2b993b`](https://github.com/siemens/ix/commit/9c4127cb14bd075c7e134e7c10673b51df2b993b), [`5a12c6ac20e80a77f9fd3ad9aaffd66468f72b40`](https://github.com/siemens/ix/commit/5a12c6ac20e80a77f9fd3ad9aaffd66468f72b40), [`699958d387c1044b50def5071369f27de49f56ef`](https://github.com/siemens/ix/commit/699958d387c1044b50def5071369f27de49f56ef), [`24f3ad61ab275bf7c9bbd7e9ee84f6b4f7d3b5ff`](https://github.com/siemens/ix/commit/24f3ad61ab275bf7c9bbd7e9ee84f6b4f7d3b5ff), [`f6fd42a74b42ff0f9f2ffd2b4c2a49fbb4402760`](https://github.com/siemens/ix/commit/f6fd42a74b42ff0f9f2ffd2b4c2a49fbb4402760), [`2d4e3b8cdb756dff44627941adfea6a0230ccf26`](https://github.com/siemens/ix/commit/2d4e3b8cdb756dff44627941adfea6a0230ccf26), [`4bdec91e4a837e487caa4a25407f24eb37616531`](https://github.com/siemens/ix/commit/4bdec91e4a837e487caa4a25407f24eb37616531), [`db785bb8a4cc0654104cb24d420b7a1e2d45fdba`](https://github.com/siemens/ix/commit/db785bb8a4cc0654104cb24d420b7a1e2d45fdba), [`b5e2da18f871d6189c064a72bd9b29a82d0685eb`](https://github.com/siemens/ix/commit/b5e2da18f871d6189c064a72bd9b29a82d0685eb), [`db785bb8a4cc0654104cb24d420b7a1e2d45fdba`](https://github.com/siemens/ix/commit/db785bb8a4cc0654104cb24d420b7a1e2d45fdba), [`4685dc2c2b0de0961b464d305f633e1115a5926a`](https://github.com/siemens/ix/commit/4685dc2c2b0de0961b464d305f633e1115a5926a), [`c448755f97b66af96cce435025dc1f37892e9eb8`](https://github.com/siemens/ix/commit/c448755f97b66af96cce435025dc1f37892e9eb8), [`b3846c925ec4f03fd5d26b0b66042185b766f099`](https://github.com/siemens/ix/commit/b3846c925ec4f03fd5d26b0b66042185b766f099), [`8726afc094adf2ddb4f8e927c6a42aa8dc0ed589`](https://github.com/siemens/ix/commit/8726afc094adf2ddb4f8e927c6a42aa8dc0ed589), [`30a98977feb83c7fb8ec8ca76a4b524042b2e5af`](https://github.com/siemens/ix/commit/30a98977feb83c7fb8ec8ca76a4b524042b2e5af), [`f41b5d60299cb874cec9730394038dd4c2df8a60`](https://github.com/siemens/ix/commit/f41b5d60299cb874cec9730394038dd4c2df8a60), [`5cec43bb4c627642721d65bb60a3c00a94072c80`](https://github.com/siemens/ix/commit/5cec43bb4c627642721d65bb60a3c00a94072c80), [`8002d9a68ef8a5279d43726ecad28e85ad0ac53a`](https://github.com/siemens/ix/commit/8002d9a68ef8a5279d43726ecad28e85ad0ac53a), [`699958d387c1044b50def5071369f27de49f56ef`](https://github.com/siemens/ix/commit/699958d387c1044b50def5071369f27de49f56ef), [`d20b43d5f5bd5291b5125b120d2bb2d72286acfd`](https://github.com/siemens/ix/commit/d20b43d5f5bd5291b5125b120d2bb2d72286acfd), [`4685dc2c2b0de0961b464d305f633e1115a5926a`](https://github.com/siemens/ix/commit/4685dc2c2b0de0961b464d305f633e1115a5926a), [`4685dc2c2b0de0961b464d305f633e1115a5926a`](https://github.com/siemens/ix/commit/4685dc2c2b0de0961b464d305f633e1115a5926a), [`e8f825f7f494c8cc05dcce075afcff77839f8096`](https://github.com/siemens/ix/commit/e8f825f7f494c8cc05dcce075afcff77839f8096), [`ac163467de8fc4d943f5366415492a9a02748999`](https://github.com/siemens/ix/commit/ac163467de8fc4d943f5366415492a9a02748999), [`dacbced83d226380c256d868620ee640996cf229`](https://github.com/siemens/ix/commit/dacbced83d226380c256d868620ee640996cf229), [`df65c4d5436bf97f08dc2ec2899e2556c4ad7eaa`](https://github.com/siemens/ix/commit/df65c4d5436bf97f08dc2ec2899e2556c4ad7eaa)]:
    -   @siemens/ix@3.0.0

## [@siemens/ix-aggrid@3.0.0](https://github.com/siemens/ix/releases/tag/%40siemens/ix-aggrid%403.0.0) (2025-04-24T08:04:25Z)
### Major Changes

-   [#1238](https://github.com/siemens/ix/pull/1238) [`8803f3185b8a183926576d9f28894f9e1aa92ec3`](https://github.com/siemens/ix/commit/8803f3185b8a183926576d9f28894f9e1aa92ec3) Thanks [@danielleroux](https://github.com/danielleroux)! - feat: reduce bundle size in combination with icons

-   [#1394](https://github.com/siemens/ix/pull/1394) [`24f3ad61ab275bf7c9bbd7e9ee84f6b4f7d3b5ff`](https://github.com/siemens/ix/commit/24f3ad61ab275bf7c9bbd7e9ee84f6b4f7d3b5ff) Thanks [@AndreasBerliner](https://github.com/AndreasBerliner)! - refactor: replace internal comments with annotations

### Patch Changes

-   [#1755](https://github.com/siemens/ix/pull/1755) [`b20f5dab187f627f112780348d6e8fd6c2715f58`](https://github.com/siemens/ix/commit/b20f5dab187f627f112780348d6e8fd6c2715f58) Thanks [@AndreasBerliner](https://github.com/AndreasBerliner)! - **AG Grid**: Improve styling of indeterminate checkbox to be displayed in grid header.

-   [#1642](https://github.com/siemens/ix/pull/1642) [`241a5ea96cbcf07c3f9684f630ac308902449e1b`](https://github.com/siemens/ix/commit/241a5ea96cbcf07c3f9684f630ac308902449e1b) Thanks [@danielleroux](https://github.com/danielleroux)! - Added missing dist folder to deployment

-   Updated dependencies \[[`40e8c510e15dba741601b3b19b6025c024e170ef`](https://github.com/siemens/ix/commit/40e8c510e15dba741601b3b19b6025c024e170ef), [`838c19239ac8a85e2d644696cc1fd3a67f5509d5`](https://github.com/siemens/ix/commit/838c19239ac8a85e2d644696cc1fd3a67f5509d5), [`7eb4d5147056e1e3252e387e5a718df7e593909e`](https://github.com/siemens/ix/commit/7eb4d5147056e1e3252e387e5a718df7e593909e), [`c7456367e276c31a9eb6c7cea8270857b5810360`](https://github.com/siemens/ix/commit/c7456367e276c31a9eb6c7cea8270857b5810360), [`e8bd3b6301d7553e6a02b79e2925aa0595b674ca`](https://github.com/siemens/ix/commit/e8bd3b6301d7553e6a02b79e2925aa0595b674ca), [`d0c4c9df8b269fc0206ffdce1c6c7ec4013028b6`](https://github.com/siemens/ix/commit/d0c4c9df8b269fc0206ffdce1c6c7ec4013028b6), [`aa63b4fd901bc50e98877826699412affa127ae7`](https://github.com/siemens/ix/commit/aa63b4fd901bc50e98877826699412affa127ae7), [`009519637b668f74f8abae7bd682c67045d2876f`](https://github.com/siemens/ix/commit/009519637b668f74f8abae7bd682c67045d2876f), [`9c4127cb14bd075c7e134e7c10673b51df2b993b`](https://github.com/siemens/ix/commit/9c4127cb14bd075c7e134e7c10673b51df2b993b), [`149dfbd6518e94da9e966d06ea2292c8e96772ce`](https://github.com/siemens/ix/commit/149dfbd6518e94da9e966d06ea2292c8e96772ce), [`2e2972260eafb1a87b84e5a705e3c932b15b8467`](https://github.com/siemens/ix/commit/2e2972260eafb1a87b84e5a705e3c932b15b8467), [`9e13a08340efc9cb7dd1f0ef7d56481c8b5dcbbe`](https://github.com/siemens/ix/commit/9e13a08340efc9cb7dd1f0ef7d56481c8b5dcbbe), [`e8049c9966e7d5019c8ed0ae0e6cf2597f81dce5`](https://github.com/siemens/ix/commit/e8049c9966e7d5019c8ed0ae0e6cf2597f81dce5), [`4685dc2c2b0de0961b464d305f633e1115a5926a`](https://github.com/siemens/ix/commit/4685dc2c2b0de0961b464d305f633e1115a5926a), [`278d51b7597afadd7fa765187e3cf9e8cd5385c6`](https://github.com/siemens/ix/commit/278d51b7597afadd7fa765187e3cf9e8cd5385c6), [`8803f3185b8a183926576d9f28894f9e1aa92ec3`](https://github.com/siemens/ix/commit/8803f3185b8a183926576d9f28894f9e1aa92ec3), [`74ddf7d9931d3e7d123d34f42718a47b98de42a9`](https://github.com/siemens/ix/commit/74ddf7d9931d3e7d123d34f42718a47b98de42a9), [`c7ce5be2cf5707b980d484e60dcc7dfa1814656b`](https://github.com/siemens/ix/commit/c7ce5be2cf5707b980d484e60dcc7dfa1814656b), [`ff816a840b609491e1a647d64f6bad489ad214f0`](https://github.com/siemens/ix/commit/ff816a840b609491e1a647d64f6bad489ad214f0), [`5b56d90813239cb34d28b4c20255392b9dd1d66f`](https://github.com/siemens/ix/commit/5b56d90813239cb34d28b4c20255392b9dd1d66f), [`8b757805d65f62e9296e6d1abd67a8f0b30099f3`](https://github.com/siemens/ix/commit/8b757805d65f62e9296e6d1abd67a8f0b30099f3), [`dd8b3eb28eb162f30c5fef27b369036b3bd6dd8b`](https://github.com/siemens/ix/commit/dd8b3eb28eb162f30c5fef27b369036b3bd6dd8b), [`96c8f78e4d3d4d304b1d5a41504d5b24401ea461`](https://github.com/siemens/ix/commit/96c8f78e4d3d4d304b1d5a41504d5b24401ea461), [`e4a8d713614c2a5f4850d26a81655756ad48e76d`](https://github.com/siemens/ix/commit/e4a8d713614c2a5f4850d26a81655756ad48e76d), [`8324312fa39abc53711850d4a94b765d994f15cd`](https://github.com/siemens/ix/commit/8324312fa39abc53711850d4a94b765d994f15cd), [`b66381a68f94df878605a290a52c84d31fa45bf1`](https://github.com/siemens/ix/commit/b66381a68f94df878605a290a52c84d31fa45bf1), [`f6fd42a74b42ff0f9f2ffd2b4c2a49fbb4402760`](https://github.com/siemens/ix/commit/f6fd42a74b42ff0f9f2ffd2b4c2a49fbb4402760), [`5cec43bb4c627642721d65bb60a3c00a94072c80`](https://github.com/siemens/ix/commit/5cec43bb4c627642721d65bb60a3c00a94072c80), [`3d62fffdc107bfc92b2ecad8437662dc7c03796f`](https://github.com/siemens/ix/commit/3d62fffdc107bfc92b2ecad8437662dc7c03796f), [`c9c5bf0451998ce94a57247b974e00176f294437`](https://github.com/siemens/ix/commit/c9c5bf0451998ce94a57247b974e00176f294437), [`23402fc1ab914b7b6ca73f938b12c66dd1fd5120`](https://github.com/siemens/ix/commit/23402fc1ab914b7b6ca73f938b12c66dd1fd5120), [`df00884a5b65c7047ddc3506b8eaac66819c4ceb`](https://github.com/siemens/ix/commit/df00884a5b65c7047ddc3506b8eaac66819c4ceb), [`00b3988f7955d97080653544daf94fbd215ca0fb`](https://github.com/siemens/ix/commit/00b3988f7955d97080653544daf94fbd215ca0fb), [`9c4127cb14bd075c7e134e7c10673b51df2b993b`](https://github.com/siemens/ix/commit/9c4127cb14bd075c7e134e7c10673b51df2b993b), [`9c4127cb14bd075c7e134e7c10673b51df2b993b`](https://github.com/siemens/ix/commit/9c4127cb14bd075c7e134e7c10673b51df2b993b), [`093c78352916a193e7f2cbfab692362c4ba0de9a`](https://github.com/siemens/ix/commit/093c78352916a193e7f2cbfab692362c4ba0de9a), [`bc33e84a3ad378470dbbdff8dd85877c21355bae`](https://github.com/siemens/ix/commit/bc33e84a3ad378470dbbdff8dd85877c21355bae), [`6c9a6c87cd31976a6341a3d5b038d2ff0b9a104d`](https://github.com/siemens/ix/commit/6c9a6c87cd31976a6341a3d5b038d2ff0b9a104d), [`9c4127cb14bd075c7e134e7c10673b51df2b993b`](https://github.com/siemens/ix/commit/9c4127cb14bd075c7e134e7c10673b51df2b993b), [`5a12c6ac20e80a77f9fd3ad9aaffd66468f72b40`](https://github.com/siemens/ix/commit/5a12c6ac20e80a77f9fd3ad9aaffd66468f72b40), [`699958d387c1044b50def5071369f27de49f56ef`](https://github.com/siemens/ix/commit/699958d387c1044b50def5071369f27de49f56ef), [`24f3ad61ab275bf7c9bbd7e9ee84f6b4f7d3b5ff`](https://github.com/siemens/ix/commit/24f3ad61ab275bf7c9bbd7e9ee84f6b4f7d3b5ff), [`f6fd42a74b42ff0f9f2ffd2b4c2a49fbb4402760`](https://github.com/siemens/ix/commit/f6fd42a74b42ff0f9f2ffd2b4c2a49fbb4402760), [`2d4e3b8cdb756dff44627941adfea6a0230ccf26`](https://github.com/siemens/ix/commit/2d4e3b8cdb756dff44627941adfea6a0230ccf26), [`4bdec91e4a837e487caa4a25407f24eb37616531`](https://github.com/siemens/ix/commit/4bdec91e4a837e487caa4a25407f24eb37616531), [`db785bb8a4cc0654104cb24d420b7a1e2d45fdba`](https://github.com/siemens/ix/commit/db785bb8a4cc0654104cb24d420b7a1e2d45fdba), [`b5e2da18f871d6189c064a72bd9b29a82d0685eb`](https://github.com/siemens/ix/commit/b5e2da18f871d6189c064a72bd9b29a82d0685eb), [`db785bb8a4cc0654104cb24d420b7a1e2d45fdba`](https://github.com/siemens/ix/commit/db785bb8a4cc0654104cb24d420b7a1e2d45fdba), [`4685dc2c2b0de0961b464d305f633e1115a5926a`](https://github.com/siemens/ix/commit/4685dc2c2b0de0961b464d305f633e1115a5926a), [`c448755f97b66af96cce435025dc1f37892e9eb8`](https://github.com/siemens/ix/commit/c448755f97b66af96cce435025dc1f37892e9eb8), [`b3846c925ec4f03fd5d26b0b66042185b766f099`](https://github.com/siemens/ix/commit/b3846c925ec4f03fd5d26b0b66042185b766f099), [`8726afc094adf2ddb4f8e927c6a42aa8dc0ed589`](https://github.com/siemens/ix/commit/8726afc094adf2ddb4f8e927c6a42aa8dc0ed589), [`30a98977feb83c7fb8ec8ca76a4b524042b2e5af`](https://github.com/siemens/ix/commit/30a98977feb83c7fb8ec8ca76a4b524042b2e5af), [`f41b5d60299cb874cec9730394038dd4c2df8a60`](https://github.com/siemens/ix/commit/f41b5d60299cb874cec9730394038dd4c2df8a60), [`5cec43bb4c627642721d65bb60a3c00a94072c80`](https://github.com/siemens/ix/commit/5cec43bb4c627642721d65bb60a3c00a94072c80), [`8002d9a68ef8a5279d43726ecad28e85ad0ac53a`](https://github.com/siemens/ix/commit/8002d9a68ef8a5279d43726ecad28e85ad0ac53a), [`699958d387c1044b50def5071369f27de49f56ef`](https://github.com/siemens/ix/commit/699958d387c1044b50def5071369f27de49f56ef), [`d20b43d5f5bd5291b5125b120d2bb2d72286acfd`](https://github.com/siemens/ix/commit/d20b43d5f5bd5291b5125b120d2bb2d72286acfd), [`4685dc2c2b0de0961b464d305f633e1115a5926a`](https://github.com/siemens/ix/commit/4685dc2c2b0de0961b464d305f633e1115a5926a), [`4685dc2c2b0de0961b464d305f633e1115a5926a`](https://github.com/siemens/ix/commit/4685dc2c2b0de0961b464d305f633e1115a5926a), [`e8f825f7f494c8cc05dcce075afcff77839f8096`](https://github.com/siemens/ix/commit/e8f825f7f494c8cc05dcce075afcff77839f8096), [`ac163467de8fc4d943f5366415492a9a02748999`](https://github.com/siemens/ix/commit/ac163467de8fc4d943f5366415492a9a02748999), [`dacbced83d226380c256d868620ee640996cf229`](https://github.com/siemens/ix/commit/dacbced83d226380c256d868620ee640996cf229), [`df65c4d5436bf97f08dc2ec2899e2556c4ad7eaa`](https://github.com/siemens/ix/commit/df65c4d5436bf97f08dc2ec2899e2556c4ad7eaa)]:
    -   @siemens/ix@3.0.0

## [@siemens/ix@3.0.0-alpha.4](https://github.com/siemens/ix/releases/tag/%40siemens/ix%403.0.0-alpha.4) (2025-04-10T06:34:59Z)
### Minor Changes

-   [#1803](https://github.com/siemens/ix/pull/1803) [`278d51b7597afadd7fa765187e3cf9e8cd5385c6`](https://github.com/siemens/ix/commit/278d51b7597afadd7fa765187e3cf9e8cd5385c6) Thanks [@AndreasBerliner](https://github.com/AndreasBerliner)! - **ix-tree**: Fix a bug where an event was not emitted when clicking tree items.
    **ix-tree**: Introduce a new attribute to enable tree items to be toggled on click.

    Fixes #1633.

-   [#1814](https://github.com/siemens/ix/pull/1814) [`bc33e84a3ad378470dbbdff8dd85877c21355bae`](https://github.com/siemens/ix/commit/bc33e84a3ad378470dbbdff8dd85877c21355bae) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Add additional color `alarm-contrast`, `critical-contrast`, `warning-contrast`, `success-contrast`, `info-contrast`, `neutral-contrast` and `primary-contrast` to **ix-typography**

### Patch Changes

-   [#1798](https://github.com/siemens/ix/pull/1798) [`40e8c510e15dba741601b3b19b6025c024e170ef`](https://github.com/siemens/ix/commit/40e8c510e15dba741601b3b19b6025c024e170ef) Thanks [@lzeiml](https://github.com/lzeiml)! - If an invalid date string is passed to the **ix-date-picker**, a console error will be thrown and the string will not be used.

-   [#1791](https://github.com/siemens/ix/pull/1791) [`838c19239ac8a85e2d644696cc1fd3a67f5509d5`](https://github.com/siemens/ix/commit/838c19239ac8a85e2d644696cc1fd3a67f5509d5) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - **ix-tree**: Init hyperlist after re-attaching tree to DOM.

    Fixes #1703.

-   [#1821](https://github.com/siemens/ix/pull/1821) [`d0c4c9df8b269fc0206ffdce1c6c7ec4013028b6`](https://github.com/siemens/ix/commit/d0c4c9df8b269fc0206ffdce1c6c7ec4013028b6) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Remove space before required asterisk in **ix-field-label**.

    Fixes #1634.

-   [#1790](https://github.com/siemens/ix/pull/1790) [`ff816a840b609491e1a647d64f6bad489ad214f0`](https://github.com/siemens/ix/commit/ff816a840b609491e1a647d64f6bad489ad214f0) Thanks [@varun-srinivasa](https://github.com/varun-srinivasa)! - **ix-select**: Allow re-opening of dropdown after clearing the select in `editable` mode.

    Fixes #1770.

-   [#1797](https://github.com/siemens/ix/pull/1797) [`df00884a5b65c7047ddc3506b8eaac66819c4ceb`](https://github.com/siemens/ix/commit/df00884a5b65c7047ddc3506b8eaac66819c4ceb) Thanks [@1307-Dev](https://github.com/1307-Dev)! - Fix button inside **ix-upload** component to be selectable via keyboard navigation.

-   [#1768](https://github.com/siemens/ix/pull/1768) [`8002d9a68ef8a5279d43726ecad28e85ad0ac53a`](https://github.com/siemens/ix/commit/8002d9a68ef8a5279d43726ecad28e85ad0ac53a) Thanks [@RamVinayMandal](https://github.com/RamVinayMandal)! - **ix-event-list**: Set custom height for dynamically created `ix-event-list-item`s.

    Fixes #1684.

## [@siemens/ix-vue@3.0.0-alpha.4](https://github.com/siemens/ix/releases/tag/%40siemens/ix-vue%403.0.0-alpha.4) (2025-04-10T06:35:05Z)
### Minor Changes

-   [#1803](https://github.com/siemens/ix/pull/1803) [`278d51b7597afadd7fa765187e3cf9e8cd5385c6`](https://github.com/siemens/ix/commit/278d51b7597afadd7fa765187e3cf9e8cd5385c6) Thanks [@AndreasBerliner](https://github.com/AndreasBerliner)! - **ix-tree**: Fix a bug where an event was not emitted when clicking tree items.
    **ix-tree**: Introduce a new attribute to enable tree items to be toggled on click.

    Fixes #1633.

### Patch Changes

-   Updated dependencies \[[`40e8c510e15dba741601b3b19b6025c024e170ef`](https://github.com/siemens/ix/commit/40e8c510e15dba741601b3b19b6025c024e170ef), [`838c19239ac8a85e2d644696cc1fd3a67f5509d5`](https://github.com/siemens/ix/commit/838c19239ac8a85e2d644696cc1fd3a67f5509d5), [`d0c4c9df8b269fc0206ffdce1c6c7ec4013028b6`](https://github.com/siemens/ix/commit/d0c4c9df8b269fc0206ffdce1c6c7ec4013028b6), [`278d51b7597afadd7fa765187e3cf9e8cd5385c6`](https://github.com/siemens/ix/commit/278d51b7597afadd7fa765187e3cf9e8cd5385c6), [`ff816a840b609491e1a647d64f6bad489ad214f0`](https://github.com/siemens/ix/commit/ff816a840b609491e1a647d64f6bad489ad214f0), [`df00884a5b65c7047ddc3506b8eaac66819c4ceb`](https://github.com/siemens/ix/commit/df00884a5b65c7047ddc3506b8eaac66819c4ceb), [`bc33e84a3ad378470dbbdff8dd85877c21355bae`](https://github.com/siemens/ix/commit/bc33e84a3ad378470dbbdff8dd85877c21355bae), [`8002d9a68ef8a5279d43726ecad28e85ad0ac53a`](https://github.com/siemens/ix/commit/8002d9a68ef8a5279d43726ecad28e85ad0ac53a)]:
    -   @siemens/ix@3.0.0-alpha.4

## [@siemens/ix-react@3.0.0-alpha.4](https://github.com/siemens/ix/releases/tag/%40siemens/ix-react%403.0.0-alpha.4) (2025-04-10T06:34:56Z)
### Patch Changes

-   Updated dependencies \[[`40e8c510e15dba741601b3b19b6025c024e170ef`](https://github.com/siemens/ix/commit/40e8c510e15dba741601b3b19b6025c024e170ef), [`838c19239ac8a85e2d644696cc1fd3a67f5509d5`](https://github.com/siemens/ix/commit/838c19239ac8a85e2d644696cc1fd3a67f5509d5), [`d0c4c9df8b269fc0206ffdce1c6c7ec4013028b6`](https://github.com/siemens/ix/commit/d0c4c9df8b269fc0206ffdce1c6c7ec4013028b6), [`278d51b7597afadd7fa765187e3cf9e8cd5385c6`](https://github.com/siemens/ix/commit/278d51b7597afadd7fa765187e3cf9e8cd5385c6), [`ff816a840b609491e1a647d64f6bad489ad214f0`](https://github.com/siemens/ix/commit/ff816a840b609491e1a647d64f6bad489ad214f0), [`df00884a5b65c7047ddc3506b8eaac66819c4ceb`](https://github.com/siemens/ix/commit/df00884a5b65c7047ddc3506b8eaac66819c4ceb), [`bc33e84a3ad378470dbbdff8dd85877c21355bae`](https://github.com/siemens/ix/commit/bc33e84a3ad378470dbbdff8dd85877c21355bae), [`8002d9a68ef8a5279d43726ecad28e85ad0ac53a`](https://github.com/siemens/ix/commit/8002d9a68ef8a5279d43726ecad28e85ad0ac53a)]:
    -   @siemens/ix@3.0.0-alpha.4

## [@siemens/ix-echarts@3.0.0-alpha.1](https://github.com/siemens/ix/releases/tag/%40siemens/ix-echarts%403.0.0-alpha.1) (2025-04-10T06:35:02Z)
### Patch Changes

-   [#1642](https://github.com/siemens/ix/pull/1642) [`241a5ea96cbcf07c3f9684f630ac308902449e1b`](https://github.com/siemens/ix/commit/241a5ea96cbcf07c3f9684f630ac308902449e1b) Thanks [@danielleroux](https://github.com/danielleroux)! - Added missing dist folder to deployment

## [@siemens/ix-angular@3.0.0-alpha.4](https://github.com/siemens/ix/releases/tag/%40siemens/ix-angular%403.0.0-alpha.4) (2025-04-10T06:34:53Z)
### Patch Changes

-   Updated dependencies \[[`40e8c510e15dba741601b3b19b6025c024e170ef`](https://github.com/siemens/ix/commit/40e8c510e15dba741601b3b19b6025c024e170ef), [`838c19239ac8a85e2d644696cc1fd3a67f5509d5`](https://github.com/siemens/ix/commit/838c19239ac8a85e2d644696cc1fd3a67f5509d5), [`d0c4c9df8b269fc0206ffdce1c6c7ec4013028b6`](https://github.com/siemens/ix/commit/d0c4c9df8b269fc0206ffdce1c6c7ec4013028b6), [`278d51b7597afadd7fa765187e3cf9e8cd5385c6`](https://github.com/siemens/ix/commit/278d51b7597afadd7fa765187e3cf9e8cd5385c6), [`ff816a840b609491e1a647d64f6bad489ad214f0`](https://github.com/siemens/ix/commit/ff816a840b609491e1a647d64f6bad489ad214f0), [`df00884a5b65c7047ddc3506b8eaac66819c4ceb`](https://github.com/siemens/ix/commit/df00884a5b65c7047ddc3506b8eaac66819c4ceb), [`bc33e84a3ad378470dbbdff8dd85877c21355bae`](https://github.com/siemens/ix/commit/bc33e84a3ad378470dbbdff8dd85877c21355bae), [`8002d9a68ef8a5279d43726ecad28e85ad0ac53a`](https://github.com/siemens/ix/commit/8002d9a68ef8a5279d43726ecad28e85ad0ac53a)]:
    -   @siemens/ix@3.0.0-alpha.4

## [@siemens/ix-aggrid@3.0.0-alpha.1](https://github.com/siemens/ix/releases/tag/%40siemens/ix-aggrid%403.0.0-alpha.1) (2025-04-10T06:34:50Z)
### Patch Changes

-   [#1642](https://github.com/siemens/ix/pull/1642) [`241a5ea96cbcf07c3f9684f630ac308902449e1b`](https://github.com/siemens/ix/commit/241a5ea96cbcf07c3f9684f630ac308902449e1b) Thanks [@danielleroux](https://github.com/danielleroux)! - Added missing dist folder to deployment

-   Updated dependencies \[[`40e8c510e15dba741601b3b19b6025c024e170ef`](https://github.com/siemens/ix/commit/40e8c510e15dba741601b3b19b6025c024e170ef), [`838c19239ac8a85e2d644696cc1fd3a67f5509d5`](https://github.com/siemens/ix/commit/838c19239ac8a85e2d644696cc1fd3a67f5509d5), [`d0c4c9df8b269fc0206ffdce1c6c7ec4013028b6`](https://github.com/siemens/ix/commit/d0c4c9df8b269fc0206ffdce1c6c7ec4013028b6), [`278d51b7597afadd7fa765187e3cf9e8cd5385c6`](https://github.com/siemens/ix/commit/278d51b7597afadd7fa765187e3cf9e8cd5385c6), [`ff816a840b609491e1a647d64f6bad489ad214f0`](https://github.com/siemens/ix/commit/ff816a840b609491e1a647d64f6bad489ad214f0), [`df00884a5b65c7047ddc3506b8eaac66819c4ceb`](https://github.com/siemens/ix/commit/df00884a5b65c7047ddc3506b8eaac66819c4ceb), [`bc33e84a3ad378470dbbdff8dd85877c21355bae`](https://github.com/siemens/ix/commit/bc33e84a3ad378470dbbdff8dd85877c21355bae), [`8002d9a68ef8a5279d43726ecad28e85ad0ac53a`](https://github.com/siemens/ix/commit/8002d9a68ef8a5279d43726ecad28e85ad0ac53a)]:
    -   @siemens/ix@3.0.0-alpha.4

## [@siemens/ix@3.0.0-alpha.3](https://github.com/siemens/ix/releases/tag/%40siemens/ix%403.0.0-alpha.3) (2025-03-27T10:29:18Z)


## [@siemens/ix-vue@3.0.0-alpha.3](https://github.com/siemens/ix/releases/tag/%40siemens/ix-vue%403.0.0-alpha.3) (2025-03-27T10:29:24Z)
### Patch Changes

-   Updated dependencies \[]:
    -   @siemens/ix@3.0.0-alpha.3

## [@siemens/ix-react@3.0.0-alpha.3](https://github.com/siemens/ix/releases/tag/%40siemens/ix-react%403.0.0-alpha.3) (2025-03-27T10:29:15Z)
### Patch Changes

-   Updated dependencies \[]:
    -   @siemens/ix@3.0.0-alpha.3

## [@siemens/ix-angular@3.0.0-alpha.3](https://github.com/siemens/ix/releases/tag/%40siemens/ix-angular%403.0.0-alpha.3) (2025-03-27T10:29:21Z)
### Major Changes

-   [#1805](https://github.com/siemens/ix/pull/1805) [`e638ef08fbe34ad0e1dc153cff5a136d69492cd0`](https://github.com/siemens/ix/commit/e638ef08fbe34ad0e1dc153cff5a136d69492cd0) Thanks [@danielleroux](https://github.com/danielleroux)! - feat(angular): change angular compiler version to v18

### Patch Changes

-   Updated dependencies \[]:
    -   @siemens/ix@3.0.0-alpha.3

## [@siemens/ix@3.0.0-alpha.1](https://github.com/siemens/ix/releases/tag/%40siemens/ix%403.0.0-alpha.1) (2025-03-21T08:45:28Z)
### Minor Changes

-   [#1767](https://github.com/siemens/ix/pull/1767) [`30a98977feb83c7fb8ec8ca76a4b524042b2e5af`](https://github.com/siemens/ix/commit/30a98977feb83c7fb8ec8ca76a4b524042b2e5af) Thanks [@raunak-matai](https://github.com/raunak-matai)! - Handle `preventDefault()` on native `click` event for `ix-tab-item`.

    Fixes #1655.

### Patch Changes

-   [#1724](https://github.com/siemens/ix/pull/1724) [`e8049c9966e7d5019c8ed0ae0e6cf2597f81dce5`](https://github.com/siemens/ix/commit/e8049c9966e7d5019c8ed0ae0e6cf2597f81dce5) Thanks [@danielleroux](https://github.com/danielleroux)! - Prevent **ix-application-header** from waiting until the corporate logo is defined.

-   [#1724](https://github.com/siemens/ix/pull/1724) [`8324312fa39abc53711850d4a94b765d994f15cd`](https://github.com/siemens/ix/commit/8324312fa39abc53711850d4a94b765d994f15cd) Thanks [@danielleroux](https://github.com/danielleroux)! - **ix-drawer**: Remove `transition` attribute from the styling to prevent conflicts between `animejs`

-   [#1724](https://github.com/siemens/ix/pull/1724) [`c448755f97b66af96cce435025dc1f37892e9eb8`](https://github.com/siemens/ix/commit/c448755f97b66af96cce435025dc1f37892e9eb8) Thanks [@danielleroux](https://github.com/danielleroux)! - Cleanup validation references for all validation components (e.g. `ix-date-input`, `ix-input`).

-   [#1724](https://github.com/siemens/ix/pull/1724) [`df65c4d5436bf97f08dc2ec2899e2556c4ad7eaa`](https://github.com/siemens/ix/commit/df65c4d5436bf97f08dc2ec2899e2556c4ad7eaa) Thanks [@danielleroux](https://github.com/danielleroux)! - Update @stencil/core dependency to 4.27.1

## [@siemens/ix-vue@3.0.0-alpha.1](https://github.com/siemens/ix/releases/tag/%40siemens/ix-vue%403.0.0-alpha.1) (2025-03-21T08:45:31Z)
### Patch Changes

-   Updated dependencies \[[`e8049c9966e7d5019c8ed0ae0e6cf2597f81dce5`](https://github.com/siemens/ix/commit/e8049c9966e7d5019c8ed0ae0e6cf2597f81dce5), [`8324312fa39abc53711850d4a94b765d994f15cd`](https://github.com/siemens/ix/commit/8324312fa39abc53711850d4a94b765d994f15cd), [`c448755f97b66af96cce435025dc1f37892e9eb8`](https://github.com/siemens/ix/commit/c448755f97b66af96cce435025dc1f37892e9eb8), [`30a98977feb83c7fb8ec8ca76a4b524042b2e5af`](https://github.com/siemens/ix/commit/30a98977feb83c7fb8ec8ca76a4b524042b2e5af), [`df65c4d5436bf97f08dc2ec2899e2556c4ad7eaa`](https://github.com/siemens/ix/commit/df65c4d5436bf97f08dc2ec2899e2556c4ad7eaa)]:
    -   @siemens/ix@3.0.0-alpha.1

## [@siemens/ix-react@3.0.0-alpha.1](https://github.com/siemens/ix/releases/tag/%40siemens/ix-react%403.0.0-alpha.1) (2025-03-21T08:45:34Z)
### Patch Changes

-   Updated dependencies \[[`e8049c9966e7d5019c8ed0ae0e6cf2597f81dce5`](https://github.com/siemens/ix/commit/e8049c9966e7d5019c8ed0ae0e6cf2597f81dce5), [`8324312fa39abc53711850d4a94b765d994f15cd`](https://github.com/siemens/ix/commit/8324312fa39abc53711850d4a94b765d994f15cd), [`c448755f97b66af96cce435025dc1f37892e9eb8`](https://github.com/siemens/ix/commit/c448755f97b66af96cce435025dc1f37892e9eb8), [`30a98977feb83c7fb8ec8ca76a4b524042b2e5af`](https://github.com/siemens/ix/commit/30a98977feb83c7fb8ec8ca76a4b524042b2e5af), [`df65c4d5436bf97f08dc2ec2899e2556c4ad7eaa`](https://github.com/siemens/ix/commit/df65c4d5436bf97f08dc2ec2899e2556c4ad7eaa)]:
    -   @siemens/ix@3.0.0-alpha.1

## [@siemens/ix-angular@3.0.0-alpha.1](https://github.com/siemens/ix/releases/tag/%40siemens/ix-angular%403.0.0-alpha.1) (2025-03-21T08:45:25Z)
### Patch Changes

-   Updated dependencies \[[`e8049c9966e7d5019c8ed0ae0e6cf2597f81dce5`](https://github.com/siemens/ix/commit/e8049c9966e7d5019c8ed0ae0e6cf2597f81dce5), [`8324312fa39abc53711850d4a94b765d994f15cd`](https://github.com/siemens/ix/commit/8324312fa39abc53711850d4a94b765d994f15cd), [`c448755f97b66af96cce435025dc1f37892e9eb8`](https://github.com/siemens/ix/commit/c448755f97b66af96cce435025dc1f37892e9eb8), [`30a98977feb83c7fb8ec8ca76a4b524042b2e5af`](https://github.com/siemens/ix/commit/30a98977feb83c7fb8ec8ca76a4b524042b2e5af), [`df65c4d5436bf97f08dc2ec2899e2556c4ad7eaa`](https://github.com/siemens/ix/commit/df65c4d5436bf97f08dc2ec2899e2556c4ad7eaa)]:
    -   @siemens/ix@3.0.0-alpha.1

## [@siemens/ix@3.0.0-alpha.0](https://github.com/siemens/ix/releases/tag/%40siemens/ix%403.0.0-alpha.0) (2025-03-17T14:02:36Z)
## 3.0.0-alpha.0

### Major Changes

- [#1581](https://github.com/siemens/ix/pull/1581) [`7eb4d5147056e1e3252e387e5a718df7e593909e`](https://github.com/siemens/ix/commit/7eb4d5147056e1e3252e387e5a718df7e593909e) Thanks [@matthiashader](https://github.com/matthiashader)! - Component Updates and Enhancements

  New Variants for Card Components:

  - **ix-action-card**, **ix-card**, and **ix-push-card**:
    - The `insight` and `notification` variants have been **replaced by** `outline` and `filled`.

  Property Updates:

  - **ix-chip**:
    - The `color` property has been **replaced by** `chipColor`.
  - **ix-event-list**:
    - The `color` attribute has been **replaced by** `itemColor`.
  - **ix-icon-button**:
    - The `color` attribute has been **replaced by** `iconColor`.
    - Size `32` has been removed.
  - **ix-pill**:
    - The `color` attribute has been **replaced by** `pillColor`.
  - **ix-typography**:
    - The `color` attribute has been **replaced by** `textColor`.
  - **ix-select**:
    - The `selectedIndices` attribute has been **replaced by** `value`.
    - The `itemSelectionChange` event has been **replaced by** `valueChange`.
  - **ix-select-item**:
    - The type of the `value` property type has been updated to `string`.

  Date and Time Picker Enhancements:

  - **ix-date-picker**:
    - Removed attributes: `individual` and `eventDelimiter`.
    - The `textSelectedDate` property has been **replaced by** `i18nDone`.
    - The `done` event has been **replaced by** `dateSelect`.
  - **ix-datetime-picker**:
    - The `textSelectedDate` property has been **replaced by** `i18nDone`.
    - The `done` event has been **replaced by** `dateSelect`.
    - Removed the `eventDelimiter` property.
  - **ix-time-picker**:
    - Removed attributes: `individual` and `showTimeReference`.

  Removed Features:

  - **ix-menu**:
    - Removed the `maxVisibleMenuItems` attribute.
  - **ix-menu-item**:
    - The `tabIcon` attribute has been removed and replaced with `icon`.

  Other Changes:

  - **ix-modal**:
    - The `keyboard` attribute has been **replaced by** `closeOnEscape`.

- [#1700](https://github.com/siemens/ix/pull/1700) [`2e2972260eafb1a87b84e5a705e3c932b15b8467`](https://github.com/siemens/ix/commit/2e2972260eafb1a87b84e5a705e3c932b15b8467) Thanks [@jul-lam](https://github.com/jul-lam)! - The **ix-tooltip** is working as expected when utilized for an **ix-dropdown-item** inside an **ix-dropdown**. The tooltip is now displayed outside the dropdown without breaking its layout.

  Fixes #1618

- [#1238](https://github.com/siemens/ix/pull/1238) [`8803f3185b8a183926576d9f28894f9e1aa92ec3`](https://github.com/siemens/ix/commit/8803f3185b8a183926576d9f28894f9e1aa92ec3) Thanks [@danielleroux](https://github.com/danielleroux)! - feat: reduce bundle size in combination with icons

- [#1742](https://github.com/siemens/ix/pull/1742) [`8b757805d65f62e9296e6d1abd67a8f0b30099f3`](https://github.com/siemens/ix/commit/8b757805d65f62e9296e6d1abd67a8f0b30099f3) Thanks [@matthiashader](https://github.com/matthiashader)! - Adapt the event signature of the `dateSelect` event of the `ix-date-picker` to reflect undefined values.

- [#1578](https://github.com/siemens/ix/pull/1578) [`dd8b3eb28eb162f30c5fef27b369036b3bd6dd8b`](https://github.com/siemens/ix/commit/dd8b3eb28eb162f30c5fef27b369036b3bd6dd8b) Thanks [@danielleroux](https://github.com/danielleroux)! - Remove `devDependency` and `peerDependency` to bootstrap. For more information checkout BREAKING_CHANGES.md

- [#1758](https://github.com/siemens/ix/pull/1758) [`f6fd42a74b42ff0f9f2ffd2b4c2a49fbb4402760`](https://github.com/siemens/ix/commit/f6fd42a74b42ff0f9f2ffd2b4c2a49fbb4402760) Thanks [@danielleroux](https://github.com/danielleroux)! - Prevent global styling for `input` and `textarea`. If you still want to use the legacy styling provide a `class="ix-form-control"` to `input` or `textarea`.
  Prevent global styling for `label`. If you still want to use the legacy styling provide a `class="ix-form-label"` to `label`.

  Fixes #1398

- [#1457](https://github.com/siemens/ix/pull/1457) [`3d62fffdc107bfc92b2ecad8437662dc7c03796f`](https://github.com/siemens/ix/commit/3d62fffdc107bfc92b2ecad8437662dc7c03796f) Thanks [@matthiashader](https://github.com/matthiashader)! - fix(core/pane-layout): remove absolute positioning

- [#1330](https://github.com/siemens/ix/pull/1330) [`c9c5bf0451998ce94a57247b974e00176f294437`](https://github.com/siemens/ix/commit/c9c5bf0451998ce94a57247b974e00176f294437) Thanks [@github-actions](https://github.com/apps/github-actions)! - The **VariantMapping** that mapped legacy font classes to current ones was removed.

- [#1394](https://github.com/siemens/ix/pull/1394) [`24f3ad61ab275bf7c9bbd7e9ee84f6b4f7d3b5ff`](https://github.com/siemens/ix/commit/24f3ad61ab275bf7c9bbd7e9ee84f6b4f7d3b5ff) Thanks [@AndreasBerliner](https://github.com/AndreasBerliner)! - refactor: replace internal comments with annotations

- [#1758](https://github.com/siemens/ix/pull/1758) [`f6fd42a74b42ff0f9f2ffd2b4c2a49fbb4402760`](https://github.com/siemens/ix/commit/f6fd42a74b42ff0f9f2ffd2b4c2a49fbb4402760) Thanks [@danielleroux](https://github.com/danielleroux)! - Change default width from `input.ix-from-control` from `width: 100%` to `width: auto`

- [#1743](https://github.com/siemens/ix/pull/1743) [`4bdec91e4a837e487caa4a25407f24eb37616531`](https://github.com/siemens/ix/commit/4bdec91e4a837e487caa4a25407f24eb37616531) Thanks [@lzeiml](https://github.com/lzeiml)! - **ix-date-picker**: Week numbers are now hidden by default inside the ix-date-picker. They can be shown by setting showWeekNumbers to true.
  **ix-datetime-picker**: Week numbers are now hidden by default inside the ix-date-picker. They can be shown by setting showWeekNumbers to true.
  **ix-date-dropdown**: Week numbers are now hidden by default inside the ix-date-picker. They can be shown by setting showWeekNumbers to true.
  **ix-date-input**: Week numbers are now hidden by default inside the ix-date-picker. They can be shown by setting showWeekNumbers to true.

- [#1742](https://github.com/siemens/ix/pull/1742) [`db785bb8a4cc0654104cb24d420b7a1e2d45fdba`](https://github.com/siemens/ix/commit/db785bb8a4cc0654104cb24d420b7a1e2d45fdba) Thanks [@matthiashader](https://github.com/matthiashader)! - `ix-date-dropdown`: Adapt the types `DateDropdownOption` and `DateRangeChangeEvent` to reflect the changed signature of the `ix-date-picker`'s `dateSelect` event.

- [#1742](https://github.com/siemens/ix/pull/1742) [`db785bb8a4cc0654104cb24d420b7a1e2d45fdba`](https://github.com/siemens/ix/commit/db785bb8a4cc0654104cb24d420b7a1e2d45fdba) Thanks [@matthiashader](https://github.com/matthiashader)! - `ix-date-input`: Adapt the `value` property and the `valueChange` event to reflect the changed signature of the `date-picker`'s `dateSelect` event.

- [#1613](https://github.com/siemens/ix/pull/1613) [`b3846c925ec4f03fd5d26b0b66042185b766f099`](https://github.com/siemens/ix/commit/b3846c925ec4f03fd5d26b0b66042185b766f099) Thanks [@jul-lam](https://github.com/jul-lam)! - **ix-application** now utilizes full viewport height and full viewport width

- [#1273](https://github.com/siemens/ix/pull/1273) [`e8f825f7f494c8cc05dcce075afcff77839f8096`](https://github.com/siemens/ix/commit/e8f825f7f494c8cc05dcce075afcff77839f8096) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - fix(core/checkbox): allow multiline labels and align checkbox at the top

### Minor Changes

- [#1737](https://github.com/siemens/ix/pull/1737) [`149dfbd6518e94da9e966d06ea2292c8e96772ce`](https://github.com/siemens/ix/commit/149dfbd6518e94da9e966d06ea2292c8e96772ce) Thanks [@matthiashader](https://github.com/matthiashader)! - `ix-message-bar`: Add new types `critical`, `success`, `primary`, and `neutral`, and deprecate type `danger`.
  Additionally, add new `NotificationColor` colors `color-critical`, `color-alarm`, `color-neutral`, and `color-primary`.

- [#1697](https://github.com/siemens/ix/pull/1697) [`9e13a08340efc9cb7dd1f0ef7d56481c8b5dcbbe`](https://github.com/siemens/ix/commit/9e13a08340efc9cb7dd1f0ef7d56481c8b5dcbbe) Thanks [@AndreasBerliner](https://github.com/AndreasBerliner)! - `ix-chip` and `ix-pill`: Add property `tooltip-text` to display an `ix-tooltip` with customizable text.

- [#1676](https://github.com/siemens/ix/pull/1676) [`4685dc2c2b0de0961b464d305f633e1115a5926a`](https://github.com/siemens/ix/commit/4685dc2c2b0de0961b464d305f633e1115a5926a) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - `ix-flip-tile`: Expsose `index` property to allow setting of displayed content and add `toggle` event.

- [#1688](https://github.com/siemens/ix/pull/1688) [`5a12c6ac20e80a77f9fd3ad9aaffd66468f72b40`](https://github.com/siemens/ix/commit/5a12c6ac20e80a77f9fd3ad9aaffd66468f72b40) Thanks [@matthiashader](https://github.com/matthiashader)! - `ix-message-bar`: Event `closedChange` can now be prevented via `event.preventDefault()`.
  An additional event is added to get notified after the close animation of the `ix-message-bar` is finished.

- [#1676](https://github.com/siemens/ix/pull/1676) [`4685dc2c2b0de0961b464d305f633e1115a5926a`](https://github.com/siemens/ix/commit/4685dc2c2b0de0961b464d305f633e1115a5926a) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - `ix-menu`: Add `openSettings` and `openAbout` events. Event `expandChange` can now be prevented via `event.preventDefault()`.

- [#1758](https://github.com/siemens/ix/pull/1758) [`d20b43d5f5bd5291b5125b120d2bb2d72286acfd`](https://github.com/siemens/ix/commit/d20b43d5f5bd5291b5125b120d2bb2d72286acfd) Thanks [@danielleroux](https://github.com/danielleroux)! - Add new global class `.ix-table` and `.ix-table-striped` to display a simple html table

- [#1676](https://github.com/siemens/ix/pull/1676) [`4685dc2c2b0de0961b464d305f633e1115a5926a`](https://github.com/siemens/ix/commit/4685dc2c2b0de0961b464d305f633e1115a5926a) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - `ìx-drawer`: Events `open` and `drawerClose` can now be prevented via`event.preventDefault()`.

- [#1676](https://github.com/siemens/ix/pull/1676) [`4685dc2c2b0de0961b464d305f633e1115a5926a`](https://github.com/siemens/ix/commit/4685dc2c2b0de0961b464d305f633e1115a5926a) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Add `tabChange` event to `ix-menu-settings` and `ix-menu-about`.

- [#1760](https://github.com/siemens/ix/pull/1760) [`ac163467de8fc4d943f5366415492a9a02748999`](https://github.com/siemens/ix/commit/ac163467de8fc4d943f5366415492a9a02748999) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - **ix-datetime-picker**: Time selection headline can now be translated via property `i18nTime`.

### Patch Changes

- [#1706](https://github.com/siemens/ix/pull/1706) [`e8bd3b6301d7553e6a02b79e2925aa0595b674ca`](https://github.com/siemens/ix/commit/e8bd3b6301d7553e6a02b79e2925aa0595b674ca) Thanks [@lzeiml](https://github.com/lzeiml)! - **ix-menu-category**: Dynamically added items are now instantly visible. This is achieved by adjusting the max-height everytime an item gets added.

  Fixes #1606

- [#1683](https://github.com/siemens/ix/pull/1683) [`aa63b4fd901bc50e98877826699412affa127ae7`](https://github.com/siemens/ix/commit/aa63b4fd901bc50e98877826699412affa127ae7) Thanks [@ridvandmrc](https://github.com/ridvandmrc)! - `active=false` of the `ix-chip` will now show the chip as not interactable.

  Fixed #1656

- [#1681](https://github.com/siemens/ix/pull/1681) [`5b56d90813239cb34d28b4c20255392b9dd1d66f`](https://github.com/siemens/ix/commit/5b56d90813239cb34d28b4c20255392b9dd1d66f) Thanks [@jul-lam](https://github.com/jul-lam)! - Update `@floating-ui/dom` dependency to fix a wrong placement of the `ix-dropdown` if the dropdown is placed inside a `dialog`-element with animations in certain environments.

- [#1708](https://github.com/siemens/ix/pull/1708) [`96c8f78e4d3d4d304b1d5a41504d5b24401ea461`](https://github.com/siemens/ix/commit/96c8f78e4d3d4d304b1d5a41504d5b24401ea461) Thanks [@lzeiml](https://github.com/lzeiml)! - **ix-radio**: Now doesn't change height/layout anymore when clicked. This is achieved by changing the way one of the component's divs is rendered.
  **ix-checkbox**: Now doesn't change height/layout anymore when clicked. This is achieved by changing the way one of the component's SVGs is rendered.

  Fixes #1702

- [#1699](https://github.com/siemens/ix/pull/1699) [`093c78352916a193e7f2cbfab692362c4ba0de9a`](https://github.com/siemens/ix/commit/093c78352916a193e7f2cbfab692362c4ba0de9a) Thanks [@danielleroux](https://github.com/danielleroux)! - Update classic theme colors to match latest figma specs

- [#1561](https://github.com/siemens/ix/pull/1561) [`699958d387c1044b50def5071369f27de49f56ef`](https://github.com/siemens/ix/commit/699958d387c1044b50def5071369f27de49f56ef) Thanks [@ridvandmrc](https://github.com/ridvandmrc)! - Update slot references for **ix-input-group**.

- [#1687](https://github.com/siemens/ix/pull/1687) [`2d4e3b8cdb756dff44627941adfea6a0230ccf26`](https://github.com/siemens/ix/commit/2d4e3b8cdb756dff44627941adfea6a0230ccf26) Thanks [@matthiashader](https://github.com/matthiashader)! - Fix issue of `ix-button` which prevent a form get submitted twice in row.

- [#1330](https://github.com/siemens/ix/pull/1330) [`b5e2da18f871d6189c064a72bd9b29a82d0685eb`](https://github.com/siemens/ix/commit/b5e2da18f871d6189c064a72bd9b29a82d0685eb) Thanks [@github-actions](https://github.com/apps/github-actions)! - fix(core): semver from stencil/core to minor

- [#1691](https://github.com/siemens/ix/pull/1691) [`8726afc094adf2ddb4f8e927c6a42aa8dc0ed589`](https://github.com/siemens/ix/commit/8726afc094adf2ddb4f8e927c6a42aa8dc0ed589) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - `ix-workflow-step`: change icon for 'done' state to be different from the one shown for 'success' state to pervent confusion.

- [#1682](https://github.com/siemens/ix/pull/1682) [`f41b5d60299cb874cec9730394038dd4c2df8a60`](https://github.com/siemens/ix/commit/f41b5d60299cb874cec9730394038dd4c2df8a60) Thanks [@danielleroux](https://github.com/danielleroux)! - Prevent input elements like (`ix-input`, `ix-number-input`, `ix-date-input`, `ix-select`, `ix-textarea`) to show `required` validation error without any user interaction.

  If the class `ix-invalid` is applied programmatically an error message is still shown even without a user interaction.

  Fixes #1638, #1680

- [#1561](https://github.com/siemens/ix/pull/1561) [`699958d387c1044b50def5071369f27de49f56ef`](https://github.com/siemens/ix/commit/699958d387c1044b50def5071369f27de49f56ef) Thanks [@ridvandmrc](https://github.com/ridvandmrc)! - **ix-drawer**: Allow nested content to calculate it's layout properly by setting drawer width explicitly.

- [#1769](https://github.com/siemens/ix/pull/1769) [`dacbced83d226380c256d868620ee640996cf229`](https://github.com/siemens/ix/commit/dacbced83d226380c256d868620ee640996cf229) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Refactor return type of `focusInput` method of `IxInputFieldComponent` interface to `Promise<void>`.
## [](https://github.com/siemens/ix/releases/tag/%40siemens/ix-vue%403.0.0-alpha.0) (2025-03-17T14:05:15Z)
## 3.0.0-alpha.0

### Major Changes

- [#1581](https://github.com/siemens/ix/pull/1581) [`7eb4d5147056e1e3252e387e5a718df7e593909e`](https://github.com/siemens/ix/commit/7eb4d5147056e1e3252e387e5a718df7e593909e) Thanks [@matthiashader](https://github.com/matthiashader)! - Component Updates and Enhancements

  New Variants for Card Components:

  - **ix-action-card**, **ix-card**, and **ix-push-card**:
    - The `insight` and `notification` variants have been **replaced by** `outline` and `filled`.

  Property Updates:

  - **ix-chip**:
    - The `color` property has been **replaced by** `chipColor`.
  - **ix-event-list**:
    - The `color` attribute has been **replaced by** `itemColor`.
  - **ix-icon-button**:
    - The `color` attribute has been **replaced by** `iconColor`.
    - Size `32` has been removed.
  - **ix-pill**:
    - The `color` attribute has been **replaced by** `pillColor`.
  - **ix-typography**:
    - The `color` attribute has been **replaced by** `textColor`.
  - **ix-select**:
    - The `selectedIndices` attribute has been **replaced by** `value`.
    - The `itemSelectionChange` event has been **replaced by** `valueChange`.
  - **ix-select-item**:
    - The type of the `value` property type has been updated to `string`.

  Date and Time Picker Enhancements:

  - **ix-date-picker**:
    - Removed attributes: `individual` and `eventDelimiter`.
    - The `textSelectedDate` property has been **replaced by** `i18nDone`.
    - The `done` event has been **replaced by** `dateSelect`.
  - **ix-datetime-picker**:
    - The `textSelectedDate` property has been **replaced by** `i18nDone`.
    - The `done` event has been **replaced by** `dateSelect`.
    - Removed the `eventDelimiter` property.
  - **ix-time-picker**:
    - Removed attributes: `individual` and `showTimeReference`.

  Removed Features:

  - **ix-menu**:
    - Removed the `maxVisibleMenuItems` attribute.
  - **ix-menu-item**:
    - The `tabIcon` attribute has been removed and replaced with `icon`.

  Other Changes:

  - **ix-modal**:
    - The `keyboard` attribute has been **replaced by** `closeOnEscape`.

- [#1238](https://github.com/siemens/ix/pull/1238) [`8803f3185b8a183926576d9f28894f9e1aa92ec3`](https://github.com/siemens/ix/commit/8803f3185b8a183926576d9f28894f9e1aa92ec3) Thanks [@danielleroux](https://github.com/danielleroux)! - feat: reduce bundle size in combination with icons

- [#1394](https://github.com/siemens/ix/pull/1394) [`24f3ad61ab275bf7c9bbd7e9ee84f6b4f7d3b5ff`](https://github.com/siemens/ix/commit/24f3ad61ab275bf7c9bbd7e9ee84f6b4f7d3b5ff) Thanks [@AndreasBerliner](https://github.com/AndreasBerliner)! - refactor: replace internal comments with annotations

- [#1328](https://github.com/siemens/ix/pull/1328) [`c17750dfad2fe69854f52fe56a447302c9ff4cc8`](https://github.com/siemens/ix/commit/c17750dfad2fe69854f52fe56a447302c9ff4cc8) Thanks [@danielleroux](https://github.com/danielleroux)! - feat(vue): remove commonjs

### Minor Changes

- [#1697](https://github.com/siemens/ix/pull/1697) [`9e13a08340efc9cb7dd1f0ef7d56481c8b5dcbbe`](https://github.com/siemens/ix/commit/9e13a08340efc9cb7dd1f0ef7d56481c8b5dcbbe) Thanks [@AndreasBerliner](https://github.com/AndreasBerliner)! - `ix-chip` and `ix-pill`: Add property `tooltip-text` to display an `ix-tooltip` with customizable text.

- [#1676](https://github.com/siemens/ix/pull/1676) [`4685dc2c2b0de0961b464d305f633e1115a5926a`](https://github.com/siemens/ix/commit/4685dc2c2b0de0961b464d305f633e1115a5926a) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - `ix-flip-tile`: Expsose `index` property to allow setting of displayed content and add `toggle` event.

- [#1688](https://github.com/siemens/ix/pull/1688) [`5a12c6ac20e80a77f9fd3ad9aaffd66468f72b40`](https://github.com/siemens/ix/commit/5a12c6ac20e80a77f9fd3ad9aaffd66468f72b40) Thanks [@matthiashader](https://github.com/matthiashader)! - `ix-message-bar`: Event `closedChange` can now be prevented via `event.preventDefault()`.
  An additional event is added to get notified after the close animation of the `ix-message-bar` is finished.

- [#1676](https://github.com/siemens/ix/pull/1676) [`4685dc2c2b0de0961b464d305f633e1115a5926a`](https://github.com/siemens/ix/commit/4685dc2c2b0de0961b464d305f633e1115a5926a) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - `ix-menu`: Add `openSettings` and `openAbout` events. Event `expandChange` can now be prevented via `event.preventDefault()`.

- [#1676](https://github.com/siemens/ix/pull/1676) [`4685dc2c2b0de0961b464d305f633e1115a5926a`](https://github.com/siemens/ix/commit/4685dc2c2b0de0961b464d305f633e1115a5926a) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Add `tabChange` event to `ix-menu-settings` and `ix-menu-about`.

- [#1760](https://github.com/siemens/ix/pull/1760) [`ac163467de8fc4d943f5366415492a9a02748999`](https://github.com/siemens/ix/commit/ac163467de8fc4d943f5366415492a9a02748999) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - **ix-datetime-picker**: Time selection headline can now be translated via property `i18nTime`.

### Patch Changes

- Updated dependencies [[`7eb4d5147056e1e3252e387e5a718df7e593909e`](https://github.com/siemens/ix/commit/7eb4d5147056e1e3252e387e5a718df7e593909e), [`e8bd3b6301d7553e6a02b79e2925aa0595b674ca`](https://github.com/siemens/ix/commit/e8bd3b6301d7553e6a02b79e2925aa0595b674ca), [`aa63b4fd901bc50e98877826699412affa127ae7`](https://github.com/siemens/ix/commit/aa63b4fd901bc50e98877826699412affa127ae7), [`149dfbd6518e94da9e966d06ea2292c8e96772ce`](https://github.com/siemens/ix/commit/149dfbd6518e94da9e966d06ea2292c8e96772ce), [`2e2972260eafb1a87b84e5a705e3c932b15b8467`](https://github.com/siemens/ix/commit/2e2972260eafb1a87b84e5a705e3c932b15b8467), [`9e13a08340efc9cb7dd1f0ef7d56481c8b5dcbbe`](https://github.com/siemens/ix/commit/9e13a08340efc9cb7dd1f0ef7d56481c8b5dcbbe), [`4685dc2c2b0de0961b464d305f633e1115a5926a`](https://github.com/siemens/ix/commit/4685dc2c2b0de0961b464d305f633e1115a5926a), [`8803f3185b8a183926576d9f28894f9e1aa92ec3`](https://github.com/siemens/ix/commit/8803f3185b8a183926576d9f28894f9e1aa92ec3), [`5b56d90813239cb34d28b4c20255392b9dd1d66f`](https://github.com/siemens/ix/commit/5b56d90813239cb34d28b4c20255392b9dd1d66f), [`8b757805d65f62e9296e6d1abd67a8f0b30099f3`](https://github.com/siemens/ix/commit/8b757805d65f62e9296e6d1abd67a8f0b30099f3), [`dd8b3eb28eb162f30c5fef27b369036b3bd6dd8b`](https://github.com/siemens/ix/commit/dd8b3eb28eb162f30c5fef27b369036b3bd6dd8b), [`96c8f78e4d3d4d304b1d5a41504d5b24401ea461`](https://github.com/siemens/ix/commit/96c8f78e4d3d4d304b1d5a41504d5b24401ea461), [`f6fd42a74b42ff0f9f2ffd2b4c2a49fbb4402760`](https://github.com/siemens/ix/commit/f6fd42a74b42ff0f9f2ffd2b4c2a49fbb4402760), [`3d62fffdc107bfc92b2ecad8437662dc7c03796f`](https://github.com/siemens/ix/commit/3d62fffdc107bfc92b2ecad8437662dc7c03796f), [`c9c5bf0451998ce94a57247b974e00176f294437`](https://github.com/siemens/ix/commit/c9c5bf0451998ce94a57247b974e00176f294437), [`093c78352916a193e7f2cbfab692362c4ba0de9a`](https://github.com/siemens/ix/commit/093c78352916a193e7f2cbfab692362c4ba0de9a), [`5a12c6ac20e80a77f9fd3ad9aaffd66468f72b40`](https://github.com/siemens/ix/commit/5a12c6ac20e80a77f9fd3ad9aaffd66468f72b40), [`699958d387c1044b50def5071369f27de49f56ef`](https://github.com/siemens/ix/commit/699958d387c1044b50def5071369f27de49f56ef), [`24f3ad61ab275bf7c9bbd7e9ee84f6b4f7d3b5ff`](https://github.com/siemens/ix/commit/24f3ad61ab275bf7c9bbd7e9ee84f6b4f7d3b5ff), [`f6fd42a74b42ff0f9f2ffd2b4c2a49fbb4402760`](https://github.com/siemens/ix/commit/f6fd42a74b42ff0f9f2ffd2b4c2a49fbb4402760), [`2d4e3b8cdb756dff44627941adfea6a0230ccf26`](https://github.com/siemens/ix/commit/2d4e3b8cdb756dff44627941adfea6a0230ccf26), [`4bdec91e4a837e487caa4a25407f24eb37616531`](https://github.com/siemens/ix/commit/4bdec91e4a837e487caa4a25407f24eb37616531), [`db785bb8a4cc0654104cb24d420b7a1e2d45fdba`](https://github.com/siemens/ix/commit/db785bb8a4cc0654104cb24d420b7a1e2d45fdba), [`b5e2da18f871d6189c064a72bd9b29a82d0685eb`](https://github.com/siemens/ix/commit/b5e2da18f871d6189c064a72bd9b29a82d0685eb), [`db785bb8a4cc0654104cb24d420b7a1e2d45fdba`](https://github.com/siemens/ix/commit/db785bb8a4cc0654104cb24d420b7a1e2d45fdba), [`4685dc2c2b0de0961b464d305f633e1115a5926a`](https://github.com/siemens/ix/commit/4685dc2c2b0de0961b464d305f633e1115a5926a), [`b3846c925ec4f03fd5d26b0b66042185b766f099`](https://github.com/siemens/ix/commit/b3846c925ec4f03fd5d26b0b66042185b766f099), [`8726afc094adf2ddb4f8e927c6a42aa8dc0ed589`](https://github.com/siemens/ix/commit/8726afc094adf2ddb4f8e927c6a42aa8dc0ed589), [`f41b5d60299cb874cec9730394038dd4c2df8a60`](https://github.com/siemens/ix/commit/f41b5d60299cb874cec9730394038dd4c2df8a60), [`699958d387c1044b50def5071369f27de49f56ef`](https://github.com/siemens/ix/commit/699958d387c1044b50def5071369f27de49f56ef), [`d20b43d5f5bd5291b5125b120d2bb2d72286acfd`](https://github.com/siemens/ix/commit/d20b43d5f5bd5291b5125b120d2bb2d72286acfd), [`4685dc2c2b0de0961b464d305f633e1115a5926a`](https://github.com/siemens/ix/commit/4685dc2c2b0de0961b464d305f633e1115a5926a), [`4685dc2c2b0de0961b464d305f633e1115a5926a`](https://github.com/siemens/ix/commit/4685dc2c2b0de0961b464d305f633e1115a5926a), [`e8f825f7f494c8cc05dcce075afcff77839f8096`](https://github.com/siemens/ix/commit/e8f825f7f494c8cc05dcce075afcff77839f8096), [`ac163467de8fc4d943f5366415492a9a02748999`](https://github.com/siemens/ix/commit/ac163467de8fc4d943f5366415492a9a02748999), [`dacbced83d226380c256d868620ee640996cf229`](https://github.com/siemens/ix/commit/dacbced83d226380c256d868620ee640996cf229)]:
  - @siemens/ix@3.0.0-alpha.0
## [](https://github.com/siemens/ix/releases/tag/%40siemens/ix-react%403.0.0-alpha.0) (2025-03-17T14:04:46Z)
## 3.0.0-alpha.0

### Major Changes

- [#1581](https://github.com/siemens/ix/pull/1581) [`7eb4d5147056e1e3252e387e5a718df7e593909e`](https://github.com/siemens/ix/commit/7eb4d5147056e1e3252e387e5a718df7e593909e) Thanks [@matthiashader](https://github.com/matthiashader)! - Component Updates and Enhancements

  New Variants for Card Components:

  - **ix-action-card**, **ix-card**, and **ix-push-card**:
    - The `insight` and `notification` variants have been **replaced by** `outline` and `filled`.

  Property Updates:

  - **ix-chip**:
    - The `color` property has been **replaced by** `chipColor`.
  - **ix-event-list**:
    - The `color` attribute has been **replaced by** `itemColor`.
  - **ix-icon-button**:
    - The `color` attribute has been **replaced by** `iconColor`.
    - Size `32` has been removed.
  - **ix-pill**:
    - The `color` attribute has been **replaced by** `pillColor`.
  - **ix-typography**:
    - The `color` attribute has been **replaced by** `textColor`.
  - **ix-select**:
    - The `selectedIndices` attribute has been **replaced by** `value`.
    - The `itemSelectionChange` event has been **replaced by** `valueChange`.
  - **ix-select-item**:
    - The type of the `value` property type has been updated to `string`.

  Date and Time Picker Enhancements:

  - **ix-date-picker**:
    - Removed attributes: `individual` and `eventDelimiter`.
    - The `textSelectedDate` property has been **replaced by** `i18nDone`.
    - The `done` event has been **replaced by** `dateSelect`.
  - **ix-datetime-picker**:
    - The `textSelectedDate` property has been **replaced by** `i18nDone`.
    - The `done` event has been **replaced by** `dateSelect`.
    - Removed the `eventDelimiter` property.
  - **ix-time-picker**:
    - Removed attributes: `individual` and `showTimeReference`.

  Removed Features:

  - **ix-menu**:
    - Removed the `maxVisibleMenuItems` attribute.
  - **ix-menu-item**:
    - The `tabIcon` attribute has been removed and replaced with `icon`.

  Other Changes:

  - **ix-modal**:
    - The `keyboard` attribute has been **replaced by** `closeOnEscape`.

- [#1326](https://github.com/siemens/ix/pull/1326) [`23307a0bed36c61da3ca3b77bad99d71f8b18f3c`](https://github.com/siemens/ix/commit/23307a0bed36c61da3ca3b77bad99d71f8b18f3c) Thanks [@danielleroux](https://github.com/danielleroux)! - feat(react): remove commonjs support

- [#1238](https://github.com/siemens/ix/pull/1238) [`8803f3185b8a183926576d9f28894f9e1aa92ec3`](https://github.com/siemens/ix/commit/8803f3185b8a183926576d9f28894f9e1aa92ec3) Thanks [@danielleroux](https://github.com/danielleroux)! - feat: reduce bundle size in combination with icons

- [#1394](https://github.com/siemens/ix/pull/1394) [`24f3ad61ab275bf7c9bbd7e9ee84f6b4f7d3b5ff`](https://github.com/siemens/ix/commit/24f3ad61ab275bf7c9bbd7e9ee84f6b4f7d3b5ff) Thanks [@AndreasBerliner](https://github.com/AndreasBerliner)! - refactor: replace internal comments with annotations

### Patch Changes

- Updated dependencies [[`7eb4d5147056e1e3252e387e5a718df7e593909e`](https://github.com/siemens/ix/commit/7eb4d5147056e1e3252e387e5a718df7e593909e), [`e8bd3b6301d7553e6a02b79e2925aa0595b674ca`](https://github.com/siemens/ix/commit/e8bd3b6301d7553e6a02b79e2925aa0595b674ca), [`aa63b4fd901bc50e98877826699412affa127ae7`](https://github.com/siemens/ix/commit/aa63b4fd901bc50e98877826699412affa127ae7), [`149dfbd6518e94da9e966d06ea2292c8e96772ce`](https://github.com/siemens/ix/commit/149dfbd6518e94da9e966d06ea2292c8e96772ce), [`2e2972260eafb1a87b84e5a705e3c932b15b8467`](https://github.com/siemens/ix/commit/2e2972260eafb1a87b84e5a705e3c932b15b8467), [`9e13a08340efc9cb7dd1f0ef7d56481c8b5dcbbe`](https://github.com/siemens/ix/commit/9e13a08340efc9cb7dd1f0ef7d56481c8b5dcbbe), [`4685dc2c2b0de0961b464d305f633e1115a5926a`](https://github.com/siemens/ix/commit/4685dc2c2b0de0961b464d305f633e1115a5926a), [`8803f3185b8a183926576d9f28894f9e1aa92ec3`](https://github.com/siemens/ix/commit/8803f3185b8a183926576d9f28894f9e1aa92ec3), [`5b56d90813239cb34d28b4c20255392b9dd1d66f`](https://github.com/siemens/ix/commit/5b56d90813239cb34d28b4c20255392b9dd1d66f), [`8b757805d65f62e9296e6d1abd67a8f0b30099f3`](https://github.com/siemens/ix/commit/8b757805d65f62e9296e6d1abd67a8f0b30099f3), [`dd8b3eb28eb162f30c5fef27b369036b3bd6dd8b`](https://github.com/siemens/ix/commit/dd8b3eb28eb162f30c5fef27b369036b3bd6dd8b), [`96c8f78e4d3d4d304b1d5a41504d5b24401ea461`](https://github.com/siemens/ix/commit/96c8f78e4d3d4d304b1d5a41504d5b24401ea461), [`f6fd42a74b42ff0f9f2ffd2b4c2a49fbb4402760`](https://github.com/siemens/ix/commit/f6fd42a74b42ff0f9f2ffd2b4c2a49fbb4402760), [`3d62fffdc107bfc92b2ecad8437662dc7c03796f`](https://github.com/siemens/ix/commit/3d62fffdc107bfc92b2ecad8437662dc7c03796f), [`c9c5bf0451998ce94a57247b974e00176f294437`](https://github.com/siemens/ix/commit/c9c5bf0451998ce94a57247b974e00176f294437), [`093c78352916a193e7f2cbfab692362c4ba0de9a`](https://github.com/siemens/ix/commit/093c78352916a193e7f2cbfab692362c4ba0de9a), [`5a12c6ac20e80a77f9fd3ad9aaffd66468f72b40`](https://github.com/siemens/ix/commit/5a12c6ac20e80a77f9fd3ad9aaffd66468f72b40), [`699958d387c1044b50def5071369f27de49f56ef`](https://github.com/siemens/ix/commit/699958d387c1044b50def5071369f27de49f56ef), [`24f3ad61ab275bf7c9bbd7e9ee84f6b4f7d3b5ff`](https://github.com/siemens/ix/commit/24f3ad61ab275bf7c9bbd7e9ee84f6b4f7d3b5ff), [`f6fd42a74b42ff0f9f2ffd2b4c2a49fbb4402760`](https://github.com/siemens/ix/commit/f6fd42a74b42ff0f9f2ffd2b4c2a49fbb4402760), [`2d4e3b8cdb756dff44627941adfea6a0230ccf26`](https://github.com/siemens/ix/commit/2d4e3b8cdb756dff44627941adfea6a0230ccf26), [`4bdec91e4a837e487caa4a25407f24eb37616531`](https://github.com/siemens/ix/commit/4bdec91e4a837e487caa4a25407f24eb37616531), [`db785bb8a4cc0654104cb24d420b7a1e2d45fdba`](https://github.com/siemens/ix/commit/db785bb8a4cc0654104cb24d420b7a1e2d45fdba), [`b5e2da18f871d6189c064a72bd9b29a82d0685eb`](https://github.com/siemens/ix/commit/b5e2da18f871d6189c064a72bd9b29a82d0685eb), [`db785bb8a4cc0654104cb24d420b7a1e2d45fdba`](https://github.com/siemens/ix/commit/db785bb8a4cc0654104cb24d420b7a1e2d45fdba), [`4685dc2c2b0de0961b464d305f633e1115a5926a`](https://github.com/siemens/ix/commit/4685dc2c2b0de0961b464d305f633e1115a5926a), [`b3846c925ec4f03fd5d26b0b66042185b766f099`](https://github.com/siemens/ix/commit/b3846c925ec4f03fd5d26b0b66042185b766f099), [`8726afc094adf2ddb4f8e927c6a42aa8dc0ed589`](https://github.com/siemens/ix/commit/8726afc094adf2ddb4f8e927c6a42aa8dc0ed589), [`f41b5d60299cb874cec9730394038dd4c2df8a60`](https://github.com/siemens/ix/commit/f41b5d60299cb874cec9730394038dd4c2df8a60), [`699958d387c1044b50def5071369f27de49f56ef`](https://github.com/siemens/ix/commit/699958d387c1044b50def5071369f27de49f56ef), [`d20b43d5f5bd5291b5125b120d2bb2d72286acfd`](https://github.com/siemens/ix/commit/d20b43d5f5bd5291b5125b120d2bb2d72286acfd), [`4685dc2c2b0de0961b464d305f633e1115a5926a`](https://github.com/siemens/ix/commit/4685dc2c2b0de0961b464d305f633e1115a5926a), [`4685dc2c2b0de0961b464d305f633e1115a5926a`](https://github.com/siemens/ix/commit/4685dc2c2b0de0961b464d305f633e1115a5926a), [`e8f825f7f494c8cc05dcce075afcff77839f8096`](https://github.com/siemens/ix/commit/e8f825f7f494c8cc05dcce075afcff77839f8096), [`ac163467de8fc4d943f5366415492a9a02748999`](https://github.com/siemens/ix/commit/ac163467de8fc4d943f5366415492a9a02748999), [`dacbced83d226380c256d868620ee640996cf229`](https://github.com/siemens/ix/commit/dacbced83d226380c256d868620ee640996cf229)]:
  - @siemens/ix@3.0.0-alpha.0
## [](https://github.com/siemens/ix/releases/tag/%40siemens/ix-echarts%403.0.0-alpha.0) (2025-03-17T14:04:01Z)
## 3.0.0-alpha.0

### Major Changes

- [#1238](https://github.com/siemens/ix/pull/1238) [`8803f3185b8a183926576d9f28894f9e1aa92ec3`](https://github.com/siemens/ix/commit/8803f3185b8a183926576d9f28894f9e1aa92ec3) Thanks [@danielleroux](https://github.com/danielleroux)! - feat: reduce bundle size in combination with icons
## [@siemens/ix-angular@3.0.0-alpha.0](https://github.com/siemens/ix/releases/tag/%40siemens/ix-angular%403.0.0-alpha.0) (2025-03-14T09:59:00Z)
### Major Changes

-   [#1581](https://github.com/siemens/ix/pull/1581) [`7eb4d5147056e1e3252e387e5a718df7e593909e`](https://github.com/siemens/ix/commit/7eb4d5147056e1e3252e387e5a718df7e593909e) Thanks [@matthiashader](https://github.com/matthiashader)! - Component Updates and Enhancements

    New Variants for Card Components:

    -   **ix-action-card**, **ix-card**, and **ix-push-card**:
        -   The `insight` and `notification` variants have been **replaced by** `outline` and `filled`.

    Property Updates:

    -   **ix-chip**:
        -   The `color` property has been **replaced by** `chipColor`.
    -   **ix-event-list**:
        -   The `color` attribute has been **replaced by** `itemColor`.
    -   **ix-icon-button**:
        -   The `color` attribute has been **replaced by** `iconColor`.
        -   Size `32` has been removed.
    -   **ix-pill**:
        -   The `color` attribute has been **replaced by** `pillColor`.
    -   **ix-typography**:
        -   The `color` attribute has been **replaced by** `textColor`.
    -   **ix-select**:
        -   The `selectedIndices` attribute has been **replaced by** `value`.
        -   The `itemSelectionChange` event has been **replaced by** `valueChange`.
    -   **ix-select-item**:
        -   The type of the `value` property type has been updated to `string`.

    Date and Time Picker Enhancements:

    -   **ix-date-picker**:
        -   Removed attributes: `individual` and `eventDelimiter`.
        -   The `textSelectedDate` property has been **replaced by** `i18nDone`.
        -   The `done` event has been **replaced by** `dateSelect`.
    -   **ix-datetime-picker**:
        -   The `textSelectedDate` property has been **replaced by** `i18nDone`.
        -   The `done` event has been **replaced by** `dateSelect`.
        -   Removed the `eventDelimiter` property.
    -   **ix-time-picker**:
        -   Removed attributes: `individual` and `showTimeReference`.

    Removed Features:

    -   **ix-menu**:
        -   Removed the `maxVisibleMenuItems` attribute.
    -   **ix-menu-item**:
        -   The `tabIcon` attribute has been removed and replaced with `icon`.

    Other Changes:

    -   **ix-modal**:
        -   The `keyboard` attribute has been **replaced by** `closeOnEscape`.

-   [#1325](https://github.com/siemens/ix/pull/1325) [`71411db86c37d5cd0f5f71c4059322ea5e9d6f2d`](https://github.com/siemens/ix/commit/71411db86c37d5cd0f5f71c4059322ea5e9d6f2d) Thanks [@danielleroux](https://github.com/danielleroux)! - feat(angular): change angular compiler version to v17

-   [#1238](https://github.com/siemens/ix/pull/1238) [`8803f3185b8a183926576d9f28894f9e1aa92ec3`](https://github.com/siemens/ix/commit/8803f3185b8a183926576d9f28894f9e1aa92ec3) Thanks [@danielleroux](https://github.com/danielleroux)! - feat: reduce bundle size in combination with icons

-   [#1394](https://github.com/siemens/ix/pull/1394) [`24f3ad61ab275bf7c9bbd7e9ee84f6b4f7d3b5ff`](https://github.com/siemens/ix/commit/24f3ad61ab275bf7c9bbd7e9ee84f6b4f7d3b5ff) Thanks [@AndreasBerliner](https://github.com/AndreasBerliner)! - refactor: replace internal comments with annotations

### Minor Changes

-   [#1697](https://github.com/siemens/ix/pull/1697) [`9e13a08340efc9cb7dd1f0ef7d56481c8b5dcbbe`](https://github.com/siemens/ix/commit/9e13a08340efc9cb7dd1f0ef7d56481c8b5dcbbe) Thanks [@AndreasBerliner](https://github.com/AndreasBerliner)! - `ix-chip` and `ix-pill`: Add property `tooltip-text` to display an `ix-tooltip` with customizable text.

-   [#1676](https://github.com/siemens/ix/pull/1676) [`4685dc2c2b0de0961b464d305f633e1115a5926a`](https://github.com/siemens/ix/commit/4685dc2c2b0de0961b464d305f633e1115a5926a) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - `ix-flip-tile`: Expsose `index` property to allow setting of displayed content and add `toggle` event.

-   [#1325](https://github.com/siemens/ix/pull/1325) [`71411db86c37d5cd0f5f71c4059322ea5e9d6f2d`](https://github.com/siemens/ix/commit/71411db86c37d5cd0f5f71c4059322ea5e9d6f2d) Thanks [@danielleroux](https://github.com/danielleroux)! - feat(angular/standalone): add angular standalone components

-   [#1688](https://github.com/siemens/ix/pull/1688) [`5a12c6ac20e80a77f9fd3ad9aaffd66468f72b40`](https://github.com/siemens/ix/commit/5a12c6ac20e80a77f9fd3ad9aaffd66468f72b40) Thanks [@matthiashader](https://github.com/matthiashader)! - `ix-message-bar`: Event `closedChange` can now be prevented via `event.preventDefault()`.
    An additional event is added to get notified after the close animation of the `ix-message-bar` is finished.

-   [#1676](https://github.com/siemens/ix/pull/1676) [`4685dc2c2b0de0961b464d305f633e1115a5926a`](https://github.com/siemens/ix/commit/4685dc2c2b0de0961b464d305f633e1115a5926a) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - `ix-menu`: Add `openSettings` and `openAbout` events. Event `expandChange` can now be prevented via `event.preventDefault()`.

-   [#1682](https://github.com/siemens/ix/pull/1682) [`f41b5d60299cb874cec9730394038dd4c2df8a60`](https://github.com/siemens/ix/commit/f41b5d60299cb874cec9730394038dd4c2df8a60) Thanks [@danielleroux](https://github.com/danielleroux)! - Add `suppressClassMapping` to value-accessors to prevent that the accessors automatically map `ng-`-classes to `ix-`-classes.

    If `[suppressClassMapping]="true"` you need to control the `ix-`-classes on your own.

    ```html
    <ix-input
      label="Name:"
      formControlName="name"
      [suppressClassMapping]="true"
      [class.ix-invalid]="!form.get('name')!.valid && form.get('name')!.touched"
      required
    >
    </ix-input>
    ```

    `value-accessor` ignores NgControls which are untouched but have `required=true` errors

    Fixes #1638 #1680

-   [#1676](https://github.com/siemens/ix/pull/1676) [`4685dc2c2b0de0961b464d305f633e1115a5926a`](https://github.com/siemens/ix/commit/4685dc2c2b0de0961b464d305f633e1115a5926a) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Add `tabChange` event to `ix-menu-settings` and `ix-menu-about`.

-   [#1760](https://github.com/siemens/ix/pull/1760) [`ac163467de8fc4d943f5366415492a9a02748999`](https://github.com/siemens/ix/commit/ac163467de8fc4d943f5366415492a9a02748999) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - **ix-datetime-picker**: Time selection headline can now be translated via property `i18nTime`.

### Patch Changes

-   Updated dependencies \[[`7eb4d5147056e1e3252e387e5a718df7e593909e`](https://github.com/siemens/ix/commit/7eb4d5147056e1e3252e387e5a718df7e593909e), [`e8bd3b6301d7553e6a02b79e2925aa0595b674ca`](https://github.com/siemens/ix/commit/e8bd3b6301d7553e6a02b79e2925aa0595b674ca), [`aa63b4fd901bc50e98877826699412affa127ae7`](https://github.com/siemens/ix/commit/aa63b4fd901bc50e98877826699412affa127ae7), [`149dfbd6518e94da9e966d06ea2292c8e96772ce`](https://github.com/siemens/ix/commit/149dfbd6518e94da9e966d06ea2292c8e96772ce), [`2e2972260eafb1a87b84e5a705e3c932b15b8467`](https://github.com/siemens/ix/commit/2e2972260eafb1a87b84e5a705e3c932b15b8467), [`9e13a08340efc9cb7dd1f0ef7d56481c8b5dcbbe`](https://github.com/siemens/ix/commit/9e13a08340efc9cb7dd1f0ef7d56481c8b5dcbbe), [`4685dc2c2b0de0961b464d305f633e1115a5926a`](https://github.com/siemens/ix/commit/4685dc2c2b0de0961b464d305f633e1115a5926a), [`8803f3185b8a183926576d9f28894f9e1aa92ec3`](https://github.com/siemens/ix/commit/8803f3185b8a183926576d9f28894f9e1aa92ec3), [`5b56d90813239cb34d28b4c20255392b9dd1d66f`](https://github.com/siemens/ix/commit/5b56d90813239cb34d28b4c20255392b9dd1d66f), [`8b757805d65f62e9296e6d1abd67a8f0b30099f3`](https://github.com/siemens/ix/commit/8b757805d65f62e9296e6d1abd67a8f0b30099f3), [`dd8b3eb28eb162f30c5fef27b369036b3bd6dd8b`](https://github.com/siemens/ix/commit/dd8b3eb28eb162f30c5fef27b369036b3bd6dd8b), [`96c8f78e4d3d4d304b1d5a41504d5b24401ea461`](https://github.com/siemens/ix/commit/96c8f78e4d3d4d304b1d5a41504d5b24401ea461), [`f6fd42a74b42ff0f9f2ffd2b4c2a49fbb4402760`](https://github.com/siemens/ix/commit/f6fd42a74b42ff0f9f2ffd2b4c2a49fbb4402760), [`3d62fffdc107bfc92b2ecad8437662dc7c03796f`](https://github.com/siemens/ix/commit/3d62fffdc107bfc92b2ecad8437662dc7c03796f), [`c9c5bf0451998ce94a57247b974e00176f294437`](https://github.com/siemens/ix/commit/c9c5bf0451998ce94a57247b974e00176f294437), [`093c78352916a193e7f2cbfab692362c4ba0de9a`](https://github.com/siemens/ix/commit/093c78352916a193e7f2cbfab692362c4ba0de9a), [`5a12c6ac20e80a77f9fd3ad9aaffd66468f72b40`](https://github.com/siemens/ix/commit/5a12c6ac20e80a77f9fd3ad9aaffd66468f72b40), [`699958d387c1044b50def5071369f27de49f56ef`](https://github.com/siemens/ix/commit/699958d387c1044b50def5071369f27de49f56ef), [`24f3ad61ab275bf7c9bbd7e9ee84f6b4f7d3b5ff`](https://github.com/siemens/ix/commit/24f3ad61ab275bf7c9bbd7e9ee84f6b4f7d3b5ff), [`f6fd42a74b42ff0f9f2ffd2b4c2a49fbb4402760`](https://github.com/siemens/ix/commit/f6fd42a74b42ff0f9f2ffd2b4c2a49fbb4402760), [`2d4e3b8cdb756dff44627941adfea6a0230ccf26`](https://github.com/siemens/ix/commit/2d4e3b8cdb756dff44627941adfea6a0230ccf26), [`4bdec91e4a837e487caa4a25407f24eb37616531`](https://github.com/siemens/ix/commit/4bdec91e4a837e487caa4a25407f24eb37616531), [`db785bb8a4cc0654104cb24d420b7a1e2d45fdba`](https://github.com/siemens/ix/commit/db785bb8a4cc0654104cb24d420b7a1e2d45fdba), [`b5e2da18f871d6189c064a72bd9b29a82d0685eb`](https://github.com/siemens/ix/commit/b5e2da18f871d6189c064a72bd9b29a82d0685eb), [`db785bb8a4cc0654104cb24d420b7a1e2d45fdba`](https://github.com/siemens/ix/commit/db785bb8a4cc0654104cb24d420b7a1e2d45fdba), [`4685dc2c2b0de0961b464d305f633e1115a5926a`](https://github.com/siemens/ix/commit/4685dc2c2b0de0961b464d305f633e1115a5926a), [`b3846c925ec4f03fd5d26b0b66042185b766f099`](https://github.com/siemens/ix/commit/b3846c925ec4f03fd5d26b0b66042185b766f099), [`8726afc094adf2ddb4f8e927c6a42aa8dc0ed589`](https://github.com/siemens/ix/commit/8726afc094adf2ddb4f8e927c6a42aa8dc0ed589), [`f41b5d60299cb874cec9730394038dd4c2df8a60`](https://github.com/siemens/ix/commit/f41b5d60299cb874cec9730394038dd4c2df8a60), [`699958d387c1044b50def5071369f27de49f56ef`](https://github.com/siemens/ix/commit/699958d387c1044b50def5071369f27de49f56ef), [`d20b43d5f5bd5291b5125b120d2bb2d72286acfd`](https://github.com/siemens/ix/commit/d20b43d5f5bd5291b5125b120d2bb2d72286acfd), [`4685dc2c2b0de0961b464d305f633e1115a5926a`](https://github.com/siemens/ix/commit/4685dc2c2b0de0961b464d305f633e1115a5926a), [`4685dc2c2b0de0961b464d305f633e1115a5926a`](https://github.com/siemens/ix/commit/4685dc2c2b0de0961b464d305f633e1115a5926a), [`e8f825f7f494c8cc05dcce075afcff77839f8096`](https://github.com/siemens/ix/commit/e8f825f7f494c8cc05dcce075afcff77839f8096), [`ac163467de8fc4d943f5366415492a9a02748999`](https://github.com/siemens/ix/commit/ac163467de8fc4d943f5366415492a9a02748999), [`dacbced83d226380c256d868620ee640996cf229`](https://github.com/siemens/ix/commit/dacbced83d226380c256d868620ee640996cf229)]:
    -   @siemens/ix@3.0.0-alpha.0

## [](https://github.com/siemens/ix/releases/tag/%40siemens/ix-aggrid%403.0.0-alpha.0) (2025-03-17T14:03:26Z)
## 3.0.0-alpha.0

### Major Changes

- [#1238](https://github.com/siemens/ix/pull/1238) [`8803f3185b8a183926576d9f28894f9e1aa92ec3`](https://github.com/siemens/ix/commit/8803f3185b8a183926576d9f28894f9e1aa92ec3) Thanks [@danielleroux](https://github.com/danielleroux)! - feat: reduce bundle size in combination with icons

- [#1394](https://github.com/siemens/ix/pull/1394) [`24f3ad61ab275bf7c9bbd7e9ee84f6b4f7d3b5ff`](https://github.com/siemens/ix/commit/24f3ad61ab275bf7c9bbd7e9ee84f6b4f7d3b5ff) Thanks [@AndreasBerliner](https://github.com/AndreasBerliner)! - refactor: replace internal comments with annotations

### Patch Changes

- [#1755](https://github.com/siemens/ix/pull/1755) [`b20f5dab187f627f112780348d6e8fd6c2715f58`](https://github.com/siemens/ix/commit/b20f5dab187f627f112780348d6e8fd6c2715f58) Thanks [@AndreasBerliner](https://github.com/AndreasBerliner)! - **AG Grid**: Improve styling of indeterminate checkbox to be displayed in grid header.

- Updated dependencies [[`7eb4d5147056e1e3252e387e5a718df7e593909e`](https://github.com/siemens/ix/commit/7eb4d5147056e1e3252e387e5a718df7e593909e), [`e8bd3b6301d7553e6a02b79e2925aa0595b674ca`](https://github.com/siemens/ix/commit/e8bd3b6301d7553e6a02b79e2925aa0595b674ca), [`aa63b4fd901bc50e98877826699412affa127ae7`](https://github.com/siemens/ix/commit/aa63b4fd901bc50e98877826699412affa127ae7), [`149dfbd6518e94da9e966d06ea2292c8e96772ce`](https://github.com/siemens/ix/commit/149dfbd6518e94da9e966d06ea2292c8e96772ce), [`2e2972260eafb1a87b84e5a705e3c932b15b8467`](https://github.com/siemens/ix/commit/2e2972260eafb1a87b84e5a705e3c932b15b8467), [`9e13a08340efc9cb7dd1f0ef7d56481c8b5dcbbe`](https://github.com/siemens/ix/commit/9e13a08340efc9cb7dd1f0ef7d56481c8b5dcbbe), [`4685dc2c2b0de0961b464d305f633e1115a5926a`](https://github.com/siemens/ix/commit/4685dc2c2b0de0961b464d305f633e1115a5926a), [`8803f3185b8a183926576d9f28894f9e1aa92ec3`](https://github.com/siemens/ix/commit/8803f3185b8a183926576d9f28894f9e1aa92ec3), [`5b56d90813239cb34d28b4c20255392b9dd1d66f`](https://github.com/siemens/ix/commit/5b56d90813239cb34d28b4c20255392b9dd1d66f), [`8b757805d65f62e9296e6d1abd67a8f0b30099f3`](https://github.com/siemens/ix/commit/8b757805d65f62e9296e6d1abd67a8f0b30099f3), [`dd8b3eb28eb162f30c5fef27b369036b3bd6dd8b`](https://github.com/siemens/ix/commit/dd8b3eb28eb162f30c5fef27b369036b3bd6dd8b), [`96c8f78e4d3d4d304b1d5a41504d5b24401ea461`](https://github.com/siemens/ix/commit/96c8f78e4d3d4d304b1d5a41504d5b24401ea461), [`f6fd42a74b42ff0f9f2ffd2b4c2a49fbb4402760`](https://github.com/siemens/ix/commit/f6fd42a74b42ff0f9f2ffd2b4c2a49fbb4402760), [`3d62fffdc107bfc92b2ecad8437662dc7c03796f`](https://github.com/siemens/ix/commit/3d62fffdc107bfc92b2ecad8437662dc7c03796f), [`c9c5bf0451998ce94a57247b974e00176f294437`](https://github.com/siemens/ix/commit/c9c5bf0451998ce94a57247b974e00176f294437), [`093c78352916a193e7f2cbfab692362c4ba0de9a`](https://github.com/siemens/ix/commit/093c78352916a193e7f2cbfab692362c4ba0de9a), [`5a12c6ac20e80a77f9fd3ad9aaffd66468f72b40`](https://github.com/siemens/ix/commit/5a12c6ac20e80a77f9fd3ad9aaffd66468f72b40), [`699958d387c1044b50def5071369f27de49f56ef`](https://github.com/siemens/ix/commit/699958d387c1044b50def5071369f27de49f56ef), [`24f3ad61ab275bf7c9bbd7e9ee84f6b4f7d3b5ff`](https://github.com/siemens/ix/commit/24f3ad61ab275bf7c9bbd7e9ee84f6b4f7d3b5ff), [`f6fd42a74b42ff0f9f2ffd2b4c2a49fbb4402760`](https://github.com/siemens/ix/commit/f6fd42a74b42ff0f9f2ffd2b4c2a49fbb4402760), [`2d4e3b8cdb756dff44627941adfea6a0230ccf26`](https://github.com/siemens/ix/commit/2d4e3b8cdb756dff44627941adfea6a0230ccf26), [`4bdec91e4a837e487caa4a25407f24eb37616531`](https://github.com/siemens/ix/commit/4bdec91e4a837e487caa4a25407f24eb37616531), [`db785bb8a4cc0654104cb24d420b7a1e2d45fdba`](https://github.com/siemens/ix/commit/db785bb8a4cc0654104cb24d420b7a1e2d45fdba), [`b5e2da18f871d6189c064a72bd9b29a82d0685eb`](https://github.com/siemens/ix/commit/b5e2da18f871d6189c064a72bd9b29a82d0685eb), [`db785bb8a4cc0654104cb24d420b7a1e2d45fdba`](https://github.com/siemens/ix/commit/db785bb8a4cc0654104cb24d420b7a1e2d45fdba), [`4685dc2c2b0de0961b464d305f633e1115a5926a`](https://github.com/siemens/ix/commit/4685dc2c2b0de0961b464d305f633e1115a5926a), [`b3846c925ec4f03fd5d26b0b66042185b766f099`](https://github.com/siemens/ix/commit/b3846c925ec4f03fd5d26b0b66042185b766f099), [`8726afc094adf2ddb4f8e927c6a42aa8dc0ed589`](https://github.com/siemens/ix/commit/8726afc094adf2ddb4f8e927c6a42aa8dc0ed589), [`f41b5d60299cb874cec9730394038dd4c2df8a60`](https://github.com/siemens/ix/commit/f41b5d60299cb874cec9730394038dd4c2df8a60), [`699958d387c1044b50def5071369f27de49f56ef`](https://github.com/siemens/ix/commit/699958d387c1044b50def5071369f27de49f56ef), [`d20b43d5f5bd5291b5125b120d2bb2d72286acfd`](https://github.com/siemens/ix/commit/d20b43d5f5bd5291b5125b120d2bb2d72286acfd), [`4685dc2c2b0de0961b464d305f633e1115a5926a`](https://github.com/siemens/ix/commit/4685dc2c2b0de0961b464d305f633e1115a5926a), [`4685dc2c2b0de0961b464d305f633e1115a5926a`](https://github.com/siemens/ix/commit/4685dc2c2b0de0961b464d305f633e1115a5926a), [`e8f825f7f494c8cc05dcce075afcff77839f8096`](https://github.com/siemens/ix/commit/e8f825f7f494c8cc05dcce075afcff77839f8096), [`ac163467de8fc4d943f5366415492a9a02748999`](https://github.com/siemens/ix/commit/ac163467de8fc4d943f5366415492a9a02748999), [`dacbced83d226380c256d868620ee640996cf229`](https://github.com/siemens/ix/commit/dacbced83d226380c256d868620ee640996cf229)]:
  - @siemens/ix@3.0.0-alpha.0
## [@siemens/ix@2.7.0](https://github.com/siemens/ix/releases/tag/%40siemens/ix%402.7.0) (2025-02-10T14:01:35Z)
### Minor Changes

-   [#1654](https://github.com/siemens/ix/pull/1654) [`07c9f3d66e`](https://github.com/siemens/ix/commit/07c9f3d66e33ee2770dceaf0046fbdb52f882543) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Add openAppSwitch event to **ix-application-header** and **ix-menu**.

-   [#1609](https://github.com/siemens/ix/pull/1609) [`89801b1149`](https://github.com/siemens/ix/commit/89801b1149b18c580a4fee6563638a8883fad2d1) Thanks [@danielleroux](https://github.com/danielleroux)! - Add `meta`-tag feature to disable default load of `@siemens/ix-icons`

    ```html
    <meta name="ix:legacy-icons" content="false" />
    ```

    In addition the warning is removed if no icon component is provided.

-   [#1669](https://github.com/siemens/ix/pull/1669) [`6ce292968e`](https://github.com/siemens/ix/commit/6ce292968ed808e06cde79d459ee8b45a4edc6e4) Thanks [@AndreasBerliner](https://github.com/AndreasBerliner)! - Prevent `ix-select` list items to expand beyond screen width and add properties: dropdown-width + dropdown-max-width

-   [#1635](https://github.com/siemens/ix/pull/1635) [`9a5fff63e6`](https://github.com/siemens/ix/commit/9a5fff63e6230a95ce6f6abfe39c1256fb26b515) Thanks [@matthiashader](https://github.com/matthiashader)! - Add additional button properties to **ix-date-dropdown** and **ix-expanding-search**.

### Patch Changes

-   [#1658](https://github.com/siemens/ix/pull/1658) [`9b91179825`](https://github.com/siemens/ix/commit/9b911798254f74ea16ecb5144bc2a1dc3f4f80ce) Thanks [@AndreasBerliner](https://github.com/AndreasBerliner)! - Adjust `ix-pill` spacing between text + icon and icon only

-   [#1659](https://github.com/siemens/ix/pull/1659) [`d28d62160e`](https://github.com/siemens/ix/commit/d28d62160e69388089dec58040c915ca69749462) Thanks [@matthiashader](https://github.com/matthiashader)! - Fix `ix-select` in editable mode to correctly select a known item when confirmed with Enter.

-   [#1648](https://github.com/siemens/ix/pull/1648) [`1625ddc001`](https://github.com/siemens/ix/commit/1625ddc001b451069a200da171fd1df92846c3a6) Thanks [@AndreasBerliner](https://github.com/AndreasBerliner)! - Fix **ix-select** keyboard navigation and wrap behavior when new items are created

-   [#1652](https://github.com/siemens/ix/pull/1652) [`3f5d0a4f39`](https://github.com/siemens/ix/commit/3f5d0a4f39c589408f8f352a3c9ec039f42190b9) Thanks [@danielleroux](https://github.com/danielleroux)! - Fix the disable state of `ix-checkbox` if `disabled=undefined` is provided.

-   [#1617](https://github.com/siemens/ix/pull/1617) [`e2316d8b6d`](https://github.com/siemens/ix/commit/e2316d8b6d514217b97790f9a86bd1bbf30e7f44) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Automatically expand **ix-menu-category** if nested menu item becomes active.

-   [#1672](https://github.com/siemens/ix/pull/1672) [`4558698209`](https://github.com/siemens/ix/commit/455869820982501461b3d75c3f87fbdcf81fab01) Thanks [@matthiashader](https://github.com/matthiashader)! - Fix initial overlapping between value and end slots on `ix-input`, `ix-number-input` and `ix-date-input`

-   [#1666](https://github.com/siemens/ix/pull/1666) [`0234ccf941`](https://github.com/siemens/ix/commit/0234ccf9419cd6fee18690106405da26d4e50bb6) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Fix padding for **ix-textarea**.

-   [#1665](https://github.com/siemens/ix/pull/1665) [`72dd729926`](https://github.com/siemens/ix/commit/72dd729926578f6f9b78f2268a315b6e7d0d12cc) Thanks [@danielleroux](https://github.com/danielleroux)! - Fix behavior where internal validation logic removes validation classes from `ix-input`, `ix-input-number` etc.

-   [#1651](https://github.com/siemens/ix/pull/1651) [`f3c8ab8b01`](https://github.com/siemens/ix/commit/f3c8ab8b01d6bbdf075f19e998f2aa33bde1d68a) Thanks [@ridvandmrc](https://github.com/ridvandmrc)! - Fix the disable state of `ix-radio` if `disabled=undefined` is provided.

-   [#1621](https://github.com/siemens/ix/pull/1621) [`e263955649`](https://github.com/siemens/ix/commit/e263955649d8377ec592e81dfca1387e04936d94) Thanks [@AndreasBerliner](https://github.com/AndreasBerliner)! - Set correct cursors and handle overflow for **ix-card** and **ix-push-card**.

## [@siemens/ix-vue@2.7.0](https://github.com/siemens/ix/releases/tag/%40siemens/ix-vue%402.7.0) (2025-02-10T14:01:37Z)
### Minor Changes

-   [#1654](https://github.com/siemens/ix/pull/1654) [`07c9f3d66e`](https://github.com/siemens/ix/commit/07c9f3d66e33ee2770dceaf0046fbdb52f882543) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Add openAppSwitch event to **ix-application-header** and **ix-menu**.

-   [#1669](https://github.com/siemens/ix/pull/1669) [`6ce292968e`](https://github.com/siemens/ix/commit/6ce292968ed808e06cde79d459ee8b45a4edc6e4) Thanks [@AndreasBerliner](https://github.com/AndreasBerliner)! - Prevent `ix-select` list items to expand beyond screen width and add properties: dropdown-width + dropdown-max-width

-   [#1635](https://github.com/siemens/ix/pull/1635) [`9a5fff63e6`](https://github.com/siemens/ix/commit/9a5fff63e6230a95ce6f6abfe39c1256fb26b515) Thanks [@matthiashader](https://github.com/matthiashader)! - Add additional button properties to **ix-date-dropdown** and **ix-expanding-search**.

### Patch Changes

-   Updated dependencies \[[`9b91179825`](https://github.com/siemens/ix/commit/9b911798254f74ea16ecb5144bc2a1dc3f4f80ce), [`d28d62160e`](https://github.com/siemens/ix/commit/d28d62160e69388089dec58040c915ca69749462), [`1625ddc001`](https://github.com/siemens/ix/commit/1625ddc001b451069a200da171fd1df92846c3a6), [`07c9f3d66e`](https://github.com/siemens/ix/commit/07c9f3d66e33ee2770dceaf0046fbdb52f882543), [`3f5d0a4f39`](https://github.com/siemens/ix/commit/3f5d0a4f39c589408f8f352a3c9ec039f42190b9), [`89801b1149`](https://github.com/siemens/ix/commit/89801b1149b18c580a4fee6563638a8883fad2d1), [`e2316d8b6d`](https://github.com/siemens/ix/commit/e2316d8b6d514217b97790f9a86bd1bbf30e7f44), [`4558698209`](https://github.com/siemens/ix/commit/455869820982501461b3d75c3f87fbdcf81fab01), [`0234ccf941`](https://github.com/siemens/ix/commit/0234ccf9419cd6fee18690106405da26d4e50bb6), [`6ce292968e`](https://github.com/siemens/ix/commit/6ce292968ed808e06cde79d459ee8b45a4edc6e4), [`72dd729926`](https://github.com/siemens/ix/commit/72dd729926578f6f9b78f2268a315b6e7d0d12cc), [`f3c8ab8b01`](https://github.com/siemens/ix/commit/f3c8ab8b01d6bbdf075f19e998f2aa33bde1d68a), [`9a5fff63e6`](https://github.com/siemens/ix/commit/9a5fff63e6230a95ce6f6abfe39c1256fb26b515), [`e263955649`](https://github.com/siemens/ix/commit/e263955649d8377ec592e81dfca1387e04936d94)]:
    -   @siemens/ix@2.7.0

## [@siemens/ix-react@2.7.0](https://github.com/siemens/ix/releases/tag/%40siemens/ix-react%402.7.0) (2025-02-10T14:01:40Z)
### Patch Changes

-   Updated dependencies \[[`9b91179825`](https://github.com/siemens/ix/commit/9b911798254f74ea16ecb5144bc2a1dc3f4f80ce), [`d28d62160e`](https://github.com/siemens/ix/commit/d28d62160e69388089dec58040c915ca69749462), [`1625ddc001`](https://github.com/siemens/ix/commit/1625ddc001b451069a200da171fd1df92846c3a6), [`07c9f3d66e`](https://github.com/siemens/ix/commit/07c9f3d66e33ee2770dceaf0046fbdb52f882543), [`3f5d0a4f39`](https://github.com/siemens/ix/commit/3f5d0a4f39c589408f8f352a3c9ec039f42190b9), [`89801b1149`](https://github.com/siemens/ix/commit/89801b1149b18c580a4fee6563638a8883fad2d1), [`e2316d8b6d`](https://github.com/siemens/ix/commit/e2316d8b6d514217b97790f9a86bd1bbf30e7f44), [`4558698209`](https://github.com/siemens/ix/commit/455869820982501461b3d75c3f87fbdcf81fab01), [`0234ccf941`](https://github.com/siemens/ix/commit/0234ccf9419cd6fee18690106405da26d4e50bb6), [`6ce292968e`](https://github.com/siemens/ix/commit/6ce292968ed808e06cde79d459ee8b45a4edc6e4), [`72dd729926`](https://github.com/siemens/ix/commit/72dd729926578f6f9b78f2268a315b6e7d0d12cc), [`f3c8ab8b01`](https://github.com/siemens/ix/commit/f3c8ab8b01d6bbdf075f19e998f2aa33bde1d68a), [`9a5fff63e6`](https://github.com/siemens/ix/commit/9a5fff63e6230a95ce6f6abfe39c1256fb26b515), [`e263955649`](https://github.com/siemens/ix/commit/e263955649d8377ec592e81dfca1387e04936d94)]:
    -   @siemens/ix@2.7.0

## [@siemens/ix-angular@2.7.0](https://github.com/siemens/ix/releases/tag/%40siemens/ix-angular%402.7.0) (2025-02-10T14:01:31Z)
### Minor Changes

-   [#1654](https://github.com/siemens/ix/pull/1654) [`07c9f3d66e`](https://github.com/siemens/ix/commit/07c9f3d66e33ee2770dceaf0046fbdb52f882543) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Add openAppSwitch event to **ix-application-header** and **ix-menu**.

-   [#1669](https://github.com/siemens/ix/pull/1669) [`6ce292968e`](https://github.com/siemens/ix/commit/6ce292968ed808e06cde79d459ee8b45a4edc6e4) Thanks [@AndreasBerliner](https://github.com/AndreasBerliner)! - Prevent `ix-select` list items to expand beyond screen width and add properties: dropdown-width + dropdown-max-width

-   [#1635](https://github.com/siemens/ix/pull/1635) [`9a5fff63e6`](https://github.com/siemens/ix/commit/9a5fff63e6230a95ce6f6abfe39c1256fb26b515) Thanks [@matthiashader](https://github.com/matthiashader)! - Add additional button properties to **ix-date-dropdown** and **ix-expanding-search**.

### Patch Changes

-   [#1665](https://github.com/siemens/ix/pull/1665) [`72dd729926`](https://github.com/siemens/ix/commit/72dd729926578f6f9b78f2268a315b6e7d0d12cc) Thanks [@danielleroux](https://github.com/danielleroux)! - Prevent `value-accessor` from removing validation classes if component is not controlled by NgControl

-   Updated dependencies \[[`9b91179825`](https://github.com/siemens/ix/commit/9b911798254f74ea16ecb5144bc2a1dc3f4f80ce), [`d28d62160e`](https://github.com/siemens/ix/commit/d28d62160e69388089dec58040c915ca69749462), [`1625ddc001`](https://github.com/siemens/ix/commit/1625ddc001b451069a200da171fd1df92846c3a6), [`07c9f3d66e`](https://github.com/siemens/ix/commit/07c9f3d66e33ee2770dceaf0046fbdb52f882543), [`3f5d0a4f39`](https://github.com/siemens/ix/commit/3f5d0a4f39c589408f8f352a3c9ec039f42190b9), [`89801b1149`](https://github.com/siemens/ix/commit/89801b1149b18c580a4fee6563638a8883fad2d1), [`e2316d8b6d`](https://github.com/siemens/ix/commit/e2316d8b6d514217b97790f9a86bd1bbf30e7f44), [`4558698209`](https://github.com/siemens/ix/commit/455869820982501461b3d75c3f87fbdcf81fab01), [`0234ccf941`](https://github.com/siemens/ix/commit/0234ccf9419cd6fee18690106405da26d4e50bb6), [`6ce292968e`](https://github.com/siemens/ix/commit/6ce292968ed808e06cde79d459ee8b45a4edc6e4), [`72dd729926`](https://github.com/siemens/ix/commit/72dd729926578f6f9b78f2268a315b6e7d0d12cc), [`f3c8ab8b01`](https://github.com/siemens/ix/commit/f3c8ab8b01d6bbdf075f19e998f2aa33bde1d68a), [`9a5fff63e6`](https://github.com/siemens/ix/commit/9a5fff63e6230a95ce6f6abfe39c1256fb26b515), [`e263955649`](https://github.com/siemens/ix/commit/e263955649d8377ec592e81dfca1387e04936d94)]:
    -   @siemens/ix@2.7.0
