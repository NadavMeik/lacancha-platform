import { Link } from '../router'
import { MatchCard } from '../components/MatchCard'
import { StatCard } from '../components/StatCard'
import { featuredMatch, scoreLeader } from '../data/mockFootball'
import './DashboardPage.css'

export function DashboardPage() {
  const { home, away } = featuredMatch
  const leaders = featuredMatch.metricLeaders
  const scoreLead = scoreLeader(home.goals, away.goals)

  return (
    <div className="dash">
      <div className="dash__shell">
        <header className="dash-header">
          <div className="dash-header__left">
            <div className="dash-header__titles">
              <p className="dash-header__crumb">
                LaCancha /{' '}
                <Link to={`/competitions/${featuredMatch.competitionId}`}>
                  {featuredMatch.competition}
                </Link>
              </p>
              <h1 className="dash-header__title">Match dashboard</h1>
            </div>
          </div>
          <div className="dash-header__actions">
            <button type="button" className="btn btn--ghost">
              Export snapshot
            </button>
          </div>
        </header>

        <main className="dash__main">
          <p className="dash__intro">
            Mock telemetry for a single fixture—possession, xG, finishing, and
            distribution at a glance.
          </p>

          <div className="dash__grid">
            <MatchCard match={featuredMatch} />
            <div className="dash__stats">
              <StatCard
                label="Match score"
                compare={{
                  home: String(home.goals),
                  away: String(away.goals),
                  leader: scoreLead,
                }}
                detail={`${home.short} vs ${away.short}`}
              />
              <StatCard
                label="Possession"
                compare={{
                  home: `${home.possessionPct}%`,
                  away: `${away.possessionPct}%`,
                  leader: leaders.possession,
                }}
                detail="Share of controlled sequences"
              />
              <StatCard
                label="Expected goals (xG)"
                compare={{
                  home: home.xg.toFixed(2),
                  away: away.xg.toFixed(2),
                  leader: leaders.xg,
                }}
                detail="Model-based shot quality"
              />
              <StatCard
                label="Shots on target"
                compare={{
                  home: String(home.shotsOnTarget),
                  away: String(away.shotsOnTarget),
                  leader: leaders.shotsOnTarget,
                }}
                detail="Tests of the goalkeeper"
              />
              <StatCard
                label="Pass accuracy"
                compare={{
                  home: `${home.passAccuracyPct}%`,
                  away: `${away.passAccuracyPct}%`,
                  leader: leaders.passAccuracy,
                }}
                detail="Completed / attempted (open play)"
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
