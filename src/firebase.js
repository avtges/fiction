// Import Firebase SDK functions
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMjW4GgUVVhE-qlphVqT3Izet9zkbfQ6g",
  authDomain: "shortstories-32087.firebaseapp.com",
  projectId: "shortstories-32087",
  storageBucket: "shortstories-32087.appspot.com", // Fixed storage bucket URL
  messagingSenderId: "246877563477",
  appId: "1:246877563477:web:5a2ee0eef846db91a2c2dc",
  measurementId: "G-HM36RS36DN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Initialize Firestore

// Export Firestore functions
export { db, doc, getDoc, setDoc, updateDoc };
