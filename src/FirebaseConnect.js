import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyDAIu5dqc-hRp66M8qv_8DPffAG5dQOLE4",
  authDomain: "shopdog-ebe84.firebaseapp.com",
  databaseURL: "https://shopdog-ebe84.firebaseio.com",
  projectId: "shopdog-ebe84",
  storageBucket: "shopdog-ebe84.appspot.com",
  messagingSenderId: "136709283736",
  appId: "1:136709283736:web:62b7ec697cec88d318d5ed",
  measurementId: "G-MG2NVHRM8P"
};
  // Initialize Firebase

  export const FirebaseConnect = firebase.initializeApp(firebaseConfig);