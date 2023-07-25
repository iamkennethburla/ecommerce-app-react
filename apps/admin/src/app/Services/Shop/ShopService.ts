async function get() {
  return [
    {
      id: 1,
      name: 'Store 1',
    },
    {
      id: 2,
      name: 'Store 2',
    },
  ]
}

export const ShopService = {
  get,
}
