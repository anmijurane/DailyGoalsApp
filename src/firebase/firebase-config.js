import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBhskGHngfrQj67R6BZ6MrrzdFm6YAgmq0",
  authDomain: "dailygoals-anmi.firebaseapp.com",
  projectId: "dailygoals-anmi",
  storageBucket: "dailygoals-anmi.appspot.com",
  messagingSenderId: "682363912445",
  appId: "1:682363912445:web:ee5e1843f39627dfc97e94"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
  db,
  googleAuthProvider,
  firebase
}
