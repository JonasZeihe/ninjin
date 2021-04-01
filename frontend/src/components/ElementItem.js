export default function ElementItem({ element }) {
    return (
        <li>
            <span>Element: {element.elementName}</span>
            <span>Content: {element.elementContent}</span>
            <span>Segment: {element.segmentName}</span>

        </li>
    )
}
