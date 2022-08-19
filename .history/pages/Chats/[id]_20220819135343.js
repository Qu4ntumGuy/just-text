import Head from 'next/head';
import React from 'react'
import styled from 'styled-components'
import ChatScreen from '../../Components/ChatScreen';
import Sidebar from '../../Components/Sidebar';

function Chat() {
  return (
    <Container>
      <Head>
        <title>Chat</title>
      </Head>
      <Sidebar/>
      <ChatContainer>
        <ChatScreen />
      </ChatContainer>
    </Container>
  )
}

export default Chat

const Container = styled.div`
display: flex;
`;

const ChatContainer = styled.div`
flex: 1;
overflow: scroll;
height: auto;
`;