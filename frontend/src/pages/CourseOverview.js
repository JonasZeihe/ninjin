import AddNewCourseForm from '../components/Forms/AddNewCourseForm'
import {
  deleteCourseById,
  getCourses,
  postCourse,
  postCourseSegments,
  postElements,
} from '../services/apiService'
import { useState, useEffect } from 'react'
import CourseList from '../components/Lists/CourseList'
import {FormWrapper, PageTitle, Wrapper} from '../components/GlobalStyle'
import Spinner from '../components/Spinner'

export default function CourseOverview() {
  const [courses, setCourses] = useState([])

  useEffect(() => {
    getCourses()
      .then(setCourses)
      .catch((error) => console.error(error))
  }, [])

  const courseDescription = 'this could be your course description'
  const courseImage =
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABkCAYAAADDhn8LAAAA0klEQVR42u3TQREAAAQAMPpHc6cSBXz9tg7Lqp4ATikICAKCgCAgCAgCgoAgIAgIAggCgoAgIAgIAoKAICAICAKCCAKCgCAgCAgCgoAgIAgIAoIAgoAgIAgIAoKAICAICAKCgCCAICAICAKCgCAgCAgCgoAggCAgCAgCgoAgIAgIAoKAICAIIAgIAoKAICAICAKCgCAgCCAICAKCgCAgCAgCgoAgIAgIAggCgoAgIAgIAoKAICAICAKCCAKCgCAgCAgCgoAgIAgIAoIAgoAgIAh8Wj6PUyCdIyQbAAAAAElFTkSuQmCC'
  const createNewCourse = (courseName, courseSize) =>
    postCourse(courseName, courseSize, courseImage, courseDescription)
      .then((newCourse) => {
        const updatedCourses = [...courses, newCourse]
        setCourses(updatedCourses)
      })
      .catch((error) => console.error(error))

  const segmentContent = 'this could be your segment content'
  const segmentImage =
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABkCAYAAADDhn8LAAAA0klEQVR42u3TQREAAAQAMPpHc6cSBXz9tg7Lqp4ATikICAKCgCAgCAgCgoAgIAgIAggCgoAgIAgIAoKAICAICAKCCAKCgCAgCAgCgoAgIAgIAoIAgoAgIAgIAoKAICAICAKCgCCAICAICAKCgCAgCAgCgoAggCAgCAgCgoAgIAgIAoKAICAIIAgIAoKAICAICAKCgCAgCCAICAKCgCAgCAgCgoAgIAgIAggCgoAgIAgIAoKAICAICAKCCAKCgCAgCAgCgoAgIAgIAoIAgoAgIAh8Wj6PUyCdIyQbAAAAAElFTkSuQmCC'
  const createCourseSegments = (courseName, courseSize) =>
    postCourseSegments(courseName, segmentImage, segmentContent, courseSize)

  const elementContent = 'this could be your elementContent'
  const elementImage =
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABkCAYAAADDhn8LAAAA0klEQVR42u3TQREAAAQAMPpHc6cSBXz9tg7Lqp4ATikICAKCgCAgCAgCgoAgIAgIAggCgoAgIAgIAoKAICAICAKCCAKCgCAgCAgCgoAgIAgIAoIAgoAgIAgIAoKAICAICAKCgCCAICAICAKCgCAgCAgCgoAggCAgCAgCgoAgIAgIAoKAICAIIAgIAoKAICAICAKCgCAgCCAICAKCgCAgCAgCgoAgIAgIAggCgoAgIAgIAoKAICAICAKCCAKCgCAgCAgCgoAgIAgIAoIAgoAgIAh8Wj6PUyCdIyQbAAAAAElFTkSuQmCC'
  const createElements = (courseName, courseSize) =>
    postElements(courseName, elementImage, elementContent, courseSize)

  const deleteCourse = (courseId) => {
    deleteCourseById(courseId).then(() => {
      setCourses(courses.filter((course) => course.courseName !== courseId))
    })
  }

  return (
    <Wrapper>
      <PageTitle>Course Overview</PageTitle>
      <FormWrapper>
      <AddNewCourseForm
        onAddCourse={createNewCourse}
        onAddSegment={createCourseSegments}
        onAddElement={createElements}
      />
      </FormWrapper>
      {courses && (
        <CourseList onDeleteCourse={deleteCourse} courses={courses} />
      )}
      {!courses && <Spinner />}
    </Wrapper>
  )
}
