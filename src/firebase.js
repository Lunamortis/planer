import { initializeApp } from 'firebase/app';
import firebase from 'firebase/compat/app';
import { getAuth } from "firebase/auth";
import { getFirestore, } from 'firebase/firestore/lite';


const firebaseConfig = {
  apiKey: "AIzaSyDL0SZZUZWjClwv4qpN0nrFSspwZJOluBM",
  authDomain: "planer-6c888.firebaseapp.com",
  projectId: "planer-6c888",
  storageBucket: "planer-6c888.appspot.com",
  messagingSenderId: "769778990096",
  appId: "1:769778990096:web:a0a93161f3444bd8751e95",
  measurementId: "G-S1PQ2R294K"
};


const app = initializeApp(firebaseConfig);



const auth = getAuth(app);
export default firebase;
export const firestore = firebase.firestore();
export const db = getFirestore(app);
