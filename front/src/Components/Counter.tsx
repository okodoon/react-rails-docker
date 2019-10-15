import { push } from 'connected-react-router'
import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import { changefunc, decrement, increment } from '../actions/counter'
import { logoutMove } from '../actions/user'

const Counter = (props:any) => (
  <div>
    Counter: {props.num}
    {props.isPlusmode && <button onClick={props.increment}>+</button> }
    {!props.isPlusmode && <button onClick={props.decrement}>-</button> }

    <button onClick={props.changefunc}>押してみ</button>
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