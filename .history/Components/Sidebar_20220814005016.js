import React from 'react'
import styled from 'styled-components'
import { Avatar } from '@mui/material'
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';


function Sidebar() {
  return (
    <Container>
      <Header>
        <UserAvatar />
        <ChatIcon />
        <MoreVertIcon />
      </Header>
    </Container>
  )
}

export default Sidebar

const Container = styled.div``;

const Header = styled.div``;

const UserAvatar = styled(Avatar)``; 
