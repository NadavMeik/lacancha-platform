import type { MetricLeader } from '../types/match'
import './MetricPair.css'

export type MetricPairProps = {
  home: string
  away: string
  leader: MetricLeader
}

export function MetricPair({ home, away, leader }: MetricPairProps) {
  const homeClass =
    leader === 'home'
      ? 'metric-pair__side--strong'
      : leader === 'away'
        ? 'metric-pair__side--weak'
        : 'metric-pair__side--neutral'
  const awayClass =
    leader === 'away'
      ? 'metric-pair__side--strong'
      : leader === 'home'
        ? 'metric-pair__side--weak'
        : 'metric-pair__side--neutral'

  return (
    <span className="metric-pair">
      <span className={`metric-pair__side ${homeClass}`}>{home}</span>
      <span className="metric-pair__sep" aria-hidden="true">
        {' '}
        —{' '}
      </span>
      <span className={`metric-pair__side ${awayClass}`}>{away}</span>
    </span>
  )
}
