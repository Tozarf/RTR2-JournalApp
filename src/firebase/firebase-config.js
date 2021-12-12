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


// const firebaseConfigTesting = {
//     apiKey: "AIzaSyDtQHnXp7pg25zY8CQhjUvi78I1LdcYTbA",
//     authDomain: "redux-testing-de93b.firebaseapp.com",
//     databaseURL: "https://redux-testing-de93b-default-rtdb.firebaseio.com",
//     projectId: "redux-testing-de93b",
//     storageBucket: "redux-testing-de93b.appspot.com",
//     messagingSenderId: "200824349387",
//     appId: "1:200824349387:web:d3cf3ffc97e256b4c4314e",
//     measurementId: "G-GHQ0KBXF6V"
//     };


// if(process.env.NODE_ENV === 'test'){
    
//     firebase.initializeApp(firebaseConfigTesting);
// }else{

    // }
        firebase.initializeApp(firebaseConfig);




const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider ();

export {
    db,
    googleAuthProvider,
    firebase
}