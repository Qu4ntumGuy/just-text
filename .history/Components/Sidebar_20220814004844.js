import React from 'react'
import styled from 'styled-components'
import { Avatar } from '@mui/material'

function Sidebar() {
  return (
    <Container>
      <h1>
        Sidebar
      </h1>
    </Container>
  )
}

export default Sidebar

const Container = styled.div``;

const UserAvatar = styled(Avatar)``;
