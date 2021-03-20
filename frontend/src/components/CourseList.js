export default function CourseList({ courses, onDeleteCourse }) {
  return (
    <ul>
      {courses.map((course) => (
        <li key={course.name}>
          <span className="course-name">{course.name}</span>
          <span className="course-duration">{course.duration}</span>
          <button onClick={() => onDeleteCourse(course.name)} type="button">
            delete
          </button>
        </li>
      ))}
    </ul>
  )
}
