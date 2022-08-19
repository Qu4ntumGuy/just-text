import styled from "styled-components"

function Chat() {
  return (
    <Container>
        <userAvater />
      <p>Receiver's Email</p>
    </Container>
  )
}

export default Chat

const Container = styled.div`
display: flex;
`;

const userAvater = styled(Avatar)`
margin: 5px;
margin-right: 15px;
`;