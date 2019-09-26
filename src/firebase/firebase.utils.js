import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyC_keIvclvKPwanOtwVVi-skuygk14DJQY",
  authDomain: "crown-store-4c30d.firebaseapp.com",
  databaseURL: "https://crown-store-4c30d.firebaseio.com",
  projectId: "crown-store-4c30d",
  storageBucket: "",
  messagingSenderId: "69723651754",
  appId: "1:69723651754:web:cbed03cd2d80b992e79ad3"
};

export const createUserProfileDocument = async (userAuth, additionalD) => {
  if (!userAuth) {
    return;
  }
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
        ...additionalD
      });
    } catch (error) {
      console.log("Error Creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
