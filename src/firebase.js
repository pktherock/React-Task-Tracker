import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// FIREBASE configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD_7brx-EGFaXW9aeWnaL58xViJcineBlc',
  authDomain: 'react-task-tracker-17b2b.firebaseapp.com',
  projectId: 'react-task-tracker-17b2b',
  storageBucket: 'react-task-tracker-17b2b.appspot.com',
  messagingSenderId: '820525540057',
  appId: '1:820525540057:web:6acaa8a609e9adf3f494c8',
};

//initializing  the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// initializing database
const db = firebaseApp.firestore();

export { db };
