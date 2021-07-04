import React from 'react'
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { DailyGoalsScreen } from '../dailyGoals/DailyGoalsScreen';
import AuthRoutes from './AuthRoutes';

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path='/auth'   component={  AuthRoutes  }  />
        <Route exact path='/' component={ DailyGoalsScreen } />
      </Switch>
    </Router>
  )
}
