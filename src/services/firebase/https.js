import firebase from 'firebase/app';
import 'firebase/functions';

/**
 *
 * @param {String} functionName - A Valid email
 * @param {String} body - Password
 */
export const performRequest = async (functionName, body) => {
  const call = firebase.app().functions('europe-west1').httpsCallable(functionName);
  await call(body)
    .then((result) => {
      console.log(result);
    });
};
