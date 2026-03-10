import { access } from 'node:fs/promises';

export async function fileExists(filePath: string) {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
}

export async function waitForFiles(
  files: string[],
  timeoutMs = 15000,
  intervalMs = 250,
) {
  const startTime = Date.now();

  while (Date.now() - startTime < timeoutMs) {
    const results = await Promise.all(files.map(fileExists));
    if (results.every(Boolean)) {
      return true;
    }

    await new Promise((resolve) => setTimeout(resolve, intervalMs));
  }

  return false;
}
