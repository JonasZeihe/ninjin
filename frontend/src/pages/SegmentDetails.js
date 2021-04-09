import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import {
  getElementsBySegmentName,
  updateSegmentContent,
  updateElementGroupContent,
  getSegmentById,
} from '../services/apiService'
import CreateSegmentContent from '../components/Forms/CreateSegmentContent'
import CreateElementGroupContent from '../components/Forms/CreateElementGroupContent'
import ElementList from '../components/Lists/ElementList'
import SegmentCard from '../components/Cards/SegmentCard'
import {FormWrapper, Title, Wrapper} from '../components/GlobalStyle'
import Spinner from '../components/Spinner'

export default function SegmentDetails() {
  const [segmentItemData, setSegmentItemData] = useState({})
  const [elementGroupData, setElementGroupData] = useState([])

  const { segmentName } = useParams()
  console.log(elementGroupData)

  useEffect(() => {
    getSegmentById(segmentName).then(setSegmentItemData)
    getElementsBySegmentName(segmentName)
      .then(setElementGroupData)
      .catch((error) => console.error(error))
  }, [segmentName])

  if (!segmentItemData) {
    return (
      <Spinner>
        <p>Waiting for segmentData</p>
      </Spinner>
    )
  }
  if (!elementGroupData) {
    return (
      <Spinner>
        <p>Waiting for elementGroupData</p>
      </Spinner>
    )
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

  return (
    <Wrapper>
      <Title>Segment Details</Title>
      {segmentItemData && <SegmentCard segmentItemData={segmentItemData} />}
      {!segmentItemData && <Spinner/>}
      <FormWrapper>
      <CreateSegmentContent onAddSegment={editSegmentContent} />
      <CreateElementGroupContent
        onAddElementGroupContent={createNewElementGroupContent}
      />
      </FormWrapper>
      <ElementList elements={elementGroupData} />
    </Wrapper>
  )
}
