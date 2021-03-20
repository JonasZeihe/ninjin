import CreateNewCourse from '../components/CreateNewCourse'
import {
  deleteCourseById,
  getCourses,
  postCourse,
} from '../services/apiService'
import { useState, useEffect } from 'react'
import CourseList from '../components/CourseList'

export default function CourseOverview() {
  const [courses, setCourses] = useState([])

  useEffect(() => {
    getCourses()
      .then((loadedCourses) => setCourses(loadedCourses))
      .catch((error) => console.error(error))
  }, [])

  const createNewCourse = (courseName, courseDuration) =>
    postCourse(courseName, courseDuration)
      .then((newCourse) => {
        const updatedCourses = [...courses, newCourse]
        setCourses(updatedCourses)
      })
      .catch((error) => console.error(error))

  const deleteCourse = (courseToDelete) => {
    deleteCourseById(courseToDelete).then(() => {
      const updatedCourses = courses.filter(
        (course) => course.name !== courseToDelete.name
      )
      setCourses(updatedCourses)
    })
  }

  return (
    <div>
      <CreateNewCourse onAdd={createNewCourse} />
      <CourseList courses={courses} onDeleteCourse={deleteCourse} />
    </div>
  )
}
