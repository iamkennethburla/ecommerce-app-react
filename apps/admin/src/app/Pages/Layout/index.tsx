import { IRoute } from 'apps/admin/src/app/Core/Routing/Routing'
import { Navigate } from 'react-router-dom'

const Routes: IRoute[] = [
  {
    key: 'default-page',
    isRouteProtected: true,
    component: () => <Navigate to="/dashboard" />,
    path: '/',
  },
]

export default Routes
