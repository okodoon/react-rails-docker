import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Counter from '../components/Counter'
import CounterHistory from '../components/CounterHistory'
import FormContainer from '../components/FormContainer'

const routes = (
  <div>
    <Switch>
      <Route path="/login" component={FormContainer} />
      <Redirect exact={true} from="/" to="/login" />
      <Route path="/counter" component={Counter} />
      <Route path="/history" component={CounterHistory} />
    </Switch>
  </div>
)

export default routes