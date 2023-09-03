import { useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { IRoute } from './Routing'

export const RenderRoute = ({
  route,
  isAuthenticated,
  isAuthorized,
  userPermissions,
  hasAppLoadError,
}: {
  route: IRoute
  isAuthenticated: boolean
  isAuthorized: boolean
  userPermissions: number[]
  hasAppLoadError: boolean
}) => {
  const { isRouteProtected, title } = route

  useEffect(() => {
    if (title) document.title = title
  }, [title])

  // IF APP LOAD HAS ERROR
  if (hasAppLoadError) return <Navigate to="system-error" />

  // PRIVATE ROUTES
  if (isRouteProtected) {
    // IF USER IS NOT AUTHENTICATED
    if (!isAuthenticated) {
      return <Navigate to="/login" />
    }

    // IF USER IS AUTHENTICATED BUT NOT AUTHORIZED
    if (isAuthenticated && !isAuthorized) {
      return <Navigate to="/access-denied" />
    }

    // IF USER AUTHENTICATED AND AUTHORIZED
    if (isAuthenticated && isAuthorized) {
      return <Outlet />
    }
  } else {
    // IF USER IS NOT AUTHENTICATED AND ACCESS PUBLIC ROUTE
    if (!isAuthenticated) {
      return <Outlet />
    }

    // IF USER IS NOT AUTHENTICATED AND ACCESS PUBLIC ROUTE
    if (isAuthenticated) {
      return <Navigate to="/" />
    }
  }

  return <Navigate to="/not-found" />
}
