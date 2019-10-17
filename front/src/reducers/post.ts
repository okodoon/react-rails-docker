import {
  LOG_OUT, POSTS_FAILURE, POSTS_REQUEST, POSTS_SUCCESS
} from '../actions/user'

interface PostState {
  email: string,
  isLoggedIn: boolean,
  name: string,
  token: string,
}

const initalState = {
  email: "",
  isLoggedIn: false,
  name: "",
  token: "",
}

type Actions = {
  type: "POSTS_REQUEST";
} | {
  type: "POSTS_SUCCESS",
  posts: {
    email: string,
    isLoggedIn: boolean,
    name: string,
    token: string
  }
} | {
  type: "POSTS_FAILURE";
} | {
  type: "LOG_OUT";
}

const postReducer = (state:PostState = initalState, action:Actions) => {    
  switch (action.type) {
    case POSTS_REQUEST:
      return {
        email: "",
        isLoggedIn: false,
        name: "",
        token: "",
      }
    case POSTS_SUCCESS:
      return {
        email: action.posts.email,
        isLoggedIn: true,
        name: action.posts.name,
        token: action.posts.token,
      }
    case POSTS_FAILURE:
      return {
        email: "",
        isLoggedIn: false,
        name: "",
        token: "",
      }
    case LOG_OUT:
      return {
        email: "",
        isLoggedIn: false,
        name: "",
        token: "",
      }
    default:
      return state
  }
}

export default postReducer