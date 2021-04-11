import ElementItem from '../Items/ElementItem'
import { ListWrapper } from '../GlobalStyle'

export default function ElementList({ elements }) {
  return (
    <ListWrapper>
      {elements.map((element, index) => (
        <ElementItem
          key={`${element.elementName}_${index}`}
          elementItem={element}
        />
      ))}
    </ListWrapper>
  )
}
