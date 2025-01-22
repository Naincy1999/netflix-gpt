// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdpI2LafNH9nVtQHT08MxHenaN2_T2kHA",
  authDomain: "netflixgpt-e86e5.firebaseapp.com",
  projectId: "netflixgpt-e86e5",
  storageBucket: "netflixgpt-e86e5.firebasestorage.app",
  messagingSenderId: "516482087329",
  appId: "1:516482087329:web:3c5ca134a86dbb3b5673e0",
  measurementId: "G-3MF777SW93",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
