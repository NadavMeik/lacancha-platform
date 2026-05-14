export function normalizePath(path: string): string {
  let p = path.trim() || '/'
  if (p !== '/' && p.endsWith('/')) p = p.slice(0, -1) || '/'
  return p
}
