import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBwYJolwagyK5_jKN1J_M7B1WBi8cQLf80",
  authDomain: "chat-5d855.firebaseapp.com",
  projectId: "chat-5d855",
  storageBucket: "chat-5d855.appspot.com",
  messagingSenderId: "402302021482",
  appId: "1:402302021482:web:e8690002960739c306ff13",
  measurementId: "G-GEZTYY8RRY",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
