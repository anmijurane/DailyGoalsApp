import React from 'react'
import { Route, Redirect } from 'react-router-dom';

export function PublicRoute(
  {isLogged, component: Component, ...rest }
) {
  return (
    <Route
      { ...rest }
      render={ (props) => (
        (isLogged)
          ? ( <Redirect to='/' /> )
          : ( <Component {...props} /> )
      )}
    />
  )
}
