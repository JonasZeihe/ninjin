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
import styled from 'styled-components/macro'
import SegmentCard from "../components/Cards/SegmentCard";

export default function SegmentDetails() {
  const [segmentItemData, setSegmentItemData] = useState("")
  const [elementGroupData, setElementGroupData] = useState([""])
  const { segmentName } = useParams()
  const { token } = useAuth()

  useEffect(() => {
      getSegmentById(segmentName, token).then(setSegmentItemData)
      getElementsBySegmentName(segmentName, token)
          .then(setElementGroupData)
          .catch((error) => console.error(error))
  }, [segmentName])

  if (!segmentItemData) {
    return (
      <section>
        <p>Waiting for segmentData</p>
      </section>
    )
  }
  if (!elementGroupData) {
    return (
      <section>
        <p>Waiting for elementGroupData</p>
      </section>
    )
  }

  const createSegmentContent = (updatedSegmentContent) =>
    updateSegmentContent(segmentName, updatedSegmentContent)
      .then((updatedSegmentContent) => {
        const updatedContent = [...segmentItemData, updatedSegmentContent]
        setSegmentItemData(updatedContent)
      })
      .catch((error) => console.error(error))

  const createNewElementGroupContent = (elementContent) =>
    updateElementGroupContent(segmentName, elementContent)
      .then((updatedElementContent) => {
        const updatedContent = [...elementGroupData, updatedElementContent]
        setElementGroupData(updatedContent)
      })
      .catch((error) => console.error(error))

  return (
    <Wrapper>
        {segmentItemData && (
            <SegmentCard segmentItemData={segmentItemData}/>
            )}
        {!segmentItemData && <span>Loading segmentData</span>}
      <CreateSegmentContent onAddSegment={createSegmentContent} />
      <CreateElementGroupContent onAddElementGroupContent={createNewElementGroupContent}/>
      <ElementList elements={elementGroupData} />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background-image: linear-gradient(#2c2c91, white);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
  width: 100%;
`
