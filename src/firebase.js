// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD1avxmnqYZKVmC3MCdQfO6iDjODhzaHcI",
  authDomain: "clone-6fa23.firebaseapp.com",
  projectId: "clone-6fa23",
  storageBucket: "clone-6fa23.appspot.com",
  messagingSenderId: "297313785497",
  appId: "1:297313785497:web:3a958a37dfe65115be4a08",
  measurementId: "G-FYT7R9MPK4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export{db,auth};