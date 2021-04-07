import Spinner from '../Spinner'
import randomAdvice from '../RandomAdvice'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import {Button, ButtonLink, Container} from "../GlobalStyle";

export default function ElementItem({ element }) {
  const [loading, setLoading] = useState(false)
  const [adviceData, setAdvice] = useState()

  function getRandomAdvice() {
    setLoading(true)
    randomAdvice()
      .then((response) => setAdvice(response.data.slip))
      .then(() => setLoading(false))
  }

  return (
    <Container>
      <span>Element: {element.elementName}</span>
      <span>Content: {element.elementContent}</span>
      <span>Segment: {element.segmentName}</span>
      {loading && <Spinner />}
      <Button onClick={() => getRandomAdvice()}>
        Get me some daily advice!
      </Button>
      {adviceData && <Container>{adviceData.advice}</Container>}
      <ButtonLink as={Link} to={`/element/${element.elementName}`}>
        details
      </ButtonLink>
    </Container>
  )
}