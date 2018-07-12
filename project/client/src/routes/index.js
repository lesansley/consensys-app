import React from 'react'
import { Route, Switch } from 'react-router-dom'

import {
  About,
  Home,
  NavBar,
  NoMatch,
  Profile
} from '../components'

const routes = (
  <div>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/profile" component={Profile} />
      <Route path="/about" component={About} />
      <Route component={NoMatch} />
    </Switch>
  </div>
)

export default routes