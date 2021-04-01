import { Link } from 'react-router-dom'

export default function SegmentItem({ segment }) {
  return (
    <li>
      <span>Course: {segment.courseName}</span>
      <span>Content: {segment.segmentContent}</span>
      <span>Segment: {segment.segmentName}</span>
      <Link to={`/segment/${segment.segmentName}`}>Show</Link>
    </li>
  )
}
