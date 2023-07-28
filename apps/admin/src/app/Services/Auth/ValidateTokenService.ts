import { authAxios } from '@ecommerce-app/admin/Utils'

async function get({
  queryKey,
}: {
  queryKey: [string, { accessToken: string }]
}) {
  return authAxios('validate-token')
}

export const ValidateTokenService = {
  get,
}
