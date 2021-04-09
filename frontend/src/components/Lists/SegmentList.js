import SegmentItem from '../Items/SegmentItem'
import { ListWrapper } from '../GlobalStyle'

export default function SegmentList({ segmentData }) {
  return (
    <ListWrapper>
      {segmentData.map((segment) => (
        <SegmentItem key={segment.id} segment={segment} />
      ))}
    </ListWrapper>
  )
}
