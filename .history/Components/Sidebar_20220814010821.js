import React from "react";
import styled from "styled-components";
import { Avatar, IconButton } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from '@mui/icons-material/Search';

function Sidebar() {
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
    </Container>
  );
}

export default Sidebar;

const Container = styled.div``;

const Search = styled.div`
display: flex;
`;

const SearchInput = styled.input`

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
};
`;

const IconContainer = styled.div``;
