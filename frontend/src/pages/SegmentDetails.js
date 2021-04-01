import { useParams } from 'react-router-dom'
import { useAuth } from '../auth/AuthContext'
import { useEffect, useState } from 'react'
import {
  getSegmentBySegmentName,
  updateSegmentContent,
} from '../services/apiService'
import CreateSegmentContent from '../components/CreateSegmentContent'

export default function SegmentDetails() {
  const [segmentItemData, setSegmentItemData] = useState()
  const { segmentName } = useParams()
  const { token } = useAuth()

  useEffect(() => {
    getSegmentBySegmentName(segmentName, token)
      .then(setSegmentItemData)
      .catch((error) => console.error(error))
  }, [segmentName])

  if (!segmentItemData) {
    return (
      <section>
        <p>Waiting for segmentData</p>
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
  // const createDailyCard

  return (
    <div>
      <h1>{segmentName}</h1>
      <CreateSegmentContent onAdd={createSegmentContent} />
      {/*
            <CreateDailyCard onAdd={createDailyCard}/>
            */}
    </div>
  )
}
