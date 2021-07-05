import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import LoginScreen from '../auth/LoginScreen'
import RegisterScreen from '../auth/RegisterScreen'

export default function AuthRoutes() {
  return (
    <div  className='auth__main'>
      <div className="auth__box_container">
        <Switch>
          <Route path='/auth/login'    component={ LoginScreen    } />
          <Route path='/auth/register' component={ RegisterScreen } />
          <Redirect to={ '/auth/login' } />
        </Switch>
      </div>
    </div>
  )
}
