import styled from "styled-components";
import { Avatar, Button, IconButton } from "@mui/material";
import getReceiversEmail from "../utils/getReceiversEmail";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import { query } from "firebase/firestore";

function Chat({ id, users }) {
  const [user] = useAuthState(auth);
  const [receiversSnapshot] = useCollection(query(collection(db, "users"), where("email", "==", getReceiversEmail(users, user.email))));
  const receiversEmail = getReceiversEmail(users, user);

  return (
    <Container>
      <UserAvater />
      <p>{receiversEmail}</p>
    </Container>
  );
}

export default Chat;

const Container = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 3 px;
  word-break: break-word;

  :hover {
    background-color: whitesmoke;
  }
`;

const UserAvater = styled(Avatar)`
  margin: 5px;
  margin-right: 15px;
`;
