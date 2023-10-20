import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {getAuth} from 'firebase/auth'

firebase.initializeApp({
  apiKey: "AIzaSyBP3ppsYTNvZauSZm26szxBOeuxe2WVe78",
  authDomain: "myblogsite-357a1.firebaseapp.com",
  projectId: "myblogsite-357a1",
  storageBucket: "myblogsite-357a1.appspot.com",
  messagingSenderId: "242812347513",
  appId: "1:242812347513:web:46c91b83aa35cf643ee0a8",
  measurementId: "G-MB4ZM31GVF"
});

const fb = firebase;

const auth = getAuth();

export {fb, auth}