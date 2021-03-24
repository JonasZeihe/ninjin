import AddNewUser from '../components/AddNewUser'
import {deleteUserById, getCourses, getUsers, postUser} from '../services/apiService'
import {useState, useEffect} from 'react'
import UserList from '../components/UserList'
import {useParams} from "react-router-dom";

export default function CourseDetails() {
    const [users, setUsers] = useState([])
    const { courseName } = useParams()

    useEffect(() => {
        getUsers()
            .then(setUsers)
            .catch((error) => console.error(error))
    }, [])

    const addNewUser = (name) =>
        postUser(name, courseName )
            .then((newUser) => {
                const updatedUsers = [...users, newUser]
                setUsers(updatedUsers)
            })
            .catch((error) => console.error(error))

    const deleteUser = (userId) => {
        deleteUserById(userId).then(() => {
            setUsers(
                users.filter((user) => user.name !== userId))
        })
    }

    return (
        <div>
            <AddNewUser onAdd={addNewUser}/>
            <UserList users={users} onDeleteUser={deleteUser}/>
        </div>
    )
}
