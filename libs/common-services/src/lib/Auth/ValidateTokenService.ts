import { authAxios } from '@ecommerce-app/common-utils'

export const ValidateTokenService = {
  get: async function (params: { accessToken: string }) {
    return authAxios('validate-token')
  },
}
