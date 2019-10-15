import {
  LOG_OUT, POSTS_FAILURE, POSTS_REQUEST, POSTS_SUCCESS
} from '../actions/user'

const initalState = {
  email: "",
  isLoggedIn: false,
  name: "",
  token: "",
}

const postReducer = (state:any = [initalState], action:any) => {    
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