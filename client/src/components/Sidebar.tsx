import { Link, useRouter } from '../router'
import './Sidebar.css'

export type SidebarNavItem = {
  to: string
  label: string
  badge?: string
  match: 'exact' | 'prefix' | 'none'
}

const mainNav: SidebarNavItem[] = [
  { to: '/dashboard', label: 'Overview', match: 'exact' as const },
  { to: '/competitions', label: 'Competitions', match: 'prefix' as const },
  { to: '/dashboard', label: 'Matches', badge: 'Soon', match: 'none' as const },
  { to: '/dashboard', label: 'Reports', badge: 'Soon', match: 'none' as const },
]

type SidebarProps = {
  open: boolean
  onClose: () => void
}

export function Sidebar({ open, onClose }: SidebarProps) {
  const { pathname } = useRouter()

  return (
    <div className="sidebar-mount">
      <button
        type="button"
        className="sidebar__scrim"
        aria-label="Close menu"
        hidden={!open}
        onClick={onClose}
      />
      <aside
        id="app-sidebar"
        className={`sidebar${open ? ' sidebar--open' : ''}`}
        aria-label="Application"
      >
        <div className="sidebar__brand">
          <Link to="/" className="sidebar__logo" onClick={onClose}>
            LaCancha<span className="sidebar__logo-ai">AI</span>
          </Link>
          <span className="sidebar__tag">Analytics</span>
        </div>

        <nav className="sidebar__nav" aria-label="Workspace">
          <p className="sidebar__section">Workspace</p>
          <ul className="sidebar__list">
            {mainNav.map((item) => {
              const active =
                item.match === 'exact'
                  ? pathname === item.to
                  : item.match === 'prefix'
                    ? pathname.startsWith(item.to)
                    : false
              return (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className={`sidebar__link${active ? ' sidebar__link--active' : ''}`}
                    onClick={onClose}
                  >
                    <span>{item.label}</span>
                    {item.badge ? (
                      <span className="sidebar__badge">{item.badge}</span>
                    ) : null}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="sidebar__footer">
          <Link to="/" className="sidebar__muted" onClick={onClose}>
            ← Marketing site
          </Link>
        </div>
      </aside>
    </div>
  )
}
