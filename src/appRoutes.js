import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import LoginButton from './components/auth/login';
import LogoutButton from './components/auth/logout';
import profile from './components/auth/profile';
import dashboard1 from './components/auth/dashboard1';
import dashboard2 from './components/auth/dashboard2';

function appRoutes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={LoginButton} />
        <Route exact path='/logout' component={LogoutButton} />
        <Route exact path='/profile' component={profile} />
        <Route exact path='/1' component={dashboard1} />
        <Route exact path='/2' component={dashboard2} />
      </Switch>
    </BrowserRouter>
  )
}

export default appRoutes