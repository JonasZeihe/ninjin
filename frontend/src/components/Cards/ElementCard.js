import { CardContainer } from '../GlobalStyle'

export default function ElementCard({ elementItemData }) {
  return (
    <CardContainer>
      <span>{elementItemData.elementName}</span>
      <span>{elementItemData.elementContent}</span>
    </CardContainer>
  )
}
