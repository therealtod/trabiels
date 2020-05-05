/* eslint-disable no-unused-vars */
import { firestoreAction } from 'vuexfire';
import { docRef } from '../../services/firebase/db.js';

/** Get current user from the firestore collection user's
 * via firebase uid
 *
 * @param  {Object} payload.id - Firebase currentUser id
 */
export const getCurrentUser = firestoreAction(({ bindFirestoreRef }, id) => bindFirestoreRef('currentUser', docRef('users', id)));

/**
 * @param  {Object} {state}
 * @param  {String} id
 * @param  {Object} payload
 */
export function updateUserData({ state }, payload) {
  return docRef('users', payload.id).update(payload);
}
