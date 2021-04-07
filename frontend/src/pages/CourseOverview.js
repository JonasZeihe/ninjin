import CreateNewCourse from '../components/Forms/CreateNewCourse'
import {
  deleteCourseById,
  getCourses,
  postCourse,
  postCourseSegments,
  postElements,
} from '../services/apiService'
import { useState, useEffect } from 'react'
import CourseList from '../components/Lists/CourseList'
import styled from 'styled-components/macro'
import {Title, Wrapper} from "../components/GlobalStyle";

export default function CourseOverview() {
  const [courses, setCourses] = useState([])

  useEffect(() => {
    getCourses()
      .then(setCourses)
      .catch((error) => console.error(error))
  }, [])

    const courseDescription = 'this could be your course description'
    const createNewCourse = (courseName, courseSize) =>
    postCourse(courseName, courseSize, courseDescription)
      .then((newCourse) => {
        const updatedCourses = [...courses, newCourse]
        setCourses(updatedCourses)
      })
      .catch((error) => console.error(error))

  const segmentContent = 'this could be your segment content'
  const createCourseSegments = (courseName, courseSize) =>
    postCourseSegments(courseName, segmentContent, courseSize)

  const elementContent = 'this could be your elementContent'
  const createElements = (courseName, courseSize) =>
    postElements(courseName, elementContent, courseSize)

  const deleteCourse = (courseId) => {
    deleteCourseById(courseId).then(() => {
      setCourses(courses.filter((course) => course.name !== courseId))
    })
  }

  return (
    <Wrapper>
      <Title>Course Overview</Title>
        <CreateNewCourse
        onAddCourse={createNewCourse}
        onAddSegment={createCourseSegments}
        onAddElement={createElements}
      />
      <CourseList onDeleteCourse={deleteCourse} courses={courses} />
    </Wrapper>
  )
}


