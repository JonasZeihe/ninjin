import { useParams } from 'react-router-dom'
import { useAuth } from '../auth/AuthContext'
import { useEffect, useState } from 'react'
import {
  getElementsBySegmentName,
  getSegmentBySegmentName,
  updateSegmentContent,
  updateElementContentBySegmentName,
  updateElementContent,
} from '../services/apiService'
import CreateSegmentContent from '../components/Forms/CreateSegmentContent'
import CreateElementContent from '../components/Forms/CreateElementContent'
import ElementList from '../components/Lists/ElementList'

export default function SegmentDetails() {
  const [segmentItemData, setSegmentItemData] = useState()
  const [elementItemData, setElementItemData] = useState([])
  const { segmentName } = useParams()
  const { token } = useAuth()

  useEffect(() => {
    getSegmentBySegmentName(segmentName, token).then(setSegmentItemData)
    getElementsBySegmentName(segmentName, token)
      .then(setElementItemData)
      .catch((error) => console.error(error))
  }, [segmentName])

  if (!segmentItemData) {
    return (
      <section>
        <p>Waiting for segmentData</p>
      </section>
    )
  }
  if (!elementItemData) {
    return (
      <section>
        <p>Waiting for elementData</p>
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

  // const deleteSegmentContent
  // const deleteElementContent
  /*
  const createNewElementGroupContent = (elementContent) =>
    updateElementContentBySegmentName(segmentName, elementContent)
      .then((updatedElementContent) => {
        const updatedContent = [...elementItemData, updatedElementContent]
        setElementItemData(updatedContent)
      })
      .catch((error) => console.error(error))

  const createNewElementItemContent = (elementItemContent) =>
    updateElementContent(elementName, elementItemContent)
      .then((updatedElementContent) => {
        const updatedContent = [...elementItemData, updatedElementContent]
        setElementItemData(updatedContent)
      })
      .catch((error) => console.error(error))
*/

  return (
    <div>
      <h1>{segmentName}</h1>
      {/*
            <SegmentCard segmentData={segmentItemData}/>
*/}
      <CreateSegmentContent onAddSegment={createSegmentContent} />
      {/*
            <ElementCard elementData={elementItemData}/>
*/}
      {/*      <CreateElementContent
        onAddElementGroupContent={createNewElementGroupContent}
        onAddElementItemContent={createNewElementItemContent}
      />*/}
      <ElementList elements={elementItemData} />
    </div>
  )
}
