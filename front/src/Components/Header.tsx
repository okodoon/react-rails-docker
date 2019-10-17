import { push } from 'connected-react-router'
import React from 'react'
import { connect } from 'react-redux'
import { Action } from 'redux';

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

interface StateProps {
  count: {
    num: number
  }
  post: {
    name: string
  }
}

const mapStateToProps = (state:StateProps) => ({
  name: state.post.name,
  num: state.count.num,
})

const mapDispatchToProps = (dispatch: React.Dispatch<Action>) => ({
  push: ()  => dispatch(push('/login'))
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)