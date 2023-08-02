import { authAxios } from '@ecommerce-app/admin/Utils'

async function post({
  queryKey,
}: {
  queryKey: [string, { accessToken: string }]
}) {
  return authAxios('validate-token')
}

export const ValidateTokenService = {
  post,
}
