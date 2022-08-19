import { async } from "@firebase/util";
import { collection, doc } from "firebase/firestore";
import Head from "next/head";
import React from "react";
import styled from "styled-components";
import ChatScreen from "../../Components/ChatScreen";
import Sidebar from "../../Components/Sidebar";

function Chat() {
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
  const ref = collection(db, "chats").doc(context.query.id);
  const messagesRes = await ref
    .collection("messages")
    .orderBy("timestamp", "asc")
    .get();

  const messages = messagesRes.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
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
