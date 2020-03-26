import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
const config = {
  apiKey: "AIzaSyD9qbSvU5WAQqrCThIUBvqjfz9iSPWTuUI",
  authDomain: "crown-clothing-37cc3.firebaseapp.com",
  databaseURL: "https://crown-clothing-37cc3.firebaseio.com",
  projectId: "crown-clothing-37cc3",
  storageBucket: "crown-clothing-37cc3.appspot.com",
  messagingSenderId: "864971740517",
  appId: "1:864971740517:web:4aa3473420241ad8a43d8c",
  measurementId: "G-GH177KL4ER"
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
        ...additionalData
      });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
