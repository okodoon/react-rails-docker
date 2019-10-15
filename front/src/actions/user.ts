import axios from 'axios'
import { push } from 'connected-react-router'

export const POSTS_REQUEST = 'POSTS_REQUEST'
const PostsRequest = () => {
  return {
    type: POSTS_REQUEST
  }
}

export const POSTS_SUCCESS = 'POSTS_SUCCESS'
const PostsSuccess = (json:any) => {  
  return {
    posts: json,
    receivedAt: Date.now(),
    type: POSTS_SUCCESS,
  }
}

export const POSTS_FAILURE = 'POSTS_FAILURE'
const PostsFailure = (error:any) => {
  return {
    error,
    type: POSTS_FAILURE,
  }
}

export const LOG_OUT = 'LOG_OUT'
const logout = () => {
  return {
    type: LOG_OUT
  }
}

export const login = (email:string, password:string) => {
  return (dispatch:any) => {
    dispatch(PostsRequest())
    return axios.post(`http://localhost:3000/v1/users/signin`, {email, password})
      .then(res =>
        dispatch(PostsSuccess(res.data)),
        dispatch(push('/counter'))
      ).catch(err => 
        dispatch(PostsFailure(err))
      )
  }
}

export const logoutMove = () => {
  return  (dispatch:any) => {
    dispatch(logout())
    dispatch(push('/login'))
  }
}