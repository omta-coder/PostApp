// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "post-app-45cc7.firebaseapp.com",
  projectId: "post-app-45cc7",
  storageBucket: "post-app-45cc7.appspot.com",
  messagingSenderId: "49758293081",
  appId: "1:49758293081:web:834ae475b5e6cb8c367548"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);