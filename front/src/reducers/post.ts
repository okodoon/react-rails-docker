import {
  LOG_IN, LOG_OUT,
} from '../actions/user'

import {
  CHANGEFUNC, DECREMENT, INCREMENT
} from '../actions/counter'

import { COUNTER_INITIAL_STATE, counterReducer, CounterState } from './counter'

interface PostState {
  email: string,
  isLoggedIn: boolean,
  name: string,
  count: CounterState,
  token: string,
}

const initalState = [{
  count: COUNTER_INITIAL_STATE,
  email: "",
  isLoggedIn: false,
  name: "",
  token: ""
}]

type Actions = {
  type: "LOG_IN",
  posts: {
    name: string,
    email: string,
    token: string
  }
} | {
  type: "LOG_OUT";
  posts: {
    token: string
  }
} | {
  type: "INCREMENT",
  posts: {
    token: string
  }
} | {
  type: "DECREMENT",
  posts: {
    token: string
  }
} | {
  type: "CHANGEFUNC",
  posts: {
    token: string
  }
}

const postReducer = (state: PostState[] = initalState, action:Actions) => {    
  switch (action.type) {
    case LOG_IN: {
      const loginIndex = state.findIndex(obj => obj.token === action.posts.token);
      if(loginIndex>0) {
        return [
          ...state.slice(0, loginIndex),
          {
            ...state[loginIndex],
            isLoggedIn: true,
            token: action.posts.token
          },
          ...state.slice(loginIndex + 1)
        ]
      } else {
        return [
          ...state,
          {
            count: COUNTER_INITIAL_STATE,
            email: action.posts.email,
            isLoggedIn: true,
            name: action.posts.name,
            token: action.posts.token
          }
        ]
      }
    }
    case LOG_OUT:
      const logoutIndex = state.findIndex(obj => obj.isLoggedIn === true);
      if(logoutIndex>0) {
        return [
          ...state.slice(0, logoutIndex),
          {
            ...state[logoutIndex],
            isLoggedIn: false,
          },
          ...state.slice(logoutIndex + 1)
        ]
      } else {
        return state
      }
    case INCREMENT:
      const incIndex = state.findIndex(obj => obj.isLoggedIn === true);
      if(incIndex>0) {
        return [
          ...state.slice(0, incIndex),
          {
            ...state[incIndex],
            count: counterReducer(state[incIndex].count, action)
          },
          ...state.slice(incIndex + 1)
        ]
      } else {
        return state
      }
    case DECREMENT:
        const decIndex = state.findIndex(obj => obj.isLoggedIn === true);
        if(decIndex>0) {
          return [
            ...state.slice(0, decIndex),
            {
              ...state[decIndex],
              count: counterReducer(state[decIndex].count, action)
            },
            ...state.slice(decIndex + 1)
          ]
        } else {
          return state
        }
    case CHANGEFUNC:
        const changeIndex = state.findIndex(obj => obj.isLoggedIn === true);
        if(changeIndex>0) {
          return [
            ...state.slice(0, changeIndex),
            {
              ...state[changeIndex],
              count: counterReducer(state[changeIndex].count, action)
            },
            ...state.slice(changeIndex + 1)
          ]
        }
    default:
      return state
  }
}

export default postReducer