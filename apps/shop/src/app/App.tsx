import {
  ModalProvider,
  MuiThemeProvider,
  ReactQueryProvider,
  ReduxProvider,
} from '@ecommerce-app/common-core'
import { reducers } from '@ecommerce-app/shop/Core/Store'
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
