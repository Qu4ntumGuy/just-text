import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyC4i5YoaWPwhODEKUOJPkoXjXFvdYFt0KU",
  authDomain: "chit-chat-7de6e.firebaseapp.com",
  projectId: "chit-chat-7de6e",
  storageBucket: "chit-chat-7de6e.appspot.com",
  messagingSenderId: "1092967318859",
  appId: "1:1092967318859:web:a9166c6a1565ee22df14ce"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

export { auth, db, provider };