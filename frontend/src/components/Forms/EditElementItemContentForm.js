import { useState } from 'react'
import {Button, Form, Textarea, Title, Wrapper} from '../GlobalStyle'

export default function EditElementItemContentForm({ createElementItemContent }) {
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
      <Title>Add Content</Title>
      <Form onSubmit={handleSubmit}>
        <Textarea
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
