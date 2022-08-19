import { async } from "@firebase/util";
import { collection, doc, getDoc } from "firebase/firestore";
import Head from "next/head";
import React from "react";
import styled from "styled-components";
import ChatScreen from "../../Components/ChatScreen";
import Sidebar from "../../Components/Sidebar";
import { db } from "../../firebase";

function Chat({ chat, messages}) {
  return (
    <Container>
      <Head>
        <title>Chat</title>
      </Head>
      <Sidebar />
      <ChatContainer>
        <ChatScreen />
      </ChatContainer>
    </Container>
  );
}

export default Chat;

export async function getServerSideProps(context) {
  const ref = doc(db, "chats", context.query.id);
  const messagesRes = await getDoc(ref, "messages");

  const messages = messagesRes.docs((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))
    .map((messages) => ({
      ...messages,
      timestamp: new Date(messages.timestamp),
    }));

  const chatRef = await ref.get();
  const chat = {
    id: chatRef.id,
    ...chatRef.data(),
  };

  console.log(chat, messages);

  return {
    props: {
      messages: JSON.stringify(messages),
      chat: chat,
    },
  };
}

const Container = styled.div`
  display: flex;
`;

const ChatContainer = styled.div`
  flex: 1;
  overflow: scroll;
  height: 100vh;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;
