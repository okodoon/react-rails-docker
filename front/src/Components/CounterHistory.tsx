import { push } from 'connected-react-router'
import * as React from 'react';
import { connect } from 'react-redux'
import { Action } from 'redux';
import Header from './Header'

import './App.css'

interface CounterHistoryProps {
  history: string[],
  push():void
}

const CounterHistory = (props:CounterHistoryProps) => (
  <div>
    <Header/>
    <div onClick={props.push}>
      {props.history.map((moment: string, index: number) => {
        return <p key={index}>{moment}</p>
      })}
      {props.history.map}
    </div>
  </div>
)

interface StateProps {
  count: {
    history: string[],
  }
}

const mapStateToProps = (state:StateProps) => ({
  history: state.count.history,
})

const mapDispatchToProps = (dispatch: React.Dispatch<Action>) => ({
  push: () => dispatch(push('/counter'))
})

export default connect(mapStateToProps, mapDispatchToProps)(CounterHistory)