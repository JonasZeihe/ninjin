import CourseListItem from './CourseListItem'
import styled from 'styled-components/macro'

export default function CourseList({ courses, onDeleteCourse }) {
  return (
    <Wrapper>
      {courses.map((course) => (
        <CourseListItem
          key={course.name}
          course={course}
          onDeleteCourse={onDeleteCourse}
        />
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  list-style-type: none;
`
