import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDYbJlBzccIUHlggyjd6CJiZIQAc-XaNBI",
    authDomain: "crwn-db-9e811.firebaseapp.com",
    databaseURL: "https://crwn-db-9e811.firebaseio.com",
    projectId: "crwn-db-9e811",
    storageBucket: "",
    messagingSenderId: "171200639266",
    appId: "1:171200639266:web:13aa12de091e71bf"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;