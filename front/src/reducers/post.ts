import {
  LOG_OUT, POSTS_FAILURE, POSTS_REQUEST, POSTS_SUCCESS
} from '../actions/user'

import {
  CHANGEFUNC, DECREMENT, INCREMENT
} from '../actions/counter'

import { COUNTER_INITIAL_STATE, counterReducer, CounterState } from './counter'

interface PostState {
  email: string,
  isLoggedIn: boolean,
  name: string,
  count: CounterState
}

const initalState = {
  count: COUNTER_INITIAL_STATE,
  email: "",
  isLoggedIn: false,
  name: "",
}

type Actions = {
  type: "POSTS_REQUEST";
} | {
  type: "POSTS_SUCCESS",
  posts: {
    email: string,
    isLoggedIn: boolean,
    name: string,
  }
} | {
  type: "POSTS_FAILURE";
} | {
  type: "LOG_OUT";
} | {
  type: "INCREMENT";
} | {
  type: "DECREMENT";
} | {
  type: "CHANGEFUNC";
}

const postReducer = (state:PostState = initalState, action:Actions) => {    
  switch (action.type) {
    case POSTS_REQUEST:
      return {
        ...state,
        email: "",
        isLoggedIn: false,
        name: "",
      }
    case POSTS_SUCCESS:
      return {
        ...state,
        email: action.posts.email,
        isLoggedIn: true,
        name: action.posts.name,
      }
    case POSTS_FAILURE:
      return {
        ...state,
        email: "",
        isLoggedIn: false,
        name: "",
      }
    case LOG_OUT:
      return {
        ...state,
        email: "",
        isLoggedIn: false,
        name: "",
      }
    case INCREMENT:
      return {
        ...state,
        count: counterReducer(state.count, action)
      }
    case DECREMENT:
      return {
        ...state,
        count: counterReducer(state.count, action)
      }
    case CHANGEFUNC:
      return {
        ...state,
        count: counterReducer(state.count, action)
      }
    default:
      return state
  }
}

export default postReducer