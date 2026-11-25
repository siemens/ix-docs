/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export type CategoryIllustration = {
  imagePath: string;
  sourceUrl: string;
};

export type CategoryIllustrations = Readonly<
  Record<string, CategoryIllustration>
>;

export const CATEGORY_ILLUSTRATIONS: CategoryIllustrations = {
  'Application frame': {
    imagePath: '/figma/wEptRgAezDU1z80Cn3eZ0o_5186_249.png',
    sourceUrl:
      'https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=5186-249&t=gkh6VNlJun96I6Ac-4',
  },
  'Navigation and hierarchy': {
    imagePath: '/figma/wEptRgAezDU1z80Cn3eZ0o_5186_259.png',
    sourceUrl:
      'https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=5186-259&t=gkh6VNlJun96I6Ac-4',
  },
  'Containers and layout': {
    imagePath: '/figma/wEptRgAezDU1z80Cn3eZ0o_5186_269.png',
    sourceUrl:
      'https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=5186-269&t=gkh6VNlJun96I6Ac-4',
  },
  Forms: {
    imagePath: '/figma/wEptRgAezDU1z80Cn3eZ0o_5186_283.png',
    sourceUrl:
      'https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=5186-283&t=gkh6VNlJun96I6Ac-4',
  },
  'Input fields and selections': {
    imagePath: '/figma/wEptRgAezDU1z80Cn3eZ0o_5186_298.png',
    sourceUrl:
      'https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=5186-298&t=gkh6VNlJun96I6Ac-11',
  },
  'Buttons and actions': {
    imagePath: '/figma/wEptRgAezDU1z80Cn3eZ0o_5186_305.png',
    sourceUrl:
      'https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=5186-305&t=gkh6VNlJun96I6Ac-11',
  },
  'System feedback and status': {
    imagePath: '/figma/wEptRgAezDU1z80Cn3eZ0o_5186_332.png',
    sourceUrl:
      'https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=5186-332&t=gkh6VNlJun96I6Ac-11',
  },
  'Data display': {
    imagePath: '/figma/wEptRgAezDU1z80Cn3eZ0o_5186_370.png',
    sourceUrl:
      'https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=5186-370&t=gkh6VNlJun96I6Ac-11',
  },
  Chat: {
    imagePath: '/figma/wEptRgAezDU1z80Cn3eZ0o_7974_3280.png',
    sourceUrl:
      'https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=7974-3280&t=HrpSIFfB7yjzt741-4',
  },
  Charts: {
    imagePath: '/figma/wEptRgAezDU1z80Cn3eZ0o_5186_387.png',
    sourceUrl:
      'https://www.figma.com/design/wEptRgAezDU1z80Cn3eZ0o/iX-Documentation-illustrations?node-id=5186-387&t=gkh6VNlJun96I6Ac-11',
  },
};
