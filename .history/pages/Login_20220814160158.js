import React from "react";
import Head from "next/head";
import styled from "styled-components";
import { Button } from "@mui/material";

function Login() {
  return (
    <Container>
      <Head>
        <title>Login</title>
      </Head>
      <LoginContainer>
        <Logo src="https://github.com/Qu4ntumGuy/All_Images/blob/main/Message-PNG-Background.png?raw=true" />
        <Button variant="outlined" >Sign In with Google.</Button>      
      </LoginContainer>
    </Container>
  );
}

export default Login;

const Container = styled.div``;

const LoginContainer = styled.div``;

const Logo = styled.img`
height: 10%;
`;
