import { firestoreAction } from 'vuexfire';
import Room from '../../models/Room';
import { collectionRef } from '../../services/firebase/db';


export const createNewRoom = firestoreAction(({ rootGetters }, payload) => {
  const currentUser = rootGetters['user/currentUserName'];
  payload.players = [currentUser];
  const room = new Room(payload);
  return collectionRef('rooms').add(room);
});

export const setRoomsRef = firestoreAction(({ bindFirestoreRef }) => bindFirestoreRef('rooms', collectionRef('rooms')));
