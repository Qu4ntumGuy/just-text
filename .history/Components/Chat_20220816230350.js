import styled from "styled-components"
import { Avatar, Button, IconButton } from "@mui/material"

function Chat() {
  return (
    <Container>
        <UserAvater />
      <p>Receiver's Email</p>
    </Container>
  )
}

export default Chat

const Container = styled.div`
display: flex;
align-items: center;
cursor: pointer;
padding: 8px;
word-break: break-word;

:hover {
  background-color: whitesmoke;
}
`;

const UserAvater = styled(Avatar)`
height: 75%;
width: 75%;
margin: 5px;
margin-right: 15px;
`;