import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC4i5YoaWPwhODEKUOJPkoXjXFvdYFt0KU",
  authDomain: "chit-chat-7de6e.firebaseapp.com",
  projectId: "chit-chat-7de6e",
  storageBucket: "chit-chat-7de6e.appspot.com",
  messagingSenderId: "1092967318859",
  appId: "1:1092967318859:web:5f61fecf9f38f22edf14ce",
};

const app = !initializeApp.length
  ? initializeApp(firebaseConfig)
  : app();

// const db = getFirestore();
// const auth = FirebaseAuth();
// const provider = new firebase.auth.GoogleAuthProvider();

// export { db, auth, provider };
