import styled from 'styled-components/macro'
import Spinner from "../Spinner";
import randomAdvice from "../RandomAdvice";
import {useState} from 'react';

export default function ElementItem({element}) {
    const [loading, setLoading] = useState(false);
    const [adviceData, setAdvice] = useState();


    function getRandomAdvice() {
        setLoading(true);
        randomAdvice().then(response => setAdvice(response.data.slip)).then(() => setLoading(false));
    }


    return (
        <ElementCard>
            <span>Element: {element.elementName}</span>
            <span>Content: {element.elementContent}</span>
            <span>Segment: {element.segmentName}</span>
            {loading && <Spinner/>}
            <Button onClick={() => getRandomAdvice()}>
                Get me some daily advice!
            </Button>
            {adviceData && <Advice>{adviceData.advice}</Advice>}
        </ElementCard>
    )
}


const ElementCard = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  padding-top: 0.5em;
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
const Advice = styled.p`
  margin: 20px 20px 20px 20px;
  padding: 20px;
  border-radius: 10px;
  color: #b07689;
  border: 4px solid #bc99a5;
`




