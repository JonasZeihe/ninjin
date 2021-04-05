import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

export default function SegmentItem({ segment }) {
  return (
    <SegmentCard>
      <span>Course: {segment.courseName}</span>
      <span>Content: {segment.segmentContent}</span>
      <span>Segment: {segment.segmentName}</span>
      <ButtonLink as={Link} to={`/segment/${segment.segmentName}`}>
        details
      </ButtonLink>
    </SegmentCard>
  )
}

const ButtonLink = styled.div`
  max-width: 100%;
  padding: 11px 13px;
  color: rgb(253, 249, 243);
  font-weight: 200;
  background: #bf7279;
  border: none;
  border-radius: 3px;
  outline: 0;
  cursor: pointer;
  margin-top: 0.6rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-out;
  :hover {
    background: #ca9499;
  }
`

const SegmentCard = styled.div`
  padding: 1em;
  display: flex;
  align-items: center;
  position: relative;
  text-decoration: none;
  color: inherit;

  div {
    height: 1.5em;
    width: 18em;
    padding: 0.5em 2em 1.75em 4em;
    background: #f6f3e7;
    text-align: center;
  }
`
