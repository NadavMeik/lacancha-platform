import { Link } from '../router'
import { PageError, PageLoader } from '../components/PageLoader'
import { useAsync } from '../hooks/useAsync'
import { getCompetitionDetail } from '../services/competitions/competitionsService'
import '../styles/workspace-page.css'
import './CompetitionDetailPage.css'

type CompetitionDetailPageProps = {
  competitionId: string
}

export function CompetitionDetailPage({
  competitionId,
}: CompetitionDetailPageProps) {
  const state = useAsync(
    () => getCompetitionDetail(competitionId),
    [competitionId],
  )

  if (state.status === 'loading') return <PageLoader />
  if (state.status === 'error') return <PageError message={state.message} />

  const { competition, fixtures } = state.data

  if (!competition) {
    return (
      <div className="workspace-page">
        <main className="workspace-page__main">
          <h1 className="cdetail__title">Competition not found</h1>
          <p className="workspace-page__intro">
            No mock data for <code>{competitionId}</code>. Try{' '}
            <Link to="/competitions">competitions</Link>.
          </p>
        </main>
      </div>
    )
  }

  return (
    <div className="workspace-page">
      <main className="workspace-page__main">
        <p className="cdetail__crumb">
          <Link to="/competitions">Competitions</Link> / {competition.name}
        </p>
        <h1 className="cdetail__title">{competition.name}</h1>
        <p className="cdetail__meta">
          {competition.season}
          {competition.country ? ` · ${competition.country}` : ''}
        </p>
        <p className="workspace-page__intro">{competition.blurb}</p>

        <section className="cdetail__fixtures" aria-labelledby="fixtures-heading">
          <h2 id="fixtures-heading" className="cdetail__fixtures-title">
            Mock fixtures
          </h2>
          <ul className="cdetail__list">
            {fixtures.map((fx) => (
              <li key={fx.matchId} className="cdetail__row">
                <div>
                  <p className="cdetail__match">
                    {fx.home} vs {fx.away}
                  </p>
                  <p className="cdetail__sub">
                    {fx.venue} · {fx.kickoffLabel}
                  </p>
                </div>
                <Link
                  className="btn btn--ghost cdetail__lineups"
                  to={`/matches/${fx.matchId}/lineups`}
                >
                  Lineups
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  )
}
