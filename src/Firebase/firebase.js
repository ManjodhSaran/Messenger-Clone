import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyCISF_My-8UvsI2Q7jO0G3XHYjjLunZ_eg",
        authDomain: "facebook-messenger-clone-6e361.firebaseapp.com",
        databaseURL: "https://facebook-messenger-clone-6e361.firebaseio.com",
        projectId: "facebook-messenger-clone-6e361",
        storageBucket: "facebook-messenger-clone-6e361.appspot.com",
        messagingSenderId: "235057937331",
        appId: "1:235057937331:web:613c58ef9a59c2bedf29c6",
        measurementId: "G-MSX3FRN8YX"
});

const db = firebaseApp.firestore();

export default db;