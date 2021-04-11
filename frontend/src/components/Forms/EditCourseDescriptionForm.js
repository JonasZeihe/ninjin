import { useState } from 'react'
import {Button, Form, FormTitle, Textarea, Wrapper} from '../GlobalStyle'

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
      <FormTitle>Add description</FormTitle>
      <Form onSubmit={handleSubmit1}>
        <Textarea
          type="text"
          placeholder="content"
          value={updatedCourseDescription}
          onChange={(event) => setUpdatedCourseDescription(event.target.value)}
        />
        <Button disabled={!updatedCourseDescription} type="submit">
          insert
        </Button>
      </Form>
    </Wrapper>
  )
}
