import firebase from 'firebase';
// Required for side-effects
require('firebase/firestore');

firebase.initializeApp({
  apiKey: 'AIzaSyCapOYi6a3BOHtwzCdnE02dRn5rN_vsQs4',
  authDomain: 'money-management-ntq.firebaseapp.com',
  projectId: 'money-management-ntq',
  storageBucket: 'money-management-ntq.appspot.com',
  messagingSenderId: '617334877420',
  appId: '1:617334877420:web:aa669d7ffdb613d3f589c9',
});

var db = firebase.firestore();
export default db;
