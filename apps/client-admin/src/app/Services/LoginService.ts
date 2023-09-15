import { publicAxios } from '@ecommerce-app/common-utils'

export interface ILoginServicePost {
  email: string
  password: string
}

export const LoginService = {
  post: async function (params: ILoginServicePost) {
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
