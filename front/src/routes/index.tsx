import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Counter from '../components/Counter'
import SignInContainer from '../components/SignInContainer'

const routes = (
  <div>
    <Switch>
      <Route path="/login" component={SignInContainer} />
      <Route path="/counter" component={Counter} />
    </Switch>
  </div>
)

export default routes