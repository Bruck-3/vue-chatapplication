import firebase from 'firebase'
import firestore from 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyBWDRT4xgTus3NEI-vfag9hDaUX__9aQgY",
    authDomain: "chat-application-ece6e.firebaseapp.com",
    databaseURL: "https://chat-application-ece6e.firebaseio.com",
    projectId: "chat-application-ece6e",
    storageBucket: "chat-application-ece6e.appspot.com",
    messagingSenderId: "983059496590",
    appId: "1:983059496590:web:fcea33668df41d135a53df"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  export default firebaseApp.firestore()