import { Link } from 'react-router-dom'
import {
  Button,
  Container, Footer, Nav,
  Wrapper
} from '../components/GlobalStyle'
import ReactMarkdown from 'react-markdown'
import emoji from 'emoji-dictionary'



export default function LandingPage() {

  const markdown = `
# shizen
## mizu kiri 

# :hole: :sweat_drops:

### A simple app for:

:droplet: generating **courses** with **segments** and **elements**

:droplet: adding **participants** to your courses

:droplet: supply your participants with additional **content** :dizzy:

:droplet: get things done easier!

Mizu Kiri (jap. 水切り "the art of cutting water") - stone skipping 

When skipping stones, you try to make the stone bounce as many  
times as possible on the surface but always in a playful way.  
You want to practice something and make a habit of it? Have fun and play! 
🚀✨ 
  `
  const emojiSupport = text => text.value.replace(/:\w+:/gi, name => emoji.getUnicode(name));

  return (
    <Wrapper>
      <Container>
        <ReactMarkdown source={markdown} allowDangerousHtml={true} renderers={{ text: emojiSupport }}/>
      </Container>
      <Footer>
        <Nav>
          <Button as={Link} to={`/login`}>
            Instructors
          </Button>
          <Button as={Link} to={`/login`}>
            Participants
          </Button>
          <Button as={Link} to={`/login`}>
            Contact
          </Button>
          <Button as={Link} to={`/login`}>
            Impressum
          </Button>
        </Nav>
      </Footer>
    </Wrapper>
  )
}


/*const Icon = styled.img`
  box-shadow: 0 0 10px 2px hotpink;
  width: 3.3em;
  height: 3.3em;
  border-radius: 50%;
  left: 1.75em;
`*/
/*
                <Icon src={StoneIcon} />
*/
