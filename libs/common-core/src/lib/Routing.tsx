import { CircularProgress } from '@mui/material'
import React, { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { RenderRoute } from './RenderRoute'

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
  hasAppLoadError?: boolean
}

export const Routing = ({
  routes,
  isAuthenticated,
  userPermissions,
  hasAppLoadError = false,
}: Props) => {
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
          {routes.map((route) => (
            <Route
              key={route.key}
              element={
                <RenderRoute
                  route={route}
                  isAuthorized={isAuthorized(
                    userPermissions,
                    route.permissions
                  )}
                  isAuthenticated={isAuthenticated}
                  userPermissions={userPermissions}
                  hasAppLoadError={hasAppLoadError}
                />
              }
            >
              <Route element={<route.component />} path={route.path} />
            </Route>
          ))}
        </Routes>
      </Suspense>
    </BrowserRouter>
  )

  function isAuthorized(
    userPermissions: number[],
    permissions?: number[]
  ): boolean {
    if (permissions !== undefined && permissions.length) {
      return userPermissions.some((permissionId: number) =>
        permissions.includes(permissionId)
      )
    } else return true
  }
}
