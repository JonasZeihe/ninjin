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
        <CreateNewCourse
        onAddCourse={createNewCourse}
        onAddSegment={createCourseSegments}
        onAddElement={createElements}
      />
      <CourseList onDeleteCourse={deleteCourse} courses={courses} />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background-image: linear-gradient(#2c2c91, white);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
  width: 100%;
`
