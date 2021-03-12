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

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ propmt: "Select_Account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
