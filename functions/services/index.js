// The Firebase Admin SDK to access the Firebase Realtime Database.
const { Firestore } = require('@google-cloud/firestore');
// Create a new client
exports.firestore = new Firestore();
