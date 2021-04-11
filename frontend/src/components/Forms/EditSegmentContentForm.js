import { useState } from 'react'
import { Button, Form, Textarea, Title, Wrapper } from '../GlobalStyle'

export default function EditSegmentContentForm({ onAddSegment }) {
  const [updatedSegmentContent, setUpdatedSegmentContent] = useState('')
  const handleSubmit = (event) => {
    event.preventDefault()
    if (!updatedSegmentContent) {
      return
    }
    onAddSegment(updatedSegmentContent)
    setUpdatedSegmentContent('')
  }
  return (
    <Wrapper>
      <Title>Add Content</Title>
      <Form onSubmit={handleSubmit}>
        <Textarea
          type="text"
          placeholder="content"
          value={updatedSegmentContent}
          onChange={(event) => setUpdatedSegmentContent(event.target.value)}
        />
        <Button disabled={!updatedSegmentContent} type="submit">
          submit
        </Button>
      </Form>
    </Wrapper>
  )
}
