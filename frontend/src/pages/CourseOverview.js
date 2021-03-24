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
      .then(setCourses)
      .catch((error) => console.error(error))
  }, [])

  const createNewCourse = (courseName, courseDuration) =>
    postCourse(courseName, courseDuration)
      .then((newCourse) => {
        const updatedCourses = [...courses, newCourse]
        setCourses(updatedCourses)
      })
      .catch((error) => console.error(error))

  const deleteCourse = (courseId) => {
    deleteCourseById(courseId).then(() => {
        setCourses(
            courses.filter((course) => course.name !== courseId)
        )
    })

  }

  return (
    <div>
      <CreateNewCourse onAdd={createNewCourse} />
      <CourseList onDeleteCourse={deleteCourse} courses={courses} />
    </div>
  )
}
