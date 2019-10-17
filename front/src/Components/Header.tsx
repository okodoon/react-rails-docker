import { push } from 'connected-react-router'
import React from 'react'
import { connect } from 'react-redux'

const Header = (props:any) => (
  <div>

    <p>CountNumber: {props.num}</p>
    <p>UserName: {props.name}</p>
  </div>
)

const mapStateToProps = (state:any) => ({
  name: state.post.name,
  num: state.count.num,
})

const mapDispatchToProps = (dispatch:any) => ({
  push: ()  => dispatch(push('/login'))
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)