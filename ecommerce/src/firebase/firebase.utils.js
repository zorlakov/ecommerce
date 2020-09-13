import firebase from 'firebase';
import 'firebase/firestore'; // for the DB
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAmLa5C0auE8RPp7bXNZkA1jYZogQt24u0',
  authDomain: 'crown-db-59b79.firebaseapp.com',
  databaseURL: 'https://crown-db-59b79.firebaseio.com',
  projectId: 'crown-db-59b79',
  storageBucket: 'crown-db-59b79.appspot.com',
  messagingSenderId: '49130940937',
  appId: '1:49130940937:web:a38f529dc77198da7726d8',
  measurementId: 'G-EMQ6Z18QBV',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider(); // Google auth provider class access
provider.setCustomParameters({ prompt: 'select_account ' }); // Always trigger google pop up when google sign in is used
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
