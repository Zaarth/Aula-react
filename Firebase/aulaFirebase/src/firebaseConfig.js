// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeFirestore} from 'firebase/firestore';
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzXowtJtHS0pye2Qf-clUieiYBM5CKRrQ",
  authDomain: "aulafirebase-4e8f0.firebaseapp.com",
  projectId: "aulafirebase-4e8f0",
  storageBucket: "aulafirebase-4e8f0.firebasestorage.app",
  messagingSenderId: "914640356951",
  appId: "1:914640356951:web:84d38cb7690b5b6e418512"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = initializeFirestore(app, {
    experimentalForceLongPolling: true,
    useFetchStreams: false,
});

export { db };