async function get({
  queryKey,
}: {
  queryKey: [string, { accessToken: string }]
}) {
  const [_, { accessToken }] = queryKey

  return {
    isValid: true,
  }
}

export const ValidateTokenService = {
  get,
}
