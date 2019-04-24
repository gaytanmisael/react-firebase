import firebase from 'firebase';
var config = {
    apiKey: "AIzaSyCHQC4HEqXD4ymSGDrxw6lC8eB2aUweN2E",
    authDomain: "fun-food-friends-46748.firebaseapp.com",
    databaseURL: "https://fun-food-friends-46748.firebaseio.com",
    projectId: "fun-food-friends-46748",
    storageBucket: "fun-food-friends-46748.appspot.com",
    messagingSenderId: "445428344128"
  };
firebase.initializeApp(config);
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export default firebase;
