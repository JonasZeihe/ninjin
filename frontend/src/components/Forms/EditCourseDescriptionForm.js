import { useState } from 'react'
import { Button, Form, Textarea, Title, Wrapper } from '../GlobalStyle'

export default function EditCourseDescriptionForm({ onAddDescription }) {
  const [updatedCourseDescription, setUpdatedCourseDescription] = useState('')

  const handleSubmit1 = (event) => {
    event.preventDefault()
    if (!updatedCourseDescription) {
      return
    }
    onAddDescription(updatedCourseDescription)
    setUpdatedCourseDescription('')
  }

  return (
    <Wrapper>
      <Title>Add description</Title>
      <Form onSubmit={handleSubmit1}>
        <Textarea
          type="text"
          placeholder="content"
          value={updatedCourseDescription}
          onChange={(event) => setUpdatedCourseDescription(event.target.value)}
        />
        <Button disabled={!updatedCourseDescription} type="submit">
          submit
        </Button>
      </Form>
    </Wrapper>
  )
}
