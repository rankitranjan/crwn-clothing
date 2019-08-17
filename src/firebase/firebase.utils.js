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

export const creteUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;
		const userRef = firestore.doc(`users/${userAuth.uid}`);
		const snapShot = await userRef.get();
		if (!snapShot.exists) {
			const { displayName, email } = userAuth;
			const createdAt = new Date();
			try	{
				await userRef.set({
					displayName,
					email,
					createdAt,
					...additionalData
				})
			} catch (error) {
				console.log('error creating Data', error.message);
			}
		}
	return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
