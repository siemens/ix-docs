/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 */

import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { glob } from 'glob';
import {
  extractTokenTableUsages,
  validateTokenTableSections,
  type DesignTokenManifest,
} from '../../src/lib/design-tokens';

export const tokenTableDocsPattern = 'docs/**/*.{md,mdx}';

export async function assertTokenTableSections(
  siteDir: string,
  manifest: DesignTokenManifest
): Promise<void> {
  const files = await glob(tokenTableDocsPattern, {
    cwd: siteDir,
    nodir: true,
    posix: true,
  });

  const usages = (
    await Promise.all(
      files.sort().map(async (file) =>
        extractTokenTableUsages(
          await readFile(path.join(siteDir, file), 'utf8'),
          file
        )
      )
    )
  ).flat();

  const errors = validateTokenTableSections(manifest, usages);
  if (errors.length > 0) {
    throw new Error(
      `Design token tables do not match the installed manifest:\n- ${errors.join('\n- ')}`
    );
  }
}
