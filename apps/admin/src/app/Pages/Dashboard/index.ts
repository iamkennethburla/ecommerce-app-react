import { IRoute } from "apps/admin/src/app/Core/Routing/Routing"
import { lazy } from "react"

const DashboardPage = lazy(() => import("./DashboardPage/DashboardPage"))

const BASE_URL = "/"

const Routes: IRoute[] = [
  {
    key: "dashboard-page",
    isRouteProtected: false,
    component: DashboardPage,
    path: BASE_URL,
    title: "Dashboard",
    permissions: [],
  },
]

export default Routes
