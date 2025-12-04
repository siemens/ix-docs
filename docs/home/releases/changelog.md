---
sidebar_title: Changelog
description: ''
title: Changelog
doc-type: 'banner'
---
## [@siemens/ix@4.1.0](https://github.com/siemens/ix/releases/tag/%40siemens/ix%404.1.0) (2025-12-01T08:25:27Z)
### Minor Changes

-   [#2213](https://github.com/siemens/ix/pull/2213) [`18969f0`](https://github.com/siemens/ix/commit/18969f056eb088f7ef92ae85a2150ee4036d3628) Thanks [@GayatriK2002](https://github.com/GayatriK2002)! - Correct non numeric page value or page value beyond the range of _ix-pagination_. Closes #2144

-   [#2081](https://github.com/siemens/ix/pull/2081) [`1623c19`](https://github.com/siemens/ix/commit/1623c196cde78f8357b2060d28d8658ec4330b56) Thanks [@1307-Dev](https://github.com/1307-Dev)! - Added support for implicit form submission when pressing Enter in `ix-input`, `ix-number-input`, `ix-date-input` and `ix-time-input` forms

-   [#2048](https://github.com/siemens/ix/pull/2048) [`0a23b64`](https://github.com/siemens/ix/commit/0a23b640efc3fc6f10921f29b51d9a1e5a48391e) Thanks [@varun-srinivasa](https://github.com/varun-srinivasa)! - Allow to individually disable button and dropdown button in **ix-split-button**s.

-   [#2062](https://github.com/siemens/ix/pull/2062) [`95523d3`](https://github.com/siemens/ix/commit/95523d3f0db649e66ddc504b8a06d9ed039fe446) Thanks [@lzeiml](https://github.com/lzeiml)! - Add support for numbers in scientific notation (e.g. 1E-2) for **ix-number-input**.

-   [#2062](https://github.com/siemens/ix/pull/2062) [`95523d3`](https://github.com/siemens/ix/commit/95523d3f0db649e66ddc504b8a06d9ed039fe446) Thanks [@lzeiml](https://github.com/lzeiml)! - Add temporary property `allowEmptyValueChange` to **ix-number-input**. Setting this property enables `valueChange` to emit null values.

    Fixes #1968.

-   [#1979](https://github.com/siemens/ix/pull/1979) [`73ebf49`](https://github.com/siemens/ix/commit/73ebf49f5d99b32e21545e544b89da23c54f33d2) Thanks [@hawacodes](https://github.com/hawacodes)! - `ix-select` automatically showing an 'All' chip when all items are selected in multiple mode and `collapse-multiple-selection=true` is provided

### Patch Changes

-   [#2156](https://github.com/siemens/ix/pull/2156) [`6a075cd`](https://github.com/siemens/ix/commit/6a075cd5f33da7dc6d1cbc9ef93f1c8b07a8fa92) Thanks [@lakshmi-priya-b](https://github.com/lakshmi-priya-b)! - Make sure arrow position is correct even after placement of **ix-tooltip** changes.

    Fixes #2076 and #2099.

-   [#2181](https://github.com/siemens/ix/pull/2181) [`1e58f0e`](https://github.com/siemens/ix/commit/1e58f0ecfae98125ff442e921132c846f0c2646f) Thanks [@GayatriK2002](https://github.com/GayatriK2002)! - add `text-alignment` property to input components

-   [#2033](https://github.com/siemens/ix/pull/2033) [`a56c2e1`](https://github.com/siemens/ix/commit/a56c2e14820f288625c9253895ceb21ec3f29ccb) Thanks [@1307-Dev](https://github.com/1307-Dev)! - Prevent empty space if no icon is shown in **category-filter**.

-   [#2171](https://github.com/siemens/ix/pull/2171) [`6bee493`](https://github.com/siemens/ix/commit/6bee4933f7ef777c3aa8db0c724185be57763e32) Thanks [@lakshmi-priya-b](https://github.com/lakshmi-priya-b)! - Prevent showing empty tooltip for inputs if `show-text-as-tooltip=true`. Closes #2147

-   [#2275](https://github.com/siemens/ix/pull/2275) [`7c571f0`](https://github.com/siemens/ix/commit/7c571f064c7c04359f9cc67be6e3d39c144a5580) Thanks [@alexkaduk](https://github.com/alexkaduk)! - Always show underline for **ix-link-button** and HTML anchor tags.

-   [#2208](https://github.com/siemens/ix/pull/2208) [`36b7634`](https://github.com/siemens/ix/commit/36b7634766b3bfbe41220636f62b1cb80742844f) Thanks [@lakshmi-priya-b](https://github.com/lakshmi-priya-b)! - Prevent emitting validityStateChange event if now actual validity is changed. Closes #2095

-   [#2105](https://github.com/siemens/ix/pull/2105) [`d9268c2`](https://github.com/siemens/ix/commit/d9268c24431fb7bf84041b7ae83b10c2abcab2dd) Thanks [@lakshmi-priya-b](https://github.com/lakshmi-priya-b)! - Remove filter from dropdown and input when selecting an item in **ix-select**.

-   [#2189](https://github.com/siemens/ix/pull/2189) [`9954ba9`](https://github.com/siemens/ix/commit/9954ba9f0e0ec12d58c76f628c3ee5e5170d21b8) Thanks [@lakshmi-priya-b](https://github.com/lakshmi-priya-b)! - Update padding and icon alignment of **ix-tooltip**.

-   [#2044](https://github.com/siemens/ix/pull/2044) [`6fb28fa`](https://github.com/siemens/ix/commit/6fb28faee5266639d04b215305716e6191e87de7) Thanks [@Nadim901](https://github.com/Nadim901)! - Prevent `ix-menu-settings` and `ix-menu-about` to trigger tabChange event twice. Fixes #1596

-   [#2080](https://github.com/siemens/ix/pull/2080) [`eb33537`](https://github.com/siemens/ix/commit/eb335371e8969318d379c1ea0891b9aba39a4a1c) Thanks [@GayatriK2002](https://github.com/GayatriK2002)! - Only focus input after user interaction with **ix-category-filter**.

-   [#2269](https://github.com/siemens/ix/pull/2269) [`1cbe35f`](https://github.com/siemens/ix/commit/1cbe35f290d8e746b9900fdcf9b7b0bd05d850d3) Thanks [@alexkaduk](https://github.com/alexkaduk)! - Update layout for **ix-date-picker** and **ix-time-picker**.

## [@siemens/ix-vue@4.1.0](https://github.com/siemens/ix/releases/tag/%40siemens/ix-vue%404.1.0) (2025-12-01T08:25:36Z)
### Minor Changes

-   [#2213](https://github.com/siemens/ix/pull/2213) [`18969f0`](https://github.com/siemens/ix/commit/18969f056eb088f7ef92ae85a2150ee4036d3628) Thanks [@GayatriK2002](https://github.com/GayatriK2002)! - Correct non numeric page value or page value beyond the range of _ix-pagination_. Closes #2144

-   [#2081](https://github.com/siemens/ix/pull/2081) [`1623c19`](https://github.com/siemens/ix/commit/1623c196cde78f8357b2060d28d8658ec4330b56) Thanks [@1307-Dev](https://github.com/1307-Dev)! - Added support for implicit form submission when pressing Enter in `ix-input`, `ix-number-input`, `ix-date-input` and `ix-time-input` forms

-   [#2048](https://github.com/siemens/ix/pull/2048) [`0a23b64`](https://github.com/siemens/ix/commit/0a23b640efc3fc6f10921f29b51d9a1e5a48391e) Thanks [@varun-srinivasa](https://github.com/varun-srinivasa)! - Allow to individually disable button and dropdown button in **ix-split-button**s.

-   [#2062](https://github.com/siemens/ix/pull/2062) [`95523d3`](https://github.com/siemens/ix/commit/95523d3f0db649e66ddc504b8a06d9ed039fe446) Thanks [@lzeiml](https://github.com/lzeiml)! - Add support for numbers in scientific notation (e.g. 1E-2) for **ix-number-input**.

-   [#2159](https://github.com/siemens/ix/pull/2159) [`6c74fdd`](https://github.com/siemens/ix/commit/6c74fdd90debee27309bb0168f42fe17c94a7717) Thanks [@1307-Dev](https://github.com/1307-Dev)! - Add dismissModal function to allow programmatic closing of **ix-modal**s.

-   [#2062](https://github.com/siemens/ix/pull/2062) [`95523d3`](https://github.com/siemens/ix/commit/95523d3f0db649e66ddc504b8a06d9ed039fe446) Thanks [@lzeiml](https://github.com/lzeiml)! - Add temporary property `allowEmptyValueChange` to **ix-number-input**. Setting this property enables `valueChange` to emit null values.

    Fixes #1968.

-   [#1979](https://github.com/siemens/ix/pull/1979) [`73ebf49`](https://github.com/siemens/ix/commit/73ebf49f5d99b32e21545e544b89da23c54f33d2) Thanks [@hawacodes](https://github.com/hawacodes)! - `ix-select` automatically showing an 'All' chip when all items are selected in multiple mode and `collapse-multiple-selection=true` is provided

### Patch Changes

-   [#2181](https://github.com/siemens/ix/pull/2181) [`1e58f0e`](https://github.com/siemens/ix/commit/1e58f0ecfae98125ff442e921132c846f0c2646f) Thanks [@GayatriK2002](https://github.com/GayatriK2002)! - add `text-alignment` property to input components

-   [#2208](https://github.com/siemens/ix/pull/2208) [`36b7634`](https://github.com/siemens/ix/commit/36b7634766b3bfbe41220636f62b1cb80742844f) Thanks [@lakshmi-priya-b](https://github.com/lakshmi-priya-b)! - Prevent emitting validityStateChange event if now actual validity is changed. Closes #2095

-   Updated dependencies \[[`6a075cd`](https://github.com/siemens/ix/commit/6a075cd5f33da7dc6d1cbc9ef93f1c8b07a8fa92), [`18969f0`](https://github.com/siemens/ix/commit/18969f056eb088f7ef92ae85a2150ee4036d3628), [`1623c19`](https://github.com/siemens/ix/commit/1623c196cde78f8357b2060d28d8658ec4330b56), [`1e58f0e`](https://github.com/siemens/ix/commit/1e58f0ecfae98125ff442e921132c846f0c2646f), [`0a23b64`](https://github.com/siemens/ix/commit/0a23b640efc3fc6f10921f29b51d9a1e5a48391e), [`a56c2e1`](https://github.com/siemens/ix/commit/a56c2e14820f288625c9253895ceb21ec3f29ccb), [`95523d3`](https://github.com/siemens/ix/commit/95523d3f0db649e66ddc504b8a06d9ed039fe446), [`6bee493`](https://github.com/siemens/ix/commit/6bee4933f7ef777c3aa8db0c724185be57763e32), [`7c571f0`](https://github.com/siemens/ix/commit/7c571f064c7c04359f9cc67be6e3d39c144a5580), [`36b7634`](https://github.com/siemens/ix/commit/36b7634766b3bfbe41220636f62b1cb80742844f), [`d9268c2`](https://github.com/siemens/ix/commit/d9268c24431fb7bf84041b7ae83b10c2abcab2dd), [`9954ba9`](https://github.com/siemens/ix/commit/9954ba9f0e0ec12d58c76f628c3ee5e5170d21b8), [`6fb28fa`](https://github.com/siemens/ix/commit/6fb28faee5266639d04b215305716e6191e87de7), [`eb33537`](https://github.com/siemens/ix/commit/eb335371e8969318d379c1ea0891b9aba39a4a1c), [`95523d3`](https://github.com/siemens/ix/commit/95523d3f0db649e66ddc504b8a06d9ed039fe446), [`73ebf49`](https://github.com/siemens/ix/commit/73ebf49f5d99b32e21545e544b89da23c54f33d2), [`1cbe35f`](https://github.com/siemens/ix/commit/1cbe35f290d8e746b9900fdcf9b7b0bd05d850d3)]:
    -   @siemens/ix@4.1.0

## [@siemens/ix-react@4.1.0](https://github.com/siemens/ix/releases/tag/%40siemens/ix-react%404.1.0) (2025-12-01T08:25:30Z)
### Minor Changes

-   [#2213](https://github.com/siemens/ix/pull/2213) [`18969f0`](https://github.com/siemens/ix/commit/18969f056eb088f7ef92ae85a2150ee4036d3628) Thanks [@GayatriK2002](https://github.com/GayatriK2002)! - Correct non numeric page value or page value beyond the range of _ix-pagination_. Closes #2144

-   [#2081](https://github.com/siemens/ix/pull/2081) [`1623c19`](https://github.com/siemens/ix/commit/1623c196cde78f8357b2060d28d8658ec4330b56) Thanks [@1307-Dev](https://github.com/1307-Dev)! - Added support for implicit form submission when pressing Enter in `ix-input`, `ix-number-input`, `ix-date-input` and `ix-time-input` forms

-   [#2048](https://github.com/siemens/ix/pull/2048) [`0a23b64`](https://github.com/siemens/ix/commit/0a23b640efc3fc6f10921f29b51d9a1e5a48391e) Thanks [@varun-srinivasa](https://github.com/varun-srinivasa)! - Allow to individually disable button and dropdown button in **ix-split-button**s.

-   [#2062](https://github.com/siemens/ix/pull/2062) [`95523d3`](https://github.com/siemens/ix/commit/95523d3f0db649e66ddc504b8a06d9ed039fe446) Thanks [@lzeiml](https://github.com/lzeiml)! - Add support for numbers in scientific notation (e.g. 1E-2) for **ix-number-input**.

-   [#2159](https://github.com/siemens/ix/pull/2159) [`6c74fdd`](https://github.com/siemens/ix/commit/6c74fdd90debee27309bb0168f42fe17c94a7717) Thanks [@1307-Dev](https://github.com/1307-Dev)! - Add dismissModal function to allow programmatic closing of **ix-modal**s.

-   [#2062](https://github.com/siemens/ix/pull/2062) [`95523d3`](https://github.com/siemens/ix/commit/95523d3f0db649e66ddc504b8a06d9ed039fe446) Thanks [@lzeiml](https://github.com/lzeiml)! - Add temporary property `allowEmptyValueChange` to **ix-number-input**. Setting this property enables `valueChange` to emit null values.

    Fixes #1968.

-   [#1979](https://github.com/siemens/ix/pull/1979) [`73ebf49`](https://github.com/siemens/ix/commit/73ebf49f5d99b32e21545e544b89da23c54f33d2) Thanks [@hawacodes](https://github.com/hawacodes)! - `ix-select` automatically showing an 'All' chip when all items are selected in multiple mode and `collapse-multiple-selection=true` is provided

### Patch Changes

-   [#2181](https://github.com/siemens/ix/pull/2181) [`1e58f0e`](https://github.com/siemens/ix/commit/1e58f0ecfae98125ff442e921132c846f0c2646f) Thanks [@GayatriK2002](https://github.com/GayatriK2002)! - add `text-alignment` property to input components

-   [#2208](https://github.com/siemens/ix/pull/2208) [`36b7634`](https://github.com/siemens/ix/commit/36b7634766b3bfbe41220636f62b1cb80742844f) Thanks [@lakshmi-priya-b](https://github.com/lakshmi-priya-b)! - Prevent emitting validityStateChange event if now actual validity is changed. Closes #2095

-   Updated dependencies \[[`6a075cd`](https://github.com/siemens/ix/commit/6a075cd5f33da7dc6d1cbc9ef93f1c8b07a8fa92), [`18969f0`](https://github.com/siemens/ix/commit/18969f056eb088f7ef92ae85a2150ee4036d3628), [`1623c19`](https://github.com/siemens/ix/commit/1623c196cde78f8357b2060d28d8658ec4330b56), [`1e58f0e`](https://github.com/siemens/ix/commit/1e58f0ecfae98125ff442e921132c846f0c2646f), [`0a23b64`](https://github.com/siemens/ix/commit/0a23b640efc3fc6f10921f29b51d9a1e5a48391e), [`a56c2e1`](https://github.com/siemens/ix/commit/a56c2e14820f288625c9253895ceb21ec3f29ccb), [`95523d3`](https://github.com/siemens/ix/commit/95523d3f0db649e66ddc504b8a06d9ed039fe446), [`6bee493`](https://github.com/siemens/ix/commit/6bee4933f7ef777c3aa8db0c724185be57763e32), [`7c571f0`](https://github.com/siemens/ix/commit/7c571f064c7c04359f9cc67be6e3d39c144a5580), [`36b7634`](https://github.com/siemens/ix/commit/36b7634766b3bfbe41220636f62b1cb80742844f), [`d9268c2`](https://github.com/siemens/ix/commit/d9268c24431fb7bf84041b7ae83b10c2abcab2dd), [`9954ba9`](https://github.com/siemens/ix/commit/9954ba9f0e0ec12d58c76f628c3ee5e5170d21b8), [`6fb28fa`](https://github.com/siemens/ix/commit/6fb28faee5266639d04b215305716e6191e87de7), [`eb33537`](https://github.com/siemens/ix/commit/eb335371e8969318d379c1ea0891b9aba39a4a1c), [`95523d3`](https://github.com/siemens/ix/commit/95523d3f0db649e66ddc504b8a06d9ed039fe446), [`73ebf49`](https://github.com/siemens/ix/commit/73ebf49f5d99b32e21545e544b89da23c54f33d2), [`1cbe35f`](https://github.com/siemens/ix/commit/1cbe35f290d8e746b9900fdcf9b7b0bd05d850d3)]:
    -   @siemens/ix@4.1.0

## [@siemens/ix-docs@4.1.0](https://github.com/siemens/ix/releases/tag/%40siemens/ix-docs%404.1.0) (2025-12-01T08:47:03Z)
# @siemens/ix-docs

## 4.0.0

### Major Changes

-   [#2238](https://github.com/siemens/ix/pull/2238) [`416b278`](https://github.com/siemens/ix/commit/416b278b00a28308829fced379bc9cae0a04caca) Thanks [@danielleroux](https://github.com/danielleroux)! - Init deployment of component documentation as markdown files

## [@siemens/ix-angular@4.1.0](https://github.com/siemens/ix/releases/tag/%40siemens/ix-angular%404.1.0) (2025-12-01T08:25:33Z)
### Minor Changes

-   [#2213](https://github.com/siemens/ix/pull/2213) [`18969f0`](https://github.com/siemens/ix/commit/18969f056eb088f7ef92ae85a2150ee4036d3628) Thanks [@GayatriK2002](https://github.com/GayatriK2002)! - Correct non numeric page value or page value beyond the range of _ix-pagination_. Closes #2144

-   [#2081](https://github.com/siemens/ix/pull/2081) [`1623c19`](https://github.com/siemens/ix/commit/1623c196cde78f8357b2060d28d8658ec4330b56) Thanks [@1307-Dev](https://github.com/1307-Dev)! - Added support for implicit form submission when pressing Enter in `ix-input`, `ix-number-input`, `ix-date-input` and `ix-time-input` forms

-   [#2048](https://github.com/siemens/ix/pull/2048) [`0a23b64`](https://github.com/siemens/ix/commit/0a23b640efc3fc6f10921f29b51d9a1e5a48391e) Thanks [@varun-srinivasa](https://github.com/varun-srinivasa)! - Allow to individually disable button and dropdown button in **ix-split-button**s.

-   [#2062](https://github.com/siemens/ix/pull/2062) [`95523d3`](https://github.com/siemens/ix/commit/95523d3f0db649e66ddc504b8a06d9ed039fe446) Thanks [@lzeiml](https://github.com/lzeiml)! - Add support for numbers in scientific notation (e.g. 1E-2) for **ix-number-input**.

-   [#2159](https://github.com/siemens/ix/pull/2159) [`6c74fdd`](https://github.com/siemens/ix/commit/6c74fdd90debee27309bb0168f42fe17c94a7717) Thanks [@1307-Dev](https://github.com/1307-Dev)! - Add dismissModal function to allow programmatic closing of **ix-modal**s.

-   [#2062](https://github.com/siemens/ix/pull/2062) [`95523d3`](https://github.com/siemens/ix/commit/95523d3f0db649e66ddc504b8a06d9ed039fe446) Thanks [@lzeiml](https://github.com/lzeiml)! - Add temporary property `allowEmptyValueChange` to **ix-number-input**. Setting this property enables `valueChange` to emit null values.

    Fixes #1968.

-   [#1979](https://github.com/siemens/ix/pull/1979) [`73ebf49`](https://github.com/siemens/ix/commit/73ebf49f5d99b32e21545e544b89da23c54f33d2) Thanks [@hawacodes](https://github.com/hawacodes)! - `ix-select` automatically showing an 'All' chip when all items are selected in multiple mode and `collapse-multiple-selection=true` is provided

### Patch Changes

-   [#2181](https://github.com/siemens/ix/pull/2181) [`1e58f0e`](https://github.com/siemens/ix/commit/1e58f0ecfae98125ff442e921132c846f0c2646f) Thanks [@GayatriK2002](https://github.com/GayatriK2002)! - add `text-alignment` property to input components

-   [#2208](https://github.com/siemens/ix/pull/2208) [`36b7634`](https://github.com/siemens/ix/commit/36b7634766b3bfbe41220636f62b1cb80742844f) Thanks [@lakshmi-priya-b](https://github.com/lakshmi-priya-b)! - Prevent emitting validityStateChange event if now actual validity is changed. Closes #2095

-   Updated dependencies \[[`6a075cd`](https://github.com/siemens/ix/commit/6a075cd5f33da7dc6d1cbc9ef93f1c8b07a8fa92), [`18969f0`](https://github.com/siemens/ix/commit/18969f056eb088f7ef92ae85a2150ee4036d3628), [`1623c19`](https://github.com/siemens/ix/commit/1623c196cde78f8357b2060d28d8658ec4330b56), [`1e58f0e`](https://github.com/siemens/ix/commit/1e58f0ecfae98125ff442e921132c846f0c2646f), [`0a23b64`](https://github.com/siemens/ix/commit/0a23b640efc3fc6f10921f29b51d9a1e5a48391e), [`a56c2e1`](https://github.com/siemens/ix/commit/a56c2e14820f288625c9253895ceb21ec3f29ccb), [`95523d3`](https://github.com/siemens/ix/commit/95523d3f0db649e66ddc504b8a06d9ed039fe446), [`6bee493`](https://github.com/siemens/ix/commit/6bee4933f7ef777c3aa8db0c724185be57763e32), [`7c571f0`](https://github.com/siemens/ix/commit/7c571f064c7c04359f9cc67be6e3d39c144a5580), [`36b7634`](https://github.com/siemens/ix/commit/36b7634766b3bfbe41220636f62b1cb80742844f), [`d9268c2`](https://github.com/siemens/ix/commit/d9268c24431fb7bf84041b7ae83b10c2abcab2dd), [`9954ba9`](https://github.com/siemens/ix/commit/9954ba9f0e0ec12d58c76f628c3ee5e5170d21b8), [`6fb28fa`](https://github.com/siemens/ix/commit/6fb28faee5266639d04b215305716e6191e87de7), [`eb33537`](https://github.com/siemens/ix/commit/eb335371e8969318d379c1ea0891b9aba39a4a1c), [`95523d3`](https://github.com/siemens/ix/commit/95523d3f0db649e66ddc504b8a06d9ed039fe446), [`73ebf49`](https://github.com/siemens/ix/commit/73ebf49f5d99b32e21545e544b89da23c54f33d2), [`1cbe35f`](https://github.com/siemens/ix/commit/1cbe35f290d8e746b9900fdcf9b7b0bd05d850d3)]:
    -   @siemens/ix@4.1.0

## [@siemens/ix@4.0.0](https://github.com/siemens/ix/releases/tag/%40siemens/ix%404.0.0) (2025-11-06T16:26:46Z)
### Major Changes

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Renamed property `showItemCount` to `hideItemCount` and changed default value from `true` to `false` in **ix-pagination**.

-   [#2239](https://github.com/siemens/ix/pull/2239) [`e5642cb2e159ef989728ad7494048da771c45bb4`](https://github.com/siemens/ix/commit/e5642cb2e159ef989728ad7494048da771c45bb4) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Remove `ix-basic-navigation` and `ix-map-navigation`

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Renamed property `dismissible` to `persistent` and changed default value from `true` to `false` in **ix-message-bar**.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Renamed `customRangeAllowed` to `customRangeDisabled` and changed default value from `true` to `false` in **ix-date-dropdown**.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Renamed property `autoClose` to `preventAutoClose` and changed the default value from `true` to `false` in **ix-toast**.

-   [#2077](https://github.com/siemens/ix/pull/2077) [`092d491c8dbcba62bade8bc4a3d1e6d4ea6eccad`](https://github.com/siemens/ix/commit/092d491c8dbcba62bade8bc4a3d1e6d4ea6eccad) Thanks [@lzeiml](https://github.com/lzeiml)! - Fixed an issue that caused the content-area in **ix-application** to grow beyond screen width for wide content. For more information check out BREAKING_CHANGES.md

    Added text truncation with ellipsis and a title tooltip to `header-title` and `header-subtitle` in **ix-content-header**.

    Fixes #2010

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Renamed property `collapsed` to `expanded` and event `collapsedChanged` to `expandedChanged`. The `expanded` property's default value is now `false` in **ix-group**.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Renamed `focusable` to `disabled` and changed default value from `true` to `false` in **ix-group-item**.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Renamed `showLogoutButton` to `hideLogoutButton` and changed default value from `true` to `false` in **ix-menu-avatar**.

-   [#2160](https://github.com/siemens/ix/pull/2160) [`7b016f7a85df558c3042d58a88093ecc55cf85be`](https://github.com/siemens/ix/commit/7b016f7a85df558c3042d58a88093ecc55cf85be) Thanks [@danielleroux](https://github.com/danielleroux)! - Rename attribute names for all `i18n-*` properties.

    New name:
    From `i-1-8-n-my-attribute` to `i18n-my-attribute`.

    Components:

    -   `ix-card-list`
    -   `ix-category-filter`
    -   `ix-datetime-picker`
    -   `ix-menu`
    -   `ix-menu-about-news`
    -   `ix-menu-avatar`
    -   `ix-pagination`
    -   `ix-select`
    -   `ix-update`

-   [#2104](https://github.com/siemens/ix/pull/2104) [`aecc8b764bbea9bdc3c9358981201a813074eb48`](https://github.com/siemens/ix/commit/aecc8b764bbea9bdc3c9358981201a813074eb48) Thanks [@danielleroux](https://github.com/danielleroux)! - - Add additional variants `primary`, `secondary`, `tertiary`, `subtle-primary`, `subtle-secondary`, `subtle-tertiary`, `danger-primary`, `danger-secondary` and `danger-tertiary`

    -   Adapt styling of `secondary` variant
    -   Remove **ghost** and **outline** property from `ix-button`, `ix-toggle-button`, `ix-dropdown-button`, `ix-icon-button` and other button components to get replaced with new introduced variants.
    -   Remove button tokens for `ghost` and `outline` variants.

    For more information please read BREAKING_CHANGES for version 4.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Removed deprecated type value `danger` in **ix-message-bar**.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Renamed property `range` to `singleSelection` and changed default value from `true` to `false`in **ix-date-picker** and **ix-datetime-picker**.

-   [#2135](https://github.com/siemens/ix/pull/2135) [`cd31b3cae80618364395e3ce88dd4f0b69b9b0c6`](https://github.com/siemens/ix/commit/cd31b3cae80618364395e3ce88dd4f0b69b9b0c6) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - The **themeSwitcher**'s **setTheme** and **setVariant** methods no longer take a target parameter. Before this parameter was used to specify the target element to set/change the theme configurations on.
    Now all configuration will be made on the HTML tag.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Removed unused **ix-menu** property `enableSettings`.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Changed default value of property `animated` from `true` to `false` in **ix-event-list**.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Renamed `active` to `inactive` and changed default value from `true` to `false` in **ix-chip**.

-   [#2227](https://github.com/siemens/ix/pull/2227) [`f678f19ca6b259ba3d66c49ce53270815b937895`](https://github.com/siemens/ix/commit/f678f19ca6b259ba3d66c49ce53270815b937895) Thanks [@alexkaduk](https://github.com/alexkaduk)! - Remove unused property **offsetBottom** from **ix-menu-about-news**.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - The deprecated properties `showHour`, `showMinutes`, and `showSeconds` have been removed from
    **ix-time-picker** and **ix-datetime-picker**.
    These properties had no effect on the components. Their functionality is already covered by other properties like `time` and `format`.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Renamed property `collapse` to `expanded` and changed default value from `true` to `false` in **ix-push-card**.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Renamed property `repeatCategories` to `uniqueCategories` and changed default value from `true` to `false` in **ix-category-filter**.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Renamed property `ghost` to `subtle` and changed default value from `true` to `false` in **ix-breadcrumb**.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Multiple **ix-modal** boolean properties have been renamed:

    `animation` -> `disableAnimation`
    `backdrop` -> `hideBackdrop`
    `closeOnEscape` -> `disableEscapeClose`

    All used to have a default value of `true`. They all default to `false` now.

-   [#2155](https://github.com/siemens/ix/pull/2155) [`cd14905100a62b9e8ee2eb7e1f357e49e4e4f519`](https://github.com/siemens/ix/commit/cd14905100a62b9e8ee2eb7e1f357e49e4e4f519) Thanks [@danielleroux](https://github.com/danielleroux)! - Introduced new `variant` for **ix-flip-tile**

    BREAKING-CHANGES:

    -   Rename `state`to `variant`
    -   Rename `FlipTileState` to `FlipTileVariant` and renamed type member `none` to `outline`.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Renamed property `standaloneAppearance` to `embedded` and changed default value from `true` to `false` in **ix-time-picker**.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Multiple **ix-breadcrumb-item** properties have been renamed:

    `ghost` -> `subtle`
    `visible` -> `invisible`
    `showChevron` -> `hideChevron`

    All used to have a default value of `true`. They all default to `false` now.

### Minor Changes

-   [#2075](https://github.com/siemens/ix/pull/2075) [`ac23f9ea035f8758b0a8076775ce8b6452f71926`](https://github.com/siemens/ix/commit/ac23f9ea035f8758b0a8076775ce8b6452f71926) Thanks [@danielleroux](https://github.com/danielleroux)! - All components with animations respects the **prefers-reduced-motion** feature and avoid any animation

-   [#2245](https://github.com/siemens/ix/pull/2245) [`8952a1828ba059175226fb71dfe0a9900c5ad851`](https://github.com/siemens/ix/commit/8952a1828ba059175226fb71dfe0a9900c5ad851) Thanks [@alexkaduk](https://github.com/alexkaduk)! - Improve `ix-radio-group` and `ix-radio` to be aligned with w3c pattern

-   [#2155](https://github.com/siemens/ix/pull/2155) [`d6faa3105d70647b1d8f71731c661a8dc29e1b98`](https://github.com/siemens/ix/commit/d6faa3105d70647b1d8f71731c661a8dc29e1b98) Thanks [@danielleroux](https://github.com/danielleroux)! - Introduced new `variant` for **ix-card-accordion**

-   [#2111](https://github.com/siemens/ix/pull/2111) [`ffa50a961498753dde31ba9e77953d966fdcca4d`](https://github.com/siemens/ix/commit/ffa50a961498753dde31ba9e77953d966fdcca4d) Thanks [@danielleroux](https://github.com/danielleroux)! - **ix-pane** improvements:

    -   add `header` slot to additional content inside the header like ix-pills
    -   `closeOnClickOutside` property to close pane if user clicked outside of an pane

-   [#2057](https://github.com/siemens/ix/pull/2057) [`5bd1466e8bd0516b4f28b5bfc0e21752c2e959d4`](https://github.com/siemens/ix/commit/5bd1466e8bd0516b4f28b5bfc0e21752c2e959d4) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Add option `icon-right` to **ix-button** and **ix-toggle-button**

-   [#2068](https://github.com/siemens/ix/pull/2068) [`12951cce1836ec91e784a133cbfdb861c8d2e564`](https://github.com/siemens/ix/commit/12951cce1836ec91e784a133cbfdb861c8d2e564) Thanks [@danielleroux](https://github.com/danielleroux)! - Added new `properties` to **ix-application-header**

    -   `nameSuffix` text to show next to the application name
    -   `companyLogo` an alternative to logo slot just for an image path
    -   `companyAlt` alt property to company logo `img` tag
    -   `appIcon` image path for the app icon
    -   `appIconAlt` alt property of the app icon `img` tag
    -   `hideBottomBorder` disable button border to create an extended header

    Added new `slot` to **ix-application-header**

    -   `secondary` Additional slot to render content. Similar to the default slot the content will be hidden on smaller screens.

    Align basic styling of **ix-application-header** e.g. gaps and margins

-   [#2155](https://github.com/siemens/ix/pull/2155) [`ff575ce5521c0aebcce0c817020121b7d81c4978`](https://github.com/siemens/ix/commit/ff575ce5521c0aebcce0c817020121b7d81c4978) Thanks [@danielleroux](https://github.com/danielleroux)! - Add `outline` and `filled` to **ix-event-list-item**

-   [#2069](https://github.com/siemens/ix/pull/2069) [`62ef59c6b042f87b1e17c22ec55c5b7131692930`](https://github.com/siemens/ix/commit/62ef59c6b042f87b1e17c22ec55c5b7131692930) Thanks [@danielleroux](https://github.com/danielleroux)! - Add `tooltipText` to **ix-menu-item** and **ix-menu-category**

-   [#2115](https://github.com/siemens/ix/pull/2115) [`b5c479fc224b1a02b431b7f4cb5b82e7b8d608bd`](https://github.com/siemens/ix/commit/b5c479fc224b1a02b431b7f4cb5b82e7b8d608bd) Thanks [@philSixZero](https://github.com/philSixZero)! - The **ix-buttpm** component now renders as an anchor (`<a>`) tag when an href property is provided

    -   New properties `target` and `rel` were added to support enhanced link behavior
    -   Related components (**ix-breadcrumb-item**, **ix-menu-item**) were updated to support the `href` property

    Fixes #2011

-   [#2058](https://github.com/siemens/ix/pull/2058) [`f620eb52672cb5208fa971dc4db2861d6ca455d8`](https://github.com/siemens/ix/commit/f620eb52672cb5208fa971dc4db2861d6ca455d8) Thanks [@1307-Dev](https://github.com/1307-Dev)! - Add methods **pause** and **resume** to the `ix-toast`.
    Which make it possible to pause/resume the logic of the autoClose feature.

### Patch Changes

-   [#2207](https://github.com/siemens/ix/pull/2207) [`121ccb7418926b4577dd790c22fe8581d5f7f08c`](https://github.com/siemens/ix/commit/121ccb7418926b4577dd790c22fe8581d5f7f08c) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Correct margin between **ix-toggle** swtich and label.

-   [#2202](https://github.com/siemens/ix/pull/2202) [`00d7577e103ecc6f921677e3b66b0361dd055239`](https://github.com/siemens/ix/commit/00d7577e103ecc6f921677e3b66b0361dd055239) Thanks [@alexkaduk](https://github.com/alexkaduk)! - Prevent weekday texts from getting truncated prematurely in **ix-date-picker**.

-   [#2067](https://github.com/siemens/ix/pull/2067) [`802a4ea2d9ae775e93a73ae51337c8374edfecf3`](https://github.com/siemens/ix/commit/802a4ea2d9ae775e93a73ae51337c8374edfecf3) Thanks [@Nadim901](https://github.com/Nadim901)! - Filter dropdown of **ix-select** even if text input is equal to currently selected item.

    Fixes #1991.

-   [#2188](https://github.com/siemens/ix/pull/2188) [`071d3bf69ab5229f6b937ebfcc9cb6e6b688d022`](https://github.com/siemens/ix/commit/071d3bf69ab5229f6b937ebfcc9cb6e6b688d022) Thanks [@danielleroux](https://github.com/danielleroux)! - Provide fallback ARIA label for header icon in **ix-action-card**.

-   [#2218](https://github.com/siemens/ix/pull/2218) [`cf50694a7c4ae6287d5deb286a3ffc53c072cd22`](https://github.com/siemens/ix/commit/cf50694a7c4ae6287d5deb286a3ffc53c072cd22) Thanks [@alexkaduk](https://github.com/alexkaduk)! - Preserve manual resize dimensions during re-renders of **ix-textarea**.

-   [#2175](https://github.com/siemens/ix/pull/2175) [`113c45e102e0d2cb856701402ce255f5c972752a`](https://github.com/siemens/ix/commit/113c45e102e0d2cb856701402ce255f5c972752a) Thanks [@danielleroux](https://github.com/danielleroux)! - Add thumb border and valid state styling and update design tokens for **ix-toggle**.

-   [#2186](https://github.com/siemens/ix/pull/2186) [`b19621236813a58bec015aed094e1dfeb8b957df`](https://github.com/siemens/ix/commit/b19621236813a58bec015aed094e1dfeb8b957df) Thanks [@danielleroux](https://github.com/danielleroux)! - Improve color contrast for warning state in these components:

    **ix-chip**
    **ix-message-bar**
    **ix-modal**
    **ix-pill**
    **ix-spinner**
    **ix-toast**
    **ix-workflow-steps**

-   [#2237](https://github.com/siemens/ix/pull/2237) [`dfb056a6355b2e13bcba23ecf17217fad1d7d8b9`](https://github.com/siemens/ix/commit/dfb056a6355b2e13bcba23ecf17217fad1d7d8b9) Thanks [@alexkaduk](https://github.com/alexkaduk)! - Delegate focus to nested button for **ix-button**.

-   [#2106](https://github.com/siemens/ix/pull/2106) [`d25492c57edb9e7f60c970cb26de4d5b8bdf8ee8`](https://github.com/siemens/ix/commit/d25492c57edb9e7f60c970cb26de4d5b8bdf8ee8) Thanks [@lzeiml](https://github.com/lzeiml)! - - Fixed validation logic incorrectly treating 0 as an invalid value due to falsy evaluation

    -   Fixed invalid-text not displaying when native HTML5 validation fails (e.g., min/max constraints)

    Fixes #2061

-   [#2092](https://github.com/siemens/ix/pull/2092) [`db2bbf5e55d5f7aca2c9e255dae917b746048d09`](https://github.com/siemens/ix/commit/db2bbf5e55d5f7aca2c9e255dae917b746048d09) Thanks [@lzeiml](https://github.com/lzeiml)! - Fix **theme-switcher** to detect and toggle theme changes on both document.body and document.documentElement.

-   [#1984](https://github.com/siemens/ix/pull/1984) [`ace22d0fd9a126891ef2f6ad60c35751488b81a1`](https://github.com/siemens/ix/commit/ace22d0fd9a126891ef2f6ad60c35751488b81a1) Thanks [@Raghavendra5577](https://github.com/Raghavendra5577)! - Update margins to match design for **ix-toggle**.

-   [#2188](https://github.com/siemens/ix/pull/2188) [`071d3bf69ab5229f6b937ebfcc9cb6e6b688d022`](https://github.com/siemens/ix/commit/071d3bf69ab5229f6b937ebfcc9cb6e6b688d022) Thanks [@danielleroux](https://github.com/danielleroux)! - Update ix-icons to latest version 3.2.0

-   [#2168](https://github.com/siemens/ix/pull/2168) [`39425cad90443e258d43f4b35291877de2590dac`](https://github.com/siemens/ix/commit/39425cad90443e258d43f4b35291877de2590dac) Thanks [@varun-srinivasa](https://github.com/varun-srinivasa)! - Fixed a bug where the **ix-modal** was shown outside the viewport if the user has scrolled down on the page.
    Closes #2083

-   [#1998](https://github.com/siemens/ix/pull/1998) [`a2f040aaf72b90ba230daf747092d1844d7aff6a`](https://github.com/siemens/ix/commit/a2f040aaf72b90ba230daf747092d1844d7aff6a) Thanks [@RamVinayMandal](https://github.com/RamVinayMandal)! - Add header slot to **ix-content-header** to allow adding elements next to title text.

-   [#1928](https://github.com/siemens/ix/pull/1928) [`2fca705485f72455cde6c99fa8d3578cee7bb7c3`](https://github.com/siemens/ix/commit/2fca705485f72455cde6c99fa8d3578cee7bb7c3) Thanks [@Raghavendra5577](https://github.com/Raghavendra5577)! - Increase active area of **ix-radio**

-   [#2143](https://github.com/siemens/ix/pull/2143) [`ac68db8e038872fb4249fa755d5d5f78b4a6d532`](https://github.com/siemens/ix/commit/ac68db8e038872fb4249fa755d5d5f78b4a6d532) Thanks [@lzeiml](https://github.com/lzeiml)! - - Improved documentation for `locale` property in date-picker and date-input components

    -   Added missing `hideHeader` property to time-input
    -   Added missing return types for methods in date-picker and time-picker

-   [#2057](https://github.com/siemens/ix/pull/2057) [`5bd1466e8bd0516b4f28b5bfc0e21752c2e959d4`](https://github.com/siemens/ix/commit/5bd1466e8bd0516b4f28b5bfc0e21752c2e959d4) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Adapt border radius (2px) to fit to latest design specs

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Fix mouse states and focus visualisation for **ix-group** and **ix-group-item**.

-   [#2054](https://github.com/siemens/ix/pull/2054) [`4151d42ccd0a80932593796fb3586c0534faaaaf`](https://github.com/siemens/ix/commit/4151d42ccd0a80932593796fb3586c0534faaaaf) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Decrease vertical gap of **ix-radio** group

-   [#1995](https://github.com/siemens/ix/pull/1995) [`294dbe56899a9f63582af324d4f9b9efd8c5805b`](https://github.com/siemens/ix/commit/294dbe56899a9f63582af324d4f9b9efd8c5805b) Thanks [@lakshmi-priya-b](https://github.com/lakshmi-priya-b)! - Update close button color to match Figma design for:

    -   **ix-category-filter**
    -   **ix-drawer**
    -   **ix-menu-about-news**
    -   **ix-menu-tabs**
    -   **ix-message-bar**
    -   **ix-modal-header**
    -   **ix-pane**
    -   **ix-toast**

-   [#2059](https://github.com/siemens/ix/pull/2059) [`1a2eb220d5fe513b3eda2c880d744d2fa1d44ed9`](https://github.com/siemens/ix/commit/1a2eb220d5fe513b3eda2c880d744d2fa1d44ed9) Thanks [@danielleroux](https://github.com/danielleroux)! - Move safeArea variables to `:root` level

-   [#2118](https://github.com/siemens/ix/pull/2118) [`9b1d1ceb9fc17cd956d60a5e0bf02fb8a1482a06`](https://github.com/siemens/ix/commit/9b1d1ceb9fc17cd956d60a5e0bf02fb8a1482a06) Thanks [@AndreasBerliner](https://github.com/AndreasBerliner)! - Add `aria-labelledby` to **ix-action-card** only when `ariaLabelCard` property is not set and `heading` property is set.

-   [#2191](https://github.com/siemens/ix/pull/2191) [`4e278da029b79548fd97840bd0d89e79b1614a7e`](https://github.com/siemens/ix/commit/4e278da029b79548fd97840bd0d89e79b1614a7e) Thanks [@alexkaduk](https://github.com/alexkaduk)! - Prevent **ix-select** from showing unwanted scrollbar.

    Fixes #2170

-   [#2193](https://github.com/siemens/ix/pull/2193) [`0387086225eb438def5ff7b4956025afd34c7e18`](https://github.com/siemens/ix/commit/0387086225eb438def5ff7b4956025afd34c7e18) Thanks [@alexkaduk](https://github.com/alexkaduk)! - Hide show password button for disabled **ix-input**s of type password.

    Fixes #2180

## [@siemens/ix-vue@4.0.0](https://github.com/siemens/ix/releases/tag/%40siemens/ix-vue%404.0.0) (2025-11-06T16:26:49Z)
### Major Changes

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Renamed property `showItemCount` to `hideItemCount` and changed default value from `true` to `false` in **ix-pagination**.

-   [#2239](https://github.com/siemens/ix/pull/2239) [`e5642cb2e159ef989728ad7494048da771c45bb4`](https://github.com/siemens/ix/commit/e5642cb2e159ef989728ad7494048da771c45bb4) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Remove `ix-basic-navigation` and `ix-map-navigation`

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Renamed property `dismissible` to `persistent` and changed default value from `true` to `false` in **ix-message-bar**.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Renamed `customRangeAllowed` to `customRangeDisabled` and changed default value from `true` to `false` in **ix-date-dropdown**.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Renamed property `autoClose` to `preventAutoClose` and changed the default value from `true` to `false` in **ix-toast**.

-   [#2077](https://github.com/siemens/ix/pull/2077) [`092d491c8dbcba62bade8bc4a3d1e6d4ea6eccad`](https://github.com/siemens/ix/commit/092d491c8dbcba62bade8bc4a3d1e6d4ea6eccad) Thanks [@lzeiml](https://github.com/lzeiml)! - Fixed an issue that caused the content-area in **ix-application** to grow beyond screen width for wide content. For more information check out BREAKING_CHANGES.md

    Added text truncation with ellipsis and a title tooltip to `header-title` and `header-subtitle` in **ix-content-header**.

    Fixes #2010

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Renamed property `collapsed` to `expanded` and event `collapsedChanged` to `expandedChanged`. The `expanded` property's default value is now `false` in **ix-group**.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Renamed `focusable` to `disabled` and changed default value from `true` to `false` in **ix-group-item**.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Renamed `showLogoutButton` to `hideLogoutButton` and changed default value from `true` to `false` in **ix-menu-avatar**.

-   [#2160](https://github.com/siemens/ix/pull/2160) [`7b016f7a85df558c3042d58a88093ecc55cf85be`](https://github.com/siemens/ix/commit/7b016f7a85df558c3042d58a88093ecc55cf85be) Thanks [@danielleroux](https://github.com/danielleroux)! - Rename attribute names for all `i18n-*` properties.

    New name:
    From `i-1-8-n-my-attribute` to `i18n-my-attribute`.

    Components:

    -   `ix-card-list`
    -   `ix-category-filter`
    -   `ix-datetime-picker`
    -   `ix-menu`
    -   `ix-menu-about-news`
    -   `ix-menu-avatar`
    -   `ix-pagination`
    -   `ix-select`
    -   `ix-update`

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Removed deprecated type value `danger` in **ix-message-bar**.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Renamed property `range` to `singleSelection` and changed default value from `true` to `false`in **ix-date-picker** and **ix-datetime-picker**.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Removed unused **ix-menu** property `enableSettings`.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Changed default value of property `animated` from `true` to `false` in **ix-event-list**.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Renamed `active` to `inactive` and changed default value from `true` to `false` in **ix-chip**.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - The deprecated properties `showHour`, `showMinutes`, and `showSeconds` have been removed from
    **ix-time-picker** and **ix-datetime-picker**.
    These properties had no effect on the components. Their functionality is already covered by other properties like `time` and `format`.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Renamed property `collapse` to `expanded` and changed default value from `true` to `false` in **ix-push-card**.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Renamed property `repeatCategories` to `uniqueCategories` and changed default value from `true` to `false` in **ix-category-filter**.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Renamed property `ghost` to `subtle` and changed default value from `true` to `false` in **ix-breadcrumb**.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Multiple **ix-modal** boolean properties have been renamed:

    `animation` -> `disableAnimation`
    `backdrop` -> `hideBackdrop`
    `closeOnEscape` -> `disableEscapeClose`

    All used to have a default value of `true`. They all default to `false` now.

-   [#2155](https://github.com/siemens/ix/pull/2155) [`cd14905100a62b9e8ee2eb7e1f357e49e4e4f519`](https://github.com/siemens/ix/commit/cd14905100a62b9e8ee2eb7e1f357e49e4e4f519) Thanks [@danielleroux](https://github.com/danielleroux)! - Introduced new `variant` for **ix-flip-tile**

    BREAKING-CHANGES:

    -   Rename `state`to `variant`
    -   Rename `FlipTileState` to `FlipTileVariant` and renamed type member `none` to `outline`.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Renamed property `standaloneAppearance` to `embedded` and changed default value from `true` to `false` in **ix-time-picker**.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Multiple **ix-breadcrumb-item** properties have been renamed:

    `ghost` -> `subtle`
    `visible` -> `invisible`
    `showChevron` -> `hideChevron`

    All used to have a default value of `true`. They all default to `false` now.

### Minor Changes

-   [#2075](https://github.com/siemens/ix/pull/2075) [`ac23f9ea035f8758b0a8076775ce8b6452f71926`](https://github.com/siemens/ix/commit/ac23f9ea035f8758b0a8076775ce8b6452f71926) Thanks [@danielleroux](https://github.com/danielleroux)! - All components with animations respects the **prefers-reduced-motion** feature and avoid any animation

-   [#2245](https://github.com/siemens/ix/pull/2245) [`8952a1828ba059175226fb71dfe0a9900c5ad851`](https://github.com/siemens/ix/commit/8952a1828ba059175226fb71dfe0a9900c5ad851) Thanks [@alexkaduk](https://github.com/alexkaduk)! - Improve `ix-radio-group` and `ix-radio` to be aligned with w3c pattern

-   [#2155](https://github.com/siemens/ix/pull/2155) [`d6faa3105d70647b1d8f71731c661a8dc29e1b98`](https://github.com/siemens/ix/commit/d6faa3105d70647b1d8f71731c661a8dc29e1b98) Thanks [@danielleroux](https://github.com/danielleroux)! - Introduced new `variant` for **ix-card-accordion**

-   [#2111](https://github.com/siemens/ix/pull/2111) [`ffa50a961498753dde31ba9e77953d966fdcca4d`](https://github.com/siemens/ix/commit/ffa50a961498753dde31ba9e77953d966fdcca4d) Thanks [@danielleroux](https://github.com/danielleroux)! - **ix-pane** improvements:

    -   add `header` slot to additional content inside the header like ix-pills
    -   `closeOnClickOutside` property to close pane if user clicked outside of an pane

-   [#2057](https://github.com/siemens/ix/pull/2057) [`5bd1466e8bd0516b4f28b5bfc0e21752c2e959d4`](https://github.com/siemens/ix/commit/5bd1466e8bd0516b4f28b5bfc0e21752c2e959d4) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Add option `icon-right` to **ix-button** and **ix-toggle-button**

-   [#2068](https://github.com/siemens/ix/pull/2068) [`12951cce1836ec91e784a133cbfdb861c8d2e564`](https://github.com/siemens/ix/commit/12951cce1836ec91e784a133cbfdb861c8d2e564) Thanks [@danielleroux](https://github.com/danielleroux)! - Added new `properties` to **ix-application-header**

    -   `nameSuffix` text to show next to the application name
    -   `companyLogo` an alternative to logo slot just for an image path
    -   `companyAlt` alt property to company logo `img` tag
    -   `appIcon` image path for the app icon
    -   `appIconAlt` alt property of the app icon `img` tag
    -   `hideBottomBorder` disable button border to create an extended header

    Added new `slot` to **ix-application-header**

    -   `secondary` Additional slot to render content. Similar to the default slot the content will be hidden on smaller screens.

    Align basic styling of **ix-application-header** e.g. gaps and margins

-   [#2155](https://github.com/siemens/ix/pull/2155) [`ff575ce5521c0aebcce0c817020121b7d81c4978`](https://github.com/siemens/ix/commit/ff575ce5521c0aebcce0c817020121b7d81c4978) Thanks [@danielleroux](https://github.com/danielleroux)! - Add `outline` and `filled` to **ix-event-list-item**

-   [#2069](https://github.com/siemens/ix/pull/2069) [`62ef59c6b042f87b1e17c22ec55c5b7131692930`](https://github.com/siemens/ix/commit/62ef59c6b042f87b1e17c22ec55c5b7131692930) Thanks [@danielleroux](https://github.com/danielleroux)! - Add `tooltipText` to **ix-menu-item** and **ix-menu-category**

-   [#2115](https://github.com/siemens/ix/pull/2115) [`b5c479fc224b1a02b431b7f4cb5b82e7b8d608bd`](https://github.com/siemens/ix/commit/b5c479fc224b1a02b431b7f4cb5b82e7b8d608bd) Thanks [@philSixZero](https://github.com/philSixZero)! - The **ix-buttpm** component now renders as an anchor (`<a>`) tag when an href property is provided

    -   New properties `target` and `rel` were added to support enhanced link behavior
    -   Related components (**ix-breadcrumb-item**, **ix-menu-item**) were updated to support the `href` property

    Fixes #2011

-   [#2058](https://github.com/siemens/ix/pull/2058) [`f620eb52672cb5208fa971dc4db2861d6ca455d8`](https://github.com/siemens/ix/commit/f620eb52672cb5208fa971dc4db2861d6ca455d8) Thanks [@1307-Dev](https://github.com/1307-Dev)! - Add methods **pause** and **resume** to the `ix-toast`.
    Which make it possible to pause/resume the logic of the autoClose feature.

### Patch Changes

-   [#2106](https://github.com/siemens/ix/pull/2106) [`d25492c57edb9e7f60c970cb26de4d5b8bdf8ee8`](https://github.com/siemens/ix/commit/d25492c57edb9e7f60c970cb26de4d5b8bdf8ee8) Thanks [@lzeiml](https://github.com/lzeiml)! - - Fixed validation logic incorrectly treating 0 as an invalid value due to falsy evaluation

    -   Fixed invalid-text not displaying when native HTML5 validation fails (e.g., min/max constraints)

    Fixes #2061

-   [#2168](https://github.com/siemens/ix/pull/2168) [`39425cad90443e258d43f4b35291877de2590dac`](https://github.com/siemens/ix/commit/39425cad90443e258d43f4b35291877de2590dac) Thanks [@varun-srinivasa](https://github.com/varun-srinivasa)! - Fixed a bug where the **ix-modal** was shown outside the viewport if the user has scrolled down on the page.
    Closes #2083

-   [#2143](https://github.com/siemens/ix/pull/2143) [`ac68db8e038872fb4249fa755d5d5f78b4a6d532`](https://github.com/siemens/ix/commit/ac68db8e038872fb4249fa755d5d5f78b4a6d532) Thanks [@lzeiml](https://github.com/lzeiml)! - - Improved documentation for `locale` property in date-picker and date-input components
    -   Added missing `hideHeader` property to time-input
    -   Added missing return types for methods in date-picker and time-picker

-   Updated dependencies \[[`121ccb7418926b4577dd790c22fe8581d5f7f08c`](https://github.com/siemens/ix/commit/121ccb7418926b4577dd790c22fe8581d5f7f08c), [`00d7577e103ecc6f921677e3b66b0361dd055239`](https://github.com/siemens/ix/commit/00d7577e103ecc6f921677e3b66b0361dd055239), [`ac23f9ea035f8758b0a8076775ce8b6452f71926`](https://github.com/siemens/ix/commit/ac23f9ea035f8758b0a8076775ce8b6452f71926), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`e5642cb2e159ef989728ad7494048da771c45bb4`](https://github.com/siemens/ix/commit/e5642cb2e159ef989728ad7494048da771c45bb4), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`802a4ea2d9ae775e93a73ae51337c8374edfecf3`](https://github.com/siemens/ix/commit/802a4ea2d9ae775e93a73ae51337c8374edfecf3), [`071d3bf69ab5229f6b937ebfcc9cb6e6b688d022`](https://github.com/siemens/ix/commit/071d3bf69ab5229f6b937ebfcc9cb6e6b688d022), [`cf50694a7c4ae6287d5deb286a3ffc53c072cd22`](https://github.com/siemens/ix/commit/cf50694a7c4ae6287d5deb286a3ffc53c072cd22), [`8952a1828ba059175226fb71dfe0a9900c5ad851`](https://github.com/siemens/ix/commit/8952a1828ba059175226fb71dfe0a9900c5ad851), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`092d491c8dbcba62bade8bc4a3d1e6d4ea6eccad`](https://github.com/siemens/ix/commit/092d491c8dbcba62bade8bc4a3d1e6d4ea6eccad), [`d6faa3105d70647b1d8f71731c661a8dc29e1b98`](https://github.com/siemens/ix/commit/d6faa3105d70647b1d8f71731c661a8dc29e1b98), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`113c45e102e0d2cb856701402ce255f5c972752a`](https://github.com/siemens/ix/commit/113c45e102e0d2cb856701402ce255f5c972752a), [`b19621236813a58bec015aed094e1dfeb8b957df`](https://github.com/siemens/ix/commit/b19621236813a58bec015aed094e1dfeb8b957df), [`dfb056a6355b2e13bcba23ecf17217fad1d7d8b9`](https://github.com/siemens/ix/commit/dfb056a6355b2e13bcba23ecf17217fad1d7d8b9), [`ffa50a961498753dde31ba9e77953d966fdcca4d`](https://github.com/siemens/ix/commit/ffa50a961498753dde31ba9e77953d966fdcca4d), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`5bd1466e8bd0516b4f28b5bfc0e21752c2e959d4`](https://github.com/siemens/ix/commit/5bd1466e8bd0516b4f28b5bfc0e21752c2e959d4), [`12951cce1836ec91e784a133cbfdb861c8d2e564`](https://github.com/siemens/ix/commit/12951cce1836ec91e784a133cbfdb861c8d2e564), [`d25492c57edb9e7f60c970cb26de4d5b8bdf8ee8`](https://github.com/siemens/ix/commit/d25492c57edb9e7f60c970cb26de4d5b8bdf8ee8), [`db2bbf5e55d5f7aca2c9e255dae917b746048d09`](https://github.com/siemens/ix/commit/db2bbf5e55d5f7aca2c9e255dae917b746048d09), [`ace22d0fd9a126891ef2f6ad60c35751488b81a1`](https://github.com/siemens/ix/commit/ace22d0fd9a126891ef2f6ad60c35751488b81a1), [`071d3bf69ab5229f6b937ebfcc9cb6e6b688d022`](https://github.com/siemens/ix/commit/071d3bf69ab5229f6b937ebfcc9cb6e6b688d022), [`7b016f7a85df558c3042d58a88093ecc55cf85be`](https://github.com/siemens/ix/commit/7b016f7a85df558c3042d58a88093ecc55cf85be), [`aecc8b764bbea9bdc3c9358981201a813074eb48`](https://github.com/siemens/ix/commit/aecc8b764bbea9bdc3c9358981201a813074eb48), [`39425cad90443e258d43f4b35291877de2590dac`](https://github.com/siemens/ix/commit/39425cad90443e258d43f4b35291877de2590dac), [`a2f040aaf72b90ba230daf747092d1844d7aff6a`](https://github.com/siemens/ix/commit/a2f040aaf72b90ba230daf747092d1844d7aff6a), [`2fca705485f72455cde6c99fa8d3578cee7bb7c3`](https://github.com/siemens/ix/commit/2fca705485f72455cde6c99fa8d3578cee7bb7c3), [`ac68db8e038872fb4249fa755d5d5f78b4a6d532`](https://github.com/siemens/ix/commit/ac68db8e038872fb4249fa755d5d5f78b4a6d532), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`cd31b3cae80618364395e3ce88dd4f0b69b9b0c6`](https://github.com/siemens/ix/commit/cd31b3cae80618364395e3ce88dd4f0b69b9b0c6), [`5bd1466e8bd0516b4f28b5bfc0e21752c2e959d4`](https://github.com/siemens/ix/commit/5bd1466e8bd0516b4f28b5bfc0e21752c2e959d4), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`4151d42ccd0a80932593796fb3586c0534faaaaf`](https://github.com/siemens/ix/commit/4151d42ccd0a80932593796fb3586c0534faaaaf), [`f678f19ca6b259ba3d66c49ce53270815b937895`](https://github.com/siemens/ix/commit/f678f19ca6b259ba3d66c49ce53270815b937895), [`ff575ce5521c0aebcce0c817020121b7d81c4978`](https://github.com/siemens/ix/commit/ff575ce5521c0aebcce0c817020121b7d81c4978), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`294dbe56899a9f63582af324d4f9b9efd8c5805b`](https://github.com/siemens/ix/commit/294dbe56899a9f63582af324d4f9b9efd8c5805b), [`1a2eb220d5fe513b3eda2c880d744d2fa1d44ed9`](https://github.com/siemens/ix/commit/1a2eb220d5fe513b3eda2c880d744d2fa1d44ed9), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`9b1d1ceb9fc17cd956d60a5e0bf02fb8a1482a06`](https://github.com/siemens/ix/commit/9b1d1ceb9fc17cd956d60a5e0bf02fb8a1482a06), [`4e278da029b79548fd97840bd0d89e79b1614a7e`](https://github.com/siemens/ix/commit/4e278da029b79548fd97840bd0d89e79b1614a7e), [`62ef59c6b042f87b1e17c22ec55c5b7131692930`](https://github.com/siemens/ix/commit/62ef59c6b042f87b1e17c22ec55c5b7131692930), [`0387086225eb438def5ff7b4956025afd34c7e18`](https://github.com/siemens/ix/commit/0387086225eb438def5ff7b4956025afd34c7e18), [`cd14905100a62b9e8ee2eb7e1f357e49e4e4f519`](https://github.com/siemens/ix/commit/cd14905100a62b9e8ee2eb7e1f357e49e4e4f519), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`b5c479fc224b1a02b431b7f4cb5b82e7b8d608bd`](https://github.com/siemens/ix/commit/b5c479fc224b1a02b431b7f4cb5b82e7b8d608bd), [`f620eb52672cb5208fa971dc4db2861d6ca455d8`](https://github.com/siemens/ix/commit/f620eb52672cb5208fa971dc4db2861d6ca455d8)]:
    -   @siemens/ix@4.0.0

## [@siemens/ix-react@4.0.0](https://github.com/siemens/ix/releases/tag/%40siemens/ix-react%404.0.0) (2025-11-06T16:26:43Z)
### Major Changes

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Renamed property `showItemCount` to `hideItemCount` and changed default value from `true` to `false` in **ix-pagination**.

-   [#2239](https://github.com/siemens/ix/pull/2239) [`e5642cb2e159ef989728ad7494048da771c45bb4`](https://github.com/siemens/ix/commit/e5642cb2e159ef989728ad7494048da771c45bb4) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Remove `ix-basic-navigation` and `ix-map-navigation`

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Renamed property `dismissible` to `persistent` and changed default value from `true` to `false` in **ix-message-bar**.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Renamed `customRangeAllowed` to `customRangeDisabled` and changed default value from `true` to `false` in **ix-date-dropdown**.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Renamed property `autoClose` to `preventAutoClose` and changed the default value from `true` to `false` in **ix-toast**.

-   [#2077](https://github.com/siemens/ix/pull/2077) [`092d491c8dbcba62bade8bc4a3d1e6d4ea6eccad`](https://github.com/siemens/ix/commit/092d491c8dbcba62bade8bc4a3d1e6d4ea6eccad) Thanks [@lzeiml](https://github.com/lzeiml)! - Fixed an issue that caused the content-area in **ix-application** to grow beyond screen width for wide content. For more information check out BREAKING_CHANGES.md

    Added text truncation with ellipsis and a title tooltip to `header-title` and `header-subtitle` in **ix-content-header**.

    Fixes #2010

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Renamed property `collapsed` to `expanded` and event `collapsedChanged` to `expandedChanged`. The `expanded` property's default value is now `false` in **ix-group**.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Renamed `focusable` to `disabled` and changed default value from `true` to `false` in **ix-group-item**.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Renamed `showLogoutButton` to `hideLogoutButton` and changed default value from `true` to `false` in **ix-menu-avatar**.

-   [#2160](https://github.com/siemens/ix/pull/2160) [`7b016f7a85df558c3042d58a88093ecc55cf85be`](https://github.com/siemens/ix/commit/7b016f7a85df558c3042d58a88093ecc55cf85be) Thanks [@danielleroux](https://github.com/danielleroux)! - Rename attribute names for all `i18n-*` properties.

    New name:
    From `i-1-8-n-my-attribute` to `i18n-my-attribute`.

    Components:

    -   `ix-card-list`
    -   `ix-category-filter`
    -   `ix-datetime-picker`
    -   `ix-menu`
    -   `ix-menu-about-news`
    -   `ix-menu-avatar`
    -   `ix-pagination`
    -   `ix-select`
    -   `ix-update`

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Removed deprecated type value `danger` in **ix-message-bar**.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Renamed property `range` to `singleSelection` and changed default value from `true` to `false`in **ix-date-picker** and **ix-datetime-picker**.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Removed unused **ix-menu** property `enableSettings`.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Changed default value of property `animated` from `true` to `false` in **ix-event-list**.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Renamed `active` to `inactive` and changed default value from `true` to `false` in **ix-chip**.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - The deprecated properties `showHour`, `showMinutes`, and `showSeconds` have been removed from
    **ix-time-picker** and **ix-datetime-picker**.
    These properties had no effect on the components. Their functionality is already covered by other properties like `time` and `format`.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Renamed property `collapse` to `expanded` and changed default value from `true` to `false` in **ix-push-card**.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Renamed property `repeatCategories` to `uniqueCategories` and changed default value from `true` to `false` in **ix-category-filter**.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Renamed property `ghost` to `subtle` and changed default value from `true` to `false` in **ix-breadcrumb**.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Multiple **ix-modal** boolean properties have been renamed:

    `animation` -> `disableAnimation`
    `backdrop` -> `hideBackdrop`
    `closeOnEscape` -> `disableEscapeClose`

    All used to have a default value of `true`. They all default to `false` now.

-   [#2155](https://github.com/siemens/ix/pull/2155) [`cd14905100a62b9e8ee2eb7e1f357e49e4e4f519`](https://github.com/siemens/ix/commit/cd14905100a62b9e8ee2eb7e1f357e49e4e4f519) Thanks [@danielleroux](https://github.com/danielleroux)! - Introduced new `variant` for **ix-flip-tile**

    BREAKING-CHANGES:

    -   Rename `state`to `variant`
    -   Rename `FlipTileState` to `FlipTileVariant` and renamed type member `none` to `outline`.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Renamed property `standaloneAppearance` to `embedded` and changed default value from `true` to `false` in **ix-time-picker**.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Multiple **ix-breadcrumb-item** properties have been renamed:

    `ghost` -> `subtle`
    `visible` -> `invisible`
    `showChevron` -> `hideChevron`

    All used to have a default value of `true`. They all default to `false` now.

### Minor Changes

-   [#2075](https://github.com/siemens/ix/pull/2075) [`ac23f9ea035f8758b0a8076775ce8b6452f71926`](https://github.com/siemens/ix/commit/ac23f9ea035f8758b0a8076775ce8b6452f71926) Thanks [@danielleroux](https://github.com/danielleroux)! - All components with animations respects the **prefers-reduced-motion** feature and avoid any animation

-   [#2245](https://github.com/siemens/ix/pull/2245) [`8952a1828ba059175226fb71dfe0a9900c5ad851`](https://github.com/siemens/ix/commit/8952a1828ba059175226fb71dfe0a9900c5ad851) Thanks [@alexkaduk](https://github.com/alexkaduk)! - Improve `ix-radio-group` and `ix-radio` to be aligned with w3c pattern

-   [#2155](https://github.com/siemens/ix/pull/2155) [`d6faa3105d70647b1d8f71731c661a8dc29e1b98`](https://github.com/siemens/ix/commit/d6faa3105d70647b1d8f71731c661a8dc29e1b98) Thanks [@danielleroux](https://github.com/danielleroux)! - Introduced new `variant` for **ix-card-accordion**

-   [#2111](https://github.com/siemens/ix/pull/2111) [`ffa50a961498753dde31ba9e77953d966fdcca4d`](https://github.com/siemens/ix/commit/ffa50a961498753dde31ba9e77953d966fdcca4d) Thanks [@danielleroux](https://github.com/danielleroux)! - **ix-pane** improvements:

    -   add `header` slot to additional content inside the header like ix-pills
    -   `closeOnClickOutside` property to close pane if user clicked outside of an pane

-   [#2057](https://github.com/siemens/ix/pull/2057) [`5bd1466e8bd0516b4f28b5bfc0e21752c2e959d4`](https://github.com/siemens/ix/commit/5bd1466e8bd0516b4f28b5bfc0e21752c2e959d4) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Add option `icon-right` to **ix-button** and **ix-toggle-button**

-   [#2068](https://github.com/siemens/ix/pull/2068) [`12951cce1836ec91e784a133cbfdb861c8d2e564`](https://github.com/siemens/ix/commit/12951cce1836ec91e784a133cbfdb861c8d2e564) Thanks [@danielleroux](https://github.com/danielleroux)! - Added new `properties` to **ix-application-header**

    -   `nameSuffix` text to show next to the application name
    -   `companyLogo` an alternative to logo slot just for an image path
    -   `companyAlt` alt property to company logo `img` tag
    -   `appIcon` image path for the app icon
    -   `appIconAlt` alt property of the app icon `img` tag
    -   `hideBottomBorder` disable button border to create an extended header

    Added new `slot` to **ix-application-header**

    -   `secondary` Additional slot to render content. Similar to the default slot the content will be hidden on smaller screens.

    Align basic styling of **ix-application-header** e.g. gaps and margins

-   [#2155](https://github.com/siemens/ix/pull/2155) [`ff575ce5521c0aebcce0c817020121b7d81c4978`](https://github.com/siemens/ix/commit/ff575ce5521c0aebcce0c817020121b7d81c4978) Thanks [@danielleroux](https://github.com/danielleroux)! - Add `outline` and `filled` to **ix-event-list-item**

-   [#2069](https://github.com/siemens/ix/pull/2069) [`62ef59c6b042f87b1e17c22ec55c5b7131692930`](https://github.com/siemens/ix/commit/62ef59c6b042f87b1e17c22ec55c5b7131692930) Thanks [@danielleroux](https://github.com/danielleroux)! - Add `tooltipText` to **ix-menu-item** and **ix-menu-category**

-   [#2115](https://github.com/siemens/ix/pull/2115) [`b5c479fc224b1a02b431b7f4cb5b82e7b8d608bd`](https://github.com/siemens/ix/commit/b5c479fc224b1a02b431b7f4cb5b82e7b8d608bd) Thanks [@philSixZero](https://github.com/philSixZero)! - The **ix-buttpm** component now renders as an anchor (`<a>`) tag when an href property is provided

    -   New properties `target` and `rel` were added to support enhanced link behavior
    -   Related components (**ix-breadcrumb-item**, **ix-menu-item**) were updated to support the `href` property

    Fixes #2011

-   [#2058](https://github.com/siemens/ix/pull/2058) [`f620eb52672cb5208fa971dc4db2861d6ca455d8`](https://github.com/siemens/ix/commit/f620eb52672cb5208fa971dc4db2861d6ca455d8) Thanks [@1307-Dev](https://github.com/1307-Dev)! - Add methods **pause** and **resume** to the `ix-toast`.
    Which make it possible to pause/resume the logic of the autoClose feature.

### Patch Changes

-   [#2148](https://github.com/siemens/ix/pull/2148) [`663cc8ce8ac64e6146cc6e1f457d7d10eb2ff38e`](https://github.com/siemens/ix/commit/663cc8ce8ac64e6146cc6e1f457d7d10eb2ff38e) Thanks [@philSixZero](https://github.com/philSixZero)! - fix `markItemsAsDirty` typo in type definition of **IxTreeProps** to omit native property

-   [#2106](https://github.com/siemens/ix/pull/2106) [`d25492c57edb9e7f60c970cb26de4d5b8bdf8ee8`](https://github.com/siemens/ix/commit/d25492c57edb9e7f60c970cb26de4d5b8bdf8ee8) Thanks [@lzeiml](https://github.com/lzeiml)! - - Fixed validation logic incorrectly treating 0 as an invalid value due to falsy evaluation

    -   Fixed invalid-text not displaying when native HTML5 validation fails (e.g., min/max constraints)

    Fixes #2061

-   [#2168](https://github.com/siemens/ix/pull/2168) [`39425cad90443e258d43f4b35291877de2590dac`](https://github.com/siemens/ix/commit/39425cad90443e258d43f4b35291877de2590dac) Thanks [@varun-srinivasa](https://github.com/varun-srinivasa)! - Fixed a bug where the **ix-modal** was shown outside the viewport if the user has scrolled down on the page.
    Closes #2083

-   [#2143](https://github.com/siemens/ix/pull/2143) [`ac68db8e038872fb4249fa755d5d5f78b4a6d532`](https://github.com/siemens/ix/commit/ac68db8e038872fb4249fa755d5d5f78b4a6d532) Thanks [@lzeiml](https://github.com/lzeiml)! - - Improved documentation for `locale` property in date-picker and date-input components
    -   Added missing `hideHeader` property to time-input
    -   Added missing return types for methods in date-picker and time-picker

-   Updated dependencies \[[`121ccb7418926b4577dd790c22fe8581d5f7f08c`](https://github.com/siemens/ix/commit/121ccb7418926b4577dd790c22fe8581d5f7f08c), [`00d7577e103ecc6f921677e3b66b0361dd055239`](https://github.com/siemens/ix/commit/00d7577e103ecc6f921677e3b66b0361dd055239), [`ac23f9ea035f8758b0a8076775ce8b6452f71926`](https://github.com/siemens/ix/commit/ac23f9ea035f8758b0a8076775ce8b6452f71926), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`e5642cb2e159ef989728ad7494048da771c45bb4`](https://github.com/siemens/ix/commit/e5642cb2e159ef989728ad7494048da771c45bb4), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`802a4ea2d9ae775e93a73ae51337c8374edfecf3`](https://github.com/siemens/ix/commit/802a4ea2d9ae775e93a73ae51337c8374edfecf3), [`071d3bf69ab5229f6b937ebfcc9cb6e6b688d022`](https://github.com/siemens/ix/commit/071d3bf69ab5229f6b937ebfcc9cb6e6b688d022), [`cf50694a7c4ae6287d5deb286a3ffc53c072cd22`](https://github.com/siemens/ix/commit/cf50694a7c4ae6287d5deb286a3ffc53c072cd22), [`8952a1828ba059175226fb71dfe0a9900c5ad851`](https://github.com/siemens/ix/commit/8952a1828ba059175226fb71dfe0a9900c5ad851), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`092d491c8dbcba62bade8bc4a3d1e6d4ea6eccad`](https://github.com/siemens/ix/commit/092d491c8dbcba62bade8bc4a3d1e6d4ea6eccad), [`d6faa3105d70647b1d8f71731c661a8dc29e1b98`](https://github.com/siemens/ix/commit/d6faa3105d70647b1d8f71731c661a8dc29e1b98), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`113c45e102e0d2cb856701402ce255f5c972752a`](https://github.com/siemens/ix/commit/113c45e102e0d2cb856701402ce255f5c972752a), [`b19621236813a58bec015aed094e1dfeb8b957df`](https://github.com/siemens/ix/commit/b19621236813a58bec015aed094e1dfeb8b957df), [`dfb056a6355b2e13bcba23ecf17217fad1d7d8b9`](https://github.com/siemens/ix/commit/dfb056a6355b2e13bcba23ecf17217fad1d7d8b9), [`ffa50a961498753dde31ba9e77953d966fdcca4d`](https://github.com/siemens/ix/commit/ffa50a961498753dde31ba9e77953d966fdcca4d), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`5bd1466e8bd0516b4f28b5bfc0e21752c2e959d4`](https://github.com/siemens/ix/commit/5bd1466e8bd0516b4f28b5bfc0e21752c2e959d4), [`12951cce1836ec91e784a133cbfdb861c8d2e564`](https://github.com/siemens/ix/commit/12951cce1836ec91e784a133cbfdb861c8d2e564), [`d25492c57edb9e7f60c970cb26de4d5b8bdf8ee8`](https://github.com/siemens/ix/commit/d25492c57edb9e7f60c970cb26de4d5b8bdf8ee8), [`db2bbf5e55d5f7aca2c9e255dae917b746048d09`](https://github.com/siemens/ix/commit/db2bbf5e55d5f7aca2c9e255dae917b746048d09), [`ace22d0fd9a126891ef2f6ad60c35751488b81a1`](https://github.com/siemens/ix/commit/ace22d0fd9a126891ef2f6ad60c35751488b81a1), [`071d3bf69ab5229f6b937ebfcc9cb6e6b688d022`](https://github.com/siemens/ix/commit/071d3bf69ab5229f6b937ebfcc9cb6e6b688d022), [`7b016f7a85df558c3042d58a88093ecc55cf85be`](https://github.com/siemens/ix/commit/7b016f7a85df558c3042d58a88093ecc55cf85be), [`aecc8b764bbea9bdc3c9358981201a813074eb48`](https://github.com/siemens/ix/commit/aecc8b764bbea9bdc3c9358981201a813074eb48), [`39425cad90443e258d43f4b35291877de2590dac`](https://github.com/siemens/ix/commit/39425cad90443e258d43f4b35291877de2590dac), [`a2f040aaf72b90ba230daf747092d1844d7aff6a`](https://github.com/siemens/ix/commit/a2f040aaf72b90ba230daf747092d1844d7aff6a), [`2fca705485f72455cde6c99fa8d3578cee7bb7c3`](https://github.com/siemens/ix/commit/2fca705485f72455cde6c99fa8d3578cee7bb7c3), [`ac68db8e038872fb4249fa755d5d5f78b4a6d532`](https://github.com/siemens/ix/commit/ac68db8e038872fb4249fa755d5d5f78b4a6d532), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`cd31b3cae80618364395e3ce88dd4f0b69b9b0c6`](https://github.com/siemens/ix/commit/cd31b3cae80618364395e3ce88dd4f0b69b9b0c6), [`5bd1466e8bd0516b4f28b5bfc0e21752c2e959d4`](https://github.com/siemens/ix/commit/5bd1466e8bd0516b4f28b5bfc0e21752c2e959d4), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`4151d42ccd0a80932593796fb3586c0534faaaaf`](https://github.com/siemens/ix/commit/4151d42ccd0a80932593796fb3586c0534faaaaf), [`f678f19ca6b259ba3d66c49ce53270815b937895`](https://github.com/siemens/ix/commit/f678f19ca6b259ba3d66c49ce53270815b937895), [`ff575ce5521c0aebcce0c817020121b7d81c4978`](https://github.com/siemens/ix/commit/ff575ce5521c0aebcce0c817020121b7d81c4978), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`294dbe56899a9f63582af324d4f9b9efd8c5805b`](https://github.com/siemens/ix/commit/294dbe56899a9f63582af324d4f9b9efd8c5805b), [`1a2eb220d5fe513b3eda2c880d744d2fa1d44ed9`](https://github.com/siemens/ix/commit/1a2eb220d5fe513b3eda2c880d744d2fa1d44ed9), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`9b1d1ceb9fc17cd956d60a5e0bf02fb8a1482a06`](https://github.com/siemens/ix/commit/9b1d1ceb9fc17cd956d60a5e0bf02fb8a1482a06), [`4e278da029b79548fd97840bd0d89e79b1614a7e`](https://github.com/siemens/ix/commit/4e278da029b79548fd97840bd0d89e79b1614a7e), [`62ef59c6b042f87b1e17c22ec55c5b7131692930`](https://github.com/siemens/ix/commit/62ef59c6b042f87b1e17c22ec55c5b7131692930), [`0387086225eb438def5ff7b4956025afd34c7e18`](https://github.com/siemens/ix/commit/0387086225eb438def5ff7b4956025afd34c7e18), [`cd14905100a62b9e8ee2eb7e1f357e49e4e4f519`](https://github.com/siemens/ix/commit/cd14905100a62b9e8ee2eb7e1f357e49e4e4f519), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`b5c479fc224b1a02b431b7f4cb5b82e7b8d608bd`](https://github.com/siemens/ix/commit/b5c479fc224b1a02b431b7f4cb5b82e7b8d608bd), [`f620eb52672cb5208fa971dc4db2861d6ca455d8`](https://github.com/siemens/ix/commit/f620eb52672cb5208fa971dc4db2861d6ca455d8)]:
    -   @siemens/ix@4.0.0

## [@siemens/ix-docs@4.0.0](https://github.com/siemens/ix/releases/tag/%40siemens/ix-docs%404.0.0) (2025-11-06T16:26:37Z)
### Major Changes

-   [#2238](https://github.com/siemens/ix/pull/2238) [`416b278`](https://github.com/siemens/ix/commit/416b278b00a28308829fced379bc9cae0a04caca) Thanks [@danielleroux](https://github.com/danielleroux)! - Init deployment of component documentation as markdown files

## [@siemens/ix-angular@4.0.0](https://github.com/siemens/ix/releases/tag/%40siemens/ix-angular%404.0.0) (2025-11-06T16:26:52Z)
### Major Changes

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Renamed property `showItemCount` to `hideItemCount` and changed default value from `true` to `false` in **ix-pagination**.

-   [#2239](https://github.com/siemens/ix/pull/2239) [`e5642cb2e159ef989728ad7494048da771c45bb4`](https://github.com/siemens/ix/commit/e5642cb2e159ef989728ad7494048da771c45bb4) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Remove `ix-basic-navigation` and `ix-map-navigation`

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Renamed property `dismissible` to `persistent` and changed default value from `true` to `false` in **ix-message-bar**.

-   [#2042](https://github.com/siemens/ix/pull/2042) [`74377310d673af2219ae3ea2291e98f8b30fce2f`](https://github.com/siemens/ix/commit/74377310d673af2219ae3ea2291e98f8b30fce2f) Thanks [@danielleroux](https://github.com/danielleroux)! - Require peerDependencies to angular to be >= 20

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Renamed `customRangeAllowed` to `customRangeDisabled` and changed default value from `true` to `false` in **ix-date-dropdown**.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Renamed property `autoClose` to `preventAutoClose` and changed the default value from `true` to `false` in **ix-toast**.

-   [#2077](https://github.com/siemens/ix/pull/2077) [`092d491c8dbcba62bade8bc4a3d1e6d4ea6eccad`](https://github.com/siemens/ix/commit/092d491c8dbcba62bade8bc4a3d1e6d4ea6eccad) Thanks [@lzeiml](https://github.com/lzeiml)! - Fixed an issue that caused the content-area in **ix-application** to grow beyond screen width for wide content. For more information check out BREAKING_CHANGES.md

    Added text truncation with ellipsis and a title tooltip to `header-title` and `header-subtitle` in **ix-content-header**.

    Fixes #2010

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Renamed property `collapsed` to `expanded` and event `collapsedChanged` to `expandedChanged`. The `expanded` property's default value is now `false` in **ix-group**.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Renamed `focusable` to `disabled` and changed default value from `true` to `false` in **ix-group-item**.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Renamed `showLogoutButton` to `hideLogoutButton` and changed default value from `true` to `false` in **ix-menu-avatar**.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - The deprecated Angular-specific theme switcher service has been removed. Use the theme switcher from `@siemens/ix` instead of the Angular-specific service.

-   [#2160](https://github.com/siemens/ix/pull/2160) [`7b016f7a85df558c3042d58a88093ecc55cf85be`](https://github.com/siemens/ix/commit/7b016f7a85df558c3042d58a88093ecc55cf85be) Thanks [@danielleroux](https://github.com/danielleroux)! - Rename attribute names for all `i18n-*` properties.

    New name:
    From `i-1-8-n-my-attribute` to `i18n-my-attribute`.

    Components:

    -   `ix-card-list`
    -   `ix-category-filter`
    -   `ix-datetime-picker`
    -   `ix-menu`
    -   `ix-menu-about-news`
    -   `ix-menu-avatar`
    -   `ix-pagination`
    -   `ix-select`
    -   `ix-update`

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Removed deprecated type value `danger` in **ix-message-bar**.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Renamed property `range` to `singleSelection` and changed default value from `true` to `false`in **ix-date-picker** and **ix-datetime-picker**.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Removed unused **ix-menu** property `enableSettings`.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Changed default value of property `animated` from `true` to `false` in **ix-event-list**.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Renamed `active` to `inactive` and changed default value from `true` to `false` in **ix-chip**.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - The deprecated properties `showHour`, `showMinutes`, and `showSeconds` have been removed from
    **ix-time-picker** and **ix-datetime-picker**.
    These properties had no effect on the components. Their functionality is already covered by other properties like `time` and `format`.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Renamed property `collapse` to `expanded` and changed default value from `true` to `false` in **ix-push-card**.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Renamed property `repeatCategories` to `uniqueCategories` and changed default value from `true` to `false` in **ix-category-filter**.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Renamed property `ghost` to `subtle` and changed default value from `true` to `false` in **ix-breadcrumb**.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Multiple **ix-modal** boolean properties have been renamed:

    `animation` -> `disableAnimation`
    `backdrop` -> `hideBackdrop`
    `closeOnEscape` -> `disableEscapeClose`

    All used to have a default value of `true`. They all default to `false` now.

-   [#2155](https://github.com/siemens/ix/pull/2155) [`cd14905100a62b9e8ee2eb7e1f357e49e4e4f519`](https://github.com/siemens/ix/commit/cd14905100a62b9e8ee2eb7e1f357e49e4e4f519) Thanks [@danielleroux](https://github.com/danielleroux)! - Introduced new `variant` for **ix-flip-tile**

    BREAKING-CHANGES:

    -   Rename `state`to `variant`
    -   Rename `FlipTileState` to `FlipTileVariant` and renamed type member `none` to `outline`.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Renamed property `standaloneAppearance` to `embedded` and changed default value from `true` to `false` in **ix-time-picker**.

-   [#2166](https://github.com/siemens/ix/pull/2166) [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Multiple **ix-breadcrumb-item** properties have been renamed:

    `ghost` -> `subtle`
    `visible` -> `invisible`
    `showChevron` -> `hideChevron`

    All used to have a default value of `true`. They all default to `false` now.

### Minor Changes

-   [#2075](https://github.com/siemens/ix/pull/2075) [`ac23f9ea035f8758b0a8076775ce8b6452f71926`](https://github.com/siemens/ix/commit/ac23f9ea035f8758b0a8076775ce8b6452f71926) Thanks [@danielleroux](https://github.com/danielleroux)! - All components with animations respects the **prefers-reduced-motion** feature and avoid any animation

-   [#2245](https://github.com/siemens/ix/pull/2245) [`8952a1828ba059175226fb71dfe0a9900c5ad851`](https://github.com/siemens/ix/commit/8952a1828ba059175226fb71dfe0a9900c5ad851) Thanks [@alexkaduk](https://github.com/alexkaduk)! - Improve `ix-radio-group` and `ix-radio` to be aligned with w3c pattern

-   [#2155](https://github.com/siemens/ix/pull/2155) [`d6faa3105d70647b1d8f71731c661a8dc29e1b98`](https://github.com/siemens/ix/commit/d6faa3105d70647b1d8f71731c661a8dc29e1b98) Thanks [@danielleroux](https://github.com/danielleroux)! - Introduced new `variant` for **ix-card-accordion**

-   [#2111](https://github.com/siemens/ix/pull/2111) [`ffa50a961498753dde31ba9e77953d966fdcca4d`](https://github.com/siemens/ix/commit/ffa50a961498753dde31ba9e77953d966fdcca4d) Thanks [@danielleroux](https://github.com/danielleroux)! - **ix-pane** improvements:

    -   add `header` slot to additional content inside the header like ix-pills
    -   `closeOnClickOutside` property to close pane if user clicked outside of an pane

-   [#2057](https://github.com/siemens/ix/pull/2057) [`5bd1466e8bd0516b4f28b5bfc0e21752c2e959d4`](https://github.com/siemens/ix/commit/5bd1466e8bd0516b4f28b5bfc0e21752c2e959d4) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Add option `icon-right` to **ix-button** and **ix-toggle-button**

-   [#2068](https://github.com/siemens/ix/pull/2068) [`12951cce1836ec91e784a133cbfdb861c8d2e564`](https://github.com/siemens/ix/commit/12951cce1836ec91e784a133cbfdb861c8d2e564) Thanks [@danielleroux](https://github.com/danielleroux)! - Added new `properties` to **ix-application-header**

    -   `nameSuffix` text to show next to the application name
    -   `companyLogo` an alternative to logo slot just for an image path
    -   `companyAlt` alt property to company logo `img` tag
    -   `appIcon` image path for the app icon
    -   `appIconAlt` alt property of the app icon `img` tag
    -   `hideBottomBorder` disable button border to create an extended header

    Added new `slot` to **ix-application-header**

    -   `secondary` Additional slot to render content. Similar to the default slot the content will be hidden on smaller screens.

    Align basic styling of **ix-application-header** e.g. gaps and margins

-   [#2155](https://github.com/siemens/ix/pull/2155) [`ff575ce5521c0aebcce0c817020121b7d81c4978`](https://github.com/siemens/ix/commit/ff575ce5521c0aebcce0c817020121b7d81c4978) Thanks [@danielleroux](https://github.com/danielleroux)! - Add `outline` and `filled` to **ix-event-list-item**

-   [#2069](https://github.com/siemens/ix/pull/2069) [`62ef59c6b042f87b1e17c22ec55c5b7131692930`](https://github.com/siemens/ix/commit/62ef59c6b042f87b1e17c22ec55c5b7131692930) Thanks [@danielleroux](https://github.com/danielleroux)! - Add `tooltipText` to **ix-menu-item** and **ix-menu-category**

-   [#2115](https://github.com/siemens/ix/pull/2115) [`b5c479fc224b1a02b431b7f4cb5b82e7b8d608bd`](https://github.com/siemens/ix/commit/b5c479fc224b1a02b431b7f4cb5b82e7b8d608bd) Thanks [@philSixZero](https://github.com/philSixZero)! - The **ix-buttpm** component now renders as an anchor (`<a>`) tag when an href property is provided

    -   New properties `target` and `rel` were added to support enhanced link behavior
    -   Related components (**ix-breadcrumb-item**, **ix-menu-item**) were updated to support the `href` property

    Fixes #2011

-   [#2058](https://github.com/siemens/ix/pull/2058) [`f620eb52672cb5208fa971dc4db2861d6ca455d8`](https://github.com/siemens/ix/commit/f620eb52672cb5208fa971dc4db2861d6ca455d8) Thanks [@1307-Dev](https://github.com/1307-Dev)! - Add methods **pause** and **resume** to the `ix-toast`.
    Which make it possible to pause/resume the logic of the autoClose feature.

### Patch Changes

-   [#2106](https://github.com/siemens/ix/pull/2106) [`d25492c57edb9e7f60c970cb26de4d5b8bdf8ee8`](https://github.com/siemens/ix/commit/d25492c57edb9e7f60c970cb26de4d5b8bdf8ee8) Thanks [@lzeiml](https://github.com/lzeiml)! - - Fixed validation logic incorrectly treating 0 as an invalid value due to falsy evaluation

    -   Fixed invalid-text not displaying when native HTML5 validation fails (e.g., min/max constraints)

    Fixes #2061

-   [#2168](https://github.com/siemens/ix/pull/2168) [`39425cad90443e258d43f4b35291877de2590dac`](https://github.com/siemens/ix/commit/39425cad90443e258d43f4b35291877de2590dac) Thanks [@varun-srinivasa](https://github.com/varun-srinivasa)! - Fixed a bug where the **ix-modal** was shown outside the viewport if the user has scrolled down on the page.
    Closes #2083

-   [#2143](https://github.com/siemens/ix/pull/2143) [`ac68db8e038872fb4249fa755d5d5f78b4a6d532`](https://github.com/siemens/ix/commit/ac68db8e038872fb4249fa755d5d5f78b4a6d532) Thanks [@lzeiml](https://github.com/lzeiml)! - - Improved documentation for `locale` property in date-picker and date-input components
    -   Added missing `hideHeader` property to time-input
    -   Added missing return types for methods in date-picker and time-picker

-   Updated dependencies \[[`121ccb7418926b4577dd790c22fe8581d5f7f08c`](https://github.com/siemens/ix/commit/121ccb7418926b4577dd790c22fe8581d5f7f08c), [`00d7577e103ecc6f921677e3b66b0361dd055239`](https://github.com/siemens/ix/commit/00d7577e103ecc6f921677e3b66b0361dd055239), [`ac23f9ea035f8758b0a8076775ce8b6452f71926`](https://github.com/siemens/ix/commit/ac23f9ea035f8758b0a8076775ce8b6452f71926), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`e5642cb2e159ef989728ad7494048da771c45bb4`](https://github.com/siemens/ix/commit/e5642cb2e159ef989728ad7494048da771c45bb4), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`802a4ea2d9ae775e93a73ae51337c8374edfecf3`](https://github.com/siemens/ix/commit/802a4ea2d9ae775e93a73ae51337c8374edfecf3), [`071d3bf69ab5229f6b937ebfcc9cb6e6b688d022`](https://github.com/siemens/ix/commit/071d3bf69ab5229f6b937ebfcc9cb6e6b688d022), [`cf50694a7c4ae6287d5deb286a3ffc53c072cd22`](https://github.com/siemens/ix/commit/cf50694a7c4ae6287d5deb286a3ffc53c072cd22), [`8952a1828ba059175226fb71dfe0a9900c5ad851`](https://github.com/siemens/ix/commit/8952a1828ba059175226fb71dfe0a9900c5ad851), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`092d491c8dbcba62bade8bc4a3d1e6d4ea6eccad`](https://github.com/siemens/ix/commit/092d491c8dbcba62bade8bc4a3d1e6d4ea6eccad), [`d6faa3105d70647b1d8f71731c661a8dc29e1b98`](https://github.com/siemens/ix/commit/d6faa3105d70647b1d8f71731c661a8dc29e1b98), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`113c45e102e0d2cb856701402ce255f5c972752a`](https://github.com/siemens/ix/commit/113c45e102e0d2cb856701402ce255f5c972752a), [`b19621236813a58bec015aed094e1dfeb8b957df`](https://github.com/siemens/ix/commit/b19621236813a58bec015aed094e1dfeb8b957df), [`dfb056a6355b2e13bcba23ecf17217fad1d7d8b9`](https://github.com/siemens/ix/commit/dfb056a6355b2e13bcba23ecf17217fad1d7d8b9), [`ffa50a961498753dde31ba9e77953d966fdcca4d`](https://github.com/siemens/ix/commit/ffa50a961498753dde31ba9e77953d966fdcca4d), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`5bd1466e8bd0516b4f28b5bfc0e21752c2e959d4`](https://github.com/siemens/ix/commit/5bd1466e8bd0516b4f28b5bfc0e21752c2e959d4), [`12951cce1836ec91e784a133cbfdb861c8d2e564`](https://github.com/siemens/ix/commit/12951cce1836ec91e784a133cbfdb861c8d2e564), [`d25492c57edb9e7f60c970cb26de4d5b8bdf8ee8`](https://github.com/siemens/ix/commit/d25492c57edb9e7f60c970cb26de4d5b8bdf8ee8), [`db2bbf5e55d5f7aca2c9e255dae917b746048d09`](https://github.com/siemens/ix/commit/db2bbf5e55d5f7aca2c9e255dae917b746048d09), [`ace22d0fd9a126891ef2f6ad60c35751488b81a1`](https://github.com/siemens/ix/commit/ace22d0fd9a126891ef2f6ad60c35751488b81a1), [`071d3bf69ab5229f6b937ebfcc9cb6e6b688d022`](https://github.com/siemens/ix/commit/071d3bf69ab5229f6b937ebfcc9cb6e6b688d022), [`7b016f7a85df558c3042d58a88093ecc55cf85be`](https://github.com/siemens/ix/commit/7b016f7a85df558c3042d58a88093ecc55cf85be), [`aecc8b764bbea9bdc3c9358981201a813074eb48`](https://github.com/siemens/ix/commit/aecc8b764bbea9bdc3c9358981201a813074eb48), [`39425cad90443e258d43f4b35291877de2590dac`](https://github.com/siemens/ix/commit/39425cad90443e258d43f4b35291877de2590dac), [`a2f040aaf72b90ba230daf747092d1844d7aff6a`](https://github.com/siemens/ix/commit/a2f040aaf72b90ba230daf747092d1844d7aff6a), [`2fca705485f72455cde6c99fa8d3578cee7bb7c3`](https://github.com/siemens/ix/commit/2fca705485f72455cde6c99fa8d3578cee7bb7c3), [`ac68db8e038872fb4249fa755d5d5f78b4a6d532`](https://github.com/siemens/ix/commit/ac68db8e038872fb4249fa755d5d5f78b4a6d532), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`cd31b3cae80618364395e3ce88dd4f0b69b9b0c6`](https://github.com/siemens/ix/commit/cd31b3cae80618364395e3ce88dd4f0b69b9b0c6), [`5bd1466e8bd0516b4f28b5bfc0e21752c2e959d4`](https://github.com/siemens/ix/commit/5bd1466e8bd0516b4f28b5bfc0e21752c2e959d4), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`4151d42ccd0a80932593796fb3586c0534faaaaf`](https://github.com/siemens/ix/commit/4151d42ccd0a80932593796fb3586c0534faaaaf), [`f678f19ca6b259ba3d66c49ce53270815b937895`](https://github.com/siemens/ix/commit/f678f19ca6b259ba3d66c49ce53270815b937895), [`ff575ce5521c0aebcce0c817020121b7d81c4978`](https://github.com/siemens/ix/commit/ff575ce5521c0aebcce0c817020121b7d81c4978), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`294dbe56899a9f63582af324d4f9b9efd8c5805b`](https://github.com/siemens/ix/commit/294dbe56899a9f63582af324d4f9b9efd8c5805b), [`1a2eb220d5fe513b3eda2c880d744d2fa1d44ed9`](https://github.com/siemens/ix/commit/1a2eb220d5fe513b3eda2c880d744d2fa1d44ed9), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`9b1d1ceb9fc17cd956d60a5e0bf02fb8a1482a06`](https://github.com/siemens/ix/commit/9b1d1ceb9fc17cd956d60a5e0bf02fb8a1482a06), [`4e278da029b79548fd97840bd0d89e79b1614a7e`](https://github.com/siemens/ix/commit/4e278da029b79548fd97840bd0d89e79b1614a7e), [`62ef59c6b042f87b1e17c22ec55c5b7131692930`](https://github.com/siemens/ix/commit/62ef59c6b042f87b1e17c22ec55c5b7131692930), [`0387086225eb438def5ff7b4956025afd34c7e18`](https://github.com/siemens/ix/commit/0387086225eb438def5ff7b4956025afd34c7e18), [`cd14905100a62b9e8ee2eb7e1f357e49e4e4f519`](https://github.com/siemens/ix/commit/cd14905100a62b9e8ee2eb7e1f357e49e4e4f519), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`b5c479fc224b1a02b431b7f4cb5b82e7b8d608bd`](https://github.com/siemens/ix/commit/b5c479fc224b1a02b431b7f4cb5b82e7b8d608bd), [`f620eb52672cb5208fa971dc4db2861d6ca455d8`](https://github.com/siemens/ix/commit/f620eb52672cb5208fa971dc4db2861d6ca455d8)]:
    -   @siemens/ix@4.0.0

## [@siemens/ix-aggrid@4.0.1](https://github.com/siemens/ix/releases/tag/%40siemens/ix-aggrid%404.0.1) (2025-11-06T16:26:40Z)
### Patch Changes

-   [#2198](https://github.com/siemens/ix/pull/2198) [`327eebcaef955705067473ab5d2deea8713b12db`](https://github.com/siemens/ix/commit/327eebcaef955705067473ab5d2deea8713b12db) Thanks [@lzeiml](https://github.com/lzeiml)! - Require **AG Grid** V33 or higher and support new theming API.
    Fix dependencies to use latest v4 release of `@siemens/ix`

    Fixes: #1784

-   Updated dependencies \[[`121ccb7418926b4577dd790c22fe8581d5f7f08c`](https://github.com/siemens/ix/commit/121ccb7418926b4577dd790c22fe8581d5f7f08c), [`00d7577e103ecc6f921677e3b66b0361dd055239`](https://github.com/siemens/ix/commit/00d7577e103ecc6f921677e3b66b0361dd055239), [`ac23f9ea035f8758b0a8076775ce8b6452f71926`](https://github.com/siemens/ix/commit/ac23f9ea035f8758b0a8076775ce8b6452f71926), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`e5642cb2e159ef989728ad7494048da771c45bb4`](https://github.com/siemens/ix/commit/e5642cb2e159ef989728ad7494048da771c45bb4), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`802a4ea2d9ae775e93a73ae51337c8374edfecf3`](https://github.com/siemens/ix/commit/802a4ea2d9ae775e93a73ae51337c8374edfecf3), [`071d3bf69ab5229f6b937ebfcc9cb6e6b688d022`](https://github.com/siemens/ix/commit/071d3bf69ab5229f6b937ebfcc9cb6e6b688d022), [`cf50694a7c4ae6287d5deb286a3ffc53c072cd22`](https://github.com/siemens/ix/commit/cf50694a7c4ae6287d5deb286a3ffc53c072cd22), [`8952a1828ba059175226fb71dfe0a9900c5ad851`](https://github.com/siemens/ix/commit/8952a1828ba059175226fb71dfe0a9900c5ad851), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`092d491c8dbcba62bade8bc4a3d1e6d4ea6eccad`](https://github.com/siemens/ix/commit/092d491c8dbcba62bade8bc4a3d1e6d4ea6eccad), [`d6faa3105d70647b1d8f71731c661a8dc29e1b98`](https://github.com/siemens/ix/commit/d6faa3105d70647b1d8f71731c661a8dc29e1b98), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`113c45e102e0d2cb856701402ce255f5c972752a`](https://github.com/siemens/ix/commit/113c45e102e0d2cb856701402ce255f5c972752a), [`b19621236813a58bec015aed094e1dfeb8b957df`](https://github.com/siemens/ix/commit/b19621236813a58bec015aed094e1dfeb8b957df), [`dfb056a6355b2e13bcba23ecf17217fad1d7d8b9`](https://github.com/siemens/ix/commit/dfb056a6355b2e13bcba23ecf17217fad1d7d8b9), [`ffa50a961498753dde31ba9e77953d966fdcca4d`](https://github.com/siemens/ix/commit/ffa50a961498753dde31ba9e77953d966fdcca4d), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`5bd1466e8bd0516b4f28b5bfc0e21752c2e959d4`](https://github.com/siemens/ix/commit/5bd1466e8bd0516b4f28b5bfc0e21752c2e959d4), [`12951cce1836ec91e784a133cbfdb861c8d2e564`](https://github.com/siemens/ix/commit/12951cce1836ec91e784a133cbfdb861c8d2e564), [`d25492c57edb9e7f60c970cb26de4d5b8bdf8ee8`](https://github.com/siemens/ix/commit/d25492c57edb9e7f60c970cb26de4d5b8bdf8ee8), [`db2bbf5e55d5f7aca2c9e255dae917b746048d09`](https://github.com/siemens/ix/commit/db2bbf5e55d5f7aca2c9e255dae917b746048d09), [`ace22d0fd9a126891ef2f6ad60c35751488b81a1`](https://github.com/siemens/ix/commit/ace22d0fd9a126891ef2f6ad60c35751488b81a1), [`071d3bf69ab5229f6b937ebfcc9cb6e6b688d022`](https://github.com/siemens/ix/commit/071d3bf69ab5229f6b937ebfcc9cb6e6b688d022), [`7b016f7a85df558c3042d58a88093ecc55cf85be`](https://github.com/siemens/ix/commit/7b016f7a85df558c3042d58a88093ecc55cf85be), [`aecc8b764bbea9bdc3c9358981201a813074eb48`](https://github.com/siemens/ix/commit/aecc8b764bbea9bdc3c9358981201a813074eb48), [`39425cad90443e258d43f4b35291877de2590dac`](https://github.com/siemens/ix/commit/39425cad90443e258d43f4b35291877de2590dac), [`a2f040aaf72b90ba230daf747092d1844d7aff6a`](https://github.com/siemens/ix/commit/a2f040aaf72b90ba230daf747092d1844d7aff6a), [`2fca705485f72455cde6c99fa8d3578cee7bb7c3`](https://github.com/siemens/ix/commit/2fca705485f72455cde6c99fa8d3578cee7bb7c3), [`ac68db8e038872fb4249fa755d5d5f78b4a6d532`](https://github.com/siemens/ix/commit/ac68db8e038872fb4249fa755d5d5f78b4a6d532), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`cd31b3cae80618364395e3ce88dd4f0b69b9b0c6`](https://github.com/siemens/ix/commit/cd31b3cae80618364395e3ce88dd4f0b69b9b0c6), [`5bd1466e8bd0516b4f28b5bfc0e21752c2e959d4`](https://github.com/siemens/ix/commit/5bd1466e8bd0516b4f28b5bfc0e21752c2e959d4), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`4151d42ccd0a80932593796fb3586c0534faaaaf`](https://github.com/siemens/ix/commit/4151d42ccd0a80932593796fb3586c0534faaaaf), [`f678f19ca6b259ba3d66c49ce53270815b937895`](https://github.com/siemens/ix/commit/f678f19ca6b259ba3d66c49ce53270815b937895), [`ff575ce5521c0aebcce0c817020121b7d81c4978`](https://github.com/siemens/ix/commit/ff575ce5521c0aebcce0c817020121b7d81c4978), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`294dbe56899a9f63582af324d4f9b9efd8c5805b`](https://github.com/siemens/ix/commit/294dbe56899a9f63582af324d4f9b9efd8c5805b), [`1a2eb220d5fe513b3eda2c880d744d2fa1d44ed9`](https://github.com/siemens/ix/commit/1a2eb220d5fe513b3eda2c880d744d2fa1d44ed9), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`9b1d1ceb9fc17cd956d60a5e0bf02fb8a1482a06`](https://github.com/siemens/ix/commit/9b1d1ceb9fc17cd956d60a5e0bf02fb8a1482a06), [`4e278da029b79548fd97840bd0d89e79b1614a7e`](https://github.com/siemens/ix/commit/4e278da029b79548fd97840bd0d89e79b1614a7e), [`62ef59c6b042f87b1e17c22ec55c5b7131692930`](https://github.com/siemens/ix/commit/62ef59c6b042f87b1e17c22ec55c5b7131692930), [`0387086225eb438def5ff7b4956025afd34c7e18`](https://github.com/siemens/ix/commit/0387086225eb438def5ff7b4956025afd34c7e18), [`cd14905100a62b9e8ee2eb7e1f357e49e4e4f519`](https://github.com/siemens/ix/commit/cd14905100a62b9e8ee2eb7e1f357e49e4e4f519), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`2617f86ed1d368fe3d309487ef531df20174c840`](https://github.com/siemens/ix/commit/2617f86ed1d368fe3d309487ef531df20174c840), [`b5c479fc224b1a02b431b7f4cb5b82e7b8d608bd`](https://github.com/siemens/ix/commit/b5c479fc224b1a02b431b7f4cb5b82e7b8d608bd), [`f620eb52672cb5208fa971dc4db2861d6ca455d8`](https://github.com/siemens/ix/commit/f620eb52672cb5208fa971dc4db2861d6ca455d8)]:
    -   @siemens/ix@4.0.0

## [@siemens/ix@3.2.0](https://github.com/siemens/ix/releases/tag/%40siemens/ix%403.2.0) (2025-08-04T13:36:14Z)
### Minor Changes

-   [#2004](https://github.com/siemens/ix/pull/2004) [`e8e660fd56af649eace36a313b33cda8ebb69469`](https://github.com/siemens/ix/commit/e8e660fd56af649eace36a313b33cda8ebb69469) Thanks [@nuke-ellington](https://github.com/nuke-ellington)! - Update theme files to new token structure and add support for new theming syntax (**data-ix-theme**, **data-ix-color-schema**).

-   [#1951](https://github.com/siemens/ix/pull/1951) [`ecbbd0a7435722731337b3da6cb83bb2d40654aa`](https://github.com/siemens/ix/commit/ecbbd0a7435722731337b3da6cb83bb2d40654aa) Thanks [@danielleroux](https://github.com/danielleroux)! - Add **ix-progress-indicator**

    Fixes #651

-   [#2005](https://github.com/siemens/ix/pull/2005) [`76016130da552410c00e0a0ea0c3bc58a015c132`](https://github.com/siemens/ix/commit/76016130da552410c00e0a0ea0c3bc58a015c132) Thanks [@danielleroux](https://github.com/danielleroux)! - **ix-tree**: add method `markItemAsDirty` to flag tree items which request a hard rerender

-   [#1974](https://github.com/siemens/ix/pull/1974) [`6b9a8fc5922f936a96e3f09e8ea11e0720aa5383`](https://github.com/siemens/ix/commit/6b9a8fc5922f936a96e3f09e8ea11e0720aa5383) Thanks [@danielleroux](https://github.com/danielleroux)! - Remove internal type definition from public api types.

    Fixes #1969

-   [#1986](https://github.com/siemens/ix/pull/1986) [`e44cb4912b89ab91c6ace605ff939dd4121f0a7f`](https://github.com/siemens/ix/commit/e44cb4912b89ab91c6ace605ff939dd4121f0a7f) Thanks [@lzeiml](https://github.com/lzeiml)! - Added properties to set aria-labels for the following components:

    -   ix-action-card
    -   ix-avatar
    -   ix-breadcrumb-item
    -   ix-button
    -   ix-card-accordion
    -   ix-card-list
    -   ix-category-filter
    -   ix-chip
    -   ix-date-input
    -   ix-date-picker
    -   ix-datetime-picker
    -   ix-drawer
    -   ix-dropdown-button
    -   ix-dropdown-item
    -   ix-empty-state
    -   ix-event-list-item
    -   ix-expanding-search
    -   ix-filter-chip
    -   ix-group-item
    -   ix-icon-toggle-button
    -   ix-key-value
    -   ix-kpi
    -   ix-link-button
    -   ix-map-navigation-overlay
    -   ix-modal-header
    -   ix-pagination
    -   ix-pane
    -   ix-pill
    -   ix-select
    -   ix-split-button
    -   ix-tabs
    -   ix-toast
    -   ix-toggle-button
    -   ix-tree-item

-   [#1864](https://github.com/siemens/ix/pull/1864) [`4077296037dd7889ddeb175559aca11f93a33312`](https://github.com/siemens/ix/commit/4077296037dd7889ddeb175559aca11f93a33312) Thanks [@GayatriK2002](https://github.com/GayatriK2002)! - Add option for action button slot to **ix-toast**

-   [#1877](https://github.com/siemens/ix/pull/1877) [`813b9cea25e8f6d948a992f9145254bf7045adf0`](https://github.com/siemens/ix/commit/813b9cea25e8f6d948a992f9145254bf7045adf0) Thanks [@GayatriK2002](https://github.com/GayatriK2002)! - Add `centerContent` property to `ix-chip`.

    Fixes #1854

-   [#1853](https://github.com/siemens/ix/pull/1853) [`b67d0122acdf2f4f7df1f8d85bbd5a3fafe38624`](https://github.com/siemens/ix/commit/b67d0122acdf2f4f7df1f8d85bbd5a3fafe38624) Thanks [@lzeiml](https://github.com/lzeiml)! - Rework `ix-time-picker` according to new design

    The ix-time-picker has been reworked to a new design and now uses different columns with selectable numbers to select the time. Milliseconds can now be selected as well.
    There are also new interval properties to control which numbers are displayed for hours, minutes, seconds and milliseconds.
    Additionally the displayed columns are now determined by the used format, making the showHour, showMinutes, showSeconds properties deprecated and will be removed with 4.0.0.
    The numbers for hours, minutes, etc. can also be selected by tabbing onto the first number, and then using arrow keys and Enter to select the desired time.

    Add new `ix-time-input` component

    The time-input component has been added as well, combining an input field and the new ix-time-picker, similar to the ix-date-input.

-   [#2002](https://github.com/siemens/ix/pull/2002) [`963502f6fe2e5194c34f4c8780820f30b581b7de`](https://github.com/siemens/ix/commit/963502f6fe2e5194c34f4c8780820f30b581b7de) Thanks [@lzeiml](https://github.com/lzeiml)! - The following properties have been added to ix-date-input: minDate, maxDate, weekStartIndex. Fixes #1965

### Patch Changes

-   [#1882](https://github.com/siemens/ix/pull/1882) [`455933edb3f3b9d8145ea4f58007fe815f46f841`](https://github.com/siemens/ix/commit/455933edb3f3b9d8145ea4f58007fe815f46f841) Thanks [@1307-Dev](https://github.com/1307-Dev)! - Gracefully handle whitespace and undefined texts in `ix-field-wrapper`.

-   [#1950](https://github.com/siemens/ix/pull/1950) [`1d273b149630b4f80ebe370963df4269ab813e4f`](https://github.com/siemens/ix/commit/1d273b149630b4f80ebe370963df4269ab813e4f) Thanks [@Nadim901](https://github.com/Nadim901)! - Keep **ix-modal** open after mouse down on backdrop and mouse up over modal or vice versa.

    Fixes #1663

-   [#1963](https://github.com/siemens/ix/pull/1963) [`6642dbb398850508497bd96e00e19fd4da3aa616`](https://github.com/siemens/ix/commit/6642dbb398850508497bd96e00e19fd4da3aa616) Thanks [@varun-srinivasa](https://github.com/varun-srinivasa)! - Align expand/collapse arrows with design for:

    -   **ix-blind**
    -   **ix-card**
    -   **ix-dropdown-button**
    -   **ix-group**
    -   **ix-select**
    -   **ix-tree-item**

-   [#1947](https://github.com/siemens/ix/pull/1947) [`6f12a6a14ebd090c979b5c5a7b30b27ef40a0e95`](https://github.com/siemens/ix/commit/6f12a6a14ebd090c979b5c5a7b30b27ef40a0e95) Thanks [@Nadim901](https://github.com/Nadim901)! - Break label text of **ix-toggle** in case of text overflow.

    Fixes #683

-   [#2014](https://github.com/siemens/ix/pull/2014) [`39c9694bd3cd5864e127a8628e49c895add5da62`](https://github.com/siemens/ix/commit/39c9694bd3cd5864e127a8628e49c895add5da62) Thanks [@danielleroux](https://github.com/danielleroux)! - Increase z-index for `toast`s

    Fixes #1908

-   [#1941](https://github.com/siemens/ix/pull/1941) [`f892591ef14286ed7876ca0b071a8fd35de79bbf`](https://github.com/siemens/ix/commit/f892591ef14286ed7876ca0b071a8fd35de79bbf) Thanks [@Raghavendra5577](https://github.com/Raghavendra5577)! - **Ix-modal** animation is always identical regardless of poisition.
    It will appear from above and disappear towards the top of the screen again.
    It will only travel it's own height before animation ends, not the whole distance from/to top.

-   [#2016](https://github.com/siemens/ix/pull/2016) [`3f0d55ae2f195e6c86a73c409ea28976dc3f2961`](https://github.com/siemens/ix/commit/3f0d55ae2f195e6c86a73c409ea28976dc3f2961) Thanks [@lakshmi-priya-b](https://github.com/lakshmi-priya-b)! - Ensure that setting max-width on **ix-chip** and/or **ix-pill** will affect componet width.

-   [#1980](https://github.com/siemens/ix/pull/1980) [`3d953256650eaa541dfbb93ec5e98a48212d97ad`](https://github.com/siemens/ix/commit/3d953256650eaa541dfbb93ec5e98a48212d97ad) Thanks [@1307-Dev](https://github.com/1307-Dev)! - Set soft text as subheading color for filled and outline variant of **ix-action-card**.

    Fixes #1967

-   [#2034](https://github.com/siemens/ix/pull/2034) [`4d4e5672137dc5b803d267e0564bb5944f4d9ae2`](https://github.com/siemens/ix/commit/4d4e5672137dc5b803d267e0564bb5944f4d9ae2) Thanks [@AndreasBerliner](https://github.com/AndreasBerliner)! - Fix styling of tooltip container height in **ix-tooltip**.

    Fixes #2009.

-   [#1994](https://github.com/siemens/ix/pull/1994) [`d346cc2d69596c0a72e7ef77b64097d8500a999c`](https://github.com/siemens/ix/commit/d346cc2d69596c0a72e7ef77b64097d8500a999c) Thanks [@GayatriK2002](https://github.com/GayatriK2002)! - Set background-color explicitly for outline variants of **ix-chip** and **ix-pill**.

-   [#2022](https://github.com/siemens/ix/pull/2022) [`152d7af26f90e2f489d4bae99c60369449b910db`](https://github.com/siemens/ix/commit/152d7af26f90e2f489d4bae99c60369449b910db) Thanks [@danielleroux](https://github.com/danielleroux)! - Add additional check if the helper text is undefined to hide empty validation text

    Fixes #2021

-   [#1943](https://github.com/siemens/ix/pull/1943) [`9776d7fb0cc5bb3b9afb4982cbceb00a8c638549`](https://github.com/siemens/ix/commit/9776d7fb0cc5bb3b9afb4982cbceb00a8c638549) Thanks [@RamVinayMandal](https://github.com/RamVinayMandal)! - Remove obsolete console warning message for formerly illegal property combinations for **ix-toggle-button** and **ix-icon-toggle-button**.

-   [#1945](https://github.com/siemens/ix/pull/1945) [`a3ac05becce0e245f0397a8f6b9789176b7728e6`](https://github.com/siemens/ix/commit/a3ac05becce0e245f0397a8f6b9789176b7728e6) Thanks [@GayatriK2002](https://github.com/GayatriK2002)! - Align **ix-pill** and **ix-chip** vertically flush, with or without icons.

-   [#1985](https://github.com/siemens/ix/pull/1985) [`2496426f26665cd848a66bc69395a7d0261fa5a5`](https://github.com/siemens/ix/commit/2496426f26665cd848a66bc69395a7d0261fa5a5) Thanks [@varun-srinivasa](https://github.com/varun-srinivasa)! - Don't take up space for empty dropdown slot in **ix-group**.

    Fixes #1486

-   [#1993](https://github.com/siemens/ix/pull/1993) [`b519b420fd3ca5de9c73c227ce78431b520ec4a6`](https://github.com/siemens/ix/commit/b519b420fd3ca5de9c73c227ce78431b520ec4a6) Thanks [@AndreasBerliner](https://github.com/AndreasBerliner)! - Improve jsdocs for **ix-date-picker** to better describe `locale` property

-   [#2015](https://github.com/siemens/ix/pull/2015) [`023cad0595fb3b110de2f62d982c32275b4aaea6`](https://github.com/siemens/ix/commit/023cad0595fb3b110de2f62d982c32275b4aaea6) Thanks [@danielleroux](https://github.com/danielleroux)! - Update to stenciljs v4.36.0

    Fixes #1543 #1286

-   [#1873](https://github.com/siemens/ix/pull/1873) [`b630ffefe83f20c458bbef88d21918479e1ae540`](https://github.com/siemens/ix/commit/b630ffefe83f20c458bbef88d21918479e1ae540) Thanks [@varun-srinivasa](https://github.com/varun-srinivasa)! - Align visual appearance of **ix-workflow** to component state

    Fixes #1808

-   [#1978](https://github.com/siemens/ix/pull/1978) [`1055e0127f0e25a654f5a7d69e5db102340a3a83`](https://github.com/siemens/ix/commit/1055e0127f0e25a654f5a7d69e5db102340a3a83) Thanks [@1307-Dev](https://github.com/1307-Dev)! - Fix order of bottom menu items in **ix-menu**. Now "Settings" appears first and "About and legal information" appears last.

## [@siemens/ix-vue@3.2.0](https://github.com/siemens/ix/releases/tag/%40siemens/ix-vue%403.2.0) (2025-08-04T13:36:17Z)
### Minor Changes

-   [#1986](https://github.com/siemens/ix/pull/1986) [`e44cb4912b89ab91c6ace605ff939dd4121f0a7f`](https://github.com/siemens/ix/commit/e44cb4912b89ab91c6ace605ff939dd4121f0a7f) Thanks [@lzeiml](https://github.com/lzeiml)! - Added properties to set aria-labels for the following components:

    -   ix-action-card
    -   ix-avatar
    -   ix-breadcrumb-item
    -   ix-button
    -   ix-card-accordion
    -   ix-card-list
    -   ix-category-filter
    -   ix-chip
    -   ix-date-input
    -   ix-date-picker
    -   ix-datetime-picker
    -   ix-drawer
    -   ix-dropdown-button
    -   ix-dropdown-item
    -   ix-empty-state
    -   ix-event-list-item
    -   ix-expanding-search
    -   ix-filter-chip
    -   ix-group-item
    -   ix-icon-toggle-button
    -   ix-key-value
    -   ix-kpi
    -   ix-link-button
    -   ix-map-navigation-overlay
    -   ix-modal-header
    -   ix-pagination
    -   ix-pane
    -   ix-pill
    -   ix-select
    -   ix-split-button
    -   ix-tabs
    -   ix-toast
    -   ix-toggle-button
    -   ix-tree-item

-   [#1864](https://github.com/siemens/ix/pull/1864) [`4077296037dd7889ddeb175559aca11f93a33312`](https://github.com/siemens/ix/commit/4077296037dd7889ddeb175559aca11f93a33312) Thanks [@GayatriK2002](https://github.com/GayatriK2002)! - Add option for action button slot to **ix-toast**

-   [#1872](https://github.com/siemens/ix/pull/1872) [`3cbebbd3b13a869ab0fd7bf3452c19adde77de6b`](https://github.com/siemens/ix/commit/3cbebbd3b13a869ab0fd7bf3452c19adde77de6b) Thanks [@tiagogviegas](https://github.com/tiagogviegas)! - add support for showModal

    Fixes #1771

-   [#1877](https://github.com/siemens/ix/pull/1877) [`813b9cea25e8f6d948a992f9145254bf7045adf0`](https://github.com/siemens/ix/commit/813b9cea25e8f6d948a992f9145254bf7045adf0) Thanks [@GayatriK2002](https://github.com/GayatriK2002)! - Add `centerContent` property to `ix-chip`.

    Fixes #1854

-   [#1853](https://github.com/siemens/ix/pull/1853) [`b67d0122acdf2f4f7df1f8d85bbd5a3fafe38624`](https://github.com/siemens/ix/commit/b67d0122acdf2f4f7df1f8d85bbd5a3fafe38624) Thanks [@lzeiml](https://github.com/lzeiml)! - Rework `ix-time-picker` according to new design

    The ix-time-picker has been reworked to a new design and now uses different columns with selectable numbers to select the time. Milliseconds can now be selected as well.
    There are also new interval properties to control which numbers are displayed for hours, minutes, seconds and milliseconds.
    Additionally the displayed columns are now determined by the used format, making the showHour, showMinutes, showSeconds properties deprecated and will be removed with 4.0.0.
    The numbers for hours, minutes, etc. can also be selected by tabbing onto the first number, and then using arrow keys and Enter to select the desired time.

    Add new `ix-time-input` component

    The time-input component has been added as well, combining an input field and the new ix-time-picker, similar to the ix-date-input.

-   [#2002](https://github.com/siemens/ix/pull/2002) [`963502f6fe2e5194c34f4c8780820f30b581b7de`](https://github.com/siemens/ix/commit/963502f6fe2e5194c34f4c8780820f30b581b7de) Thanks [@lzeiml](https://github.com/lzeiml)! - The following properties have been added to ix-date-input: minDate, maxDate, weekStartIndex. Fixes #1965

### Patch Changes

-   [#2008](https://github.com/siemens/ix/pull/2008) [`da6d384abc27cdfe4acac1f29e36af49bcf97f4d`](https://github.com/siemens/ix/commit/da6d384abc27cdfe4acac1f29e36af49bcf97f4d) Thanks [@danielleroux](https://github.com/danielleroux)! - Ensure ix-icon custom component is defined during library usage

    Fixes #2003

-   Updated dependencies \[[`e8e660fd56af649eace36a313b33cda8ebb69469`](https://github.com/siemens/ix/commit/e8e660fd56af649eace36a313b33cda8ebb69469), [`ecbbd0a7435722731337b3da6cb83bb2d40654aa`](https://github.com/siemens/ix/commit/ecbbd0a7435722731337b3da6cb83bb2d40654aa), [`76016130da552410c00e0a0ea0c3bc58a015c132`](https://github.com/siemens/ix/commit/76016130da552410c00e0a0ea0c3bc58a015c132), [`455933edb3f3b9d8145ea4f58007fe815f46f841`](https://github.com/siemens/ix/commit/455933edb3f3b9d8145ea4f58007fe815f46f841), [`6b9a8fc5922f936a96e3f09e8ea11e0720aa5383`](https://github.com/siemens/ix/commit/6b9a8fc5922f936a96e3f09e8ea11e0720aa5383), [`1d273b149630b4f80ebe370963df4269ab813e4f`](https://github.com/siemens/ix/commit/1d273b149630b4f80ebe370963df4269ab813e4f), [`6642dbb398850508497bd96e00e19fd4da3aa616`](https://github.com/siemens/ix/commit/6642dbb398850508497bd96e00e19fd4da3aa616), [`6f12a6a14ebd090c979b5c5a7b30b27ef40a0e95`](https://github.com/siemens/ix/commit/6f12a6a14ebd090c979b5c5a7b30b27ef40a0e95), [`39c9694bd3cd5864e127a8628e49c895add5da62`](https://github.com/siemens/ix/commit/39c9694bd3cd5864e127a8628e49c895add5da62), [`f892591ef14286ed7876ca0b071a8fd35de79bbf`](https://github.com/siemens/ix/commit/f892591ef14286ed7876ca0b071a8fd35de79bbf), [`3f0d55ae2f195e6c86a73c409ea28976dc3f2961`](https://github.com/siemens/ix/commit/3f0d55ae2f195e6c86a73c409ea28976dc3f2961), [`3d953256650eaa541dfbb93ec5e98a48212d97ad`](https://github.com/siemens/ix/commit/3d953256650eaa541dfbb93ec5e98a48212d97ad), [`4d4e5672137dc5b803d267e0564bb5944f4d9ae2`](https://github.com/siemens/ix/commit/4d4e5672137dc5b803d267e0564bb5944f4d9ae2), [`d346cc2d69596c0a72e7ef77b64097d8500a999c`](https://github.com/siemens/ix/commit/d346cc2d69596c0a72e7ef77b64097d8500a999c), [`e44cb4912b89ab91c6ace605ff939dd4121f0a7f`](https://github.com/siemens/ix/commit/e44cb4912b89ab91c6ace605ff939dd4121f0a7f), [`4077296037dd7889ddeb175559aca11f93a33312`](https://github.com/siemens/ix/commit/4077296037dd7889ddeb175559aca11f93a33312), [`152d7af26f90e2f489d4bae99c60369449b910db`](https://github.com/siemens/ix/commit/152d7af26f90e2f489d4bae99c60369449b910db), [`9776d7fb0cc5bb3b9afb4982cbceb00a8c638549`](https://github.com/siemens/ix/commit/9776d7fb0cc5bb3b9afb4982cbceb00a8c638549), [`813b9cea25e8f6d948a992f9145254bf7045adf0`](https://github.com/siemens/ix/commit/813b9cea25e8f6d948a992f9145254bf7045adf0), [`a3ac05becce0e245f0397a8f6b9789176b7728e6`](https://github.com/siemens/ix/commit/a3ac05becce0e245f0397a8f6b9789176b7728e6), [`b67d0122acdf2f4f7df1f8d85bbd5a3fafe38624`](https://github.com/siemens/ix/commit/b67d0122acdf2f4f7df1f8d85bbd5a3fafe38624), [`2496426f26665cd848a66bc69395a7d0261fa5a5`](https://github.com/siemens/ix/commit/2496426f26665cd848a66bc69395a7d0261fa5a5), [`b519b420fd3ca5de9c73c227ce78431b520ec4a6`](https://github.com/siemens/ix/commit/b519b420fd3ca5de9c73c227ce78431b520ec4a6), [`023cad0595fb3b110de2f62d982c32275b4aaea6`](https://github.com/siemens/ix/commit/023cad0595fb3b110de2f62d982c32275b4aaea6), [`963502f6fe2e5194c34f4c8780820f30b581b7de`](https://github.com/siemens/ix/commit/963502f6fe2e5194c34f4c8780820f30b581b7de), [`b630ffefe83f20c458bbef88d21918479e1ae540`](https://github.com/siemens/ix/commit/b630ffefe83f20c458bbef88d21918479e1ae540), [`1055e0127f0e25a654f5a7d69e5db102340a3a83`](https://github.com/siemens/ix/commit/1055e0127f0e25a654f5a7d69e5db102340a3a83)]:
    -   @siemens/ix@3.2.0

## [@siemens/ix-react@3.2.0](https://github.com/siemens/ix/releases/tag/%40siemens/ix-react%403.2.0) (2025-08-04T13:36:11Z)
### Minor Changes

-   [#1986](https://github.com/siemens/ix/pull/1986) [`e44cb4912b89ab91c6ace605ff939dd4121f0a7f`](https://github.com/siemens/ix/commit/e44cb4912b89ab91c6ace605ff939dd4121f0a7f) Thanks [@lzeiml](https://github.com/lzeiml)! - Added properties to set aria-labels for the following components:

    -   ix-action-card
    -   ix-avatar
    -   ix-breadcrumb-item
    -   ix-button
    -   ix-card-accordion
    -   ix-card-list
    -   ix-category-filter
    -   ix-chip
    -   ix-date-input
    -   ix-date-picker
    -   ix-datetime-picker
    -   ix-drawer
    -   ix-dropdown-button
    -   ix-dropdown-item
    -   ix-empty-state
    -   ix-event-list-item
    -   ix-expanding-search
    -   ix-filter-chip
    -   ix-group-item
    -   ix-icon-toggle-button
    -   ix-key-value
    -   ix-kpi
    -   ix-link-button
    -   ix-map-navigation-overlay
    -   ix-modal-header
    -   ix-pagination
    -   ix-pane
    -   ix-pill
    -   ix-select
    -   ix-split-button
    -   ix-tabs
    -   ix-toast
    -   ix-toggle-button
    -   ix-tree-item

-   [#1864](https://github.com/siemens/ix/pull/1864) [`4077296037dd7889ddeb175559aca11f93a33312`](https://github.com/siemens/ix/commit/4077296037dd7889ddeb175559aca11f93a33312) Thanks [@GayatriK2002](https://github.com/GayatriK2002)! - Add option for action button slot to **ix-toast**

-   [#1877](https://github.com/siemens/ix/pull/1877) [`813b9cea25e8f6d948a992f9145254bf7045adf0`](https://github.com/siemens/ix/commit/813b9cea25e8f6d948a992f9145254bf7045adf0) Thanks [@GayatriK2002](https://github.com/GayatriK2002)! - Add `centerContent` property to `ix-chip`.

    Fixes #1854

-   [#1853](https://github.com/siemens/ix/pull/1853) [`b67d0122acdf2f4f7df1f8d85bbd5a3fafe38624`](https://github.com/siemens/ix/commit/b67d0122acdf2f4f7df1f8d85bbd5a3fafe38624) Thanks [@lzeiml](https://github.com/lzeiml)! - Rework `ix-time-picker` according to new design

    The ix-time-picker has been reworked to a new design and now uses different columns with selectable numbers to select the time. Milliseconds can now be selected as well.
    There are also new interval properties to control which numbers are displayed for hours, minutes, seconds and milliseconds.
    Additionally the displayed columns are now determined by the used format, making the showHour, showMinutes, showSeconds properties deprecated and will be removed with 4.0.0.
    The numbers for hours, minutes, etc. can also be selected by tabbing onto the first number, and then using arrow keys and Enter to select the desired time.

    Add new `ix-time-input` component

    The time-input component has been added as well, combining an input field and the new ix-time-picker, similar to the ix-date-input.

-   [#2002](https://github.com/siemens/ix/pull/2002) [`963502f6fe2e5194c34f4c8780820f30b581b7de`](https://github.com/siemens/ix/commit/963502f6fe2e5194c34f4c8780820f30b581b7de) Thanks [@lzeiml](https://github.com/lzeiml)! - The following properties have been added to ix-date-input: minDate, maxDate, weekStartIndex. Fixes #1965

### Patch Changes

-   [#1974](https://github.com/siemens/ix/pull/1974) [`6b9a8fc5922f936a96e3f09e8ea11e0720aa5383`](https://github.com/siemens/ix/commit/6b9a8fc5922f936a96e3f09e8ea11e0720aa5383) Thanks [@danielleroux](https://github.com/danielleroux)! - Update react-ouput-target to 1.1.0

-   [#2005](https://github.com/siemens/ix/pull/2005) [`76016130da552410c00e0a0ea0c3bc58a015c132`](https://github.com/siemens/ix/commit/76016130da552410c00e0a0ea0c3bc58a015c132) Thanks [@danielleroux](https://github.com/danielleroux)! - **ix-tree**: call render function if item data is updated

    Fixes #1948

-   [#2008](https://github.com/siemens/ix/pull/2008) [`da6d384abc27cdfe4acac1f29e36af49bcf97f4d`](https://github.com/siemens/ix/commit/da6d384abc27cdfe4acac1f29e36af49bcf97f4d) Thanks [@danielleroux](https://github.com/danielleroux)! - Ensure ix-icon custom component is defined during library usage

    Fixes #2003

-   Updated dependencies \[[`e8e660fd56af649eace36a313b33cda8ebb69469`](https://github.com/siemens/ix/commit/e8e660fd56af649eace36a313b33cda8ebb69469), [`ecbbd0a7435722731337b3da6cb83bb2d40654aa`](https://github.com/siemens/ix/commit/ecbbd0a7435722731337b3da6cb83bb2d40654aa), [`76016130da552410c00e0a0ea0c3bc58a015c132`](https://github.com/siemens/ix/commit/76016130da552410c00e0a0ea0c3bc58a015c132), [`455933edb3f3b9d8145ea4f58007fe815f46f841`](https://github.com/siemens/ix/commit/455933edb3f3b9d8145ea4f58007fe815f46f841), [`6b9a8fc5922f936a96e3f09e8ea11e0720aa5383`](https://github.com/siemens/ix/commit/6b9a8fc5922f936a96e3f09e8ea11e0720aa5383), [`1d273b149630b4f80ebe370963df4269ab813e4f`](https://github.com/siemens/ix/commit/1d273b149630b4f80ebe370963df4269ab813e4f), [`6642dbb398850508497bd96e00e19fd4da3aa616`](https://github.com/siemens/ix/commit/6642dbb398850508497bd96e00e19fd4da3aa616), [`6f12a6a14ebd090c979b5c5a7b30b27ef40a0e95`](https://github.com/siemens/ix/commit/6f12a6a14ebd090c979b5c5a7b30b27ef40a0e95), [`39c9694bd3cd5864e127a8628e49c895add5da62`](https://github.com/siemens/ix/commit/39c9694bd3cd5864e127a8628e49c895add5da62), [`f892591ef14286ed7876ca0b071a8fd35de79bbf`](https://github.com/siemens/ix/commit/f892591ef14286ed7876ca0b071a8fd35de79bbf), [`3f0d55ae2f195e6c86a73c409ea28976dc3f2961`](https://github.com/siemens/ix/commit/3f0d55ae2f195e6c86a73c409ea28976dc3f2961), [`3d953256650eaa541dfbb93ec5e98a48212d97ad`](https://github.com/siemens/ix/commit/3d953256650eaa541dfbb93ec5e98a48212d97ad), [`4d4e5672137dc5b803d267e0564bb5944f4d9ae2`](https://github.com/siemens/ix/commit/4d4e5672137dc5b803d267e0564bb5944f4d9ae2), [`d346cc2d69596c0a72e7ef77b64097d8500a999c`](https://github.com/siemens/ix/commit/d346cc2d69596c0a72e7ef77b64097d8500a999c), [`e44cb4912b89ab91c6ace605ff939dd4121f0a7f`](https://github.com/siemens/ix/commit/e44cb4912b89ab91c6ace605ff939dd4121f0a7f), [`4077296037dd7889ddeb175559aca11f93a33312`](https://github.com/siemens/ix/commit/4077296037dd7889ddeb175559aca11f93a33312), [`152d7af26f90e2f489d4bae99c60369449b910db`](https://github.com/siemens/ix/commit/152d7af26f90e2f489d4bae99c60369449b910db), [`9776d7fb0cc5bb3b9afb4982cbceb00a8c638549`](https://github.com/siemens/ix/commit/9776d7fb0cc5bb3b9afb4982cbceb00a8c638549), [`813b9cea25e8f6d948a992f9145254bf7045adf0`](https://github.com/siemens/ix/commit/813b9cea25e8f6d948a992f9145254bf7045adf0), [`a3ac05becce0e245f0397a8f6b9789176b7728e6`](https://github.com/siemens/ix/commit/a3ac05becce0e245f0397a8f6b9789176b7728e6), [`b67d0122acdf2f4f7df1f8d85bbd5a3fafe38624`](https://github.com/siemens/ix/commit/b67d0122acdf2f4f7df1f8d85bbd5a3fafe38624), [`2496426f26665cd848a66bc69395a7d0261fa5a5`](https://github.com/siemens/ix/commit/2496426f26665cd848a66bc69395a7d0261fa5a5), [`b519b420fd3ca5de9c73c227ce78431b520ec4a6`](https://github.com/siemens/ix/commit/b519b420fd3ca5de9c73c227ce78431b520ec4a6), [`023cad0595fb3b110de2f62d982c32275b4aaea6`](https://github.com/siemens/ix/commit/023cad0595fb3b110de2f62d982c32275b4aaea6), [`963502f6fe2e5194c34f4c8780820f30b581b7de`](https://github.com/siemens/ix/commit/963502f6fe2e5194c34f4c8780820f30b581b7de), [`b630ffefe83f20c458bbef88d21918479e1ae540`](https://github.com/siemens/ix/commit/b630ffefe83f20c458bbef88d21918479e1ae540), [`1055e0127f0e25a654f5a7d69e5db102340a3a83`](https://github.com/siemens/ix/commit/1055e0127f0e25a654f5a7d69e5db102340a3a83)]:
    -   @siemens/ix@3.2.0

## [@siemens/ix-angular@3.2.0](https://github.com/siemens/ix/releases/tag/%40siemens/ix-angular%403.2.0) (2025-08-04T13:36:08Z)
### Minor Changes

-   [#1986](https://github.com/siemens/ix/pull/1986) [`e44cb4912b89ab91c6ace605ff939dd4121f0a7f`](https://github.com/siemens/ix/commit/e44cb4912b89ab91c6ace605ff939dd4121f0a7f) Thanks [@lzeiml](https://github.com/lzeiml)! - Added properties to set aria-labels for the following components:

    -   ix-action-card
    -   ix-avatar
    -   ix-breadcrumb-item
    -   ix-button
    -   ix-card-accordion
    -   ix-card-list
    -   ix-category-filter
    -   ix-chip
    -   ix-date-input
    -   ix-date-picker
    -   ix-datetime-picker
    -   ix-drawer
    -   ix-dropdown-button
    -   ix-dropdown-item
    -   ix-empty-state
    -   ix-event-list-item
    -   ix-expanding-search
    -   ix-filter-chip
    -   ix-group-item
    -   ix-icon-toggle-button
    -   ix-key-value
    -   ix-kpi
    -   ix-link-button
    -   ix-map-navigation-overlay
    -   ix-modal-header
    -   ix-pagination
    -   ix-pane
    -   ix-pill
    -   ix-select
    -   ix-split-button
    -   ix-tabs
    -   ix-toast
    -   ix-toggle-button
    -   ix-tree-item

-   [#1864](https://github.com/siemens/ix/pull/1864) [`4077296037dd7889ddeb175559aca11f93a33312`](https://github.com/siemens/ix/commit/4077296037dd7889ddeb175559aca11f93a33312) Thanks [@GayatriK2002](https://github.com/GayatriK2002)! - Add option for action button slot to **ix-toast**

-   [#1877](https://github.com/siemens/ix/pull/1877) [`813b9cea25e8f6d948a992f9145254bf7045adf0`](https://github.com/siemens/ix/commit/813b9cea25e8f6d948a992f9145254bf7045adf0) Thanks [@GayatriK2002](https://github.com/GayatriK2002)! - Add `centerContent` property to `ix-chip`.

    Fixes #1854

-   [#1853](https://github.com/siemens/ix/pull/1853) [`b67d0122acdf2f4f7df1f8d85bbd5a3fafe38624`](https://github.com/siemens/ix/commit/b67d0122acdf2f4f7df1f8d85bbd5a3fafe38624) Thanks [@lzeiml](https://github.com/lzeiml)! - Rework `ix-time-picker` according to new design

    The ix-time-picker has been reworked to a new design and now uses different columns with selectable numbers to select the time. Milliseconds can now be selected as well.
    There are also new interval properties to control which numbers are displayed for hours, minutes, seconds and milliseconds.
    Additionally the displayed columns are now determined by the used format, making the showHour, showMinutes, showSeconds properties deprecated and will be removed with 4.0.0.
    The numbers for hours, minutes, etc. can also be selected by tabbing onto the first number, and then using arrow keys and Enter to select the desired time.

    Add new `ix-time-input` component

    The time-input component has been added as well, combining an input field and the new ix-time-picker, similar to the ix-date-input.

-   [#2002](https://github.com/siemens/ix/pull/2002) [`963502f6fe2e5194c34f4c8780820f30b581b7de`](https://github.com/siemens/ix/commit/963502f6fe2e5194c34f4c8780820f30b581b7de) Thanks [@lzeiml](https://github.com/lzeiml)! - The following properties have been added to ix-date-input: minDate, maxDate, weekStartIndex. Fixes #1965

### Patch Changes

-   [#1993](https://github.com/siemens/ix/pull/1993) [`b519b420fd3ca5de9c73c227ce78431b520ec4a6`](https://github.com/siemens/ix/commit/b519b420fd3ca5de9c73c227ce78431b520ec4a6) Thanks [@AndreasBerliner](https://github.com/AndreasBerliner)! - Improve jsdocs for **ix-date-picker** to better describe `locale` property

-   [#2008](https://github.com/siemens/ix/pull/2008) [`da6d384abc27cdfe4acac1f29e36af49bcf97f4d`](https://github.com/siemens/ix/commit/da6d384abc27cdfe4acac1f29e36af49bcf97f4d) Thanks [@danielleroux](https://github.com/danielleroux)! - Ensure ix-icon custom component is defined during library usage

    Fixes #2003

-   [#1933](https://github.com/siemens/ix/pull/1933) [`7a8d7b72c00a1b303006531965233c794c9f1bcb`](https://github.com/siemens/ix/commit/7a8d7b72c00a1b303006531965233c794c9f1bcb) Thanks [@Nadim901](https://github.com/Nadim901)! - Keep **radio-value-accessor** in sync with form control.

-   Updated dependencies \[[`e8e660fd56af649eace36a313b33cda8ebb69469`](https://github.com/siemens/ix/commit/e8e660fd56af649eace36a313b33cda8ebb69469), [`ecbbd0a7435722731337b3da6cb83bb2d40654aa`](https://github.com/siemens/ix/commit/ecbbd0a7435722731337b3da6cb83bb2d40654aa), [`76016130da552410c00e0a0ea0c3bc58a015c132`](https://github.com/siemens/ix/commit/76016130da552410c00e0a0ea0c3bc58a015c132), [`455933edb3f3b9d8145ea4f58007fe815f46f841`](https://github.com/siemens/ix/commit/455933edb3f3b9d8145ea4f58007fe815f46f841), [`6b9a8fc5922f936a96e3f09e8ea11e0720aa5383`](https://github.com/siemens/ix/commit/6b9a8fc5922f936a96e3f09e8ea11e0720aa5383), [`1d273b149630b4f80ebe370963df4269ab813e4f`](https://github.com/siemens/ix/commit/1d273b149630b4f80ebe370963df4269ab813e4f), [`6642dbb398850508497bd96e00e19fd4da3aa616`](https://github.com/siemens/ix/commit/6642dbb398850508497bd96e00e19fd4da3aa616), [`6f12a6a14ebd090c979b5c5a7b30b27ef40a0e95`](https://github.com/siemens/ix/commit/6f12a6a14ebd090c979b5c5a7b30b27ef40a0e95), [`39c9694bd3cd5864e127a8628e49c895add5da62`](https://github.com/siemens/ix/commit/39c9694bd3cd5864e127a8628e49c895add5da62), [`f892591ef14286ed7876ca0b071a8fd35de79bbf`](https://github.com/siemens/ix/commit/f892591ef14286ed7876ca0b071a8fd35de79bbf), [`3f0d55ae2f195e6c86a73c409ea28976dc3f2961`](https://github.com/siemens/ix/commit/3f0d55ae2f195e6c86a73c409ea28976dc3f2961), [`3d953256650eaa541dfbb93ec5e98a48212d97ad`](https://github.com/siemens/ix/commit/3d953256650eaa541dfbb93ec5e98a48212d97ad), [`4d4e5672137dc5b803d267e0564bb5944f4d9ae2`](https://github.com/siemens/ix/commit/4d4e5672137dc5b803d267e0564bb5944f4d9ae2), [`d346cc2d69596c0a72e7ef77b64097d8500a999c`](https://github.com/siemens/ix/commit/d346cc2d69596c0a72e7ef77b64097d8500a999c), [`e44cb4912b89ab91c6ace605ff939dd4121f0a7f`](https://github.com/siemens/ix/commit/e44cb4912b89ab91c6ace605ff939dd4121f0a7f), [`4077296037dd7889ddeb175559aca11f93a33312`](https://github.com/siemens/ix/commit/4077296037dd7889ddeb175559aca11f93a33312), [`152d7af26f90e2f489d4bae99c60369449b910db`](https://github.com/siemens/ix/commit/152d7af26f90e2f489d4bae99c60369449b910db), [`9776d7fb0cc5bb3b9afb4982cbceb00a8c638549`](https://github.com/siemens/ix/commit/9776d7fb0cc5bb3b9afb4982cbceb00a8c638549), [`813b9cea25e8f6d948a992f9145254bf7045adf0`](https://github.com/siemens/ix/commit/813b9cea25e8f6d948a992f9145254bf7045adf0), [`a3ac05becce0e245f0397a8f6b9789176b7728e6`](https://github.com/siemens/ix/commit/a3ac05becce0e245f0397a8f6b9789176b7728e6), [`b67d0122acdf2f4f7df1f8d85bbd5a3fafe38624`](https://github.com/siemens/ix/commit/b67d0122acdf2f4f7df1f8d85bbd5a3fafe38624), [`2496426f26665cd848a66bc69395a7d0261fa5a5`](https://github.com/siemens/ix/commit/2496426f26665cd848a66bc69395a7d0261fa5a5), [`b519b420fd3ca5de9c73c227ce78431b520ec4a6`](https://github.com/siemens/ix/commit/b519b420fd3ca5de9c73c227ce78431b520ec4a6), [`023cad0595fb3b110de2f62d982c32275b4aaea6`](https://github.com/siemens/ix/commit/023cad0595fb3b110de2f62d982c32275b4aaea6), [`963502f6fe2e5194c34f4c8780820f30b581b7de`](https://github.com/siemens/ix/commit/963502f6fe2e5194c34f4c8780820f30b581b7de), [`b630ffefe83f20c458bbef88d21918479e1ae540`](https://github.com/siemens/ix/commit/b630ffefe83f20c458bbef88d21918479e1ae540), [`1055e0127f0e25a654f5a7d69e5db102340a3a83`](https://github.com/siemens/ix/commit/1055e0127f0e25a654f5a7d69e5db102340a3a83)]:
    -   @siemens/ix@3.2.0

## [@siemens/ix-aggrid@3.0.2](https://github.com/siemens/ix/releases/tag/%40siemens/ix-aggrid%403.0.2) (2025-08-04T13:36:06Z)
### Patch Changes

-   [#1983](https://github.com/siemens/ix/pull/1983) [`bbb849d7c51b8b388f9a6d2b27e0769ae1e68442`](https://github.com/siemens/ix/commit/bbb849d7c51b8b388f9a6d2b27e0769ae1e68442) Thanks [@GayatriK2002](https://github.com/GayatriK2002)! - Fix tooltip background color for **AG Grid**.

    Fixes #1932

-   Updated dependencies \[[`e8e660fd56af649eace36a313b33cda8ebb69469`](https://github.com/siemens/ix/commit/e8e660fd56af649eace36a313b33cda8ebb69469), [`ecbbd0a7435722731337b3da6cb83bb2d40654aa`](https://github.com/siemens/ix/commit/ecbbd0a7435722731337b3da6cb83bb2d40654aa), [`76016130da552410c00e0a0ea0c3bc58a015c132`](https://github.com/siemens/ix/commit/76016130da552410c00e0a0ea0c3bc58a015c132), [`455933edb3f3b9d8145ea4f58007fe815f46f841`](https://github.com/siemens/ix/commit/455933edb3f3b9d8145ea4f58007fe815f46f841), [`6b9a8fc5922f936a96e3f09e8ea11e0720aa5383`](https://github.com/siemens/ix/commit/6b9a8fc5922f936a96e3f09e8ea11e0720aa5383), [`1d273b149630b4f80ebe370963df4269ab813e4f`](https://github.com/siemens/ix/commit/1d273b149630b4f80ebe370963df4269ab813e4f), [`6642dbb398850508497bd96e00e19fd4da3aa616`](https://github.com/siemens/ix/commit/6642dbb398850508497bd96e00e19fd4da3aa616), [`6f12a6a14ebd090c979b5c5a7b30b27ef40a0e95`](https://github.com/siemens/ix/commit/6f12a6a14ebd090c979b5c5a7b30b27ef40a0e95), [`39c9694bd3cd5864e127a8628e49c895add5da62`](https://github.com/siemens/ix/commit/39c9694bd3cd5864e127a8628e49c895add5da62), [`f892591ef14286ed7876ca0b071a8fd35de79bbf`](https://github.com/siemens/ix/commit/f892591ef14286ed7876ca0b071a8fd35de79bbf), [`3f0d55ae2f195e6c86a73c409ea28976dc3f2961`](https://github.com/siemens/ix/commit/3f0d55ae2f195e6c86a73c409ea28976dc3f2961), [`3d953256650eaa541dfbb93ec5e98a48212d97ad`](https://github.com/siemens/ix/commit/3d953256650eaa541dfbb93ec5e98a48212d97ad), [`4d4e5672137dc5b803d267e0564bb5944f4d9ae2`](https://github.com/siemens/ix/commit/4d4e5672137dc5b803d267e0564bb5944f4d9ae2), [`d346cc2d69596c0a72e7ef77b64097d8500a999c`](https://github.com/siemens/ix/commit/d346cc2d69596c0a72e7ef77b64097d8500a999c), [`e44cb4912b89ab91c6ace605ff939dd4121f0a7f`](https://github.com/siemens/ix/commit/e44cb4912b89ab91c6ace605ff939dd4121f0a7f), [`4077296037dd7889ddeb175559aca11f93a33312`](https://github.com/siemens/ix/commit/4077296037dd7889ddeb175559aca11f93a33312), [`152d7af26f90e2f489d4bae99c60369449b910db`](https://github.com/siemens/ix/commit/152d7af26f90e2f489d4bae99c60369449b910db), [`9776d7fb0cc5bb3b9afb4982cbceb00a8c638549`](https://github.com/siemens/ix/commit/9776d7fb0cc5bb3b9afb4982cbceb00a8c638549), [`813b9cea25e8f6d948a992f9145254bf7045adf0`](https://github.com/siemens/ix/commit/813b9cea25e8f6d948a992f9145254bf7045adf0), [`a3ac05becce0e245f0397a8f6b9789176b7728e6`](https://github.com/siemens/ix/commit/a3ac05becce0e245f0397a8f6b9789176b7728e6), [`b67d0122acdf2f4f7df1f8d85bbd5a3fafe38624`](https://github.com/siemens/ix/commit/b67d0122acdf2f4f7df1f8d85bbd5a3fafe38624), [`2496426f26665cd848a66bc69395a7d0261fa5a5`](https://github.com/siemens/ix/commit/2496426f26665cd848a66bc69395a7d0261fa5a5), [`b519b420fd3ca5de9c73c227ce78431b520ec4a6`](https://github.com/siemens/ix/commit/b519b420fd3ca5de9c73c227ce78431b520ec4a6), [`023cad0595fb3b110de2f62d982c32275b4aaea6`](https://github.com/siemens/ix/commit/023cad0595fb3b110de2f62d982c32275b4aaea6), [`963502f6fe2e5194c34f4c8780820f30b581b7de`](https://github.com/siemens/ix/commit/963502f6fe2e5194c34f4c8780820f30b581b7de), [`b630ffefe83f20c458bbef88d21918479e1ae540`](https://github.com/siemens/ix/commit/b630ffefe83f20c458bbef88d21918479e1ae540), [`1055e0127f0e25a654f5a7d69e5db102340a3a83`](https://github.com/siemens/ix/commit/1055e0127f0e25a654f5a7d69e5db102340a3a83)]:
    -   @siemens/ix@3.2.0

## [@siemens/ix@3.1.0](https://github.com/siemens/ix/releases/tag/%40siemens/ix%403.1.0) (2025-06-16T10:53:12Z)
### Minor Changes

-   [#1793](https://github.com/siemens/ix/pull/1793) [`826c656ab14e4e67aad0edf4e5dbacdb6add4e23`](https://github.com/siemens/ix/commit/826c656ab14e4e67aad0edf4e5dbacdb6add4e23) Thanks [@GayatriK2002](https://github.com/GayatriK2002)! - Add `form` attribute to `ix-button` to support automatic form submit.

    Fixes #1653

-   [#1856](https://github.com/siemens/ix/pull/1856) [`3a3814be041ac02df2ba4225d64b00b5ab5feb09`](https://github.com/siemens/ix/commit/3a3814be041ac02df2ba4225d64b00b5ab5feb09) Thanks [@AndreasBerliner](https://github.com/AndreasBerliner)! - Add oval attribute to **ix-icon-toggle-button**.

### Patch Changes

-   [#1922](https://github.com/siemens/ix/pull/1922) [`634fa40faac751464a5da789adf0614e323236f9`](https://github.com/siemens/ix/commit/634fa40faac751464a5da789adf0614e323236f9) Thanks [@GayatriK2002](https://github.com/GayatriK2002)! - Match icon color to border color for outline **ix-chip**.

-   [#1925](https://github.com/siemens/ix/pull/1925) [`1da72685f28e77b457386d8df3caaaa7302a28c7`](https://github.com/siemens/ix/commit/1da72685f28e77b457386d8df3caaaa7302a28c7) Thanks [@RamVinayMandal](https://github.com/RamVinayMandal)! - Update global anchor tag styling.

-   [#1887](https://github.com/siemens/ix/pull/1887) [`3aaaadbeb2c735d0e242be7f9a777437edfcbe2b`](https://github.com/siemens/ix/commit/3aaaadbeb2c735d0e242be7f9a777437edfcbe2b) Thanks [@tiagogviegas](https://github.com/tiagogviegas)! - skip render of ix-icon on `ix-pill` and `ix-chip` when `icon` is not set.

    Fixes #1885
    Fixes #1879

-   [#1874](https://github.com/siemens/ix/pull/1874) [`9346254f83af3316950a3681557939e74ba399e6`](https://github.com/siemens/ix/commit/9346254f83af3316950a3681557939e74ba399e6) Thanks [@danielleroux](https://github.com/danielleroux)! - Move falsy dependencies from "dependencies" to "devDependencies"

-   [#1762](https://github.com/siemens/ix/pull/1762) [`ec011a4b76b25916c04e918e20b448c2f87978f5`](https://github.com/siemens/ix/commit/ec011a4b76b25916c04e918e20b448c2f87978f5) Thanks [@varun-srinivasa](https://github.com/varun-srinivasa)! - Ensure that all items can be reached via scrolling inside overflowing `ix-dropdown`. Fixes #1671

-   [#1888](https://github.com/siemens/ix/pull/1888) [`f99ca055f217ef87a10047ea3b48f4ecc1e2522b`](https://github.com/siemens/ix/commit/f99ca055f217ef87a10047ea3b48f4ecc1e2522b) Thanks [@danielleroux](https://github.com/danielleroux)! - Show correct icons within predefined message modals

    Fixes #1886

-   [#1849](https://github.com/siemens/ix/pull/1849) [`f1ea5f5c142311fc815adc3ac786e1c65f2498ad`](https://github.com/siemens/ix/commit/f1ea5f5c142311fc815adc3ac786e1c65f2498ad) Thanks [@GayatriK2002](https://github.com/GayatriK2002)! - Ensure that the toast position is applied correctly, even if the custom component is not defined yet.

    Fixes: #1381

-   [#1914](https://github.com/siemens/ix/pull/1914) [`3c2a336ed03a0766fcc909a1b0cdfdc9026d00f4`](https://github.com/siemens/ix/commit/3c2a336ed03a0766fcc909a1b0cdfdc9026d00f4) Thanks [@1307-Dev](https://github.com/1307-Dev)! - Set correct margin between button and label for `ix-toggle`.

## [@siemens/ix-vue@3.1.0](https://github.com/siemens/ix/releases/tag/%40siemens/ix-vue%403.1.0) (2025-06-16T10:53:15Z)
### Minor Changes

-   [#1793](https://github.com/siemens/ix/pull/1793) [`826c656ab14e4e67aad0edf4e5dbacdb6add4e23`](https://github.com/siemens/ix/commit/826c656ab14e4e67aad0edf4e5dbacdb6add4e23) Thanks [@GayatriK2002](https://github.com/GayatriK2002)! - Add `form` attribute to `ix-button` to support automatic form submit.

    Fixes #1653

-   [#1856](https://github.com/siemens/ix/pull/1856) [`3a3814be041ac02df2ba4225d64b00b5ab5feb09`](https://github.com/siemens/ix/commit/3a3814be041ac02df2ba4225d64b00b5ab5feb09) Thanks [@AndreasBerliner](https://github.com/AndreasBerliner)! - Add oval attribute to **ix-icon-toggle-button**.

### Patch Changes

-   [#1861](https://github.com/siemens/ix/pull/1861) [`a32fcefdda7087207ecaa354c5ce62ca18063548`](https://github.com/siemens/ix/commit/a32fcefdda7087207ecaa354c5ce62ca18063548) Thanks [@tiagogviegas](https://github.com/tiagogviegas)! - Fix triggering of events

    Fixes #1395

-   Updated dependencies \[[`826c656ab14e4e67aad0edf4e5dbacdb6add4e23`](https://github.com/siemens/ix/commit/826c656ab14e4e67aad0edf4e5dbacdb6add4e23), [`634fa40faac751464a5da789adf0614e323236f9`](https://github.com/siemens/ix/commit/634fa40faac751464a5da789adf0614e323236f9), [`1da72685f28e77b457386d8df3caaaa7302a28c7`](https://github.com/siemens/ix/commit/1da72685f28e77b457386d8df3caaaa7302a28c7), [`3aaaadbeb2c735d0e242be7f9a777437edfcbe2b`](https://github.com/siemens/ix/commit/3aaaadbeb2c735d0e242be7f9a777437edfcbe2b), [`9346254f83af3316950a3681557939e74ba399e6`](https://github.com/siemens/ix/commit/9346254f83af3316950a3681557939e74ba399e6), [`ec011a4b76b25916c04e918e20b448c2f87978f5`](https://github.com/siemens/ix/commit/ec011a4b76b25916c04e918e20b448c2f87978f5), [`3a3814be041ac02df2ba4225d64b00b5ab5feb09`](https://github.com/siemens/ix/commit/3a3814be041ac02df2ba4225d64b00b5ab5feb09), [`f99ca055f217ef87a10047ea3b48f4ecc1e2522b`](https://github.com/siemens/ix/commit/f99ca055f217ef87a10047ea3b48f4ecc1e2522b), [`f1ea5f5c142311fc815adc3ac786e1c65f2498ad`](https://github.com/siemens/ix/commit/f1ea5f5c142311fc815adc3ac786e1c65f2498ad), [`3c2a336ed03a0766fcc909a1b0cdfdc9026d00f4`](https://github.com/siemens/ix/commit/3c2a336ed03a0766fcc909a1b0cdfdc9026d00f4)]:
    -   @siemens/ix@3.1.0

## [@siemens/ix-react@3.1.0](https://github.com/siemens/ix/releases/tag/%40siemens/ix-react%403.1.0) (2025-06-16T10:53:18Z)
### Minor Changes

-   [#1793](https://github.com/siemens/ix/pull/1793) [`826c656ab14e4e67aad0edf4e5dbacdb6add4e23`](https://github.com/siemens/ix/commit/826c656ab14e4e67aad0edf4e5dbacdb6add4e23) Thanks [@GayatriK2002](https://github.com/GayatriK2002)! - Add `form` attribute to `ix-button` to support automatic form submit.

    Fixes #1653

-   [#1856](https://github.com/siemens/ix/pull/1856) [`3a3814be041ac02df2ba4225d64b00b5ab5feb09`](https://github.com/siemens/ix/commit/3a3814be041ac02df2ba4225d64b00b5ab5feb09) Thanks [@AndreasBerliner](https://github.com/AndreasBerliner)! - Add oval attribute to **ix-icon-toggle-button**.

### Patch Changes

-   Updated dependencies \[[`826c656ab14e4e67aad0edf4e5dbacdb6add4e23`](https://github.com/siemens/ix/commit/826c656ab14e4e67aad0edf4e5dbacdb6add4e23), [`634fa40faac751464a5da789adf0614e323236f9`](https://github.com/siemens/ix/commit/634fa40faac751464a5da789adf0614e323236f9), [`1da72685f28e77b457386d8df3caaaa7302a28c7`](https://github.com/siemens/ix/commit/1da72685f28e77b457386d8df3caaaa7302a28c7), [`3aaaadbeb2c735d0e242be7f9a777437edfcbe2b`](https://github.com/siemens/ix/commit/3aaaadbeb2c735d0e242be7f9a777437edfcbe2b), [`9346254f83af3316950a3681557939e74ba399e6`](https://github.com/siemens/ix/commit/9346254f83af3316950a3681557939e74ba399e6), [`ec011a4b76b25916c04e918e20b448c2f87978f5`](https://github.com/siemens/ix/commit/ec011a4b76b25916c04e918e20b448c2f87978f5), [`3a3814be041ac02df2ba4225d64b00b5ab5feb09`](https://github.com/siemens/ix/commit/3a3814be041ac02df2ba4225d64b00b5ab5feb09), [`f99ca055f217ef87a10047ea3b48f4ecc1e2522b`](https://github.com/siemens/ix/commit/f99ca055f217ef87a10047ea3b48f4ecc1e2522b), [`f1ea5f5c142311fc815adc3ac786e1c65f2498ad`](https://github.com/siemens/ix/commit/f1ea5f5c142311fc815adc3ac786e1c65f2498ad), [`3c2a336ed03a0766fcc909a1b0cdfdc9026d00f4`](https://github.com/siemens/ix/commit/3c2a336ed03a0766fcc909a1b0cdfdc9026d00f4)]:
    -   @siemens/ix@3.1.0

## [@siemens/ix-angular@3.1.1](https://github.com/siemens/ix/releases/tag/%40siemens/ix-angular%403.1.1) (2025-06-16T13:54:20Z)
### Patch Changes

-   [`139f1136e105df4e4a6f9965ca4237352f0111a1`](https://github.com/siemens/ix/commit/139f1136e105df4e4a6f9965ca4237352f0111a1) Thanks [@danielleroux](https://github.com/danielleroux)! - Fix broken build output

## [@siemens/ix-angular@3.1.0](https://github.com/siemens/ix/releases/tag/%40siemens/ix-angular%403.1.0) (2025-06-16T10:53:09Z)
### Minor Changes

-   [#1793](https://github.com/siemens/ix/pull/1793) [`826c656ab14e4e67aad0edf4e5dbacdb6add4e23`](https://github.com/siemens/ix/commit/826c656ab14e4e67aad0edf4e5dbacdb6add4e23) Thanks [@GayatriK2002](https://github.com/GayatriK2002)! - Add `form` attribute to `ix-button` to support automatic form submit.

    Fixes #1653

-   [#1856](https://github.com/siemens/ix/pull/1856) [`3a3814be041ac02df2ba4225d64b00b5ab5feb09`](https://github.com/siemens/ix/commit/3a3814be041ac02df2ba4225d64b00b5ab5feb09) Thanks [@AndreasBerliner](https://github.com/AndreasBerliner)! - Add oval attribute to **ix-icon-toggle-button**.

### Patch Changes

-   [#1921](https://github.com/siemens/ix/pull/1921) [`c3f909ebba8cf0b277416f65a958418f1e1c1418`](https://github.com/siemens/ix/commit/c3f909ebba8cf0b277416f65a958418f1e1c1418) Thanks [@danielleroux](https://github.com/danielleroux)! - Fix an issue where the **ix-toast** component gets removed after tree-shaking during a production build.

-   [#1921](https://github.com/siemens/ix/pull/1921) [`c3f909ebba8cf0b277416f65a958418f1e1c1418`](https://github.com/siemens/ix/commit/c3f909ebba8cf0b277416f65a958418f1e1c1418) Thanks [@danielleroux](https://github.com/danielleroux)! - Fix an issue where the **ix-modal** component gets removed after tree-shaking during a production build.

    Fixes #1911

-   Updated dependencies \[[`826c656ab14e4e67aad0edf4e5dbacdb6add4e23`](https://github.com/siemens/ix/commit/826c656ab14e4e67aad0edf4e5dbacdb6add4e23), [`634fa40faac751464a5da789adf0614e323236f9`](https://github.com/siemens/ix/commit/634fa40faac751464a5da789adf0614e323236f9), [`1da72685f28e77b457386d8df3caaaa7302a28c7`](https://github.com/siemens/ix/commit/1da72685f28e77b457386d8df3caaaa7302a28c7), [`3aaaadbeb2c735d0e242be7f9a777437edfcbe2b`](https://github.com/siemens/ix/commit/3aaaadbeb2c735d0e242be7f9a777437edfcbe2b), [`9346254f83af3316950a3681557939e74ba399e6`](https://github.com/siemens/ix/commit/9346254f83af3316950a3681557939e74ba399e6), [`ec011a4b76b25916c04e918e20b448c2f87978f5`](https://github.com/siemens/ix/commit/ec011a4b76b25916c04e918e20b448c2f87978f5), [`3a3814be041ac02df2ba4225d64b00b5ab5feb09`](https://github.com/siemens/ix/commit/3a3814be041ac02df2ba4225d64b00b5ab5feb09), [`f99ca055f217ef87a10047ea3b48f4ecc1e2522b`](https://github.com/siemens/ix/commit/f99ca055f217ef87a10047ea3b48f4ecc1e2522b), [`f1ea5f5c142311fc815adc3ac786e1c65f2498ad`](https://github.com/siemens/ix/commit/f1ea5f5c142311fc815adc3ac786e1c65f2498ad), [`3c2a336ed03a0766fcc909a1b0cdfdc9026d00f4`](https://github.com/siemens/ix/commit/3c2a336ed03a0766fcc909a1b0cdfdc9026d00f4)]:
    -   @siemens/ix@3.1.0

## [@siemens/ix-aggrid@3.0.1](https://github.com/siemens/ix/releases/tag/%40siemens/ix-aggrid%403.0.1) (2025-06-16T10:53:06Z)
### Patch Changes

-   [#1912](https://github.com/siemens/ix/pull/1912) [`45ef3bb585dbd8d9d7aa0248314a0d57f1a90477`](https://github.com/siemens/ix/commit/45ef3bb585dbd8d9d7aa0248314a0d57f1a90477) Thanks [@Nadim901](https://github.com/Nadim901)! - Style `AG Grid` row grouping chevrons.

-   Updated dependencies \[[`826c656ab14e4e67aad0edf4e5dbacdb6add4e23`](https://github.com/siemens/ix/commit/826c656ab14e4e67aad0edf4e5dbacdb6add4e23), [`634fa40faac751464a5da789adf0614e323236f9`](https://github.com/siemens/ix/commit/634fa40faac751464a5da789adf0614e323236f9), [`1da72685f28e77b457386d8df3caaaa7302a28c7`](https://github.com/siemens/ix/commit/1da72685f28e77b457386d8df3caaaa7302a28c7), [`3aaaadbeb2c735d0e242be7f9a777437edfcbe2b`](https://github.com/siemens/ix/commit/3aaaadbeb2c735d0e242be7f9a777437edfcbe2b), [`9346254f83af3316950a3681557939e74ba399e6`](https://github.com/siemens/ix/commit/9346254f83af3316950a3681557939e74ba399e6), [`ec011a4b76b25916c04e918e20b448c2f87978f5`](https://github.com/siemens/ix/commit/ec011a4b76b25916c04e918e20b448c2f87978f5), [`3a3814be041ac02df2ba4225d64b00b5ab5feb09`](https://github.com/siemens/ix/commit/3a3814be041ac02df2ba4225d64b00b5ab5feb09), [`f99ca055f217ef87a10047ea3b48f4ecc1e2522b`](https://github.com/siemens/ix/commit/f99ca055f217ef87a10047ea3b48f4ecc1e2522b), [`f1ea5f5c142311fc815adc3ac786e1c65f2498ad`](https://github.com/siemens/ix/commit/f1ea5f5c142311fc815adc3ac786e1c65f2498ad), [`3c2a336ed03a0766fcc909a1b0cdfdc9026d00f4`](https://github.com/siemens/ix/commit/3c2a336ed03a0766fcc909a1b0cdfdc9026d00f4)]:
    -   @siemens/ix@3.1.0

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
