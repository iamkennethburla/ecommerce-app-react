import { IStore } from "apps/client-admin/src/app/Core/Store"
import { useSelector } from "react-redux"

interface IUseCheckPermission {
  permissions: number[]
}

export function useCheckPermission(props: IUseCheckPermission) {
  const { permissions } = props
  const userPermissionIds = useSelector((store: IStore) => store.auth.userPermissionIds)

  return { hasPermission: hasPermission(permissions) }

  function hasPermission(permissions: number[]) {
    return userPermissionIds.some((permissionId: number) => permissions.includes(permissionId))
  }
}
