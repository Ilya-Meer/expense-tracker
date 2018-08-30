import { firebase, googleAuthProvider } from '../firebase/firebase';

export const login = (user) => {
  return {
    type: 'LOGIN', 
    uid: user.uid
  }
}

export const logout = () => {
  return {
    type: 'LOGOUT'
  }
}

export const startLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
  }
}

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  }
}

