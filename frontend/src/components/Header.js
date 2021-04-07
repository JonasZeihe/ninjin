import styled from 'styled-components/macro'
import logo from '../images/mizu-kiri.png.svg'

export default function Header() {
  return (
    <HeaderWrapper>
      <div>
        <h2>shizen</h2>
      </div>

{/*
      <Logo src={logo} />
*/}
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.section`
  display: flex;
  flex-flow: row;
  padding-left: 2em;
  position: relative;
  height: auto;
  background-image: url("../images/carrot old logo.png");
`
const Logo = styled.img`
  width: 15em;
  position: absolute;
`
