import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const Config = {
    apiKey: "AIzaSyCCI7YZmYDBcn_aeOn96R0th18EiIbtTss",
    authDomain: "netflix-10258.firebaseapp.com",
    projectId: "netflix-10258",
    storageBucket: "netflix-10258.appspot.com",
    messagingSenderId: "1028461164984",
    appId: "1:1028461164984:web:953bad099458e11e59b74d"
};


export const CreateUserProfileDocument = async (userAuth, additionalData) => {
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
      console.log(`${error} User Can't be registered`);
    }
  }
  return userRef;
};