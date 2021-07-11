import { firebase, googleAuthProvider } from '../firebase/firebase-config';
import { types } from "../types/types"

export const startLoginAsync = (email, password) => {
  return (dispatch) => {
    dispatch( startLoading() );
    firebase.auth().signInWithEmailAndPassword( email, password )
      .then( ({user} ) => {
        dispatch( login(user.uid, user.displayName) )
        dispatch( finishLoading() );
      })
      .catch( (e) => {
        console.log(e);
        dispatch( finishLoading() );
      })
  }
}

export const starRegisterWithEmailAnsPassword = ( email, password, name ) => {
  return ( dispatch ) => {
    dispatch( startLoading() );
    firebase.auth().createUserWithEmailAndPassword( email, password )
      .then( async( {user} ) => {
        await user.updateProfile({ displayName: name});
        dispatch( login( user.uid, user.displayName ) );
        dispatch( finishLoading() );
      })
      .catch( (e) => {
        console.log(e);
        dispatch( finishLoading() );
      })
  }
}

export const startGoogleLogin = () => {
  return ( dispatch ) => {
    dispatch( startLoading() );
    firebase.auth()
      .signInWithPopup( googleAuthProvider )
      .then( ( {user} ) => {
        dispatch( login(user.uid, user.displayName) )
        dispatch( finishLoading() );
      })
      .catch( (e) => {
        console.log(e);
        dispatch( finishLoading() );
      })
  }
}

export const logoutAsync = () => {
  return async( dispatch ) => {
    await firebase.auth().signOut()
    dispatch( logout() );
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

export const startLoading = () => ({
  type: types.uiStartLoadng,
});

export const finishLoading = () => ({
  type: types.uiFinishLoadng,
})
