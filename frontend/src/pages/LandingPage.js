import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import {ButtonLink, Container, Title, Wrapper} from "../components/GlobalStyle";

export default function LandingPage() {
  return (
    <Wrapper>
      <Container>
        <Title>shizen</Title>
        <p>
          A simple app for teachers and instructors to generate courses and
          supply their participants with additional content. Mizu Kiri (jap.
          水切り "the art of cutting water") is the main concept behind this
          app. When skipping stones, you try to make the stone bounce as many
          times as possible on the surface, but always in a playful way. You
          want to practice something and make a habit of it? Have fun and play!
        </p>
      </Container>
      <Footer>
        <Nav>
          <ButtonLink as={Link} to={`/login`}>
            {/*
                <Icon src={StoneIcon} />
*/}
            Login for Instructors
          </ButtonLink>
          <ButtonLink as={Link} to={`/login`}>
            {/*
                <Icon src={StoneIcon} />
*/}
            Login for Participants
          </ButtonLink>
          <ButtonLink as={Link} to={`/login`}>
            {/*
                <Icon src={StoneIcon} />
*/}
            Contact
          </ButtonLink>
          <ButtonLink as={Link} to={`/login`}>
            {/*
                <Icon src={StoneIcon} />
*/}
            Impressum
          </ButtonLink>
        </Nav>
      </Footer>
    </Wrapper>
  )
}

const Nav = styled.section`
  display: grid;
  justify-content: space-evenly;
  grid-template-columns: 25% 25% 25% 25%;
  grid-gap: 0.25em;
  border-radius: 5px;
  background: rgb(191, 114, 121, 0.3);
  padding: 1.5em;
`
const Footer = styled.footer`
  width: 90%;
  text-align: center;
`

const Icon = styled.img`
  box-shadow: 0 0 10px 2px hotpink;
  width: 3.3em;
  height: 3.3em;
  border-radius: 50%;
  left: 1.75em;
`
