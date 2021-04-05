import { Link } from 'react-router-dom'

export default function CourseListItem({ course, onDeleteCourse }) {
  return (
    <li>
      <span>Course: {course.name}</span>
      <span>Size: {course.size}</span>
      <button onClick={() => onDeleteCourse(course.name)} type="button">
        delete
      </button>
      <Link to={`/course/${course.name}`}>Show</Link>
    </li>
  )
}
