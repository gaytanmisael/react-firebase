import * as firebase from 'firebase';
import firestore from 'firebase/firestore';

const settings = {timestampsInSnapshots: true};

const config = {
    apiKey: "AIzaSyCEr5r27atJpwAdwiZPHl3ZgMjdUtgKgcY",
    authDomain: "firestore-90512.firebaseapp.com",
    databaseURL: "https://firestore-90512.firebaseio.com",
    projectId: "firestore-90512",
    storageBucket: "firestore-90512.appspot.com",
    messagingSenderId: "140654601471"
  };

firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;
