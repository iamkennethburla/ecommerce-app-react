import { useEffect } from 'react'
import AppBootstrap from './AppBootstrap'
import { reducers } from './Core/Store'
import ReactQueryProvider from './Providers/ReactQueryProvider'
import ReduxProvider from './Providers/ReduxProvider'

export function App() {
  useEffect(() => {
    if (localStorage.getItem('ecom-app-access-token')) return
    else localStorage.setItem('ecom-app-access-token', 'test-token')
  }, [])

  return (
    <ReduxProvider reducers={reducers}>
      <ReactQueryProvider>
        <AppBootstrap />
      </ReactQueryProvider>
    </ReduxProvider>
  )
}

export default App
