import ElementItem from '../Items/ElementItem'
import {ListWrapper} from "../GlobalStyle";

export default function ElementList({ elements }) {
  return (
    <ListWrapper>
      {elements.map((element) => (
        <ElementItem key={element.id} element={element} />
      ))}
    </ListWrapper>
  )
}

