import { useState } from 'react'
import {Button, Form, FormTitle, Textarea, Wrapper} from '../GlobalStyle'

export default function EditElementItemContentForm({
  createElementItemContent,
}) {
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
      <FormTitle>Add Content</FormTitle>
      <Form onSubmit={handleSubmit}>
        <Textarea
          type="text"
          placeholder="content"
          value={updatedElementContent}
          onChange={(event) => setUpdatedElementContent(event.target.value)}
        />
        <Button disabled={!updatedElementContent} type="submit">
          insert
        </Button>
      </Form>
    </Wrapper>
  )
}
