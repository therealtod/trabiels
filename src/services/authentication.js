import { auth } from '../../firebase.conf';

export const loginWithEmailAndPassword = (email, password) => {
  auth.signInWithEmailAndPassword(email, password);
};
