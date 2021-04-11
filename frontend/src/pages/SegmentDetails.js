import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import {
  getElementsBySegmentName,
  updateSegmentContent,
  updateElementGroupContent,
  getSegmentById,
  updateElementGroupImage,
  updateSegmentImage,
} from '../services/apiService'
import EditSegmentContentForm from '../components/Forms/EditSegmentContentForm'
import EditElementGroupContentForm from '../components/Forms/EditElementGroupContentForm'
import ElementList from '../components/Lists/ElementList'
import SegmentCard from '../components/Cards/SegmentCard'
import {FormTitle, FormWrapper, PageTitle, Wrapper} from '../components/GlobalStyle'
import Spinner from '../components/Spinner'
import EditImageForm from '../components/Forms/EditImageForm'

export default function SegmentDetails() {
  const [segmentItemData, setSegmentItemData] = useState({})
  const [elementGroupData, setElementGroupData] = useState([])

  const { segmentName } = useParams()

  useEffect(() => {
    getSegmentById(segmentName).then(setSegmentItemData)
    getElementsBySegmentName(segmentName)
      .then(setElementGroupData)
      .catch((error) => console.error(error))
  }, [segmentName])

  if (!segmentItemData || !elementGroupData) {
    return <Spinner />
  }

  const editSegmentContent = (updatedSegmentContent) =>
    updateSegmentContent(segmentName, updatedSegmentContent)
      .then(() => {
        const updatedSegmentItemData = {
          ...segmentItemData,
          segmentContent: updatedSegmentContent,
        }
        setSegmentItemData(updatedSegmentItemData)
      })
      .catch((error) => console.error(error))

  const createNewElementGroupContent = (newElementContent) =>
    updateElementGroupContent(segmentName, newElementContent)
      .then(() => {
        getElementsBySegmentName(segmentName).then(setElementGroupData)
      })
      .catch((error) => console.error(error))

  const editSegmentImage = (updatedSegmentImage) =>
    updateSegmentImage(segmentName, updatedSegmentImage)
      .then(() => {
        const updatedSegmentItemImage = {
          ...segmentItemData,
          segmentImage: updatedSegmentImage,
        }
        setSegmentItemData(updatedSegmentItemImage)
      })
      .catch((error) => console.error(error))

  const editElementGroupImage = (updatedElementImage) =>
    updateElementGroupImage(segmentName, updatedElementImage)
      .then(() => {
        getElementsBySegmentName(segmentName).then(setElementGroupData)
      })
      .catch((error) => console.error(error))

  return (
    <Wrapper>
      <PageTitle>Segment Details</PageTitle>
      {segmentItemData && <SegmentCard segmentItemData={segmentItemData} />}
      {!segmentItemData && <Spinner />}
          <FormWrapper>
              <FormTitle>Segment</FormTitle>
              <EditSegmentContentForm onAddSegment={editSegmentContent} />
          <EditImageForm onAddImage={editSegmentImage} />
          </FormWrapper>
        <FormWrapper>
            <FormTitle>Elementgroup</FormTitle>
            <EditElementGroupContentForm
                onAddElementGroupContent={createNewElementGroupContent}/>
            <EditImageForm onAddImage={editElementGroupImage} />
        </FormWrapper>
      <ElementList elements={elementGroupData} />
    </Wrapper>
  )
}
