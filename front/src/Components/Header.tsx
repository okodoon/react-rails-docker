import { push } from 'connected-react-router'
import React from 'react'
import { connect } from 'react-redux'
import { Action } from 'redux';
import configureStore from '../configureStore'

interface HeaderProps {
  name: string,
  num: number
}
const Header = (props:HeaderProps) => (
  <div>
    <p>CountNumber: {props.num}</p>
    <p>UserName: {props.name}</p>
  </div>
)

const Xstore = configureStore()
export type AppState = ReturnType<typeof Xstore.getState>

const mapStateToProps = (state:AppState) => {
  const index = state.post.findIndex(obj => obj.isLoggedIn === true);
  if(index > -1){
    return {
      name: state.post[index].name,
      num: state.post[index].count.num,
    }
  } else {
    return {
      name: "非ログインユーザー",
      num: 0
    }
  }
}

const mapDispatchToProps = (dispatch: React.Dispatch<Action>) => ({
  push: ()  => dispatch(push('/login'))
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)