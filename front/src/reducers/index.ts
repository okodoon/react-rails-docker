import { connectRouter } from 'connected-react-router'
import { History } from 'history'
import { combineReducers } from 'redux'
import postReducer from './post'

const rootReducer = (history: History) => combineReducers({
  post: postReducer,
  router: connectRouter(history),
})

export default rootReducer