import { Link, useRouter } from '../router'
import './WorkspaceTopNav.css'

export function WorkspaceTopNav() {
  const { pathname } = useRouter()

  return (
    <header className="wtop">
      <Link to="/" className="wtop__brand">
        LaCancha<span className="wtop__brand-ai">AI</span>
      </Link>
      <nav className="wtop__nav" aria-label="Workspace">
        <Link
          to="/dashboard"
          className={`wtop__link${pathname === '/dashboard' ? ' wtop__link--active' : ''}`}
        >
          Dashboard
        </Link>
        <Link
          to="/competitions"
          className={`wtop__link${pathname.startsWith('/competitions') ? ' wtop__link--active' : ''}`}
        >
          Competitions
        </Link>
        <Link
          to="/"
          className={`wtop__link${pathname === '/' ? ' wtop__link--active' : ''}`}
        >
          Marketing
        </Link>
      </nav>
    </header>
  )
}
