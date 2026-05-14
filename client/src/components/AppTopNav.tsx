import { useState } from 'react'
import { Link, useRouter } from '../router'
import { normalizePath } from '../routeUtils'
import './AppTopNav.css'

type NavItem = {
  to: string
  label: string
  isActive: (path: string) => boolean
}

const NAV_ITEMS: NavItem[] = [
  { to: '/', label: 'Marketing', isActive: (p) => p === '/' },
  { to: '/dashboard', label: 'Dashboard', isActive: (p) => p === '/dashboard' },
  {
    to: '/competitions',
    label: 'Competitions',
    isActive: (p) => p.startsWith('/competitions'),
  },
  {
    to: '/matches',
    label: 'Matches',
    isActive: (p) => p === '/matches' || p.startsWith('/matches/'),
  },
  {
    to: '/reports',
    label: 'Reports',
    isActive: (p) => p === '/reports' || p.startsWith('/reports/'),
  },
]

export function AppTopNav() {
  const { pathname } = useRouter()
  const path = normalizePath(pathname)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className={`app-nav${menuOpen ? ' app-nav--open' : ''}`}>
      <div className="app-nav__bar">
        <div className="app-nav__start">
          <Link
            to="/"
            className="app-nav__brand"
            onClick={() => setMenuOpen(false)}
          >
            LaCancha<span className="app-nav__brand-ai">AI</span>
          </Link>
        </div>

        <button
          type="button"
          className="app-nav__toggle"
          aria-expanded={menuOpen}
          aria-controls="app-primary-nav"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span className="app-nav__toggle-bars" aria-hidden>
            <span />
            <span />
            <span />
          </span>
        </button>

        <nav
          id="app-primary-nav"
          className="app-nav__main"
          aria-label="Primary"
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`app-nav__link${item.isActive(path) ? ' app-nav__link--active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="app-nav__end" aria-hidden="true" />
      </div>
    </header>
  )
}
