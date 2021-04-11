import Spinner from '../Spinner'
import randomAdvice from '../RandomAdvice'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  AdviceContainer,
  Button,
  ListItemContainer,
  PreviewContainer,
  PreviewImage,
  PreviewSpan,
} from '../GlobalStyle'
import ReactMarkdown from 'react-markdown'
import emoji from 'emoji-dictionary'

export default function ElementItem({ elementItem }) {
  const emojiSupport = (text) =>
    text.value.replace(/:\w+:/gi, (name) => emoji.getUnicode(name))
  const [loading, setLoading] = useState(false)
  const [adviceData, setAdvice] = useState()

  function getRandomAdvice() {
    setLoading(true)
    randomAdvice()
      .then((response) => setAdvice(response.data.slip))
      .then(() => setLoading(false))
  }

  return (
    <ListItemContainer as={Link} to={`/element/${elementItem.elementName}`}>
      <PreviewImage src={elementItem.elementImage} />
      <PreviewSpan>{elementItem.elementName}</PreviewSpan>
      <PreviewContainer>
        <ReactMarkdown
          source={elementItem.elementContent}
          renderers={{ text: emojiSupport }}
        />
      </PreviewContainer>
      {loading && <Spinner />}
      <Button onClick={() => getRandomAdvice()}>
        Get me some daily advice!
      </Button>
      {adviceData && <AdviceContainer>{adviceData.advice}</AdviceContainer>}
    </ListItemContainer>
  )
}
