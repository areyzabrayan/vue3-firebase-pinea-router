import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyAPFyvWy3bIsL9XQCjv-UqewiX7zF1Ga2o",
  authDomain: "vue-3-2024-38532.firebaseapp.com",
  projectId: "vue-3-2024-38532",
  storageBucket: "vue-3-2024-38532.appspot.com",
  messagingSenderId: "609696424872",
  appId: "1:609696424872:web:276190abb7e88407b8b39d"
};

initializeApp(firebaseConfig);

const auth = getAuth();
const db = getFirestore()

export { auth, db };