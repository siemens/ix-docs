const legacyStyleExamples = new Set([
  'custom-field-validation',
  'key-value-list-with-custom-value',
  'key-value-with-custom-value',
]);

const utilityStyleExamples = new Set(['html-table', 'html-table-striped']);

export function prepareGlobalCss(globalCss: string, exampleName: string) {
  const withoutIxStyles = globalCss
    .replace(
      /^@import\s+['"]@siemens\/ix\/(?:css\/(?:default|foundation|reset|base|scrollbar|utilities|globals|legacy)\.css|dist\/siemens-ix\/siemens-ix\.css)['"];\s*$/gm,
      ''
    )
    .trimStart();

  if (legacyStyleExamples.has(exampleName)) {
    return `@import '@siemens/ix/css/legacy.css';\n\n${withoutIxStyles}`;
  }

  if (utilityStyleExamples.has(exampleName)) {
    return `@import '@siemens/ix/css/utilities.css';\n\n${withoutIxStyles}`;
  }

  return withoutIxStyles;
}
