// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjY29hCytEuAHNnLpRtUNM-uqyDe1vP1M",
  authDomain: "react-firebase-router-91010.firebaseapp.com",
  projectId: "react-firebase-router-91010",
  storageBucket: "react-firebase-router-91010.firebasestorage.app",
  messagingSenderId: "202213861923",
  appId: "1:202213861923:web:7c4b6b3db576d9d79c1f96",
  measurementId: "G-5LW8EBDL71"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);