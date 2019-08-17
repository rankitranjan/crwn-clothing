import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAJhOI3X_sFmHpSiOlZuKAhOTWRvmKXhno",
    authDomain: "crwn-db-11db1.firebaseapp.com",
    databaseURL: "https://crwn-db-11db1.firebaseio.com",
    projectId: "crwn-db-11db1",
    storageBucket: "",
    messagingSenderId: "776522122287",
    appId: "1:776522122287:web:6958df9bf541737c"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
