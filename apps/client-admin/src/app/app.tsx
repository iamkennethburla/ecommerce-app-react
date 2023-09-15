import { reducers } from '@ecommerce-app/admin/src/app/Core/Store'
import {
  ModalProvider,
  MuiThemeProvider,
  ReactQueryProvider,
  ReduxProvider,
} from '@ecommerce-app/common-core'
import AppBootstrap from './AppBootstrap'

export function App() {
  return (
    <ReduxProvider reducers={reducers}>
      <ReactQueryProvider>
        <MuiThemeProvider>
          <ModalProvider>
            <AppBootstrap />
          </ModalProvider>
        </MuiThemeProvider>
      </ReactQueryProvider>
    </ReduxProvider>
  )
}

export default App
