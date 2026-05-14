export function normalizePath(path: string): string {
  let p = path.trim() || '/'
  if (p !== '/' && p.endsWith('/')) p = p.slice(0, -1) || '/'
  return p
}

export type ParsedRoute =
  | { name: 'landing' }
  | { name: 'dashboard' }
  | { name: 'competitions' }
  | { name: 'competition'; competitionId: string }
  | { name: 'lineups'; matchId: string }
  | { name: 'matches' }
  | { name: 'reports' }
  | { name: 'notFound' }

/** Maps pathname to a route shape (no I/O). */
export function parseRoute(path: string): ParsedRoute {
  const p = normalizePath(path)

  if (p === '/') return { name: 'landing' }
  if (p === '/dashboard') return { name: 'dashboard' }
  if (p === '/competitions') return { name: 'competitions' }

  if (p.startsWith('/competitions/')) {
    const rest = p.slice('/competitions/'.length)
    if (rest && !rest.includes('/')) {
      return { name: 'competition', competitionId: rest }
    }
    return { name: 'notFound' }
  }

  const lineupsSuffix = '/lineups'
  if (p.startsWith('/matches/') && p.endsWith(lineupsSuffix)) {
    const inner = p.slice('/matches/'.length, -lineupsSuffix.length)
    if (inner && !inner.includes('/')) {
      return { name: 'lineups', matchId: inner }
    }
    return { name: 'notFound' }
  }

  if (p === '/matches') return { name: 'matches' }
  if (p === '/reports') return { name: 'reports' }

  return { name: 'notFound' }
}
