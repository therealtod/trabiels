import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

/**
 * Firestore
 * https: //firebase.google.com/docs/reference/js/firebase.firestore.Firestore.html
 *
 * @return {Interface} returns Firestore
 */
export const firestore = () => firebase.firestore();
/**
 * @param  {String} collectionName - Firestore collection name
 * @param  {String} id - Uid to assign to a doc in firestore collection
 */
export const docRef = (collectionName, id) => firestore().collection(collectionName).doc(id);
/**
 * @param  {String} storageLocation - Location on Firebase Storage
 */
export const storageRef = (storageLocation) => firebase.storage().ref(storageLocation);
