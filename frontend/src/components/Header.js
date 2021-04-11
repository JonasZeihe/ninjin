import styled from 'styled-components/macro'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import BackButton from "./BackButton";

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
                    <BackButton/>
                    <MobileNavbar.Item as={Link} to={`/login`}>
                            home
                        </MobileNavbar.Item>
                        <MobileNavbar.Item as={Link} to={`/login`}>
                            login
                        </MobileNavbar.Item>
                    </MobileNavbar.Items>
                </MobileNavbar.Wrapper>
            ) : (
                <Navbar.Wrapper>
                    <Navbar.Logo>Logo</Navbar.Logo>
                    <Navbar.Items>
                        <Navbar.Item as={Link} to={`/login`} title={"back"}>
                        </Navbar.Item>
                        <Navbar.Item as={Link} to={`/login`}>
                            home
                        </Navbar.Item>
                        <Navbar.Item as={Link} to={`/login`}>
                            login
                        </Navbar.Item>
                    </Navbar.Items>
                </Navbar.Wrapper>
            )}
        </div>
    )
}

const Navbar = {
    Wrapper: styled.nav`
      height: 5rem;
      width: 100vw;
      position: fixed;
      top: 0;
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
    display: flex;
  `,
    Item: styled.section`
    cursor: pointer;
    text-decoration: none;
  `,
}

const MobileNavbar = {
    Wrapper: styled(Navbar.Wrapper)`
      z-index: 100;
    width: 100vw;
      height: 3rem;
      top: 0;
    justify-content: center;
  `,
    Items: styled(Navbar.Items)`
    flex: 1;
    justify-content: space-around;
  `,
    Item: styled(Navbar.Item)`
    color: inherit;
    text-decoration: none;
      :hover, :active, :visited {
        text-decoration: none;
      }
  `
}
