import { useState } from 'react'
import {Button, Form, FormTitle, Textarea, Wrapper} from '../GlobalStyle'

export default function EditElementGroupContentForm({
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
      <FormTitle>Add element group Content</FormTitle>
      <Form onSubmit={handleSubmit}>
        <Textarea
          type="text"
          placeholder="content"
          value={newElementContent}
          onChange={(event) => setNewElementContent(event.target.value)}
        />
        <Button disabled={!newElementContent} type="submit">
          insert
        </Button>
      </Form>
    </Wrapper>
  )
}
