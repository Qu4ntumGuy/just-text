import Head from 'next/head';
import React from 'react'
import styled from 'styled-components'
import Sidebar from '../../Components/Sidebar';

function Chat() {
  return (
    <Container>
      <Head>
        <title>Chat</title>
      </Head>
      <Sidebar/>
      <ChatContainer>

      </ChatContainer>
    </Container>
  )
}

export default Chat

const Container = styled.div``;

const ChatContainer = styled.div``;