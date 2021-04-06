import CourseListItem from '../Items/CourseListItem'
import styled from 'styled-components/macro'

export default function CourseList({ courses, onDeleteCourse }) {
  return (
    <Wrapper>
      {courses.map((course) => (
        <CourseListItem
          key={course.courseName}
          course={course}
          onDeleteCourse={onDeleteCourse}
        />
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  list-style-type: none;
  flex-flow: column;
  flex-wrap: wrap;
  flex-direction: row;
`
