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
import { useAuthState } from "react-firebase-hooks/auth";
import styled from "styled-components";
import ChatScreen from "../../Components/ChatScreen";
import Sidebar from "../../Components/Sidebar";
import { auth, db } from "../../firebase";
import getReceiversEmail from "../../utils/getReceiversEmail";

function Chat({ chat, messages }) {
  const [user] = useAuthState(auth);

  return (
    <Container>
      <Head>
        <title>Chat with {getReceiversEmail(chat.users, user)}</title>
      </Head>
      <Sidebar />
      <ChatContainer>
        <ChatScreen chat={chat} messages={messages} />
      </ChatContainer>
    </Container>
  );
}

export default Chat;

export async function getServerSideProps(context) {
  const ref = doc(collection(db, "chats"), context.query.id);
  const docSnap = getDoc(doc(db, "chats", "messages"), context.query.id);
  const messagesRes = await getDoc(query(ref, orderBy("timestamp", "asc"), startAt(docSnap)));

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
