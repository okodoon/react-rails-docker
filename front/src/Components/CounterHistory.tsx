import { push } from 'connected-react-router'
import * as React from 'react';
import { connect } from 'react-redux'
import Header from './Header'

import './App.css'

const CounterHistory = (props:any) => (
  <div>
    <Header/>
    <div onClick={props.push}>
      {props.history.map((moment:any,index:number) => {
        return <p key={index}>{moment}</p>
      })}
      {props.history.map}
    </div>
  </div>
)

const mapStateToProps = (state:any) => ({
  history: state.count.history,
})

const mapDispatchToProps = (dispatch:any) => ({
  push: () => dispatch(push('/counter'))
})

export default connect(mapStateToProps, mapDispatchToProps)(CounterHistory)