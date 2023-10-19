import React from 'react'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '@/app/store/redux/store'
import env from '@/config/env'

const App: React.FC<React.PropsWithChildren> = ({ children }): JSX.Element => {
  return (
    <Provider store={store}>
      <HashRouter basename={env.routeBaseName}>{children}</HashRouter>
    </Provider>
  )
}

export default App
