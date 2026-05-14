import { normalizePath } from './routeUtils'
import { Router, useRouter } from './router'
import { DashboardPage } from './pages/DashboardPage'
import { LandingPage } from './pages/LandingPage'

function Routes() {
  const { pathname } = useRouter()
  const path = normalizePath(pathname)

  if (path === '/dashboard') {
    return <DashboardPage />
  }

  return <LandingPage />
}

export default function App() {
  return (
    <Router>
      <Routes />
    </Router>
  )
}
