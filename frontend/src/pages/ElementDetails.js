import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import {
  getElementById,
  updateElementContent,
  updateElementImage,
} from '../services/apiService'
import ElementCard from '../components/Cards/ElementCard'
import EditElementItemContentForm from '../components/Forms/EditElementItemContentForm'
import {FormWrapper, PageTitle, Wrapper} from '../components/GlobalStyle'
import Spinner from '../components/Spinner'
import EditImageForm from '../components/Forms/EditImageForm'

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

  const editElementItemImage = (updatedElementImage) =>
    updateElementImage(elementName, updatedElementImage)
      .then(() => {
        const updatedStringData = {
          ...elementItemData,
          elementImage: updatedElementImage,
        }
        setElementItemData(updatedStringData)
      })
      .catch((error) => console.error(error))

  return (
    <Wrapper>
      <PageTitle>Element Details</PageTitle>
      {elementItemData && <ElementCard elementItemData={elementItemData} />}
      {!elementItemData && <Spinner />}
      <FormWrapper>
        <EditElementItemContentForm
          createElementItemContent={editElementItemContent}
        />
        <EditImageForm onAddImage={editElementItemImage} />
      </FormWrapper>
    </Wrapper>
  )
}
