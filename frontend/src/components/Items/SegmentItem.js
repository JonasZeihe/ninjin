import { Link } from 'react-router-dom'
import {ButtonLink, Container} from "../GlobalStyle";

export default function SegmentItem({ segment }) {
  return (
    <Container>
        <span>Segment: {segment.segmentName}</span>
        <span>Content: {segment.segmentContent}</span>
      <ButtonLink as={Link} to={`/segment/${segment.segmentName}`}>
        details
      </ButtonLink>
    </Container>
  )
}
