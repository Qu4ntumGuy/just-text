import { FirebaseApp } from "@firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC4i5YoaWPwhODEKUOJPkoXjXFvdYFt0KU",
  authDomain: "chit-chat-7de6e.firebaseapp.com",
  projectId: "chit-chat-7de6e",
  storageBucket: "chit-chat-7de6e.appspot.com",
  messagingSenderId: "1092967318859",
  appId: "1:1092967318859:web:5f61fecf9f38f22edf14ce",
};

const app = FirebaseApp.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };