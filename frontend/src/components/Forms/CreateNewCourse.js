import { useState } from 'react'
import styled from 'styled-components/macro'

export default function CreateNewCourse({
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
      <Form onSubmit={handleSubmit}>
        <Title>Create a new course and set a size</Title>
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
        <ButtonLink disabled={!courseName} type="submit">
          submit
        </ButtonLink>
      </Form>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
`

const Form = styled.form`
  margin: 0 auto;
  max-width: 414px;
  padding: 1.3rem;
  display: flex;
  flex-direction: column;
  position: relative;
`

const Input = styled.input`
  max-width: 100%;
  padding: 11px 13px;
  background: #f9f9fa;
  margin-bottom: 0.9rem;
  border-radius: 4px;
  outline: 0;
  border: 1px solid rgba(245, 245, 245, 0.7);
  font-size: 14px;
  transition: all 0.3s ease-out;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.1);
  :focus,
  :hover {
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.15), 0 1px 5px rgba(0, 0, 0, 0.1);
  }
`

const ButtonLink = styled.button`
  max-width: 100%;
  align-content: center;
  align-self: center;
  padding: 0.3em;
  color: rgb(253, 249, 243);
  background: #bf7279;
  border: none;
  border-radius: 3px;
  text-decoration: none;
  outline: 0;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-out;
  :hover {
    background: #de4655;
  }
`

const Title = styled.h2`
  font-weight: normal;
  color: #2a2a29;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  text-align: center;
`
