import React from 'react'
import { Head } from 'next/document';
import styled from 'styled-components';

function Login() {
  return (
    <Container>
        <Head>
            Login
        </Head>
      <h1>This Will Our login page</h1>
    </Container>
  )
}

export default Login

const Container = styled.div``;