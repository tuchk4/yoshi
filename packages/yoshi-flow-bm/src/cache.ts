import os from 'os';
import path from 'path';
import fs from 'fs-extra';
import { getProjectArtifactId } from 'yoshi-helpers/build/utils';

const getCachePath = (context: string, projectName: string) => {
  switch (os.platform()) {
    case 'win32':
      return path.join(
        os.homedir(),
        'AppData',
        'Local',
        context,
        projectName,
        'Cache',
      );
    case 'darwin':
      return path.join(os.homedir(), 'Library', 'Caches', context, projectName);
    case 'linux':
    default:
      return path.join(os.homedir(), '.cache', context, projectName);
  }
};

export const readCache = (key: string) => {
  const projectName = getProjectArtifactId()!;

  const cachePath = path.join(
    getCachePath('yoshi-flow-bm', projectName),
    'cache.json',
  );

  if (!fs.existsSync(cachePath)) {
    return undefined;
  }

  const cache = fs.readJSONSync(cachePath);

  return cache[key];
};

export const writeCache = (key: string, value: any) => {
  const projectName = getProjectArtifactId()!;

  const cachePath = path.join(
    getCachePath('yoshi-flow-bm', projectName),
    'cache.json',
  );

  const cache = fs.existsSync(cachePath) ? fs.readJSONSync(cachePath) : {};

  cache[key] = value;

  fs.ensureFileSync(cachePath);
  fs.writeJSONSync(cachePath, cache);
};

export const clearCache = () => {
  const projectName = getProjectArtifactId()!;
  const cachePath = getCachePath('yoshi-flow-bm', projectName);

  fs.rmdirSync(cachePath, { recursive: true });
};
