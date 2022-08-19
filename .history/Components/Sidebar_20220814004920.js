import React from 'react'
import styled from 'styled-components'
import { Avatar } from '@mui/material'

function Sidebar() {
  return (
    <Container>
      <Header>
        Sidebar
      </Header>
    </Container>
  )
}

export default Sidebar

const Container = styled.div``;

const Header = styled.div``;

const UserAvatar = styled(Avatar)``; 
