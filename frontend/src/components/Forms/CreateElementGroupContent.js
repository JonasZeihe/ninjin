import { useState } from 'react'
import {Button, Form, Textarea, Title, Wrapper} from '../GlobalStyle'

export default function CreateElementGroupContent({
  onAddElementGroupContent,
}) {
  const [newElementContent, setNewElementContent] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!newElementContent) {
      return
    }
    onAddElementGroupContent(newElementContent)
    setNewElementContent('')
  }
  return (
    <Wrapper>
      <Title>Add element group Content</Title>
      <Form onSubmit={handleSubmit}>
        <Textarea
          type="text"
          placeholder="content"
          value={newElementContent}
          onChange={(event) => setNewElementContent(event.target.value)}
        />
        <Button disabled={!newElementContent} type="submit">
          submit
        </Button>
      </Form>
    </Wrapper>
  )
}
