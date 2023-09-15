
export const useLogout = () => {
  return { logout }

  function logout() {
    localStorage.removeItem('ecom-app-access-token')
    setTimeout(() => window.location.replace('/'), 200)
  }
}
