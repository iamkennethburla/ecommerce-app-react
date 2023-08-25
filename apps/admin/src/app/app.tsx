import {
  ModalProvider,
  MuiThemeProvider,
  ReactQueryProvider,
  ReduxProvider,
} from '@ecommerce-app/common-providers'
import AppBootstrap from './AppBootstrap'
import { reducers } from './Core/Store'

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
