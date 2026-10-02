// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyAiwRpieymMxvFu5uMu-OVNADmCxH12Ek8",
  authDomain: "creator-and-brand-44dc6.firebaseapp.com",
  projectId: "creator-and-brand-44dc6",
  storageBucket: "creator-and-brand-44dc6.firebasestorage.app",
  messagingSenderId: "107503239665",
  appId: "1:107503239665:web:923984def09cfd5f758450"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const googleProvider = new GoogleAuthProvider();