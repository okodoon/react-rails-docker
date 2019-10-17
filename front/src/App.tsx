import { ConnectedRouter } from 'connected-react-router'
import {History} from 'history'
import React from 'react'
import routes from './routes'

interface AppProps {
  history: History;
}

const App = ({history}: AppProps) => {
  return (
    <ConnectedRouter history={history}>
      { routes }
    </ConnectedRouter>
  )
}

export default App