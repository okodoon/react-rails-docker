import axios from 'axios'
import { push } from 'connected-react-router'
import { Dispatch } from 'redux';

export const LOG_IN = 'LOG_IN'
const logIn = (data:any) => {  
  return {
    posts: data,
    type: LOG_IN,
  }
}

export const LOG_OUT = 'LOG_OUT'
export const logout = () => {
  return {
    type: LOG_OUT
  }
}

export const login = (email:string, password:string) => {
  return (dispatch: Dispatch) => {
    return axios.post(`http://localhost:3000/v1/users/signin`, {email, password})
      .then((res: { data: any; }) => {
        dispatch(logIn(res.data))
        dispatch(push('/counter'))
      })
  }
}