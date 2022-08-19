import { async } from "@firebase/util";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  startAt,
  where,
} from "firebase/firestore";
import Head from "next/head";
import React from "react";
import styled from "styled-components";
import ChatScreen from "../../Components/ChatScreen";
import Sidebar from "../../Components/Sidebar";
import { db } from "../../firebase";

function Chat({ chat, messages }) {
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
  const ref = doc(collection(db, "chats"), context.query.id);
  const docSnap = doc(collection(db, "chats", "messages"), context.query.id);
  const messagesRes = await getDoc(docSnap, orderBy("timestamp", "asc"));

  const messages = messagesRes?.docs
    ?.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))
    ?.map((messages) => ({
      ...messages,
      timestamp: new Date(messages.timestamp),
    }));

  const chatRef = await getDoc(ref);
  const chat = {
    id: chatRef.id,
    ...chatRef.data(),
  };

  console.log(chatRef);
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
