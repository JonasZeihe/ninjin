import SegmentItem from '../Items/SegmentItem'
import { ListWrapper } from '../GlobalStyle'

export default function SegmentList({ segmentList }) {
  return (
    <ListWrapper>
      {segmentList.map((segment, index) => (
        <SegmentItem
          key={`${segment.segmentName}_${index}`}
          segmentItem={segment}
        />
      ))}
    </ListWrapper>
  )
}
