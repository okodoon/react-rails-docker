import { push } from 'connected-react-router'
import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import { Action } from 'redux';
import { changefunc, decrement, increment } from '../actions/counter'
import { logout } from '../actions/user'
import configureStore from '../configureStore'
import Header from './Header'

interface CounterProps {
  isPlusmode: boolean,
  increment(): void,
  decrement(): void,
  changefunc(): void,
  logout(): void,
  push():void
}

const Counter = (props:CounterProps) => (
  <div>
    <Header />
    {(() => {
      if (props.isPlusmode) {
        return (
          <div>
            <span>ADD</span>
            <button onClick={props.increment}>+</button>
            <br/>
            <button onClick={props.changefunc}>+ => -</button>
          </div>
        )
      } else {
        return (
          <div>
            <span>REDUCE</span>
            <button onClick={props.decrement}>-</button>
            <br/>
            <button onClick={props.changefunc}>- => +</button>
          </div>
        )
      }
    })()}
    <br/>
    <button onClick={props.push}>履歴ページ</button>
    <br/>
    <button onClick={props.logout}>ログアウト</button>
  </div>
)

Counter.propTypes = {
  count: PropTypes.number,
  decrement: PropTypes.func.isRequired,
  increment: PropTypes.func.isRequired,
}

const Xstore = configureStore()
export type AppState = ReturnType<typeof Xstore.getState>

const mapStateToProps = (state: AppState) => {
  const index = state.post.findIndex(obj => obj.isLoggedIn === true);
  if(index > -1){
    return {
      isPlusmode: state.post[index].count.isPlusmode,
    }
  } else {
    return {
      isPlusmode: false
    }
  }

}

const mapDispatchToProps = (dispatch: React.Dispatch<Action>) => ({
  changefunc: () => dispatch(changefunc()),
  decrement: () => dispatch(decrement()),
  increment: () => dispatch(increment()),
  logout: () => {
    dispatch(logout())
    dispatch(push('/login'))
  },
  push: () => dispatch(push('/history')),
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)