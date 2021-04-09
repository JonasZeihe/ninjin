import CourseListItem from '../Items/CourseListItem'
import { ListWrapper } from '../GlobalStyle'

export default function CourseList({ courses, onDeleteCourse }) {
  return (
    <ListWrapper>
      {courses.map((course) => (
        <CourseListItem
          key={course.id}
          course={course}
          onDeleteCourse={onDeleteCourse}
        />
      ))}
    </ListWrapper>
  )
}
