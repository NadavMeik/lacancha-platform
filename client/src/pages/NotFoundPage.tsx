import { Link } from '../router'
import { WorkspaceTopNav } from '../components/WorkspaceTopNav'
import '../styles/workspace-page.css'
import './NotFoundPage.css'

export function NotFoundPage() {
  return (
    <div className="workspace-page">
      <WorkspaceTopNav />
      <main className="workspace-page__main">
        <h1 className="nf__title">Page not found</h1>
        <p className="workspace-page__intro">
          That route is not part of the mock shell yet. Try the{' '}
          <Link to="/">marketing page</Link>,{' '}
          <Link to="/dashboard">dashboard</Link>, or{' '}
          <Link to="/competitions">competitions hub</Link>.
        </p>
      </main>
    </div>
  )
}
