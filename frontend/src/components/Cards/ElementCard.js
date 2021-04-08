import { CardContainer } from '../GlobalStyle'
import ReactMarkdown from 'react-markdown'
import emoji from 'emoji-dictionary'

export default function ElementCard({ elementItemData }) {
    const emojiSupport = text => text.value.replace(/:\w+:/gi, name => emoji.getUnicode(name));
  return (
    <CardContainer>
      <span>{elementItemData.elementName}</span>
        <ReactMarkdown source={elementItemData.elementContent} renderers={{ text: emojiSupport }}   />
    </CardContainer>
  )
}
