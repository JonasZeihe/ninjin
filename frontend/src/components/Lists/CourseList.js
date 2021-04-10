import CourseListItem from '../Items/CourseListItem'
import { ListWrapper } from '../GlobalStyle'

export default function CourseList({ courses, onDeleteCourse }) {
  return (
    <ListWrapper>
      {courses.map((course, index) => (
        <CourseListItem
            key={`${course.courseName}_${index}`}
          courseItem={course}
          onDeleteCourseItem={onDeleteCourse}
        />
      ))}
    </ListWrapper>
  )
}
