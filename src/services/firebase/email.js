import firebase from 'firebase/app';
import 'firebase/auth';

/**
 *
 * @param {String} email - A Valid email
 * @param {String} password - Password
 *
 * @return {Promise} UserCredentials
 */
export const createUserWithEmail = async (email, password) => firebase.auth()
  .createUserWithEmailAndPassword(email, password);

/**
 * remove firebase auth token
 */
export const logoutUser = () => firebase.auth().signOut();

/**
 * @param {String} email - A Valid email
 * @param {String} password - Password
 *
 * @return {Promise} UserCredentials
 */
export const loginWithEmail = (email, password) => firebase.auth()
  .signInWithEmailAndPassword(email, password);
