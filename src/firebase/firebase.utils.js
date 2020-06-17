import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyDXOlvj0cV70FH9VL-VQcQdN2IarciG_fs",
  authDomain: "fitflex-db.firebaseapp.com",
  databaseURL: "https://fitflex-db.firebaseio.com",
  projectId: "fitflex-db",
  storageBucket: "fitflex-db.appspot.com",
  messagingSenderId: "518112190908",
  appId: "1:518112190908:web:06249605310261ca520bb9",
  measurementId: "G-44S7ZWDJV3"
};

firebase.initializeApp(config);

export const firestore = firebase.firestore();

export default firebase;