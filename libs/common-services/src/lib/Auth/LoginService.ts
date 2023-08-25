import { publicAxios } from '@ecommerce-app/admin/Utils'

export const LoginService = {
  post: async function (params: { email: string; password: string }) {
    const { email, password } = params

    return publicAxios({
      url: '/auth/local',
      method: 'POST',
      data: {
        identifier: email,
        password,
      },
    })
  },
}
