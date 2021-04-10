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
import { Title, Wrapper } from '../components/GlobalStyle'

export default function CourseOverview() {
  const [courses, setCourses] = useState([])

  useEffect(() => {
    getCourses()
      .then(setCourses)
      .catch((error) => console.error(error))
  }, [])

  const courseDescription = 'this could be your course description'
    const courseImage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAn0lEQVR42u3RQREAAAQAMPpn8NBHKDWc2yosq3uCM1KIEIQIQYgQhAhBiBAhQhAiBCFCECIEIUIQghAhCBGCECEIEYIQhAhBiBCECEGIEIQgRAhChCBECEKEIAQhQhAiBCFCECIEIQgRghAhCBGCECEIQYgQhAhBiBCECEEIQoQgRAhChCBECEIQIgQhQhAiBCFCECJEiBCECEGIEIR8tzUiC0AODpoLAAAAAElFTkSuQmCC'
    const createNewCourse = (courseName, courseSize) =>
    postCourse(courseName, courseSize, courseImage, courseDescription)
      .then((newCourse) => {
        const updatedCourses = [...courses, newCourse]
        setCourses(updatedCourses)
      })
      .catch((error) => console.error(error))

  const segmentContent = 'this could be your segment content'
    const segmentImage = 'upload an image here'
    const createCourseSegments = (courseName, courseSize) =>
    postCourseSegments(courseName, segmentImage, segmentContent, courseSize)

  const elementContent = 'this could be your elementContent'
    const elementImage = 'upload an image here'
  const createElements = (courseName, courseSize) =>
    postElements(courseName, elementImage, elementContent, courseSize)

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
