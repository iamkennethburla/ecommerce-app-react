import AppBootstrap from './AppBootstrap'
import { reducers } from './Core/Store'
import {
  ModalProvider,
  MuiThemeProvider,
  ReactQueryProvider,
  ReduxProvider,
} from './Providers'

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
