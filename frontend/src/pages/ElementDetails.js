import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getElementById, updateElementContent } from '../services/apiService'
import ElementCard from '../components/Cards/ElementCard'
import CreateElementItemContent from '../components/Forms/CreateElementItemContent'
import {FormWrapper, Title, Wrapper} from '../components/GlobalStyle'
import Spinner from "../components/Spinner";

export default function ElementDetails() {
  const [elementItemData, setElementItemData] = useState({})
  const { elementName } = useParams()

  useEffect(() => {
    getElementById(elementName)
      .then(setElementItemData)
      .catch((error) => console.error(error))
  }, [elementName])

  if (!elementItemData) {
    return (
      <section>
        <p>Waiting for elementData</p>
      </section>
    )
  }

  const editElementItemContent = (updatedElementContent) =>
    updateElementContent(elementName, updatedElementContent)
      .then(() => {
        const updatedContent = {
          ...elementItemData,
          elementContent: updatedElementContent,
        }
        setElementItemData(updatedContent)
      })
      .catch((error) => console.error(error))

  return (
    <Wrapper>
      <Title>Element Details</Title>
      {elementItemData && <ElementCard elementItemData={elementItemData} />}
      {!elementItemData && <Spinner/>}
      <FormWrapper>
      <CreateElementItemContent
        createElementItemContent={editElementItemContent}
      />
      </FormWrapper>
    </Wrapper>
  )
}
