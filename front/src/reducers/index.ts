import { connectRouter } from 'connected-react-router'
import { History } from 'history'
import { combineReducers } from 'redux'
import { counterReducer } from './counter'
import postReducer from './post'

const rootReducer = (history: History) => combineReducers({
  count: counterReducer,
  post: postReducer,
  router: connectRouter(history),
})

export default rootReducer