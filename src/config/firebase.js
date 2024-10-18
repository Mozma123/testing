
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBhtX0M2sNPaO2ABG4AMo7W4qEZcm4eJMs",
  authDomain: "firstproject01-d49bd.firebaseapp.com",
  projectId: "firstproject01-d49bd",
  storageBucket: "firstproject01-d49bd.appspot.com",
  messagingSenderId: "127690446908",
  appId: "1:127690446908:web:b4516d0ec3066f607d8b39",
  measurementId: "G-22KX2BVMVC"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const loginWithGoogle = new GoogleAuthProvider(); 

export { auth, db, loginWithGoogle };