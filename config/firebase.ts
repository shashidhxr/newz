// lib/firebase.ts
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLHxJw2S4Kl7pyUNEDkUIKcNmhkwtNo88",
  authDomain: "newz-b5508.firebaseapp.com",
  databaseURL: "https://newz-b5508-default-rtdb.firebaseio.com",
  projectId: "newz-b5508",
  storageBucket: "newz-b5508.appspot.com",
  messagingSenderId: "148576627595",
  appId: "1:148576627595:web:4952be556f31d4f3635d8e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider()

export { db, auth, googleProvider };
