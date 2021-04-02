import styled from 'styled-components/macro'
import ElementItem from "./ElementItem";

export default function ElementList({ elements }) {
    return (
        <Wrapper>
            {elements.map((element) => (
                <ElementItem key={element.segmentName} element={element} />
            ))}
        </Wrapper>
    )
}
const Wrapper = styled.div`
  list-style-type: none;
`

