import { parseRoute } from './routeUtils'
import { Router, useRouter } from './router'
import { CompetitionDetailPage } from './pages/CompetitionDetailPage'
import { CompetitionsPage } from './pages/CompetitionsPage'
import { DashboardPage } from './pages/DashboardPage'
import { LandingPage } from './pages/LandingPage'
import { MatchLineupsPage } from './pages/MatchLineupsPage'
import { NotFoundPage } from './pages/NotFoundPage'

function Routes() {
  const { pathname } = useRouter()
  const route = parseRoute(pathname)

  switch (route.name) {
    case 'landing':
      return <LandingPage />
    case 'dashboard':
      return <DashboardPage />
    case 'competitions':
      return <CompetitionsPage />
    case 'competition':
      return <CompetitionDetailPage competitionId={route.competitionId} />
    case 'lineups':
      return <MatchLineupsPage matchId={route.matchId} />
    default:
      return <NotFoundPage />
  }
}

export default function App() {
  return (
    <Router>
      <Routes />
    </Router>
  )
}
