import { useState } from 'react'
import {Button, Form, FormTitle, Textarea, Wrapper} from '../GlobalStyle'

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
      <FormTitle>Add Content</FormTitle>
      <Form onSubmit={handleSubmit}>
        <Textarea
          type="text"
          placeholder="content"
          value={updatedSegmentContent}
          onChange={(event) => setUpdatedSegmentContent(event.target.value)}
        />
        <Button disabled={!updatedSegmentContent} type="submit">
          insert
        </Button>
      </Form>
    </Wrapper>
  )
}
