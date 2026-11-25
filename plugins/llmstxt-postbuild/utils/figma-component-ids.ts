import { readFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import path from 'node:path';

const FIGMA_TAG_NAME = 'figma-main-component-id';

type DocsTag = { name?: unknown; text?: unknown };
type ComponentDocEntry = { tag?: unknown; docsTags?: unknown };

export function parseFigmaComponentIds(componentDoc: unknown) {
  const ids = new Map<string, string>();
  const components = (componentDoc as { components?: unknown })?.components;

  if (!Array.isArray(components)) {
    throw new Error(
      'Figma component IDs: component-doc.json has no components array.'
    );
  }

  for (const component of components as ComponentDocEntry[]) {
    if (typeof component?.tag !== 'string' || !Array.isArray(component.docsTags)) {
      continue;
    }

    const figmaTag = (component.docsTags as DocsTag[]).find(
      (tag) => tag?.name === FIGMA_TAG_NAME && typeof tag.text === 'string'
    );
    const id = (figmaTag?.text as string | undefined)?.trim();

    if (id) {
      ids.set(component.tag, id);
    }
  }

  return ids;
}

export async function loadFigmaComponentIds(siteDir: string) {
  const resolveFromSite = createRequire(path.join(siteDir, 'package.json'));
  const componentDocPath = resolveFromSite.resolve(
    '@siemens/ix/component-doc.json'
  );

  return parseFigmaComponentIds(
    JSON.parse(await readFile(componentDocPath, 'utf8'))
  );
}

export function formatFigmaComponentIdLine(id: string) {
  return `Figma main component ID: \`${id}\` (node ID of the matching main component in the IX Figma library; use it to map Figma design specs to this component).`;
}

export function injectFigmaComponentIds(
  content: string,
  ids: ReadonlyMap<string, string>
) {
  return content.replace(
    /^(## API for (ix-[a-z0-9-]+)\b[^\n]*)\n(?:\n(Figma main component ID: [^\n]*)\n)?/gm,
    (match, heading: string, tag: string, existing?: string) => {
      const id = ids.get(tag);
      if (!id || existing) {
        return match;
      }

      return `${heading}\n\n${formatFigmaComponentIdLine(id)}\n`;
    }
  );
}
