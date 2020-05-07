import { firestoreAction } from 'vuexfire';
import Game from '../../models/Game';
import { collectionRef } from '../../services/firebase/db';


export const createNewGame = firestoreAction((context, payload) => {
  const game = new Game(payload);
  return collectionRef('games').add(game);
});
