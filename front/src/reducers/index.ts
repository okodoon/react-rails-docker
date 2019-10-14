import { connectRouter } from 'connected-react-router'
import { combineReducers } from 'redux'
import counterReducer from './counter'

const rootReducer = (history:any) => combineReducers({
  count: counterReducer,
  router: connectRouter(history)
})

export default rootReducer