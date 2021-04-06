import { useParams } from 'react-router-dom'
import { useAuth } from '../auth/AuthContext'
import { useEffect, useState } from 'react'
import styled from 'styled-components/macro'
import {
    getElementById,
    updateElementContent,
} from '../services/apiService'
import CreateElementGroupContent from '../components/Forms/CreateElementGroupContent'
import ElementCard from "../components/Cards/ElementCard";

export default function ElementDetails() {
  const [elementItemData, setElementItemData] = useState("")
  const { elementName } = useParams()
  const { token } = useAuth()

  useEffect(() => {
    getElementById(elementName, token)
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

  const createElementItemContent = (elementContent) =>
    updateElementContent(elementName, elementContent)
      .then((updatedSegmentContent) => {
        const updatedContent = [...elementItemData, updatedSegmentContent]
        setElementItemData(updatedContent)
      })
      .catch((error) => console.error(error))

  return (
    <Wrapper>
        {elementItemData && (
            <ElementCard elementItemData={elementItemData}/>
        )}
        {!elementItemData && <span>Loading elementData</span>}
      <CreateElementGroupContent onAddElement={createElementItemContent} />
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
