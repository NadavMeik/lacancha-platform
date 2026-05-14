import type { MetricLeader } from '../types/match'
import { MetricPair } from './MetricPair'
import './StatCard.css'

export type StatCompare = {
  home: string
  away: string
  leader: MetricLeader
}

export type StatCardProps = {
  label: string
  detail?: string
  value?: string
  compare?: StatCompare
}

export function StatCard({ label, detail, value, compare }: StatCardProps) {
  const valueNode = compare ? (
    <p className="stat-card__value stat-card__value--split">
      <MetricPair home={compare.home} away={compare.away} leader={compare.leader} />
    </p>
  ) : (
    <p className="stat-card__value">{value}</p>
  )

  return (
    <article className="stat-card">
      <p className="stat-card__label">{label}</p>
      {valueNode}
      {detail ? <p className="stat-card__detail">{detail}</p> : null}
    </article>
  )
}
