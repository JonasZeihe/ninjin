import { useState } from 'react'
import { Button, Form, Input, Title, Wrapper } from '../GlobalStyle'

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
      <Form onSubmit={handleSubmit}>
        <Title>Add element group Content</Title>
        <Input
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
