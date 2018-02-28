import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { localStorageAdapter } from 'utils/storage';
import { storage } from 'containers/App/constants';

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    localStorageAdapter.getItem(storage.LOGGEDIN) === "true" ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
)
