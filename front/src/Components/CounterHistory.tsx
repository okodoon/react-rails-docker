import { push } from 'connected-react-router'
import * as React from 'react';
import { connect } from 'react-redux'
import { Action } from 'redux';
import configureStore from '../configureStore'
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
      <button onClick={props.push}>カウンターページに戻る</button>
    </div>
  </div>
)

const Xstore = configureStore()
export type AppState = ReturnType<typeof Xstore.getState>

const mapStateToProps = (state:AppState) => {
  const index = state.post.findIndex(obj => obj.isLoggedIn === true);
  if(index > -1){
    return {
      history: state.post[index].count.history,
    }
  } else {
    return {
      history: ["ログインユーザーではないので履歴はありません"]
    }
  }
}

const mapDispatchToProps = (dispatch: React.Dispatch<Action>) => ({
  push: () => dispatch(push('/counter'))
})

export default connect(mapStateToProps, mapDispatchToProps)(CounterHistory)