// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// const firebaseConfig = {
//   apiKey: "AIzaSyAbMZjEAWMDskL4HFOuCCCmxjY5pCiTnGQ",
//   authDomain: "react-chat-app-9e034.firebaseapp.com",
//   projectId: "react-chat-app-9e034",
//   storageBucket: "react-chat-app-9e034.appspot.com",
//   messagingSenderId: "336495715651",
//   appId: "1:336495715651:web:6ba24dd7455f10e0a0fbf6",
//   measurementId: "G-M1JPWRJ87T",
// };
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
