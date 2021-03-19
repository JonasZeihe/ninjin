import AddNewUser from '../components/AddNewUser'
import { postCourse, postUser } from '../services/apiService'
import CreateNewCourse from '../components/CreateNewCourse'

export default function CourseDetails() {
  const addNewUser = (name) =>
    postUser(name).catch((error) => console.error(error))

  return (
    <div>
      <AddNewUser onAdd={addNewUser} />
    </div>
  )
}
