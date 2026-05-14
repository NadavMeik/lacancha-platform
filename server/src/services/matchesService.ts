import { featuredMatch } from '../data/mockFootball'
import type { MatchSummary } from '../types/match'

export async function getFeaturedMatch(): Promise<MatchSummary> {
  return featuredMatch
}

export async function getMatchById(id: string): Promise<MatchSummary | null> {
  if (featuredMatch.id === id) return featuredMatch
  return null
}
