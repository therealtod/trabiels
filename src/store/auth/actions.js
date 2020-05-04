/* eslint-disable no-unused-vars */
import { firestoreAction } from 'vuexfire';
import User from '../../models/User.js';

export const addUserToUsersCollection = async (state, userRef) => {
  const
    { email } = state;
  const user = new User({ email });
  return userRef.set(user);
};

export async function createNewUser({ dispatch, commit }, data) {
  const { $fb } = this;
  const { email, password } = data;
  const fbAuthResponse = await $fb.createUserWithEmail(email, password);
  const id = fbAuthResponse.user.uid;
  const userRef = $fb.userRef('users', id);
  return addUserToUsersCollection({ email }, userRef);
}

export async function loginUser({ commit }, payload) {
  const { $fb } = this;
  const { email, password } = payload;
  return $fb.loginWithEmail(email, password);
}

export async function logoutUser({ commit }, payload) {
  await firestoreAction(({ unbindFirestoreRef }) => { unbindFirestoreRef('users'); });
  commit('user/setCurrentUserData', null, { root: true });
  this.$fb.logoutUser();
}

export function routeUserToAuth() {
  this.$router.push({
    path: '/auth/login',
  });
}
