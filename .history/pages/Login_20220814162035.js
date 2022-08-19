import Head from "next/head";
import styled from "styled-components";
import { Button } from "@mui/material";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";

function Login() {
  const signIn = () => {
    signInWithPopup(provider).catch(alert);
  };

  return (
    <Container>
      <Head>
        <title>Login</title>
      </Head>
      <LoginContainer>
        <Logo src="https://github.com/Qu4ntumGuy/All_Images/blob/main/Message-PNG-Background.png?raw=true" />
        <Button onClick={signIn} variant="outlined">
          Sign In with Google.
        </Button>
      </LoginContainer>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  display: grid;
  place-items: center;
  height: 80vh;
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 2px;
`;

const Logo = styled.img`
  height: 100%;
  width: 300px;
  padding: 15%;
`;
