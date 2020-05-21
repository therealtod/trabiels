const functions = require('firebase-functions');
const { firestore } = require ('../services');




exports.addPlayerToRoom = functions
  .region('europe-west1')
  .https.onCall((data, context) => {
    //Initialize response fields:
    let code = 200;
    let status = 'OK';
    let message = 'Success';

    // If the request contains no authentication data reply with a 401
    if (!context.auth) {
      console.log('Received a request with no authentication data');
      code = 401;
      status = 'Unauthorized';
      message = 'No authentication data received'
      return {code, status, message};
    }
    
    // Extract data from the request
    const roomId = data.roomId;

    // Authentication / user information is automatically added to the request.
    const uid = context.auth.uid;
    const email = context.auth.token.email || null;

    // Get a  reference the relevant document from the rooms collection
    const docRef = firestore
      .collection("rooms")
      .doc(roomId)
    
    // Get the document data (snapshot)
    return docRef
      .get()
      .then(snapshot => {
        if (!snapshot.exists) {
          message = `No room found with id: ${roomId}`;
          console.log(message);
          code = 400;
          status = 'Bad Request';
          return {status, code, message}
        } else {
          const players = snapshot.data().players;
          // If the player is not already included in the list of participants
          if (!players.includes(email)) {
            // Add it to the list of participants
            message = `Adding a new player with email: ${email} to the room`;
            console.log(message);
            docRef.update(
              {
                "players": [...players, email]
              }
            );
          }
          else {
            message = 'The player is already in the room. Do nothing.';
            console.log(message);
          }
          console.log(message)
          code = 200;
          status = 'OK';
          return {status, code, message};
        }
      })
      .catch(err => {
        message = 'Server error occurred trying to get the document';
        console.log(message, err);
        return {status, code, message};
      });
  });
