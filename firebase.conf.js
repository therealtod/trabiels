import firebase from 'firebase';
import 'firebase/firestore';

export const firebaseConfig = {
  apiKey: 'AIzaSyDQRkm4tndqAGHnQIG9oQ5zzDHhWGZbjHM',
  authDomain: 'trabiels.firebaseapp.com',
  databaseURL: 'https://trabiels.firebaseio.com',
  projectId: 'trabiels',
  storageBucket: 'trabiels.appspot.com',
  messagingSenderId: '167886106455',
  appId: '1:167886106455:web:53b4218deca6eb10299812',
  measurementId: 'G-WPSSYXCRSG',
};


firebase.initializeApp(firebaseConfig);

// firebase utils
// const db = firebase.firestore();
const auth = firebase.auth();
const currentUser = auth.currentUser || null;

// date issue fix according to firebase
/*
const settings = {
  timestampsInSnapshots: true,
};
*/

// db.settings(settings);

// firebase collections
// const usersCollection = db.collection('users');
// const postsCollection = db.collection('posts');
// const commentsCollection = db.collection('comments');
// const likesCollection = db.collection('likes');

export {
  auth,
  currentUser,
};
