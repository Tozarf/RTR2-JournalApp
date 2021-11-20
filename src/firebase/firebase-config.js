import firebase from 'firebase/compat/app';
import "firebase/compat/firestore";
import "firebase/compat/auth";


const firebaseConfig = {
    apiKey: "AIzaSyAda0dJxOgGcVv_3cfTrDSaKwAAIMaFNmc",
    authDomain: "react-app-courses-dfb71.firebaseapp.com",
    projectId: "react-app-courses-dfb71",
    storageBucket: "react-app-courses-dfb71.appspot.com",
    messagingSenderId: "97193502009",
    appId: "1:97193502009:web:519b0ed53b35a3df6074e8"
    };

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider ();

export {
    db,
    googleAuthProvider,
    firebase
}