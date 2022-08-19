import React from "react";
import styled from "styled-components";
import { Avatar, IconButton } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";

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
    </Container>
  );
}

export default Sidebar;

const Container = styled.div``;

const Header = styled.div`
display: flex;
position: sticky;
top: 0;
background-color: #fff;
justify-content: space-between;
z-index: 1;
align-items: center;
padding: 0.5rem 1rem;
height: 80px;
border-bottom: whitesmoke;
`;

const UserAvatar = styled(Avatar)``;

const IconContainer = styled.div``;
