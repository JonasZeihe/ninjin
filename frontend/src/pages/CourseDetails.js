import AddNewUser from '../components/AddNewUser'
import {
    deleteByCourseNameAndUserName,
    getCourseByName, getSegmentsByCourseName,
    getUsersByCourseName,
    postUser,
} from '../services/apiService'
import {useState, useEffect} from 'react'
import UserList from '../components/UserList'
import {useParams} from 'react-router-dom'
import {useAuth} from '../auth/AuthContext'
import SegmentList from "../components/SegmentList";

export default function CourseDetails() {
    const [users, setUsers] = useState([])
    const [courseData, setCourseData] = useState()
    const [segmentData, setSegmentData] = useState()
    const {courseName} = useParams()
    const {token} = useAuth()

    useEffect(() => {
        getCourseByName(courseName, token).then(setCourseData)
        getUsersByCourseName(courseName, token).then(setUsers)
        getSegmentsByCourseName(courseName, token).then(setSegmentData)
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
        deleteByCourseNameAndUserName(courseName, userName).then(() => {
            setUsers(users.filter((user) => user.userName !== userName))
        })
    }

    return (
        <div>
            <AddNewUser onAdd={addNewUser}/>
            <UserList users={users} onDeleteUser={deleteUser}/>
            <SegmentList segments={segmentData}/>
        </div>
    )
}
