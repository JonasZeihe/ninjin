import { CardContainer, CardImage, CardSpan } from '../GlobalStyle'
import ReactMarkdown from 'react-markdown'
import emoji from 'emoji-dictionary'

export default function SegmentCard({ segmentItemData }) {
  const emojiSupport = (text) =>
    text.value.replace(/:\w+:/gi, (name) => emoji.getUnicode(name))
  return (
    <CardContainer>
      <CardImage
        src={segmentItemData.segmentImage}
        alt="preview image for each segment"
      />
      <CardSpan>{segmentItemData.segmentName}</CardSpan>
      <ReactMarkdown
        source={segmentItemData.segmentContent}
        renderers={{ text: emojiSupport }}
      />
    </CardContainer>
  )
}
