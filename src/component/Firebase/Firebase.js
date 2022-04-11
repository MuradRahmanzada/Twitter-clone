import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "twitter-clone-cb024.firebaseapp.com",
  projectId: "twitter-clone-cb024",
  storageBucket: "twitter-clone-cb024.appspot.com",
  messagingSenderId: "505387703040",
  appId: "1:505387703040:web:9673e36edea14aa445f1e5",
  measurementId: "G-JFZ3SPZ6T2",
};



const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;
