/* eslint-disable react-refresh/only-export-components -- router exports a context hook alongside route components */
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type AnchorHTMLAttributes,
  type ReactNode,
} from 'react'
import { normalizePath } from './routeUtils'

type RouterValue = {
  pathname: string
  navigate: (to: string) => void
}

const RouterContext = createContext<RouterValue | null>(null)

export function Router({ children }: { children: ReactNode }) {
  const [pathname, setPathname] = useState(() =>
    normalizePath(window.location.pathname),
  )

  useEffect(() => {
    const onPop = () => setPathname(normalizePath(window.location.pathname))
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  const navigate = useCallback((to: string) => {
    const next = normalizePath(to)
    window.history.pushState(null, '', next)
    setPathname(next)
  }, [])

  return (
    <RouterContext.Provider value={{ pathname, navigate }}>
      {children}
    </RouterContext.Provider>
  )
}

export function useRouter(): RouterValue {
  const ctx = useContext(RouterContext)
  if (!ctx) {
    throw new Error('useRouter must be used within Router')
  }
  return ctx
}

type LinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
  to: string
}

export function Link({ to, onClick, children, ...rest }: LinkProps) {
  const { navigate, pathname } = useRouter()
  const target = normalizePath(to)
  const active = pathname === target

  return (
    <a
      href={to}
      aria-current={active ? 'page' : undefined}
      onClick={(e) => {
        onClick?.(e)
        if (e.defaultPrevented) return
        if (e.button !== 0) return
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
        e.preventDefault()
        navigate(to)
      }}
      {...rest}
    >
      {children}
    </a>
  )
}
