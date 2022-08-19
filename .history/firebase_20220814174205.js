import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBlY7DNJtbgbQIKNK5vaJizkyQh1O0lvIs",
    authDomain: "just-texting-a46f8.firebaseapp.com",
    projectId: "just-texting-a46f8",
    storageBucket: "just-texting-a46f8.appspot.com",
    messagingSenderId: "637561906880",
    appId: "1:637561906880:web:eee49a50a6829e497e2f25"
  };

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);


