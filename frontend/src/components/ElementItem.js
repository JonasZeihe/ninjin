export default function ElementItem({ element }) {
    return (
        <li>
            <span>Content: {element.elementContent}</span>
            <span>Segment: {element.segmentName}</span>

        </li>
    )
}
