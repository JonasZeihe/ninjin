import { Link } from 'react-router-dom'
import {ButtonLink, Container, ListItemContainer} from '../GlobalStyle'
/*
import ReactMarkdown from 'react-markdown'
import emoji from 'emoji-dictionary'
*/

export default function SegmentItem({ segment }) {
/*
    const emojiSupport = text => text.value.replace(/:\w+:/gi, name => emoji.getUnicode(name));
*/
    return (
    <ListItemContainer as={Link} to={`/segment/${segment.segmentName}`}>
      <span>Segment: {segment.segmentName}</span>
{/*
        <ReactMarkdown source={segment.segmentContent} renderers={{ text: emojiSupport }}   />
*/}
    </ListItemContainer>
  )
}
