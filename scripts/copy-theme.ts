/*
 * COPYRIGHT (c) Siemens AG 2018-2025 ALL RIGHTS RESERVED.
 */
import fs from 'fs-extra';
import path from 'path';

const __dirname = path.resolve();

export default function copyTheme() {
  try {
    const __nodeModule = require.resolve('@siemens-ix/corporate-theme');
    const __from = path.join(__nodeModule, '..');

    const __htmlPreview = path.join(
      __dirname,
      'static',
      'demo',
      'v2',
      'preview',
      'html',
      'additional-theme',
      'corporate-theme',
      'dist'
    );
    fs.copySync(__from, __htmlPreview);

    console.log('Found optionalDependency @siemens-ix/corporate-theme.');
  } catch (e) {
    console.warn('optionalDependency @siemens-ix/corporate-theme not found!');
  }
}
