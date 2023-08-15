import { CircularProgress } from '@mui/material'
import React, { Suspense, useEffect, useRef } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

export type IRoute = {
  key: string
  isRouteProtected: boolean
  component: React.FC
  path: string
  permissions?: number[]
  title?: string
}

interface Props {
  routes: IRoute[]
  isAuthenticated: boolean
  userPermissions: number[]
  onLoadDefaultRoute?: string
}

export const Routing = ({
  routes,
  isAuthenticated,
  userPermissions,
  onLoadDefaultRoute,
}: Props) => {
  const didMountRef = useRef(false)

  useEffect(() => {
    if (didMountRef.current) {
      return
    } else didMountRef.current = true
  }, [])

  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div style={{ position: 'absolute', top: '50%', left: '50%' }}>
            <CircularProgress
              size={50}
              sx={{
                color: 'rgb(241, 82, 96)',
                position: 'absolute',
                top: '50%',
                left: '50%',
              }}
            />
          </div>
        }
      >
        <Routes>
          {routes.map(
            ({ isRouteProtected, permissions, path, component, title }) => (
              <Route
                path={path}
                key={uuid()}
                element={renderRouteComponent(
                  isAuthenticated,
                  isRouteProtected,
                  userPermissions,
                  component,
                  permissions,
                  title,
                  onLoadDefaultRoute
                )}
              />
            )
          )}
        </Routes>
      </Suspense>
    </BrowserRouter>
  )

  /**
   * Validates if current authenticated user is authorized to view a route
   * @param  {} permissions
   */
  function isAuthorized(
    userPermissions: number[],
    permissions?: number[]
  ): boolean {
    return permissions !== undefined && permissions.length
      ? userPermissions.some((permissionId: number) =>
          permissions.includes(permissionId)
        )
      : true
  }

  /**
   * Conditionally selects route/component to render based on authentication or authorization
   * @param  {} isRouteProtected
   * @param  {} routeRoleAccess
   * @param  {} component
   */
  function renderRouteComponent(
    isAuthenticated: boolean,
    isRouteProtected: boolean,
    userPermissions: number[],
    component: React.FC,
    permissions?: number[],
    title?: string,
    onLoadDefaultRoute?: string
  ) {
    // HANDLE DEFAULT REDIRECT BASED ON USER PERMISSIONS; ON PAGE LOAD
    if (onLoadDefaultRoute && !didMountRef.current) {
      return <Navigate to={onLoadDefaultRoute} />
    }

    // RENDER PUBLIC ROUTES
    if (
      isRouteProtected &&
      isAuthenticated &&
      isAuthorized(userPermissions, permissions)
    ) {
      return <>{React.createElement(component)}</>
    }

    // REDIRECT TO LOGIN PAGE IF USER IS NOT AUTHENTICATED
    if (isRouteProtected && !isAuthenticated) {
      return <Navigate to="/login" />
    }

    // REDIRECT TO PAGE NOT FOUND IF NOT PERMITTED
    if (!isAuthorized(userPermissions, permissions)) {
      return <Navigate to="/access-denied" />
    }

    // RENDER PUBLIC ROUTES
    if (!isRouteProtected && !isAuthenticated) {
      return <>{React.createElement(component)}</>
    }

    // REDIRECT TO HOME PAGE IF LOGGED IN USER ACCESS PUBLIC ROUTES
    if (!isRouteProtected && isAuthenticated) {
      return <Navigate to="/" />
    }

    return <Navigate to="/not-found" />
  }
}
