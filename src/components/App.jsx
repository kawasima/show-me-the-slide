/* global module */
import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import { browserHistory } from '../store'
import { hot } from 'react-hot-loader'

import SlideShowPage from './pages/SlideShowPage'
import SlideEditPage from './pages/SlideEditPage'
import SlideExportPage from './pages/SlideExportPage'
import SlidePrintPage from './pages/SlidePrintPage'

const App = () => (
  <ConnectedRouter history={browserHistory}>
    <Switch>
      <Route path="/show" component={SlideShowPage}/>
      <Route path="/export" component={SlideExportPage}/>
      <Route path="/print" component={SlidePrintPage}/>
      <Route path="/" component={SlideEditPage}/>
    </Switch>
  </ConnectedRouter>
)

export default hot(module)(App)
