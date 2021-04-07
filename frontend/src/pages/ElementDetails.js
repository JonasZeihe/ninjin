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
import CreateElementItemContent from "../components/Forms/CreateElementItemContent";
import {Title, Wrapper} from "../components/GlobalStyle";

export default function ElementDetails() {
  const [elementItemData, setElementItemData] = useState({})
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

  const editElementItemContent = (updatedElementContent) =>
    updateElementContent(elementName, updatedElementContent)
      .then(() => {
        const updatedContent = {...elementItemData, elementContent: updatedElementContent}
        setElementItemData(updatedContent)
      })
      .catch((error) => console.error(error))



  return (
    <Wrapper>
        <Title>Element Details</Title>
        {elementItemData && (
            <ElementCard elementItemData={elementItemData}/>
        )}
        {!elementItemData && <span>Loading elementData</span>}
      <CreateElementItemContent createElementItemContent={editElementItemContent} />
    </Wrapper>
  )
}


