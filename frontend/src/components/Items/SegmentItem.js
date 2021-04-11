import { Link } from 'react-router-dom'
import {
  ListItemContainer,
  PreviewContainer,
  PreviewImage,
  PreviewSpan,
} from '../GlobalStyle'
import ReactMarkdown from 'react-markdown'
import emoji from 'emoji-dictionary'

export default function SegmentItem({ segmentItem }) {
  const emojiSupport = (text) =>
    text.value.replace(/:\w+:/gi, (name) => emoji.getUnicode(name))
  return (
    <ListItemContainer as={Link} to={`/segment/${segmentItem.segmentName}`}>
      <PreviewImage src={segmentItem.segmentImage} />
      <PreviewSpan>{segmentItem.segmentName}</PreviewSpan>
      <PreviewContainer>
        <ReactMarkdown
          source={segmentItem.segmentContent}
          renderers={{ text: emojiSupport }}
        />
      </PreviewContainer>
    </ListItemContainer>
  )
}
