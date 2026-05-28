const BASE_PATH = '/PRISM';

export function withBasePath(path: string): string {
  if (path.startsWith('http')) return path;
  return `${BASE_PATH}${path}`;
}
