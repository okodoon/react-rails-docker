import { push } from 'connected-react-router'
import * as React from 'react';
import { connect } from 'react-redux'

import './App.css'

const CounterHistory = (props:any) => (
  <div onClick={props.push} className="modal_wrapper">
    {props.history}
    dfsafsadf
  </div>
)

const mapStateToProps = (state:any) => ({
  history: state.count.history,
})

const mapDispatchToProps = (dispatch:any) => ({
  push: () => dispatch(push('/counter'))
})

export default connect(mapStateToProps, mapDispatchToProps)(CounterHistory)