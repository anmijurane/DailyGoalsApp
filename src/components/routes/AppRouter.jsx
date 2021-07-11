import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { 
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';
import { login } from '../../actions/auth';

import { firebase } from '../../firebase/firebase-config'
import { LoaderScreen } from '../../components/loaders/LoaderScreen'
import { DailyGoalsScreen } from '../dailyGoals/DailyGoalsScreen';
import AuthRoutes from './AuthRoutes';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';


export default function AppRouter() {

  const [isGetData, setIsGetData] = useState(true);
  const [logged, setLogged] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    firebase.auth().onAuthStateChanged( (user) => {
      if ( user?.uid ) {
        dispatch( login(user.uid, user.displayName) );
        setLogged(true);
      } else {
        setLogged(false);
      }
      setIsGetData( false );
    })
  }, [ dispatch, setIsGetData, setLogged ]);

  if ( isGetData ) {
    return <LoaderScreen />
  }

  return (
    <Router>
      <Switch>
        <PublicRoute path='/auth/' component={ AuthRoutes } isLogged={logged} />
        <PrivateRoute path='/' component={ DailyGoalsScreen } isLogged={logged} />
      </Switch>
    </Router>
  )
}
