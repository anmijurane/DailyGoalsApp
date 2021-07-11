import React from 'react'
import { Route, Redirect } from 'react-router-dom';

export function PrivateRoute(
  {isLogged, component: Component, ...rest }
) {
  return (
    <Route
      { ...rest }
      render={ (props) => (
        (isLogged)
          ? ( <Component {...props} /> )
          : ( <Redirect to='/auth/login' /> )
      )}
    />
  )
}
