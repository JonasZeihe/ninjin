import styled from 'styled-components/macro'
import Spinner from '../Spinner'
import randomAdvice from '../RandomAdvice'
import { useState } from 'react'
import { Link } from 'react-router-dom'

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

const Container = styled.div`
  display: flex;
  flex-flow: column;
  flex-wrap: wrap;
  background: rgb(191, 114, 121, 0.3);
  border: 1px solid black;
  width: 100%;
  margin: 25px auto;
  padding: 10%;
  border-radius: 10px;
  box-shadow: 0px 0px 5px black;
  text-align: center;
`

const ButtonLink = styled.div`
  max-width: 100%;
  align-content: center;
  align-self: center;
  padding: 0.3em;
  color: rgb(253, 249, 243);
  background: #bf7279;
  border: none;
  border-radius: 3px;
  text-decoration: none;
  outline: 0;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-out;
  :hover {
    background: #de4655;
  }
`
const Button = styled.button`
  max-width: 100%;
  padding: 11px 13px;
  color: rgb(253, 249, 243);
  font-weight: 600;
  text-transform: uppercase;
  background: #bf7279;
  border: none;
  border-radius: 3px;
  outline: 0;
  cursor: pointer;
  margin-top: 0.6rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-out;
  :hover {
    background: #ca9499;
  }
`
