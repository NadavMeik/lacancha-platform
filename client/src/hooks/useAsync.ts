import { useEffect, useRef, useState } from 'react'

export type AsyncState<T> =
  | { status: 'loading' }
  | { status: 'success'; data: T }
  | { status: 'error'; message: string }

/**
 * Runs an async factory on mount (and when deps change), returning loading /
 * success / error state. Stale responses from superseded requests are discarded
 * via a generation counter — only the latest in-flight request can write state.
 *
 * Note: state is not reset to 'loading' between dep-change re-fetches. For
 * mock data (synchronous Promises) this is imperceptible. When real network
 * calls are introduced, add explicit loading reset via a separate mechanism.
 */
export function useAsync<T>(
  factory: () => Promise<T>,
  deps: readonly unknown[],
): AsyncState<T> {
  const gen = useRef(0)
  const [state, setState] = useState<AsyncState<T>>({ status: 'loading' })

  useEffect(() => {
    const id = ++gen.current
    factory().then(
      (data) => {
        if (id === gen.current) setState({ status: 'success', data })
      },
      (err: unknown) => {
        if (id === gen.current)
          setState({
            status: 'error',
            message:
              err instanceof Error ? err.message : 'Something went wrong',
          })
      },
    )
    // deps are forwarded from the call-site; exhaustive-deps cannot analyze them
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return state
}
