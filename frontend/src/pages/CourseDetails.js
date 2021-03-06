import AddNewUserForm from '../components/Forms/AddNewUserForm'
import {
  deleteUserByCourseNameAndUserName,
  getCourseByName,
  getSegmentsByCourseName,
  getUsersByCourseName,
  postUser,
  updateCourseDescription,
  updateCourseImage,
} from '../services/apiService'
import { useState, useEffect } from 'react'
import UserList from '../components/Lists/UserList'
import { useParams } from 'react-router-dom'
import SegmentList from '../components/Lists/SegmentList'
import CourseCard from '../components/Cards/CourseCard'
import EditCourseDescriptionForm from '../components/Forms/EditCourseDescriptionForm'
import { FormWrapper, PageTitle, Wrapper } from '../components/GlobalStyle'
import EditImageForm from '../components/Forms/EditImageForm'
import Spinner from '../components/Spinner'

export default function CourseDetails() {
  const [users, setUsers] = useState([])
  const [courseData, setCourseData] = useState({})
  const [segmentData, setSegmentData] = useState([])
  const { courseName } = useParams()

  useEffect(() => {
    getCourseByName(courseName).then(setCourseData)
    getUsersByCourseName(courseName).then(setUsers)
    getSegmentsByCourseName(courseName)
      .then(setSegmentData)
      .catch((error) => console.error(error))
  }, [courseName])

  if (!courseData || !segmentData) {
    return <Spinner />
  }

  const addNewUser = (userName) =>
    postUser(userName, courseName)
      .then((newUser) => {
        const updatedUsers = [...users, newUser]
        setUsers(updatedUsers)
      })
      .catch((error) => console.error(error))

  const deleteUser = (userName) => {
    deleteUserByCourseNameAndUserName(courseName, userName)
      .then(() => {
        setUsers(users.filter((user) => user.userName !== userName))
      })
      .catch((error) => console.error(error))
  }

  const editCourseDescription = (updatedCourseDescription) =>
    updateCourseDescription(courseName, updatedCourseDescription)
      .then(() => {
        const updatedCourseData = {
          ...courseData,
          courseDescription: updatedCourseDescription,
        }
        setCourseData(updatedCourseData)
      })
      .catch((error) => console.error(error))

  const editCourseImage = (updatedCourseImage) =>
    updateCourseImage(courseName, updatedCourseImage)
      .then(() => {
        const updatedStringData = {
          ...courseData,
          courseImage: updatedCourseImage,
        }
        setCourseData(updatedStringData)
      })
      .catch((error) => console.error(error))

  return (
    <Wrapper>
      <PageTitle>Course Details</PageTitle>
      <CourseCard courseData={courseData} />
      <FormWrapper>
        <EditCourseDescriptionForm onAddDescription={editCourseDescription} />
        <EditImageForm onAddImage={editCourseImage} />
      </FormWrapper>
      <SegmentList segmentList={segmentData} />
        <FormWrapper>
            <AddNewUserForm onAdd={addNewUser} />
        </FormWrapper>
        <UserList usersList={users} onDeleteUser={deleteUser} />

    </Wrapper>
  )
}
