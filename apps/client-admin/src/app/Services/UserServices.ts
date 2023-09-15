import { authAxios } from '@ecommerce-app/common-utils'

export const UserService = {
  get: async function () {
    return authAxios({
      url: '/users/me',
    })
  },
}
