import AddNewUser from '../components/Forms/AddNewUser'
import {
  deleteUserByCourseNameAndUserName,
  getCourseByName,
  getSegmentsByCourseName,
  getUsersByCourseName,
  postUser,
} from '../services/apiService'
import { useState, useEffect } from 'react'
import UserList from '../components/Lists/UserList'
import { useParams } from 'react-router-dom'
import { useAuth } from '../auth/AuthContext'
import SegmentList from '../components/Lists/SegmentList'
import styled from 'styled-components/macro'
import CourseCard from "../components/Cards/CourseCard";

export default function CourseDetails() {
  const [users, setUsers] = useState([""])
  const [courseData, setCourseData] = useState("")
  const [segmentData, setSegmentData] = useState([""])
  const { courseName } = useParams()
  const { token } = useAuth()

  useEffect(() => {
    getCourseByName(courseName, token).then(setCourseData)
    getUsersByCourseName(courseName, token).then(setUsers)
    getSegmentsByCourseName(courseName, token)
      .then(setSegmentData)
      .catch((error) => console.error(error))
  }, [courseName])

  if (!courseData) {
    return (
      <section>
        <p>Waiting for courseData</p>
      </section>
    )
  }
  if (!segmentData) {
    return (
      <section>
        <p>Waiting for segmentData</p>
      </section>
    )
  }

  const addNewUser = (userName) =>
    postUser(userName, courseName)
      .then((newUser) => {
        const updatedUsers = [...users, newUser]
        setUsers(updatedUsers)
      })
      .catch((error) => console.error(error))

  const deleteUser = (userName) => {
    deleteUserByCourseNameAndUserName(courseName, userName).then(() => {
      setUsers(users.filter((user) => user.userName !== userName))
    })
  }

  return (
    <Wrapper>
        {courseData && (
            <CourseCard courseData={courseData}/>
        )}
        {!courseData && <span>Loading courseData</span>}
      <AddNewUser onAdd={addNewUser} />
      <UserList users={users} onDeleteUser={deleteUser} />
      <SegmentList segmentData={segmentData} />
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
