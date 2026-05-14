import { featuredMatch } from '../../data/mockFootball'
import type { MatchSummary } from '../../types/match'

export async function getFeaturedMatch(): Promise<MatchSummary> {
  return featuredMatch
}
