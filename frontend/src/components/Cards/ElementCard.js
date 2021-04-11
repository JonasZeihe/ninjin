import {CardContainer, CardImage, CardSpan, MarkdownContainer} from '../GlobalStyle'
import ReactMarkdown from 'react-markdown'
import emoji from 'emoji-dictionary'

export default function ElementCard({ elementItemData }) {
  const emojiSupport = (text) =>
    text.value.replace(/:\w+:/gi, (name) => emoji.getUnicode(name))
  return (
    <CardContainer>
      <CardImage
        src={elementItemData.elementImage}
        alt="preview image for each element"
      />
      <CardSpan>{elementItemData.elementName}</CardSpan>
        <MarkdownContainer>
        <ReactMarkdown
        source={elementItemData.elementContent}
        renderers={{ text: emojiSupport }}
      />
        </MarkdownContainer>
    </CardContainer>
  )
}
