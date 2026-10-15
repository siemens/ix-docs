import type {
  LoadedContent,
  LoadedVersion,
  PropSidebarItem,
} from '@docusaurus/plugin-content-docs';
import {
  transformComponentOverview,
  type ComponentOverviewCategory,
  type ComponentOverviewDoc,
  type ComponentOverviewDocs,
} from '../../src/components/ComponentOverview/transformer';

export const DOCS_PLUGIN_NAME = 'docusaurus-plugin-content-docs';
export const DOCS_PLUGIN_ID = 'default';

type SidebarItem = LoadedVersion['sidebars'][string][number];
type SidebarItemCategory = Extract<SidebarItem, { type: 'category' }>;

export type ComponentOverviewData = {
  sidebar: PropSidebarItem[];
  docs: ComponentOverviewDocs;
};

function fail(message: string): never {
  throw new Error(`Component overview: ${message}`);
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

function requireRecord(value: unknown, description: string) {
  if (!isRecord(value)) {
    fail(`${description} must be an object.`);
  }

  return value;
}

function requireNonEmptyString(value: unknown, description: string): string {
  if (typeof value !== 'string' || value.trim() === '') {
    fail(`${description} must be a non-empty string.`);
  }

  return value;
}

function requireString(value: unknown, description: string): string {
  if (typeof value !== 'string') {
    fail(`${description} must be a string.`);
  }

  return value;
}

/**
 * Extract the docs plugin's content from Docusaurus' aggregate content
 * object. The aggregate is intentionally treated as unknown at runtime:
 * plugin content is not validated by Docusaurus' public AllContent type.
 */
export function extractLoadedDocsContent(allContent: unknown): LoadedContent {
  const allContentRecord = requireRecord(allContent, 'Docusaurus allContent');
  const docsPluginContent = requireRecord(
    allContentRecord[DOCS_PLUGIN_NAME],
    `Docusaurus content for plugin "${DOCS_PLUGIN_NAME}"`
  );
  const loadedContent = requireRecord(
    docsPluginContent[DOCS_PLUGIN_ID],
    `Docusaurus content for plugin "${DOCS_PLUGIN_NAME}" with id "${DOCS_PLUGIN_ID}"`
  );

  if (!Array.isArray(loadedContent.loadedVersions)) {
    fail(
      `Docusaurus content for plugin "${DOCS_PLUGIN_NAME}" with id "${DOCS_PLUGIN_ID}" has no loadedVersions array.`
    );
  }

  return loadedContent as unknown as LoadedContent;
}

export function getLatestLoadedVersion(
  loadedContent: LoadedContent
): LoadedVersion {
  const contentRecord = requireRecord(
    loadedContent,
    'Loaded docs plugin content'
  );
  const loadedVersions = contentRecord.loadedVersions;

  if (!Array.isArray(loadedVersions)) {
    fail('Loaded docs plugin content has no loadedVersions array.');
  }

  const latestVersions = loadedVersions.filter(
    (version): version is LoadedVersion =>
      isRecord(version) && version.isLast === true
  );

  if (latestVersions.length === 0) {
    fail('Loaded docs plugin content has no version marked with isLast.');
  }
  if (latestVersions.length > 1) {
    fail('Loaded docs plugin content has multiple versions marked with isLast.');
  }

  const latestVersion = latestVersions[0];
  const latestVersionRecord = requireRecord(
    latestVersion,
    'The latest loaded docs version'
  );

  if (!Array.isArray(latestVersionRecord.docs)) {
    fail('The latest loaded docs version has no docs array.');
  }
  if (!isRecord(latestVersionRecord.sidebars)) {
    fail('The latest loaded docs version has no sidebars object.');
  }

  return latestVersion;
}

function getMetadata(
  docs: ComponentOverviewDocs,
  docId: string,
  context: string
): ComponentOverviewDoc {
  const metadata = docs[docId];
  if (!metadata) {
    fail(`${context} "${docId}" is missing from the loaded docs metadata.`);
  }

  return metadata;
}

function createDocsMap(loadedVersion: LoadedVersion): ComponentOverviewDocs {
  const loadedVersionRecord = requireRecord(
    loadedVersion,
    'The latest loaded docs version'
  );
  const loadedDocs = loadedVersionRecord.docs;

  if (!Array.isArray(loadedDocs)) {
    fail('The latest loaded docs version has no docs array.');
  }

  const docs: Record<string, ComponentOverviewDoc> = {};

  loadedDocs.forEach((metadata, index) => {
    const metadataRecord = requireRecord(
      metadata,
      `Loaded docs metadata entry ${index + 1}`
    );
    const id = requireNonEmptyString(
      metadataRecord.id,
      `Loaded docs metadata entry ${index + 1} id`
    );
    const title = requireNonEmptyString(
      metadataRecord.title,
      `Loaded docs metadata "${id}" title`
    );
    const description = requireString(
      metadataRecord.description,
      `Loaded docs metadata "${id}" description`
    );
    const permalink = requireNonEmptyString(
      metadataRecord.permalink,
      `Loaded docs metadata "${id}" permalink`
    );

    if (docs[id]) {
      fail(`Loaded docs metadata contains duplicate document id "${id}".`);
    }

    docs[id] = { id, title, description, permalink };
  });

  return docs;
}

function getCategoryLinkHref(
  category: SidebarItemCategory,
  docs: ComponentOverviewDocs,
  context: string
): string | undefined {
  if (!category.link) {
    return undefined;
  }

  if (category.link.type === 'doc') {
    return getMetadata(docs, category.link.id, `${context} link`).permalink;
  }

  if (category.link.type === 'generated-index') {
    return requireNonEmptyString(
      category.link.permalink,
      `${context} generated-index link permalink`
    );
  }

  fail(`${context} has an unsupported category link.`);
}

function adaptSidebarItem(
  item: SidebarItem,
  docs: ComponentOverviewDocs,
  context: string
): PropSidebarItem {
  const itemRecord = requireRecord(item, context);

  switch (itemRecord.type) {
    case 'doc':
    case 'ref': {
      const docId = requireNonEmptyString(itemRecord.id, `${context} id`);
      const metadata = getMetadata(docs, docId, `${context} document`);
      const label =
        typeof itemRecord.label === 'string' && itemRecord.label.trim() !== ''
          ? itemRecord.label
          : metadata.title;

      return {
        type: 'link',
        docId,
        href: metadata.permalink,
        label,
        ...(typeof itemRecord.className === 'string'
          ? { className: itemRecord.className }
          : {}),
        ...(isRecord(itemRecord.customProps)
          ? { customProps: itemRecord.customProps }
          : {}),
      };
    }
    case 'link':
      return {
        type: 'link',
        href: requireNonEmptyString(itemRecord.href, `${context} href`),
        label: requireNonEmptyString(itemRecord.label, `${context} label`),
        ...(typeof itemRecord.className === 'string'
          ? { className: itemRecord.className }
          : {}),
        ...(isRecord(itemRecord.customProps)
          ? { customProps: itemRecord.customProps }
          : {}),
      };
    case 'html':
      return {
        type: 'html',
        value: requireString(itemRecord.value, `${context} value`),
        ...(typeof itemRecord.className === 'string'
          ? { className: itemRecord.className }
          : {}),
      };
    case 'category': {
      const category = item as SidebarItemCategory;
      const label = requireNonEmptyString(
        itemRecord.label,
        `${context} label`
      );
      if (!Array.isArray(itemRecord.items) || itemRecord.items.length === 0) {
        fail(`${context} must contain at least one sidebar item.`);
      }

      const items = itemRecord.items.map((child, index) =>
        adaptSidebarItem(child, docs, `${context} child ${index + 1}`)
      );
      const href = getCategoryLinkHref(category, docs, context);

      return {
        type: 'category',
        label,
        collapsed: category.collapsed,
        collapsible: category.collapsible,
        items,
        ...(typeof category.className === 'string'
          ? { className: category.className }
          : {}),
        ...(isRecord(category.customProps)
          ? { customProps: category.customProps }
          : {}),
        ...(typeof category.description === 'string'
          ? { description: category.description }
          : {}),
        ...(href ? { href } : {}),
      };
    }
    default:
      fail(`${context} has an unsupported sidebar item type.`);
  }
}

/**
 * Adapt Docusaurus' server-side sidebar shape to the same processed sidebar
 * shape consumed by the browser transformer. Doc IDs are resolved through the
 * selected version's metadata so generated links retain version-aware
 * permalinks.
 */
export function adaptLoadedComponentsVersion(
  loadedVersion: LoadedVersion
): ComponentOverviewData {
  const loadedVersionRecord = requireRecord(
    loadedVersion,
    'The latest loaded docs version'
  );
  const sidebars = requireRecord(
    loadedVersionRecord.sidebars,
    'The latest loaded docs version sidebars'
  );
  const componentsSidebar = sidebars.components;

  if (!Array.isArray(componentsSidebar)) {
    fail('The latest loaded docs version has no processed components sidebar.');
  }

  const docs = createDocsMap(loadedVersion);
  const sidebar = componentsSidebar.map((item, index) =>
    adaptSidebarItem(item, docs, `Components sidebar item ${index + 1}`)
  );

  return { sidebar, docs };
}

export function getLatestComponentsOverviewData(
  allContent: unknown
): ComponentOverviewData {
  return adaptLoadedComponentsVersion(
    getLatestLoadedVersion(extractLoadedDocsContent(allContent))
  );
}

export function serializeComponentOverview(
  categories: readonly ComponentOverviewCategory[]
): string {
  if (!Array.isArray(categories) || categories.length === 0) {
    fail('Cannot serialize an empty components overview.');
  }

  return categories
    .map((category, categoryIndex) => {
      const categoryContext = `Overview category ${categoryIndex + 1}`;
      const label = requireNonEmptyString(category.label, `${categoryContext} label`);

      if (!Array.isArray(category.items) || category.items.length === 0) {
        fail(`${categoryContext} "${label}" has no component items.`);
      }

      const items = category.items.map((item, itemIndex) => {
        const context = `${categoryContext} item ${itemIndex + 1}`;
        const title = requireNonEmptyString(item.title, `${context} title`);
        const href = requireNonEmptyString(item.href, `${context} href`);
        const description = requireString(
          item.description,
          `${context} description`
        );

        return `  - [${escapeMarkdownText(title)}](${escapeMarkdownHref(href)}): ${escapeMarkdownText(description)}`;
      });

      return `- **${escapeMarkdownText(label)}**\n${items.join('\n')}`;
    })
    .join('\n');
}

function normalizeMarkdownText(value: string): string {
  return value.replace(/\s+/g, ' ').trim();
}

function escapeMarkdownText(value: string): string {
  return normalizeMarkdownText(value).replace(
    /([\\`*_{}\[\]<>~!])/g,
    '\\$1'
  );
}

function escapeMarkdownHref(value: string): string {
  return value.replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)');
}

export function buildComponentOverviewMarkdown(
  loadedContent: LoadedContent
): string {
  const { sidebar, docs } = adaptLoadedComponentsVersion(
    getLatestLoadedVersion(loadedContent)
  );
  return serializeComponentOverview(transformComponentOverview(sidebar, docs));
}
