// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArH4JNiBoaMESkEcK-O2Mjy4f62ka-ycs",
  authDomain: "bananaman-react-app-project.firebaseapp.com",
  projectId: "bananaman-react-app-project",
  storageBucket: "bananaman-react-app-project.firebasestorage.app",
  messagingSenderId: "839196153087",
  appId: "1:839196153087:web:cd2dd9c6db8e19012ae8ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();