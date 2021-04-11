import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'

export default function Footer() {

  return (
      <div>
            <Navbar.Wrapper>
              <Navbar.Items>
                <Navbar.Item as={Link} to={`/login`}>
                  home
                </Navbar.Item>
                <Navbar.Item as={Link} to={`/login`}>
                  login
                </Navbar.Item>
              </Navbar.Items>
            </Navbar.Wrapper>
      </div>
  )
}

const Navbar = {
  Wrapper: styled.nav`
    z-index: 100;
    height: 3rem;
    position: fixed;
    bottom: 0;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-image: linear-gradient(hsl(0, 0%, 89%), hsl(0, 0%, 76%));
  `,
  Logo: styled.h1`
    border: 1px solid gray;
    padding: 0.5rem 1rem;
  `,
  Items: styled.section`
    flex: 1;
    display: flex;
    list-style: none;
    justify-content: space-around;
  `,
  Item: styled.section`
    color: inherit;
    cursor: pointer;
    text-decoration: none;
    `
}