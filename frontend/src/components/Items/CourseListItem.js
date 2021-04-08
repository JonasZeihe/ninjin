import { Link } from 'react-router-dom'
import { Button, ButtonLink, Container } from '../GlobalStyle'

export default function CourseListItem({ course, onDeleteCourse }) {
  return (
    <Container>
      <span>Course: {course.courseName}</span>
      <span>Size: {course.courseSize}</span>
      <span>Description: {course.courseDescription}</span>
      <Button onClick={() => onDeleteCourse(course.courseName)} type="button">
        delete
      </Button>
      <ButtonLink as={Link} to={`/course/${course.courseName}`}>
        Show
      </ButtonLink>
    </Container>
  )
}
