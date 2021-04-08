import { CardContainer } from '../GlobalStyle'

export default function SegmentCard({ segmentItemData }) {
  return (
    <CardContainer>
      <span>{segmentItemData.segmentName}</span>
      <span>{segmentItemData.segmentContent}</span>
    </CardContainer>
  )
}
