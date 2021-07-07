import { firebase, googleAuthProvider } from '../firebase/firebase-config';
import { types } from "../types/types"

export const startLoginAsync = (email, password) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch( login(159357654, 'Andres J') )
    }, 3500);
  }
}

export const startGoogleLogin = () => {
  return ( dispatch ) => {
    firebase.auth()
      .signInWithPopup( googleAuthProvider )
      .then( ( {user} ) => {
        console.log( user );
        dispatch( login(user.uid, user.displayName) )
      })
  }
}

export const login = ( uid, displayName ) => ({
  type: types.login,
  payload: {
    uid,
    displayName
  }
})

export const logout = () => ({
  type: types.logout
})

