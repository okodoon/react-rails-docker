import { push } from 'connected-react-router'
import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import { changefunc, decrement, increment } from '../actions/counter'
import { logoutMove } from '../actions/user'
import Header from './Header'

const Counter = (props:any) => (
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

const mapStateToProps = (state:any) => ({
  isPlusmode: state.count.isPlusmode,
  num: state.count.num,
})

const mapDispatchToProps = (dispatch:any) => ({
  changefunc: () => dispatch(changefunc()),
  decrement: () => dispatch(decrement()),
  increment: () => dispatch(increment()),
  logout: () => dispatch(logoutMove()),
  push: () => dispatch(push('/history')),
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)