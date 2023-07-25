export function useGetStoreService() {
  const { data, loading, error } = {
    data: [
      {
        id: 1,
        name: 'Store 1',
      },
      {
        id: 2,
        name: 'Store 2',
      },
    ],
    loading: false,
    error: null,
  }

  return { data, loading, error }
}
