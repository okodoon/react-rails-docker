import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Counter from '../components/Counter'
import CounterHistory from '../components/CounterHistory'
import FormContainer from '../components/FormContainer'

const routes = (
  <div>
    <Switch>
      <Route path="/login" component={FormContainer} />
      <Route path="/counter" component={Counter} />
      <Route path="/history" component={CounterHistory} />
    </Switch>
  </div>
)

export default routes