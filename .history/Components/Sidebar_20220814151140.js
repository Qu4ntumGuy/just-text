import React from "react";
import styled from "styled-components";
import { Avatar, Button, IconButton } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import * as EmailValidator from "email-validator";

function Sidebar() {
  const createChat = () => {
    const input = prompt("Enter an email for Starting a Chat.");
    if (!input) return null; 
    if (!EmailValidator.validate(input)) {
      
    }
  };

  return (
    <Container>
      <Header>
        <UserAvatar />
        <IconContainer>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </IconContainer>
      </Header>
      <Search>
        <SearchIcon />
        <SearchInput placeholder="Search In Chats" />
      </Search>
      <SidebarButton onClick={createChat}>Start A New Chat</SidebarButton>
    </Container>
  );
}

export default Sidebar;

const Container = styled.div``;

const SidebarButton = styled(Button)`
  width: 100%;
  border-top: 1px solid whitesmoke;
  border-bottom: 1px solid whitesmoke;
`;

const Search = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  border-radius: 2px;
`;

const SearchInput = styled.input`
  outline-width: 0ch;
  border: none;
  flex: 1;
`;

const Header = styled.div`
  display: flex;
  position: sticky;
  background-color: white;
  justify-content: space-between;
  z-index: 1;
  align-items: center;
  padding: 15px;
  height: 60px;
  border-bottom: whitesmoke 1px solid;
`;

const UserAvatar = styled(Avatar)`
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
`;

const IconContainer = styled.div``;
