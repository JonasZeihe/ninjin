import CourseListItem from './CourseListItem'

export default function CourseList({ courses, onDeleteCourse }) {
  return (
    <ul>
      {courses.map((course) => (
        <CourseListItem
          key={course.name}
          course={course}
          onDeleteCourse={onDeleteCourse}
        />
      ))}
    </ul>
  )
}
