import { Container, LandingWrapper } from '../components/GlobalStyle'
import ReactMarkdown from 'react-markdown'
import emoji from 'emoji-dictionary'

export default function LandingPage() {
  const markdown = `
# shizen
## mizu kiri 

# :hole: :sweat_drops:

### A simple app for:

&#9775; generating **courses** with **segments** and **elements**

&#9775; adding **participants** to your courses

&#9775; supply your participants with additional **content** :dizzy:

&#9775; get things done easier!

Mizu Kiri (jap. 水切り "the art of cutting water") - stone skipping 

When skipping stones, you try to make the stone bounce as many  
times as possible on the surface but always in a playful way.  
You want to practice something and make a habit of it? Have fun and play! 
🚀✨ 
  `
  const emojiSupport = (text) =>
    text.value.replace(/:\w+:/gi, (name) => emoji.getUnicode(name))

  return (
    <LandingWrapper>
      <Container>
        <ReactMarkdown
          source={markdown}
          allowDangerousHtml={true}
          renderers={{ text: emojiSupport }}
        />
      </Container>
    </LandingWrapper>
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
