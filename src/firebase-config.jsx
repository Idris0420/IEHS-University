// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAq05BhYEzenssfONu5nkuqUJvgk77MflQ",
  authDomain: "iehs-univ.firebaseapp.com",
  projectId: "iehs-univ",
  storageBucket: "iehs-univ.firebasestorage.app",
  messagingSenderId: "516033831631",
  appId: "1:516033831631:web:a49f5e3203a15832d7cdba",
  measurementId: "G-NFT9MKVKZS"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore();