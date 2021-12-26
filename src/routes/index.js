import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { routes } from 'config/routes'
import SearchPage from 'routes/SearchPage/SearchPage'
import Home from './Home/Home'
import NotFound from './NotFound/NotFound'
import SubTasksPage from './SubTasksPage/SubTasksPage'

const Routes = () => (
  <Switch>
    <Route exact path={routes.root()} component={Home} />
    <Route exact path={routes.subtasks()} component={SubTasksPage} />
    <Route exact path={routes.search()} component={SearchPage} />
    <Route component={NotFound} />
  </Switch>
)

export default Routes
