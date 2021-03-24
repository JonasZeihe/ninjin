import {Link} from "react-router-dom";

export default function CourseListItem({ course, onDeleteCourse }) {
  return (
     <li>
      <span>Course Name: {course.name}</span>
      <span>Duration: {course.duration}</span>
      <button onClick={() => onDeleteCourse(course.name)} type="button">
        delete
      </button>
         <Link to={`/course/${course.name}`}>
        Show
      </Link>
     </li>
  )
}

