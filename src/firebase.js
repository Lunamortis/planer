// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDL0SZZUZWjClwv4qpN0nrFSspwZJOluBM",
  authDomain: "planer-6c888.firebaseapp.com",
  projectId: "planer-6c888",
  storageBucket: "planer-6c888.appspot.com",
  messagingSenderId: "769778990096",
  appId: "1:769778990096:web:a0a93161f3444bd8751e95",
  measurementId: "G-S1PQ2R294K"
};

const firestore = initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
