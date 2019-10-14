import * as React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Dispatch} from 'redux'
import {ReduxState} from '../store'
import Counter from './Counter'
import {CounterActions, CounterState, decrementAmount, incrementAmount} from './module'

export class ActionDispatcher {
  constructor(private dispatch: Dispatch<CounterActions>) {}

  public increment(amount: number) {
    this.dispatch(incrementAmount(amount))
  }

  public decrement(amount: number) {
    this.dispatch(decrementAmount(amount))
  }
}

export default function CounterContainer() {
  const count = useSelector<ReduxState, CounterState>((state) => {
    return state.counter
  })
  return (
      <Counter
          value={count}
          actions={new ActionDispatcher(useDispatch())}
      />
  )
}