import Head from 'next/head';
import React from 'react'
import styled from 'styled-components'

function Chat() {
  return (
    <Container>
      <Head>
        <title>Chat</title>
      </Head>
      <h1>This is a Chat</h1>
    </Container>
  )
}

export default Chat

const Container = styled.div``;
