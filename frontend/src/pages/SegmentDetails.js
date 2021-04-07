import { useParams } from 'react-router-dom'
import { useAuth } from '../auth/AuthContext'
import { useEffect, useState } from 'react'
import {
    getElementsBySegmentName,
    updateSegmentContent,
    updateElementGroupContent,
    getSegmentById
} from '../services/apiService'
import CreateSegmentContent from '../components/Forms/CreateSegmentContent'
import CreateElementGroupContent from '../components/Forms/CreateElementGroupContent'
import ElementList from '../components/Lists/ElementList'
import SegmentCard from "../components/Cards/SegmentCard";
import {Title, Wrapper} from "../components/GlobalStyle";
import Spinner from "../components/Spinner";

export default function SegmentDetails() {
  const [segmentItemData, setSegmentItemData] = useState({})
  const [elementGroupData, setElementGroupData] = useState([])

  const { segmentName } = useParams()
    console.log(elementGroupData)
    const { token } = useAuth()

  useEffect(() => {
      getSegmentById(segmentName, token).then(setSegmentItemData)
      getElementsBySegmentName(segmentName, token)
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
        const updatedSegmentItemData = {...segmentItemData, segmentContent: updatedSegmentContent}
        setSegmentItemData(updatedSegmentItemData)
      })
      .catch((error) => console.error(error))



    const createNewElementGroupContent = (newElementContent) =>
        updateElementGroupContent(segmentName, newElementContent)
            .then(() => {
                const updatedContent = elementGroupData.forEach((newElementContent) => {
                    setElementGroupData(elementContent => elementContent.set(newElementContent))
                    setElementGroupData(updatedContent)
                })
            })
            .catch((error) => console.error(error))


  return (
    <Wrapper>
        <Title>Segment Details</Title>
        {segmentItemData && (
            <SegmentCard segmentItemData={segmentItemData}/>
            )}
        {!segmentItemData && <span>Loading segmentData</span>}
      <CreateSegmentContent onAddSegment={editSegmentContent} />
      <CreateElementGroupContent onAddElementGroupContent={createNewElementGroupContent}/>
      <ElementList elements={elementGroupData} />
    </Wrapper>
  )
}


/*
const createNewElementGroupContent = (newElementContent) =>
    updateElementGroupContent(segmentName, newElementContent)
        .then(() => {
            const updatedContent = [...elementGroupData, [elementContent: newElementContent]]
            setElementGroupData(updatedContent)
        })
        .catch((error) => console.error(error))
*/
