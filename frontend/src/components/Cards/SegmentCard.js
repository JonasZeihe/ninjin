import { CardContainer } from '../GlobalStyle'
import ReactMarkdown from 'react-markdown'
import emoji from 'emoji-dictionary'

export default function SegmentCard({ segmentItemData }) {
    const emojiSupport = text => text.value.replace(/:\w+:/gi, name => emoji.getUnicode(name));
    return (
    <CardContainer>
      <span>{segmentItemData.segmentName}</span>
        <ReactMarkdown source={segmentItemData.segmentContent} renderers={{ text: emojiSupport }}   />
    </CardContainer>
  )
}
