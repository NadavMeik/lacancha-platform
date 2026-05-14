import type { CompetitionCategory } from '../../types/competition'
import './CompetitionCategoryNav.css'

export type CompetitionCategoryNavProps = {
  value: CompetitionCategory | 'all'
  onChange: (next: CompetitionCategory | 'all') => void
}

const items: Array<{ id: CompetitionCategory | 'all'; label: string }> = [
  { id: 'all', label: 'All' },
  { id: 'league', label: 'Leagues' },
  { id: 'tournament', label: 'Tournaments' },
  { id: 'national', label: 'National teams' },
]

export function CompetitionCategoryNav({
  value,
  onChange,
}: CompetitionCategoryNavProps) {
  return (
    <div className="ccat" role="tablist" aria-label="Competition category">
      {items.map((item) => (
        <button
          key={item.id}
          type="button"
          role="tab"
          aria-selected={value === item.id}
          className={`ccat__btn${value === item.id ? ' ccat__btn--active' : ''}`}
          onClick={() => onChange(item.id)}
        >
          {item.label}
        </button>
      ))}
    </div>
  )
}
