import styled from 'styled-components/macro'
import SegmentItem from './SegmentItem'

export default function SegmentList({ segments }) {
  return (
    <Wrapper>
      {segments.map((segment) => (
        <SegmentItem key={segment.segmentName} segment={segment} />
      ))}
    </Wrapper>
  )
}
const Wrapper = styled.div`
  list-style-type: none;
`
