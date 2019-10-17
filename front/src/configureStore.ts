import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import createRootReducer from './reducers'

export const history = createBrowserHistory()

export default function configureStore() {
  const store = createStore(
    createRootReducer(history),
    applyMiddleware(
      routerMiddleware(history),
      thunk
    ),
  )

  return store
}