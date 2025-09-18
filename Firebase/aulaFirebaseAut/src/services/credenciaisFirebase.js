// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApXJeVti0SGB9ZFvpgdtiHB7gZda5D9i4",
  authDomain: "aulafirebase-8bffa.firebaseapp.com",
  projectId: "aulafirebase-8bffa",
  storageBucket: "aulafirebase-8bffa.firebasestorage.app",
  messagingSenderId: "815292593378",
  appId: "1:815292593378:web:98087bb631a77e23f0dabb",
  measurementId: "G-CYQ1P20N3Q"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

export const db = getFirestore(appFirebase);

export default appFirebase;