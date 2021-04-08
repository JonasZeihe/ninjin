import { useState } from 'react'
import { Button, Form, Input, Title, Wrapper } from '../GlobalStyle'

export default function CreateElementItemContent({ createElementItemContent }) {
  const [updatedElementContent, setUpdatedElementContent] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!updatedElementContent) {
      return
    }
    createElementItemContent(updatedElementContent)
    setUpdatedElementContent('')
  }
  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <Title>Add Content</Title>
        <Input
          type="text"
          placeholder="content"
          value={updatedElementContent}
          onChange={(event) => setUpdatedElementContent(event.target.value)}
        />
        <Button disabled={!updatedElementContent} type="submit">
          submit
        </Button>
      </Form>
    </Wrapper>
  )
}
