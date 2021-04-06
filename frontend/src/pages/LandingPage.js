import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import StoneIcon from '../Icons/mizu-kiri-icon.svg'

export default function LandingPage() {
  return (
    <Wrapper>
      <Container>
        <h1>shizen</h1>
        <span>
          A simple app for teachers and instructors to generate courses and
          supply their participants with additional content. Mizu Kiri (jap.
          水切り "the art of cutting water") is the main concept behind this
          app. When skipping stones, you try to make the stone bounce as many
          times as possible on the surface, but always in a playful way. You
          want to practice something and make a habit of it? Have fun and play!
        </span>
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
const Wrapper = styled.section`
  background-image: linear-gradient(#2c2c91, white);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
  width: 100%;
`
const Nav = styled.section`
  display: grid;
  justify-content: space-evenly;
  grid-template-columns: 25% 25% 25% 25%;
  grid-gap: 0.25em;
  border-radius: 10px;
  background: rgb(191, 114, 121, 0.3);
  padding: 1.5em;
`

const Container = styled.div`
  background: rgb(191, 114, 121, 0.3);
  border: 1px solid black;
  width: 90%;
  margin: 25px auto;
  padding: 10%;
  border-radius: 50px;
  box-shadow: 0px 0px 5px black;
  text-align: center;
`

const Footer = styled.footer`
  width: 90%;
  text-align: center;
`
const ButtonLink = styled.div`
  max-width: 100%;
  min-height: 100%;
  font-size: 13px;
  align-content: center;
  align-self: center;
  padding: 0.3em;
  color: rgb(253, 249, 243);
  background: #bf7279;
  border: none;
  border-radius: 3px;
  text-decoration: none;
  outline: 0;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-out;
  :hover {
    background: #de4655;
  }
`
const Icon = styled.img`
  box-shadow: 0 0 10px 2px hotpink;
  width: 3.3em;
  height: 3.3em;
  border-radius: 50%;
  left: 1.75em;
`
