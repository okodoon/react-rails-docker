import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import { decrement, increment } from '../actions/counter'

const Counter = (props:any) => (
  <div>
    Counter: {props.count}
    <button onClick={props.increment}>+</button>
    <button onClick={props.decrement}>-</button>
  </div>
)

Counter.propTypes = {
  count: PropTypes.number,
  decrement: PropTypes.func.isRequired,
  increment: PropTypes.func.isRequired,
}

const mapStateToProps = (state:any) => ({
  count: state.count,
})

const mapDispatchToProps = (dispatch:any) => ({
  decrement: () => dispatch(decrement()),
  increment: () => dispatch(increment()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)