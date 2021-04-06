import styled from 'styled-components/macro'
import logo from '../images/mizu-kiri.png.svg'

export default function Header() {
  return (
    <Wrapper>
      <div>
        <h2>shizen</h2>
      </div>

      <Logo src={logo} />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: linear-gradient(white, #2c2c91);
  display: flex;
  flex-flow: row;
  padding-left: 2em;
  position: relative;
`
const Logo = styled.img`
  width: 15em;
  position: absolute;
`
