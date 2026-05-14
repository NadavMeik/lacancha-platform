import type { Competition } from '../../data/competitions'
import { Link } from '../../router'
import './CompetitionCard.css'

type CompetitionCardProps = {
  competition: Competition
}

const categoryLabel: Record<Competition['category'], string> = {
  league: 'League',
  tournament: 'Tournament',
  national: 'National',
}

export function CompetitionCard({ competition }: CompetitionCardProps) {
  const to = `/competitions/${competition.competitionId}`

  return (
    <article className="comp-card">
      <p className="comp-card__eyebrow">
        {categoryLabel[competition.category]}
        {competition.country ? ` · ${competition.country}` : ''}
      </p>
      <h2 className="comp-card__title">{competition.name}</h2>
      <p className="comp-card__meta">{competition.season}</p>
      <p className="comp-card__blurb">{competition.blurb}</p>
      <Link to={to} className="btn btn--primary comp-card__cta">
        Open hub
      </Link>
    </article>
  )
}
