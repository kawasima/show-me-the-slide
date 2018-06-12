/* global module */
import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import { browserHistory } from '../store'
import { hot } from 'react-hot-loader'

import SlideEditPage from './pages/SlideEditPage'

const App = () => (
  <ConnectedRouter history={browserHistory}>
    <Switch>
      <Route path="/" component={SlideEditPage}/>
    </Switch>
  </ConnectedRouter>
)

export default hot(module)(App)
