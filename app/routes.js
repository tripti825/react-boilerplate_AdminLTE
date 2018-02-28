import React from 'react'
import {
  Router,
  Route,
  Switch
} from 'react-router-dom';
import { PrivateRoute } from 'utils/helpers'

import App             from 'containers/App';
import Landing         from 'containers/Landing/Loadable';
import Login           from 'containers/Login/Loadable';
import Registration    from 'containers/Registration/Loadable';
import Level1          from 'containers/Level1/Loadable';
import Level2          from 'containers/Level2/Loadable';
import Country         from 'containers/Country/Loadable';
import NotFound        from 'containers/NotFoundPage/Loadable';

export const routes = (
  
    <div >
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Registration} />
        <App>
          <Switch>
          <PrivateRoute path="/dashboard" component={Country} />
          <PrivateRoute path="/level1" component={Level1} />
          <PrivateRoute path="/level2" component={Level2} />
          <Route path="" component={NotFound} />
          </Switch>
        </App>
      </Switch>
    </div>
  
);