import { useState } from 'react'
import {Button, Form, Input, Title, Wrapper} from '../GlobalStyle'

export default function AddNewCourseForm({
  onAddCourse,
  onAddSegment,
  onAddElement,
}) {
  const [courseName, setCourseName] = useState('')
  const [courseSize, setCourseSize] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!courseName) {
      return
    }
    onAddCourse(courseName, courseSize)
    onAddSegment(courseName, courseSize)
    onAddElement(courseName, courseSize)
    setCourseName('')
    setCourseSize('')
  }

  return (
    <Wrapper>
      <Title>Create a new course and set a size</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="course name"
          value={courseName}
          onChange={({ target }) => setCourseName(target.value)}
        />
        <Input
          disabled={!courseName}
          placeholder="course size"
          type="number"
          min="1"
          max="42"
          value={courseSize}
          onChange={({ target }) => setCourseSize(target.value)}
        />
        <Button disabled={!courseName} type="submit">
          submit
        </Button>
      </Form>
    </Wrapper>
  )
}
