export type ImportedComponentReplacement = {
  importPath: string;
  markdown: string;
};

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function importedLocalNames(importClause: string): string[] {
  const clause = importClause.trim();
  if (clause.startsWith('type ')) {
    return [];
  }

  const names: string[] = [];
  const addName = (value: string) => {
    if (/^[A-Za-z_$][\w$]*$/.test(value)) {
      names.push(value);
    }
  };

  const namedStart = clause.indexOf('{');
  if (namedStart >= 0) {
    const defaultImport = clause.slice(0, namedStart).replace(/,\s*$/, '').trim();
    if (defaultImport) {
      addName(defaultImport);
    }

    const namedEnd = clause.lastIndexOf('}');
    if (namedEnd < namedStart) {
      return names;
    }

    clause
      .slice(namedStart + 1, namedEnd)
      .split(',')
      .forEach((binding) => {
        const parts = binding.trim().replace(/^type\s+/, '').split(/\s+as\s+/);
        addName((parts[1] ?? parts[0]).trim());
      });
    return names;
  }

  addName(clause.replace(/,\s*$/, '').trim());
  return names;
}

/**
 * Replace JSX rendered by a component imported from a known site path.
 *
 * The imported local binding is read from the import declaration, rather than
 * assuming that the binding has the same name as the exported component.
 */
export function replaceImportedComponentWithMarkdown(
  content: string,
  { importPath, markdown }: ImportedComponentReplacement
): string {
  if (typeof importPath !== 'string' || importPath.trim() === '') {
    throw new Error(
      'Imported component replacement: importPath must be a non-empty string.'
    );
  }
  if (typeof markdown !== 'string') {
    throw new Error(
      'Imported component replacement: markdown must be a string.'
    );
  }

  const importRegex = new RegExp(
    `^[\\t ]*import[\\t ]+((?:[A-Za-z_$][\\w$]*[\\t ]*,[\\t ]*)?\\{[^}]*\\}|[A-Za-z_$][\\w$]*)[\\t ]+from[\\t ]+(['"])${escapeRegExp(
      importPath
    )}\\2[\\t ]*;?[\\t ]*(?:\\r?\\n|$)`,
    'gm'
  );
  const imports = [...content.matchAll(importRegex)];
  if (imports.length === 0) {
    throw new Error(
      `Imported component replacement: no import from "${importPath}" was found.`
    );
  }

  const localNames = [
    ...new Set(imports.flatMap((match) => importedLocalNames(match[1]))),
  ];
  if (localNames.length === 0) {
    throw new Error(
      `Imported component replacement: no usable local binding was found for "${importPath}".`
    );
  }

  let nextContent = content;
  let replacedTag = false;

  for (const localName of localNames) {
    const escapedLocalName = escapeRegExp(localName);
    const pairedTagRegex = new RegExp(
      `<${escapedLocalName}(?=[\\s/>])[^>]*>[\\s\\S]*?<\\/${escapedLocalName}\\s*>`,
      'g'
    );
    const selfClosingTagRegex = new RegExp(
      `<${escapedLocalName}(?=[\\s/>])[^>]*\\/\\s*>`,
      'g'
    );

    const before = nextContent;
    nextContent = nextContent
      .replace(pairedTagRegex, () => markdown)
      .replace(selfClosingTagRegex, () => markdown);
    replacedTag ||= nextContent !== before;
  }

  if (!replacedTag) {
    throw new Error(
      `Imported component replacement: no JSX usage was found for the import from "${importPath}".`
    );
  }

  return nextContent.replace(importRegex, '');
}
