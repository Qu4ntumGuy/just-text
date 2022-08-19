import React from "react";
import Head from "next/head";
import styled from "styled-components";

function Login() {
  return (
    <Container>
      <Head>
        <title>Login</title>
      </Head>
      <h1>This Will Our login page</h1>
    </Container>
  );
}

export default Login;

const Container = styled.div``;
