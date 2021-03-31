import CreateNewCourse from '../components/CreateNewCourse'
import {
    deleteCourseById,
    getCourses,
    postCourse, postCourseSegments,
} from '../services/apiService'
import { useState, useEffect } from 'react'
import CourseList from '../components/CourseList'

export default function CourseOverview() {
  const [courses, setCourses] = useState([])

  useEffect(() => {
    getCourses()
      .then(setCourses)
      .catch((error) => console.error(error))
  }, [])

  const createNewCourse = (courseName, courseSize) =>
    postCourse(courseName, courseSize)
      .then((newCourse) => {
        const updatedCourses = [...courses, newCourse]
        setCourses(updatedCourses)
      })
      .catch((error) => console.error(error))

    const input = "this could be your input"
  const  createCourseSegments = (courseName, courseSize) =>
      postCourseSegments(courseName, input, courseSize)


    const deleteCourse = (courseId) => {
    deleteCourseById(courseId).then(() => {
      setCourses(courses.filter((course) => course.name !== courseId))
    })
  }

  return (
    <div>
      <CreateNewCourse onAdd={() => {createNewCourse,createCourseSegments}} />
      <CourseList onDeleteCourse={deleteCourse} courses={courses} />
    </div>
  )
}
