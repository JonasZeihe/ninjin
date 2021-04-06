import styled from 'styled-components/macro'
import SegmentItem from '../Items/SegmentItem'

export default function SegmentList({ segmentData }) {
  return (
    <Wrapper>
      {segmentData.map((segment) => (
        <SegmentItem key={segment.courseName} segment={segment} />
      ))}
    </Wrapper>
  )
}
const Wrapper = styled.div`
  list-style-type: none;
  flex-flow: column;
  flex-wrap: wrap;
  flex-direction: row;
`
