import { connectRouter } from 'connected-react-router'
import { combineReducers } from 'redux'
import { counterReducer } from './counter'
import postReducer from './post'

const rootReducer = (history:any) => combineReducers({
  count: counterReducer,
  post: postReducer,
  router: connectRouter(history),
})

export default rootReducer