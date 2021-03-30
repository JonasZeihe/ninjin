import { useState } from 'react'
import styled from 'styled-components/macro'

export default function CreateNewCourse({ onAdd }) {
  const [courseName, setCourseName] = useState('')
  const [courseSize, setCourseSize] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!courseName) {
      return
    }
    onAdd(courseName, courseSize)
    setCourseName('')
    setCourseSize('')
  }
  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          value={courseName}
          onChange={({ target }) => setCourseName(target.value)}
        />
        <input
          disabled={!courseName}
          type="number"
          value={courseSize}
          onChange={({ target }) => setCourseSize(target.value)}
        />
        <Button disabled={!courseName} type="submit">
          Create a new course
        </Button>
      </Form>
    </Wrapper>
  )
}

const Form = styled.form`
  display: flex;
  padding: 10% 25% 0em 25%;
  input {
    flex-grow: 1;
  }
`

const Wrapper = styled.div``

const Button = styled.button`
  background: #babeae;
  border-radius: 5px;
  border: none;
  font-size: 0.75em;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: inherit;
  padding: 0.5em 0.5em 0.5em 0.5em;
  margin-left: 0.25em;
  :disabled {
    background: #807d7a;
  }
`
