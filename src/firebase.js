// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

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
export const storage = getStorage();
export const db = getFirestore();
