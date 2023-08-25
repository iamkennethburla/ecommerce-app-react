import { authAxios } from '@ecommerce-app/admin/Utils'

export const ValidateTokenService = {
  get: async function (params: { accessToken: string }) {
    return authAxios('validate-token')
  },
}
