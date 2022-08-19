import { Avatar, IconButton } from "@mui/material";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import styled from "styled-components";
import { auth, db } from "../firebase";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, doc, orderBy, query, serverTimestamp, addDoc, updateDoc } from "firebase/firestore";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import MicIcon from "@mui/icons-material/Mic";
import Message from "./Message";
import { useState } from "react";

function ChatScreen({ chat, messages }) {
  const [input, setInput] = useState("");
  const [user] = useAuthState(auth);
  const router = useRouter();
  const ref = query(collection(db, "chats"), orderBy("timestamp", "asc"));
  const [messagesSnapshot] = useCollection(ref);

  const showMessages = () => {
    if (messagesSnapshot) {
      return messagesSnapshot.docs.map((message) => (
        <Message
          key={message.id}
          user={message.data().user}
          message={{
            ...message.data(),
            timestamp: new Date(message.data().timestamp),
          }}
        />
      ));
    }
  };

  const sendMessage = (e) => {
    e.preventDefault();
    updateDoc(
      doc(db, "users", user.uid),
      {
        lastSeen: serverTimestamp(),
      },
      { merge: true }
    );

    addDoc(doc(query(collection(db, "messages")), router.query.id), {
      timestamp: serverTimestamp(),
      message: input,
      user: user.email,
      photoURL: user.photoURL,
    });
    setInput("");
  }

  return (
    <Container>
      <Header>
        <Avatar />
        <HeaderInfo>
          <h3>Rec Email</h3>
          <p>Last Seen...</p>
        </HeaderInfo>
        <HeaderIcon>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </HeaderIcon>
      </Header>
      <MessageContainer>
        {showMessages()}
        <EndOfMessage />
      </MessageContainer>

      <InputContainer>
        <InsertEmoticonIcon />
        <Input value={input} onChange={e => setInput(e.target.value)} />
        <button hidden disabled={!input} onClick={sendMessage} type="submit" >Send Message</button>
        <MicIcon />
      </InputContainer>
    </Container>
  );
}
export default ChatScreen;

const Container = styled.div``;
const Input = styled.input`
  flex: 1;
  outline: 0;
  border: 0;
  border-radius: 10px;
  padding: 20px;
  margin-left: 15px;
  margin-right: 15px;
  background-color: whitesmoke;
`;
const InputContainer = styled.form`
  display: flex;
  padding: 10px;
  align-items: center;
  position: sticky;
  bottom: 0;
  background-color: white;
  z-index: 100;
`;
const Header = styled.div`
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: white;
  display: flex;
  padding: 10px;
  height: 80px;
  align-items: center;
  border-bottom: whitesmoke 1px solid;
`;
const HeaderInfo = styled.div`
  margin-left: 15px;
  flex: 1;
  > h3 {
    margin-bottom: 1px;
  }
  > p {
    margin-top: 0px;
    font-size: 14px;
    color: gray;
  }
`;
const EndOfMessage = styled.div``;
const HeaderIcon = styled.div``;
const MessageContainer = styled.div`
  padding: 30px;
  min-height: 90vh;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
  background-color: "#decab8";
`;
