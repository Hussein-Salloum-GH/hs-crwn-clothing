import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAfXozLF5VL17COUoKuW8bbWKdFkHcIZ9g",
  authDomain: "crown-db-85c08.firebaseapp.com",
  projectId: "crown-db-85c08",
  storageBucket: "crown-db-85c08.appspot.com",
  messagingSenderId: "439529136473",
  appId: "1:439529136473:web:e12894847e5cfbc008ac48",
  measurementId: "G-E2RXZWB99D",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  // console.log(firestore.doc("users/asdfasdasfad"));

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const userSnapshot = await userRef.get();

  //console.log(userRef, "userRef");
  //console.log(userSnapshot, "userSnapshot");

  if (!userSnapshot.exists) {
    const { displayName, email, uid } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (error) {
      console.log(`error create user ${error}`);
    }
  }

  return userRef;
};

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ propmt: "Select_Account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
