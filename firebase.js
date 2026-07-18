// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZVjwHZJn_ELDIllC-CceZdXZ6NKAZOso",
  authDomain: "bk-device-manager.firebaseapp.com",
  projectId: "bk-device-manager",
  storageBucket: "bk-device-manager.firebasestorage.app",
  messagingSenderId: "876972263144",
  appId: "1:876972263144:web:5e321f15d9592e4903ab5d",
  measurementId: "G-M6SGCKJNQ3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Services
export const auth = getAuth(app);
export const db = getFirestore(app);