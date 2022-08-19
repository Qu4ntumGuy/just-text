import { Avatar, IconButton } from "@mui/material";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import styled from "styled-components";
import { auth, db } from "../firebase";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, doc, orderBy, query } from "firebase/firestore";
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';

function ChatScreen({ chat, messages }) {
  const [user] = useAuthState(auth);
  const router = useRouter();
  const ref = query(
    collection(db, "chats"),
    orderBy("timestamp", "asc")
  );
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
      </InputContainer>
    </Container>
  );
}
export default ChatScreen;

const Container = styled.div``;
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
const MessageContainer = styled.div``;
