import { AppTopNav } from './components/AppTopNav'
import { parseRoute } from './routeUtils'
import { Router, useRouter } from './router'
import { CompetitionDetailPage } from './pages/CompetitionDetailPage'
import { CompetitionsPage } from './pages/CompetitionsPage'
import { DashboardPage } from './pages/DashboardPage'
import { LandingPage } from './pages/LandingPage'
import { MatchLineupsPage } from './pages/MatchLineupsPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { WorkspacePlaceholderPage } from './pages/WorkspacePlaceholderPage'

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
    case 'matches':
      return (
        <WorkspacePlaceholderPage
          title="Matches"
          description="Fixture lists, filters, and saved views will live here. For now, open a competition hub or the dashboard featured match."
        />
      )
    case 'reports':
      return (
        <WorkspacePlaceholderPage
          title="Reports"
          description="Automated briefs and exportable packs will surface here. Use the dashboard for the live mock match card in the meantime."
        />
      )
    default:
      return <NotFoundPage />
  }
}

export default function App() {
  return (
    <Router>
      <>
        <AppTopNav />
        <Routes />
      </>
    </Router>
  )
}
