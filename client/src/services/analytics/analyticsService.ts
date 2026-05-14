import type { MetricLeader } from '../../types/match'

export function scoreLeader(homeGoals: number, awayGoals: number): MetricLeader {
  if (homeGoals === awayGoals) return 'even'
  return homeGoals > awayGoals ? 'home' : 'away'
}
