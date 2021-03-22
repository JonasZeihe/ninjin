import styled from 'styled-components/macro'
import CourseList from "./CourseList";

export default function CourseListItem({ course, onDeleteCourse }) {
  return (
     <li>
      <span>Course Name: {course.name}</span>
      <span>Duration: {course.duration}</span>
      <button onClick={() => onDeleteCourse(course.name)} type="button">
        delete
      </button>
     </li>
  )
}

