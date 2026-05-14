import { useMemo, useState } from 'react'
import { CompetitionCard } from '../components/competitions/CompetitionCard'
import { CompetitionCategoryNav } from '../components/competitions/CompetitionCategoryNav'
import type { CompetitionCategory } from '../data/competitions'
import { listCompetitions } from '../data/competitions'
import '../styles/workspace-page.css'
import './CompetitionsPage.css'

export function CompetitionsPage() {
  const [category, setCategory] = useState<CompetitionCategory | 'all'>('all')
  const rows = useMemo(() => listCompetitions(category), [category])

  return (
    <div className="workspace-page">
      <main className="workspace-page__main">
        <header className="comp-page__head">
          <h1 className="comp-page__title">Competitions</h1>
          <p className="workspace-page__intro">
            Browse mocked leagues, tournaments, and national-team contexts. Each
            card links to a competition hub with fixtures and lineup deep-links.
          </p>
        </header>

        <CompetitionCategoryNav value={category} onChange={setCategory} />

        <div className="comp-page__grid workspace-page__grid">
          {rows.map((c) => (
            <CompetitionCard key={c.competitionId} competition={c} />
          ))}
        </div>
      </main>
    </div>
  )
}
