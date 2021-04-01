import {useParams} from 'react-router-dom'
import {useAuth} from '../auth/AuthContext'
import {useEffect, useState} from 'react'
import {
    getElementsBySegmentName,
    getSegmentBySegmentName, postElements,
    updateSegmentContent,
} from '../services/apiService'
import CreateSegmentContent from '../components/CreateSegmentContent'
import CreateElement from "../components/CreateElement";
import ElementList from "../components/ElementList";

export default function SegmentDetails() {
    const [segmentItemData, setSegmentItemData] = useState()
    const [elementItemData, setElementItemData] = useState()
    const {segmentName} = useParams()
    const {token} = useAuth()

    useEffect(() => {
        getSegmentBySegmentName(segmentName, token)
            .then(setSegmentItemData)
            getElementsBySegmentName(segmentName, token)
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

    const createElements = (elementContent) =>
        postElements(segmentName, elementContent)
            .then((updatedElementContent) => {
                const updatedContent = [...elementItemData, updatedElementContent]
                setElementItemData(updatedContent)
            })
            .catch((error) => console.error(error))


    return (
        <div>
            <h1>{segmentName}</h1>
            {/*
            <SegmentCard/>
            <ElementCard/>
            */}
            <CreateSegmentContent onAddSegment={createSegmentContent}/>
            <CreateElement onAddElement={createElements}/>
            <ElementList elements={elementItemData}/>

        </div>
    )
}
/*
    const createDailyElements = (updatedDailyElementContent) =>
        createDailyElementCards(segmentName, updatedDailyElementContent)
            .then((updatedDailyElementContent) => {
                const updatedContent = [...dailyElementItemData, updatedDailyElementContent]
                setDailyElementItemData(updatedContent)
            })
            .catch((error) => console.error(error))
*/