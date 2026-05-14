import './PageLoader.css'

export function PageLoader() {
  return (
    <div className="page-loader" role="status" aria-label="Loading">
      <span className="page-loader__ring" aria-hidden="true" />
    </div>
  )
}

export function PageError({ message }: { message: string }) {
  return (
    <div className="page-error" role="alert">
      <p className="page-error__title">Unable to load data</p>
      <p className="page-error__message">{message}</p>
    </div>
  )
}
