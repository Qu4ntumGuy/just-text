import moment from "moment";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import styled from "styled-components";
import { auth } from "../firebase";

function Message({ user, message }) {
  const [userLoggedIn] = useAuthState(auth);
  const TypeOfMessage = user === userLoggedIn.email ? Sender : Receiver;
  return (
    <Container>
      <TypeOfMessage>
        {message.message}
        <timeSpan>
          {message.timestamp ? moment(message.timestamp).format("LT") : "..."}
        </timeSpan>
      </TypeOfMessage>
    </Container>
  );
}

export default Message;

const Container = styled.div``;

const messageElement = styled.p`
  width: fit-content;
  padding: 10px;
  border-radius: 8px;
  margin: 10px;
  min-width: 60px;
  padding-bottom: 26px;
  position: relative;
  text-align: right;
`;

const Sender = styled(messageElement)`
  margin-left: auto;
  background-color: "#7fbfeb";
  text-align: right;
`;

const Receiver = styled(messageElement)`
  background-color: whitesmoke;
  text-align: left;
`;

const timeSpan = styled.span`
  color: gray;
  padding: 10px;
  font-size: 9px;
  position: absolute;
  border: 0;
  text-align: right;
  right: 0;
`;
