import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'

export default function Footer() {

  return (
      <div>
            <MobileNavbar.Wrapper>
              <MobileNavbar.Items>
                <MobileNavbar.Item as={Link} to={`/login`}>
                  home
                </MobileNavbar.Item>
                <MobileNavbar.Item as={Link} to={`/login`}>
                  login
                </MobileNavbar.Item>
              </MobileNavbar.Items>
            </MobileNavbar.Wrapper>
      </div>
  )
}

const Navbar = {
  Wrapper: styled.nav`
    flex: 1;
    align-self: flex-start;
    padding: 1rem 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-image: linear-gradient(hsl(0, 0%, 89%), hsl(0, 0%, 76%));
  `,
  Logo: styled.h1`
    border: 1px solid gray;
    padding: 0.5rem 1rem;
  `,
  Items: styled.ul`
    display: flex;
    list-style: none;
  `,
  Item: styled.li`
    cursor: pointer;
    text-decoration: none;
    width: 100%;
    font-size: 1rem;
    border: none;
    transition: all 0.3s ease-out;
    :hover, :active {
      background: #dbdbdb;
    }

  `,
}

const MobileNavbar = {
  Wrapper: styled(Navbar.Wrapper)`
    position: fixed;
    width: 100vw;
    bottom: 0;
    justify-content: center;
  `,
  Items: styled(Navbar.Items)`
    flex: 1;
    justify-content: space-around;
  `,
  Item: styled(Navbar.Item)`
    color: inherit;
    text-decoration: none;
  `,
}
