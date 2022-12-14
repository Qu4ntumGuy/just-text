import "../styles/globals.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
import Login from "./Login";
import Loading from "../Components/Loading";

function MyApp({ Component, pageProps }) {
  const [user,loading] = useAuthState(auth);
  if(loading) return <Loading/>
  if (!user) return <Login />;
  return <Component {...pageProps} />;
}
export default MyApp;
