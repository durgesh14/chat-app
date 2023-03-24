// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbMZjEAWMDskL4HFOuCCCmxjY5pCiTnGQ",
  authDomain: "react-chat-app-9e034.firebaseapp.com",
  projectId: "react-chat-app-9e034",
  storageBucket: "react-chat-app-9e034.appspot.com",
  messagingSenderId: "336495715651",
  appId: "1:336495715651:web:6ba24dd7455f10e0a0fbf6",
  measurementId: "G-M1JPWRJ87T",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const analytics = getAnalytics(app);
