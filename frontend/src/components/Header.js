import styled from 'styled-components/macro'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {LogIn} from "react-feather";
import BackButton from "./BackButton";
import {HeaderLogo} from "./GlobalStyle";

export default function Header() {
    const [windowDimension, setWindowDimension] = useState(null)

    useEffect(() => {
        setWindowDimension(window.innerWidth)
    }, [])

    useEffect(() => {
        function handleResize() {
            setWindowDimension(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const isMobile = windowDimension <= 640

    return (
        <div>
            {isMobile ? (
                <MobileNavbar.Wrapper>
                    <MobileNavbar.Items>
                        <MobileNavbar.Item >
                            <BackButton/>
                        </MobileNavbar.Item>
                    <MobileNavbar.Item >
                        <HeaderLogo>shizen</HeaderLogo>
                        </MobileNavbar.Item>
                    </MobileNavbar.Items>
                </MobileNavbar.Wrapper>
            ) : (
                <Navbar.Wrapper>
                    <Navbar.Items>
                        <Navbar.Item as={Link} to={`/login`} title={"back"}>
                        </Navbar.Item>
                        <Navbar.Item as={Link} to={`/login`}>
                            <LogIn title="Login"/>
                        </Navbar.Item>
                    </Navbar.Items>
                </Navbar.Wrapper>
            )}
        </div>
    )
}

const Navbar = {
    Wrapper: styled.nav`
      z-index: 100;
      height: 3rem;
      width: 100vw;
      position: fixed;
      top: 0;
      display: flex;
      border-bottom: 1px solid rgba(0, 0, 0, 0.7);
      background-color: white;
      justify-content: space-between;
      align-items: center;
    `,
    Logo: styled.h1`
    border: 1px solid gray;
    padding: 0.5rem 1rem;
  `,
    Items: styled.section`
    display: flex;
      flex-flow: row;
  `,
    Item: styled.section`
    cursor: pointer;
    text-decoration: none;
  `,
}

const MobileNavbar = {
    Wrapper: styled(Navbar.Wrapper)`
    width: 100vw;
      height: 3rem;
      top: 0;
    justify-content: flex-start;
  `,
    Items: styled(Navbar.Items)`
    flex: 1;
    justify-content: flex-start;
  `,
    Item: styled(Navbar.Item)`
    color: inherit;
    text-decoration: none;
      align-self: center;
  `
}
