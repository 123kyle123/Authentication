import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4sErU6iFiZXjWVPrlBCmV6kqHoz2wBr0",
  authDomain: "webapp-b0ab7.firebaseapp.com",
  projectId: "webapp-b0ab7",
  storageBucket: "webapp-b0ab7.appspot.com",
  messagingSenderId: "361459938467",
  appId: "1:361459938467:web:1bab5e9de3c96150f77b16"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP)