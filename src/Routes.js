import React from "react"
import {Router, Route, browserHistory} from "react-router"

import HomeLayout from "./layouts/Home"

const Routes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={HomeLayout} />
    <Route path="*" component={HomeLayout} />
  </Router>
)

export default Routes
