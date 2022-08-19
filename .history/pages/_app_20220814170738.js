import "../styles/globals.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
import Login from "./Login";
import Loading from "../Components/Loading";
import { useEffect } from "react";
import { FirebaseApp } from "firebase/app";

function MyApp({ Component, pageProps }) {
  const [user, loading] = useAuthState(auth);

  useEffect((user) => {
    if (user) {
      db.collection("users").doc(user.uid).set({
        email: user.email,
        lastSeen: FirebaseApp.firestore.FieldValue.serverTimestamp(),
      });
    }
  }, []);

  if (loading) return <Loading />;
  if (!user) return <Login />;
  return <Component {...pageProps} />;
}
export default MyApp;
